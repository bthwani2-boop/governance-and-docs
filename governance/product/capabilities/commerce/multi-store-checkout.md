# Multi-Store Checkout

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/commerce/multi-store-checkout.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: MULTI_STORE_CHECKOUT

## Outcome

One customer parent checkout may coordinate purchases from multiple Stores while creating independent canonical Store Orders and preserving per-Store fulfillment, financial and exception isolation.

## Ownership

DSH owns parent checkout composition and child Store Order relations. Each child Order remains owned by `ORDER_LIFECYCLE`; WLT owns per-child financial allocation/effects. Grouped pickup/delivery planning is admitted as bounded operational coordination (children may be coordinated but never merged); advanced route-optimization remains a non-goal.

## Invariants

- one child Store Order belongs to one Store;
- parent checkout never becomes a multi-Store Order writer that erases child autonomy;
- the parent confirmation carries one parent logical operation identity; each child Store checkout carries its own stable child operation identity for cross-owner financial effects;
- child fulfillment modes may differ per Store, each child requiring its own durably admitted mode and per-Store orderability evidence;
- financial allocation/effects are traceable per child;
- partial failure/cancellation/refund is explicit and idempotently reconciled;
- the parent checkout cannot appear fully complete while an accepted child or associated financial effect remains unresolved;
- grouped delivery/pickup optimization may coordinate children but cannot merge their ownership or settlement truth.
- grouped planning is bounded operational coordination; advanced route-optimization is not admitted by this capability.

## Failure and recovery

Partial child creation, financial refusal, Store rejection, mixed fulfillment failure, grouped-delivery failure and retry ambiguity reconcile per child and at parent checkout readback without duplicate Orders or money movement.
