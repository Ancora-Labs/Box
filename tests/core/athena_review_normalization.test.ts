import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  normalizeAthenaReviewPayload,
  MANDATORY_ACTIONABLE_PACKET_FIELDS,
  PREMORTEM_RISK_LEVEL,
  validatePatchedPlan,
  normalizePatchedPlansForDispatch,
} from "../../src/core/athena_reviewer.js";

const BASE_PLANS = [
  {
    role: "evolution-worker",
    task: "Add deterministic dispatch verification coverage",
    verification: "npm test",
    target_files: ["src/core/orchestrator.js", "tests/core/orchestrator.test.ts"],
    acceptance_criteria: ["dispatch path is covered"],
    riskLevel: "low",
  },
  {
    role: "evolution-worker",
    task: "Strengthen scheduler contract validation",
    verification: "node --test tests/core/scheduler.test.ts",
    target_files: ["src/core/scheduler.js"],
    acceptance_criteria: ["invalid contract blocks execution"],
    riskLevel: PREMORTEM_RISK_LEVEL.HIGH,
    premortem: {
      riskLevel: "high",
      scenario: "Scheduler contract refactor could silently accept malformed work packets during dispatch.",
      failurePaths: ["Invalid packets bypass validation"],
      mitigations: ["Keep validator checks explicit"],
      detectionSignals: ["Contract tests begin failing"],
      guardrails: ["Reject malformed packets before dispatch"],
      rollbackPlan: "Revert scheduler validation changes"
    }
  }
];

describe("normalizeAthenaReviewPayload", () => {
  it("synthesizes reviewer contract fields when Athena omits them", () => {
    const normalized = normalizeAthenaReviewPayload({
      summary: "Approved. Plan is measurable and ready for execution."
    }, BASE_PLANS);

    assert.equal(normalized.payload.approved, true);
    assert.deepEqual(normalized.payload.corrections, []);
    assert.equal(normalized.payload.planReviews.length, BASE_PLANS.length);
    assert.ok(normalized.synthesizedFields.includes("approved"));
    assert.ok(normalized.synthesizedFields.includes("corrections"));
    assert.ok(normalized.synthesizedFields.includes("planReviews"));
  });

  it("derives corrections from plan review issues and stays fail-closed", () => {
    const normalized = normalizeAthenaReviewPayload({
      planReviews: [
        {
          planIndex: 0,
          role: "evolution-worker",
          measurable: false,
          successCriteriaClear: true,
          verificationConcrete: true,
          scopeDefined: true,
          preMortemComplete: true,
          issues: ["task is still vague"],
          suggestion: "name the exact contract"
        }
      ],
      summary: "Plan still needs work."
    }, BASE_PLANS);

    assert.equal(normalized.payload.approved, false);
    assert.equal(normalized.payload.corrections.length, 1);
    assert.match(normalized.payload.corrections[0], /task is still vague/i);
    assert.ok(normalized.synthesizedFields.includes("approved"));
    assert.ok(normalized.synthesizedFields.includes("corrections"));
  });

  it("accepts nested decision payloads and normalizes alias fields", () => {
    const normalized = normalizeAthenaReviewPayload({
      decision: {
        status: "approved",
        plan_reviews: [
          {
            role: "evolution-worker",
            issues: []
          }
        ],
        reason: "All critical gates passed."
      }
    }, BASE_PLANS);

    assert.equal(normalized.payload.approved, true);
    assert.equal(normalized.payload.planReviews.length, 1);
    assert.equal(normalized.payload.summary, "All critical gates passed.");
    assert.ok(normalized.synthesizedFields.includes("approved"));
    assert.ok(normalized.synthesizedFields.includes("corrections"));
    assert.ok(normalized.synthesizedFields.includes("planReviews"));
  });

  it("fails closed when reviewer status is blocked, even if summary text sounds positive", () => {
    const normalized = normalizeAthenaReviewPayload({
      status: "blocked",
      planReviews: [
        {
          planIndex: 0,
          role: "evolution-worker",
          measurable: true,
          issues: []
        }
      ],
      summary: "Looks good overall."
    }, BASE_PLANS);

    assert.equal(normalized.payload.approved, false);
    assert.deepEqual(normalized.payload.corrections, []);
  });

  // ── MANDATORY_ACTIONABLE_PACKET_FIELDS ────────────────────────────────────

  it("exports MANDATORY_ACTIONABLE_PACKET_FIELDS as a frozen array with approved and planReviews", () => {
    assert.ok(Object.isFrozen(MANDATORY_ACTIONABLE_PACKET_FIELDS), "must be frozen");
    assert.ok(MANDATORY_ACTIONABLE_PACKET_FIELDS.includes("approved"));
    assert.ok(MANDATORY_ACTIONABLE_PACKET_FIELDS.includes("planReviews"));
  });

  // ── missingFields tracking ────────────────────────────────────────────────

  it("populates missingFields when both approved and planReviews are absent from the AI response", () => {
    const normalized = normalizeAthenaReviewPayload({
      summary: "Everything looks good."
    }, BASE_PLANS);

    assert.ok(Array.isArray(normalized.missingFields), "missingFields must be an array");
    assert.ok(normalized.missingFields.includes("approved"), "approved must be in missingFields when only summary is present");
    assert.ok(normalized.missingFields.includes("planReviews"), "planReviews must be in missingFields when absent");
  });

  it("does NOT populate missingFields when an explicit boolean approved is provided", () => {
    const normalized = normalizeAthenaReviewPayload({
      approved: true,
      planReviews: [{ planIndex: 0, role: "evolution-worker", issues: [] }]
    }, BASE_PLANS);

    assert.ok(!normalized.missingFields.includes("approved"), "approved must NOT be in missingFields when explicit boolean is given");
    assert.ok(!normalized.missingFields.includes("planReviews"), "planReviews must NOT be in missingFields when array is provided");
  });

  it("does NOT add approved to missingFields when an unambiguous status alias is used", () => {
    const normalized = normalizeAthenaReviewPayload({
      status: "approved",
      planReviews: [{ planIndex: 0, role: "evolution-worker", issues: [] }]
    }, BASE_PLANS);

    assert.ok(!normalized.missingFields.includes("approved"),
      "approved must NOT be in missingFields when status='approved' alias is provided");
  });

  it("does NOT add approved to missingFields when status is a rejection alias", () => {
    const normalized = normalizeAthenaReviewPayload({
      status: "rejected",
      planReviews: [{ planIndex: 0, role: "evolution-worker", issues: [] }]
    }, BASE_PLANS);

    assert.ok(!normalized.missingFields.includes("approved"),
      "approved must NOT be in missingFields when status='rejected' alias is provided");
  });

  it("does NOT add planReviews to missingFields when plan_reviews alias is used", () => {
    const normalized = normalizeAthenaReviewPayload({
      approved: false,
      plan_reviews: [{ planIndex: 0, role: "evolution-worker", issues: ["vague task"] }]
    }, BASE_PLANS);

    assert.ok(!normalized.missingFields.includes("planReviews"),
      "planReviews must NOT be in missingFields when plan_reviews alias is present");
  });

  it("only adds to missingFields the fields that are genuinely absent — not those aliased", () => {
    // planReviews provided as alias (plan_reviews) but approved truly missing (only in summary text)
    const normalized = normalizeAthenaReviewPayload({
      plan_reviews: [{ planIndex: 0, role: "evolution-worker", issues: [] }],
      summary: "Looks good — approved."
    }, BASE_PLANS);

    assert.ok(normalized.missingFields.includes("approved"),
      "approved must be in missingFields when only inferred from summary text");
    assert.ok(!normalized.missingFields.includes("planReviews"),
      "planReviews must NOT be in missingFields when plan_reviews alias is present");
  });
});

// ── Task 3: Patched-plan validation gate ──────────────────────────────────────

describe("validatePatchedPlan (Task 3)", () => {
  it("passes a well-formed patched plan", () => {
    const result = validatePatchedPlan({
      target_files: ["src/core/orchestrator.ts"],
      scope: "src/core/",
      acceptance_criteria: ["CI passes", "Tests green"],
    });
    assert.equal(result.valid, true);
    assert.equal(result.issues.length, 0);
  });

  it("fails when target_files is missing", () => {
    const result = validatePatchedPlan({ scope: "src/core/", acceptance_criteria: ["test passes"] });
    assert.equal(result.valid, false);
    assert.ok(result.issues.some(i => /target_files/i.test(i)));
  });

  it("fails when target_files is an empty array", () => {
    const result = validatePatchedPlan({ target_files: [], scope: "src/", acceptance_criteria: ["test passes"] });
    assert.equal(result.valid, false);
    assert.ok(result.issues.some(i => /target_files/i.test(i)));
  });

  it("fails when target_files contains '...' placeholder", () => {
    const result = validatePatchedPlan({
      target_files: ["src/core/foo.ts", "..."],
      scope: "src/core/",
      acceptance_criteria: ["test passes"],
    });
    assert.equal(result.valid, false);
    assert.ok(result.issues.some(i => /placeholder/i.test(i)));
  });

  it("fails when target_files contains '<placeholder>' style", () => {
    const result = validatePatchedPlan({
      target_files: ["<path/to/file.ts>"],
      scope: "src/",
      acceptance_criteria: ["test passes"],
    });
    assert.equal(result.valid, false);
    assert.ok(result.issues.some(i => /placeholder/i.test(i)));
  });

  it("fails when target_files contains 'path/to/' generic prefix", () => {
    const result = validatePatchedPlan({
      target_files: ["path/to/module.ts"],
      scope: "src/",
      acceptance_criteria: ["passes"],
    });
    assert.equal(result.valid, false);
    assert.ok(result.issues.some(i => /placeholder/i.test(i)));
  });

  it("fails when scope is missing", () => {
    const result = validatePatchedPlan({ target_files: ["src/core/foo.ts"], acceptance_criteria: ["test"] });
    assert.equal(result.valid, false);
    assert.ok(result.issues.some(i => /scope/i.test(i)));
  });

  it("fails when acceptance_criteria is empty", () => {
    const result = validatePatchedPlan({ target_files: ["src/core/foo.ts"], scope: "src/core/", acceptance_criteria: [] });
    assert.equal(result.valid, false);
    assert.ok(result.issues.some(i => /acceptance_criteria/i.test(i)));
  });

  it("negative path: non-object plan is invalid", () => {
    const result = validatePatchedPlan("not an object");
    assert.equal(result.valid, false);
    assert.ok(result.issues.length > 0);
  });

  it("accepts targetFiles alias for target_files", () => {
    const result = validatePatchedPlan({
      targetFiles: ["src/core/foo.ts"],
      scope: "src/core/",
      acceptance_criteria: ["passes"],
    });
    assert.equal(result.valid, true);
  });
});

// ── normalizePatchedPlansForDispatch ─────────────────────────────────────────

describe("normalizePatchedPlansForDispatch", () => {
  const ORIGINAL_PLAN = {
    task: "Implement user authentication module",
    role: "evolution-worker",
    wave: 1,
    priority: 2,
    verification: "tests/core/auth.test.ts — test: should authenticate user",
    dependencies: [],
    acceptance_criteria: ["all tests pass"],
    capacityDelta: 0.1,
    requestROI: 2.0,
    scope: "src/core/auth/",
    target_files: ["src/core/auth.ts"],
    riskLevel: "low",
  };

  it("returns empty array for empty patchedPlans", () => {
    const result = normalizePatchedPlansForDispatch([], [ORIGINAL_PLAN]);
    assert.deepEqual(result, []);
  });

  it("returns empty array when patchedPlans is not an array", () => {
    const result = normalizePatchedPlansForDispatch(null as unknown as unknown[], [ORIGINAL_PLAN]);
    assert.deepEqual(result, []);
  });

  it("inherits required contract fields from original when patched plan omits them", () => {
    const patched = {
      task: "Implement user authentication module",
      role: "evolution-worker",
      scope: "src/core/auth/",
      target_files: ["src/core/auth.ts"],
      acceptance_criteria: ["all tests pass"],
      // capacityDelta, requestROI, wave, verification omitted
    };
    const result = normalizePatchedPlansForDispatch([patched], [ORIGINAL_PLAN]);
    assert.equal(result.length, 1);
    assert.equal(result[0].capacityDelta, 0.1, "capacityDelta should be inherited from original");
    assert.equal(result[0].requestROI, 2.0, "requestROI should be inherited from original");
    assert.equal(result[0].wave, 1, "wave should be inherited from original");
    assert.equal(result[0].verification, ORIGINAL_PLAN.verification, "verification should be inherited from original");
  });

  it("Athena patched values override original values", () => {
    const patched = {
      ...ORIGINAL_PLAN,
      task: "Implement updated authentication module",
      wave: 2,
      capacityDelta: 0.3,
    };
    const result = normalizePatchedPlansForDispatch([patched], [ORIGINAL_PLAN]);
    assert.equal(result[0].task, "Implement updated authentication module", "patched task should override original");
    assert.equal(result[0].wave, 2, "patched wave should override original");
    assert.equal(result[0].capacityDelta, 0.3, "patched capacityDelta should override original");
    assert.equal(result[0].requestROI, 2.0, "unchanged fields should be inherited from original");
  });

  it("normalizes targetFiles alias to target_files when target_files is absent", () => {
    const patched = {
      task: "Refactor module",
      role: "evolution-worker",
      scope: "src/",
      acceptance_criteria: ["passes"],
      targetFiles: ["src/core/foo.ts"],
      // no target_files field
    };
    const result = normalizePatchedPlansForDispatch([patched], []);
    assert.ok(Array.isArray(result[0].target_files), "target_files should be set from targetFiles alias");
    assert.deepEqual(result[0].target_files, ["src/core/foo.ts"]);
  });

  it("does not overwrite target_files when both target_files and targetFiles are present", () => {
    const patched = {
      task: "Refactor module",
      role: "evolution-worker",
      scope: "src/",
      acceptance_criteria: ["passes"],
      target_files: ["src/core/bar.ts"],
      targetFiles: ["src/core/foo.ts"],
    };
    const result = normalizePatchedPlansForDispatch([patched], []);
    assert.deepEqual(result[0].target_files, ["src/core/bar.ts"], "target_files should not be overwritten by targetFiles alias");
  });

  it("handles non-object patched plan entries gracefully (uses original as base)", () => {
    const result = normalizePatchedPlansForDispatch([null as unknown, "bad" as unknown], [ORIGINAL_PLAN, ORIGINAL_PLAN]);
    assert.equal(result.length, 2);
    // null entry → merged is just the original
    assert.equal(result[0].task, ORIGINAL_PLAN.task);
    // string entry → merged is just the original
    assert.equal(result[1].task, ORIGINAL_PLAN.task);
  });

  it("handles patched plans beyond the length of originals (no original to merge with)", () => {
    const patched = {
      task: "New extra task added by Athena",
      role: "evolution-worker",
      wave: 3,
      scope: "src/new/",
      target_files: ["src/new/module.ts"],
      acceptance_criteria: ["passes"],
      capacityDelta: 0.05,
      requestROI: 1.5,
      verification: "tests/core/new.test.ts — test: module loads",
    };
    const result = normalizePatchedPlansForDispatch([patched], []); // no originals
    assert.equal(result.length, 1);
    assert.equal(result[0].task, patched.task, "extra plan should be preserved as-is");
    assert.equal(result[0].capacityDelta, 0.05);
  });

  it("negative path: omitting capacityDelta from both patched and original yields undefined (contract validator catches it)", () => {
    const originalWithoutCapacity = { task: "Some task here long enough", role: "worker", wave: 1 };
    const patched = { task: "Some task here long enough", role: "worker" };
    const result = normalizePatchedPlansForDispatch([patched], [originalWithoutCapacity]);
    assert.equal(result[0].capacityDelta, undefined, "capacityDelta should be undefined when absent in both — contract validator should catch this");
  });
});

