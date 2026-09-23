# Order Payment and Collection

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/finance/order-payment-collection.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: ORDER_PAYMENT_COLLECTION

## Outcome

Every admitted Store Order has one WLT-owned payment/collection truth that conserves the customer's payable amount across admitted sources and reconciles delivery COD, Store-collected pickup cash, or refund effects without duplicate movement.

## Ownership

WLT owns payment intent, customer payment allocation, collection state, COD receivable/exposure and financial readback. DSH owns operational Order/fulfillment facts that authorize effects.

## Invariants

- payment method/source is independent from fulfillment mode;
- customer funding allocation currently composes internal balance and/or cash as admitted by the checkout contract;
- for `CUSTOMER_PICKUP` paid with cash at the Store, the Store receives and retains the customer's sale proceeds; WLT records the order-bound collection and the versioned commission receivable owed by the responsible Partner;
- Partner commission policy is scoped to the Store and fulfillment mode, uses product value as its commission basis, and is snapshotted with the effective policy version on each Order; the current Partner rate is the initial value when Store-mode terms are established, and only Finance may change future terms;
- for the initial `PARTNER_CAPTAIN` release, no customer delivery fee is charged; Store-Captain remuneration remains an off-WLT Store responsibility;
- when a Store Captain collects cash from a customer for a `PARTNER_CAPTAIN` order, sale proceeds belong to the Store/Partner and the Captain must hand them to the Store; DSH records collection, handoff and Store acknowledgment outside WLT; WLT creates no BThwani-Captain COD receivable, Captain earnings, or wallet balance for those proceeds;
- Store-collected pickup cash never creates BThwani Captain cash custody, COD exposure, a Captain COD remittance obligation, or a duplicate Partner wallet credit for sale proceeds already retained by the Store;
- customer payment allocation does not include merchant/platform settlement funding;
- external provider account balance is not a checkout source; provider funding first becomes WLT internal balance through `CUSTOMER_BALANCE_FUNDING`;
- COD risk hold is not ordinary payment consumption;
- collection, cancellation/refund and reconciliation are idempotent and preserve one logical payment identity;
- ambiguous distributed/provider outcomes remain explicit until reconciled;
- no surface or DSH projection becomes payment truth.

## Failure and recovery

Insufficient balance/exposure, unknown provider outcome, duplicate collection, wrong collected amount, cancellation race, unresolved Partner commission receivable, remittance uncertainty and refund exception fail closed or reconcile from canonical WLT state.
