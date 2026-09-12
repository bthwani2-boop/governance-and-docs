# Zones SLA Capacity Serviceability

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/commerce/zones-sla-capacity-serviceability.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
PARENT_CAPABILITY_INDEX: governance/product/CAPABILITIES.md
CAPABILITY_ID: ZONES_SLA_CAPACITY_SERVICEABILITY

## Scope

This file is the **sole editable durable semantic owner** of `ZONES_SLA_CAPACITY_SERVICEABILITY`. Capability taxonomy/schema/admission law remains in `../../CAPABILITIES.md`; cross-capability journey semantics remain in `../../JOURNEYS.md`.

### ZONES_SLA_CAPACITY_SERVICEABILITY

**Problem.** Service areas, operational zones, SLA, capacity pressure and pauses must produce one deterministic DSH decision consumed by cart, checkout, order and dispatch instead of independent surface assumptions.
**Problem frequency.** continuous
**Problem severity.** critical
**Target state.** One governed serviceability decision and audit lifecycle is used across all required surfaces for the canonical BThwani delivery path.
**Primary success measure.** canonical serviceability decision coverage.
**Guardrail measures.** checkout allowed after denial count; dispatch during pause count; stale version mutation count; rollback without audit snapshot count.

**Required outcome.** Every affected surface receives one versioned DSH serviceability decision that combines active service area/zone, SLA, capacity pause and pressure, with explicit effects for cart, checkout, order and BThwani dispatch.

**Primary actors.** operator, client, partner, captain.

**Canonical ownership.** DSH operational serviceability/zone/SLA/capacity truth.

**Material deployable surfaces.** control-panel, app-client, app-partner, app-captain.

**Business invariants**
- DSH owns operational serviceability, zone, SLA and capacity decisions.
- Service-area geofences remain the spatial boundary truth where the current model uses them.
- Every affected workflow consumes the same canonical decision/version.
- Standard commerce serviceability is evaluated only for the canonical BThwani delivery path.
- Capacity pause/resume and pressure consequences are server-owned and apply consistently to checkout and dispatch.
- Policy history is append-only and rollback creates a new version.

**Forbidden/negative invariants**
- No frontend derives serviceability from local constants.
- No alternate fulfillment path, second fleet, compatibility branch or client-side execution selector is represented by this capability.
- No paused or unserviceable path creates checkout or dispatch success.
- No stale expected version overwrites newer policy.
- No DSH policy mutation writes WLT financial truth.

**Acceptance expectations**
- Assignment SLA is represented alongside preparation and delivery SLA where required by the current model.
- Capacity supports explicit pause and resume with a reason and version guard.
- Evaluation fails closed for inactive zones, paused capacity and exhausted pressure thresholds according to current policy.
- The decision returns explicit cart, checkout, order and BThwani dispatch effects.
- Every mutation is authorized, idempotent, correlated, versioned and audited.
- Audit snapshots can rollback only the same reversible aggregate through a new governed revision.
- The control panel exposes loading, empty, success, conflict, forbidden and recovery states.
- Affected client, partner and captain integrations consume the canonical decision rather than local truth.
- Operational policy does not create WLT balance or ledger mutation.

**Named failure classes:** local_serviceability_truth, dispatch_during_pause, checkout_after_denial, alternate_fulfillment_shape, stale_update, cross_aggregate_rollback, dsh_financial_mutation.

**Actor responsibility envelope**
- `operator` — Authorized operational controller; permitted: manage operational zones, SLA and capacity, pause or resume a zone, read audit history, rollback a reversible serviceability-policy revision; forbidden: mutate WLT ledger truth, introduce alternate fulfillment branching through serviceability policy, change policy without reason and idempotency, rollback across aggregate boundaries, hide a capacity or serviceability denial.
- `client` — Authenticated customer receiving serviceability for the owned delivery-address intent; permitted: read effective BThwani serviceability, refresh canonical state, change address or Store; forbidden: override zone pause, choose a different execution path, continue checkout after canonical denial, read operator audit data.
- `partner` — Authorized Store operator consuming Store-scoped policy readback; permitted: read Store coverage, SLA and pause impact, prepare orders that remain serviceable; forbidden: self-authorize final-mile delivery, create a parallel fleet policy, mutate another Store policy, override platform capacity.
- `captain` — Eligible BThwani courier receiving dispatch consequences; permitted: receive assignments allowed by effective serviceability/capacity policy, read effective assignment SLA; forbidden: receive dispatch while the effective zone/capacity state denies it, mutate platform policy.

**Surface semantics**
- `control-panel` — required; actors: operator; states: loading, empty, success, paused, throttled, conflict, forbidden, offline, error; actions: create, edit, pause, resume, inspect, rollback, refresh.
- `app-client` — required; actors: client; states: serviceable, unserviceable, paused, throttled, offline, error; actions: refresh, change address or Store.
- `app-partner` — required; actors: partner; states: serviceable, paused, throttled, offline, error; actions: read policy impact, refresh.
- `app-captain` — required; actors: captain; states: assignable, paused, capacity_blocked, offline, error; actions: read assignment consequence, refresh.
- `backend` — required; actors: operator, client, partner, captain; states: authorized, forbidden, invalid, conflict, serviceable, paused, throttled; actions: authorize, validate, evaluate, audit, rollback, fail closed.
- `database` — required; actors: operator; states: versioned, idempotent, append_only_audit, reversible; actions: enforce constraints, retain snapshots, prevent stale writes.
- `app-field` — excluded; actors: field; states: not_affected; exclusion reason: Field workflows may consume readiness/service-area projections when required but do not own or mutate operational routing policy under the current model.

## Capability-change law

A new capability or material capability change must prove a stable responsibility, canonical owner, affected actors/surfaces, legal state/mutation/readback semantics, authorization, failure/recovery behavior and acceptance expectations.

```text
ACTOR != CAPABILITY_OWNER
ROUTE != CAPABILITY_OWNER
SCREEN != CAPABILITY_OWNER
IMPLEMENTATION_MECHANISM != DOMAIN
```
