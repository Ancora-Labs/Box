import http, { type IncomingMessage, type ServerResponse } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { type AtlasClarificationRunner } from "./clarification.js";
import {
  ATLAS_LEGACY_SNAPSHOT_PATH,
  ATLAS_SNAPSHOT_PATH,
  handleAtlasHomeRequest,
  handleAtlasSnapshotRequest,
  type AtlasHomeRouteOptions,
} from "./routes/home.js";
import { handleAtlasLifecycleRequest } from "./routes/lifecycle.js";
import { handleAtlasWorkspaceSessionBriefRequest } from "./routes/onboarding.js";

const ATLAS_WORKSPACE_SESSION_BRIEF_PATH = "/api/workspace/session-brief";
const ATLAS_LEGACY_ONBOARDING_STATUS_PATH = "/api/onboarding/status";
const ATLAS_LEGACY_ONBOARDING_SUBMIT_PATH = "/api/onboarding/clarify";

function writeTemporaryRedirect(res: ServerResponse, location: string): void {
  res.writeHead(307, {
    location,
    "cache-control": "no-store",
    "content-type": "text/plain; charset=utf-8",
  });
  res.end(`Temporary Redirect: ${location}`);
}

export const ATLAS_DEFAULT_PORT = 8788;

export interface AtlasServerOptions extends Partial<AtlasHomeRouteOptions> {
  port?: number;
  desktopSessionId?: string;
  clarificationCommand?: string;
  clarificationRunner?: AtlasClarificationRunner;
}

interface ResolvedAtlasServerOptions extends Required<AtlasHomeRouteOptions> {
  port: number;
  desktopSessionId: string;
  clarificationCommand: string;
  clarificationRunner?: AtlasClarificationRunner;
}

function resolveAtlasServerOptions(options: AtlasServerOptions = {}): ResolvedAtlasServerOptions {
  const explicitPort = options.port;
  const rawPort = Number(explicitPort ?? process.env.ATLAS_PORT ?? process.env.BOX_ATLAS_PORT ?? ATLAS_DEFAULT_PORT);
  return {
    port: explicitPort === 0
      ? 0
      : (Number.isInteger(rawPort) && rawPort > 0 ? rawPort : ATLAS_DEFAULT_PORT),
    stateDir: String(options.stateDir || path.join(process.cwd(), "state")),
    targetRepo: String(options.targetRepo || process.env.TARGET_REPO || ""),
    hostLabel: String(options.hostLabel || process.env.BOX_ATLAS_HOST_LABEL || "Windows host"),
    shellCommand: String(options.shellCommand || process.env.BOX_ATLAS_SHELL_COMMAND || ".\\ATLAS.cmd"),
    desktopSessionId: String(options.desktopSessionId || "").trim(),
    desktopSnapshotToken: String(options.desktopSnapshotToken || "").trim(),
    clarificationCommand: String(options.clarificationCommand || "").trim(),
    clarificationRunner: options.clarificationRunner,
  };
}

async function routeAtlasRequest(
  req: IncomingMessage,
  res: ServerResponse,
  options: ResolvedAtlasServerOptions,
): Promise<void> {
  const url = new URL(req.url || "/", "http://127.0.0.1");

  try {
    if (url.pathname === ATLAS_LEGACY_ONBOARDING_STATUS_PATH || url.pathname === ATLAS_LEGACY_ONBOARDING_SUBMIT_PATH) {
      const canonicalMethod = url.pathname === ATLAS_LEGACY_ONBOARDING_STATUS_PATH ? "GET" : "POST";
      const pathname = ATLAS_WORKSPACE_SESSION_BRIEF_PATH;
      const redirectUrl = new URL(pathname, "http://127.0.0.1");
      if (canonicalMethod === "GET") {
        redirectUrl.search = url.search;
      }
      writeTemporaryRedirect(res, redirectUrl.pathname + redirectUrl.search);
      return;
    }

    if (url.pathname === ATLAS_WORKSPACE_SESSION_BRIEF_PATH) {
      await handleAtlasWorkspaceSessionBriefRequest(req, res, {
        stateDir: options.stateDir,
        sessionId: options.desktopSessionId || undefined,
        targetRepo: options.targetRepo,
        clarificationCommand: options.clarificationCommand,
        clarificationRunner: options.clarificationRunner,
      });
      return;
    }

    if (url.pathname === "/") {
      await handleAtlasHomeRequest(req, res, options);
      return;
    }

    if (url.pathname === ATLAS_SNAPSHOT_PATH || url.pathname === ATLAS_LEGACY_SNAPSHOT_PATH) {
      await handleAtlasSnapshotRequest(req, res, options);
      return;
    }

    if (url.pathname === "/sessions") {
      if (String(req.method || "GET").toUpperCase() !== "GET") {
        res.writeHead(405, { "content-type": "text/html; charset=utf-8" });
        res.end("<!doctype html><html><body><h1>Method Not Allowed</h1></body></html>");
        return;
      }
      const redirectUrl = new URL("/", "http://127.0.0.1");
      redirectUrl.search = url.search;
      writeTemporaryRedirect(res, redirectUrl.pathname + redirectUrl.search);
      return;
    }

    if (url.pathname === "/lifecycle" || url.pathname === "/api/lifecycle") {
      await handleAtlasLifecycleRequest(req, res, {
        stateDir: options.stateDir,
        pathname: url.pathname,
      });
      return;
    }

    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    res.end("<!doctype html><html><body><h1>ATLAS route not found</h1></body></html>");
  } catch (error) {
    console.error(`[atlas] request routing failed: ${String((error as Error)?.message || error)}`);
    if (!res.headersSent) {
      res.writeHead(500, { "content-type": "text/html; charset=utf-8" });
    }
    res.end("<!doctype html><html><body><h1>ATLAS server unavailable</h1><p>Review the server logs and try again.</p></body></html>");
  }
}

export function createAtlasServer(options: AtlasServerOptions = {}): http.Server {
  const resolvedOptions = resolveAtlasServerOptions(options);
  return http.createServer((req, res) => {
    routeAtlasRequest(req, res, resolvedOptions).catch((error) => {
      console.error(`[atlas] unhandled request failure: ${String((error as Error)?.message || error)}`);
      if (!res.headersSent) {
        res.writeHead(500, { "content-type": "text/html; charset=utf-8" });
      }
      res.end("<!doctype html><html><body><h1>ATLAS server unavailable</h1><p>Review the server logs and try again.</p></body></html>");
    });
  });
}

export async function startAtlasServer(options: AtlasServerOptions = {}): Promise<http.Server> {
  const resolvedOptions = resolveAtlasServerOptions(options);
  const server = createAtlasServer(resolvedOptions);

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(resolvedOptions.port, "127.0.0.1", () => {
      server.off("error", reject);
      resolve(server);
    });
  });
}

async function main(): Promise<void> {
  try {
    const server = await startAtlasServer();
    const address = server.address();
    const port = address && typeof address === "object" ? address.port : ATLAS_DEFAULT_PORT;
    console.log(`[atlas] server running at http://127.0.0.1:${port}`);
  } catch (error) {
    console.error(`[atlas] failed to start server: ${String((error as Error)?.message || error)}`);
    process.exitCode = 1;
  }
}

const entryFile = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (entryFile === fileURLToPath(import.meta.url)) {
  main();
}
