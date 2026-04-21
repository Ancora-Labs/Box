import { after, before, describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import http from "node:http";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { renderAtlasHtml } from "../../src/dashboard/atlas_render.ts";

function createTempRoot() {
  return fs.mkdtemp(path.join(os.tmpdir(), "box-atlas-home-"));
}

function getFreePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      const port = address && typeof address === "object" ? address.port : 0;
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(port);
      });
    });
    server.on("error", reject);
  });
}

function requestText(port: number, pathname: string): Promise<{ status: number; text: string }> {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: "127.0.0.1",
      port,
      path: pathname,
      method: "GET",
    }, (res) => {
      let raw = "";
      res.on("data", (chunk) => {
        raw += String(chunk);
      });
      res.on("end", () => {
        resolve({
          status: Number(res.statusCode || 0),
          text: raw,
        });
      });
    });
    req.on("error", reject);
    req.end();
  });
}

function buildSummary(overrides = {}) {
  return {
    projectLabel: "ATLAS",
    targetRepo: "Ancora-Labs/Box",
    systemStatus: "working",
    systemStatusText: "Workers Active",
    statusFreshnessAt: "2026-04-21T12:00:00.000Z",
    pipelineStageLabel: "Workers Running",
    pipelineDetail: "Rendering the ATLAS entry surface",
    pipelinePercent: 85,
    sessions: [
      {
        name: "Athena",
        status: "working",
        lastTask: "Validate the regression suite",
        lastActiveAt: "2026-04-21T12:00:00.000Z",
      },
      {
        name: "Prometheus",
        status: "blocked",
        lastTask: "Waiting on review notes",
        lastActiveAt: "2026-04-21T11:45:00.000Z",
      },
      {
        name: "Hermes",
        status: "done",
        lastTask: "Closed the previous session",
        lastActiveAt: "2026-04-21T11:30:00.000Z",
      },
      {
        name: "Atlas",
        status: "idle",
        lastTask: "",
        lastActiveAt: "2026-04-21T11:15:00.000Z",
      },
    ],
    ...overrides,
  };
}

describe("renderAtlasHtml", () => {
  it("renders the ATLAS surface with the primary nav, resumable action, summary cards, and no internal labels", () => {
    const html = renderAtlasHtml(buildSummary());

    assert.match(html, /<title>ATLAS<\/title>/);
    assert.match(html, /<nav class="primary-nav" aria-label="Primary">[\s\S]*>Home<\/a>[\s\S]*>Sessions<\/a>[\s\S]*>New Session<\/a>[\s\S]*>Settings<\/a>/);
    assert.match(html, />Continue last session</);
    assert.match(html, /<span>Total sessions<\/span>\s*<strong>4<\/strong>/);
    assert.match(html, /<span>Active sessions<\/span>\s*<strong>1<\/strong>/);
    assert.match(html, /<span>Sessions needing input<\/span>\s*<strong>1<\/strong>/);
    assert.match(html, /<span>Recently completed<\/span>\s*<strong>1<\/strong>/);
    assert.doesNotMatch(html, /Athena|Prometheus|Hermes/);
    assert.doesNotMatch(html, /self-improvement/i);
  });

  it("maps the health badge states to the requested labels", () => {
    const scenarios = [
      { systemStatus: "idle", label: "Ready" },
      { systemStatus: "working", label: "Working" },
      { systemStatus: "degraded", label: "Needs attention" },
      { systemStatus: "offline", label: "Stopped" },
    ];

    for (const scenario of scenarios) {
      const html = renderAtlasHtml(buildSummary({
        systemStatus: scenario.systemStatus,
        sessions: [],
      }));
      const badgePattern = new RegExp(`<span>Health<\\/span>\\s*<strong>${scenario.label}<\\/strong>`);
      assert.match(html, badgePattern);
    }
  });

  it("[NEGATIVE] shows the fallback primary action when there is no resumable session", () => {
    const html = renderAtlasHtml(buildSummary({
      systemStatus: "idle",
      sessions: [
        {
          name: "Hermes",
          status: "done",
          lastTask: "Closed the previous session",
          lastActiveAt: "2026-04-21T11:30:00.000Z",
        },
      ],
    }));

    assert.match(html, />Open sessions</);
    assert.doesNotMatch(html, />Continue last session</);
    assert.match(html, /<span>Total sessions<\/span>\s*<strong>1<\/strong>/);
    assert.match(html, /<span>Recently completed<\/span>\s*<strong>1<\/strong>/);
  });
});

describe("/atlas route", () => {
  let tempRoot = "";
  let port = 0;
  let server: http.Server | null = null;

  before(async () => {
    tempRoot = await createTempRoot();
    const stateDir = path.join(tempRoot, "state");
    await fs.mkdir(stateDir, { recursive: true });

    await fs.writeFile(path.join(stateDir, "worker_sessions.json"), JSON.stringify({
      Atlas: {
        role: "Atlas",
        status: "working",
        lastTask: "Serve the ATLAS route",
        lastActiveAt: "2026-04-21T12:00:00.000Z",
        history: [],
      },
      Athena: {
        role: "Athena",
        status: "blocked",
        lastTask: "Await operator input",
        lastActiveAt: "2026-04-21T11:45:00.000Z",
        history: [],
      },
      Hermes: {
        role: "Hermes",
        status: "done",
        lastTask: "Closed the previous session",
        lastActiveAt: "2026-04-21T11:30:00.000Z",
        history: [],
      },
    }), "utf8");

    await fs.writeFile(path.join(stateDir, "pipeline_progress.json"), JSON.stringify({
      stage: "workers_running",
      stageLabel: "Workers Running",
      percent: 85,
      detail: "Serving /atlas",
      steps: [],
      updatedAt: "2026-04-21T12:00:00.000Z",
      startedAt: "2026-04-21T11:58:00.000Z",
    }), "utf8");

    await fs.writeFile(path.join(stateDir, "orchestrator_health.json"), JSON.stringify({
      orchestratorStatus: "operational",
      reason: null,
      details: null,
      recordedAt: "2026-04-21T12:00:00.000Z",
    }), "utf8");

    await fs.writeFile(path.join(stateDir, "completed_projects.json"), "[]", "utf8");
    await fs.writeFile(path.join(tempRoot, "box.config.json"), JSON.stringify({}), "utf8");

    process.env.BOX_ROOT_DIR = tempRoot;
    process.env.BOX_DASHBOARD_PORT = "9878";
    process.env.TARGET_REPO = "Ancora-Labs/Box";

    const moduleUrl = `${pathToFileURL(path.join(process.cwd(), "src", "dashboard", "live_dashboard.ts")).href}?atlas_route=${Date.now()}`;
    const { startDashboard } = await import(moduleUrl);

    port = await getFreePort();
    server = startDashboard({ port });
    await new Promise<void>((resolve, reject) => {
      if (server?.listening) {
        resolve();
        return;
      }
      server?.once("listening", resolve);
      server?.once("error", reject);
    });
  });

  after(async () => {
    if (server?.listening) {
      await new Promise<void>((resolve) => {
        server?.close(() => resolve());
      });
    }
    await fs.rm(tempRoot, { recursive: true, force: true });
    delete process.env.BOX_ROOT_DIR;
    delete process.env.BOX_DASHBOARD_PORT;
    delete process.env.TARGET_REPO;
  });

  it("serves the ATLAS entry surface from /atlas without changing the existing / dashboard", async () => {
    const atlasResponse = await requestText(port, "/atlas");
    const rootResponse = await requestText(port, "/");

    assert.equal(atlasResponse.status, 200);
    assert.match(atlasResponse.text, /<title>ATLAS<\/title>/);
    assert.match(atlasResponse.text, />Continue last session</);
    assert.match(atlasResponse.text, /<span>Total sessions<\/span>\s*<strong>3<\/strong>/);
    assert.match(atlasResponse.text, /<span>Sessions needing input<\/span>\s*<strong>1<\/strong>/);
    assert.doesNotMatch(atlasResponse.text, /Athena|Hermes/);

    assert.equal(rootResponse.status, 200);
    assert.match(rootResponse.text, /<title>BOX Mission Control<\/title>/);
    assert.doesNotMatch(rootResponse.text, /<title>ATLAS<\/title>/);
  });
});
