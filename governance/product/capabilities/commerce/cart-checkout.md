# Cart and Checkout

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/commerce/cart-checkout.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: CART_CHECKOUT

## Outcome

A client builds one owned Store cart and confirms one Store-scoped checkout intent from canonical Catalog, Store and serviceability evidence without client-authoritative eligibility or duplicate operational/financial effects.

## Ownership

DSH owns cart/checkout operational truth. Catalog, Store and serviceability owners provide canonical evidence. WLT owns the admitted financial intent/allocation. Multi-Store composition belongs to `MULTI_STORE_CHECKOUT`.

## Invariants

- one logical cart is scoped to authenticated client and Store;
- each CartLine identifies one canonical StoreOffer and ProductVariant plus exact requested quantity and selected modifier option IDs;
- item identity, availability and commercial evidence come from canonical DSH owners;
- mutation is versioned/idempotent and one retry identity cannot represent a different payload;
- checkout carries an explicit fulfillment intent independent from payment method;
- checkout establishes one stable logical operation identity before cross-owner financial effects; an ambiguous commit/retry cannot silently allocate another logical order identity;
- confirmed checkout snapshots the address/serviceability/item/variant/quantity/pricing/modifier evidence required by `ORDER_LIFECYCLE`;
- stale or invalidated evidence blocks confirmation;
- client-supplied totals, Product/Variant/Offer facts, eligibility, Store scope, quantity validity, inventory, serviceability, fulfillment authority or financial result are not authoritative.

## Financial boundary

DSH derives the authoritative commercial basis from owner facts and asks WLT to establish the applicable payment/collection intent through `ORDER_PAYMENT_COLLECTION`. Customer payment allocation and later settlement allocation remain separate.

## Failure and recovery

Stale cart, unavailable/unpublished Offer, invalid modifier/quantity, unserviceable address, financial refusal, conflict, offline state and ambiguous cross-owner outcome recover through canonical reread/reconciliation. No success is reported before committed owner readback.

## Material participants

Client ordering experience plus DSH/WLT owner runtimes and persistence are material consumers. Deployable host names and repository paths remain implementation truth.
