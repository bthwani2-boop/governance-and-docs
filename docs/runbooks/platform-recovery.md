# Systemic Platform Recovery

DOCUMENT_CLASS: OPERATIONAL_RUNBOOK
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

## Scope

Cross-cutting incidents involving data/migrations, contract/version skew, startup/readiness, credentials/security, providers or partial cross-service cutover.

## Incident command

Assign one Incident Commander for operational decision/communication, an operations lead for infrastructure/deployment concerns, and the affected domain owner for canonical state/invariant decisions. Roles may be combined for a small incident, but decision ownership must remain explicit.

## Triage

1. Pin exact deployed/working candidate and environment.
2. Identify affected owners, writers, readers, contracts, migrations and external effects.
3. Stop unsafe writes when continued mutation can widen corruption/security/data loss.
4. Preserve privacy-safe forensic evidence.
5. Classify the failure before retrying or changing state.

## Environment authority

Local/integration reset uses current repository-owned lifecycle commands; the canonical full proof is resolved from executable scripts (currently `pnpm runtime:integration:close`).

Staging/Production mutation, migration, provider effect, credential action or recovery is never inferred from repository access, credentials or this runbook. Use only an explicitly materialized and authorized mechanism for the exact environment/target/operation.

If no proven Production restore/PITR/break-glass mechanism exists in live infrastructure, the correct result is **unsupported/blocking**, not an improvised command.

## Database/migration failure

Determine applied migration state, writer compatibility, data risk and recovery semantics. Prefer forward-safe correction. Rollback is valid only when data/schema semantics explicitly support it.

For a restore claim use an isolated target, verify schema/data integrity, required readback/journeys and financial/audit reconciliation where applicable.

## Contract/version skew

Identify producer, consumer and exact contract/generated lineage. Use only bounded compatibility that corresponds to a real coexistence window and has a deletion trigger. Never retain two mutable protocol authorities.

## Credential/security incident

Contain exposed credential use, rotate/revoke through the approved secret authority, inspect resulting provider/audit effects and invalidate sessions/tokens according to owner semantics. Never place secrets in tickets/logs.

## Unknown provider/external effect

Unknown mutating outcomes remain unknown until authoritative provider/owner evidence reconciles them. Do not blindly retry or fail over a financial/external mutation.

## Partial cutover

Identify old/new writers and consumers, prevent dual writes, finish or safely reverse the cutover, reconcile durable effects, then remove obsolete paths and verify negative space.

## Closure

Verify exact-candidate health/readiness, durable readback, contract compatibility, security invariants, required reconciliation and absence of stale writers/config/routes before returning the affected responsibility to normal operation.
