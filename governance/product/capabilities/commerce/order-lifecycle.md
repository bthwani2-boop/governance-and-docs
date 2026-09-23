# Order Lifecycle

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/commerce/order-lifecycle.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: ORDER_LIFECYCLE

## Outcome

One eligible confirmed Store-scoped checkout creates at most one canonical DSH Store Order, preserving purchased evidence, explicit fulfillment meaning and legal operational transitions through completion/exception.

## Ownership

DSH owns operational order truth. WLT owns financial effects. Mode-specific execution is owned by the applicable fulfillment capability.

## Invariants

- one canonical Store-scoped checkout operation yields at most one Store Order;
- one Store Order belongs to exactly one Store;
- a parent Multi-Store checkout never collapses multiple Stores into one Store Order;
- the durable Order model distinguishes `BTHWANI_CAPTAIN`, `PARTNER_CAPTAIN` and `CUSTOMER_PICKUP`; fulfillment mode is distinct from payment method;
- the Client selects one fulfillment mode from the Store's canonical enabled modes; checkout rejects a disabled or unavailable mode and snapshots the selected mode without fallback;
- an implementation slice that currently executes only one mode may migrate/backfill its existing orders to that explicit mode, but another mode must not be introduced by reinterpreting old Order meaning;
- required StoreOffer/ProductVariant/display-name/variant/modifier/quantity/pricing/amount/serviceability evidence remains a stable transaction snapshot unless an explicit legal transition changes a defined field;
- Partner acts only on orders for authorized owned Stores;
- Partner acceptance, rejection, preparation and readiness are canonical DSH transitions;
- cancellation/failure/refund eligibility derives from explicit canonical state, custody and policy rather than UI inference;
- basic rating/feedback may be attached to a completed order as bounded feedback and remains independent from conversation closure;
- canonical readback is required after mutation.

## Lifecycle boundary

The Partner preparation path is common until fulfillment readiness. Downstream state is mode-specific: platform Captain dispatch, Store-affiliated Captain fulfillment or Customer Pickup. Delivery/pickup completion and governed failures remain explicit.

## Failure and recovery

Handle duplicate creation, stale version, unauthorized Store scope, rejection, cancellation, preparation conflict, fulfillment failure, retry conflict and restart/resume without forking order truth. Cross-owner financial consequences reconcile through WLT rather than being inferred from DSH state alone.
