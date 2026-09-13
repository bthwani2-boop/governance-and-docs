# Reliability Policy

ARTIFACT_CLASS: DURABLE_CROSS_CUTTING_POLICY
SEMANTIC_OWNER: governance/policy/RELIABILITY.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

- Every material mutation defines retry/idempotency semantics.
- Unknown external or cross-service outcomes are reconciled before blind replay.
- Concurrency-sensitive ownership, assignment, custody and terminal transitions fail deterministically rather than forking truth.
- Timeouts are decisions only when the owning capability defines their durable consequence.
- Offline/degraded UI never fabricates canonical success.
- Restart/resume reconstructs from canonical owner state.
- Readiness/health distinguishes configured, available, degraded and unknown where material.
- Observability preserves correlation and cause without logging secrets or unnecessary personal data.
- Recovery proves final owner readback.
