import assert from "node:assert/strict";
import fs from "node:fs";
import fsPromises from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import type { IncomingMessage, ServerResponse } from "node:http";
import { describe, it } from "node:test";

import { handleAtlasOnboardingRequest } from "../../src/atlas/routes/onboarding.ts";
import {
  renderAtlasHomeHtml,
  renderAtlasSessionsHtml,
  type AtlasPageData,
} from "../../src/atlas/renderer.ts";
import { createAtlasDesktopPackageLayout } from "../../scripts/atlas_desktop_package.ts";

interface ResponseCapture {
  readonly headersSent: boolean;
  readonly statusCode: number;
  readonly headers: Record<string, string>;
  readonly body: string;
}

function buildPageData(overrides: Partial<AtlasPageData> = {}): AtlasPageData {
  return {
    title: "ATLAS Home",
    repoLabel: "Ancora-Labs/ATLAS",
    hostLabel: "Windows host",
    shellCommand: ".\\ATLAS.cmd",
    pipelineStageLabel: "Workers Running",
    pipelineDetail: "Delivering the ATLAS desktop shell",
    pipelinePercent: 87,
    updatedAt: "2026-04-25T00:00:00.000Z",
    buildSessionId: "desktop-session-9",
    buildTimestamp: "2026-04-25T00:05:00.000Z",
    homeReadinessHeading: "Ready to resume",
    homeReadinessDetail: "One or more roles can continue from their recorded state.",
    homePrimaryActionLabel: "Resume session flow",
    focusedSessionRole: "quality-worker",
    missingFocusedSnapshot: false,
    sessions: [
      {
        role: "quality-worker",
        name: "Quality lane",
        lane: "quality",
        status: "working",
        statusLabel: "In progress",
        readiness: "in_progress",
        readinessLabel: "In progress",
        lastTask: "Lock the premium desktop regression baseline.",
        lastActiveAt: "2026-04-25T00:00:00.000Z",
        historyLength: 2,
        lastThinking: "",
        currentBranch: "feat/premium-desktop-tests",
        pullRequestCount: 1,
        touchedFileCount: 5,
        needsInput: false,
        isResumable: true,
        isPaused: false,
        canArchive: false,
      },
    ],
    ...overrides,
  };
}

function createResponseCapture(): ServerResponse<IncomingMessage> & ResponseCapture {
  let headersSent = false;
  let statusCode = 0;
  let body = "";
  const headers: Record<string, string> = {};

  return {
    get headersSent() {
      return headersSent;
    },
    get statusCode() {
      return statusCode;
    },
    get headers() {
      return headers;
    },
    get body() {
      return body;
    },
    writeHead(code: number, nextHeaders?: Record<string, string>) {
      statusCode = code;
      for (const [key, value] of Object.entries(nextHeaders || {})) {
        headers[key.toLowerCase()] = String(value);
      }
      return this;
    },
    end(chunk?: string | Buffer) {
      headersSent = true;
      body += chunk ? String(chunk) : "";
      return this;
    },
  } as ServerResponse<IncomingMessage> & ResponseCapture;
}

function createJsonRequest(body: string, method = "POST"): IncomingMessage {
  return {
    method,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    setEncoding() {},
    on(event, handler) {
      if (event === "data") {
        handler(body);
      }
      if (event === "end") {
        handler();
      }
      return this;
    },
  } as unknown as IncomingMessage;
}

function createTempRoot(): Promise<string> {
  return fsPromises.mkdtemp(path.join(os.tmpdir(), "atlas-premium-desktop-"));
}

describe("update the existing atlas test suite so it stops protecting the old shell", () => {
  it("pins the premium desktop sidebar, main canvas, and composer hierarchy instead of the old dashboard shell", () => {
    const homeHtml = renderAtlasHomeHtml(buildPageData());
    const sessionsHtml = renderAtlasSessionsHtml(buildPageData({ title: "ATLAS Sessions" }));

    for (const html of [homeHtml, sessionsHtml]) {
      assert.match(html, /aria-label="ATLAS desktop surface"/);
      assert.match(html, /aria-label="ATLAS desktop sidebar"/);
      assert.match(html, /aria-label="ATLAS work canvas"/);
      assert.match(html, /aria-label="Desktop composer"/);
      assert.match(html, /Persistent left sidebar/);
      assert.doesNotMatch(html, /dashboard-card|hero-panel|metric-card|window-controls|traffic-light/i);
    }

    assert.match(homeHtml, /Desktop continuity/);
    assert.match(homeHtml, /Restored the last clarification objective for this desktop session\./);
    assert.match(homeHtml, /Saved the workspace draft for this desktop shell\./);
    assert.match(sessionsHtml, /Trust-first work ledger/);
    assert.match(sessionsHtml, /Focused workspace/);
  });

  it("keeps sparse-state rendering and portable packaging guarantees deterministic", async () => {
    const homeHtml = renderAtlasHomeHtml(buildPageData({
      sessions: [],
      focusedSessionRole: null,
      homeReadinessHeading: "Ready to start",
      homeReadinessDetail: "No resumable session is active yet. Open Sessions to begin the next role handoff.",
      homePrimaryActionLabel: "Open sessions",
    }));
    const layout = createAtlasDesktopPackageLayout(path.join("C:", "ATLAS Release Root"));
    const atlasCmd = fs.readFileSync(path.join(process.cwd(), "ATLAS.cmd"), "utf8");
    const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8")) as {
      scripts?: Record<string, string>;
    };

    assert.match(homeHtml, /No session state is available yet\./);
    assert.match(homeHtml, /No live session snapshot yet/);
    assert.match(homeHtml, /data-has-live-sessions="false"/);
    assert.equal(layout.portableRoot, path.join("C:", "ATLAS Release Root", "dist", "ATLAS"));
    assert.equal(layout.portableExePath, path.join("C:", "ATLAS Release Root", "dist", "ATLAS", "ATLAS.exe"));
    assert.equal(packageJson.scripts?.["atlas:desktop:package"], "node --import tsx scripts/atlas_desktop_package.ts");
    assert.match(atlasCmd, /Packaging the portable Windows desktop folder/i);
  });

  it("[NEGATIVE] reports onboarding failures without minting a desktop session or fake shell state", async () => {
    const tempRoot = await createTempRoot();

    try {
      const missingSessionRequest = createJsonRequest(JSON.stringify({
        objective: "Try to onboard without a desktop session.",
      }));
      const missingSessionResponse = createResponseCapture();

      await handleAtlasOnboardingRequest(missingSessionRequest, missingSessionResponse, {
        stateDir: path.join(tempRoot, "state"),
      });

      assert.equal(missingSessionResponse.statusCode, 409);
      assert.match(missingSessionResponse.body, /"code":"desktop_session_missing"/);

      const failedRunnerRequest = createJsonRequest(JSON.stringify({
        objective: "Refresh the composer clarification after relaunch.",
      }));
      const failedRunnerResponse = createResponseCapture();

      await handleAtlasOnboardingRequest(failedRunnerRequest, failedRunnerResponse, {
        stateDir: path.join(tempRoot, "state"),
        sessionId: "desktop-session-negative",
        targetRepo: "Ancora-Labs/ATLAS",
        clarificationRunner: async () => {
          throw new Error("Clarification provider unavailable.");
        },
      });

      assert.equal(failedRunnerResponse.statusCode, 502);
      assert.match(failedRunnerResponse.body, /"code":"clarification_invocation_failed"/);
      assert.match(failedRunnerResponse.body, /Clarification provider unavailable\./);
      assert.equal(
        fs.existsSync(path.join(tempRoot, "state", "atlas", "desktop_sessions", "desktop-session-negative", "clarification_packet.json")),
        false,
      );
    } finally {
      await fsPromises.rm(tempRoot, { recursive: true, force: true });
    }
  });
});
