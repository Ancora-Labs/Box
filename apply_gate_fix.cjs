const fs = require("fs");
const content = fs.readFileSync("src/core/orchestrator.ts", "utf8");

const START = "  // Guardrail gate: if PAUSE_WORKERS is active, skip all worker dispatch.";
const END = "\r\n\r\n  // Governance freeze gate (T-040)";

const startIdx = content.indexOf(START);
const endIdx = content.indexOf(END);

if (startIdx === -1 || endIdx === -1) {
  console.error("MARKERS NOT FOUND", { startIdx, endIdx });
  process.exit(1);
}

console.log("Found region:", startIdx, "->", endIdx);

const before = content.slice(0, startIdx);
const after = content.slice(endIdx);

const dash = "\u2014";
const newBlock = `  // Pre-dispatch governance gate: single decision source for guardrail pause,\r\n  // governance freeze, dependency cycle detection, and governance canary breach.\r\n  // Replaces the inline PAUSE_WORKERS check and adds canary + cycle guards.\r\n  {\r\n    const cycleId = \`cycle-\${Date.now()}\`;\r\n    try {\r\n      const gateDecision = await evaluatePreDispatchGovernanceGate(config, plans, cycleId);\r\n      if (gateDecision.blocked) {\r\n        const reasonMsg = gateDecision.reason || "pre_dispatch_gate_blocked";\r\n        await appendProgress(config,\r\n          \`[CYCLE] Pre-dispatch governance gate blocked dispatch ${dash} reason=\${reasonMsg}\`\r\n        );\r\n        await appendAlert(config, {\r\n          severity: ALERT_SEVERITY.HIGH,\r\n          source: "orchestrator",\r\n          title: "Worker dispatch blocked by pre-dispatch governance gate",\r\n          message: \`reason=\${reasonMsg} action=\${gateDecision.action || "none"} cycleId=\${cycleId}\`\r\n        });\r\n        return;\r\n      }\r\n    } catch (err) {\r\n      warn(\`[orchestrator] Pre-dispatch governance gate failed (non-fatal): \${String(err?.message || err)}\`);\r\n    }\r\n  }`;

const newContent = before + newBlock + after;
fs.writeFileSync("src/core/orchestrator.ts", newContent, "utf8");
console.log("Done. New length:", newContent.length);
