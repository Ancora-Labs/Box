import { SYSTEM_STATUS_REASON_CODE } from "../core/pipeline_progress.js";

interface AtlasSessionCard {
  name?: string;
  status?: string;
  lastTask?: string;
  lastActiveAt?: string | null;
}

export interface AtlasSessionSummary {
  projectLabel?: string;
  targetRepo?: string;
  systemStatus?: string;
  systemStatusText?: string;
  degradedReason?: string | null;
  statusFreshnessAt?: string | null;
  pipelineStageLabel?: string;
  pipelineDetail?: string;
  pipelinePercent?: number;
  sessions?: AtlasSessionCard[];
}

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function formatTimestamp(value: string | null | undefined): string {
  if (!value) return "Waiting for the next update";
  const timestamp = new Date(value);
  if (Number.isNaN(timestamp.getTime())) return "Waiting for the next update";
  return timestamp.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function describeStatusNote(reason: string | null | undefined): string | null {
  switch (reason) {
    case SYSTEM_STATUS_REASON_CODE.FALLBACK_HEURISTIC:
      return "Live status is catching up to the latest cycle data.";
    case SYSTEM_STATUS_REASON_CODE.MISSING_PIPELINE_STATE:
      return "Cycle data is not available yet, so ATLAS Home is waiting for the first write.";
    case SYSTEM_STATUS_REASON_CODE.DAEMON_OFFLINE:
      return "The delivery engine is offline. Start the system to resume work.";
    case SYSTEM_STATUS_REASON_CODE.HEALTH_FILE_DEGRADED:
      return "Delivery health needs attention before the next cycle can proceed.";
    default:
      return null;
  }
}

function statusTone(status: string): "active" | "attention" | "idle" {
  if (status === "working") return "active";
  if (status === "blocked" || status === "error") return "attention";
  return "idle";
}

function sessionStatusLabel(status: string): string {
  if (status === "working") return "Active";
  if (status === "blocked" || status === "error") return "Needs review";
  if (status === "done") return "Ready";
  return "Idle";
}

export function renderAtlasHtml(sessionSummary: AtlasSessionSummary): string {
  const sessions = Array.isArray(sessionSummary.sessions) ? sessionSummary.sessions : [];
  const orderedSessions = [...sessions].sort((left, right) => {
    const leftTone = statusTone(String(left?.status || "").toLowerCase());
    const rightTone = statusTone(String(right?.status || "").toLowerCase());
    const rank = { active: 0, attention: 1, idle: 2 };
    return rank[leftTone] - rank[rightTone] || String(left?.name || "").localeCompare(String(right?.name || ""));
  });
  const activeSessions = orderedSessions.filter((session) => String(session?.status || "").toLowerCase() === "working").length;
  const note = describeStatusNote(sessionSummary.degradedReason || null);
  const pipelinePercent = Math.max(0, Math.min(100, Number(sessionSummary.pipelinePercent || 0)));
  const updatedLabel = formatTimestamp(sessionSummary.statusFreshnessAt || null);
  // Cycle 1 receives only the normalized session summary fields already exposed by the live dashboard payload.
  const sessionMarkup = orderedSessions.length > 0
    ? orderedSessions.map((session) => {
      const status = String(session?.status || "idle").toLowerCase();
      const tone = statusTone(status);
      return `
        <article class="session-card ${escapeHtml(tone)}">
          <div class="session-card__top">
            <strong>${escapeHtml(session?.name || "Session")}</strong>
            <span>${escapeHtml(sessionStatusLabel(status))}</span>
          </div>
          <p>${escapeHtml(String(session?.lastTask || "").trim() || "Waiting for the next assignment")}</p>
          <small>${escapeHtml(formatTimestamp(session?.lastActiveAt || null))}</small>
        </article>
      `;
    }).join("")
    : `
      <article class="empty-state">
        <strong>No active sessions yet.</strong>
        <p>ATLAS Home will update when the next cycle writes session activity.</p>
      </article>
    `;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ATLAS Home</title>
  <style>
    :root {
      color-scheme: dark;
      --bg: #09131a;
      --panel: rgba(13, 27, 35, 0.9);
      --panel-strong: rgba(17, 36, 46, 0.96);
      --line: rgba(121, 212, 193, 0.16);
      --text: #ecfffb;
      --muted: #9cbfba;
      --accent: #79d4c1;
      --attention: #ffb56b;
      --danger: #ff8f86;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: Inter, "Segoe UI", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(121, 212, 193, 0.16), transparent 25%),
        radial-gradient(circle at top right, rgba(103, 151, 255, 0.14), transparent 24%),
        linear-gradient(180deg, #09131a 0%, #101c24 100%);
    }
    main {
      max-width: 1080px;
      margin: 0 auto;
      padding: 28px 20px 40px;
    }
    .hero, .panel, .metric, .session-card, .empty-state {
      border: 1px solid var(--line);
      border-radius: 20px;
      background: var(--panel);
    }
    .hero, .panel { padding: 22px; }
    .hero {
      background: linear-gradient(135deg, rgba(20, 49, 58, 0.98), rgba(11, 23, 30, 0.98));
      margin-bottom: 18px;
    }
    .hero__top, .hero__meta, .session-card__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }
    .eyebrow, .session-card span, small, a {
      color: var(--muted);
      font-size: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    h1, h2, p { margin: 0; }
    h1 { font-size: clamp(32px, 6vw, 52px); }
    h2 { font-size: clamp(22px, 4vw, 30px); }
    .hero p, .panel p {
      margin-top: 12px;
      color: #d3eee8;
      line-height: 1.5;
    }
    a {
      text-decoration: none;
      border-bottom: 1px solid transparent;
    }
    a:hover { color: var(--text); border-color: var(--accent); }
    .hero__badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(121, 212, 193, 0.08);
      border: 1px solid rgba(121, 212, 193, 0.18);
    }
    .hero__note {
      margin-top: 16px;
      padding: 12px 14px;
      border-radius: 14px;
      border: 1px solid rgba(255, 181, 107, 0.22);
      background: rgba(255, 181, 107, 0.08);
      color: #ffe5c2;
    }
    .metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin: 18px 0;
    }
    .metric {
      padding: 16px;
      background: var(--panel-strong);
      min-height: 128px;
    }
    .metric strong {
      display: block;
      margin: 12px 0 8px;
      font-size: 30px;
    }
    .progress {
      width: 100%;
      height: 12px;
      margin-top: 16px;
      border-radius: 999px;
      overflow: hidden;
      background: rgba(121, 212, 193, 0.08);
    }
    .progress > span {
      display: block;
      height: 100%;
      width: ${escapeHtml(pipelinePercent)}%;
      background: linear-gradient(90deg, var(--accent), #a6ece0);
    }
    .session-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-top: 16px;
    }
    .session-card, .empty-state {
      padding: 16px;
      background: var(--panel-strong);
    }
    .session-card.active { border-color: rgba(121, 212, 193, 0.4); }
    .session-card.attention { border-color: rgba(255, 143, 134, 0.4); }
    .session-card.idle { border-color: rgba(156, 191, 186, 0.25); }
    .session-card p, .empty-state p { margin: 12px 0; }
    .summary-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }
  </style>
</head>
<body>
  <main>
    <section class="hero">
      <div class="hero__top">
        <div>
          <div class="eyebrow">ATLAS Home</div>
          <h1>${escapeHtml(sessionSummary.projectLabel || "ATLAS")}</h1>
        </div>
        <a href="/">Open operations dashboard</a>
      </div>
      <p>${escapeHtml(sessionSummary.systemStatusText || "System ready")} · ${escapeHtml(sessionSummary.targetRepo || "Target repo not configured")}</p>
      <div class="hero__meta">
        <div class="hero__badge">
          <span class="eyebrow">Updated</span>
          <strong>${escapeHtml(updatedLabel)}</strong>
        </div>
        <div class="hero__badge">
          <span class="eyebrow">Current cycle</span>
          <strong>${escapeHtml(sessionSummary.pipelineStageLabel || "Idle")}</strong>
        </div>
      </div>
      ${note ? `<div class="hero__note">${escapeHtml(note)}</div>` : ""}
    </section>

    <section class="metrics" aria-label="ATLAS status">
      <article class="metric">
        <span class="eyebrow">Delivery status</span>
        <strong>${escapeHtml(String(sessionSummary.systemStatus || "idle").toUpperCase())}</strong>
        <p>${escapeHtml(sessionSummary.systemStatusText || "System ready")}</p>
      </article>
      <article class="metric">
        <span class="eyebrow">Current cycle</span>
        <strong>${escapeHtml(`${pipelinePercent}%`)}</strong>
        <p>${escapeHtml(sessionSummary.pipelineStageLabel || "Idle")}</p>
      </article>
      <article class="metric">
        <span class="eyebrow">Active sessions</span>
        <strong>${escapeHtml(String(activeSessions))}</strong>
        <p>${escapeHtml(`${orderedSessions.length} tracked sessions`)}</p>
      </article>
    </section>

    <section class="panel" aria-labelledby="atlas-cycle-heading">
      <div class="summary-row">
        <div>
          <div class="eyebrow">Cycle summary</div>
          <h2 id="atlas-cycle-heading">${escapeHtml(sessionSummary.pipelineStageLabel || "Idle")}</h2>
        </div>
        <div class="eyebrow">${escapeHtml(sessionSummary.targetRepo || "Target repo not configured")}</div>
      </div>
      <div class="progress" aria-hidden="true"><span></span></div>
      <p>${escapeHtml(sessionSummary.pipelineDetail || "Waiting for the next cycle update")}</p>
    </section>

    <section class="panel" aria-labelledby="atlas-sessions-heading">
      <div class="eyebrow">Sessions</div>
      <h2 id="atlas-sessions-heading">Session-centered control surface</h2>
      <div class="session-grid">
        ${sessionMarkup}
      </div>
    </section>
  </main>
</body>
</html>`;
}
