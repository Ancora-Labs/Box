import fs from "node:fs/promises";
import path from "node:path";

function inferCommands(packageJson) {
  const scripts = packageJson?.scripts ?? {};
  return {
    install: scripts.ci ? "npm run ci" : "npm ci",
    build: scripts.build ? "npm run build" : null,
    test: scripts.test ? "npm test -- --ci" : null,
    lint: scripts.lint ? "npm run lint" : null
  };
}

export async function scanProject(config) {
  const packagePath = path.join(config.rootDir, "package.json");
  const result = {
    timestamp: new Date().toISOString(),
    rootDir: config.rootDir,
    hasPackageJson: false,
    packageName: null,
    scripts: {},
    commands: {}
  };

  try {
    const raw = await fs.readFile(packagePath, "utf8");
    const pkg = JSON.parse(raw);
    result.hasPackageJson = true;
    result.packageName = pkg.name ?? null;
    result.scripts = pkg.scripts ?? {};
    result.commands = inferCommands(pkg);
  } catch {
    result.commands = {
      install: "npm ci",
      build: null,
      test: null,
      lint: null
    };
  }

  return result;
}
