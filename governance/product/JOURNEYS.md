# BThwani Current Journeys

ARTIFACT_CLASS: DURABLE_PRODUCT_GOVERNANCE
SEMANTIC_OWNER: governance/product/JOURNEYS.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

A journey is an end-to-end actor/system outcome across current admitted capabilities. It is not a route, screen, backlog or implementation plan.

## J0 — Identity and role-scoped access

Client registration/login/recovery, managed Partner/Captain/Field activation/session/recovery and Operator bootstrap/enrollment/Passkey/recovery all remain Identity-owned role-scoped access lifecycles.

Capability: `IDENTITY_ACTIVATION_SESSIONS`.

## J1 — Partner joining to customer-visible Store

PROSPECTIVE PARTNER → JOINING CASE → REQUIRED BUSINESS/FIRST-STORE DATA → IDENTITY RESOLUTION + partner ROLE ADMISSION WHEN ELIGIBLE → CANONICAL actor_id BINDING → OWNER REVIEW/CORRECTION → STORE READINESS → STORE PUBLICATION → CATALOG/ASSORTMENT PUBLICATION → CUSTOMER-VISIBLE READBACK.

Capabilities: `PARTNER_ONBOARDING_STORE_PUBLICATION`, `IDENTITY_ACTIVATION_SESSIONS`, `CENTRAL_CATALOG`.

## J2 — Customer order to completed BThwani delivery

CUSTOMER ADDRESS/SERVICEABILITY → CART/CHECKOUT → ORDER CREATION → PARTNER ACCEPT/PREPARE → READY FOR DISPATCH → CAPTAIN OFFER/ASSIGNMENT → STORE↔CAPTAIN HANDOFF → PICKED UP → IN DELIVERY → DELIVERED OR GOVERNED DELIVERY FAILURE → CANONICAL CROSS-SURFACE READBACK.

Capabilities: `SERVICEABILITY_ADDRESSES`, `CART_CHECKOUT`, `ORDER_LIFECYCLE`, `CAPTAIN_DISPATCH`, `STORE_CAPTAIN_HANDOFF`, `FINAL_MILE_DELIVERY`.

No alternative final-mile lane exists.

## J3 — Captain participation

IDENTITY/ACTIVATION → DSH ELIGIBILITY/AVAILABILITY → DISPATCH OFFER → ACCEPT/DECLINE/TIMEOUT → ASSIGNMENT → STORE HANDOFF → PICKUP → FINAL-MILE DELIVERY → DELIVERY RESULT → CANONICAL READBACK.

Capabilities: `IDENTITY_ACTIVATION_SESSIONS`, `CAPTAIN_DISPATCH`, `STORE_CAPTAIN_HANDOFF`, `FINAL_MILE_DELIVERY`.

Financial/earnings semantics are not admitted in this minimum Product breadth and must not be invented by DSH.

## J4 — Operator-owned-domain operations

OPERATOR SESSION → CONTROL-PANEL INTENT → APPLICABLE OWNER AUTHORIZATION → OWNER MUTATION OR READ → ATTRIBUTABLE EVIDENCE → CANONICAL READBACK.

`control-panel` is a host only. The capability protecting the fact owns the action.

## Journey completeness

Every material active journey accounts for authorization, idempotency/retry, conflict/concurrency, degraded/offline behavior, unknown outcomes, restart/resume, cross-owner handoff and canonical readback where applicable. Every admitted capability ID appears in at least one current journey.
