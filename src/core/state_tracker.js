import fs from "node:fs/promises";
import { ensureParent, readJson, writeJson } from "./fs_utils.js";

function getMonthKey(date = new Date()) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function aggregateByMonth(entries) {
  const result = {};
  for (const entry of entries) {
    const key = getMonthKey(new Date(entry.timestamp));
    if (!result[key]) {
      result[key] = {
        totalCalls: 0,
        opusCalls: 0,
        autoFallbacks: 0,
        byModel: {}
      };
    }

    const model = String(entry?.copilot?.model || "unknown");
    const invocation = String(entry?.copilot?.invocation || "unknown");
    const usedOpus = Boolean(entry?.copilot?.usedOpus);

    result[key].totalCalls += 1;
    result[key].byModel[model] = (result[key].byModel[model] || 0) + 1;
    if (usedOpus) {
      result[key].opusCalls += 1;
    }
    if (invocation.includes("fallback")) {
      result[key].autoFallbacks += 1;
    }
  }
  return result;
}

export async function appendProgress(config, message) {
  await ensureParent(config.paths.progressFile);
  const line = `[${new Date().toISOString()}] ${message}\n`;
  await fs.appendFile(config.paths.progressFile, line, "utf8");
}

export async function loadTestsState(config) {
  return readJson(config.paths.testsStateFile, {
    tests: [],
    totals: {
      passed: 0,
      failed: 0,
      running: 0,
      queued: 0
    },
    updatedAt: new Date().toISOString()
  });
}

export async function updateTaskInTestsState(config, task, status, notes = "") {
  const state = await loadTestsState(config);
  const existing = state.tests.find((t) => t.id === task.id);

  if (existing) {
    existing.status = status;
    existing.title = task.title;
    existing.notes = notes;
    existing.updatedAt = new Date().toISOString();
  } else {
    state.tests.push({
      id: task.id,
      name: task.title,
      title: task.title,
      status,
      notes,
      updatedAt: new Date().toISOString()
    });
  }

  state.totals = {
    passed: state.tests.filter((t) => t.status === "passed").length,
    failed: state.tests.filter((t) => t.status === "failed").length,
    running: state.tests.filter((t) => t.status === "running").length,
    queued: state.tests.filter((t) => t.status === "queued").length
  };
  state.updatedAt = new Date().toISOString();

  await writeJson(config.paths.testsStateFile, state);
}

export async function appendCopilotUsage(config, usage) {
  const state = await readJson(config.paths.copilotUsageFile, {
    entries: [],
    updatedAt: new Date().toISOString()
  });

  state.entries.push({
    ...usage,
    timestamp: new Date().toISOString()
  });

  if (state.entries.length > 500) {
    state.entries = state.entries.slice(-500);
  }

  state.updatedAt = new Date().toISOString();
  await writeJson(config.paths.copilotUsageFile, state);

  const byMonth = aggregateByMonth(state.entries);
  await writeJson(config.paths.copilotUsageMonthlyFile, {
    generatedAt: new Date().toISOString(),
    byMonth
  });
}

export async function getCurrentMonthCopilotStats(config) {
  const monthly = await readJson(config.paths.copilotUsageMonthlyFile, {
    byMonth: {}
  });
  const key = getMonthKey(new Date());
  return monthly.byMonth?.[key] || {
    totalCalls: 0,
    opusCalls: 0,
    autoFallbacks: 0,
    byModel: {}
  };
}
