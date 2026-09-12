# Settlements Commissions

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/finance/settlements-commissions.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
PARENT_CAPABILITY_INDEX: governance/product/CAPABILITIES.md
CAPABILITY_ID: SETTLEMENTS_COMMISSIONS

## Scope

This file is the **sole editable durable semantic owner** of `SETTLEMENTS_COMMISSIONS`. Capability taxonomy/schema/admission law remains in `../../CAPABILITIES.md`; cross-capability journey semantics remain in `../../JOURNEYS.md`.

### SETTLEMENTS_COMMISSIONS

**Problem.** Partner settlements and admitted representative/captain commissions require one auditable WLT-owned financial lifecycle backed by durable DSH operational evidence, versioned policies, deterministic calculation, explicit adjustments and read-only multi-surface readback.
**Problem frequency.** continuous
**Problem severity.** critical
**Target state.** WLT owns one evidence-backed idempotent settlement and commission lifecycle with policy versions, refund-aware calculation, adjustments, audit and scoped readback.
**Primary success measure.** verified evidence to canonical settlement or commission readback rate
**Guardrail measures.** caller supplied financial amount count; duplicate source settlement count; unverified completion evidence count; completed refund omitted from settlement count; commission without policy version count; reasonless adjustment count; negative wallet bucket count; cross-actor read count; unbalanced ledger transaction count

**Required outcome.** Every settlement and commission is deterministically calculated by WLT from durable evidence and a retained policy version, every adjustment has a reason and balanced financial effect, and every required surface reads only canonical scoped references.

**Primary actors.** partner, captain, finance_operator, dsh_service, wlt_service; field only when an admitted Partner-joining compensation policy exists.

**Canonical ownership.** WLT financial truth; DSH provides operational evidence.

**Boundary/non-overlap.** SETTLEMENTS_COMMISSIONS owns earning/commission calculation, policy-version application and settlement/commission lifecycle. WLT_MONEY_MOVEMENT_PAYOUT_RECONCILIATION owns common wallet/ledger money movement, Cash-In/COD/payout execution and reconciliation primitives; the same financial fact may not be independently mutable in both capability implementations.

**Material deployable surfaces.** app-partner, app-captain, control-panel; app-field only when Partner-joining compensation exists.

**Business invariants**
- WLT exclusively owns settlement commission wallet ledger refund and adjustment truth.
- DSH exclusively owns operational completion/cancellation/order/store/Partner-joining evidence.
- Field compensation, when admitted, derives only from canonical Partner-joining evidence and a versioned WLT policy; a visit/check/document/form event alone is not commission truth unless that exact event is the canonical policy source.
- Every financial mutation carries service authentication correlation and idempotency.
- Every visible success is read back from WLT or a governed DSH application projection backed by WLT.
- Every policy change and adjustment is append-only auditable.

**Forbidden/negative invariants**
- No DSH or frontend code calculates authoritative settlement fees or commission amounts.
- No caller supplied monetary value becomes commission truth.
- No `field` role automatically creates commission entitlement.
- No completed refund remains in the payable settlement basis when policy requires its exclusion.
- No cancelled or unverified source is settled.
- No idempotency key represents different inputs.
- No wallet balance violates current financial invariants.
- No actor reads another actor financial detail.

**Acceptance expectations**
- DSH sends operational identities and immutable evidence only; it never sends an authoritative fee, settlement amount or commission amount.
- WLT verifies operational evidence and its own refund truth before calculation.
- A deterministic idempotency key cannot create duplicate financial effects for the same evidence.
- Every settlement and commission retains the exact policy version used for calculation.
- Every commission amount is calculated by the applicable WLT policy and is never accepted from an untrusted caller.
- Field compensation, when configured, references canonical Partner-joining evidence from `PARTNER_ONBOARDING_STORE_PUBLICATION`, not a parallel field-work lifecycle.
- Lifecycle transitions enforce legal source states and balanced wallet or ledger effects.
- Every deduction or adjustment is reasoned, operator-attributed and auditable.
- Partner/Captain and applicable Field reads are actor-scoped and mutation-free.
- No runtime mock fixture local financial calculation or duplicate financial truth owner remains.

**Named failure classes:** caller_supplied_amount, unverified_evidence, field_role_implies_commission, noncanonical_field_event_paid, cancelled_source_settled, completed_refund_ignored, duplicate_settlement, duplicate_commission, missing_policy, stale_policy_ambiguity, reasonless_adjustment, negative_wallet_bucket, cross_actor_financial_read, unbalanced_ledger, frontend_only_success.

**Actor responsibility envelope**
- `partner` — Authenticated Partner viewing only WLT settlement and commission references; permitted: read own settlement cycles, deductions/adjustments and commission references, refresh canonical WLT readback; forbidden: calculate commission locally, post/reverse a settlement, change financial policy, read another Partner financial record.
- `captain` — Authenticated Captain viewing only personal commission lifecycle and adjustment reasons; permitted: read own commissions/states and refresh canonical readback; forbidden: submit an amount, confirm/settle/reject/reverse/adjust a commission, read another beneficiary record.
- `field` — only when an admitted Partner acquisition/onboarding compensation policy exists; permitted: read WLT-calculated compensation derived from canonical Partner-joining evidence and adjustment reasons, refresh canonical readback; forbidden: claim compensation from a local visit/check/form, submit authoritative amount, change joining evidence to alter finance truth, mutate commission state, read another representative record.
- `finance_operator` — Authorized control-panel operator managing policies and governed financial lifecycle actions; permitted: create/update versioned policy with reason, initiate settlement from DSH evidence, confirm/reject/settle/reverse eligible commission, create reasoned adjustment, read audit/reconciliation references; forbidden: supply settlement/commission truth amounts, approve own action where maker-checker applies, erase audit evidence, bypass authentication gates.
- `dsh_service` — Operational truth owner providing durable completion/cancellation/Partner-joining evidence; forbidden: calculate WLT fee/commission, write WLT tables, send mutable/unverifiable evidence.
- `wlt_service` — Sole financial truth owner for policy application settlement commission wallet ledger adjustment and audit; permitted: verify DSH evidence, calculate governed amounts, post balanced ledger effects, retain policy/adjustment versions, return canonical readback.

**Surface semantics**
- `app-partner` — required when Partner settlement/commission readback is admitted; actors: partner; states: loading, empty, success, pending, settled, rejected, reversed, forbidden, offline, partial, error; actions: refresh, inspect cycle, inspect adjustment reason.
- `app-captain` — required when Captain commission readback is admitted; actors: captain; states: loading, empty, success, pending, confirmed, settled, rejected, reversed, forbidden, offline, error; actions: refresh, inspect commission, inspect adjustment reason.
- `app-field` — conditional on admitted Partner-joining compensation; actors: field; states: loading, empty, success, pending, confirmed, settled, rejected, reversed, forbidden, offline, error; actions: refresh, inspect canonical Partner-joining compensation source/reference, inspect adjustment reason.
- `control-panel` — required; actors: finance_operator; states: loading, empty, success, draft, active, inactive, pending, confirmed, settled, rejected, reversed, forbidden, conflict, offline, error; actions: create policy version, initiate settlement, confirm, settle, reject, reverse, adjust, inspect audit.
- `backend` — required; actors: finance_operator, dsh_service, wlt_service; states: authorized, forbidden, invalid, conflict, pending, confirmed, settled, rejected, reversed; actions: authenticate, validate evidence, calculate, enforce idempotency, post ledger, audit, read back.
- `database` — required; actors: wlt_service; states: versioned, immutable, idempotent, balanced, auditable, trusted-context-scoped; actions: enforce uniqueness, retain evidence, retain reasoned adjustment, prevent negative amount, retain policy version.
