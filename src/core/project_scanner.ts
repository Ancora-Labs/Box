import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

/** File name for the cached scan baseline (stored in config.stateDir). */
export const SCAN_BASELINE_FILE = "scan_baseline.json";

/**
 * Minimum confidence required to use the incremental scan path.
 * If confidence drops below this threshold a full scan is triggered instead.
 */
export const SCAN_CONFIDENCE_THRESHOLD = 0.7;

const IGNORED_DIRS = new Set([
  ".git",
  "node_modules",
  "dist",
  "build",
  "coverage",
  ".box-work",
  "state/backups"
]);

const MAX_SCAN_FILES = 1200;
const MAX_PREVIEW_FILES = 12;
const PREVIEW_BYTES = 2000;

function inferCommands(packageJson) {
  const scripts = packageJson?.scripts ?? {};
  return {
    install: scripts.ci ? "npm run ci" : "npm ci",
    build: scripts.build ? "npm run build" : null,
    test: scripts.test ? "npm test -- --ci" : null,
    lint: scripts.lint ? "npm run lint" : null
  };
}

function toSetKeys(obj) {
  return new Set(Object.keys(obj || {}).map((k) => String(k).toLowerCase()));
}

function detectFrameworks(pkg) {
  const deps = toSetKeys(pkg?.dependencies);
  const devDeps = toSetKeys(pkg?.devDependencies);
  const all = new Set([...deps, ...devDeps]);

  const frameworks = [];
  if (all.has("next")) frameworks.push("nextjs");
  if (all.has("react") || all.has("react-dom")) frameworks.push("react");
  if (all.has("vue")) frameworks.push("vue");
  if (all.has("svelte")) frameworks.push("svelte");
  if (all.has("express") || all.has("fastify") || all.has("koa")) frameworks.push("node-api");
  if (all.has("jest") || all.has("vitest") || all.has("mocha")) frameworks.push("test-runner");
  if (all.has("playwright") || all.has("cypress")) frameworks.push("e2e");
  if (all.has("typescript")) frameworks.push("typescript");

  return frameworks;
}

function detectDomains(scripts, frameworks) {
  const domains = new Set();
  const s = scripts || {};
  if (s.build || frameworks.includes("nextjs") || frameworks.includes("react")) {
    domains.add("frontend");
  }
  if (frameworks.includes("node-api") || s.start || s.dev) {
    domains.add("backend");
  }
  if (s.test || frameworks.includes("test-runner") || frameworks.includes("e2e")) {
    domains.add("quality");
  }
  if (s.lint) {
    domains.add("code-quality");
  }
  return [...domains];
}

function isTestLike(filePath) {
  const lower = String(filePath || "").toLowerCase();
  return lower.endsWith(".test.ts")
    || lower.endsWith(".spec.js")
    || lower.includes("/__tests__/")
    || lower.endsWith(".test.ts")
    || lower.endsWith(".spec.ts");
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function pickPreviewTargets(files) {
  const preferred = [
    "readme.md",
    "package.json",
    "box.config.json",
    "docker-compose.yml",
    "src/cli.ts",
    "src/core/orchestrator.ts",
    "src/core/project_scanner.ts",
    "src/core/task_planner.ts",
    "src/core/roadmap_engine.ts"
  ];

  const normalizedFiles = files.map((f) => String(f).replace(/\\/g, "/"));
  const selected = [];
  for (const target of preferred) {
    const hit = normalizedFiles.find((item) => item.toLowerCase() === target);
    if (hit) {
      selected.push(hit);
    }
  }

  for (const file of normalizedFiles) {
    if (selected.length >= MAX_PREVIEW_FILES) {
      break;
    }
    if (selected.includes(file)) {
      continue;
    }
    if (file.startsWith("src/") || isTestLike(file)) {
      selected.push(file);
    }
  }

  return selected.slice(0, MAX_PREVIEW_FILES);
}

// ── Incremental scan helpers ───────────────────────────────────────────────────

/**
 * Compute confidence for an incremental scan.
 *
 * confidence = 1 - (changedFileCount / totalFileCount)
 *   1.0 → no changes detected → incremental scan is safe
 *   0.0 → all files changed   → full scan required
 *
 * Returns 0 when totalFileCount is 0 to force a full scan on an empty baseline.
 */
export function computeScanConfidence(changedFileCount: number, totalFileCount: number): number {
  if (totalFileCount === 0) return 0;
  const ratio = Math.min(changedFileCount / totalFileCount, 1);
  return Math.round((1 - ratio) * 100) / 100;
}

/**
 * Use `git status --porcelain` to retrieve all working-tree changes relative to HEAD.
 *
 * Returns `{ added: string[], removed: string[], ok: boolean }`.
 * `added`   — new or modified files (relative to rootDir, forward-slash separated)
 * `removed` — deleted files
 * `ok`      — false when git is unavailable or the directory is not a repository;
 *              callers must treat ok=false as confidence=0 and run a full scan.
 */
async function getGitChangedFiles(rootDir: string): Promise<{ added: string[]; removed: string[]; ok: boolean }> {
  try {
    const { stdout } = await execFileAsync("git", ["-C", rootDir, "status", "--porcelain", "--no-renames"], {
      timeout: 10_000
    });
    const added: string[] = [];
    const removed: string[] = [];
    for (const rawLine of stdout.split("\n")) {
      const line = rawLine.trim();
      if (!line) continue;
      const xy = line.slice(0, 2);
      const filePart = line.slice(3).replace(/\\/g, "/");
      if (xy.includes("D")) {
        removed.push(filePart);
      } else {
        added.push(filePart);
      }
    }
    return { added, removed, ok: true };
  } catch {
    return { added: [], removed: [], ok: false };
  }
}

/**
 * Load the cached scan baseline from `stateDir/scan_baseline.json`.
 * Returns null when the file does not exist or cannot be parsed.
 */
async function loadScanBaseline(stateDir: string): Promise<{ files: string[]; scannedAt: string } | null> {
  try {
    const raw = await fs.readFile(path.join(stateDir, SCAN_BASELINE_FILE), "utf8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed?.files)) return parsed;
    return null;
  } catch {
    return null;
  }
}

/**
 * Persist the current file list as the scan baseline for future incremental scans.
 * Failures are silently swallowed — a missing baseline just forces the next full scan.
 */
async function saveScanBaseline(stateDir: string, files: string[]): Promise<void> {
  try {
    await fs.mkdir(stateDir, { recursive: true });
    await fs.writeFile(
      path.join(stateDir, SCAN_BASELINE_FILE),
      JSON.stringify({ files, scannedAt: new Date().toISOString() }, null, 2) + "\n",
      "utf8"
    );
  } catch { /* best-effort; next scan will fall back to full */ }
}

/**
 * Apply a git diff to the cached file list and return the updated list.
 *
 * Files in `added` that are not already in the list are appended.
 * Files in `removed` are filtered out.
 * The list is capped at MAX_SCAN_FILES.
 */
function applyDiffToFileList(files: string[], added: string[], removed: string[]): string[] {
  const removedSet = new Set(removed);
  const existingSet = new Set(files);
  const updated = files.filter(f => !removedSet.has(f));
  for (const f of added) {
    if (!existingSet.has(f) && updated.length < MAX_SCAN_FILES) {
      updated.push(f);
    }
  }
  return updated;
}

async function buildRepositorySignals(rootDir) {
  const queue = [""];
  const files = [];

  while (queue.length > 0 && files.length < MAX_SCAN_FILES) {
    const relDir = queue.shift();
    const absDir = path.join(rootDir, relDir);
    let entries;
    try {
      entries = await fs.readdir(absDir, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      const relPath = relDir ? `${relDir}/${entry.name}` : entry.name;
      const normalized = relPath.replace(/\\/g, "/");
      if (entry.isDirectory()) {
        const lower = normalized.toLowerCase();
        if (IGNORED_DIRS.has(lower) || lower.startsWith("state/backups")) {
          continue;
        }
        queue.push(normalized);
        continue;
      }
      if (entry.isFile()) {
        files.push(normalized);
        if (files.length >= MAX_SCAN_FILES) {
          break;
        }
      }
    }
  }

  return _buildSignalsFromFiles(rootDir, files);
}

/**
 * Compute repository signals from an already-collected file list.
 * Separated from the directory-walk so both the full and incremental
 * code paths can reuse the same stat-computation logic.
 */
async function _buildSignalsFromFiles(rootDir: string, files: string[]) {
  const extensionHistogram: Record<string, any> = {};
  let srcFileCount = 0;
  let testFileCount = 0;
  let jsFileCount = 0;
  let tsFileCount = 0;
  for (const relFile of files) {
    const ext = path.extname(relFile).toLowerCase() || "[noext]";
    extensionHistogram[ext] = (extensionHistogram[ext] || 0) + 1;
    if (relFile.startsWith("src/")) {
      srcFileCount += 1;
    }
    if (isTestLike(relFile)) {
      testFileCount += 1;
    }
    if (ext === ".js" || ext === ".mjs" || ext === ".cjs") {
      jsFileCount += 1;
    }
    if (ext === ".ts" || ext === ".tsx") {
      tsFileCount += 1;
    }
  }

  const topLevelDirs = [...new Set(files.map((f) => String(f).split("/")[0]))]
    .filter((dir) => dir && !dir.includes("."))
    .slice(0, 20);

  const previewTargets = pickPreviewTargets(files);
  const keyFilePreviews = [];
  for (const relFile of previewTargets) {
    const abs = path.join(rootDir, relFile);
    try {
      const content = await fs.readFile(abs, "utf8");
      keyFilePreviews.push({
        path: relFile,
        preview: String(content).slice(0, PREVIEW_BYTES)
      });
    } catch {
      // Ignore unreadable files; keep scan deterministic.
    }
  }

  let workflowFileCount = 0;
  try {
    const workflowsDir = path.join(rootDir, ".github", "workflows");
    const workflowEntries = await fs.readdir(workflowsDir, { withFileTypes: true });
    workflowFileCount = workflowEntries.filter((entry) => {
      if (!entry.isFile()) {
        return false;
      }
      const lower = String(entry.name || "").toLowerCase();
      return lower.endsWith(".yml") || lower.endsWith(".yaml");
    }).length;
  } catch { /* already 0 */ }

  return {
    scannedFileCount: files.length,
    topLevelDirs,
    extensionHistogram,
    srcFileCount,
    testFileCount,
    jsFileCount,
    tsFileCount,
    hasDockerCompose: await pathExists(path.join(rootDir, "docker-compose.yml")),
    hasReadme: await pathExists(path.join(rootDir, "README.md")),
    hasGithubActions: await pathExists(path.join(rootDir, ".github", "workflows")),
    hasDockerDir: await pathExists(path.join(rootDir, "docker")),
    hasPackageLock: await pathExists(path.join(rootDir, "package-lock.json")),
    hasYarnLock: await pathExists(path.join(rootDir, "yarn.lock")),
    hasPnpmLock: await pathExists(path.join(rootDir, "pnpm-lock.yaml")),
    workflowFileCount,
    keyFilePreviews
  };
}

export async function scanProject(config) {
  const packagePath = path.join(config.rootDir, "package.json");
  const result = {
    timestamp: new Date().toISOString(),
    rootDir: config.rootDir,
    hasPackageJson: false,
    packageName: null,
    scripts: {},
    commands: {},
    frameworks: [],
    domains: [],
    dependencyCount: 0,
    repositorySignals: {
      scannedFileCount: 0,
      topLevelDirs: [],
      extensionHistogram: {},
      srcFileCount: 0,
      testFileCount: 0,
      jsFileCount: 0,
      tsFileCount: 0,
      hasDockerCompose: false,
      hasReadme: false,
      hasGithubActions: false,
      hasDockerDir: false,
      hasPackageLock: false,
      hasYarnLock: false,
      hasPnpmLock: false,
      workflowFileCount: 0,
      keyFilePreviews: []
    }
  };

  try {
    const raw = await fs.readFile(packagePath, "utf8");
    const pkg = JSON.parse(raw);
    result.hasPackageJson = true;
    result.packageName = pkg.name ?? null;
    result.scripts = pkg.scripts ?? {};
    result.commands = inferCommands(pkg);
    result.frameworks = detectFrameworks(pkg);
    result.domains = detectDomains(result.scripts, result.frameworks);
    result.dependencyCount =
      Object.keys(pkg?.dependencies || {}).length +
      Object.keys(pkg?.devDependencies || {}).length;
  } catch {
    result.commands = {
      install: "npm ci",
      build: null,
      test: null,
      lint: null
    };
    result.frameworks = [];
    result.domains = [];
    result.dependencyCount = 0;
  }

  result.repositorySignals = await _buildRepositorySignalsWithIncrementalFallback(config);

  if (result.repositorySignals.testFileCount > 0 && !result.domains.includes("quality")) {
    result.domains.push("quality");
  }
  if (result.repositorySignals.srcFileCount > 0 && !result.domains.includes("backend")) {
    result.domains.push("backend");
  }
  if (result.repositorySignals.hasDockerDir && !result.domains.includes("devops")) {
    result.domains.push("devops");
  }

  return result;
}

/**
 * Resolve repository signals using incremental (diff-based) scanning when possible.
 *
 * Strategy:
 *   1. If no stateDir is configured or no baseline exists → full scan, save baseline.
 *   2. Fetch changed files via git status.  If git is unavailable → full scan.
 *   3. Compute confidence = 1 - (changedFiles / totalFiles).
 *   4. If confidence < SCAN_CONFIDENCE_THRESHOLD (0.7) → full scan, refresh baseline.
 *   5. Otherwise → apply diff to baseline file list and recompute signals.
 *
 * The incremental path avoids a full directory walk for repos where few files change
 * between orchestrator cycles, reducing I/O and latency.
 */
async function _buildRepositorySignalsWithIncrementalFallback(config) {
  const stateDir = config.stateDir ?? config.paths?.stateDir ?? null;

  // No stateDir → can't persist baseline; always do a full scan
  if (!stateDir) {
    return buildRepositorySignals(config.rootDir);
  }

  const baseline = await loadScanBaseline(stateDir);

  // No prior baseline → full scan required
  if (!baseline) {
    const signals = await buildRepositorySignals(config.rootDir);
    // Persist baseline using the file list reconstructed from the full scan walk.
    // We approximate the file list from the scannedFileCount; the actual list isn't
    // returned by buildRepositorySignals, so we run a lightweight list-only walk.
    const fileList = await _collectFileList(config.rootDir);
    await saveScanBaseline(stateDir, fileList);
    return signals;
  }

  // Try to get git diff since last scan
  const diff = await getGitChangedFiles(config.rootDir);
  if (!diff.ok) {
    // git unavailable → fall back to full scan and refresh baseline
    const signals = await buildRepositorySignals(config.rootDir);
    const fileList = await _collectFileList(config.rootDir);
    await saveScanBaseline(stateDir, fileList);
    return signals;
  }

  const changedCount = diff.added.length + diff.removed.length;
  const confidence = computeScanConfidence(changedCount, baseline.files.length);

  if (confidence < SCAN_CONFIDENCE_THRESHOLD) {
    // Too many changes → full scan and refresh baseline
    const signals = await buildRepositorySignals(config.rootDir);
    const fileList = await _collectFileList(config.rootDir);
    await saveScanBaseline(stateDir, fileList);
    return signals;
  }

  // Confidence is high enough → incremental update
  const updatedFiles = applyDiffToFileList(baseline.files, diff.added, diff.removed);
  await saveScanBaseline(stateDir, updatedFiles);
  return _buildSignalsFromFiles(config.rootDir, updatedFiles);
}

/**
 * Collect the full file list from a directory walk without computing signals.
 * Used to persist a baseline after a full scan.
 */
async function _collectFileList(rootDir: string): Promise<string[]> {
  const queue = [""];
  const files: string[] = [];

  while (queue.length > 0 && files.length < MAX_SCAN_FILES) {
    const relDir = queue.shift()!;
    const absDir = path.join(rootDir, relDir);
    let entries;
    try {
      entries = await fs.readdir(absDir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      const relPath = relDir ? `${relDir}/${entry.name}` : entry.name;
      const normalized = relPath.replace(/\\/g, "/");
      if (entry.isDirectory()) {
        const lower = normalized.toLowerCase();
        if (IGNORED_DIRS.has(lower) || lower.startsWith("state/backups")) continue;
        queue.push(normalized);
        continue;
      }
      if (entry.isFile()) {
        files.push(normalized);
        if (files.length >= MAX_SCAN_FILES) break;
      }
    }
  }
  return files;
}
