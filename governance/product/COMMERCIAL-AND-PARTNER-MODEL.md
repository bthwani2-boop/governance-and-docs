# Commercial and Partner Model

ARTIFACT_CLASS: DURABLE_PRODUCT_GOVERNANCE
SEMANTIC_OWNER: governance/product/COMMERCIAL-AND-PARTNER-MODEL.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Partner model

`Partner` is one BThwani stakeholder represented by one Human Actor holding the `partner` Identity role and operating through `app-partner`. DSH owns the Partner's operational state and Store relationships.

The current Product model does **not** split Partner into `Partner Organization`, `Partner Member`, owner/member/team layers, or partner-team membership. A Store is a commerce/fulfillment resource managed by its Partner, not another actor or platform instance.

```text
PARTNER = ONE PARTNER-ROLE ACTOR / PRODUCT STAKEHOLDER
PARTNER != STORE
PARTNER != TENANT
STORE != TENANT
```

A future additional Partner-person/team/organization abstraction is admitted only when a concrete Product requirement proves an independent lifecycle that cannot be represented by the Partner actor plus Store scope.

## Commercial relationship modes

```text
COMMISSION
SUBSCRIPTION
HYBRID
OPERATOR_MANAGED
```

These classify pricing/billing/commercial treatment; they do not create duplicate platform instances or domain truth.

## Partner lifecycle

A durable Partner journey may include creation, onboarding, required evidence/review, Store readiness, publication eligibility, active operations and governed restriction/suspension. Exact state names belong to the applicable capability model; transitions are canonical and server-owned.

## Stores and publication

A Store becomes discoverable only when canonical publication/serviceability/commercial gates pass. UI visibility, cached discovery or a local flag cannot publish an otherwise ineligible Store.

One Partner may manage one or more Stores. Store authorization is resolved server-side from canonical DSH Partner/Store relationships; no separate membership entity is required by the current Product model.

## Catalog relationship

Central catalog/taxonomy identity is authoritative. Partner surfaces may manage owner-authorized Store commercial associations and availability under the catalog contract; they do not fork category/product identity.

## Financial relationship

Operational Partner/Store facts are DSH-owned; wallet, settlement, commission, payout and reconciliation are WLT-owned. DSH may provide trusted operational evidence to WLT but cannot calculate/post authoritative financial truth independently.

## Store fulfillment and BThwani delivery boundary

Partner owns Store-side preparation and readiness for an accepted order. Once the order reaches governed handoff readiness, BThwani owns the final-mile operational path through DSH dispatch, Captain assignment, custody transfer and delivery readback.

```text
PARTNER RESPONSIBILITY
→ STORE PREPARATION
→ READY FOR DISPATCH
→ GOVERNED STORE↔CAPTAIN HANDOFF

BTHWANI RESPONSIBILITY
→ CAPTAIN DISPATCH / ASSIGNMENT
→ CUSTODY
→ FINAL-MILE DELIVERY
→ DELIVERY READBACK
```

Partner does not own a parallel final-mile fleet under the current Product model, and Store fulfillment readiness must not be interpreted as authority to bypass the governed BThwani dispatch/custody path. A materially different fulfillment lifecycle requires a future explicit Product change before any schema, route, UI or compatibility branch is introduced.
