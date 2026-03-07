import fs from "node:fs/promises";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config();

function must(value, key) {
  if (!value || !value.trim()) {
    return null;
  }
  return value.trim();
}

export async function loadConfig() {
  const rootDir = process.cwd();
  const configPath = path.join(rootDir, "box.config.json");
  const raw = await fs.readFile(configPath, "utf8");
  const fileConfig = JSON.parse(raw);

  const env = {
    claudeApiKey: must(process.env.CLAUDE_API_KEY, "CLAUDE_API_KEY"),
    githubToken: must(process.env.GITHUB_TOKEN, "GITHUB_TOKEN"),
    targetRepo: must(process.env.TARGET_REPO, "TARGET_REPO"),
    targetBaseBranch: process.env.TARGET_BASE_BRANCH?.trim() || "main",
    copilotCliCommand: process.env.COPILOT_CLI_COMMAND?.trim() || "copilot",
    budgetUsd: Number(process.env.BOX_BUDGET_USD || "15"),
    mode: process.env.BOX_MODE?.trim() || "local",
    claudeModel: process.env.CLAUDE_MODEL?.trim() || null,
    copilotStrategy: process.env.COPILOT_STRATEGY?.trim() || null,
    copilotAllowOpus: process.env.COPILOT_ALLOW_OPUS?.trim() || null,
    copilotAllowedModels: process.env.COPILOT_ALLOWED_MODELS?.trim() || null,
    copilotMaxMultiplier: process.env.COPILOT_MAX_MULTIPLIER?.trim() || null,
    copilotOpusMinBudgetUsd: process.env.COPILOT_OPUS_MIN_BUDGET_USD?.trim() || null,
    copilotOpusMonthlyMaxCalls: process.env.COPILOT_OPUS_MONTHLY_MAX_CALLS?.trim() || null,
    autoCreatePr: process.env.BOX_AUTO_CREATE_PR?.trim() || null
  };

  const claude = {
    ...(fileConfig.claude ?? {}),
    model: env.claudeModel || fileConfig?.claude?.model || "claude-sonnet-4-6"
  };

  const parsedAllowedModels = env.copilotAllowedModels
    ? env.copilotAllowedModels.split(",").map((item) => item.trim()).filter(Boolean)
    : null;

  const copilot = {
    ...(fileConfig.copilot ?? {}),
    strategy: env.copilotStrategy || fileConfig?.copilot?.strategy || "task-best",
    allowOpusEscalation: env.copilotAllowOpus
      ? ["1", "true", "yes", "on"].includes(env.copilotAllowOpus.toLowerCase())
      : Boolean(fileConfig?.copilot?.allowOpusEscalation),
    allowedModels: parsedAllowedModels ?? fileConfig?.copilot?.allowedModels ?? [],
    maxMultiplier: env.copilotMaxMultiplier ? Number(env.copilotMaxMultiplier) : Number(fileConfig?.copilot?.maxMultiplier ?? 1),
    opusMinBudgetUsd: env.copilotOpusMinBudgetUsd ? Number(env.copilotOpusMinBudgetUsd) : Number(fileConfig?.copilot?.opusMinBudgetUsd ?? 2),
    opusMonthlyMaxCalls: env.copilotOpusMonthlyMaxCalls ? Number(env.copilotOpusMonthlyMaxCalls) : Number(fileConfig?.copilot?.opusMonthlyMaxCalls ?? 8)
  };

  const git = {
    ...(fileConfig.git ?? {}),
    autoCreatePr: env.autoCreatePr
      ? ["1", "true", "yes", "on"].includes(env.autoCreatePr.toLowerCase())
      : Boolean(fileConfig?.git?.autoCreatePr ?? true)
  };

  return {
    rootDir,
    ...fileConfig,
    claude,
    copilot,
    git,
    env,
    paths: {
      taskFile: path.join(rootDir, fileConfig.taskFile),
      summaryFile: path.join(rootDir, fileConfig.summaryFile),
      budgetFile: path.join(rootDir, fileConfig.budgetFile),
      progressFile: path.join(rootDir, fileConfig.progressFile),
      testsStateFile: path.join(rootDir, fileConfig.testsStateFile),
      copilotUsageFile: path.join(rootDir, fileConfig.copilotUsageFile),
      copilotUsageMonthlyFile: path.join(rootDir, fileConfig.copilotUsageMonthlyFile),
      policyFile: path.join(rootDir, fileConfig.policyFile),
      workspaceDir: path.join(rootDir, fileConfig.workspaceDir),
      stateDir: path.join(rootDir, "state")
    }
  };
}
