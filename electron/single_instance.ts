export const ATLAS_WINDOWS_APP_ID = "com.ancoralabs.atlas";

export interface AtlasFocusableWindow {
  isDestroyed(): boolean;
  isMinimized(): boolean;
  restore(): void;
  focus(): void;
}

export function restoreAndFocusAtlasWindow(window: AtlasFocusableWindow | null): boolean {
  if (!window || window.isDestroyed()) {
    return false;
  }

  if (window.isMinimized()) {
    window.restore();
  }
  window.focus();
  return true;
}
