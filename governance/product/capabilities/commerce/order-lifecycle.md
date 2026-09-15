# Order Lifecycle

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/commerce/order-lifecycle.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: ORDER_LIFECYCLE
STATUS: ADMITTED

## Outcome

One eligible confirmed checkout creates at most one canonical DSH order, preserving the purchased catalog evidence, then the owning Partner can accept, reject and prepare it to one governed ready-for-dispatch boundary.

## Ownership

DSH owns operational order truth. WLT owns any later-admitted financial truth. Captain dispatch begins only after DSH order readiness.

## Invariants

- one canonical checkout scope yields at most one order;
- required StoreOffer/ProductVariant/display-name/variant-attribute/modifier/quantity/pricing-basis/amount/address/serviceability snapshots remain stable after creation unless an explicit legal transition changes a defined field;
- Partner acts only on orders for authorized owned Stores;
- Partner acceptance, rejection, preparation and readiness are canonical DSH transitions, never local UI state;
- one standard order remains on the BThwani delivery path;
- no client or Partner can select another final-mile owner or mutate WLT truth;
- canonical readback is required after mutation.

## Commercial snapshot

An OrderLine references the canonical `variant_id` and `store_offer_id` and also stores the immutable display-name, variant facts required for purchase, selected modifier snapshot, requested/final quantity, pricing basis, exact line amount, currency and address/serviceability evidence. Later Catalog edits cannot rewrite historical Order truth; the snapshot is historical transaction evidence, not a second live Product authority.

## Minimal lifecycle

CREATED → PARTNER_ACCEPTED → PREPARING → READY_FOR_DISPATCH → downstream dispatch/handoff/delivery. Rejection or cancellation is allowed only through explicitly legal pre-dispatch rules.

## Failure and recovery

Handle duplicate creation, stale version, unauthorized Store scope, rejection, preparation conflict, retry conflict and restart/resume without forking order truth.
