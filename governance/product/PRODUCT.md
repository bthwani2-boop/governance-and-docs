# BThwani Current Product

ARTIFACT_CLASS: DURABLE_PRODUCT_GOVERNANCE
SEMANTIC_OWNER: governance/product/PRODUCT.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Purpose

This file owns current Product-level breadth, non-goals and admission law. Detailed capability truth lives only in `capabilities/**`; cross-capability sequence lives only in `JOURNEYS.md`.

## Current minimum Product outcome

BThwani currently targets one thin coherent multi-surface delivery-commerce core:

IDENTITY / ROLE ACCESS → PARTNER + STORE ADMISSION → CATALOG PUBLICATION → CUSTOMER SERVICEABILITY → CART / CHECKOUT → ORDER → PARTNER PREPARATION / READY → CAPTAIN DISPATCH → STORE↔CAPTAIN HANDOFF → FINAL-MILE DELIVERY → CANONICAL CROSS-SURFACE READBACK.

The active implementation slice may be narrower, but live Governance must not contain unproven future Product breadth.

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

Each ID has exactly one owner file under `capabilities/**`.

## Product-wide invariants

- one Human Actor uses one `actor_id`;
- roles are `client`, `partner`, `captain`, `field`, `operator`;
- one standard order uses one BThwani delivery path;
- Store is not a tenant and Partner is not an organization/member hierarchy;
- surfaces never become business owners;
- client input never grants identity, role, business scope or owner authority;
- DSH owns delivery-commerce operational truth;
- WLT owns any admitted financial truth;
- derived search/cache/analytics state never becomes mutation authority;
- successful user-facing mutation requires canonical committed readback;
- future capabilities remain absent until a current need proves them.

## Explicit current non-goals

Not admitted now: loyalty/marketing campaigns, coupons/promotions funding, ratings/reviews, general support/rescue subsystem, special-request marketplace, analytics as Product capability, notification subsystem, broad customer-profile/privacy orchestration, settlement/payout/collateral/pricing Product capabilities, alternate fulfillment modes, Partner organization/member/team abstractions and generic multi-tenant SaaS architecture.

A future objective must re-admit any such capability from current evidence rather than restore historical text.

## Capability admission law

A new Product capability requires current user/business need, stable independent responsibility, canonical owner/writer/readback, affected actors/surfaces, legal mutation/state boundaries, authorization, material failure/recovery semantics and no stronger existing capability that can own it cohesively. Future need alone is insufficient.
