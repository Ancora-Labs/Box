import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { combineEvolutionWorkerPlans, batchEvolutionWorkerPlansForDispatch } from "../../src/core/orchestrator.js";

describe("orchestrator evolution batching", () => {
  it("combines multiple evolution-worker plans into one batched worker call", () => {
    const plans = [
      {
        role: "evolution-worker",
        task: "Add governance gate tests",
        context: "Cover happy path and blocked path",
        verification: "npm test",
        taskKind: "test",
        acceptance_criteria: ["Tests added", "Failure path asserted"]
      },
      {
        role: "evolution-worker",
        task: "Harden reviewer payload validation",
        context: "Normalize malformed provider output",
        verification: "npm run lint",
        taskKind: "implementation",
        acceptance_criteria: ["Validation rejects malformed output"]
      }
    ];

    const result = combineEvolutionWorkerPlans(plans);

    assert.equal(result.length, 1);
    assert.equal(result[0].role, "evolution-worker");
    assert.equal(result[0].taskKind, "implementation");
    assert.match(result[0].task, /Complete this entire evolution batch in one worker call/);
    assert.match(result[0].task, /1\. \[test\] Add governance gate tests/);
    assert.match(result[0].task, /2\. \[implementation\] Harden reviewer payload validation/);
    assert.match(result[0].context, /Complete ALL subtasks in this single worker call/);
    assert.equal(result[0].verification, "npm test && npm run lint");
    assert.deepEqual(result[0].acceptance_criteria, [
      "Tests added",
      "Failure path asserted",
      "Validation rejects malformed output"
    ]);
    assert.equal(result[0]._batchedPlans.length, 2);
  });

  it("keeps different waves in separate evolution batch calls", () => {
    const plans = [
      { role: "evolution-worker", wave: 1, task: "Task A", context: "A", verification: "npm test", taskKind: "test", acceptance_criteria: ["A"] },
      { role: "evolution-worker", wave: 1, task: "Task B", context: "B", verification: "npm run lint", taskKind: "implementation", acceptance_criteria: ["B"] },
      { role: "evolution-worker", wave: 2, task: "Task C", context: "C", verification: "npm test", taskKind: "test", acceptance_criteria: ["C"] }
    ];

    const result = batchEvolutionWorkerPlansForDispatch(plans, { runtime: { workerContextTokenLimit: 100000 } });

    assert.equal(result.length, 2);
    assert.equal(result[0]._batchedPlans.length, 2);
    assert.equal(result[1].wave, 2);
  });

  it("splits oversized evolution batches when rough context budget is exceeded", () => {
    const largeContext = "X".repeat(5000);
    const plans = [
      { role: "evolution-worker", wave: 1, task: "Task A", context: largeContext, verification: "npm test", taskKind: "test", acceptance_criteria: ["A"] },
      { role: "evolution-worker", wave: 1, task: "Task B", context: largeContext, verification: "npm run lint", taskKind: "implementation", acceptance_criteria: ["B"] }
    ];

    const result = batchEvolutionWorkerPlansForDispatch(plans, { runtime: { workerContextTokenLimit: 2000 } });

    assert.equal(result.length, 2);
    assert.ok(!result[0]._batchedPlans || result[0]._batchedPlans.length === 1);
    assert.ok(!result[1]._batchedPlans || result[1]._batchedPlans.length === 1);
  });
});