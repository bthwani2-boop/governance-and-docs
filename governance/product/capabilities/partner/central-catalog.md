# Central Catalog

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/partner/central-catalog.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: CENTRAL_CATALOG

## Outcome

DSH owns one canonical Central Product identity and one canonical Store Assortment truth. Partner operations select existing Products and manage only the offer facts for Stores they own; customer discovery reads the live composition of both records.

## Central Product

DSH owns the single canonical identity of each current sellable Product:

- `product_id`
- `canonical_name` (required)
- `brand` (optional)
- `barcode` (optional; unique when present)
- `canonical_image_url` (optional; centrally controlled)
- `sell_unit` (`piece` or `kg`)
- `active`
- `version`
- creation and update timestamps

Packaged goods such as `Coca Cola 330ml` are independent Products with `sell_unit=piece`. Goods sold by weight such as apples are Products with `sell_unit=kg`. Product families, variants, unit conversions and SKU hierarchies are not admitted in this slice. `sell_unit` is identity-defining: a change of commercial unit requires a new Product identity and disabling the old one.

Central Product lifecycle is only:

```text
ACTIVE ↔ DISABLED
```

There is no Partner-created Product, proposal, approval workflow, marketing review or `PROPOSED` state in the current capability.

The active operator is the only Central Product mutation authority. Partner must not create or mutate central Product name, image, brand, barcode or sell unit. No Store-local copy of Product name or image, search result, cache or UI value may become mutation authority.

## Store Assortment

DSH owns the Store-scoped offer relation:

- `store_id`
- `product_id`
- `price_minor` (exact integer)
- `currency=YER`
- `availability`
- `publication_state`
- `version`
- creation and update timestamps

`(store_id, product_id)` is unique. A Store Assortment must reference an existing active Central Product when selected or published. Partner may, for a server-authorized Store it owns, select an existing Product, set or update `price_minor`, set availability, and publish or hide the assortment. Price is a DSH Store offer fact, not WLT ledger truth or Checkout total truth.

Store Assortment lifecycle is only:

```text
DRAFT → PUBLISHED ↔ HIDDEN
```

A disabled Central Product is never customer-visible through an assortment. An assortment may remain historically referenced while the Product is disabled, and Partner may hide it for recovery/control.

## Customer readback and failure recovery

Public readback composes the live Central Product identity with the live Store Assortment facts. It does not copy Product identity into the assortment. Therefore a central name or image change appears in every Store immediately, an offer-price change affects only its Store, disabling a Product hides it everywhere, and hiding an assortment hides it only in its Store.

Customer-visible catalog eligibility requires a published Store, eligible Partner identity, and at least one assortment that is published, available, priced above zero, and linked to an active Product. Customer discovery and serviceability remain constrained by the Store's assigned Service City under `SERVICEABILITY_ADDRESSES`; Central Catalog owns product and assortment eligibility, not geography or city scope. Stale versions and materially different idempotent retries are rejected. Duplicate barcode, invalid Product relation, authorization failure and publication-gate failure recover through canonical DSH readback; derived consumers are rebuildable.

## Material surfaces

`app-partner`, `control-panel`, `app-client` read-only discovery, and DSH backend/database.
