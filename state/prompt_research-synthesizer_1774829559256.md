## YOUR TASK
Below is the raw research output from the Research Scout.
It contains 19 source(s) with extracted findings.
Your job: synthesize this into a structured, topic-organized output that Prometheus can use for planning.
Follow your agent definition's output format exactly.
Do NOT lose useful information. Compress the format, not the content.
If sources contradict each other, document the contradiction explicitly.

## RESEARCH SCOUT RAW OUTPUT
I’ll gather fresh high-value sources from multiple domains (papers, docs, repos, benchmarks), then extract concrete, BOX-applicable findings and rank them.

● Search web for agent system sources (shell)
  │ python - <<'PY'
  │ import requests, re, urllib.parse
  │ queries=[
  │ "autonomous agent architecture evaluation framework",
  │ "LLM agent benchmark software engineering 2025",…
  └ 61 lines...

● Gather search result links from DuckDuckGo (shell)
  │ $queries = @(
  │ 'autonomous agent architecture evaluation framework',
  │ 'LLM agent benchmark software engineering 2025',
  │ 'multi-agent workflow orchestration deterministic',
  │ 'LLM tool use reliability paper',…
  └ 107 lines...

● Search for high-value agent architecture and eval sources (shell)
  │ $queries = @(
  │ 'OpenAI eval driven development agents',
  │ 'Google DeepMind AI agent planning architecture',
  │ 'OpenReview language agents reflection benchmark',
  │ 'SWE-bench verified benchmark paper',…
  └ 54 lines...

● Fetch candidate high-value source pages (shell)
  │ $urls = @(
  │ 'https://r.jina.ai/http://www.swebench.com/',
  │ 'https://r.jina.ai/http://www.swebench.com/swe-bench-verified.html',
  │ 'https://r.jina.ai/http://openai.com/index/introducing-swe-bench-verified/',
  │ 'https://r.jina.ai/http://www.anthropic.com/research/building-effective-agents',…
  └ 21 lines...

● Fetch SWE-bench homepage via jina mirror (shell)
  │ $u='https://r.jina.ai/http://www.swebench.com/'; try { $c=(Invoke-WebRequest -UseBasicParsing
  │ -Uri $u -TimeoutSec 40).Content; ($c -split "`n" | Select-Object -First 80) } catch { 'ERR: ' +
  │ $_.Exception.Message }
  └ 34 lines...

I’ve got viable candidate domains; next I’ll pull content from a large batch of fresh sources and extract only the strongest, non-blocked entries.

● Fetch broad batch of candidate sources for extraction (shell)
  │ $urls = @(
  │ 'https://r.jina.ai/http://www.anthropic.com/research/building-effective-agents',
  │ 'https://r.jina.ai/http://docs.langchain.com/oss/python/langgraph/durable-execution',
  │ 'https://r.jina.ai/http://docs.langchain.com/oss/python/langgraph/interrupts',
  │ 'https://r.jina.ai/http://docs.langchain.com/oss/python/langgraph/persistence',…
  └ 36 lines...

● Fetch batch1 authoritative sources via jina mirror (shell)
  │ $urls = @(
  │ 'https://r.jina.ai/http://docs.langchain.com/oss/python/langgraph/durable-execution',
  │ 'https://r.jina.ai/http://docs.langchain.com/oss/python/langgraph/interrupts',
  │ 'https://r.jina.ai/http://docs.langchain.com/oss/python/langgraph/persistence',
  │ 'https://r.jina.ai/http://docs.temporal.io/workflow-execution',…
  └ 24 lines...

● Inspect saved tool outputs and extract URLs (shell)
  │ $tmp = 'C:\Users\caner\AppData\Local\Temp'; Get-ChildItem $tmp -Filter
  │ 'copilot-tool-output-*.txt' | Sort-Object LastWriteTime -Descending | Select-Object -First 6
  │ FullName,LastWriteTime,Length; Write-Output "`n---- Latest file URL markers ----";
  │ $latest=(Get-ChildItem $tmp -Filter 'copilot-tool-output-*.txt' | Sort-Object LastWriteTime
  │ -Descending | Select-Object -First 2); foreach($f in $latest){ Write-Output "`nFILE: …
  └ 41 lines...

● Extract key snippets from fetched source dump files (shell)
  │ python -c "import re, pathlib;
  │ files=[r'C:\Users\caner\AppData\Local\Temp\copilot-tool-output-1774829332964-9yqtd3.txt',
  │ r'C:\Users\caner\AppData\Local\Temp\copilot-tool-output-1774829210288-jk6wtw.txt'];
  │ for fp in files:
  │ p=pathlib.Path(fp)…
  └ 24 lines...

I’m now harvesting concrete details from a larger set of authoritative sources (docs, benchmarks, papers) and then I’ll rank only the strongest new ones.

● Fetch and summarize source batch A (shell)
  │ $urls = @(
  │ 'https://r.jina.ai/http://www.anthropic.com/research/building-effective-agents',
  │ 'https://r.jina.ai/http://docs.langchain.com/oss/python/langgraph/durable-execution',
  │ 'https://r.jina.ai/http://docs.langchain.com/oss/python/langgraph/interrupts',
  │ 'https://r.jina.ai/http://docs.langchain.com/oss/python/langgraph/persistence',…
  └ 33 lines...

● Fetch and summarize source batch B (shell)
  │ $urls = @(
  │ 'https://r.jina.ai/http://codeclash.ai/',
  │ 'https://r.jina.ai/http://docs.ragas.io/en/latest/howtos/applications/agents/',
  │ 'https://r.jina.ai/http://docs.guardrailsai.com',
  │ 'https://r.jina.ai/http://www.guardrailsai.com/blog/guardrails-ai-0-5',…
  └ 36 lines...

● Read copilot-tool-output-1774829401260-pq52l9.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774829401260-pq52l9.txt
  └ L1:260 (217 lines read)

● Read copilot-tool-output-1774829412341-tq7j7m.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774829412341-tq7j7m.txt
  └ L1:260 (249 lines read)

● Read copilot-tool-output-1774829412341-tq7j7m.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774829412341-tq7j7m.txt
  └ L250:500 (178 lines read)

● Read copilot-tool-output-1774829401260-pq52l9.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774829401260-pq52l9.txt
  └ L218:460 (201 lines read)

● Fetch additional benchmark and architecture sources (shell)
  │ $urls=@(
  │ 'https://r.jina.ai/http://webarena.dev/',
  │ 'https://r.jina.ai/http://os-world.github.io/',
  │ 'https://r.jina.ai/http://github.com/web-arena-x/webarena',
  │ 'https://r.jina.ai/http://github.com/xlang-ai/OSWorld',…
  └ 37 lines...

● Read copilot-tool-output-1774829503181-hwk2rm.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774829503181-hwk2rm.txt
  └ L1:340 (223 lines read)

### [Source 1] Temporal Workflow Definition (Determinism, Versioning, and Replay Constraints)

- **URL**: https://docs.temporal.io/workflow-definition
- **Source Type**: docs
- **Date**: 2026-03-28
- **Topic Tags**: orchestration, determinism, fault-tolerance, long-running-workflows, governance
- **Confidence Score**: 0.94
- **Why Important**: BOX can harden its autonomous loop by adopting replay-safe deterministic workflow semantics for every agent stage.
- **Key Findings**:
  - Temporal separates **Workflow Definition** (code) from **Workflow Execution** (durable run), making control loops explicit and auditable.
  - It enforces deterministic constraints and documents handling for non-deterministic changes.
  - Built-in guidance exists for unreliable workers and safe evolution of in-flight executions.
  - Versioning and patching are first-class, reducing breakage risk during autonomous self-upgrades.

### [Source 2] Temporal TypeScript Versioning (Worker Versioning + Patching)

- **URL**: https://docs.temporal.io/develop/typescript/versioning
- **Source Type**: docs
- **Date**: 2026-03-28
- **Topic Tags**: orchestration, rollout-safety, versioning, deterministic-replay, change-management
- **Confidence Score**: 0.93
- **Why Important**: BOX’s self-modifying plans need safe staged rollouts where old and new logic can coexist without nondeterminism failures.
- **Key Findings**:
  - Temporal supports two production-grade migration paths: **Worker Versioning** and **patch-based branching**.
  - `patched()` inserts replay markers into workflow history, acting like deterministic feature flags.
  - Existing executions can continue old code paths while new runs use new behavior.
  - Patch deprecation/removal is explicitly staged to avoid replay mismatches.

### [Source 3] Temporal Continue-As-New (History Control for Long-Horizon Agents)

- **URL**: https://docs.temporal.io/develop/typescript/continue-as-new
- **Source Type**: docs
- **Date**: 2026-03-28
- **Topic Tags**: long-horizon, orchestration, state-management, scalability, reliability
- **Confidence Score**: 0.91
- **Why Important**: BOX can keep perpetual autonomous loops stable by checkpointing and rotating execution history before bloat degrades reliability.
- **Key Findings**:
  - Continue-As-New closes a run and starts a new run in the same workflow chain with fresh history.
  - Workflow ID remains stable while Run ID changes, preserving lineage/auditability.
  - State is explicitly passed forward as input, encouraging intentional state design.
  - Recommended for long-running workflows nearing scale/history limits.

### [Source 4] LangGraph Durable Execution

- **URL**: https://docs.langchain.com/oss/python/langgraph/durable-execution
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: workflow-resumption, determinism, checkpointing, human-in-the-loop, reliability
- **Confidence Score**: 0.92
- **Why Important**: BOX can prevent wasted retries and partial-progress loss across CEO→planner→reviewer→worker pipelines.
- **Key Findings**:
  - Durable execution saves workflow progress and resumes from checkpoints after failure or pause.
  - Requires checkpointer + thread ID + encapsulation of side effects/non-determinism in tasks.
  - Explicit replay model: resumes from safe starting points, replays deterministically.
  - Durability modes (`exit`, `async`, etc.) expose concrete performance vs consistency tradeoffs.

### [Source 5] LangGraph Interrupts (Production HITL Pause/Resume Primitive)

- **URL**: https://docs.langchain.com/oss/python/langgraph/interrupts
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: human-in-the-loop, control-gates, pause-resume, observability, workflow-control
- **Confidence Score**: 0.90
- **Why Important**: BOX governance gates can use dynamic interrupt points for approval, policy exception handling, and recovery decisions.
- **Key Findings**:
  - `interrupt()` suspends execution at arbitrary logic points and persists state.
  - Resume path uses command input; payload is JSON-serializable and explicit.
  - `thread_id` acts as persistent cursor for replay/resume semantics.
  - Interrupt payloads surface in streamed outputs for transparent operator/agent coordination.

### [Source 6] LangGraph Persistence (Threads + Checkpoints Core Model)

- **URL**: https://docs.langchain.com/oss/python/langgraph/persistence
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: memory, persistence, orchestration, state-lineage, recovery
- **Confidence Score**: 0.86
- **Why Important**: BOX needs durable thread-level state to support iterative self-improvement and deterministic recovery.
- **Key Findings**:
  - Persistence is foundational for workflows/agents, durable execution, interrupts, and memory.
  - Core concepts are structured around **threads** and **checkpoints**.
  - Encourages explicit state lifecycle rather than ad hoc in-memory orchestration.
  - Provides reusable primitives for long-running multi-step agent processes.

### [Source 7] Building Effective AI Agents (Anthropic)

- **URL**: https://www.anthropic.com/research/building-effective-agents
- **Source Type**: blog
- **Date**: unknown
- **Topic Tags**: agent-architecture, workflow-vs-agent, complexity-control, tool-use, memory
- **Confidence Score**: 0.89
- **Why Important**: BOX can improve reliability/cost by defaulting to simpler workflows and escalating to autonomous agents only when justified.
- **Key Findings**:
  - Distinguishes **workflows** (predefined orchestration) from **agents** (model-directed control).
  - Recommends simplest viable architecture first; increase complexity only with clear payoff.
  - Notes agentic systems often trade latency/cost for capability.
  - Emphasizes robust tool/memory interfaces and progressive pattern composition.

### [Source 8] Working with Evals (OpenAI API docs)

- **URL**: https://platform.openai.com/docs/guides/evals
- **Source Type**: docs
- **Date**: 2026-03-29
- **Topic Tags**: evaluation, trace-grading, agent-evals, quality-assurance, model-utilization
- **Confidence Score**: 0.84
- **Why Important**: BOX can institutionalize eval-driven evolution by grading agent traces and outcomes per stage.
- **Key Findings**:
  - Evals are integrated with agent workflows and trace-grading guidance.
  - Agent-focused eval pathways are documented alongside SDK and safety docs.
  - Supports establishing repeatable acceptance criteria across build/test/review loops.
  - Encourages lifecycle integration vs one-off benchmark scoring.

### [Source 9] LangSmith Evaluation Concepts

- **URL**: https://docs.smith.langchain.com/evaluation
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: offline-evals, online-evals, tracing, metrics, production-monitoring
- **Confidence Score**: 0.90
- **Why Important**: BOX can split pre-deploy benchmark checks from post-deploy behavior monitoring, reducing regressions in autonomous mode.
- **Key Findings**:
  - Explicit separation of **offline evals** (dataset-based) and **online evals** (production traces/threads).
  - Advises starting with manually curated gold examples for each critical component.
  - Supports component-level quality checks (LLM, retrieval, tool calls, formatting).
  - Frames evals as iterative lifecycle instrumentation, not a single pass/fail gate.

### [Source 10] SWE-bench Verified

- **URL**: https://www.swebench.com/verified.html
- **Source Type**: benchmark
- **Date**: 2026-03-04
- **Topic Tags**: software-agent-benchmarking, evaluation-quality, coding-agents, reproducibility
- **Confidence Score**: 0.95
- **Why Important**: BOX can use human-validated coding-agent benchmarks to measure whether planning/review changes improve real software-fix success.
- **Key Findings**:
  - Verified is a **human-filtered 500-instance subset** for more reliable evaluation.
  - Human review checks problem clarity, patch correctness, and solvability.
  - Supports apples-to-apples LM comparison via mini-SWE-agent baseline setup.
  - Documents versioned evaluation setup to prevent misleading score comparisons.

### [Source 11] SWE-bench Leaderboards (Cost + Resolution Signal)

- **URL**: https://www.swebench.com/
- **Source Type**: benchmark
- **Date**: 2026-03-04
- **Topic Tags**: leaderboard, cost-efficiency, coding-agents, model-routing, benchmarking
- **Confidence Score**: 0.91
- **Why Important**: BOX can optimize quality-per-dollar by selecting models/agent configs using observed `% Resolved` vs `Avg. $` tradeoffs.
- **Key Findings**:
  - Leaderboard tracks `% Resolved` and average dollar cost per run.
  - Includes multiple benchmark variants (Verified, Lite, Multilingual, Multimodal).
  - Reports standardized trajectories with fixed agent scaffolds for comparability.
  - Public trajectory dashboards improve diagnosis of failure patterns.

### [Source 12] SWE-agent Repository

- **URL**: https://github.com/SWE-agent/SWE-agent
- **Source Type**: repo
- **Date**: unknown
- **Topic Tags**: autonomous-coding, tool-use, benchmark-integration, execution-agents
- **Confidence Score**: 0.85
- **Why Important**: BOX can reuse proven agent-loop implementation patterns for repo issue fixing and benchmark harnessing.
- **Key Findings**:
  - Designed to autonomously resolve real GitHub issues via LM-driven tool use.
  - Directly linked to SWE-bench evaluation workflows.
  - Includes multiple operating modes (software engineering, security challenge settings).
  - Active ecosystem around configurations/prompts and benchmark execution.

### [Source 13] τ-bench (Tau-Bench) for Tool-Agent-User Interaction

- **URL**: https://github.com/sierra-research/tau-bench
- **Source Type**: repo
- **Date**: unknown
- **Topic Tags**: tool-use-evaluation, interactive-agents, policy-compliance, simulated-users
- **Confidence Score**: 0.92
- **Why Important**: BOX needs tool-agent-user interaction benchmarks to test planning under noisy user interactions and policy constraints.
- **Key Findings**:
  - Benchmarks dynamic conversations among user simulator, agent, and domain APIs.
  - Includes policy guidelines in environment design, not just raw task success.
  - Provides reproducible CLI evaluation with configurable agent/user strategies.
  - Leaderboard distinguishes tool-calling performance across domains.

### [Source 14] CodeClash: Goal-Oriented Software Engineering Benchmark

- **URL**: https://codeclash.ai/
- **Source Type**: benchmark
- **Date**: 2026-01-26
- **Topic Tags**: long-horizon, goal-oriented-evaluation, autonomous-software, multi-round
- **Confidence Score**: 0.88
- **Why Important**: BOX can move beyond ticket-level evals to multi-round product-goal optimization, matching real autonomous delivery objectives.
- **Key Findings**:
  - Evaluates models in arena-style environments with business-like goals.
  - Reported setup: 8 models, 6 arenas, 1,680 tournaments, 25,200 rounds, ~50k trajectories.
  - Highlights that models often struggle to improve across rounds.
  - Captures failure modes that single-issue benchmarks miss.

### [Source 15] CVE-Bench (NAACL 2025)

- **URL**: https://aclanthology.org/2025.naacl-long.212/
- **Source Type**: paper
- **Date**: 2025-04
- **Topic Tags**: security, benchmark, software-agents, tool-usage, vulnerability-repair
- **Confidence Score**: 0.96
- **Why Important**: BOX can strengthen secure autonomous delivery by benchmarking real vulnerability-fix capability under realistic tooling conditions.
- **Key Findings**:
  - 509 CVEs across 4 languages and 120 popular OSS repositories.
  - Includes realistic test environment with black-box/white-box information and tool use.
  - Reports best SWE-agent repair around **21%**, exposing major capability gaps.
  - Identifies weak expert tool-use behavior as a key failure source.

### [Source 16] AIOpsLab: Holistic Evaluation Framework for Autonomous Cloud Agents

- **URL**: https://www.microsoft.com/en-us/research/wp-content/uploads/2024/10/AIOpsLab-6705feab5dcdb.pdf
- **Source Type**: paper
- **Date**: 2025-03-01
- **Topic Tags**: evaluation-framework, fault-injection, agentops, observability, self-healing
- **Confidence Score**: 0.90
- **Why Important**: BOX can adopt scenario-driven, online, fault-injected evaluation instead of static text-only tests for agent reliability.
- **Key Findings**:
  - Proposes integrated framework: fault injector, workload generator, orchestrator, telemetry observer.
  - Targets full incident lifecycle tasks (detection → RCA → mitigation), not isolated subtasks.
  - Critiques static benchmarks for low realism and weak root-cause fidelity.
  - Emphasizes extensible, standardized agent comparison under dynamic operational conditions.

### [Source 17] AI Agents in Action: Foundations for Evaluation and Governance (WEF)

- **URL**: https://reports.weforum.org/docs/WEF_AI_Agents_in_Action_Foundations_for_Evaluation_and_Governance_2025.pdf
- **Source Type**: other
- **Date**: 2025-11
- **Topic Tags**: governance, evaluation, multi-agent-ecosystems, risk-management, deployment
- **Confidence Score**: 0.81
- **Why Important**: BOX governance can align safeguards proportionally to agent autonomy/authority, reducing risk while preserving delivery velocity.
- **Key Findings**:
  - Provides structured treatment of architecture, evaluation, and progressive governance.
  - Recommends linking safeguards directly to task scope and deployment context.
  - Frames governance as iterative maturity model rather than binary approval.
  - Highlights emerging risks in multi-agent ecosystems and oversight lag.

### [Source 18] TruLens

- **URL**: https://www.trulens.org/
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: observability, eval-metrics, tracing, leaderboarding, production-evaluation
- **Confidence Score**: 0.76
- **Why Important**: BOX can operationalize continuous agent quality measurement with trace-native metrics and comparators.
- **Key Findings**:
  - Focuses on evaluating context retrieval, tool calls, plans, and execution flow.
  - Uses OpenTelemetry traces, easing integration with existing observability stacks.
  - Supports metric leaderboards for side-by-side app/agent comparison.
  - Positions eval-guided iteration as a fast loop for prompt and config tuning.

### [Source 19] Humanloop Evals Docs

- **URL**: https://humanloop.com/docs/evals
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: eval-platform, prompt-management, observability, human-in-the-loop
- **Confidence Score**: 0.72
- **Why Important**: BOX can involve non-engineering stakeholders in acceptance-eval loops without sacrificing engineering rigor.
- **Key Findings**:
  - Documents agent evaluation in both UI and code pathways.
  - Connects evaluation with prompt management and production observability.
  - Supports workflows where domain experts contribute directly to quality criteria.
  - Encourages repeatable eval assets (`.prompt`, `.agent`) for lifecycle governance.

### [Source 20] Planning for Agents (LangChain Blog)

- **URL**: https://blog.langchain.dev/planning-for-agents/
- **Source Type**: blog
- **Date**: 2024-07-20
- **Topic Tags**: planning, reflection, cognitive-architectures, long-horizon, tool-calling
- **Confidence Score**: 0.83
- **Why Important**: BOX can improve deep-task completion by adding domain-specific planning/verification flows instead of generic one-shot loops.
- **Key Findings**:
  - Identifies planning as a key reliability bottleneck for agents.
  - Distinguishes short-term tool choice from long-horizon sequencing complexity.
  - Recommends task-specific cognitive architectures (routing + verification) over generic abstractions.
  - Highlights plan-and-solve/reflection patterns and benchmark-with-your-own-evals principle.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all prov