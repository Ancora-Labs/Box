function baseTasks(summary) {
  const tasks = [];

  if (!summary.hasPackageJson) {
    tasks.push({
      id: 1,
      title: "Bootstrap package metadata and scripts",
      priority: 1,
      kind: "bootstrap"
    });
  }

  tasks.push(
    {
      id: tasks.length + 1,
      title: "Improve test reliability and coverage",
      priority: 2,
      kind: "quality"
    },
    {
      id: tasks.length + 1,
      title: "Harden error handling and logs",
      priority: 3,
      kind: "stability"
    },
    {
      id: tasks.length + 1,
      title: "Prepare production deployment checks",
      priority: 4,
      kind: "production"
    }
  );

  return tasks;
}

export async function createPlan({ summary, reviewer, config }) {
  const planned = baseTasks(summary).slice(0, config.planner.maxTasks);

  if (!config.planner.useClaudeForPlanning || !config.env.claudeApiKey) {
    return planned;
  }

  const reviewed = await reviewer.reviewPlan(summary, planned);
  return reviewed?.tasks?.length ? reviewed.tasks : planned;
}
