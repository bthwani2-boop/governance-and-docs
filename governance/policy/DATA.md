# Data Policy

ARTIFACT_CLASS: DURABLE_CROSS_CUTTING_POLICY
SEMANTIC_OWNER: governance/policy/DATA.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

- One durable fact has one canonical writer and one owning migration history.
- Schema and application changes cut over coherently; obsolete dual-write/shadow schemas require a proven bounded coexistence need.
- Migrations are deterministic, ordered, reviewable and fail closed on incompatible preconditions.
- Idempotency, ownership integrity and concurrency invariants belong in durable constraints where reliable.
- Generated/derived/read-model state is rebuildable and never mutation authority.
- Personal data is minimized, purpose-limited and exposed only to materially authorized consumers.
- Retention/deletion/anonymization obligations stay with the fact owner; no global shortcut destroys another owner's required retained truth.
