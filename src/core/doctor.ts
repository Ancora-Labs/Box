import { execSync, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { info, warn } from "./logger.js";
import { validateCriticalAgentContracts } from "./agent_loader.js";
import { readJson, writeJson } from "./fs_utils.js";

const COPILOT_AUTH_PROBE_CACHE_FILE = "copilot_auth_probe.json";
const COPILOT_AUTH_PROBE_MAX_AGE_MS = 12 * 60 * 60 * 1000;

export function classifyCopilotTokenType(token: string | null | undefined): "github_pat" | "gho" | "ghp" | "unknown" | "none" {
  const normalized = String(token || "").trim();
  if (!normalized) return "none";
  if (normalized.startsWith("github_pat_")) return "github_pat";
  if (normalized.startsWith("gho_")) return "gho";
  if (normalized.startsWith("ghp_")) return "ghp";
  return "unknown";
}

export function buildCopilotAuthFingerprint(input: {
  copilotToken: string | null | undefined;
  ghAuthActive: boolean;
  ghActiveAccount?: string | null;
}): string {
  const normalizedToken = String(input.copilotToken || "").trim();
  if (normalizedToken) {
    const tokenHash = createHash("sha256").update(normalizedToken).digest("hex").slice(0, 16);
    return `env:${classifyCopilotTokenType(normalizedToken)}:${tokenHash}`;
  }
  if (input.ghAuthActive) {
    return `gh:${String(input.ghActiveAccount || "active").trim().toLowerCase() || "active"}`;
  }
  return "none";
}

export function classifyCopilotAuthInputs(input: {
  copilotToken: string | null | undefined;
  ghAuthActive: boolean;
  ghActiveAccount?: string | null;
}): {
  ready: boolean;
  source: "env" | "gh" | "none";
  tokenType: "github_pat" | "gho" | "ghp" | "unknown" | "none";
  fingerprint: string;
  issues: string[];
} {
  const normalizedToken = String(input.copilotToken || "").trim();
  const tokenType = classifyCopilotTokenType(normalizedToken);
  const issues: string[] = [];

  if (normalizedToken) {
    if (tokenType === "ghp") {
      issues.push("COPILOT_GITHUB_TOKEN uses a classic ghp_ PAT, which Copilot CLI does not support");
    } else if (tokenType === "unknown") {
      issues.push("COPILOT_GITHUB_TOKEN has an unsupported token format for Copilot CLI");
    }
    return {
      ready: issues.length === 0,
      source: "env",
      tokenType,
      fingerprint: buildCopilotAuthFingerprint(input),
      issues,
    };
  }

  if (input.ghAuthActive) {
    return {
      ready: true,
      source: "gh",
      tokenType: "none",
      fingerprint: buildCopilotAuthFingerprint(input),
      issues: [],
    };
  }

  issues.push("No Copilot auth source available — set COPILOT_GITHUB_TOKEN or login with gh/coplayot CLI");
  return {
    ready: false,
    source: "none",
    tokenType: "none",
    fingerprint: "none",
    issues,
  };
}

export function shouldReuseCopilotAuthProbe(cache: any, fingerprint: string, cliPath: string, nowMs = Date.now()): boolean {
  if (!cache || typeof cache !== "object") return false;
  if (cache.ok !== true) return false;
  if (String(cache.fingerprint || "") !== String(fingerprint || "")) return false;
  if (String(cache.cliPath || "") !== String(cliPath || "")) return false;
  const checkedAtMs = Date.parse(String(cache.checkedAt || ""));
  if (!Number.isFinite(checkedAtMs)) return false;
  return (nowMs - checkedAtMs) <= COPILOT_AUTH_PROBE_MAX_AGE_MS;
}

export function parseGhAuthStatusOutput(text: string): { authenticated: boolean; activeAccount: string | null } {
  const normalized = String(text || "");
  const activeMatch = normalized.match(/Logged in to github\.com account\s+([^\s]+)[\s\S]*?Active account:\s*true/i);
  if (activeMatch) {
    return { authenticated: true, activeAccount: String(activeMatch[1] || "").trim() || null };
  }
  return { authenticated: false, activeAccount: null };
}

function capture(command: string) {
  try {
    const stdout = execSync(command, { stdio: ["ignore", "pipe", "pipe"], windowsHide: true, encoding: "utf8" });
    return { ok: true, stdout: String(stdout || ""), stderr: "" };
  } catch (error) {
    return {
      ok: false,
      stdout: String((error as any)?.stdout || ""),
      stderr: String((error as any)?.stderr || ""),
    };
  }
}

function check(command) {
  try {
    execSync(command, { stdio: "ignore", windowsHide: true });
    return true;
  } catch {
    return false;
  }
}

function resolveCopilotProbeInvocation(copilotCliCommand: string, prompt: string): { command: string; args: string[] } {
  const normalizedCommand = String(copilotCliCommand || "copilot").trim() || "copilot";
  const commonArgs = [
    "-p", prompt,
    "--output-format", "text",
    "--allow-all-tools",
    "--no-ask-user",
    "--no-custom-instructions",
    "--stream", "off",
    "--effort", "low",
    "--silent",
  ];
  if (normalizedCommand.toLowerCase().endsWith(".ps1")) {
    return {
      command: "powershell",
      args: ["-NoProfile", "-ExecutionPolicy", "Bypass", "-File", normalizedCommand, ...commonArgs],
    };
  }
  return { command: normalizedCommand, args: commonArgs };
}

async function readCopilotAuthProbeCache(stateDir: string) {
  return readJson(path.join(stateDir, COPILOT_AUTH_PROBE_CACHE_FILE), null);
}

async function writeCopilotAuthProbeCache(stateDir: string, payload: Record<string, unknown>) {
  await writeJson(path.join(stateDir, COPILOT_AUTH_PROBE_CACHE_FILE), payload);
}

async function probeCopilotAuth(config, authAssessment, ghAuthStatus) {
  const stateDir = config?.paths?.stateDir || "state";
  const cliPath = String(config?.env?.copilotCliCommand || "copilot");
  const cached = await readCopilotAuthProbeCache(stateDir).catch(() => null);
  if (shouldReuseCopilotAuthProbe(cached, authAssessment.fingerprint, cliPath)) {
    return {
      ok: true,
      reused: true,
      message: `cached_success checkedAt=${String(cached.checkedAt || "")}`,
    };
  }

  const prompt = "Reply with exactly AUTH_OK and nothing else.";
  const invocation = resolveCopilotProbeInvocation(cliPath, prompt);
  const probe = spawnSync(invocation.command, invocation.args, {
    windowsHide: true,
    encoding: "utf8",
    env: process.env,
    timeout: 20_000,
  });
  const stdout = String(probe.stdout || "");
  const stderr = String(probe.stderr || "");
  const combined = `${stdout}\n${stderr}`.trim();
  const ok = probe.status === 0 && /\bAUTH_OK\b/.test(stdout);
  const payload = {
    schemaVersion: 1,
    checkedAt: new Date().toISOString(),
    ok,
    fingerprint: authAssessment.fingerprint,
    cliPath,
    source: authAssessment.source,
    tokenType: authAssessment.tokenType,
    ghActiveAccount: ghAuthStatus.activeAccount,
    status: probe.status,
    message: ok
      ? "copilot_auth_probe_ok"
      : String(combined || `probe exited ${probe.status}`).slice(0, 500),
  };
  await writeCopilotAuthProbeCache(stateDir, payload).catch(() => {});
  return {
    ok,
    reused: false,
    message: String(payload.message || "copilot_auth_probe_failed"),
  };
}

/**
 * Run preflight capability checks before a cycle starts.
 * Returns a structured result so the orchestrator can decide whether to proceed.
 *
 * @param {object} config
 * @returns {Promise<{ ok: boolean, checks: Record<string, boolean>, warnings: string[], blockingFailures: string[] }>}
 */
export async function runDoctor(config) {
  const warnings = [];
  const blockingFailures: string[] = [];
  const stateDir = config?.paths?.stateDir || "state";
  const ghCliStatus = capture("gh auth status");
  const ghAuthStatus = parseGhAuthStatusOutput(`${ghCliStatus.stdout}\n${ghCliStatus.stderr}`);
  const authAssessment = classifyCopilotAuthInputs({
    copilotToken: config?.env?.copilotGithubToken || process.env.COPILOT_GITHUB_TOKEN || null,
    ghAuthActive: ghAuthStatus.authenticated,
    ghActiveAccount: ghAuthStatus.activeAccount,
  });

  const checks = {
    node: check("node --version"),
    docker: check("docker --version"),
    githubToken: Boolean(config.env?.githubToken),
    ghAuth: ghAuthStatus.authenticated,
    copilotAuthSource: authAssessment.ready,
    targetRepo: Boolean(config.env?.targetRepo),
    stateDir: existsSync(stateDir),
    copilotCli: check(`${config.env?.copilotCliCommand || "copilot"} --version`),
    gitAvailable: check("git --version"),
    agentContracts: true, // initialised optimistic; set below
    copilotAuth: false,
  };

  // ── Agent contract validation ──────────────────────────────────────────────
  // Validate prometheus and athena have required frontmatter fields.
  // Non-fatal at doctor level: the governance gate enforces the hard block.
  try {
    const agentValidation = validateCriticalAgentContracts();
    checks.agentContracts = agentValidation.allValid;
    if (!agentValidation.allValid) {
      const details = agentValidation.violations
        .map(v => `${v.slug}: [${v.violations.join(", ")}]`)
        .join("; ");
      warnings.push(`Agent contract violations detected: ${details}`);
    }
  } catch (err) {
    checks.agentContracts = false;
    warnings.push(`Agent contract check failed: ${String((err as Error)?.message || err)}`);
  }

  info("doctor checks", checks);

  if (!checks.githubToken || !checks.targetRepo) {
    warnings.push("GitHub integration not ready: set GITHUB_TOKEN and TARGET_REPO in .env");
  }
  if (!checks.stateDir) {
    warnings.push(`State directory "${stateDir}" does not exist`);
  }
  if (!checks.copilotCli) {
    warnings.push("Copilot CLI not found — AI agent calls will fail");
  }
  if (!checks.gitAvailable) {
    warnings.push("Git not available — source control operations will fail");
  }
  if (!checks.copilotAuthSource) {
    blockingFailures.push(...authAssessment.issues);
  }
  if (!checks.ghAuth) {
    warnings.push("GitHub CLI auth is not active — Copilot CLI must rely on env token or stored Copilot login");
  }

  if (checks.copilotCli && authAssessment.ready) {
    const probeResult = await probeCopilotAuth(config, authAssessment, ghAuthStatus);
    checks.copilotAuth = probeResult.ok;
    if (!probeResult.ok) {
      blockingFailures.push(`Copilot auth probe failed: ${probeResult.message}`);
    }
  }

  warnings.push(...authAssessment.issues.filter((issue) => !blockingFailures.includes(issue)));

  for (const w of warnings) warn(w);
  for (const failure of blockingFailures) warn(`[doctor][blocking] ${failure}`);

  // agentContracts is a critical check: the governance gate hard-blocks dispatch
  // when agent frontmatter is invalid, so include it in the ok gate so that the
  // preflight report accurately surfaces the violation before the gate fires.
  const ok = checks.node
    && checks.githubToken
    && checks.targetRepo
    && checks.stateDir
    && checks.agentContracts
    && checks.copilotCli
    && checks.gitAvailable
    && checks.copilotAuth
    && blockingFailures.length === 0;
  return { ok, checks, warnings, blockingFailures };
}
