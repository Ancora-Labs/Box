import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { detectRecurrences } from "../../src/core/recurrence_detector.js";

describe("recurrence_detector", () => {
  it("sorts recurrences by recurrenceWeightedPriority descending", () => {
    const postmortems = [
      { defectChannelTag: "infra_env", lessonLearned: "infra timeout issue repeated" },
      { defectChannelTag: "infra_env", lessonLearned: "infra timeout issue repeated" },
      { defectChannelTag: "infra_env", lessonLearned: "infra timeout issue repeated" },
      { defectChannelTag: "unknown", lessonLearned: "generic lesson repeated often" },
      { defectChannelTag: "unknown", lessonLearned: "generic lesson repeated often" },
      { defectChannelTag: "unknown", lessonLearned: "generic lesson repeated often" },
    ];
    const matches = detectRecurrences(postmortems, { threshold: 2, window: 20 }) as any[];
    assert.ok(matches.length >= 2);
    assert.ok((matches[0].recurrenceWeightedPriority || 0) >= (matches[1].recurrenceWeightedPriority || 0));
  });

  it("negative path: skips duplicate-suppressed postmortems from recurrence counts", () => {
    const postmortems = [
      { defectChannelTag: "governance_drift", lessonLearned: "drift fix needed", interventionDuplicateSuppressed: true },
      { defectChannelTag: "governance_drift", lessonLearned: "drift fix needed", interventionDuplicateSuppressed: false },
    ];
    const matches = detectRecurrences(postmortems, { threshold: 2, window: 20 });
    assert.equal(matches.length, 0);
  });
});
