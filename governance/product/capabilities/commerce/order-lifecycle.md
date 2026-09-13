# Order Lifecycle

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/commerce/order-lifecycle.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: ORDER_LIFECYCLE
STATUS: ADMITTED

## Outcome

One eligible confirmed checkout creates at most one canonical DSH order, then the owning Partner can accept, reject and prepare it to one governed ready-for-dispatch boundary.

## Ownership

DSH owns operational order truth. WLT owns any later-admitted financial truth. Captain dispatch begins only after DSH order readiness.

## Invariants

- one canonical checkout scope yields at most one order;
- required item/address/serviceability/commercial snapshots remain stable after creation unless an explicit legal transition changes a defined field;
- Partner acts only on orders for authorized owned Stores;
- Partner acceptance, rejection, preparation and readiness are canonical DSH transitions, never local UI state;
- one standard order remains on the BThwani delivery path;
- no client or Partner can select another final-mile owner or mutate WLT truth;
- canonical readback is required after mutation.

## Minimal lifecycle

CREATED → PARTNER_ACCEPTED → PREPARING → READY_FOR_DISPATCH → downstream dispatch/handoff/delivery. Rejection or cancellation is allowed only through explicitly legal pre-dispatch rules.

## Failure and recovery

Handle duplicate creation, stale version, unauthorized Store scope, rejection, preparation conflict, retry conflict and restart/resume without forking order truth.
