# Final Mile Delivery

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/fulfillment/final-mile-delivery.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: FINAL_MILE_DELIVERY

## Outcome

After governed Store-to-Captain custody transfer, the canonical Captain completes one Captain-delivered Store Order to one terminal DSH result with consistent participant readback.

## Ownership

DSH owns operational delivery lifecycle/result. WLT owns payment collection, COD exposure/cash custody, earnings and other financial effects. Customer Pickup is a separate fulfillment capability.

## Invariants

- delivery begins only after canonical Captain pickup;
- only the canonical current Captain may advance active delivery;
- terminal completion is recorded once and cannot be duplicated by retry;
- delivery proof and payment collection are distinct owner-backed facts even when one user action triggers both;
- failed/blocked attempt remains explicit canonical state until legal recovery;
- a recoverable failure preserves physical-custody responsibility until a governed recovery/custody transition resolves it;
- customer tracking is a DSH projection, not a writer;
- restart/retry use canonical readback rather than local state.

## Failure and recovery

Connectivity loss, stale version, duplicate submission, payment-collection uncertainty and delivery failure preserve one canonical operational state and safe reconciliation/resume path. WLT effects must not be treated as atomically committed merely because DSH completion was attempted.
