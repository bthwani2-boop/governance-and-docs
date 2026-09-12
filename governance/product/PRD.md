# BThwani Product Requirements Document

ARTIFACT_CLASS: DURABLE_PRODUCT_GOVERNANCE
SEMANTIC_OWNER: governance/product/PRD.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## 1. Product definition

BThwani is one BThwani-operated unified multi-surface B2B2C commerce, fulfillment, operations, and financial platform. It is not a collection of independent applications or Partner-specific platform instances. The client, Partner, captain, field, and control-panel surfaces are different operating views over shared governed domain truth.

The platform supports multi-vertical commerce including restaurants, groceries, pharmacy, electronics, gifts/flowers, desserts/juices, fruits/vegetables, and other catalog-governed verticals added through the same contracts.

Partner commercial relationships may use the governed models `COMMISSION`, `SUBSCRIPTION`, `HYBRID`, or `OPERATOR_MANAGED`. A subscription is a pricing/billing relationship; it does not create an independent platform instance, data-isolation authority or separate Product authority.

## 1A. Product non-goals

BThwani is not a separate platform instance per Partner/Store and is not a generic multi-tenant SaaS abstraction by default.

The current Product model has exactly one Partner stakeholder/role: a Human Actor with Identity role `partner` using `app-partner`. DSH owns that Partner's operational state and Store relationships. `Partner Organization`, `Partner Member`, partner-team membership and similar second-layer Partner identities are not admitted current Product concepts.

The current Product model also has exactly one control-panel stakeholder/role: a Human Actor with Identity role `operator` using `control-panel`. One-time bootstrap creates the first Operator and then becomes only an irreversible bootstrap-completed fact; it is not a continuing role or Product layer.

```text
PARTNER = ONE PARTNER-ROLE ACTOR / PRODUCT STAKEHOLDER
PARTNER != STORE
PARTNER != TENANT_BY_DEFAULT
STORE != TENANT_BY_DEFAULT
OPERATOR = ONE OPERATOR-ROLE ACTOR / CONTROL-PANEL PERSONA
BOOTSTRAP != ROLE
CONTROL_PANEL != DOMAIN_OWNER
AUTHORIZATION_SCOPE != CLIENT_CONTROLLED_CONTEXT
```

A tenancy boundary, additional Partner-person/team/organization abstraction, additional control-panel role, or new bounded context is admitted only when Product/System requirements prove an independent lifecycle that existing actors and owners cannot represent. BThwani also does not adopt an external commerce, ERP, wallet or identity platform as its Product owner merely because that system is mature or available.

## 1B. Target Product vision versus delivery breadth

This PRD owns durable target Product meaning. It does **not** require every target capability, mode, surface function, or advanced workflow to be implemented in the same delivery slice.

```text
TARGET_PRODUCT_VISION != ACTIVE_PRODUCT_SLICE
ACTIVE_PRODUCT_SLICE != CURRENT_IMPLEMENTATION_STATE
QUALITY_DEPTH != PRODUCT_BREADTH
```

Current human authorization defines which Product outcome is presently in scope. A target feature outside that objective may remain deliberately deferred without being a Product defect.

A deferred target capability must not be represented by fake screens, placeholder business APIs, temporary schemas, shadow state, speculative frameworks, or alternate source-of-truth models. When activated later, it is implemented vertically against the same canonical owners and boundaries.

```text
SMALL_PRODUCT_BREADTH + CANONICAL_ARCHITECTURE + COMPLETE_AFFECTED_CONE = VALID
TEMPORARY_MVP_ARCHITECTURE_THAT_MUST_BE_REPLACED_LATER = FORBIDDEN
```

## 2. Target product surfaces

The standard product surfaces are:

- `app-client`: Customer discovery, cart, checkout, orders, support, tracking, and bounded financial readback.
- `app-partner`: Partner Store/catalog/order operations and authorized financial readback.
- `app-captain`: assignment, delivery lifecycle, proof/exception handling, and authorized earnings readback.
- `app-field`: assigned Partner/first-Store onboarding, field verification, required document/evidence capture and submission for review only; it has no general field-operations remit.
- `control-panel`: trusted Operator host for authorized domain operations, review and canonical readback, composing operations owned by Identity, DSH, WLT and other admitted capabilities.
- backend/domain services and their service-owned persistence.
- generated/public service clients, app-owned surface-specific capability presentation, explicitly admitted host-neutral reusable presentation only when proven, design-system primitives, events/jobs and runtime infrastructure required by the above surfaces.

These are target platform surfaces. An active delivery slice may exercise only the materially required subset. A deployable host may remain technically ready while its business semantics are deliberately deferred; do not create fake feature screens merely to make every target surface appear functionally populated.

A target capability may exclude a surface when its durable semantics make the exclusion explicit where omission could otherwise be ambiguous. Active-slice execution additionally follows the current authorized Product breadth.

## 3. Actors, roles, personas and trust

The canonical human identity is the **Human Actor**. Customer/client, Partner, captain, field worker and Operator are the current Identity roles/Product personas of a human actor; they are not separate identity records.

```text
Human Actor / actor_id
→ one applicable role-scoped session

client   → app-client
partner  → app-partner
captain  → app-captain
field    → app-field
operator → control-panel
```

For Partner specifically:

```text
Human Actor / actor_id
→ Identity role `partner`
→ app-partner
→ DSH Partner operational state
→ one or more DSH Stores
```

There is no `Partner Organization`, `Partner Member`, partner-team membership or parallel Partner identifier in the current model.

For Operator specifically:

```text
ONE-TIME IDENTITY BOOTSTRAP → FIRST `operator`
EXISTING AUTHORIZED OPERATOR → SUBSEQUENT OPERATOR ADMISSION/ENROLLMENT
OPERATOR SESSION → control-panel → APPLICABLE CANONICAL OWNER
```

Bootstrap is not authorization for ordinary domain operations; each protected action is authorized by its owning capability/service.

Current role/persona mapping is owned by `../project/ACTORS-TRUST-AND-SCOPE.md`; ubiquitous terms are owned by `../project/GLOSSARY.md`. This PRD does not create a parallel actor taxonomy.

Trusted identity comes from authenticated Identity/session state. Fine-grained business scope, permissions, eligibility, assignment and operational context come from the capability that owns the protected truth. Store scope is DSH-owned and never grants platform isolation or tenancy. No client header, query parameter, request body, cached local value, UI selector or generic context field grants identity, role, permission, scope or tenancy.

## 4. Product ownership orientation

This PRD owns product-level orientation only. Exact durable owner/writer/readback boundaries are owned by:

- `../architecture/OWNERSHIP-AND-SOURCE-OF-TRUTH.md` for the canonical owner map;
- `CAPABILITIES.md` and `capabilities/**` for capability-specific Product semantics;
- `JOURNEYS.md` for cross-capability actor/system journeys;
- `FINANCIAL-MODEL.md` for financial Product truth and WLT ownership;
- `COMMERCIAL-AND-PARTNER-MODEL.md` for Partner/commercial semantics;
- `EXPERIENCE-AND-DESIGN.md` for durable UX/design meaning.

At the platform level:

```text
IDENTITY → human identity, high-level role admission, credentials/proofs/sessions, first-Operator bootstrap
DSH      → commerce/fulfillment/Partner/Store/customer/captain operational truth plus field-assisted Partner onboarding truth
WLT      → authoritative financial truth
```

`control-panel` is a host. Operator actions are routed to the canonical owner of the affected fact.

No surface, integration adapter, search/index, analytics view, cache/projection or documentation artifact becomes a parallel Product owner merely because it renders or transports owner truth.

## 4A. Required business/operational decisions

Engineering must not invent missing business/legal/operational truth merely to make a template complete. Before a dependent capability/release requires them, the applicable authority must resolve items such as supported market/jurisdiction, legal operator identity, supported currency/precision, retention obligations, material support/operations responsibility and required reliability/recovery targets.

```text
MISSING_REQUIRED_DECISION != PERMISSION_TO_GUESS
NO_AUTHORIZED_SLO/RPO/RTO != INVENT_A_NUMBER
MARKET_LOCATION != IMPLIED_CURRENCY_POLICY
```

A required unresolved decision is an explicit Product/operations/legal gap and blocks only the outcome that depends on it.

## 5. Product-wide requirements

The detailed behavior of catalog, cart, checkout, orders, Partner/Store lifecycle, dispatch, handoff, field-assisted Partner onboarding, support, communications, analytics, promotions, ratings and financial operations is defined only in the applicable capability owner. This PRD does not maintain a second capability registry.

The target supported fulfillment-policy modes are `bthwani_delivery`, `partner_delivery`, and `client_pickup`. Target support does not activate all modes simultaneously; the active Product slice and current executable contracts determine implemented breadth.

Product-wide invariants are:

- one durable fact has one canonical semantic owner and governed writer;
- one Human Actor may hold multiple Identity roles without creating duplicate human identities;
- current high-level actor-facing roles are exactly `client`, `partner`, `captain`, `field`, `operator`;
- Partner is one Product stakeholder/role represented by one `actor_id`; no Partner Organization/Member/team model is admitted unless a future explicit requirement proves it;
- Store is a DSH business resource managed by Partner and is not another actor, Partner identity or tenant;
- Operator is one Product persona/role using `control-panel`; first-Operator bootstrap is a one-time Identity lifecycle, not a second role;
- `control-panel` does not own domain truth; each action remains with its applicable canonical owner;
- customer/client-controlled data never grants trusted identity, role, business scope, financial truth or platform isolation;
- WLT remains the only authoritative owner of wallet/ledger/payment/refund/settlement/payout/commission/reconciliation truth;
- derived search, analytics, projections and caches never become mutation authority;
- external providers implement semantic ports and never become business-domain owners;
- the `field` role and `app-field` exist only for the field-assisted Partner/first-Store onboarding subflow owned by `PARTNER_ONBOARDING_STORE_PUBLICATION`; no standalone/general Field Operations capability is admitted;
- inactive future Product breadth remains absent rather than represented by fake screens, tables, APIs, state machines or compatibility structures.

## 6. Capability and journey routing

Use `CAPABILITIES.md` as the capability index and load only the semantic owner required by the task:

```text
pnpm knowledge:query -- list capabilities
pnpm knowledge:query -- capability <CAPABILITY_ID>
pnpm knowledge:query -- journey <J_ID>
```

The capability semantic-envelope schema and capability-admission law live in `CAPABILITIES.md`. Individual capability meaning lives only in `capabilities/**`. Cross-capability sequence/handoff meaning lives in `JOURNEYS.md`.

## 7. Product-to-engineering boundary

Product semantics do not define repository execution order, current implementation state, verification procedure or closure.

- durable architecture belongs to the applicable `governance/architecture/**` owner;
- engineering constraints belong to the applicable `governance/policies/**` owner;
- current implementation/configuration/runtime truth belongs to executable source;
- execution order and candidate closure are determined from current human authorization, exact-target evidence, the repository-local agent safety contract and machine safeguards.

## 8. Experience, accessibility, privacy and security routing

Durable UX, RTL, localization, accessibility and Design-System meaning belong to `EXPERIENCE-AND-DESIGN.md`.

Security/privacy controls belong to `../policies/security.md`; data lifecycle/migration rules belong to `../policies/data-and-migrations.md`; frontend/client engineering behavior belongs to `../policies/frontend-and-client.md`.

This PRD requires truthful and actionable user/operator outcomes but does not duplicate those specialized policies.

## 9. Product acceptance semantics

A Product outcome is semantically acceptable only when it conforms to its current PRD orientation plus every applicable capability, journey, financial/commercial, experience and policy owner.

Concrete candidate evidence, release authorization and closure are not owned by this PRD.
