const fs = require("fs");
const content = fs.readFileSync("src/core/orchestrator.ts", "utf8");

// Find the region by start/end markers
const START = "  // Guardrail gate: if PAUSE_WORKERS is active, skip all worker dispatch.";
const END = "\n\n  // Governance freeze gate (T-040)";

const startIdx = content.indexOf(START);
const endIdx = content.indexOf(END);

if (startIdx === -1 || endIdx === -1) {
  console.error("MARKERS NOT FOUND", { startIdx, endIdx });
  process.exit(1);
}

console.log("Found region:", startIdx, "->", endIdx);

const before = content.slice(0, startIdx);
const after = content.slice(endIdx);

const newBlock = `  // Pre-dispatch governance gate: single decision source for guardrail pause,
  // governance freeze, dependency cycle detection, and governance canary breach.
  // Replaces the inline PAUSE_WORKERS check and adds canary + cycle guards.
  {
    const cycleId = \`cycle-\${Date.now()}\`;
    try {
      const gateDecision = await evaluatePreDispatchGovernanceGate(config, plans, cycleId);
      if (gateDecision.blocked) {
        const reasonMsg = gateDecision.reason || "pre_dispatch_gate_blocked";
        await appendProgress(config,
          \`[CYCLE] Pre-dispatch governance gate blocked dispatch \u2014 reason=\${reasonMsg}\`
        );
        await appendAlert(config, {
          severity: ALERT_SEVERITY.HIGH,
          source: "orchestrator",
          title: "Worker dispatch blocked by pre-dispatch governance gate",
          message: \`reason=\${reasonMsg} action=\${gateDecision.action || "none"} cycleId=\${cycleId}\`
        });
        return;
      }
    } catch (err) {
      warn(\`[orchestrator] Pre-dispatch governance gate failed (non-fatal): \${String(err?.message || err)}\`);
    }
  }`;

const newContent = before + newBlock + after;
fs.writeFileSync("src/core/orchestrator.ts", newContent, "utf8");
console.log("Done. New length:", newContent.length);
