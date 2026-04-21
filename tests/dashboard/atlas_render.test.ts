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

describe("renderAtlasHtml", () => {
  it("renders the ATLAS Home control surface from session summary data", () => {
    const html = renderAtlasHtml({
      projectLabel: "ATLAS",
      targetRepo: "Ancora-Labs/Box",
      systemStatus: "working",
      systemStatusText: "Workers Active",
      statusFreshnessAt: "2026-04-21T12:00:00.000Z",
      pipelineStageLabel: "Workers Running",
      pipelineDetail: "Rendering the new ATLAS route",
      pipelinePercent: 85,
      sessions: [
        {
          name: "Atlas",
          status: "working",
          lastTask: "Ship the ATLAS Home route",
          lastActiveAt: "2026-04-21T12:00:00.000Z",
        },
      ],
    });

    assert.match(html, /<title>ATLAS Home<\/title>/);
    assert.match(html, /Session-centered control surface/);
    assert.match(html, /Ship the ATLAS Home route/);
    assert.match(html, /Ancora-Labs\/Box/);
  });

  it("[NEGATIVE] renders the empty state and reason note when sessions are absent", () => {
    const html = renderAtlasHtml({
      systemStatus: "idle",
      systemStatusText: "System Idle",
      degradedReason: "MISSING_PIPELINE_STATE",
      pipelineStageLabel: "Idle",
      pipelineDetail: "Waiting for the next cycle",
      pipelinePercent: 0,
      sessions: [],
    });

    assert.match(html, /No active sessions yet\./);
    assert.match(html, /Cycle data is not available yet/);
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
        lastTask: "Serve the ATLAS Home route",
        lastActiveAt: "2026-04-21T12:00:00.000Z",
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

  it("serves ATLAS Home from /atlas without changing the existing / dashboard", async () => {
    const atlasResponse = await requestText(port, "/atlas");
    const rootResponse = await requestText(port, "/");

    assert.equal(atlasResponse.status, 200);
    assert.match(atlasResponse.text, /<title>ATLAS Home<\/title>/);
    assert.match(atlasResponse.text, /Serve the ATLAS Home route/);

    assert.equal(rootResponse.status, 200);
    assert.match(rootResponse.text, /<title>BOX Mission Control<\/title>/);
    assert.doesNotMatch(rootResponse.text, /<title>ATLAS Home<\/title>/);
  });
});
