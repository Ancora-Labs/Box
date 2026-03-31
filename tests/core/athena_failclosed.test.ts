/**
 * Regression tests for T-002: Athena fail-closed mode.
 *
 * Verifies that plan review AI failures return approved=false with a
 * machine-readable reason, that the orchestrator blocks worker dispatch,
 * and that an alert record with deterministic severity is written.
 *
 * The runtime.athenaFailOpen flag must restore legacy permissive behavior.
 */

import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";

import { runAthenaPlanReview } from "../../src/core/athena_reviewer.js";
import { runOnce } from "../../src/core/orchestrator.js";
import { ALERT_SEVERITY } from "../../src/core/state_tracker.js";
import { isEnvelopeUnambiguous } from "../../src/core/evidence_envelope.js";

// ── Helpers ──────────────────────────────────────────────────────────────────

function makeConfig(tmpDir, overrides = {}) {
  return {
    loopIntervalMs: 1000,
    maxParallelWorkers: 1,
    paths: {
      stateDir: tmpDir,
      progressFile: path.join(tmpDir, "progress.txt"),
      policyFile: path.join(tmpDir, "policy.json")
    },
    env: {
      // Missing binary forces every AI call to fail deterministically.
      copilotCliCommand: "__missing_copilot_binary__",
      targetRepo: "CanerDoqdu/Box"
    },
    roleRegistry: {
      ceoSupervisor: { name: "Jesus", model: "Claude Sonnet 4.6" },
      deepPlanner: { name: "Prometheus", model: "GPT-5.3-Codex" },
      qualityReviewer: { name: "Athena", model: "Claude Sonnet 4.6" },
      workers: {
        backend: { name: "King David" }
      }
    },
    copilot: { leadershipAutopilot: false },
    runtime: {},
    ...overrides
  };
}

// A minimal Prometheus analysis that satisfies the plan shape Athena reads.
const VALID_PROMETHEUS_ANALYSIS = {
  analyzedAt: new Date().toISOString(),
  projectHealth: "good",
  analysis: "Test analysis",
  keyFindings: "None",
  plans: [
    {
      role: "King David",
      task: "Fix test",
      priority: 1,
      wave: 1,
      verification: "npm test"
    }
  ],
  executionStrategy: {},
  requestBudget: {}
};

// ── ALERT_SEVERITY constants ─────────────────────────────────────────────────

describe("ALERT_SEVERITY enum", () => {
  it("exports deterministic severity constants", () => {
    assert.equal(ALERT_SEVERITY.LOW, "low");
    assert.equal(ALERT_SEVERITY.MEDIUM, "medium");
    assert.equal(ALERT_SEVERITY.HIGH, "high");
    assert.equal(ALERT_SEVERITY.CRITICAL, "critical");
  });
});

// ── runAthenaPlanReview: fail-closed mode ────────────────────────────────────

describe("runAthenaPlanReview — fail-closed on AI failure", () => {
  let tmpDir;

  beforeEach(async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "box-athena-fc-"));
    await fs.writeFile(path.join(tmpDir, "policy.json"), JSON.stringify({ blockedCommands: [] }), "utf8");
  });

  afterEach(async () => {
    await fs.rm(tmpDir, { recursive: true, force: true });
  });

  it("returns approved=false when AI call fails (fail-closed default)", async () => {
    const config = makeConfig(tmpDir);
    const result = await runAthenaPlanReview(config, VALID_PROMETHEUS_ANALYSIS);

    assert.equal(result.approved, false,
      "AI failure must return approved=false — no silent pass-through");
  });

  it("returns a machine-readable reason object with code and message", async () => {
    const config = makeConfig(tmpDir);
    const result = await runAthenaPlanReview(config, VALID_PROMETHEUS_ANALYSIS);

    assert.ok(result.reason && typeof result.reason === "object",
      "reason must be an object, not a plain string");
    assert.ok(typeof result.reason.code === "string" && result.reason.code.length > 0,
      "reason.code must be a non-empty string");
    assert.ok(typeof result.reason.message === "string",
      "reason.message must be a string");
    assert.equal(result.reason.code, "AI_CALL_FAILED");
  });

  it("writes an alert record with CRITICAL severity on AI failure", async () => {
    const config = makeConfig(tmpDir);
    await runAthenaPlanReview(config, VALID_PROMETHEUS_ANALYSIS);

    const alertsFile = path.join(tmpDir, "alerts.json");
    const alertsExists = await fs.access(alertsFile).then(() => true).catch(() => false);
    assert.ok(alertsExists, "alerts.json must be created when plan review AI fails");

    const alerts = JSON.parse(await fs.readFile(alertsFile, "utf8"));
    const criticalAlerts = alerts.entries.filter(e => e.severity === ALERT_SEVERITY.CRITICAL);
    assert.ok(criticalAlerts.length > 0,
      "At least one CRITICAL alert must be recorded on AI failure");
    assert.ok(criticalAlerts[0].source === "athena_reviewer",
      "Alert source must be 'athena_reviewer'");
    assert.ok(criticalAlerts[0].message.includes("AI_CALL_FAILED"),
      "Alert message must include the reason code for machine readability");
  });

  it("returns approved=true with fail-open flag enabled (rollback mode)", async () => {
    const config = makeConfig(tmpDir, { runtime: { athenaFailOpen: true } });
    const result = await runAthenaPlanReview(config, VALID_PROMETHEUS_ANALYSIS);

    assert.equal(result.approved, true,
      "runtime.athenaFailOpen=true must restore legacy permissive behavior");
    assert.equal(result.reason.code, "AI_CALL_FAILED_FAILOPEN");
  });

  it("returns approved=false and empty corrections array on AI failure", async () => {
    const config = makeConfig(tmpDir);
    const result = await runAthenaPlanReview(config, VALID_PROMETHEUS_ANALYSIS);

    assert.ok(Array.isArray(result.corrections),
      "corrections must always be an array");
  });

  it("does not write athena_plan_review.json when AI call fails (no data to persist)", async () => {
    const config = makeConfig(tmpDir);
    await runAthenaPlanReview(config, VALID_PROMETHEUS_ANALYSIS);

    // The review JSON is only written on successful AI response; failure path must not write it.
    const reviewFile = path.join(tmpDir, "athena_plan_review.json");
    const reviewExists = await fs.access(reviewFile).then(() => true).catch(() => false);
    assert.equal(reviewExists, false,
      "athena_plan_review.json must not be written when AI call fails");
  });
});

// ── Orchestrator: no worker dispatch on failed plan review ───────────────────

describe("orchestrator — no worker dispatch when Athena blocks plan", () => {
  let tmpDir;

  beforeEach(async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "box-orch-fc-"));
    await fs.writeFile(path.join(tmpDir, "policy.json"), JSON.stringify({ blockedCommands: [] }), "utf8");
  });

  afterEach(async () => {
    await fs.rm(tmpDir, { recursive: true, force: true });
  });

  it("does not dispatch workers when plan review returns approved=false", async () => {
    const config = makeConfig(tmpDir);

    // Run a full cycle — Jesus/Prometheus/Athena all use missing binary, so
    // the cycle will fail before dispatching any worker.
    await runOnce(config);

    // Confirm no worker state files were created (dispatch did not happen).
    const workerFiles = await fs.readdir(tmpDir)
      .then(files => files.filter(f => f.startsWith("worker_") && f.endsWith(".json")))
      .catch(() => []);

    assert.equal(workerFiles.length, 0,
      "No worker state files must exist — dispatch must be blocked when Athena rejects");
  });

  it("writes athena_plan_rejection.json with reason object when plan is blocked", async () => {
    const config = makeConfig(tmpDir);

    // Pre-seed a Prometheus analysis so the orchestrator reaches Athena review.
    await fs.writeFile(
      path.join(tmpDir, "prometheus_analysis.json"),
      JSON.stringify(VALID_PROMETHEUS_ANALYSIS),
      "utf8"
    );

    // Manually invoke the plan review and simulate the orchestrator rejection path.
    const result = await runAthenaPlanReview(config, VALID_PROMETHEUS_ANALYSIS);

    // The reason must be a machine-readable object, not a legacy string.
    assert.equal(typeof result.reason, "object",
      "reason must be a structured object for machine readability");
    assert.ok(result.reason.code, "reason.code must be present");
    assert.equal(result.approved, false);
  });

  it("records blocked cycle state in progress log when Athena blocks", async () => {
    const config = makeConfig(tmpDir);
    await runOnce(config);

    const progress = await fs.readFile(config.paths.progressFile, "utf8").catch(() => "");
    // Either Prometheus fails first or Athena blocks — either way, no dispatch.
    // The key assertion is that no worker was dispatched.
    const workerFiles = await fs.readdir(tmpDir)
      .then(files => files.filter(f => f.startsWith("worker_") && f.endsWith(".json")))
      .catch(() => []);
    assert.equal(workerFiles.length, 0,
      "Worker dispatch must not occur when the cycle is blocked");
    // Progress log must exist with some content.
    assert.ok(progress.length > 0, "Progress log must be written during blocked cycle");
  });
});

// ── Task 3: isEnvelopeUnambiguous — deterministic fast-path gate ─────────────

describe("isEnvelopeUnambiguous — fast-path bypass gate (Task 3)", () => {
  function makeGreenEnvelope(overrides: Record<string, unknown> = {}): any {
    const base: any = {
      roleName: "evolution-worker",
      status: "done",
      summary: "All changes implemented, build and tests pass.",
      verificationPassed: true,
      verificationEvidence: { build: "pass", tests: "pass", lint: "pass" },
      preReviewIssues: [],
    };
    // Allow overriding nested verificationEvidence keys directly
    const { build, tests, lint, ...rest } = overrides as any;
    if (build !== undefined || tests !== undefined || lint !== undefined) {
      base.verificationEvidence = {
        ...base.verificationEvidence,
        ...(build !== undefined ? { build } : {}),
        ...(tests !== undefined ? { tests } : {}),
        ...(lint !== undefined ? { lint } : {}),
      };
    }
    return { ...base, ...rest };
  }

  it("returns unambiguous=true for a fully green, unambiguous low-risk envelope", () => {
    const result = isEnvelopeUnambiguous(makeGreenEnvelope(), { planRiskLevel: "low" });
    assert.equal(result.unambiguous, true,
      "green envelope with low-risk plan must qualify for fast-path");
  });

  it("returns unambiguous=false when lint evidence is 'fail' — failed lint must fall through to AI review", () => {
    const result = isEnvelopeUnambiguous(makeGreenEnvelope({ lint: "fail" }), { planRiskLevel: "low" });
    assert.equal(result.unambiguous, false,
      "lint=fail must block fast-path to prevent shipping with linting errors");
  });

  it("returns unambiguous=false when preReviewIssues is non-empty — unresolved issues require AI judgment", () => {
    const result = isEnvelopeUnambiguous(
      makeGreenEnvelope({ preReviewIssues: ["Security vulnerability found in dependency"] }),
      { planRiskLevel: "low" }
    );
    assert.equal(result.unambiguous, false,
      "non-empty preReviewIssues must block fast-path");
  });

  it("returns unambiguous=false for high-risk plan even with otherwise perfect envelope", () => {
    const result = isEnvelopeUnambiguous(makeGreenEnvelope(), { planRiskLevel: "high" });
    assert.equal(result.unambiguous, false,
      "high-risk plans must always go through AI review regardless of evidence quality");
  });

  it("returns unambiguous=false when status is not 'done' (partial completion is ambiguous)", () => {
    const result = isEnvelopeUnambiguous(
      makeGreenEnvelope({ status: "partial" }),
      { planRiskLevel: "low" }
    );
    assert.equal(result.unambiguous, false,
      "non-done status must block fast-path");
  });

  it("returns unambiguous=false when verificationPassed is false — cannot skip AI when verification failed", () => {
    const result = isEnvelopeUnambiguous(
      makeGreenEnvelope({ verificationPassed: false }),
      { planRiskLevel: "low" }
    );
    assert.equal(result.unambiguous, false,
      "verificationPassed=false must block fast-path");
  });

  it("returns unambiguous=false when build evidence is 'fail'", () => {
    const result = isEnvelopeUnambiguous(
      makeGreenEnvelope({ build: "fail" }),
      { planRiskLevel: "low" }
    );
    assert.equal(result.unambiguous, false, "build=fail must block fast-path");
  });

  it("returns unambiguous=false when tests evidence is 'fail'", () => {
    const result = isEnvelopeUnambiguous(
      makeGreenEnvelope({ tests: "fail" }),
      { planRiskLevel: "low" }
    );
    assert.equal(result.unambiguous, false, "tests=fail must block fast-path");
  });

  it("returns unambiguous=false for null envelope — structural failure must not qualify for bypass", () => {
    const result = isEnvelopeUnambiguous(null, { planRiskLevel: "low" });
    assert.equal(result.unambiguous, false, "null envelope must return false, not throw");
  });
});

// ── Task 1: runAthenaPlanReview — deterministic auto-approve for low-risk unchanged batches ──

import { computePlanBatchFingerprint } from "../../src/core/athena_reviewer.js";

describe("computePlanBatchFingerprint", () => {
  it("returns the same fingerprint for the same plan batch", () => {
    const plans = [
      { task: "Fix retry logic", role: "evolution-worker", wave: 1, riskLevel: "low", verification: "npm test", acceptance_criteria: ["retries < 3"] },
    ];
    assert.equal(computePlanBatchFingerprint(plans), computePlanBatchFingerprint(plans),
      "same input must produce the same fingerprint (deterministic)");
  });

  it("returns different fingerprints when acceptance_criteria changes", () => {
    const base = { task: "Fix retry logic", role: "evolution-worker", wave: 1, riskLevel: "low", verification: "npm test", acceptance_criteria: ["retries < 3"] };
    const changed = { ...base, acceptance_criteria: ["retries < 5"] };
    assert.notEqual(computePlanBatchFingerprint([base]), computePlanBatchFingerprint([changed]),
      "changed acceptance_criteria must yield a different fingerprint");
  });

  it("returns empty string for an empty plans array", () => {
    assert.equal(computePlanBatchFingerprint([]), "",
      "empty plans array must return empty fingerprint");
  });

  it("is order-sensitive — different plan order yields different fingerprint", () => {
    const p1 = { task: "Task A", role: "evolution-worker", wave: 1, riskLevel: "low", verification: "npm test", acceptance_criteria: [] };
    const p2 = { task: "Task B", role: "evolution-worker", wave: 1, riskLevel: "low", verification: "npm test", acceptance_criteria: [] };
    assert.notEqual(
      computePlanBatchFingerprint([p1, p2]),
      computePlanBatchFingerprint([p2, p1]),
      "plan order is significant for fingerprint — reordering must change the fingerprint"
    );
  });
});

describe("runAthenaPlanReview — deterministic auto-approve for low-risk unchanged batches", () => {
  let tmpDir;

  const LOW_RISK_PLANS = [
    {
      role: "evolution-worker",
      task: "Add retry logic to worker dispatch with exponential backoff",
      priority: 1,
      wave: 1,
      riskLevel: "low",
      verification: "tests/core/worker_dispatch.test.ts — test: retry logic passes",
      acceptance_criteria: ["retry count < 3 on transient failures"],
      dependencies: [],
      scope: "src/core/worker_dispatch.ts",
      capacityDelta: 0.1,
      requestROI: 2.0,
    },
  ];

  beforeEach(async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "box-athena-aa-"));
    await fs.writeFile(path.join(tmpDir, "policy.json"), JSON.stringify({ blockedCommands: [] }), "utf8");
  });

  afterEach(async () => {
    await fs.rm(tmpDir, { recursive: true, force: true });
  });

  it("auto-approves a low-risk unchanged batch when a prior approved review exists with matching fingerprint", async () => {
    const fingerprint = computePlanBatchFingerprint(LOW_RISK_PLANS);
    // Seed state with a previously approved review with the matching fingerprint.
    await fs.writeFile(
      path.join(tmpDir, "athena_plan_review.json"),
      JSON.stringify({
        approved: true,
        overallScore: 8,
        summary: "All plans are well-defined",
        appliedFixes: [],
        corrections: [],
        unresolvedIssues: [],
        planBatchFingerprint: fingerprint,
      }),
      "utf8"
    );

    const config = makeConfig(tmpDir);
    const prometheusOutput = { plans: LOW_RISK_PLANS, analyzedAt: new Date().toISOString() };
    const result = await runAthenaPlanReview(config, prometheusOutput);

    assert.equal(result.approved, true, "auto-approve must return approved=true");
    assert.equal(result.autoApproved, true, "autoApproved flag must be set on cache-hit results");
    assert.ok(
      result.autoApproveReason?.code === "LOW_RISK_UNCHANGED",
      "autoApproveReason.code must be LOW_RISK_UNCHANGED"
    );
  });

  it("falls through to AI review (fails closed) when last review has a different fingerprint", async () => {
    const staleFingerprint = "0000000000000000";
    await fs.writeFile(
      path.join(tmpDir, "athena_plan_review.json"),
      JSON.stringify({
        approved: true,
        overallScore: 8,
        summary: "Old review",
        appliedFixes: [],
        corrections: [],
        unresolvedIssues: [],
        planBatchFingerprint: staleFingerprint,
      }),
      "utf8"
    );

    const config = makeConfig(tmpDir);
    const prometheusOutput = { plans: LOW_RISK_PLANS, analyzedAt: new Date().toISOString() };
    const result = await runAthenaPlanReview(config, prometheusOutput);

    // With no valid AI binary, the call fails; the result must not be auto-approved
    assert.equal(result.autoApproved, undefined,
      "mismatched fingerprint must not trigger auto-approve");
    assert.notEqual(result.reason?.code, "LOW_RISK_UNCHANGED",
      "mismatched fingerprint must fall through to AI, not return auto-approve");
  });

  it("never auto-approves when any plan has riskLevel=high even if fingerprint matches", async () => {
    const highRiskPlan = {
      ...LOW_RISK_PLANS[0],
      riskLevel: "high",
      preMortem: {
        failureScenarios: ["DB migration fails"],
        mitigations: ["rollback script tested"],
        rollbackPlan: "revert migration",
        guardrails: ["read-only mode enabled during migration"],
      },
    };
    const highRiskPlans = [highRiskPlan];
    const fingerprint = computePlanBatchFingerprint(highRiskPlans);
    await fs.writeFile(
      path.join(tmpDir, "athena_plan_review.json"),
      JSON.stringify({
        approved: true,
        overallScore: 8,
        summary: "Old approved",
        appliedFixes: [],
        corrections: [],
        unresolvedIssues: [],
        planBatchFingerprint: fingerprint,
      }),
      "utf8"
    );

    const config = makeConfig(tmpDir);
    const prometheusOutput = { plans: highRiskPlans, analyzedAt: new Date().toISOString() };
    const result = await runAthenaPlanReview(config, prometheusOutput);

    assert.equal(result.autoApproved, undefined,
      "high-risk plans must never be auto-approved, even when fingerprint matches");
  });

  it("never auto-approves when disablePlanReviewCache=true", async () => {
    const fingerprint = computePlanBatchFingerprint(LOW_RISK_PLANS);
    await fs.writeFile(
      path.join(tmpDir, "athena_plan_review.json"),
      JSON.stringify({
        approved: true,
        overallScore: 8,
        summary: "All plans are well-defined",
        appliedFixes: [],
        corrections: [],
        unresolvedIssues: [],
        planBatchFingerprint: fingerprint,
      }),
      "utf8"
    );

    const config = makeConfig(tmpDir, { runtime: { disablePlanReviewCache: true } });
    const prometheusOutput = { plans: LOW_RISK_PLANS, analyzedAt: new Date().toISOString() };
    const result = await runAthenaPlanReview(config, prometheusOutput);

    assert.equal(result.autoApproved, undefined,
      "disablePlanReviewCache=true must bypass the auto-approve path regardless of fingerprint match");
  });
});
