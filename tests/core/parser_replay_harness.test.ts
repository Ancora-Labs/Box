import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { loadCorpus, appendCorpusEntry, replayCorpus, MAX_CONFIDENCE_DELTA } from "../../src/core/parser_replay_harness.js";

describe("parser_replay_harness (Packet 10)", () => {
  describe("loadCorpus", () => {
    it("returns empty array for missing file", async () => {
      const corpus = await loadCorpus({ paths: { stateDir: "/nonexistent/path" } });
      assert.ok(Array.isArray(corpus));
      assert.equal(corpus.length, 0);
    });
  });

  describe("appendCorpusEntry", () => {
    it("is a callable function", () => {
      assert.equal(typeof appendCorpusEntry, "function");
    });
  });

  describe("MAX_CONFIDENCE_DELTA", () => {
    it("is a negative number", () => {
      assert.ok(MAX_CONFIDENCE_DELTA < 0);
    });
  });

  describe("replayCorpus", () => {
    it("returns empty results for empty corpus", () => {
      const result = replayCorpus([], () => ({ confidence: 0.5, plans: [] }));
      assert.ok(Array.isArray(result.results));
      assert.equal(result.results.length, 0);
      assert.equal(result.regressionCount, 0);
      assert.equal(result.passed, true);
    });

    it("detects regression when confidence drops significantly", () => {
      const corpus = [
        { id: "t1", raw: "test input", baselineConfidence: 0.9, expectedPlanCount: 1 },
      ];
      const result = replayCorpus(corpus, () => ({ confidence: 0.5, plans: [] }));
      assert.ok(result.regressionCount > 0);
      assert.equal(result.passed, false);
    });

    it("passes when confidence is within threshold", () => {
      const corpus = [
        { id: "t1", raw: "test input", baselineConfidence: 0.8, expectedPlanCount: 1 },
      ];
      const result = replayCorpus(corpus, () => ({ confidence: 0.75, plans: [] }));
      assert.equal(result.regressionCount, 0);
      assert.equal(result.passed, true);
    });

    it("handles multiple corpus entries", () => {
      const corpus = [
        { id: "a", raw: "a", baselineConfidence: 0.9, expectedPlanCount: 1 },
        { id: "b", raw: "b", baselineConfidence: 0.7, expectedPlanCount: 1 },
        { id: "c", raw: "c", baselineConfidence: 0.5, expectedPlanCount: 0 },
      ];
      const result = replayCorpus(corpus, () => ({
        confidence: 0.6,
        plans: [],
      }));
      assert.equal(result.results.length, 3);
    });

    it("detects regression when required key is missing from a plan", () => {
      const corpus = [
        {
          id: "t-req",
          raw: "input",
          baselineConfidence: 0.9,
          expectedPlanCount: 1,
          requiredKeys: ["title", "priority"],
        },
      ];
      // parser returns a plan missing 'priority'
      const result = replayCorpus(corpus, () => ({
        confidence: 0.9,
        plans: [{ title: "do something" }],
      }));
      assert.equal(result.regressionCount, 1);
      assert.equal(result.passed, false);
      assert.ok(result.results[0].omittedKeys.includes("priority"));
    });

    it("passes when all required keys are present in every plan", () => {
      const corpus = [
        {
          id: "t-full",
          raw: "input",
          baselineConfidence: 0.8,
          expectedPlanCount: 1,
          requiredKeys: ["title", "priority"],
        },
      ];
      const result = replayCorpus(corpus, () => ({
        confidence: 0.8,
        plans: [{ title: "task", priority: 1 }],
      }));
      assert.equal(result.regressionCount, 0);
      assert.equal(result.passed, true);
      assert.deepEqual(result.results[0].omittedKeys, []);
    });

    it("detects missing keys across multiple plans", () => {
      const corpus = [
        {
          id: "t-multi",
          raw: "input",
          baselineConfidence: 0.7,
          expectedPlanCount: 2,
          requiredKeys: ["id"],
        },
      ];
      // second plan missing 'id'
      const result = replayCorpus(corpus, () => ({
        confidence: 0.7,
        plans: [{ id: 1, title: "a" }, { title: "b" }],
      }));
      assert.equal(result.regressionCount, 1);
      assert.ok(result.results[0].omittedKeys.includes("id"));
    });

    it("emits empty omittedKeys for corpus entries without requiredKeys", () => {
      const corpus = [
        { id: "t-no-req", raw: "input", baselineConfidence: 0.5, expectedPlanCount: 1 },
      ];
      const result = replayCorpus(corpus, () => ({ confidence: 0.5, plans: [{ title: "x" }] }));
      assert.deepEqual(result.results[0].omittedKeys, []);
    });

    it("flags regression when required keys missing even if confidence is stable", () => {
      const corpus = [
        {
          id: "t-stable-conf",
          raw: "input",
          baselineConfidence: 0.9,
          expectedPlanCount: 1,
          requiredKeys: ["scope"],
        },
      ];
      // confidence unchanged but key absent
      const result = replayCorpus(corpus, () => ({
        confidence: 0.9,
        plans: [{ title: "task" }],
      }));
      assert.equal(result.passed, false);
      assert.ok(result.results[0].omittedKeys.includes("scope"));
    });

    // ── Mode-specific regression tests ────────────────────────────────────────

    it("json-direct mode: flags regression when required key is missing", () => {
      const corpus = [
        {
          id: "jd-1",
          raw: '{"plans":[{"title":"t"}]}',
          baselineConfidence: 0.95,
          expectedPlanCount: 1,
          requiredKeys: ["title", "priority"],
          parseMode: "json-direct",
        },
      ];
      const result = replayCorpus(corpus, () => ({
        confidence: 0.95,
        plans: [{ title: "t" }], // missing 'priority'
      }));
      assert.equal(result.passed, false);
      assert.ok(result.results[0].omittedKeys.includes("priority"));
      assert.equal(result.results[0].parseMode, "json-direct");
    });

    it("json-direct mode: passes when all required keys present", () => {
      const corpus = [
        {
          id: "jd-2",
          raw: '{"plans":[{"title":"t","priority":1}]}',
          baselineConfidence: 0.95,
          expectedPlanCount: 1,
          requiredKeys: ["title", "priority"],
          parseMode: "json-direct",
        },
      ];
      const result = replayCorpus(corpus, () => ({
        confidence: 0.95,
        plans: [{ title: "t", priority: 1 }],
      }));
      assert.equal(result.passed, true);
      assert.deepEqual(result.results[0].omittedKeys, []);
    });

    it("fallback mode: flags regression when parser returns empty plans but plans were expected", () => {
      const corpus = [
        {
          id: "fb-1",
          raw: "some planner output that failed to parse",
          baselineConfidence: 0.8,
          expectedPlanCount: 2,
          requiredKeys: ["title", "scope"],
          parseMode: "fallback",
        },
      ];
      // Fallback parser returns no plans (degraded)
      const result = replayCorpus(corpus, () => ({
        confidence: 0.8,
        plans: [],
      }));
      assert.equal(result.passed, false);
      assert.ok(result.results[0].omittedKeys.includes("title"));
      assert.ok(result.results[0].omittedKeys.includes("scope"));
      assert.equal(result.results[0].parseMode, "fallback");
    });

    it("fallback mode: no regression when no plans were expected and parser returns empty", () => {
      const corpus = [
        {
          id: "fb-2",
          raw: "empty input",
          baselineConfidence: 0.5,
          expectedPlanCount: 0,
          requiredKeys: ["title"],
          parseMode: "fallback",
        },
      ];
      const result = replayCorpus(corpus, () => ({ confidence: 0.5, plans: [] }));
      assert.equal(result.passed, true);
      assert.deepEqual(result.results[0].omittedKeys, []);
    });

    it("batch-normalized mode: flags regression when any plan in batch is missing required key", () => {
      const corpus = [
        {
          id: "bn-1",
          raw: "batch output with 3 plans",
          baselineConfidence: 0.85,
          expectedPlanCount: 3,
          requiredKeys: ["id", "title"],
          parseMode: "batch-normalized",
        },
      ];
      // Third plan missing 'id' after normalization
      const result = replayCorpus(corpus, () => ({
        confidence: 0.85,
        plans: [
          { id: 1, title: "a" },
          { id: 2, title: "b" },
          { title: "c" }, // missing 'id'
        ],
      }));
      assert.equal(result.passed, false);
      assert.ok(result.results[0].omittedKeys.includes("id"));
      assert.equal(result.results[0].parseMode, "batch-normalized");
    });

    it("batch-normalized mode: passes when all plans in batch have required keys", () => {
      const corpus = [
        {
          id: "bn-2",
          raw: "batch output with 2 plans",
          baselineConfidence: 0.85,
          expectedPlanCount: 2,
          requiredKeys: ["id", "title"],
          parseMode: "batch-normalized",
        },
      ];
      const result = replayCorpus(corpus, () => ({
        confidence: 0.85,
        plans: [
          { id: 1, title: "a" },
          { id: 2, title: "b" },
        ],
      }));
      assert.equal(result.passed, true);
      assert.deepEqual(result.results[0].omittedKeys, []);
    });

    it("batch-normalized mode: flags regression when batch returns empty plans with expected count", () => {
      const corpus = [
        {
          id: "bn-3",
          raw: "batch raw output",
          baselineConfidence: 0.7,
          expectedPlanCount: 3,
          requiredKeys: ["id"],
          parseMode: "batch-normalized",
        },
      ];
      const result = replayCorpus(corpus, () => ({ confidence: 0.7, plans: [] }));
      assert.equal(result.passed, false);
      assert.ok(result.results[0].omittedKeys.includes("id"));
    });

    it("result carries parseMode through to output", () => {
      const corpus = [
        {
          id: "pm-1",
          raw: "input",
          baselineConfidence: 0.8,
          expectedPlanCount: 1,
          parseMode: "json-direct",
        },
      ];
      const result = replayCorpus(corpus, () => ({ confidence: 0.8, plans: [{ title: "x" }] }));
      assert.equal(result.results[0].parseMode, "json-direct");
    });

    it("result parseMode is undefined for corpus entries without parseMode", () => {
      const corpus = [
        { id: "no-pm", raw: "input", baselineConfidence: 0.8, expectedPlanCount: 1 },
      ];
      const result = replayCorpus(corpus, () => ({ confidence: 0.8, plans: [{ title: "x" }] }));
      assert.equal(result.results[0].parseMode, undefined);
    });
  });
});
