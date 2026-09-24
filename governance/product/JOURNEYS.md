# BThwani Current Journeys

ARTIFACT_CLASS: DURABLE_PRODUCT_GOVERNANCE
SEMANTIC_OWNER: governance/product/JOURNEYS.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

A journey is an end-to-end actor/system outcome across admitted capabilities. It is not a route, screen, backlog or implementation schedule. A journey may cover approved Product breadth that is delivered over dependency-ordered increments.

## J0 — Identity and role-scoped access

Client registration/login/recovery, managed Partner/Captain/Field activation/session/recovery and Operator bootstrap/enrollment/recovery remain Identity-owned role-scoped access lifecycles.

Capability: `IDENTITY_ACTIVATION_SESSIONS`.

## J1 — Partner/Field acquisition to customer-visible Store

FIELD ADMISSION/ELIGIBILITY → IDENTITY RESOLUTION + `field` ROLE → authorized Field-originated joining work → OWNER REVIEW; then PROSPECTIVE PARTNER → JOINING CASE → IDENTITY RESOLUTION + `partner` ROLE → CANONICAL actor binding → OWNER REVIEW/CORRECTION → STORE READINESS → CENTRAL CATALOG / STORE ASSORTMENT → STORE PUBLICATION → CUSTOMER-VISIBLE STOREFRONT.

Capabilities: `PARTNER_ONBOARDING_STORE_PUBLICATION`, `IDENTITY_ACTIVATION_SESSIONS`, `CENTRAL_CATALOG`.

## J2 — Store Order through selected fulfillment

CUSTOMER ADDRESS/SERVICEABILITY → CART/CHECKOUT → CANONICAL STORE ORDER → PARTNER ACCEPT/PREPARE → READY FOR FULFILLMENT → selected fulfillment:

```text
BTHWANI_CAPTAIN
→ CAPTAIN DISPATCH → STORE↔CAPTAIN HANDOFF → FINAL-MILE DELIVERY

PARTNER_CAPTAIN
→ STORE-CAPTAIN MEMBERSHIP ELIGIBILITY → STORE↔CAPTAIN HANDOFF → FINAL-MILE DELIVERY

CUSTOMER_PICKUP
→ STORE PICKUP READINESS → CUSTOMER PICKUP PROOF
```

Capabilities: `SERVICEABILITY_ADDRESSES`, `CART_CHECKOUT`, `ORDER_LIFECYCLE`, `CAPTAIN_DISPATCH`, `STORE_CAPTAIN_MEMBERSHIP`, `STORE_CAPTAIN_HANDOFF`, `FINAL_MILE_DELIVERY`, `CUSTOMER_PICKUP`.

## J3 — Order financial lifecycle

CUSTOMER OR BTHWANI CAPTAIN BALANCE FUNDING THROUGH AN APPROVED EXTERNAL CASH-IN RAIL → CHECKOUT FINANCIAL INTENT → PAYMENT/COLLECTION ALLOCATION → applicable COD EXPOSURE/HOLD OR INTERNAL BALANCE DEBIT → OPERATIONAL COMPLETION → PARTNER/CAPTAIN/FIELD EARNINGS AS APPLICABLE → COD CASH CUSTODY/REMITTANCE AS A SEPARATE RECEIVABLE-CLOSURE FLOW → MANUAL OFFICIAL-WALLET BENEFICIARY PAYOUT/SETTLEMENT → RECONCILIATION → CANONICAL FINANCIAL READBACK.

External provider funding is a rail into internal balance, not a substitute for the WLT ledger. Unknown cross-owner or provider outcomes reconcile before another movement is attempted.

Captain COD cash remittance closes the corresponding cash receivable and exposure hold; it is not Cash-In, Captain earnings payout or a debit of collateral for an ordinary successful delivery.

Capabilities: `ORDER_PAYMENT_COLLECTION`, `CUSTOMER_BALANCE_FUNDING`, `CAPTAIN_BALANCE_FUNDING`, `PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT`, `ORDER_LIFECYCLE`.

## J4 — Order exception, cancellation, refund, conversation and feedback

ORDER-SCOPED COMMUNICATION → legal cancellation/failure/exception decision → applicable refund/financial consequence → operational and financial reconciliation → bounded post-order communication window/read-only closure → optional basic order feedback → CANONICAL READBACK.

Conversation closure is independent from rating submission.

Capabilities: `ORDER_LIFECYCLE`, `ORDER_CONVERSATION`, `ORDER_PAYMENT_COLLECTION`, `PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT`.

## J5 — Promotions/content to customer discovery

AUTHORIZED CAMPAIGN/PROMOTION OR DISCOVERY CONTENT → DSH ELIGIBILITY/PUBLICATION → applicable WLT funding effect for financially funded incentives → customer-safe discovery/readback.

Capabilities: `COMMERCE_PROMOTIONS`, `DISCOVERY_CONTENT`, `CENTRAL_CATALOG`, `ORDER_PAYMENT_COLLECTION`.

## J6 — Multi-Store checkout to independent Store Orders

PARENT CHECKOUT INTENT → independent STORE ORDER per Store → per-child fulfillment/payment outcome → explicit partial failure/cancellation/refund handling → parent reconciliation → grouped delivery planning only where admitted by current need → CANONICAL CHILD + PARENT READBACK.

Capabilities: `MULTI_STORE_CHECKOUT`, `CART_CHECKOUT`, `ORDER_LIFECYCLE`, `ORDER_PAYMENT_COLLECTION`, `CAPTAIN_DISPATCH`, `STORE_CAPTAIN_MEMBERSHIP`, `CUSTOMER_PICKUP`.

## J7 — Operator exception and financial governance

OPERATOR SESSION → bounded owner-authorized intent → applicable DSH/WLT mutation or read → attributable evidence → canonical readback. Operator surfaces host work; they never become owners.

Capabilities: `PARTNER_ONBOARDING_STORE_PUBLICATION`, `CENTRAL_CATALOG`, `STORE_SCOPED_ACCESS_DELEGATION`, `CAPTAIN_DISPATCH`, `ORDER_PAYMENT_COLLECTION`, `PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT`, `CUSTOMER_BALANCE_MANUAL_WITHDRAWAL`, `COMMERCE_PROMOTIONS`, `DISCOVERY_CONTENT`.

The rare Customer balance withdrawal exception is initiated through Operations, approved/executed by authorized Finance staff, and independently reconciled before WLT finalizes the liability reduction. It is not customer self-service.

## Journey completeness

Every material active journey accounts for authorization, idempotency/retry, conflict/concurrency, degraded/offline behavior, unknown outcomes, restart/resume, cross-owner handoff and canonical readback where applicable. Every admitted capability ID appears in at least one current journey.

An admitted capability outside the current delivery gate is not falsely claimed complete merely because its journey is governed.
