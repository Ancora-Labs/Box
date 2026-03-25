const fs = require("fs");
const path = "C:/Users/caner/Desktop/Box/src/types/index.ts";
let content = fs.readFileSync(path, "utf-8");

const insertBefore = "// ─── Copilot Usage ─────────────────────────────────────────────────────────";
const newType = `// ─── Provider Reviewer Decision ────────────────────────────────────────────
/**
 * Indicates whether a reviewer provider decision was produced by the AI model
 * ("provider") or by the deterministic fallback path ("fallback").
 *
 * Carried as \`_source\` on every tagged decision. Callers should check this
 * field to distinguish AI-produced decisions from deterministic fallbacks.
 */
export type ReviewerDecisionSource = "provider" | "fallback";

`;

if (!content.includes("ReviewerDecisionSource")) {
  content = content.replace(insertBefore, newType + insertBefore);
  fs.writeFileSync(path, content, "utf-8");
  console.log("Added ReviewerDecisionSource type");
} else {
  console.log("Already exists");
}
