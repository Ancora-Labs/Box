import type { IncomingMessage, ServerResponse } from "node:http";

import { renderAtlasWorkspaceHtml } from "../renderer.js";
import {
  buildAtlasPageData,
  resolveAtlasDesktopPageLocation,
  type AtlasHomeRouteOptions,
  writeAtlasHtmlResponse,
} from "./home.js";

export type AtlasSessionsRouteOptions = AtlasHomeRouteOptions;

function resolveLegacySessionsLocation(requestUrl: string | undefined) {
  const workspaceLocation = resolveAtlasDesktopPageLocation(requestUrl, "workspace");
  if (workspaceLocation.focusedSessionRole || !String(requestUrl || "").startsWith("/sessions")) {
    return workspaceLocation;
  }

  const parsedUrl = new URL(String(requestUrl || "/sessions"), "http://127.0.0.1");
  return {
    surface: "workspace" as const,
    focusedSessionRole: String(parsedUrl.searchParams.get("focusRole") || "").trim() || null,
  };
}

export async function handleAtlasSessionsRequest(
  req: IncomingMessage,
  res: ServerResponse,
  options: AtlasSessionsRouteOptions,
): Promise<void> {
  if (String(req.method || "GET").toUpperCase() !== "GET") {
    res.writeHead(405, { "content-type": "text/html; charset=utf-8" });
    res.end("<!doctype html><html><body><h1>Method Not Allowed</h1></body></html>");
    return;
  }

  try {
    const workspaceLocation = resolveLegacySessionsLocation(req.url);
    const pageData = await buildAtlasPageData(options, workspaceLocation);
    writeAtlasHtmlResponse(res, renderAtlasWorkspaceHtml(pageData));
  } catch (error) {
    console.error(`[atlas] sessions route failed: ${String((error as Error)?.message || error)}`);
    res.writeHead(500, { "content-type": "text/html; charset=utf-8" });
    res.end("<!doctype html><html><body><h1>ATLAS workspace unavailable</h1><p>Review the route logs and try again.</p></body></html>");
  }
}
