import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";

import { createAtlasDesktopPackageLayout } from "../../scripts/atlas_desktop_package.ts";

const ROOT = path.resolve(import.meta.dirname, "..", "..");
const PACKAGE_JSON_PATH = path.join(ROOT, "package.json");
const README_PATH = path.join(ROOT, "README.md");
const ATLAS_CMD_PATH = path.join(ROOT, "ATLAS.cmd");

interface PackageJsonShape {
  main?: string;
  scripts?: Record<string, string>;
  build?: {
    appId?: string;
    productName?: string;
    win?: {
      target?: string[];
      executableName?: string;
      signAndEditExecutable?: boolean;
    };
  };
}

function readPackageJson(): PackageJsonShape {
  return JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, "utf8")) as PackageJsonShape;
}

describe("atlas desktop packaging", () => {
  it("defines explicit Electron Builder Windows metadata for the ATLAS executable", () => {
    const pkg = readPackageJson();

    assert.equal(pkg.main, ".electron-build/electron/main.js");
    assert.equal(pkg.build?.appId, "com.ancoralabs.atlas");
    assert.equal(pkg.build?.productName, "ATLAS");
    assert.deepEqual(pkg.build?.win?.target, ["dir"]);
    assert.equal(pkg.build?.win?.executableName, "ATLAS");
    assert.equal(pkg.build?.win?.signAndEditExecutable, false);
  });

  it("derives a deterministic portable folder layout with a root-level ATLAS.exe", () => {
    const layout = createAtlasDesktopPackageLayout(ROOT);

    assert.equal(layout.distRoot, path.join(ROOT, "dist"));
    assert.equal(layout.stagingRoot, path.join(ROOT, "dist", ".atlas-builder"));
    assert.equal(layout.stagedAppRoot, path.join(ROOT, "dist", ".atlas-builder", "win-unpacked"));
    assert.equal(layout.portableRoot, path.join(ROOT, "dist", "ATLAS"));
    assert.equal(layout.portableExePath, path.join(ROOT, "dist", "ATLAS", "ATLAS.exe"));
  });

  it("documents and exposes the portable packaging flow via the launcher and README", () => {
    const pkg = readPackageJson();
    const atlasCmd = fs.readFileSync(ATLAS_CMD_PATH, "utf8");
    const readme = fs.readFileSync(README_PATH, "utf8");

    assert.equal(pkg.scripts?.["atlas:desktop:package"], "node --import tsx scripts/atlas_desktop_package.ts");
    assert.match(atlasCmd, /if \/I "%ATLAS_ACTION%"=="package" goto :package/i);
    assert.match(atlasCmd, /echo \[ATLAS\]   ATLAS\.cmd package/i);
    assert.match(readme, /ATLAS\.cmd package/i);
    assert.match(readme, /dist\\ATLAS\\ATLAS\.exe/i);
  });

  it("[NEGATIVE] rejects blank portable folder names so packaging cannot emit an ambiguous directory", () => {
    assert.throws(
      () => createAtlasDesktopPackageLayout(ROOT, "   "),
      /portable folder name/i,
    );
  });
});
