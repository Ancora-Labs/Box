## YOUR TASK
Below is the raw research output from the Research Scout.
It contains 18 source(s) with extracted findings.
Your job: synthesize this into a structured, topic-organized output that Prometheus can use for planning.
Follow your agent definition's output format exactly.
Do NOT lose useful information. Compress the format, not the content.
If sources contradict each other, document the contradiction explicitly.

## RESEARCH SCOUT RAW OUTPUT
I’ll attempt live web retrieval first (per your fallback rule), then compile only new, high-value sources and extract actionable findings for BOX.

● Test outbound web access (shell)
  │ $ProgressPreference='SilentlyContinue'; try { (Invoke-WebRequest -UseBasicParsing -Uri
  │ 'https://example.com' -TimeoutSec 15).StatusCode } catch { 'ERR: ' + $_.Exception.Message }
  └ 2 lines...

● Search web for candidate sources (shell)
  │ $ProgressPreference='SilentlyContinue'; $queries=@('autonomous agents evaluation benchmark
  │ 2025','multi agent orchestration patterns production','LLM prompt caching cost
  │ reduction','agent memory architecture episodic memory','workflow fault tolerance saga pattern
  │ ai agents'); foreach($q in $queries){ '---QUERY: '+$q;
  │ $u='https://duckduckgo.com/html/?q='+[uri]::EscapeDataString($q); try{$html=(Invoke-WebRequest…
  └ 20 lines...

I confirmed web access and I’m now validating a large batch of high-value candidate sources (new URLs only) to keep the final list both novel and actionable.

● Check accessibility and titles for 20 candidate sources (shell)
  │ $ProgressPreference='SilentlyContinue'; $urls=@(
  │ 'https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns',
  │ 'https://cloud.google.com/architecture/ai-ml',
  │ 'https://temporal.io/blog',
  │ 'https://uber.github.io/cadence/docs/concepts/workflows',…
  └ 40 lines...

● Search additional high-value sources (shell)
  │ $ProgressPreference='SilentlyContinue'; $queries=@('agent observability OpenTelemetry GenAI
  │ semantic conventions tracing spans','MLflow GenAI evaluation docs','Weights & Biases Weave
  │ evaluation agents','Flyte caching docs workflow retries','Netflix Conductor workflow retries
  │ compensation saga','MITRE ATLAS AI security matrix techniques','OWASP Top 10 for LLM
  │ applications','semantic caching vector database architecture agents','model context protocol …
  └ 39 lines...

● Fetch titles and descriptions from curated sources (shell)
  │ $ProgressPreference='SilentlyContinue'; $urls=@(
  │ 'https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns',
  │ 'https://opentelemetry.io/docs/specs/semconv/gen-ai/',
  │ 'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/',
  │ 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching',…
  └ 71 lines...

I’ve shortlisted strong, non-blocked sources. Next I’m extracting concrete implementation details (not just titles) so each entry has actionable findings for BOX.

● Extract headers and snippets from top-priority sources (shell)
  │ $ProgressPreference='SilentlyContinue';
  │ $urls=@(
  │ 'https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns',
  │ 'https://opentelemetry.io/docs/specs/semconv/gen-ai/',
  │ 'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/',…
  └ 32 lines...

● Read copilot-tool-output-1774857121532-75k18x.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774857121532-75k18x.txt
  └ L1:260 (153 lines read)

● Read copilot-tool-output-1774857121532-75k18x.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774857121532-75k18x.txt
  └ L154:260 (23 lines read)

● Extract headings and snippets from orchestration/safety/eval sources (shell)
  │ $ProgressPreference='SilentlyContinue';
  │ $urls=@(
  │ 'https://www.union.ai/docs/v1/flyte/user-guide/core-concepts/caching/',
  │ 'https://conductor-oss.github.io/conductor/index.html',
  │ 'https://kestra.io/docs/workflow-components/retries',…
  └ 32 lines...

● Read copilot-tool-output-1774857155846-lhkjxc.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774857155846-lhkjxc.txt
  └ L1:280 (144 lines read)

● Probe additional high-value agent architecture source (shell)
  │ $ProgressPreference='SilentlyContinue';
  │ $u='https://www.anthropic.com/engineering/built-multi-agent-research-system';
  │ try{$r=Invoke-WebRequest -UseBasicParsing -Uri $u -TimeoutSec 25; $c=$r.Content;
  │ $title=([regex]::Match($c,'(?is)<title[^>]*>(.*?)</title>').Groups[1].Value -replace '\s+','
  │ ').Trim(); $text=($c -replace '(?is)<script.*?</script>',' ' -replace '<[^>]+>',' ' -replace …
  └ 4 lines...

● Read copilot-tool-output-1774857155846-lhkjxc.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774857155846-lhkjxc.txt
  └ L145:260 (65 lines read)

● Extract keyword-context snippets for concrete findings (shell)
  │ $ProgressPreference='SilentlyContinue';
  │ $targets=@(
  │ @('https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching','cache','TTL','discoun
  │ t','breakpoint','minimum'),
  │ @('https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/prompt-caching','discount'…
  └ 123 lines...

### [Source 1] How we built our multi-agent research system

- **URL**: https://www.anthropic.com/engineering/built-multi-agent-research-system
- **Source Type**: blog
- **Date**: 2025-06-13
- **Topic Tags**: multi-agent, architecture, tool-use, productionization
- **Confidence Score**: 0.93
- **Why Important**: Direct production lessons from a real multi-agent system map to BOX’s Jesus→Prometheus→Athena orchestration loop.
- **Key Findings**:
  - Uses a planner agent that decomposes a user request into a research process, then dispatches tool-using sub-agents.
  - Emphasizes architecture/tool/prompt co-design rather than prompt-only tuning.
  - Reports transition challenges from prototype to production, highlighting reliability constraints in agent loops.
  - Shows multi-agent decomposition as a practical path for better coverage on complex tasks.

### [Source 2] AI Agent Orchestration Patterns (Azure Architecture Center)

- **URL**: https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: orchestration, multi-agent, planning, architecture-patterns
- **Confidence Score**: 0.91
- **Why Important**: Gives an explicit complexity ladder BOX can use to choose minimal orchestration that still meets reliability targets.
- **Key Findings**:
  - Defines orchestration patterns: sequential, concurrent, group-chat, handoff, and magnetic styles.
  - Recommends “start with lowest complexity that works” due to coordination overhead/latency/cost.
  - Frames tradeoffs between single-agent and multi-agent systems as an architectural decision, not just model quality.
  - Useful for policy rules in Prometheus when deciding plan topology.

### [Source 3] Durable Execution for workflows and agents (Conductor OSS)

- **URL**: https://conductor-oss.github.io/conductor/index.html
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: durable-execution, orchestration, saga, fault-tolerance
- **Confidence Score**: 0.90
- **Why Important**: Durable orchestration patterns directly improve BOX recovery/rollback guarantees for long-running autonomous tasks.
- **Key Findings**:
  - Supports saga-pattern compensation flows for distributed failure recovery.
  - Explicitly advertises at-least-once task delivery semantics.
  - Includes human-in-the-loop steps as first-class workflow components.
  - Focuses on durable progress so workflow state survives infra/process failure.

### [Source 4] Semantic Conventions for GenAI agent and framework spans (OpenTelemetry)

- **URL**: https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: observability, tracing, eval-infra, agent-runtime
- **Confidence Score**: 0.89
- **Why Important**: BOX can standardize traces across CEO/planner/reviewer/worker agents for deterministic postmortems and regression diagnosis.
- **Key Findings**:
  - Defines agent/framework span semantics (including tool-execution spans).
  - Specifies attribute conventions (e.g., `gen_ai.*` naming family) for interoperable telemetry.
  - Provides a migration/stability path via semconv opt-in controls.
  - Enables cross-tool tracing correlation for multi-agent runs.

### [Source 5] Semantic conventions for generative AI systems (OpenTelemetry)

- **URL**: https://opentelemetry.io/docs/specs/semconv/gen-ai/
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: observability, metrics, governance, tracing
- **Confidence Score**: 0.88
- **Why Important**: Gives BOX a vendor-neutral telemetry contract to compare policy and model changes over time.
- **Key Findings**:
  - Standardizes GenAI-related span/metric/event naming and attributes.
  - Treats conventions as evolving with explicit compatibility guidance.
  - Encourages instrumentations to expose versioned semantic behavior.
  - Useful as canonical schema for Athena’s quality and failure analytics.

### [Source 6] Router - Load Balancing (LiteLLM)

- **URL**: https://docs.litellm.ai/docs/routing
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: model-routing, reliability, cost-control, failover
- **Confidence Score**: 0.88
- **Why Important**: BOX can route premium single-shot invocations across providers/regions while preserving reliability budgets.
- **Key Findings**:
  - Provides multi-deployment load balancing and prioritized request handling.
  - Includes cooldowns, fallbacks, timeouts, and fixed/exponential retries.
  - Supports cross-region retry behavior for failed calls.
  - Mentions Redis-backed state for rpm/tpm and reliability coordination.

### [Source 7] Prompt caching (Claude API Docs)

- **URL**: https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: cost-efficiency, latency, context-management
- **Confidence Score**: 0.87
- **Why Important**: BOX can cut repeated planning/review context cost by caching static prefixes across iterative loops.
- **Key Findings**:
  - Supports automatic and explicit cache breakpoint strategies.
  - Documents default 5-minute TTL and optional 1-hour TTL mode.
  - Notes pricing multipliers and minimum-threshold constraints.
  - Recommends automatic mode for growing multi-turn contexts.

### [Source 8] Prompt caching with Azure OpenAI

- **URL**: https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/prompt-caching
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: cost-efficiency, latency, model-utilization
- **Confidence Score**: 0.86
- **Why Important**: Gives concrete cache eligibility constraints BOX can codify in model-invocation policies.
- **Key Findings**:
  - Cached input tokens are discounted; provisioned deployments can reach very high discounting.
  - Cache lifecycle is temporary (cleared within ~24 hours).
  - Requires minimum prompt size and identical prefix regions for reuse.
  - Prompt caching reduces latency/cost without changing response semantics.

### [Source 9] Caching (LiteLLM Proxy)

- **URL**: https://docs.litellm.ai/docs/proxy/caching
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: caching, semantic-cache, token-efficiency, infra-patterns
- **Confidence Score**: 0.85
- **Why Important**: BOX can combine provider prompt caching with gateway-level response/semantic caching for multiplicative savings.
- **Key Findings**:
  - Supports multiple cache backends: memory, disk, Redis, S3/GCS, and semantic caches (Redis/Qdrant).
  - Exposes TTL and namespace controls for cache isolation.
  - Can return cached response for identical requests before model call.
  - Integrates with proxy/gateway workflows for centralized policy.

### [Source 10] Evaluation Quickstart (MLflow LLMs & Agents)

- **URL**: https://mlflow.org/docs/latest/genai/eval-monitor/quickstart/
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: evaluation, monitoring, datasets, scorers
- **Confidence Score**: 0.85
- **Why Important**: BOX needs reproducible offline/online eval loops; this provides a concrete dataset+scorer+tracking workflow.
- **Key Findings**:
  - Structures evaluation around prediction function + evaluation dataset + scorers/judges.
  - Logs results to tracking server for experiment comparison.
  - Supports built-in and custom criteria for app/agent quality.
  - Designed for rapid eval setup, then iterative improvement cycles.

### [Source 11] Evaluate systematically (Braintrust)

- **URL**: https://www.braintrust.dev/docs/guides/evals
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: evaluation, experimentation, online-scoring, regressions
- **Confidence Score**: 0.84
- **Why Important**: Aligns with BOX’s postmortem loop by combining offline experiments with online production scoring.
- **Key Findings**:
  - Explicitly separates offline experiments vs online production evaluation.
  - Encourages continuous feedback loop to prevent regressions.
  - Uses datasets/tasks/scores as core evaluation anatomy.
  - Supports experiment comparison and reasoning-model evaluation.

### [Source 12] Evaluation of LLM Applications (Langfuse)

- **URL**: https://www.langfuse.com/docs/scores/overview
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: observability, evaluation, live-monitoring, quality-metrics
- **Confidence Score**: 0.83
- **Why Important**: BOX can unify traces + eval scores to connect execution behavior with output quality in one telemetry plane.
- **Key Findings**:
  - Supports model-judge, human, and custom evaluation workflows.
  - Promotes dataset-driven experiments plus live evaluators on production traces.
  - Emphasizes regression detection before shipping prompt/model changes.
  - Integrates quality, cost, and latency inspection across LLM calls.

### [Source 13] Promptfoo Intro (evals + red teaming)

- **URL**: https://www.promptfoo.dev/docs/intro/
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: testing, red-teaming, ci-cd, guardrails
- **Confidence Score**: 0.82
- **Why Important**: BOX can add deterministic CI gates for prompt/model changes using assertions and adversarial tests.
- **Key Findings**:
  - Open-source CLI/library for evals and red-teaming LLM apps.
  - Supports test matrices across prompts/models/providers.
  - Includes automated scoring/assertions and CI/CD usage patterns.
  - Highlights caching/concurrency for faster large eval runs.

### [Source 14] Holistic Evaluation of Language Models (HELM)

- **URL**: https://crfm.stanford.edu/helm/latest/
- **Source Type**: benchmark
- **Date**: unknown
- **Topic Tags**: benchmarking, evaluation-framework, multi-metric
- **Confidence Score**: 0.80
- **Why Important**: HELM-style multi-metric eval design can improve Athena’s quality rubric beyond single-score pass/fail.
- **Key Findings**:
  - Advocates holistic, scenario-based evaluation instead of narrow benchmarks.
  - Emphasizes multi-dimensional assessment rather than one aggregate metric.
  - Useful blueprint for building BOX benchmark suites across planning/execution/review.
  - Encourages transparent reporting methodology for comparable runs.

### [Source 15] Timeouts, retries and backoff with jitter (AWS Builders’ Library)

- **URL**: https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/
- **Source Type**: blog
- **Date**: unknown
- **Topic Tags**: reliability, retries, backoff, fault-tolerance
- **Confidence Score**: 0.92
- **Why Important**: Core reliability primitives here map directly to BOX worker/tool call resilience and outage containment.
- **Key Findings**:
  - Treats timeouts, retries, and backoff as foundational resilience trio.
  - Explains transient/partial failure handling without amplifying outages.
  - Uses jitter to prevent synchronized retry storms.
  - Warns retries are not always safe and must be designed with semantics.

### [Source 16] Designing robust and predictable APIs with idempotency (Stripe)

- **URL**: https://stripe.com/blog/idempotency
- **Source Type**: blog
- **Date**: unknown
- **Topic Tags**: idempotency, reliability, recovery, distributed-systems
- **Confidence Score**: 0.90
- **Why Important**: BOX needs idempotent task execution to safely replay failed autonomous actions without duplicate side effects.
- **Key Findings**:
  - Idempotency enables safe retries under ambiguous network/service failures.
  - Distinguishes definitive failures from uncertain outcomes requiring protection.
  - Promotes predictable API behavior under fault conditions.
  - Complements backoff strategies with correctness guarantees.

### [Source 17] Controllers (Kubernetes docs)

- **URL**: https://kubernetes.io/docs/concepts/architecture/controller/
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: control-loop, reconciliation, orchestration, desired-state
- **Confidence Score**: 0.84
- **Why Important**: BOX can formalize Jesus/Prometheus/Athena as reconciliation controllers against explicit desired-state objectives.
- **Key Findings**:
  - Defines controller pattern as a continuously running control loop.
  - Separates desired state from current state and reconciles drift.
  - Provides a robust architecture metaphor for autonomous governance.
  - Useful for deterministic convergence logic in self-improvement cycles.

### [Source 18] OWASP Top 10 for LLM Applications

- **URL**: https://owasp.org/www-project-top-10-for-large-language-model-applications/
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: security, governance, threat-modeling, llm-risks
- **Confidence Score**: 0.86
- **Why Important**: Gives BOX a concrete security checklist for agentic workflows before autonomous rollout.
- **Key Findings**:
  - Curates critical LLM-app risk categories for practical engineering use.
  - Positioned as actionable guidance for secure development/deployment.
  - Expands beyond single-model concerns to broader GenAI system risks.
  - Useful for Athena governance gates and pre-deploy policy checks.

### [Source 19] OWASP GenAI Security Project

- **URL**: https://genai.owasp.org/
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: security-frameworks, governance, red-teaming, risk-management
- **Confidence Score**: 0.79
- **Why Important**: Supplies continuously updated security resources BOX can operationalize into guardrails and threat reviews.
- **Key Findings**:
  - Community-driven security program focused on GenAI/agentic systems.
  - Hosts checklists, whitepapers, and mitigation-focused resources.
  - Tracks evolving security landscape across AI lifecycle.
  - Useful for governance policy updates tied to new threat intelligence.

### [Source 20] MITRE ATLAS

- **URL**: https://atlas.mitre.org/
- **Source Type**: docs
- **Date**: unknown
- **Topic Tags**: adversarial-ai, attack-matrix, defense-planning, governance
- **Confidence Score**: 0.78
- **Why Important**: BOX can map its autonomous pipeline threats to a standard adversarial AI technique matrix for systematic hardening.
- **Key Findings**:
  - Provides structured adversarial AI technique mapping.
  - Supports threat modeling and defensive control planning.
  - Enables standardized language for security postmortems and controls.
  - Useful as taxonomy input for Athena’s risk-classification stage.

### [Source 21] Tutorial: Evaluate and improve a GenAI application (Databricks MLflow 3)

- **URL**: https://docs.databricks.com/gcp/en/mlflow3/genai/eval-monitor/evaluate-app
- **Source Type**: tutorial
- **Date**: unknown
- **Topic Tags**: evaluation, improvement-loop, monitoring, experimentation
- **Confidence Score**: 0.80
- **Why Important**: Reinforces practical eval-to-improvement workflows BOX can automate as part of self-improvement gates.
- **Key Findings**:
  - Walks through evaluating and iterating on GenAI application quality.
  - Leans on tracked experiments and measurable criteria instead of ad-hoc judgment.
  - Connects evaluation outputs to concrete improvement actions.
  - Useful as implementation reference for Prometheus/Athena feedback loops.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to res