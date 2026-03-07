import { readJson } from "./fs_utils.js";

export async function loadPolicy(config) {
  return readJson(config.paths.policyFile, {
    protectedPaths: [],
    requireReviewerApprovalForProtectedPaths: true,
    blockedCommands: []
  });
}

export function validateShellCommand(policy, command) {
  const normalized = command.toLowerCase();
  const blocked = policy.blockedCommands.find((item) => normalized.includes(String(item).toLowerCase()));
  if (blocked) {
    return { ok: false, reason: `blocked command matched: ${blocked}` };
  }
  return { ok: true };
}
