# BThwani Current Product

ARTIFACT_CLASS: DURABLE_PRODUCT_GOVERNANCE
SEMANTIC_OWNER: governance/product/PRODUCT.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Purpose

This file owns current Product breadth, non-goals and capability admission law.

The Human Actor/role model is owned by `governance/platform/PLATFORM.md`. Bounded system ownership is owned by `governance/system/SYSTEM.md`. Detailed capability truth lives only in `capabilities/**`; cross-capability sequence lives only in `JOURNEYS.md`.

## Current approved Product target

BThwani is one multi-role delivery-commerce network. The current approved Product target is broader than any one active implementation increment and includes a coherent path from participant admission through commerce, fulfillment, financial settlement, bounded communication/discovery and multi-Store checkout.

```text
IDENTITY / ROLE ACCESS
→ PARTNER + STORE ADMISSION
→ CENTRAL CATALOG / STORE ASSORTMENT
→ CUSTOMER DISCOVERY / SERVICEABILITY
→ SINGLE-STORE OR MULTI-STORE CHECKOUT
→ ONE CANONICAL STORE ORDER PER STORE
→ EXPLICIT FULFILLMENT MODE
→ PAYMENT / COLLECTION
→ PARTNER PREPARATION
→ CAPTAIN DELIVERY OR CUSTOMER PICKUP
→ EARNINGS / CASH CUSTODY / REMITTANCE / SETTLEMENT
→ ORDER-SCOPED COMMUNICATION / FEEDBACK
→ CANONICAL CROSS-SURFACE READBACK
```

The active implementation slice may be narrower. Current approved Governance may intentionally lead implementation progress. Missing admitted breadth is not by itself a defect unless the authorized objective or current delivery gate requires that breadth to be complete.

Implementation must not contradict, silently reinterpret or create a parallel owner for admitted durable meaning.

## Minimum complete and evolvable model

The Product model represents every admitted material user/business truth losslessly without requiring all admitted capabilities to be delivered in the same increment.

A concept is materially required when omitting or collapsing it would lose or blur admitted meaning, ownership, lifecycle, authorization, contract, user/business behavior, commercial truth, failure/recovery or canonical readback, or would force overloaded fields, encoded naming conventions, UI-only semantics, hidden exceptions, duplicate logic or shadow truth.

A concept may remain not-yet-implemented while it is outside the active delivery gate. Future possibility alone still does not justify a concept that is not part of the current approved Product target.

For materially costly-to-reverse identity, relation, state, ownership or public-contract decisions, preserve correct semantics and a defensible migration/extension/cutover path without prebuilding unnecessary implementation machinery.

## Admitted capabilities

- `IDENTITY_ACTIVATION_SESSIONS`
- `PARTNER_ONBOARDING_STORE_PUBLICATION`
- `CENTRAL_CATALOG`
- `SERVICEABILITY_ADDRESSES`
- `CART_CHECKOUT`
- `ORDER_LIFECYCLE`
- `CAPTAIN_DISPATCH`
- `STORE_CAPTAIN_HANDOFF`
- `FINAL_MILE_DELIVERY`
- `ORDER_PAYMENT_COLLECTION`
- `CUSTOMER_BALANCE_FUNDING`
- `BENEFICIARY_EARNINGS_SETTLEMENT`
- `STORE_CAPTAIN_MEMBERSHIP`
- `CUSTOMER_PICKUP`
- `ORDER_CONVERSATION`
- `COMMERCE_PROMOTIONS`
- `DISCOVERY_CONTENT`
- `MULTI_STORE_CHECKOUT`

Each ID has exactly one capability owner under `capabilities/**`.

## Product-wide invariants

- the Platform Human Actor/role model is authoritative for participant identity semantics;
- one canonical Store Order belongs to exactly one Store, even when created under a parent multi-Store checkout;
- fulfillment mode is operational truth and remains distinct from payment method;
- the admitted fulfillment modes are BThwani Captain delivery, Store-affiliated Partner Captain delivery and Customer Pickup;
- Partner Captain affiliation never creates a sixth high-level Identity role;
- customer payment allocation is distinct from beneficiary/settlement allocation;
- an external provider wallet or payment rail is never the internal BThwani balance or ledger;
- Store is not a tenant and Partner is not an organization/member hierarchy;
- surfaces never become business owners;
- client input never grants identity, role, business scope or owner authority;
- system-owner boundaries follow `governance/system/SYSTEM.md`;
- derived search/cache/analytics/notification state never becomes mutation authority;
- successful user-facing mutation requires canonical committed readback;
- admitted breadth and implementation completion are separate claims.

## Explicit current non-goals

Not admitted now: loyalty as a standalone Product, a social review/community network, a generic support/ticketing platform, advanced route-optimization Product, generic analytics Product, a standalone notification Product, broad customer-profile/privacy orchestration, Partner organization/member/team abstractions, generic multi-tenant SaaS architecture, ERP/POS replacement and speculative multi-currency breadth.

Transactional notifications may exist as bounded projections of owner facts. Basic order rating/feedback may remain a bounded order fact without becoming a social review capability.

## Capability admission law

A new Product capability requires authorized current-program need, stable independent responsibility, canonical owner/writer/readback, affected actors/surfaces, legal mutation/state boundaries, authorization, material failure/recovery semantics and no stronger existing capability that can own it cohesively.

Donor existence, competitor presence, OSS availability or technical possibility alone is insufficient.
