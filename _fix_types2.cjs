const fs = require("fs");
const path = "C:/Users/caner/Desktop/Box/src/types/index.ts";
let content = fs.readFileSync(path, "utf-8");

// Find the exact Copilot Usage comment
const idx = content.indexOf("// \u2500\u2500\u2500 Copilot Usage");
console.log("Copilot Usage found at index:", idx);

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

if (idx > 0) {
  content = content.slice(0, idx) + newType + content.slice(idx);
  fs.writeFileSync(path, content, "utf-8");
  
  const verify = fs.readFileSync(path, "utf-8");
  console.log("Has ReviewerDecisionSource:", verify.includes("ReviewerDecisionSource"));
  console.log("File size:", verify.length);
} else {
  console.log("Could not find Copilot Usage section");
}
