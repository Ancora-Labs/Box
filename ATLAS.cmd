@echo off
setlocal

pushd "%~dp0" >nul

where node >nul 2>nul
if errorlevel 1 (
  echo [ATLAS] Node.js was not found on PATH.
  echo [ATLAS] Install Node.js 20 or newer, reopen this launcher, and try again.
  popd >nul
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo [ATLAS] npm is not available on PATH.
  echo [ATLAS] Repair the Node.js installation, reopen this launcher, and try again.
  popd >nul
  exit /b 1
)

echo [ATLAS] Starting the dashboard for ATLAS Home...
start "ATLAS Dashboard" npm run box:dashboard
timeout /t 2 /nobreak >nul
start "" "http://localhost:8787/atlas"

popd >nul
exit /b 0
