import test from "node:test";
import assert from "node:assert/strict";
import { safeArray, tryExtractJson } from "./utils.js";

test("safeArray returns original array inputs", () => {
  const input = [1, 2, 3];
  assert.equal(safeArray(input), input);
});

test("safeArray returns empty array for non-array values", () => {
  assert.deepEqual(safeArray(null), []);
  assert.deepEqual(safeArray(undefined), []);
  assert.deepEqual(safeArray("x"), []);
  assert.deepEqual(safeArray({}), []);
});

test("tryExtractJson parses strict JSON payloads", () => {
  assert.deepEqual(tryExtractJson("{\"approved\":true,\"reason\":\"ok\"}"), {
    approved: true,
    reason: "ok"
  });
});

test("tryExtractJson parses first object-shaped JSON embedded in text", () => {
  const wrapped = "preamble\n{\"tasks\":[{\"id\":1,\"title\":\"x\",\"priority\":1,\"kind\":\"quality\"}]}\npostamble";
  assert.deepEqual(tryExtractJson(wrapped), {
    tasks: [{ id: 1, title: "x", priority: 1, kind: "quality" }]
  });
});

test("tryExtractJson returns null for invalid or object-free input", () => {
  assert.equal(tryExtractJson("not json"), null);
  assert.equal(tryExtractJson("no object braces here"), null);
  assert.equal(tryExtractJson(undefined), null);
});

test("tryExtractJson preserves valid non-object JSON when strict parsing succeeds", () => {
  assert.deepEqual(tryExtractJson("[1,2,3]"), [1, 2, 3]);
});
