import { execSync } from "node:child_process";

function normalizeModelName(name) {
  return String(name || "").trim();
}

function parseCsv(csv) {
  return String(csv || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseMultipliers(jsonText) {
  try {
    const parsed = JSON.parse(jsonText || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function shouldEscalateToOpus(taskTitle, taskKind, allowOpusEscalation, escalationKeywords) {
  if (!allowOpusEscalation) {
    return false;
  }

  if (String(taskKind || "").toLowerCase() === "production") {
    return true;
  }

  const haystack = `${taskTitle || ""} ${taskKind || ""}`.toLowerCase();
  return escalationKeywords.some((keyword) => haystack.includes(String(keyword).toLowerCase()));
}

function commandSupportsModelFlag(command) {
  try {
    const output = execSync(`${command} code --help`, { stdio: ["ignore", "pipe", "pipe"] }).toString("utf8").toLowerCase();
    return output.includes("--model");
  } catch {
    return false;
  }
}

function enforceGuards(candidate, { neverUseModels, allowedModels, multipliers, maxMultiplier, defaultModel, opusModel, allowOpusEscalation }) {
  const forbidden = neverUseModels.includes(candidate);
  if (forbidden) {
    return { model: defaultModel, forcedFallback: "never-use-list" };
  }

  const allowedByPolicy = allowedModels.length === 0 || allowedModels.includes(candidate);
  if (!allowedByPolicy) {
    return { model: defaultModel, forcedFallback: "policy-allowlist" };
  }

  const multiplier = Number(multipliers[candidate]);
  const exceeds = Number.isFinite(multiplier) && multiplier > Number(maxMultiplier || 1);
  if (exceeds) {
    // Opus is allowed to exceed max multiplier only during explicit escalation.
    const opusException = candidate === opusModel && allowOpusEscalation;
    if (!opusException) {
      return { model: defaultModel, forcedFallback: "multiplier-cap" };
    }
  }

  return { model: candidate, forcedFallback: null };
}

export function chooseCopilotModel({
  strategy,
  taskTitle,
  taskKind,
  defaultModel,
  preferredModelsByTaskKindJson,
  opusModel,
  allowOpusEscalation,
  teamLeadAllowOpus,
  teamLeadReason,
  opusEscalationKeywordsCsv,
  neverUseModelsCsv,
  allowedModelsCsv,
  maxMultiplier,
  multipliersJson
}) {
  const targetStrategy = String(strategy || "task-best").toLowerCase();
  const preferredModels = parseMultipliers(preferredModelsByTaskKindJson);
  const neverUseModels = parseCsv(neverUseModelsCsv);
  const allowedModels = parseCsv(allowedModelsCsv);
  const escalationKeywords = parseCsv(opusEscalationKeywordsCsv);
  const multipliers = parseMultipliers(multipliersJson);

  const normalizedDefault = normalizeModelName(defaultModel) || "Claude Sonnet 4.5";
  const normalizedTaskKind = String(taskKind || "general").toLowerCase();

  let selected = normalizedDefault;
  let escalationSource = null;
  if (targetStrategy === "task-best") {
    const byKind = normalizeModelName(preferredModels[normalizedTaskKind]);
    if (byKind) {
      selected = byKind;
    }

    if (teamLeadAllowOpus) {
      selected = normalizeModelName(opusModel) || "Claude Opus 4.6";
      escalationSource = "team-lead";
    }

    if (shouldEscalateToOpus(taskTitle, normalizedTaskKind, allowOpusEscalation, escalationKeywords)) {
      selected = normalizeModelName(opusModel) || "Claude Opus 4.6";
      escalationSource = escalationSource || "keyword";
    }
  }

  const guarded = enforceGuards(selected, {
    neverUseModels,
    allowedModels,
    multipliers,
    maxMultiplier,
    defaultModel: normalizedDefault,
    opusModel: normalizeModelName(opusModel) || "Claude Opus 4.6",
    allowOpusEscalation
  });

  return {
    mode: "task-best",
    strategy: targetStrategy,
    model: guarded.model,
    taskKind: normalizedTaskKind,
    forcedFallback: guarded.forcedFallback,
    usedOpus: String(guarded.model).toLowerCase().includes("opus"),
    escalationSource,
    escalationReason: escalationSource === "team-lead" ? String(teamLeadReason || "") : ""
  };
}

function escapePrompt(prompt) {
  return String(prompt || "").replace(/"/g, '\\"');
}

export function buildTaskPrompt({ taskTitle, taskKind }) {
  return [
    `Implement this task with minimal safe diff: ${taskTitle}.`,
    `Task kind: ${taskKind || "general"}.`,
    "Select the highest quality implementation for the task scope.",
    "Follow repository conventions and existing abstractions.",
    "Do not add unrelated refactors or speculative features.",
    "Run build and tests after changes."
  ].join(" ");
}

export function runCopilotPrompt(command, prompt, modelDecision) {
  const baseCommand = `${command} code --prompt "${escapePrompt(prompt)}"`;
  const supportsModel = commandSupportsModelFlag(command);

  if (modelDecision.model && supportsModel) {
    const manualCmd = `${baseCommand} --model "${modelDecision.model}"`;
    try {
      execSync(manualCmd, { stdio: "inherit" });
      return { ...modelDecision, invocation: "task-best-manual" };
    } catch {
      execSync(baseCommand, { stdio: "inherit" });
      return { ...modelDecision, invocation: "auto-fallback" };
    }
  }

  if (modelDecision.model && !supportsModel) {
    execSync(baseCommand, { stdio: "inherit" });
    return { ...modelDecision, invocation: "no-model-flag-fallback" };
  }

  execSync(baseCommand, { stdio: "inherit" });
  return { ...modelDecision, invocation: "auto" };
}
