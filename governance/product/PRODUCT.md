# BThwani Current Product

ARTIFACT_CLASS: DURABLE_PRODUCT_GOVERNANCE
SEMANTIC_OWNER: governance/product/PRODUCT.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Purpose

This file owns current Product breadth, non-goals and capability admission law.

The Human Actor/role model is owned by `governance/platform/PLATFORM.md`. Bounded system ownership is owned by `governance/system/SYSTEM.md`. Detailed capability truth lives only in `capabilities/**`; cross-capability sequence lives only in `JOURNEYS.md`.

## Current minimum Product outcome

BThwani currently targets one thin coherent multi-surface delivery-commerce core:

```text
IDENTITY / ROLE ACCESS
→ PARTNER + STORE ADMISSION
→ CENTRAL CATALOG / STORE ASSORTMENT PUBLICATION
→ CUSTOMER SERVICEABILITY
→ CART / CHECKOUT
→ ORDER
→ PARTNER PREPARATION / READY
→ CAPTAIN DISPATCH
→ STORE↔CAPTAIN HANDOFF
→ FINAL-MILE DELIVERY
→ CANONICAL CROSS-SURFACE READBACK
```

The active implementation slice may be narrower. Live Governance must neither mirror implementation progress nor contain unproven future Product breadth.

## Minimum complete and evolvable model

The current Product model is the smallest model that represents every current material user/business truth losslessly.

A concept is materially required when omitting or collapsing it would lose or blur current meaning, ownership, lifecycle, authorization, contract, user/business behavior, commercial truth, failure/recovery or canonical readback, or would force overloaded fields, encoded naming conventions, UI-only semantics, hidden exceptions, duplicate logic or shadow truth.

A concept may be omitted only when the admitted journeys remain fully representable, executable and provable without it. Future breadth remains absent until current need proves it.

For materially costly-to-reverse identity, relation, state, ownership or public-contract decisions, preserve correct current semantics and a defensible migration/extension/cutover path without prebuilding speculative future capability.

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

Each ID has exactly one capability owner under `capabilities/**`.

## Product-wide invariants

- the Platform Human Actor/role model is authoritative for current participant identity semantics;
- one standard order uses the one currently admitted BThwani fulfillment path defined by its fulfillment capability owners;
- Store is not a tenant and Partner is not an organization/member hierarchy;
- surfaces never become business owners;
- client input never grants identity, role, business scope or owner authority;
- system-owner boundaries follow `governance/system/SYSTEM.md`;
- derived search/cache/analytics state never becomes mutation authority;
- successful user-facing mutation requires canonical committed readback;
- future capabilities remain absent until current need proves them.

## Explicit current non-goals

Not admitted now: loyalty/marketing campaigns, coupons/promotions funding, ratings/reviews, general support/rescue subsystem, special-request marketplace, analytics as Product capability, notification subsystem, broad customer-profile/privacy orchestration, settlement/payout/collateral/pricing Product capabilities, alternate fulfillment modes, Partner organization/member/team abstractions and generic multi-tenant SaaS architecture.

A future objective may admit any such capability through current evidence. Current absence is not a permanent declaration that it can never become necessary.

## Capability admission law

A new Product capability requires current user/business need, stable independent responsibility, canonical owner/writer/readback, affected actors/surfaces, legal mutation/state boundaries, authorization, material failure/recovery semantics and no stronger existing capability that can own it cohesively.

Future need, donor existence, competitor presence, OSS availability or technical possibility alone is insufficient.
