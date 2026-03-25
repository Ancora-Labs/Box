const fs = require("fs");

// Fix copilot_reviewer.ts
const copilotPath = "C:/Users/caner/Desktop/Box/src/providers/reviewer/copilot_reviewer.ts";
let content = fs.readFileSync(copilotPath, "utf-8");

// 1. Add import
const agentImport = 'import { toCopilotModelSlug } from "../../core/agent_loader.js";';
const tbImport = 'import { tagProviderDecision } from "../../core/trust_boundary.js";';
if (!content.includes(tbImport)) {
  content = content.replace(agentImport, agentImport + "\n" + tbImport);
}

// 2. Update requestJson signature
content = content.replace(
  "requestJson<T>(prompt: string, fallback: T, validator: (payload: any, fallback: T) => T): T {",
  'requestJson<T extends Record<string, unknown>>(prompt: string, fallback: T, validator: (payload: any, fallback: T) => T): T & { _source: "provider" | "fallback" } {'
);

// 3. Tag fallback returns - process exit error
content = content.replace(
  /return fallback;\n(\s+\})\n\n(\s+const parsed = tryExtractJson)/,
  'return tagProviderDecision(fallback, "fallback");\n$1\n\n$2'
);
// Handle CRLF
content = content.replace(
  /return fallback;\r\n(\s+\})\r\n\r\n(\s+const parsed = tryExtractJson)/,
  'return tagProviderDecision(fallback, "fallback");\r\n$1\r\n\r\n$2'
);

// 4. Tag fallback return - JSON parse error
content = content.replace(
  /return fallback;\n(\s+\})\n(\s+const validated = validator)/,
  'return tagProviderDecision(fallback, "fallback");\n$1\n$2'
);
content = content.replace(
  /return fallback;\r\n(\s+\})\r\n(\s+const validated = validator)/,
  'return tagProviderDecision(fallback, "fallback");\r\n$1\r\n$2'
);

// 5. Tag provider return
content = content.replace(
  /this\.lastUsage = \{ model: this\.model, provider: "copilot" \};\n\s+return validated;/,
  'this.lastUsage = { model: this.model, provider: "copilot" };\n    return tagProviderDecision(validated, "provider");'
);
content = content.replace(
  /this\.lastUsage = \{ model: this\.model, provider: "copilot" \};\r\n\s+return validated;/,
  'this.lastUsage = { model: this.model, provider: "copilot" };\r\n    return tagProviderDecision(validated, "provider");'
);

fs.writeFileSync(copilotPath, content, "utf-8");
const count = (content.match(/tagProviderDecision/g) || []).length;
console.log("copilot tagProviderDecision occurrences:", count);

// Fix claude_reviewer.ts
const claudePath = "C:/Users/caner/Desktop/Box/src/providers/reviewer/claude_reviewer.ts";
let cContent = fs.readFileSync(claudePath, "utf-8");

// 1. Add import
const utilImport = 'import { tryExtractJson, validatePlan, validateDecision, validateOpusDecision } from "./utils.js";';
const tbImport2 = 'import { tagProviderDecision } from "../../core/trust_boundary.js";';
if (!cContent.includes(tbImport2)) {
  cContent = cContent.replace(utilImport, utilImport + "\n" + tbImport2);
}

// 2. Update requestJson signature
cContent = cContent.replace(
  "async requestJson<T>(prompt: string, maxTokens: number, fallback: T, validator: (payload: any, fallback: T) => T): Promise<T> {",
  'async requestJson<T extends Record<string, unknown>>(prompt: string, maxTokens: number, fallback: T, validator: (payload: any, fallback: T) => T): Promise<T & { _source: "provider" | "fallback" }> {'
);

// 3. Tag provider return
cContent = cContent.replace(
  "const validated = validator(parsed, fallback);\n        return validated;\n      } catch (error) {",
  'const validated = validator(parsed, fallback);\n        return tagProviderDecision(validated, "provider");\n      } catch (error) {'
);
cContent = cContent.replace(
  "const validated = validator(parsed, fallback);\r\n        return validated;\r\n      } catch (error) {",
  'const validated = validator(parsed, fallback);\r\n        return tagProviderDecision(validated, "provider");\r\n      } catch (error) {'
);

// 4. Replace throw lastError with tagged fallback return
cContent = cContent.replace(
  "\n    throw lastError;\n  }\n",
  '\n    // All retries exhausted -- return tagged fallback so callers can inspect _source="fallback".\n    console.error(`[ClaudeReviewer] all retries exhausted, using deterministic fallback: ${lastError}`);\n    return tagProviderDecision(fallback, "fallback");\n  }\n'
);
cContent = cContent.replace(
  "\r\n    throw lastError;\r\n  }\r\n",
  '\r\n    // All retries exhausted -- return tagged fallback so callers can inspect _source="fallback".\r\n    console.error(`[ClaudeReviewer] all retries exhausted, using deterministic fallback: ${lastError}`);\r\n    return tagProviderDecision(fallback, "fallback");\r\n  }\r\n'
);

fs.writeFileSync(claudePath, cContent, "utf-8");
const cCount = (cContent.match(/tagProviderDecision/g) || []).length;
console.log("claude tagProviderDecision occurrences:", cCount);
