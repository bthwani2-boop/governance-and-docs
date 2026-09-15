# BThwani Current Product

ARTIFACT_CLASS: DURABLE_PRODUCT_GOVERNANCE
SEMANTIC_OWNER: governance/product/PRODUCT.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Purpose

This file owns current Product-level breadth, non-goals and admission law. Detailed capability truth lives only in `capabilities/**`; cross-capability sequence lives only in `JOURNEYS.md`.

## Current minimum Product outcome

BThwani currently targets one thin coherent multi-surface delivery-commerce core:

IDENTITY / ROLE ACCESS → PARTNER + STORE ADMISSION → CENTRAL CATALOG / STORE ASSORTMENT PUBLICATION → CUSTOMER SERVICEABILITY → CART / CHECKOUT → ORDER → PARTNER PREPARATION / READY → CAPTAIN DISPATCH → STORE↔CAPTAIN HANDOFF → FINAL-MILE DELIVERY → CANONICAL CROSS-SURFACE READBACK.

The active implementation slice may be narrower, but live Governance must not contain unproven future Product breadth.

## Minimum complete and evolvable current Product model

MINIMUM COMPLETE != MINIMAL SHAPE.
CURRENT COMPLETE != PERMANENTLY FINAL.

The current Product model must be the smallest model that represents every current material user/business truth losslessly. A materially required concept may be a capability, entity, relation, state, identity, invariant or boundary; it must not be omitted merely to reduce tables, files, types, services, states or vocabulary.

A concept is materially required when omitting or collapsing it would lose or blur current meaning, ownership, lifecycle, authorization, contract, user/business behavior, commercial truth, failure/recovery or canonical readback, or would require overloaded fields, encoded naming conventions, UI-only semantics, hidden exceptions, duplicate logic or shadow truth.

A concept may be omitted only when the current admitted journeys remain fully representable, executable and provable without it. Future capability breadth remains absent until proven by current need.

When a durable identity, relation, state boundary or ownership boundary is materially costly to reverse, the current model must avoid an evidence-backed evolution dead end when the same present requirement can be modeled with comparable current simplicity and materially better evolvability. Preserve correct current meaning and a defensible migration/extension/cutover path; do not prebuild the future capability itself.

COMMON ELSEWHERE != REQUIRED HERE.
ABSENT ELSEWHERE != PROOF UNNEEDED HERE.
FUTURE NEED != CURRENT IMPLEMENTATION.
NO SCAFFOLD != NO EVOLUTION PATH.

Future extensibility is preserved through correct current semantics, stable identities, ownership boundaries and feasible migration/cutover—not speculative abstractions, placeholder capabilities, unused extension points or partial future implementations.

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

A future objective must re-admit any such capability from current evidence rather than restore historical text. Current absence is not a permanent declaration that a capability can never become necessary.

## Capability admission law

A new Product capability requires current user/business need, stable independent responsibility, canonical owner/writer/readback, affected actors/surfaces, legal mutation/state boundaries, authorization, material failure/recovery semantics and no stronger existing capability that can own it cohesively. Future need alone is insufficient.
