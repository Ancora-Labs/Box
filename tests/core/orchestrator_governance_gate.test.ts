import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { evaluatePreDispatchGovernanceGate, BLOCK_REASON } from "../../src/core/orchestrator.js";

describe("orchestrator governance gate dry-run parity", () => {
  it("returns non-blocked gate decision in clear-state dry-run", async () => {
    const stateDir = await fs.mkdtemp(path.join(os.tmpdir(), "box-gate-dryrun-"));
    try {
      const config = {
        paths: { stateDir },
        env: { targetRepo: "CanerDoqdu/Box" },
        canary: { enabled: false },
        systemGuardian: { enabled: false },
        governanceFreeze: { enabled: false, manualOverrideActive: false },
      };
      const result = await evaluatePreDispatchGovernanceGate(config, [], "dry-run-clear");
      assert.equal(result.blocked, false);
      assert.equal(result.reason, null);
    } finally {
      await fs.rm(stateDir, { recursive: true, force: true });
    }
  });

  it("negative path: reports freeze block in dry-run", async () => {
    const stateDir = await fs.mkdtemp(path.join(os.tmpdir(), "box-gate-dryrun-freeze-"));
    try {
      const config = {
        paths: { stateDir },
        env: { targetRepo: "CanerDoqdu/Box" },
        canary: { enabled: false },
        systemGuardian: { enabled: false },
        governanceFreeze: { enabled: true, manualOverrideActive: true },
      };
      const result = await evaluatePreDispatchGovernanceGate(config, [], "dry-run-freeze");
      assert.equal(result.blocked, true);
      assert.ok(String(result.reason || "").startsWith(BLOCK_REASON.GOVERNANCE_FREEZE_ACTIVE));
    } finally {
      await fs.rm(stateDir, { recursive: true, force: true });
    }
  });
});

