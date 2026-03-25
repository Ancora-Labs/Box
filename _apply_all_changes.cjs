const fs = require("fs");
const BASE = "C:/Users/caner/Desktop/Box";

function readFile(rel) {
  return fs.readFileSync(BASE + "/" + rel, "utf-8");
}
function writeFile(rel, content) {
  fs.writeFileSync(BASE + "/" + rel, content, "utf-8");
}

// ── 1. src/types/index.ts: Add ReviewerDecisionSource type ───────────────────
let typesContent = readFile("src/types/index.ts");
if (!typesContent.includes("ReviewerDecisionSource")) {
  const insertBefore = typesContent.indexOf("// \u2500\u2500\u2500 Copilot Usage");
  if (insertBefore < 0) {
    console.error("ERROR: Could not find Copilot Usage in types/index.ts");
    process.exit(1);
  }
  const newType = [
    "// \u2500\u2500\u2500 Provider Reviewer Decision \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
    "",
    "/**",
    " * Indicates whether a reviewer provider decision was produced by the AI model",
    ' * ("provider") or by the deterministic fallback path ("fallback").',
    " *",
    " * Carried as `_source` on every tagged decision. Callers should check this",
    " * field to distinguish AI-produced decisions from deterministic fallbacks.",
    " */",
    'export type ReviewerDecisionSource = "provider" | "fallback";',
    "",
    ""
  ].join("\r\n");
  typesContent = typesContent.slice(0, insertBefore) + newType + typesContent.slice(insertBefore);
  writeFile("src/types/index.ts", typesContent);
  console.log("1. types/index.ts updated:", typesContent.includes("ReviewerDecisionSource"));
} else {
  console.log("1. types/index.ts already has ReviewerDecisionSource");
}

// ── 2. src/core/trust_boundary.ts: Add tagProviderDecision function ───────────
let tbContent = readFile("src/core/trust_boundary.ts");
if (!tbContent.includes("export function tagProviderDecision")) {
  const newFunc = [
    "",
    "// -- Provider decision tagging --------------------------------------------------",
    "",
    "/**",
    " * Tag a reviewer provider decision with its source at the trust boundary.",
    " *",
    " * This is the canonical tagging point between untrusted AI output and the BOX",
    " * orchestration pipeline. It makes fallback decisions explicit and machine-readable",
    " * so callers can distinguish AI-produced decisions from deterministic fallbacks.",
    " *",
    ' *   source="provider"  -- AI model returned a parseable, validated response.',
    ' *   source="fallback"  -- AI call failed (process error / parse failure);',
    " *                         a deterministic fallback value is being used instead.",
    " *",
    " * Usage in provider requestJson methods:",
    ' *   return tagProviderDecision(validatedPayload, "provider");',
    ' *   return tagProviderDecision(fallback,         "fallback");',
    " *",
    " * @param decision  - validated decision payload",
    ' * @param source    - "provider" (AI response) | "fallback" (deterministic fallback)',
    " * @returns decision with _source field attached",
    " */",
    "export function tagProviderDecision<T extends Record<string, unknown>>(",
    "  decision: T,",
    '  source: "provider" | "fallback"',
    '): T & { _source: "provider" | "fallback" } {',
    "  return { ...decision, _source: source };",
    "}"
  ].join("\r\n");
  tbContent = tbContent.trimEnd() + "\r\n" + newFunc + "\r\n";
  writeFile("src/core/trust_boundary.ts", tbContent);
  console.log("2. trust_boundary.ts updated:", tbContent.includes("export function tagProviderDecision"));
} else {
  console.log("2. trust_boundary.ts already has tagProviderDecision");
}

// ── 3. src/providers/reviewer/copilot_reviewer.ts ────────────────────────────
let copilotContent = readFile("src/providers/reviewer/copilot_reviewer.ts");
if (!copilotContent.includes("tagProviderDecision")) {
  // Add import
  copilotContent = copilotContent.replace(
    'import { toCopilotModelSlug } from "../../core/agent_loader.js";',
    'import { toCopilotModelSlug } from "../../core/agent_loader.js";\nimport { tagProviderDecision } from "../../core/trust_boundary.js";'
  );
  // Update requestJson signature
  copilotContent = copilotContent.replace(
    "requestJson<T>(prompt: string, fallback: T, validator: (payload: any, fallback: T) => T): T {",
    'requestJson<T extends Record<string, unknown>>(prompt: string, fallback: T, validator: (payload: any, fallback: T) => T): T & { _source: "provider" | "fallback" } {'
  );
  // Use regex to replace fallback returns (handle CRLF)
  copilotContent = copilotContent.replace(
    /return fallback;\r?\n(\s+\})\r?\n\r?\n(\s+const parsed = tryExtractJson)/,
    'return tagProviderDecision(fallback, "fallback");\n$1\n\n$2'
  );
  copilotContent = copilotContent.replace(
    /return fallback;\r?\n(\s+\})\r?\n(\s+const validated = validator)/,
    'return tagProviderDecision(fallback, "fallback");\n$1\n$2'
  );
  copilotContent = copilotContent.replace(
    /this\.lastUsage = \{ model: this\.model, provider: "copilot" \};\r?\n\s+return validated;/,
    'this.lastUsage = { model: this.model, provider: "copilot" };\n    return tagProviderDecision(validated, "provider");'
  );
  writeFile("src/providers/reviewer/copilot_reviewer.ts", copilotContent);
  const count = (copilotContent.match(/tagProviderDecision/g) || []).length;
  console.log("3. copilot_reviewer.ts updated, tagProviderDecision count:", count);
} else {
  console.log("3. copilot_reviewer.ts already has tagProviderDecision");
}

// ── 4. src/providers/reviewer/claude_reviewer.ts ─────────────────────────────
let claudeContent = readFile("src/providers/reviewer/claude_reviewer.ts");
if (!claudeContent.includes("tagProviderDecision")) {
  // Add import
  claudeContent = claudeContent.replace(
    'import { tryExtractJson, validatePlan, validateDecision, validateOpusDecision } from "./utils.js";',
    'import { tryExtractJson, validatePlan, validateDecision, validateOpusDecision } from "./utils.js";\nimport { tagProviderDecision } from "../../core/trust_boundary.js";'
  );
  // Update signature
  claudeContent = claudeContent.replace(
    "async requestJson<T>(prompt: string, maxTokens: number, fallback: T, validator: (payload: any, fallback: T) => T): Promise<T> {",
    'async requestJson<T extends Record<string, unknown>>(prompt: string, maxTokens: number, fallback: T, validator: (payload: any, fallback: T) => T): Promise<T & { _source: "provider" | "fallback" }> {'
  );
  // Tag provider return
  claudeContent = claudeContent.replace(
    /const validated = validator\(parsed, fallback\);\r?\n\s+return validated;\r?\n\s+\} catch \(error\) \{/,
    'const validated = validator(parsed, fallback);\n        return tagProviderDecision(validated, "provider");\n      } catch (error) {'
  );
  // Replace throw with fallback return
  claudeContent = claudeContent.replace(
    /\r?\n\s+throw lastError;\r?\n\s+\}/,
    '\n    // All retries exhausted -- return tagged fallback so callers can inspect _source="fallback".\n    console.error(`[ClaudeReviewer] all retries exhausted, using deterministic fallback: ${lastError}`);\n    return tagProviderDecision(fallback, "fallback");\n  }'
  );
  writeFile("src/providers/reviewer/claude_reviewer.ts", claudeContent);
  const count = (claudeContent.match(/tagProviderDecision/g) || []).length;
  console.log("4. claude_reviewer.ts updated, tagProviderDecision count:", count);
} else {
  console.log("4. claude_reviewer.ts already has tagProviderDecision");
}

// ── 5. tests/core/trust_boundary.test.ts ─────────────────────────────────────
let testContent = readFile("tests/core/trust_boundary.test.ts");
if (!testContent.includes('describe("tagProviderDecision')) {
  // Add to import
  testContent = testContent.replace(
    '  trustBoundaryRetryDelayMs,\r\n} from "../../src/core/trust_boundary.js";',
    '  trustBoundaryRetryDelayMs,\r\n  tagProviderDecision,\r\n} from "../../src/core/trust_boundary.js";'
  );
  // Also try LF version
  testContent = testContent.replace(
    '  trustBoundaryRetryDelayMs,\n} from "../../src/core/trust_boundary.js";',
    '  trustBoundaryRetryDelayMs,\n  tagProviderDecision,\n} from "../../src/core/trust_boundary.js";'
  );
  // Add test suite
  const newSuite = [
    "",
    "// -- tagProviderDecision ---------------------------------------------------------",
    "",
    'describe("tagProviderDecision -- explicit fallback tagging at trust boundary", () => {',
    "  it(\"tags a provider decision with _source='provider'\", () => {",
    '    const decision = { approved: true, reason: "all gates passed" };',
    '    const tagged = tagProviderDecision(decision, "provider");',
    '    assert.equal(tagged._source, "provider");',
    "    assert.equal(tagged.approved, true);",
    '    assert.equal(tagged.reason, "all gates passed");',
    "  });",
    "",
    "  it(\"tags a fallback decision with _source='fallback'\", () => {",
    '    const fallback = { approved: false, reason: "deterministic fallback" };',
    '    const tagged = tagProviderDecision(fallback, "fallback");',
    '    assert.equal(tagged._source, "fallback");',
    "    assert.equal(tagged.approved, false);",
    '    assert.equal(tagged.reason, "deterministic fallback");',
    "  });",
    "",
    '  it("preserves all original fields from the decision", () => {',
    '    const decision = { approved: true, reason: "ok", model: "claude-sonnet-4-6", taskId: 42 };',
    '    const tagged = tagProviderDecision(decision, "provider");',
    '    assert.equal(tagged.model, "claude-sonnet-4-6");',
    "    assert.equal(tagged.taskId, 42);",
    '    assert.equal(tagged._source, "provider");',
    "  });",
    "",
    '  it("does not mutate the original decision object", () => {',
    '    const decision = { approved: true, reason: "ok" };',
    '    tagProviderDecision(decision, "provider");',
    '    assert.equal((decision as any)._source, undefined, "original must not be mutated");',
    "  });",
    "",
    '  it("tags allowOpus decisions correctly", () => {',
    '    const decision = { allowOpus: false, reason: "fallback no escalation" };',
    '    const tagged = tagProviderDecision(decision, "fallback");',
    '    assert.equal(tagged._source, "fallback");',
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
  testContent = testContent.trimEnd() + "\r\n" + newSuite + "\r\n";
  writeFile("tests/core/trust_boundary.test.ts", testContent);
  const count = (testContent.match(/tagProviderDecision/g) || []).length;
  console.log("5. trust_boundary.test.ts updated, tagProviderDecision count:", count);
} else {
  console.log("5. trust_boundary.test.ts already has tagProviderDecision tests");
}

console.log("All changes applied successfully.");
