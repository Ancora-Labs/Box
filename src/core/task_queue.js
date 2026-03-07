import { readJson, writeJson } from "./fs_utils.js";

export async function loadQueue(config) {
  return readJson(config.paths.taskFile, {
    createdAt: new Date().toISOString(),
    tasks: []
  });
}

export async function saveQueue(config, queue) {
  await writeJson(config.paths.taskFile, queue);
}

export async function enqueueMissingTasks(config, tasks) {
  const queue = await loadQueue(config);
  const existingIds = new Set(queue.tasks.map((t) => t.id));
  const incoming = tasks.filter((t) => !existingIds.has(t.id)).map((t) => ({ ...t, status: "queued" }));
  queue.tasks.push(...incoming);
  await saveQueue(config, queue);
  return queue;
}

export async function popNextQueuedTask(config) {
  const queue = await loadQueue(config);
  const next = queue.tasks.find((t) => t.status === "queued");
  if (!next) {
    return null;
  }
  next.status = "running";
  next.startedAt = new Date().toISOString();
  await saveQueue(config, queue);
  return next;
}

export async function markTask(config, taskId, status, details = {}) {
  const queue = await loadQueue(config);
  const task = queue.tasks.find((t) => t.id === taskId);
  if (!task) {
    return;
  }
  task.status = status;
  task.updatedAt = new Date().toISOString();
  Object.assign(task, details);
  await saveQueue(config, queue);
}
