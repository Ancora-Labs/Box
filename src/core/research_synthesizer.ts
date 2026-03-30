/**
 * Research Synthesizer — Knowledge Compression Engine
 *
 * Takes the Research Scout's raw findings and produces a structured,
 * topic-organized synthesis for Prometheus. Uses 1 premium request.
 *
 * Rules:
 *   - Does NOT lose useful information
 *   - Compresses FORMAT, not CONTENT
 *   - Groups by topic, not by source
 *   - Surfaces contradictions explicitly
 *   - Preserves technical details (algorithms, libraries, metrics)
 *
 * Output: synthesized research in state/research_synthesis.json
 * Live log: state/live_worker_research-synthesizer.log
 */

import path from "node:path";
import fs from "node:fs/promises";
import { appendFileSync } from "node:fs";
import { writeJson, spawnAsync } from "./fs_utils.js";
import { appendProgress } from "./state_tracker.js";
import { buildAgentArgs } from "./agent_loader.js";
import { section, compilePrompt } from "./prompt_compiler.js";
import { appendAgentContextUsage, resolveMaxPromptBudget } from "./context_usage.js";
import { appendAggregateLiveLogSync } from "./live_log.js";

function liveLogPath(stateDir: string): string {
  return path.join(stateDir, "live_worker_research-synthesizer.log");
}

function appendLiveLogSync(stateDir: string, text: string): void {
  try {
    appendFileSync(liveLogPath(stateDir), text, "utf8");
    appendAggregateLiveLogSync(stateDir, "research-synthesizer", text);
  } catch { /* best-effort */ }
}

/**
 * Parse structured topic sections from the Synthesizer's raw text output.
 */
function parseSynthesisTopics(rawText: string): Array<Record<string, unknown>> {
  const topics: Array<Record<string, unknown>> = [];
  // Split by topic headers: ## Topic: <name>
  const blocks = rawText.split(/##\s*Topic:\s*/i).filter(b => b.trim());

  for (const block of blocks) {
    const topic: Record<string, unknown> = {};

    // Topic name is the first line
    const firstLine = block.split("\n")[0]?.trim();
    if (firstLine) topic.topic = firstLine;

    // Extract fields
    const findingsMatch = block.match(/\*?\*?Net\s*Findings\*?\*?:\s*\n([\s\S]*?)(?=\n\*?\*?Applicable|$)/i);
    if (findingsMatch) {
      topic.netFindings = findingsMatch[1]
        .split("\n")
        .map(l => l.replace(/^[\s-*•]+/, "").trim())
        .filter(l => l.length > 0);
    }

    const ideasMatch = block.match(/\*?\*?Applicable\s*Ideas\s*for\s*BOX\*?\*?:\s*\n([\s\S]*?)(?=\n\*?\*?Risks|$)/i);
    if (ideasMatch) {
      topic.applicableIdeas = ideasMatch[1]
        .split("\n")
        .map(l => l.replace(/^[\s-*•]+/, "").trim())
        .filter(l => l.length > 0);
    }

    const risksMatch = block.match(/\*?\*?Risks\*?\*?:\s*\n([\s\S]*?)(?=\n\*?\*?Conflicting|$)/i);
    if (risksMatch) {
      topic.risks = risksMatch[1]
        .split("\n")
        .map(l => l.replace(/^[\s-*•]+/, "").trim())
        .filter(l => l.length > 0);
    }

    const conflictsMatch = block.match(/\*?\*?Conflicting\s*Views\*?\*?:\s*\n([\s\S]*?)(?=\n\*?\*?Confidence|$)/i);
    if (conflictsMatch) {
      topic.conflictingViews = conflictsMatch[1]
        .split("\n")
        .map(l => l.replace(/^[\s-*•]+/, "").trim())
        .filter(l => l.length > 0);
    }

    const confMatch = block.match(/\*?\*?Confidence\*?\*?:\s*(.+)/i);
    if (confMatch) topic.confidence = confMatch[1].trim();

    const freshMatch = block.match(/\*?\*?Freshness\*?\*?:\s*(.+)/i);
    if (freshMatch) topic.freshness = freshMatch[1].trim();

    const sourcesMatch = block.match(/\*?\*?Sources\*?\*?:\s*\n([\s\S]*?)(?=\n##|$)/i);
    if (sourcesMatch) {
      topic.sourceList = sourcesMatch[1]
        .split("\n")
        .map(l => l.replace(/^[\s-*•]+/, "").trim())
        .filter(l => l.length > 0);
    }

    if (topic.topic) {
      topics.push(topic);
    }
  }

  return topics;
}

/**
 * Extract research gaps section from synthesizer output.
 */
function extractResearchGaps(rawText: string): string {
  const gapsMatch = rawText.match(/##\s*Research\s*Gaps?\s*\n([\s\S]*?)(?=\n##|$)/i);
  return gapsMatch ? gapsMatch[1].trim() : "";
}

/**
 * Extract cross-topic connections from synthesizer output.
 */
function extractCrossTopicConnections(rawText: string): string {
  const connMatch = rawText.match(/##\s*Cross[- ]Topic\s*Connections?\s*\n([\s\S]*?)(?=\n##|$)/i);
  return connMatch ? connMatch[1].trim() : "";
}

export interface ResearchSynthesisResult {
  success: boolean;
  topicCount: number;
  topics: Array<Record<string, unknown>>;
  crossTopicConnections: string;
  researchGaps: string;
  rawText: string;
  synthesizedAt: string;
  scoutSourceCount: number;
  model: string;
  error?: string;
}

/**
 * Run the Research Synthesizer — 1 premium request.
 *
 * Takes the Scout's raw output and produces a topic-organized synthesis
 * that Prometheus reads before planning.
 */
export async function runResearchSynthesizer(config: any, scoutOutput: any): Promise<ResearchSynthesisResult> {
  const stateDir = config.paths?.stateDir || "state";
  const command = config.env?.copilotCliCommand || "copilot";
  const model = config.roleRegistry?.researchSynthesizer?.model || "Claude Sonnet 4.6";

  const ts = () => new Date().toISOString().replace("T", " ").slice(0, 19);

  // Initialize live log
  try {
    await fs.writeFile(liveLogPath(stateDir), `[research_synthesizer_live]\n[${ts()}] Research Synthesizer starting...\n`, "utf8");
  } catch { /* best-effort */ }

  await appendProgress(config, `[RESEARCH_SYNTHESIZER] Starting synthesis of ${scoutOutput?.sourceCount || 0} source(s)`);

  // Build prompt with the Scout's raw output as input
  const scoutRawText = String(scoutOutput?.rawText || "");
  const sourceCount = scoutOutput?.sourceCount || 0;

  const compiledPrompt = compilePrompt([
    section("task", `## YOUR TASK
Below is the raw research output from the Research Scout.
It contains ${sourceCount} source(s) with extracted findings.
Your job: synthesize this into a structured, topic-organized output that Prometheus can use for planning.
Follow your agent definition's output format exactly.
Do NOT lose useful information. Compress the format, not the content.
If sources contradict each other, document the contradiction explicitly.`),
    section("scout-output", `## RESEARCH SCOUT RAW OUTPUT
${scoutRawText}`),
  ], {
    tokenBudget: resolveMaxPromptBudget(
      config,
      String(model || "Claude Sonnet 4.6"),
      Number(config?.runtime?.researchSynthesizerPromptTokenBudget)
    ) || undefined,
  });
  const contextPrompt = compiledPrompt;

  // Build args — Synthesizer only needs read/search, not web access
  const args = buildAgentArgs({
    agentSlug: "research-synthesizer",
    prompt: contextPrompt,
    model,
    allowAll: false,
    maxContinues: undefined,
  });

  appendLiveLogSync(stateDir, `\n[synthesizer_start] ${ts()}\n`);

  const result = await spawnAsync(command, args, {
    env: process.env,
    onStdout(chunk: Buffer) {
      appendLiveLogSync(stateDir, chunk.toString("utf8"));
    },
    onStderr(chunk: Buffer) {
      appendLiveLogSync(stateDir, chunk.toString("utf8"));
    },
  });

  appendLiveLogSync(stateDir, `\n[synthesizer_end] ${ts()} exit=${(result as any).status}\n`);

  const stdout = String((result as any)?.stdout || "");
  const stderr = String((result as any)?.stderr || "");
  const raw = stdout || stderr;
  await appendAgentContextUsage(config, {
    agent: "research-synthesizer",
    model: String(model || "Claude Sonnet 4.6"),
    promptText: contextPrompt,
    status: (result as any).status === 0 ? "success" : "failed",
  });

  if ((result as any).status !== 0) {
    const error = `exited ${(result as any).status}: ${(stderr || stdout).slice(0, 500)}`;
    await appendProgress(config, `[RESEARCH_SYNTHESIZER] Failed — ${error}`);
    return {
      success: false,
      topicCount: 0,
      topics: [],
      crossTopicConnections: "",
      researchGaps: "",
      rawText: raw,
      synthesizedAt: new Date().toISOString(),
      scoutSourceCount: sourceCount,
      model,
      error,
    };
  }

  // Parse structured topics
  const topics = parseSynthesisTopics(raw);
  const crossTopicConnections = extractCrossTopicConnections(raw);
  const researchGaps = extractResearchGaps(raw);

  const output: ResearchSynthesisResult = {
    success: true,
    topicCount: topics.length,
    topics,
    crossTopicConnections,
    researchGaps,
    rawText: raw,
    synthesizedAt: new Date().toISOString(),
    scoutSourceCount: sourceCount,
    model,
  };

  // Persist synthesis for Prometheus to read
  await writeJson(path.join(stateDir, "research_synthesis.json"), output);

  await appendProgress(config, `[RESEARCH_SYNTHESIZER] Complete — ${topics.length} topic(s) synthesized from ${sourceCount} source(s)`);

  return output;
}

/**
 * Build a compact prompt section from the synthesis for injection into Prometheus.
 * This is what Prometheus actually reads — dense, structured, actionable.
 */
export function buildResearchSectionForPrometheus(synthesis: ResearchSynthesisResult | null): string {
  if (!synthesis || !synthesis.success || synthesis.topicCount === 0) {
    return "";
  }

  const topicBlocks = synthesis.topics.map((t, i) => {
    const findings = Array.isArray(t.netFindings) ? (t.netFindings as string[]).join("\n  - ") : "none";
    const ideas = Array.isArray(t.applicableIdeas) ? (t.applicableIdeas as string[]).join("\n  - ") : "none";
    const risks = Array.isArray(t.risks) ? (t.risks as string[]).join("\n  - ") : "none";
    const conflicts = Array.isArray(t.conflictingViews) && (t.conflictingViews as string[]).length > 0
      ? (t.conflictingViews as string[]).join("\n  - ")
      : "none";
    const sources = Array.isArray(t.sourceList) ? (t.sourceList as string[]).join(", ") : "n/a";

    return `### ${i + 1}. ${t.topic || "Untitled Topic"}
  Confidence: ${t.confidence || "unknown"} | Freshness: ${t.freshness || "unknown"}
  **Net Findings:**
  - ${findings}
  **Applicable Ideas for BOX:**
  - ${ideas}
  **Risks:** ${risks}
  **Conflicting Views:** ${conflicts}
  **Sources:** ${sources}`;
  }).join("\n\n");

  let section = `\n\n## EXTERNAL RESEARCH INTELLIGENCE (from Research Scout + Synthesizer)
${synthesis.topicCount} topic(s) synthesized from ${synthesis.scoutSourceCount} internet source(s) (synthesized at ${synthesis.synthesizedAt}).
Use this research to inform your planning. Prioritize ideas with high confidence and direct applicability to BOX.

${topicBlocks}`;

  if (synthesis.crossTopicConnections) {
    section += `\n\n### Cross-Topic Connections\n${synthesis.crossTopicConnections}`;
  }

  return section;
}
