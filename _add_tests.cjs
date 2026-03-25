const fs = require("fs");
const path = "C:/Users/caner/Desktop/Box/tests/core/trust_boundary.test.ts";

// Read current content
let content = fs.readFileSync(path, "utf-8");
console.log("Before - has tagProvider:", content.includes("tagProviderDecision"));
console.log("Before - length:", content.length);

// Fix import
const oldImportEnd = '  trustBoundaryRetryDelayMs,\r\n} from "../../src/core/trust_boundary.js";';
const newImportEnd = '  trustBoundaryRetryDelayMs,\r\n  tagProviderDecision,\r\n} from "../../src/core/trust_boundary.js";';
content = content.replace(oldImportEnd, newImportEnd);
console.log("Import fix applied, has tagProviderDecision in import:", content.includes("tagProviderDecision,\r\n} from"));

// Add test suite at end
const newSuite = [
  "",
  "// -- tagProviderDecision ---------------------------------------------------------",
  "",
  'describe("tagProviderDecision -- explicit fallback tagging at trust boundary", () => {',
  "  it(\"tags a provider decision with _source='provider'\", () => {",
  '    const decision = { approved: true, reason: "all gates passed" };',
  '    const tagged = tagProviderDecision(decision, "provider");',
  "    assert.equal(tagged._source, \"provider\");",
  "    assert.equal(tagged.approved, true);",
  '    assert.equal(tagged.reason, "all gates passed");',
  "  });",
  "",
  "  it(\"tags a fallback decision with _source='fallback'\", () => {",
  '    const fallback = { approved: false, reason: "deterministic fallback" };',
  '    const tagged = tagProviderDecision(fallback, "fallback");',
  "    assert.equal(tagged._source, \"fallback\");",
  "    assert.equal(tagged.approved, false);",
  '    assert.equal(tagged.reason, "deterministic fallback");',
  "  });",
  "",
  "  it(\"preserves all original fields from the decision\", () => {",
  '    const decision = { approved: true, reason: "ok", model: "claude-sonnet-4-6", taskId: 42 };',
  '    const tagged = tagProviderDecision(decision, "provider");',
  '    assert.equal(tagged.model, "claude-sonnet-4-6");',
  "    assert.equal(tagged.taskId, 42);",
  "    assert.equal(tagged._source, \"provider\");",
  "  });",
  "",
  "  it(\"does not mutate the original decision object\", () => {",
  '    const decision = { approved: true, reason: "ok" };',
  '    tagProviderDecision(decision, "provider");',
  '    assert.equal((decision as any)._source, undefined, "original must not be mutated");',
  "  });",
  "",
  "  it(\"tags allowOpus decisions correctly\", () => {",
  '    const decision = { allowOpus: false, reason: "fallback no escalation" };',
  '    const tagged = tagProviderDecision(decision, "fallback");',
  "    assert.equal(tagged._source, \"fallback\");",
  "    assert.equal(tagged.allowOpus, false);",
  "  });",
  "",
  "  it(\"source='fallback' is distinguishable from source='provider'\", () => {",
  '    const d = { approved: false, reason: "gates failed" };',
  '    const fromFallback = tagProviderDecision(d, "fallback");',
  '    const fromProvider = tagProviderDecision(d, "provider");',
  "    assert.notEqual(fromFallback._source, fromProvider._source);",
  "  });",
  "});"
].join("\r\n");

content = content.trimEnd() + "\r\n" + newSuite + "\r\n";

fs.writeFileSync(path, content, "utf-8");

// Verify immediately
const verify = fs.readFileSync(path, "utf-8");
console.log("After - has tagProvider suite:", verify.includes('describe("tagProviderDecision'));
console.log("After - length:", verify.length);
console.log("After - has import:", verify.includes("tagProviderDecision,"));
