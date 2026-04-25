import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { describe, it } from "node:test";

import { getDesktopLayoutMode } from "../../electron/renderer/layout.js";

const ROOT = path.resolve(import.meta.dirname, "..", "..");

describe("atlas_desktop_onboarding_shell", () => {
  it("keeps the workspace handoff contract pinned across the renderer and desktop bridge surfaces", async () => {
    const html = await fs.readFile(path.join(ROOT, "electron", "renderer", "index.html"), "utf8");
    const appScript = await fs.readFile(path.join(ROOT, "electron", "renderer", "app.js"), "utf8");
    const preload = await fs.readFile(path.join(ROOT, "electron", "preload.ts"), "utf8");
    const mainProcess = await fs.readFile(path.join(ROOT, "electron", "main.ts"), "utf8");

    assert.match(html, /Native Windows title bar/);
    assert.match(html, /Workspace handoff/);
    assert.match(html, /data-role="detail"/);
    assert.match(html, /Portable renderer compatibility/);
    assert.doesNotMatch(html, /window-controls|Run clarification and open ATLAS|Objective composer/);

    assert.match(appScript, /window\.atlasDesktop\?\.getBootstrap/);
    assert.match(appScript, /Opening the ATLAS desktop workspace\./);
    assert.match(appScript, /window\.location\.replace\(workspaceUrl\)/);
    assert.match(appScript, /Workspace handoff failed\./);

    assert.match(preload, /getWorkspaceState/);
    assert.match(preload, /atlas-desktop:get-workspace-state/);
    assert.match(preload, /setWorkspaceDraft/);
    assert.match(preload, /atlas-desktop:set-workspace-draft/);
    assert.match(preload, /setWorkspaceComposerFocus/);
    assert.match(preload, /atlas-desktop:set-workspace-composer-focus/);
    assert.match(preload, /atlas-desktop:start-session/);
    assert.doesNotMatch(preload, /setOnboardingDraft|submitClarification/);

    assert.match(mainProcess, /createAtlasDesktopWindowChromeOptions/);
    assert.match(mainProcess, /createAtlasAuthPopupOptions/);
    assert.match(mainProcess, /atlas-desktop:get-workspace-state/);
    assert.match(mainProcess, /atlas-desktop:set-workspace-draft/);
    assert.match(mainProcess, /atlas-desktop:set-workspace-composer-focus/);
    assert.match(mainProcess, /atlas-desktop:start-session/);
    assert.doesNotMatch(mainProcess, /atlas-desktop:set-onboarding-draft|atlas-desktop:submit-clarification/);
  });

  it("[NEGATIVE] keeps narrow viewports stacked until the workspace has room for the rail plus composer layout", () => {
    assert.equal(getDesktopLayoutMode(Number.NaN), "stacked");
    assert.equal(getDesktopLayoutMode(1099), "stacked");
    assert.equal(getDesktopLayoutMode(1100), "split");
  });
});
