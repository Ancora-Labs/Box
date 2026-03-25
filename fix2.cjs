const fs = require("fs");
const content = fs.readFileSync("src/core/orchestrator.ts", "utf8");

const START_MARKER = "  // Guardrail gate: if PAUSE_WORKERS is active, skip all worker dispatch.";
const END_MARKER = "\r\n\r\n  // Governance freeze gate (T-040)";

const startIdx = content.indexOf(START_MARKER);
const endIdx = content.indexOf(END_MARKER);

if (startIdx < 0 || endIdx < 0) {
  console.error("Markers not found", { startIdx, endIdx });
  process.exit(1);
}

const DASH = "\u2014";
const BT = "`";
const newBlock = [
  "  // Pre-dispatch governance gate: single decision source for guardrail pause,",
  "  // governance freeze, dependency cycle detection, and governance canary breach.",
  "  // Replaces the inline PAUSE_WORKERS check and adds canary + cycle guards.",
  "  {",
  "    const cycleId = `cycle-${Date.now()}`;",
  "    try {",
  "      const gateDecision = await evaluatePreDispatchGovernanceGate(config, plans, cycleId);",
  "      if (gateDecision.blocked) {",
  '        const reasonMsg = gateDecision.reason || "pre_dispatch_gate_blocked";',
  "        await appendProgress(config,",
  "          `[CYCLE] Pre-dispatch governance gate blocked dispatch " + DASH + " reason=${reasonMsg}`",
  "        );",
  "        await appendAlert(config, {",
  "          severity: ALERT_SEVERITY.HIGH,",
  '          source: "orchestrator",',
  '          title: "Worker dispatch blocked by pre-dispatch governance gate",',
  '          message: `reason=${reasonMsg} action=${gateDecision.action || "none"} cycleId=${cycleId}`',
  "        });",
  "        return;",
  "      }",
  "    } catch (err) {",
  "      warn(`[orchestrator] Pre-dispatch governance gate failed (non-fatal): ${String(err?.message || err)}`);",
  "    }",
  "  }"
].join("\r\n");

const before = content.slice(0, startIdx);
const after = content.slice(endIdx);
const newContent = before + newBlock + after;

fs.writeFileSync("src/core/orchestrator.ts", newContent, "utf8");
console.log("Done. Length:", newContent.length);
