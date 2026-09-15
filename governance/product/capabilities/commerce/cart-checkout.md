# Cart and Checkout

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/commerce/cart-checkout.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: CART_CHECKOUT

## Outcome

A client builds one owned Store cart and confirms one checkout intent from canonical Central Catalog, Store and serviceability evidence without client-authoritative eligibility or duplicate operational effects.

## Ownership

DSH owns cart/checkout operational truth. Catalog, Store and serviceability owners provide canonical evidence. Financial authorization is not part of this minimum capability until separately admitted; DSH never invents financial truth.

## Invariants

- one logical cart is scoped to the authenticated client and Store;
- each CartLine identifies one canonical `StoreOffer` and one canonical `ProductVariant`, plus exact requested quantity and canonical selected modifier option IDs;
- item identity, availability and authoritative commercial evidence come from the DSH customer-visible-offer evaluator and canonical server owners;
- mutation is versioned/idempotent and one retry identity cannot represent a different payload;
- checkout uses only the current BThwani delivery path;
- confirmed checkout snapshots the address/serviceability/item, variant, quantity, pricing-basis and modifier evidence required by `ORDER_LIFECYCLE`;
- stale or invalidated evidence blocks confirmation;
- client-supplied totals, Product/Variant/Offer facts, eligibility, Store scope, quantity validity, inventory, serviceability or execution-lane choice are not authoritative.

The server owns one exact integer monetary calculator. WLT/payment authorization is not part of this slice; DSH does not invent financial truth.

## Failure and recovery

Stale cart, unavailable or unpublished Offer, inactive Product/Variant, invalid modifier selection, invalid quantity policy, unserviceable address, conflict, offline state and ambiguous retry recover through canonical reread/revalidation. No success is reported before committed readback.

## Material surfaces

`app-client`, DSH backend/database.
