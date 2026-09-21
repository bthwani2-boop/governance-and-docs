# Commerce Promotions

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/commerce/commerce-promotions.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: COMMERCE_PROMOTIONS

## Outcome

Authorized campaigns/coupons/promotions change customer commercial eligibility through one DSH rule truth while all funded financial effects remain explicit WLT truth.

## Ownership

DSH owns promotion identity, eligibility, scope, lifecycle and application to commerce. WLT owns discount funding, subsidy and settlement effects.

## Invariants

- a promotion never rewrites base Catalog/StoreOffer identity;
- eligibility and redemption are server-owned and concurrency/idempotency safe;
- eligibility may be scoped to Store, catalog target, time, customer rule and fulfillment mode; the selected scope is snapshotted into the transaction;
- promotion stacking is denied by default and allowed only by an explicit versioned rule;
- customer discount and funding source are distinct facts;
- platform-funded discount is funding for an entitlement, not extra merchant product value;
- campaign/provider budget or funding cannot be inferred from UI;
- promotion effect is snapshotted into the transaction evidence required for financial reconciliation.

## Failure and recovery

Expired/ineligible code, exhausted usage, concurrent redemption, funding refusal, cancellation/refund and unknown financial effect reconcile without duplicate discount.
