# Quality Policy

ARTIFACT_CLASS: DURABLE_CROSS_CUTTING_POLICY
SEMANTIC_OWNER: governance/policy/QUALITY.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

Quality is proven against the affected cone, not by one green test.

As applicable, prove static/type/schema correctness; owner-level unit/state invariants; negative authorization and invalid transitions; database/migration integrity; contract/generated-client consistency; integration/runtime readback; cross-surface convergence; failure/recovery/retry/concurrency; accessibility and RTL for affected UI; and absence of obsolete/shadow paths after cutover.

When correctness depends on OS/device behavior, use representative real-device evidence for the material claim, including process restart/resume, foreground/background behavior, weak/offline reconnect, permissions, location/background restrictions, deep-link/notification handoff, text scaling/accessibility and post-recovery canonical readback as applicable. Export/build success alone does not prove these behaviors.

Use current primary standards and assurance references from `docs/reference/` when they can change the proof model. Best practice is evidence, not automatic architecture authority.
