# Final Mile Delivery

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/fulfillment/final-mile-delivery.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: FINAL_MILE_DELIVERY
STATUS: ADMITTED

## Outcome

After the governed Store-to-Captain handoff, the assigned Captain completes one BThwani final-mile delivery to one terminal DSH result with consistent customer, Partner, Captain and Operator readback.

## Ownership

DSH owns the operational delivery lifecycle and delivery result. Any financial effect belongs to WLT only when separately admitted.

## Invariants

- delivery begins only after canonical pickup;
- only the current assigned Captain can advance the active delivery;
- terminal completion is recorded once and cannot be duplicated by retry;
- a failed or blocked attempt remains explicit canonical state until a legal recovery transition occurs;
- customer tracking is a projection of DSH truth, not a writer;
- restart and retry use canonical readback rather than local surface state.

## Failure and recovery

Connectivity loss, stale version, duplicate submission and delivery failure must preserve one canonical state and a safe resume/retry path.

## Material surfaces

`app-captain`, `app-client`, `app-partner`, `control-panel`, DSH backend/database.
