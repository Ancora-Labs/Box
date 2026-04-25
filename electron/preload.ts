import { contextBridge, ipcRenderer } from "electron";

import type { AtlasClarificationPacket } from "../src/atlas/clarification.js";
import type { AtlasDesktopBootstrap, AtlasDesktopState } from "../src/atlas/desktop_state.js";
import type {
  AtlasSnapshotRequestPayload,
  AtlasSnapshotResponse,
} from "../src/atlas/routes/home.js";

interface AtlasDesktopClarificationSuccess {
  ok: true;
  ready: true;
  packet: AtlasClarificationPacket;
}

interface AtlasDesktopClarificationFailure {
  ok: false;
  error: string;
  code: string;
}

type AtlasDesktopClarificationResult = AtlasDesktopClarificationSuccess | AtlasDesktopClarificationFailure;

contextBridge.exposeInMainWorld("atlasDesktop", {
  getBootstrap(): Promise<AtlasDesktopBootstrap> {
    return ipcRenderer.invoke("atlas-desktop:get-bootstrap");
  },
  getWorkspaceState(): Promise<AtlasDesktopState> {
    return ipcRenderer.invoke("atlas-desktop:get-workspace-state");
  },
  refreshSnapshot(request: AtlasSnapshotRequestPayload = {}): Promise<AtlasSnapshotResponse> {
    return ipcRenderer.invoke("atlas-desktop:refresh-snapshot", request);
  },
  getSnapshot(request: AtlasSnapshotRequestPayload = {}): Promise<AtlasSnapshotResponse> {
    return ipcRenderer.invoke("atlas-desktop:get-snapshot", request);
  },
  setWorkspaceDraft(draft: string): Promise<{ ok: true }> {
    return ipcRenderer.invoke("atlas-desktop:set-workspace-draft", { draft });
  },
  setWorkspaceComposerFocus(focused: boolean): Promise<{ ok: true }> {
    return ipcRenderer.invoke("atlas-desktop:set-workspace-composer-focus", { focused });
  },
  startSession(objective: string): Promise<AtlasDesktopClarificationResult> {
    return ipcRenderer.invoke("atlas-desktop:start-session", { objective });
  },
});
