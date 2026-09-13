# Financial Integrity Policy

ARTIFACT_CLASS: DURABLE_CROSS_CUTTING_POLICY
SEMANTIC_OWNER: governance/policy/FINANCE.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

WLT is the sole authoritative owner of internal financial truth whenever the current Product creates a financial effect. DSH/surfaces may express intent or consume bounded WLT-backed readback; providers are external rails, never the internal ledger.

- No financial Product capability is admitted merely because WLT exists.
- If a current authorized journey creates money, balance, hold, fee, commission, refund, payout, settlement, COD exposure or reconciliation effects, the corresponding WLT invariant is inside that journey's affected cone and cannot be deferred as a later finance phase.
- Authoritative money uses an exact representation with explicit currency/precision policy. Binary floating-point arithmetic is forbidden for authoritative monetary calculations.
- Authoritative amounts are server-derived from trusted owner facts and applicable versioned policy; client totals/screenshots/provider labels are never financial truth.
- Every value-changing operation is authenticated, authorized, idempotent, concurrency-safe, correlated and auditable.
- Provider timeout or missing confirmation is not automatic failure or success. Unknown financial outcomes remain unknown until reconciled, and another rail is not invoked while duplicate movement remains possible.
- DSH references/projections never become a second ledger or mutable balance authority.

Unrelated wallet/payout/settlement breadth stays absent until a current Product need admits it.
