# BOX Starter

BOX is a repo-agnostic orchestrator daemon that scans a target project, plans tasks, runs isolated workers, and applies quality gates before merge decisions.

## What this starter includes

- BOX core loop (`planner`, `queue`, `policy`, `budget`, `checkpoint`, `review`).
- Dockerized worker image for isolated task runs.
- Provider abstraction for coder and reviewer models.
- State files for tasks, summary, budget, and run logs.
- Long-horizon state tracking via `state/progress.txt` and `state/tests.json`.
- Copilot model strategy controls with usage telemetry in `state/copilot_usage.json`.
- Monthly Copilot usage summary in `state/copilot_usage_monthly.json`.

## Quick start

1. Copy `.env.example` to `.env` and fill values.
1. Install dependencies:

```bash
npm install
```

1. Build worker image:

```bash
docker build -t box-worker:local -f docker/worker/Dockerfile .
```

1. Run one cycle:

```bash
npm run box:once
```

1. Run daemon loop:

```bash
npm run box:start
```

## Important notes

- `GITHUB_TOKEN` and `TARGET_REPO` are required for real repo operations.
- Copilot CLI may vary by platform. Set `COPILOT_CLI_COMMAND` in `.env`.
- Claude is used for critical planning/review paths only by default.
- Claude review prompt uses structured JSON output with retries and validation.
- Tune model behavior in `box.config.json` under `claude.thinking` and `claude.reviewMaxRetries`.

## Copilot model strategy

- Single strategy is `task-best`: choose the best model for the current task kind.
- Normal operation uses 1x models from `preferredModelsByTaskKind`.
- `Claude Opus 4.6` (3x) is only used when team lead (Claude reviewer) explicitly allows escalation for a task.
- `Claude Opus 4.6 (fast mode) (preview)` is hard-blocked via `neverUseModels`.
- `COPILOT_ALLOW_OPUS=false` keeps heuristic escalation off; team lead can still allow per-task escalation when risk is high.
- Opus escalation requires all gates: team-lead approval, `opusMinBudgetUsd`, and `opusMonthlyMaxCalls` cap.

## Custom prompts and agents

- Prompt files are in `.github/prompts/*.prompt.md` for repeatable workflows.
- Custom agent profiles are in `.github/agents/*.md` for role-based operation.
- Included starter agents: `box-team-lead`, `box-coder`.
- Runtime routes `task.kind` to agent/prompt using `copilot.taskKindRouting` in `box.config.json`.
- Up to `maxParallelWorkers` tasks are dispatched per cycle in parallel.

## Docker behavior

- Worker containers run as ephemeral jobs with `docker run --rm`.
- This means Docker Desktop may not show a running container if the task finishes quickly.
- The worker image should exist as `box-worker:local`.
- Successful task branches are pushed and a PR is auto-created by default (`git.autoCreatePr=true`).

┌──────────────────────┐
│      BOX CORE        │  ← Orchestrator daemon (node/ts)
│  - Project Scanner   │
│  - Task Planner      │  ← Claude (sadece planning/review calls)
│  - Policy Engine     │
│  - Task Queue        │
│  - Budget Controller │
│  - Checkpoint Engine │
└─────────┬────────────┘
          │
   ┌──────┴─────────┬───────────┬──────────┐
   │                │           │          │
Coder Worker  Reviewer Worker  Tester    Refactor Worker
(Copilot)     (Claude flow)     (Jest/Playwright)  (smart refactor)
   │                │           │          │
   └──────┬─────────┴───────────┴──────────┘
          │
      Docker Pool
          │
    Git Manager (create branch/commit/push/PR)
          │
      GitHub Repo (main source)
