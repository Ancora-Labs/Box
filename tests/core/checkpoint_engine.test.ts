import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { writeCheckpoint } from "../../src/core/checkpoint_engine.js";

describe("checkpoint_engine", () => {
  let tmpDir: string;

  beforeEach(async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "box-checkpoint-"));
  });

  afterEach(async () => {
    await fs.rm(tmpDir, { recursive: true, force: true });
  });

  it("writes checkpoint JSON into state directory", async () => {
    const config = { paths: { stateDir: tmpDir } };
    const payload = { cycle: 1, status: "ok" };
    const filePath = await writeCheckpoint(config, payload);
    const raw = await fs.readFile(filePath, "utf8");
    assert.deepEqual(JSON.parse(raw), payload);
  });

  it("negative path: writes distinct files on successive calls", async () => {
    const config = { paths: { stateDir: tmpDir } };
    const a = await writeCheckpoint(config, { id: "a" });
    await new Promise((resolve) => setTimeout(resolve, 5));
    const b = await writeCheckpoint(config, { id: "b" });
    assert.notEqual(a, b);
  });
});

