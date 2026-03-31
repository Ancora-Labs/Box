## YOUR TASK
Below is the raw research output from the Research Scout.
It contains 6 source(s) with extracted findings.
Your job: synthesize this into a structured, topic-organized output that Prometheus can use for planning.
Follow your agent definition's output format exactly.
Do NOT lose useful information. Compress the format, not the content.
If sources contradict each other, document the contradiction explicitly.

## RESEARCH SCOUT RAW OUTPUT
I’ll gather fresh high-value sources from the web (excluding blocked URLs/topics), extract concrete implementation details, then rank and format them exactly as requested.

● Search web for agent architecture topics (shell)
  │ $queries = @(
  │ 'LLMCompiler planning agents',
  │ 'Reflexion verbal reinforcement learning agent',
  │ 'Generative Agents memory retrieval reflection',
  │ 'Voyager Minecraft lifelong learning agents',…
  └ 78 lines...

● Search web and extract top result links (shell)
  │ $queries = @(
  │ 'LLMCompiler planning agents',
  │ 'Reflexion verbal reinforcement learning agent',
  │ 'Generative Agents memory retrieval reflection',
  │ 'Voyager Minecraft lifelong learning agents',…
  └ 129 lines...

Quick update: search worked partially, so I’m switching to direct source retrieval from high-signal docs/papers/repos and extracting concrete takeaways from each.

● Fetch candidate high-value source URLs from Bing (shell)
  │ $queries = @(
  │ 'LLM agents architecture patterns production',
  │ 'self-refine llm iterative refinement results',
  │ 'tree search language agents benchmark',
  │ 'agent memory architecture retrieval reflection',…
  └ 28 lines...

● Fetch candidate source pages and extract titles (shell)
  │ $urls = @(
  │ 'https://langchain-ai.github.io/langgraph/concepts/multi_agent/',
  │ 'https://docs.temporal.io/develop/typescript/child-workflows',
  │ 'https://docs.temporal.io/develop/typescript/failure-detection',
  │ 'https://github.com/SWE-bench/SWE-bench',…
  └ 48 lines...

● Read copilot-tool-output-1774832533500-dldyd5.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774832533500-dldyd5.txt
  └ 1 line read

● Get line count for large output file (shell)
  │ (Get-Content
  │ 'C:\Users\caner\AppData\Local\Temp\copilot-tool-output-1774832533500-dldyd5.txt').Count
  └ 2 lines...

● Search output file for URL markers (shell)
  │ Select-String -Path
  │ 'C:\Users\caner\AppData\Local\Temp\copilot-tool-output-1774832533500-dldyd5.txt' -Pattern
  │ '^===== URL:' | ForEach-Object { $_.LineNumber.ToString() + ' ' + $_.Line }
  └ 25 lines...

● Read copilot-tool-output-1774832533500-dldyd5.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774832533500-dldyd5.txt
  └ L1:90 (90 lines read)

● Read copilot-tool-output-1774832533500-dldyd5.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774832533500-dldyd5.txt
  └ L91:180 (90 lines read)

● Read copilot-tool-output-1774832533500-dldyd5.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774832533500-dldyd5.txt
  └ L181:254 (74 lines read)

● Fetch abstracts/docs snippets for selected fresh sources (shell)
  │ $urls = @(
  │ 'https://arxiv.org/abs/2303.11366',
  │ 'https://arxiv.org/abs/2303.17651',
  │ 'https://arxiv.org/abs/2305.10601',
  │ 'https://arxiv.org/abs/2210.03629',…
  └ 60 lines...

● Get markers for extracted source file (shell)
  │ Select-String -Path
  │ 'C:\Users\caner\AppData\Local\Temp\copilot-tool-output-1774832579371-b69gdq.txt' -Pattern
  │ '^===== URL:' | ForEach-Object { $_.LineNumber.ToString() + ' ' + $_.Line }
  └ 24 lines...

● Count lines in extracted source file (shell)
  │ (Get-Content
  │ 'C:\Users\caner\AppData\Local\Temp\copilot-tool-output-1774832579371-b69gdq.txt').Count
  └ 2 lines...

● Read copilot-tool-output-1774832579371-b69gdq.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774832579371-b69gdq.txt
  └ L131:260 (130 lines read)

● Read copilot-tool-output-1774832579371-b69gdq.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774832579371-b69gdq.txt
  └ L1:130 (130 lines read)

● Read copilot-tool-output-1774832579371-b69gdq.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774832579371-b69gdq.txt
  └ L261:379 (119 lines read)

I found solid core papers/docs; now I’ll add another batch focused on planning, evaluation, safety, and cost/serving to reach a strong 20+ ranked set with concrete findings.

● Fetch additional high-value sources and extracts (shell)
  │ $urls = @(
  │ 'https://arxiv.org/abs/2308.09687',
  │ 'https://arxiv.org/abs/2305.11738',
  │ 'https://arxiv.org/abs/2305.04091',
  │ 'https://arxiv.org/abs/2205.10625',…
  └ 52 lines...

● Locate URL blocks in second extraction file (shell)
  │ Select-String -Path
  │ 'C:\Users\caner\AppData\Local\Temp\copilot-tool-output-1774832621366-cq99ht.txt' -Pattern
  │ '^===== URL:' | ForEach-Object { $_.LineNumber.ToString() + ' ' + $_.Line }
  └ 19 lines...

● Count lines in second extraction file (shell)
  │ (Get-Content
  │ 'C:\Users\caner\AppData\Local\Temp\copilot-tool-output-1774832621366-cq99ht.txt').Count
  └ 2 lines...

● Read copilot-tool-output-1774832621366-cq99ht.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774832621366-cq99ht.txt
  └ L1:120 (120 lines read)

● Read copilot-tool-output-1774832621366-cq99ht.txt
  │ ~\AppData\Local\Temp\copilot-tool-output-1774832621366-cq99ht.txt
  └ L121:268 (148 lines read)

● Fetch raw README/docs content for implementation details (shell)
  │ $urls = @(
  │ 'https://raw.githubusercontent.com/SWE-bench/SWE-bench/main/README.md',
  │ 'https://raw.githubusercontent.com/SWE-agent/SWE-agent/main/README.md',
  │ 'https://raw.githubusercontent.com/OpenBMB/AgentVerse/main/README.md',
  │ 'https://raw.githubusercontent.com/Significant-Gravitas/AutoGPT/master/README.md',…
  └ 42 lines...

● Find sections in README extraction file (shell)
  │ Select-String -Path
  │ 'C:\Users\caner\AppData\Local\Temp\copilot-tool-output-1774832657794-4t92t4.txt' -Pattern
  │ '^===== URL:' | ForEach-Object { $_.LineNumber.ToString() + ' ' + $_.Line }
  └ 15 lines...

● Count lines in README extraction file (shell)
  │ (Get-Content
  │ 'C:\Users\caner\AppData\Local\Temp\copilot-tool-output-1774832657794-4t92t4.txt').Count
  └ 2 lines...

● Extract concise snippets per URL block (shell)
  │ $path='C:\Users\caner\AppData\Local\Temp\copilot-tool-output-1774832657794-4t92t4.txt'
  │ $lines=Get-Content $path
  │ $idxs = for($i=0;$i -lt $lines.Count;$i++){ if($lines[$i] -like '===== URL:*'){ $i } }
  │ for($k=0; $k -lt $idxs.Count; $k++){
  │ $start=$idxs[$k]…
  └ 245 lines...

### [Source 1] SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering

- **URL**: https://arxiv.org/abs/2405.15793
- **Source Type**: paper
- **Date**: 2024-05-06
- **Topic Tags**: code-generation, agent-architecture, execution-reliability, benchmarking
- **Confidence Score**: 0.95
- **Why Important**: BOX can directly adopt ACI-style interfaces (repo navigation/edit/test primitives) to raise worker success on real software tasks.
- **Key Findings**:
  - Proposes an Agent-Computer Interface (ACI) specifically optimized for coding agents.
  - Reports strong benchmark gains: **12.5% pass@1 on SWE-bench** and **87.7% on HumanEvalFix**.
  - Shows interface design (not just model choice) materially changes autonomous coding performance.
  - Emphasizes structured action spaces for file edits, shell execution, and repo traversal.

### [Source 2] SWE-bench Leaderboards

- **URL**: https://www.swebench.com
- **Source Type**: benchmark
- **Date**: unknown
- **Topic Tags**: evaluation, benchmarking, software-agents, cost-efficiency
- **Confidence Score**: 0.93
- **Why Important**: BOX needs objective external KPIs; SWE-bench provides a continuously updated quality-vs-cost frontier for autonomous code agents.
- **Key Findings**:
  - Tracks resolved issue rates across **Verified/Lite/Full** benchmark tracks.
  - Exposes **resolved vs cost** and **resolved vs step-limit** comparisons (critical for BOX governance budgets).
  - Supports model/agent filtering and historical version comparisons.
  - Enables decision-making on reliability tradeoffs, not just raw success.

### [Source 3] Reflexion: Language Agents with Verbal Reinforcement Learning

- **URL**: https://arxiv.org/abs/2303.11366
- **Source Type**: paper
- **Date**: 2023-03-20
- **Topic Tags**: self-improvement, memory, reflection, meta-learning
- **Confidence Score**: 0.94
- **Why Important**: BOX’s postmortem loop maps directly to Reflexion’s episodic verbal feedback mechanism.
- **Key Findings**:
  - Uses **linguistic feedback** instead of weight updates for rapid policy improvement.
  - Stores self-reflections in episodic memory to guide future attempts.
  - Handles scalar or free-form feedback from external/internal evaluators.
  - Reports large coding gains (paper abstract cites **91% pass@1 HumanEval** vs lower baseline).

### [Source 4] Self-Refine: Iterative Refinement with Self-Feedback

- **URL**: https://arxiv.org/abs/2303.17651
- **Source Type**: paper
- **Date**: 2023-03-30
- **Topic Tags**: self-improvement, reasoning, reviewer-loop, quality
- **Confidence Score**: 0.93
- **Why Important**: BOX can implement a low-cost “draft → critique → revise” loop per agent invocation without retraining.
- **Key Findings**:
  - Same model acts as generator, critic, and refiner.
  - Requires no supervised fine-tuning or RL.
  - Evaluated across 7 tasks; reports ~**20% absolute average improvement** over one-shot generation.
  - Demonstrates test-time quality gains via iterative internal feedback.

### [Source 5] CRITIC: LLMs Can Self-Correct with Tool-Interactive Critiquing

- **URL**: https://arxiv.org/abs/2305.11738
- **Source Type**: paper
- **Date**: 2023-05-19
- **Topic Tags**: tool-use, verification, self-correction, safety
- **Confidence Score**: 0.92
- **Why Important**: This is a concrete blueprint for Athena-style tool-grounded verification before accepting worker outputs.
- **Key Findings**:
  - Introduces iterative correction using external tools (search, code execution, checkers).
  - Focuses on validating specific failure modes (facts, code, toxicity) then revising.
  - Improves outcomes on free-form QA, program synthesis, and toxicity mitigation.
  - Highlights necessity of external feedback channels for robust self-correction.

### [Source 6] Tree of Thoughts: Deliberate Problem Solving with Large Language Models

- **URL**: https://arxiv.org/abs/2305.10601
- **Source Type**: paper
- **Date**: 2023-05-17
- **Topic Tags**: reasoning, search, planning, verification
- **Confidence Score**: 0.90
- **Why Important**: BOX can replace single-path planning with branch-and-evaluate search for complex implementation tasks.
- **Key Findings**:
  - Generalizes chain-of-thought into explicit tree search over “thought” states.
  - Adds lookahead, backtracking, and self-evaluation.
  - Significantly improves performance on tasks requiring strategic exploration.
  - Useful for Prometheus when generating and ranking alternative execution plans.

### [Source 7] Graph of Thoughts: Solving Elaborate Problems with Large Language Models

- **URL**: https://arxiv.org/abs/2308.09687
- **Source Type**: paper
- **Date**: 2023-08-18
- **Topic Tags**: reasoning, graph-search, cost-efficiency, planning
- **Confidence Score**: 0.90
- **Why Important**: BOX can model plan candidates as graph states (merge/split/revise) rather than strict trees.
- **Key Findings**:
  - Extends ToT to arbitrary **graph-structured** thought dependencies.
  - Supports combining and distilling intermediate reasoning artifacts.
  - Reports **62% quality improvement over ToT** on sorting while reducing cost by **>31%**.
  - Enables feedback loops and reusable intermediate reasoning nodes.

### [Source 8] ReAct: Synergizing Reasoning and Acting in Language Models

- **URL**: https://arxiv.org/abs/2210.03629
- **Source Type**: paper
- **Date**: 2022-10-06
- **Topic Tags**: tool-use, reasoning, agent-control-loop
- **Confidence Score**: 0.92
- **Why Important**: ReAct is directly applicable to BOX worker execution traces: interleave reasoning with environment actions.
- **Key Findings**:
  - Interleaves thought/action/observation cycles instead of pure reasoning.
  - Improves exception handling and action-plan updates through explicit trace state.
  - Reduces hallucination via environment interaction.
  - Produces interpretable trajectories useful for postmortem diagnostics.

### [Source 9] Program of Thoughts Prompting

- **URL**: https://arxiv.org/abs/2211.12588
- **Source Type**: paper
- **Date**: 2022-11-22
- **Topic Tags**: reasoning, verification, external-execution, tool-use
- **Confidence Score**: 0.89
- **Why Important**: BOX can separate symbolic computation from natural-language reasoning by executing generated programs/tests.
- **Key Findings**:
  - Moves computation to external executors while LLM handles decomposition.
  - Reports ~**12% average gains over CoT** across evaluated datasets.
  - Combines well with self-consistency decoding for further gains.
  - Reduces arithmetic/logic errors through executable intermediate artifacts.

### [Source 10] Least-to-Most Prompting Enables Complex Reasoning

- **URL**: https://arxiv.org/abs/2205.10625
- **Source Type**: paper
- **Date**: 2022-05-21
- **Topic Tags**: reasoning, decomposition, planning
- **Confidence Score**: 0.88
- **Why Important**: BOX planning can decompose large repository changes into dependency-ordered micro-goals.
- **Key Findings**:
  - Decomposes hard tasks into sequenced easier subproblems.
  - Improves easy-to-hard generalization versus standard CoT.
  - Reports very large compositional gains (SCAN length split example in abstract).
  - Well suited for long-horizon autonomous delivery flows.

### [Source 11] Plan-and-Solve Prompting

- **URL**: https://arxiv.org/abs/2305.04091
- **Source Type**: paper
- **Date**: 2023-05-06
- **Topic Tags**: planning, reasoning-quality, prompt-strategy
- **Confidence Score**: 0.88
- **Why Important**: BOX can enforce explicit plan-generation before execution to reduce missing-step failures.
- **Key Findings**:
  - Two-stage prompting: produce plan, then execute subtasks.
  - Targets missing-step and calculation-error failure modes in zero-shot CoT.
  - PS+ adds stricter instructions for better reasoning quality.
  - Evaluated across multiple reasoning datasets with consistent gains.

### [Source 12] LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks

- **URL**: https://arxiv.org/abs/2402.01817
- **Source Type**: paper
- **Date**: 2024-02-02
- **Topic Tags**: planning, verifier-in-the-loop, architecture
- **Confidence Score**: 0.90
- **Why Important**: Supports BOX’s governance design: pair LLM generation with external verifiers/symbolic checks.
- **Key Findings**:
  - Argues pure autoregressive LLMs are weak standalone planners/verifiers.
  - Proposes **LLM-modulo** architecture with tight bi-directional verifier interaction.
  - Positions LLM as knowledge prior + proposal engine, not sole decision authority.
  - Encourages explicit solver/verifier integration in control loops.

### [Source 13] Efficient Memory Management for LLM Serving with PagedAttention

- **URL**: https://arxiv.org/abs/2309.06180
- **Source Type**: paper
- **Date**: 2023-09-12
- **Topic Tags**: serving, cost-efficiency, latency, infrastructure
- **Confidence Score**: 0.94
- **Why Important**: BOX’s single-premium-request economics benefit directly from cheaper, higher-throughput inference stacks.
- **Key Findings**:
  - Introduces paged KV-cache memory management to reduce fragmentation/waste.
  - Enables near-zero KV waste and cache sharing across requests.
  - Reports **2–4x throughput gains** at similar latency versus prior systems.
  - Gains increase for longer contexts and complex decoding.

### [Source 14] Accelerating LLM Decoding with Speculative Sampling

- **URL**: https://arxiv.org/abs/2302.01318
- **Source Type**: paper
- **Date**: 2023-02-02
- **Topic Tags**: inference-optimization, cost-efficiency, model-routing
- **Confidence Score**: 0.91
- **Why Important**: Suggests a practical draft+target model strategy to cut response time/cost in BOX loops.
- **Key Findings**:
  - Uses a smaller draft model to propose tokens, larger model verifies.
  - Preserves target-model output distribution via modified rejection sampling.
  - Reports **2–2.5x decoding speedups** in distributed setups.
  - Requires no target-model architecture changes.

### [Source 15] Lost in the Middle: How Language Models Use Long Contexts

- **URL**: https://arxiv.org/abs/2307.03172
- **Source Type**: paper
- **Date**: 2023-07-06
- **Topic Tags**: context-optimization, memory, prompt-architecture
- **Confidence Score**: 0.92
- **Why Important**: BOX should restructure prompts/memory retrieval to avoid placing critical constraints in middle context positions.
- **Key Findings**:
  - Finds performance drops when relevant information is in middle of long context.
  - Accuracy often highest when key info is near beginning or end.
  - Demonstrates this across QA and key-value retrieval tasks.
  - Motivates memory packing/ranking strategies for agent prompts.

### [Source 16] WebArena: A Realistic Web Environment for Building Autonomous Agents

- **URL**: https://arxiv.org/abs/2307.13854
- **Source Type**: paper
- **Date**: 2023-07-25
- **Topic Tags**: benchmarking, long-horizon, agent-evaluation
- **Confidence Score**: 0.89
- **Why Important**: BOX can borrow WebArena’s realism principles for internal end-to-end autonomous task evaluation.
- **Key Findings**:
  - Provides reproducible, realistic web environments across multiple domains.
  - Focuses on **functional correctness** for long-horizon tasks.
  - Includes tool and knowledge augmentations to emulate real workflows.
  - Baselines show complex tasks remain difficult, highlighting eval headroom.

### [Source 17] Holistic Evaluation of Language Models (HELM)

- **URL**: https://arxiv.org/abs/2211.09110
- **Source Type**: paper
- **Date**: 2022-11-16
- **Topic Tags**: evaluation, governance, multi-metric-quality
- **Confidence Score**: 0.90
- **Why Important**: BOX governance can adopt HELM-style multi-metric scorecards instead of pass/fail-only gating.
- **Key Findings**:
  - Defines broad scenario+metric taxonomy for transparent evaluation.
  - Uses multi-metric assessment (accuracy, calibration, robustness, fairness, bias, toxicity, efficiency).
  - Evaluates large model sets under common methodology.
  - Explicitly surfaces tradeoffs across desiderata.

### [Source 18] Arena-Hard and BenchBuilder Pipeline

- **URL**: https://arxiv.org/abs/2406.11939
- **Source Type**: paper
- **Date**: 2024-06-17
- **Topic Tags**: evaluation-automation, benchmark-generation, cost-efficiency
- **Confidence Score**: 0.91
- **Why Important**: BOX can auto-generate/update hard eval suites from production traces instead of manual benchmark curation.
- **Key Findings**:
  - Introduces automated benchmark curation from large crowdsourced corpora.
  - Uses LLM-as-judge with alignment/separation quality metrics.
  - Reports **98.6% correlation with human preference rankings**.
  - Produces strong benchmark signal at low cost (abstract cites about **$20** for Arena-Hard-Auto build).

### [Source 19] Voyager: An Open-Ended Embodied Agent with Large Language Models

- **URL**: https://arxiv.org/abs/2305.16291
- **Source Type**: paper
- **Date**: 2023-05-25
- **Topic Tags**: lifelong-learning, memory, self-improvement, curriculum
- **Confidence Score**: 0.89
- **Why Important**: BOX can apply Voyager’s auto-curriculum + executable skill-library pattern to continuously expand worker capabilities.
- **Key Findings**:
  - Combines automatic curriculum, growing skill library, and iterative prompting.
  - Stores executable skills for retrieval/reuse, improving compositionality.
  - Uses self-verification and error feedback loops during skill acquisition.
  - Reports strong multiplicative capability gains (items, distance, tech-tree progress).

### [Source 20] Generative Agents: Interactive Simulacra of Human Behavior

- **URL**: https://arxiv.org/abs/2304.03442
- **Source Type**: paper
- **Date**: 2023-04-07
- **Topic Tags**: memory-architecture, reflection, planning
- **Confidence Score**: 0.88
- **Why Important**: Its memory stream + reflection + retrieval stack is a concrete template for BOX long-term episodic memory.
- **Key Findings**:
  - Stores complete natural-language experience streams.
  - Synthesizes higher-level reflections from raw memories.
  - Retrieves memories dynamically by relevance/recency/importance for planning.
  - Demonstrates emergent coordinated behavior from memory-driven agents.

### [Source 21] DSPy (Declarative Self-improving Python) Documentation/README

- **URL**: https://raw.githubusercontent.com/stanfordnlp/dspy/main/README.md
- **Source Type**: repo
- **Date**: unknown
- **Topic Tags**: model-utilization, prompt-optimization, pipelines
- **Confidence Score**: 0.84
- **Why Important**: BOX can use DSPy-style compile/optimize loops to tune prompts/modules against eval metrics automatically.
- **Key Findings**:
  - Advocates “programming not prompting” with modular LM pipelines.
  - Supports optimization of prompts and (where available) weights.
  - Designed for compositional systems (classification, RAG, agent loops).
  - Encourages metric-driven iterative optimization of LM components.

### [Source 22] AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation

- **URL**: https://arxiv.org/abs/2308.08155
- **Source Type**: paper
- **Date**: 2023-08-16
- **Topic Tags**: multi-agent, orchestration, tool-use
- **Confidence Score**: 0.83
- **Why Important**: BOX’s multi-role architecture (CEO/planner/reviewer/workers) aligns with AutoGen’s configurable conversation patterns.
- **Key Findings**:
  - Framework for composing multiple conversable agents with tools/humans.
  - Supports programmable interaction policies in natural language and code.
  - Targets broad task classes (coding, QA, OR, decision-making).
  - Emphasizes modular, reusable agent role definitions and interaction control.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-synthesizer
Read all provided content fully before finalizing your answer.
Cross-check constraints, verification details, and output contract fields.
Do not skip sections; reason across the entire prompt context.
This block exists only to reserve context budget; do not treat it as new requirements.

## CONTEXT_SATURATION_BLOCK (research-synthesizer)
CONTEXT SATURATION REQUIREMENT:
Run label: research-