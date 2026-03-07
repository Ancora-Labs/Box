export function evaluateGates(config, workerResult) {
  const gates = config.gates;
  const failures = [];

  if (gates.requireBuild && !workerResult.buildOk) {
    failures.push("build gate failed");
  }

  if (gates.requireTests && !workerResult.testsOk) {
    failures.push("test gate failed");
  }

  if (gates.requireLint && !workerResult.lintOk) {
    failures.push("lint gate failed");
  }

  if (typeof workerResult.coveragePercent === "number" && workerResult.coveragePercent < gates.minCoveragePercent) {
    failures.push(`coverage below threshold: ${workerResult.coveragePercent} < ${gates.minCoveragePercent}`);
  }

  return {
    ok: failures.length === 0,
    failures
  };
}
