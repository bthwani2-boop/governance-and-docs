# BThwani Capability Governance Index

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_INDEX
SEMANTIC_OWNER: governance/product/CAPABILITIES.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Purpose

This file owns the **capability taxonomy, semantic-envelope schema, admission/change law and routing only**. It does not restate individual capability semantics.

Each capability has exactly one semantic owner file under `governance/product/capabilities/**`. A capability ID may appear here only as routing identity.

## Target catalog versus active delivery

The capability catalog describes durable target Product meaning. It does not activate implementation breadth.

```text
TARGET_CAPABILITY_CATALOG != ACTIVE_PRODUCT_SLICE
CAPABILITY_LISTING != EXECUTION_AUTHORIZATION
CAPABILITY_SEMANTIC_OWNER != CURRENT_IMPLEMENTATION_STATE
```

The current human-authorized objective and exact-target diagnosis determine which capability/increment is in scope now.

## Capability semantic envelope

Every material capability owner defines, when applicable:

1. problem and required outcome;
2. primary actors/personas and responsibilities;
3. canonical owner/writer/readback;
4. required/excluded surfaces;
5. preconditions and trusted authorization scope;
6. durable states and legal/forbidden transitions;
7. data/contract/event/provider effects;
8. idempotency/concurrency/retry/unknown-result behavior;
9. security/privacy/financial invariants;
10. loading/empty/offline/forbidden/conflict/error/recovery semantics;
11. acceptance semantics and negative invariants.

## Capability-change law

A new capability or material capability change must prove a stable responsibility, canonical owner, affected actors/surfaces, legal state/mutation/readback semantics, authorization, failure/recovery behavior and acceptance expectations.

```text
ACTOR != CAPABILITY_OWNER
ROUTE != CAPABILITY_OWNER
SCREEN != CAPABILITY_OWNER
IMPLEMENTATION_MECHANISM != DOMAIN
```

Generic storage/search/transport/presentation mechanisms do not become Product capabilities without an independently proven Product lifecycle and responsibility.

## Canonical capability owners

One capability = one editable semantic owner file. Directories group related Product areas only; a directory is not a second owner.

### Access

- `capabilities/access/identity-activation-sessions.md` — `IDENTITY_ACTIVATION_SESSIONS`
- `capabilities/access/customer-profile-preferences.md` — `CUSTOMER_PROFILE_PREFERENCES`
- `capabilities/access/account-privacy-lifecycle.md` — `ACCOUNT_PRIVACY_LIFECYCLE`

### Commerce

- `capabilities/commerce/order-creation.md` — `ORDER_CREATION`
- `capabilities/commerce/cart-checkout.md` — `CART_CHECKOUT`
- `capabilities/commerce/maps-service-area-address-privacy.md` — `MAPS_SERVICE_AREA_ADDRESS_PRIVACY`
- `capabilities/commerce/zones-sla-capacity-serviceability.md` — `ZONES_SLA_CAPACITY_SERVICEABILITY`
- `capabilities/commerce/special-requests.md` — `SPECIAL_REQUESTS`
- `capabilities/commerce/support-incidents-order-rescue.md` — `SUPPORT_INCIDENTS_ORDER_RESCUE`

### Partner

- `capabilities/partner/partner-onboarding-store-publication.md` — `PARTNER_ONBOARDING_STORE_PUBLICATION`
- `capabilities/partner/central-catalog.md` — `CENTRAL_CATALOG`
- `capabilities/partner/promotions-coupons-funding.md` — `PROMOTIONS_COUPONS_FUNDING`
- `capabilities/partner/ratings-reviews-trust.md` — `RATINGS_REVIEWS_TRUST`
- `capabilities/partner/marketing-campaigns-loyalty.md` — `MARKETING_CAMPAIGNS_LOYALTY`

### Fulfillment

- `capabilities/fulfillment/captain-dispatch.md` — `CAPTAIN_DISPATCH`
- `capabilities/fulfillment/store-captain-handoff.md` — `STORE_CAPTAIN_HANDOFF`

### Finance

- `capabilities/finance/representative-wallets-reference-finance.md` — `REPRESENTATIVE_WALLETS_REFERENCE_FINANCE`
- `capabilities/finance/settlements-commissions.md` — `SETTLEMENTS_COMMISSIONS`
- `capabilities/finance/wlt-money-movement-payout-reconciliation.md` — `WLT_MONEY_MOVEMENT_PAYOUT_RECONCILIATION`
- `capabilities/finance/wlt-pricing-quotes.md` — `WLT_PRICING_QUOTES`
- `capabilities/finance/wlt-captain-collateral.md` — `WLT_CAPTAIN_COLLATERAL`
- `capabilities/finance/wlt-provider-penalties.md` — `WLT_PROVIDER_PENALTIES`

### Communications

- `capabilities/communications/notifications-communications.md` — `NOTIFICATIONS_COMMUNICATIONS`
- `capabilities/communications/analytics-operational-read-models.md` — `ANALYTICS_OPERATIONAL_READ_MODELS`

## Fulfillment admission law

The current standard-commerce fulfillment model is one BThwani-operated final-mile path. DSH owns serviceability, dispatch, assignment, custody and delivery operational truth; Partner prepares the Store order and performs the governed Store↔Captain handoff; Captain executes the assigned BThwani delivery.

```text
CURRENT_FULFILLMENT_MODEL = BTHWANI_DELIVERY
ONE_STANDARD_ORDER → ONE_BTHWANI_FINAL_MILE_PATH
NO_SPECULATIVE_ALTERNATE_FULFILLMENT_CAPABILITY
NO_PARALLEL_FINAL_MILE_FLEET
NO_DORMANT_COMPATIBILITY_SHAPE
```

A materially different fulfillment lifecycle is not an extension switch on the current model. It requires an explicit future Product requirement and must independently prove ownership, actors, custody, finance, support, UX, migrations, cross-surface readback and failure/recovery semantics before a new capability or executable shape is admitted.

## Partner-model admission law

The current Product model admits one Partner stakeholder/role only. `Partner Organization`, `Partner Member`, partner-team membership, and store-scoped partner-team lifecycle are not admitted capabilities. Reintroducing any of them requires an explicit future Product requirement with a distinct lifecycle that cannot be represented by the existing Partner actor plus Store scope.

## Control-panel role law

The current Product model has one control-panel stakeholder/role: `Operator` / Identity role `operator`. The first-Operator bootstrap is a one-time Identity lifecycle, not a capability or second role. Operator actions are owned by the capability responsible for the protected decision. A new capability is admitted only through the capability-change law above when an independent Product lifecycle and responsibility are proven.

## Routing

Use source-derived lookup rather than loading every capability owner:

```text
pnpm knowledge:query -- list capabilities
pnpm knowledge:query -- capability <CAPABILITY_ID>
```
