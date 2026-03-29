import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import {
  scanProject,
  computeScanConfidence,
  SCAN_BASELINE_FILE,
  SCAN_CONFIDENCE_THRESHOLD
} from "../../src/core/project_scanner.js";

describe("project_scanner", () => {
  let rootDir: string;

  beforeEach(async () => {
    rootDir = await fs.mkdtemp(path.join(os.tmpdir(), "box-scan-"));
  });

  afterEach(async () => {
    await fs.rm(rootDir, { recursive: true, force: true });
  });

  it("derives commands and repository signals from package.json", async () => {
    await fs.mkdir(path.join(rootDir, "src"), { recursive: true });
    await fs.writeFile(path.join(rootDir, "src", "app.ts"), "export const x = 1;\n", "utf8");
    await fs.writeFile(path.join(rootDir, "README.md"), "# test\n", "utf8");
    await fs.writeFile(path.join(rootDir, "package.json"), JSON.stringify({
      name: "sample-box",
      scripts: { build: "tsc", test: "node --test", lint: "eslint ." },
      dependencies: { react: "1.0.0" },
      devDependencies: { typescript: "5.0.0" }
    }), "utf8");

    const result = await scanProject({ rootDir });
    assert.equal(result.hasPackageJson, true);
    assert.equal(result.packageName, "sample-box");
    assert.equal(result.commands.build, "npm run build");
    assert.ok(result.frameworks.includes("react"));
    assert.ok(result.frameworks.includes("typescript"));
    assert.ok(result.repositorySignals.srcFileCount >= 1);
  });

  it("negative path: falls back to defaults when package.json is invalid", async () => {
    await fs.writeFile(path.join(rootDir, "package.json"), "{ invalid", "utf8");
    const result = await scanProject({ rootDir });
    assert.equal(result.hasPackageJson, false);
    assert.equal(result.commands.install, "npm ci");
    assert.equal(result.commands.build, null);
  });
});

// ── computeScanConfidence ─────────────────────────────────────────────────────

describe("computeScanConfidence", () => {
  it("returns 1.0 when no files changed", () => {
    assert.equal(computeScanConfidence(0, 100), 1.0);
  });

  it("returns 0 when all files changed", () => {
    assert.equal(computeScanConfidence(100, 100), 0);
  });

  it("returns 0 when totalFileCount is 0 (force full scan on empty baseline)", () => {
    assert.equal(computeScanConfidence(0, 0), 0);
  });

  it("returns ~0.7 when 30% of files changed", () => {
    const confidence = computeScanConfidence(30, 100);
    assert.ok(confidence >= 0.69 && confidence <= 0.71, `expected ~0.7, got ${confidence}`);
  });

  it("clamps to 0 when changedFileCount > totalFileCount", () => {
    assert.equal(computeScanConfidence(200, 100), 0);
  });
});

// ── SCAN_BASELINE_FILE and SCAN_CONFIDENCE_THRESHOLD constants ────────────────

describe("scan constants", () => {
  it("SCAN_BASELINE_FILE is the expected filename", () => {
    assert.equal(SCAN_BASELINE_FILE, "scan_baseline.json");
  });

  it("SCAN_CONFIDENCE_THRESHOLD is 0.7", () => {
    assert.equal(SCAN_CONFIDENCE_THRESHOLD, 0.7);
  });
});

// ── Incremental scan: baseline persistence ────────────────────────────────────

describe("project_scanner — incremental scan baseline", () => {
  let rootDir2: string;
  let stateDir: string;

  beforeEach(async () => {
    rootDir2 = await fs.mkdtemp(path.join(os.tmpdir(), "box-inc-root-"));
    stateDir  = await fs.mkdtemp(path.join(os.tmpdir(), "box-inc-state-"));
  });

  afterEach(async () => {
    await fs.rm(rootDir2,  { recursive: true, force: true });
    await fs.rm(stateDir, { recursive: true, force: true });
  });

  it("writes a scan_baseline.json when stateDir is provided and no baseline exists", async () => {
    await fs.writeFile(path.join(rootDir2, "package.json"), JSON.stringify({ name: "x" }), "utf8");
    await fs.mkdir(path.join(rootDir2, "src"), { recursive: true });
    await fs.writeFile(path.join(rootDir2, "src", "main.ts"), "// hello\n", "utf8");

    await scanProject({ rootDir: rootDir2, stateDir });

    const baselinePath = path.join(stateDir, SCAN_BASELINE_FILE);
    const raw = await fs.readFile(baselinePath, "utf8");
    const baseline = JSON.parse(raw);

    assert.ok(Array.isArray(baseline.files), "baseline.files must be an array");
    assert.ok(baseline.files.length > 0, "baseline must contain at least one file");
    assert.ok(typeof baseline.scannedAt === "string", "baseline.scannedAt must be a string");
  });

  it("negative path: no stateDir → no baseline written, scan still returns valid signals", async () => {
    await fs.writeFile(path.join(rootDir2, "package.json"), JSON.stringify({ name: "y" }), "utf8");

    const result = await scanProject({ rootDir: rootDir2 });

    assert.ok(typeof result.repositorySignals.scannedFileCount === "number");
    // Without stateDir, no baseline file should be created in rootDir
    let baselineExists = false;
    try {
      await fs.access(path.join(rootDir2, SCAN_BASELINE_FILE));
      baselineExists = true;
    } catch { /* expected */ }
    assert.equal(baselineExists, false, "baseline must not be written when stateDir is absent");
  });
});

