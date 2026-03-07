import fs from "node:fs/promises";

export async function writeFallbackPatchNote(taskId, taskTitle) {
  const text = [
    `Task ${taskId}: ${taskTitle}`,
    "Copilot CLI unavailable, fallback provider produced no code changes.",
    "Use manual review or wire an alternative LLM provider."
  ].join("\n");

  await fs.writeFile("BOX_FALLBACK_NOTE.md", `${text}\n`, "utf8");
}
