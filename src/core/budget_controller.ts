import { readJson, writeJson } from "./fs_utils.js";

/** Minimum remaining USD required to allow a Claude call. */
export const BUDGET_THRESHOLD_USD = 0.2;

/**
 * Structured eligibility contract produced on every pre-dispatch budget
 * reconciliation.  Always emitted — even when the budget gate is not
 * configured — so callers have a uniform surface for observability and
 * policy decisions.
 */
export interface BudgetEligibilityContract {
  /** True when dispatch is allowed from a budget perspective. */
  eligible: boolean;
  /** Remaining USD at reconciliation time.  null when unconfigured or unreadable. */
  remainingUsd: number | null;
  /** The USD threshold below-or-equal to which dispatch is blocked. */
  thresholdUsd: number;
  /** ISO timestamp of when the check ran. */
  checkedAt: string;
  /**
   * Human-readable reason when not eligible, or a non-fatal error note
   * when a read error occurred (fail-open path).  null when eligible and
   * no errors.
   */
  reason: string | null;
  /** False when no budgetFile path is configured (unlimited / unconstrained). */
  configured: boolean;
}

export async function loadBudget(config) {
  return readJson(config.paths.budgetFile, {
    initialUsd: config.env.budgetUsd,
    remainingUsd: config.env.budgetUsd,
    claudeCalls: 0,
    workerRuns: 0,
    updatedAt: new Date().toISOString()
  });
}

export async function chargeBudget(config, patch) {
  const budget = await loadBudget(config);
  budget.remainingUsd = Math.max(0, Number((budget.remainingUsd - (patch.usd ?? 0)).toFixed(4)));
  budget.claudeCalls += patch.claudeCalls ?? 0;
  budget.workerRuns += patch.workerRuns ?? 0;
  budget.updatedAt = new Date().toISOString();
  await writeJson(config.paths.budgetFile, budget);
  return budget;
}

export function canUseClaude(budget) {
  return budget.remainingUsd > BUDGET_THRESHOLD_USD;
}

/**
 * Reconcile current budget state into a BudgetEligibilityContract.
 *
 * Always returns a contract object regardless of configuration or errors:
 *   - Unconfigured budget path  → eligible=true, configured=false
 *   - Budget above threshold    → eligible=true, configured=true
 *   - Budget at/below threshold → eligible=false, configured=true
 *   - Read error                → eligible=true (fail-open), reason carries the error
 */
export async function reconcileBudgetEligibility(config): Promise<BudgetEligibilityContract> {
  const thresholdUsd = BUDGET_THRESHOLD_USD;
  const checkedAt = new Date().toISOString();

  if (!config?.paths?.budgetFile) {
    return { eligible: true, remainingUsd: null, thresholdUsd, checkedAt, reason: null, configured: false };
  }

  try {
    const budget = await loadBudget(config);
    const eligible = budget.remainingUsd > thresholdUsd;
    return {
      eligible,
      remainingUsd: budget.remainingUsd,
      thresholdUsd,
      checkedAt,
      reason: eligible ? null : `budget_exhausted:remainingUsd=${budget.remainingUsd}`,
      configured: true,
    };
  } catch (err) {
    // Fail-open: a corrupt or missing budget file must not halt legitimate work.
    return {
      eligible: true,
      remainingUsd: null,
      thresholdUsd,
      checkedAt,
      reason: `budget_read_error:${String(err?.message || err)}`,
      configured: true,
    };
  }
}
