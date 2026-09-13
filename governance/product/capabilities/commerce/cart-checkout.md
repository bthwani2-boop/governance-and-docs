# Cart and Checkout

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/commerce/cart-checkout.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: CART_CHECKOUT

## Outcome

A client builds one owned Store cart and confirms one checkout intent from canonical catalog, Store and serviceability evidence without client-authoritative eligibility or duplicate operational effects.

## Ownership

DSH owns cart/checkout operational truth. Catalog, Store and serviceability owners provide canonical evidence. Financial authorization is not part of this minimum capability until separately admitted; DSH never invents financial truth.

## Invariants

- one logical cart is scoped to the authenticated client and Store;
- item identity, availability and authoritative commercial evidence come from canonical server owners;
- mutation is versioned/idempotent and one retry identity cannot represent a different payload;
- checkout uses only the current BThwani delivery path;
- confirmed checkout snapshots the address/serviceability/item evidence required by `ORDER_LIFECYCLE`;
- stale or invalidated evidence blocks confirmation;
- client-supplied totals, eligibility, Store scope or execution-lane choice are not authoritative.

## Failure and recovery

Stale cart, unavailable item, unpublished Store/item, unserviceable address, conflict, offline state and ambiguous retry recover through canonical reread/revalidation. No success is reported before committed readback.

## Material surfaces

`app-client`, DSH backend/database.
