import { loadConfig } from "./config.js";
import { runOnce, runDaemon } from "./core/orchestrator.js";
import { runDoctor } from "./core/doctor.js";

async function main() {
  const command = process.argv[2] ?? "once";
  const config = await loadConfig();

  if (command === "doctor") {
    await runDoctor(config);
    return;
  }

  if (command === "start") {
    await runDaemon(config);
    return;
  }

  await runOnce(config);
}

main().catch((error) => {
  console.error("[box] fatal:", error?.message ?? error);
  process.exit(1);
});
