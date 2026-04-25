import { getDesktopLayoutMode } from "./layout.js";

const statusEl = document.querySelector("[data-role='status']");
const detailEl = document.querySelector("[data-role='detail']");
const errorEl = document.querySelector("[data-role='error']");
const repoEl = document.querySelector("[data-role='repo']");
const sessionEl = document.querySelector("[data-role='session']");
const shellEl = document.querySelector("[data-role='shell']");
const workspaceUrlEl = document.querySelector("[data-role='workspace-url']");

function setLayoutMode() {
  document.body.dataset.layout = getDesktopLayoutMode(window.innerWidth);
}

function setStatus(message, detail = "") {
  if (statusEl) {
    statusEl.textContent = message;
  }
  if (detailEl) {
    detailEl.textContent = detail;
  }
}

async function bootstrap() {
  if (!window.atlasDesktop?.getBootstrap) {
    throw new Error("ATLAS desktop bridge is unavailable.");
  }

  const bootstrapData = await window.atlasDesktop.getBootstrap();
  const workspaceUrl = new URL("/", bootstrapData.serverUrl).toString();
  if (repoEl) {
    repoEl.textContent = bootstrapData.targetRepo || "Target repo";
  }
  if (sessionEl) {
    sessionEl.textContent = bootstrapData.sessionId;
  }
  if (shellEl) {
    shellEl.textContent = ".\\ATLAS.cmd";
  }
  if (workspaceUrlEl) {
    workspaceUrlEl.textContent = workspaceUrl;
  }

  setStatus(
    "Opening the ATLAS desktop workspace.",
    "This packaged renderer remains as a portable compatibility handoff while the native window moves into the live workspace surface.",
  );
  window.location.replace(workspaceUrl);
}

window.addEventListener("resize", setLayoutMode);
setLayoutMode();

bootstrap().catch((error) => {
  console.error("[atlas] workspace handoff bootstrap failed:", error);
  if (errorEl) {
    errorEl.textContent = String(error?.message || error || "ATLAS desktop workspace handoff failed.");
  }
  setStatus(
    "Workspace handoff failed.",
    "ATLAS could not read the packaged desktop bootstrap, so the live workspace could not open from this compatibility shell.",
  );
});
