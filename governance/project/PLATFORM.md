# BThwani Platform Orientation

ARTIFACT_CLASS: DURABLE_PROJECT_GOVERNANCE
SEMANTIC_OWNER: governance/project/PLATFORM.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Platform classification

BThwani is one BThwani-operated unified multi-surface B2B2C commerce, fulfillment, operations and financial platform.

It is not a collection of independent apps, not a separate platform instance per Partner/Store and not a generic multi-tenant SaaS abstraction by default.

## Primary deployable surfaces

- `app-client` — Customer mobile host for discovery, shopping, checkout, orders, tracking and support.
- `app-partner` — Partner mobile host for Store, catalog, order and authorized financial operations/readback.
- `app-captain` — Captain mobile host for assigned pickup, custody, delivery, proof and exception workflows.
- `app-field` — Partner-joining mobile host for the Partner Acquisition and Onboarding Representative. It supports acquiring prospective Partners, opening and progressing Partner joining cases, capturing required Partner/business/first-Store data, documents/location/evidence, performing a visit or check when policy requires it, following up missing information and submitting/resubmitting the case for canonical owner review.
- `control-panel` — trusted Operator web host for authorized domain operations, review and canonical readback.

Surfaces compose capabilities; they do not own domain truth merely because a capability is rendered there.

## Primary human roles and personas

Current actor-facing roles/personas are exactly:

- Customer — Identity role `client`, primarily through `app-client`.
- Partner — Identity role `partner`, primarily through `app-partner`.
- Captain — Identity role `captain`, primarily through `app-captain`.
- Partner Acquisition and Onboarding Representative — Identity role `field`, responsible for bringing Partners into BThwani through the governed Partner joining journey, primarily through `app-field`.
- Operator — Identity role `operator`, through `control-panel`.

The technical Identity role name `field` does not define a generic field-work persona. Its Product meaning is Partner acquisition and onboarding only.

Operator is the only control-panel human role. System bootstrap creates the first Operator once; bootstrap is not a persona, continuing role tier or business capability.

`Partner` is one stakeholder and one role represented by one `actor_id`. The current Product model has no `Partner Organization`, `Partner Member`, or partner-team membership layer. A Store is a DSH-managed business resource belonging to its Partner, not another actor or platform instance.

A prospective Partner or Partner joining case may exist before Identity admits the `partner` role. Prospect/joining-case data is DSH onboarding truth and never becomes a second Human Actor or parallel Partner identity. Once Identity admits/binds the Partner role, the canonical `actor_id` is the cross-boundary Partner identity.

## Canonical fulfillment model

The current Product model has one end-to-end fulfillment model:

```text
CURRENT_FULFILLMENT_MODEL = BTHWANI_DELIVERY

CUSTOMER ORDER
→ PARTNER/STORE PREPARATION
→ READY FOR DISPATCH
→ BTHWANI CAPTAIN ASSIGNMENT
→ STORE↔CAPTAIN HANDOFF
→ BTHWANI FINAL-MILE DELIVERY
→ CUSTOMER READBACK
```

BThwani owns the final-mile operational path through DSH and the Captain surface. Partner responsibility ends at governed Store preparation and handoff into the assigned BThwani Captain custody, except for separately governed non-delivery responsibilities.

The customer does not select among alternative fulfillment lanes in the current Product model. No second final-mile fleet, customer collection lane, compatibility branch, disabled placeholder, hidden selector or dormant schema is admitted merely for future optionality.

A materially different fulfillment model may be introduced only by an explicit future Product change that proves its independent lifecycle, ownership, custody, financial, support, UX, migration and cross-surface consequences before any implementation shape is added.

## Partner commercial models

- `COMMISSION`
- `SUBSCRIPTION`
- `HYBRID`
- `OPERATOR_MANAGED`

A subscription is a pricing/billing relationship only. It does not create an independent platform instance or isolation authority.

## Geographic/service-area model

The primary operating market is Sana'a, Yemen. City/zone/serviceability is governed data and Product policy, not a hard-coded platform instance or tenant boundary. Expansion to additional cities must reuse the same ownership/contracts unless a real new Product boundary is approved.

## Bounded contexts

- Identity — authentication/session/activation/identity authority, including Partner role admission and Operator identity/bootstrap/authentication.
- DSH — commerce, catalog consumption, Partner acquisition/joining/onboarding, Partner/Store operations, checkout/order, serviceability, dispatch/delivery, special requests, support/rescue and other operational truth assigned by Product.
- WLT — wallet, ledger, payment, refund, commission, payout, settlement and reconciliation authority.

`control-panel` is a deployable host, not a fourth business/domain owner. Operator actions call the canonical owner of the affected fact. A future independent service/domain requires normal admission proof and a Product lifecycle that cannot be represented by these existing owners.

External vendors and technical mechanisms are integrations/adapters, not business-domain owners.

## Cross-cutting capability classes

Some capabilities cross several bounded contexts without becoming new domains by default:

- customer profile/preferences, Partner joining/Store operations, catalog/publication, ratings/reviews, support and commerce eligibility remain assigned DSH operational capabilities unless Governance explicitly rehomes them;
- promotions/coupons can span DSH eligibility and WLT financial effect while retaining one owner per fact;
- notification source-event meaning remains with the originating domain; DSH Notifications owns current inbox/preferences/topic/delivery-attempt truth; replaceable adapters execute channels; media business authorization remains with its owning domain while object storage is technical infrastructure;
- search/discovery and analytics are derived/query capabilities and never become authorization, transactional or financial truth;
- external providers remain adapters behind the operation-owning domain.

## Core non-conflation laws

```text
ACTOR != ROLE
PARTNER = ONE PARTNER-ROLE ACTOR / PRODUCT STAKEHOLDER
PARTNER != STORE
PARTNER != TENANT_BY_DEFAULT
STORE != TENANT_BY_DEFAULT
FIELD = PARTNER_ACQUISITION_AND_ONBOARDING_REPRESENTATIVE
APP_FIELD = PARTNER_JOINING_SURFACE
PARTNER_JOINING_CASE != PARTNER_ROLE
FIELD_ROLE != GENERAL_OPERATIONAL_WORK
OPERATOR = ONE OPERATOR-ROLE ACTOR / CONTROL-PANEL PERSONA
BOOTSTRAP != ROLE
CONTROL_PANEL != DOMAIN_OWNER
APP_HOST != BUSINESS_CAPABILITY_OWNER
PROVIDER != BUSINESS_DOMAIN
CURRENT_FULFILLMENT_MODEL = BTHWANI_DELIVERY
```
