import fs from "node:fs/promises";
import path from "node:path";

// Only match backtick-quoted paths that start with known repo-local prefixes.
// This prevents false positives from absolute paths or environment-specific paths.
// Handles:
//   - Standard extension files: src/core/orchestrator.ts
//   - .Dockerfile extension:    docker/worker.Dockerfile
//   - Bare Dockerfile filename: docker/worker/Dockerfile
const REPO_LOCAL_PATH_RE =
  /`((?:src|tests|docker|scripts|\.github)\/(?:[^`\s,)/]*\/)*(?:[^`\s,)]+\.(?:ts|js|cjs|mjs|json|yml|yaml|md|ps1|sh|Dockerfile)|Dockerfile))`/g;

// Matches TypeScript/JS import alias references in backtick-quoted paths.
// Handles aliases like @core/foo.ts, @/bar.ts, ~/baz.ts
const ALIAS_PATH_RE =
  /`((?:@core|@tests|@scripts|@\/)\/(?:[^`\s,)/]*\/)*(?:[^`\s,)]+\.(?:ts|js|cjs|mjs|json|yml|yaml|md)))`/g;

// Known TS/JS alias mappings → repo-local prefix
const ALIAS_MAP: Record<string, string> = {
  "@core/":    "src/core/",
  "@tests/":   "tests/",
  "@scripts/": "scripts/",
  "@/":        "src/",
  "~/":        "src/",
};

const DOC_EXTENSIONS = new Set([".md"]);

/**
 * Deprecated terminology patterns.
 * Docs containing these tokens may reference removed or renamed APIs.
 * Each entry has a pattern and a human-readable replacement hint.
 */
export const DEPRECATED_TOKENS: Array<{ pattern: RegExp; hint: string }> = [
  // Governance terminology superseded by governance_contract / governance_freeze
  { pattern: /\bgovernance_verdict\b/g,            hint: "use governance_contract decision fields" },
  { pattern: /\bgovernance_review_started\b/g,     hint: "use GOVERNANCE_GATE_EVALUATED event" },
  { pattern: /\bgovernance_review_completed\b/g,   hint: "use GOVERNANCE_GATE_EVALUATED event" },
  { pattern: /\bgovernance_signal\b/g,             hint: "use GOVERNANCE_GATE_EVALUATED or governance_canary events" },
  // Event terminology: pre-v1 box event names
  { pattern: /\bbox\.v0\.[a-z]+\.[a-zA-Z]+/g,     hint: "use current box.v1.* event names" },
  { pattern: /\bPLAN_STARTED\b/g,                  hint: "use PLANNING_ANALYSIS_STARTED" },
  { pattern: /\bCYCLE_STARTED\b/g,                 hint: "use ORCHESTRATION_CYCLE_STARTED" },
  { pattern: /\bWORKER_STARTED\b/g,                hint: "use PLANNING_TASK_DISPATCHED" },
  { pattern: /\bWORKER_COMPLETED\b/g,              hint: "use VERIFICATION_WORKER_DONE" },
  // Resume/dispatch terminology superseded by runResumeDispatch / dispatch_checkpoint
  { pattern: /\bresume_workers\b/g,                hint: "use runResumeDispatch / dispatch_checkpoint" },
  { pattern: /\bresumeWorkers\b/g,                 hint: "use runResumeDispatch" },
  { pattern: /\bresume_dispatch\b/g,               hint: "use runResumeDispatch / tryResumeDispatchFromCheckpoint" },
  { pattern: /\bresumeDispatch\b/g,                hint: "use runResumeDispatch" },
];

export interface StaleRef {
  docPath: string;
  referencedPath: string;
  line: number;
}

export interface DeprecatedTokenRef {
  docPath: string;
  token: string;
  hint: string;
  line: number;
}

export interface ArchitectureDriftReport {
  scannedDocs: string[];
  presentCount: number;
  staleCount: number;
  staleReferences: StaleRef[];
  deprecatedTokenCount: number;
  deprecatedTokenRefs: DeprecatedTokenRef[];
}

/**
 * Recurse into a directory, yielding relative paths (from rootDir) for all .md files.
 * Handles nested subdirectory trees.
 */
async function collectDocFilesRecursive(rootDir: string, relDir: string, results: string[]): Promise<void> {
  const absDir = path.join(rootDir, relDir);
  let entries;
  try {
    entries = await fs.readdir(absDir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const relPath = `${relDir}/${entry.name}`;
    if (entry.isDirectory()) {
      await collectDocFilesRecursive(rootDir, relPath, results);
    } else if (entry.isFile() && DOC_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      results.push(relPath);
    }
  }
}

async function listDocFiles(rootDir: string, docDirs: string[]): Promise<string[]> {
  const results: string[] = [];
  for (const docDir of docDirs) {
    await collectDocFilesRecursive(rootDir, docDir, results);
  }
  return results;
}

/**
 * Normalize a TypeScript/JS import alias reference to its repo-local path.
 * Returns null if the path does not match any known alias.
 *
 * Examples:
 *   @core/orchestrator.ts  → src/core/orchestrator.ts
 *   @/config.ts            → src/config.ts
 *   ~/utils.ts             → src/utils.ts
 */
export function normalizeAliasPath(aliasedPath: string): string | null {
  for (const [prefix, resolved] of Object.entries(ALIAS_MAP)) {
    if (aliasedPath.startsWith(prefix)) {
      return resolved + aliasedPath.slice(prefix.length);
    }
  }
  return null;
}

function extractRepoLocalPaths(content: string): Array<{ referencedPath: string; line: number }> {
  const refs: Array<{ referencedPath: string; line: number }> = [];
  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    // Match standard repo-local paths
    const re = new RegExp(REPO_LOCAL_PATH_RE.source, "g");
    let match: RegExpExecArray | null;
    while ((match = re.exec(lines[i])) !== null) {
      refs.push({ referencedPath: match[1], line: i + 1 });
    }
    // Match and normalize alias-prefixed paths
    const reAlias = new RegExp(ALIAS_PATH_RE.source, "g");
    let aliasMatch: RegExpExecArray | null;
    while ((aliasMatch = reAlias.exec(lines[i])) !== null) {
      const normalized = normalizeAliasPath(aliasMatch[1]);
      if (normalized) {
        refs.push({ referencedPath: normalized, line: i + 1 });
      }
    }
  }
  return refs;
}

/**
 * Scan document content for deprecated token usage.
 * Returns one entry per (token, line) pair detected.
 */
export function detectDeprecatedTokensInContent(
  docPath: string,
  content: string
): DeprecatedTokenRef[] {
  const found: DeprecatedTokenRef[] = [];
  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    for (const { pattern, hint } of DEPRECATED_TOKENS) {
      const re = new RegExp(pattern.source, "g");
      let match: RegExpExecArray | null;
      while ((match = re.exec(lines[i])) !== null) {
        found.push({ docPath, token: match[0], hint, line: i + 1 });
      }
    }
  }
  return found;
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function checkArchitectureDrift(options: {
  rootDir: string;
  docDirs?: string[];
}): Promise<ArchitectureDriftReport> {
  const { rootDir, docDirs = ["docs"] } = options;

  const docFiles = await listDocFiles(rootDir, docDirs);
  const staleReferences: StaleRef[] = [];
  const deprecatedTokenRefs: DeprecatedTokenRef[] = [];
  let presentCount = 0;
  const seen = new Set<string>();

  for (const docRelPath of docFiles) {
    const absDocPath = path.join(rootDir, docRelPath);
    let content: string;
    try {
      content = await fs.readFile(absDocPath, "utf8");
    } catch {
      continue;
    }

    const refs = extractRepoLocalPaths(content);
    for (const { referencedPath, line } of refs) {
      // De-duplicate: only check each unique path once per doc
      const key = `${docRelPath}::${referencedPath}`;
      if (seen.has(key)) continue;
      seen.add(key);

      const absRef = path.join(rootDir, referencedPath);
      if (await fileExists(absRef)) {
        presentCount++;
      } else {
        staleReferences.push({ docPath: docRelPath, referencedPath, line });
      }
    }

    // Scan for deprecated token usage in this doc
    const tokenRefs = detectDeprecatedTokensInContent(docRelPath, content);
    deprecatedTokenRefs.push(...tokenRefs);
  }

  return {
    scannedDocs: docFiles,
    presentCount,
    staleCount: staleReferences.length,
    staleReferences,
    deprecatedTokenCount: deprecatedTokenRefs.length,
    deprecatedTokenRefs
  };
}
