import { writeJson } from "./fs_utils.js";

export async function writeCheckpoint(config, checkpoint) {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const path = `${config.paths.stateDir}/checkpoint-${stamp}.json`;
  await writeJson(path, checkpoint);
  return path;
}
