# Store Commercial Agreement

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/finance/store-commercial-agreement.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: STORE_COMMERCIAL_AGREEMENT

## Outcome

Each Store's final Partner commission terms are explicit, accepted by that Store's bound Partner owner and approved by Finance before becoming active. WLT supplies one durable financial truth for the Store and each enabled fulfillment mode.

## Ownership

WLT owns agreement identity and versions, proposed rates, Partner acceptance, Finance approval, activation, effective and superseded facts and audit. DSH supplies canonical Store context, joining attribution and enabled fulfillment modes and performs the bounded operational handoff; DSH does not write financial rates. Field may propose initial terms for its authorized joining case. The bound Partner owner accepts exact terms. An authorized Finance actor approves them. ORDER_PAYMENT_COLLECTION alone resolves the active agreement for an applicable Order and owns that Order's immutable agreement snapshot.

## Invariants

- final terms are Store-specific; a Store's terms do not derive from another Store with the same commercial Store Type;
- each version identifies `store_id`, `agreement_id`, `agreement_version`, status, Field/joining-case and proposer actor/provenance, enabled fulfillment modes and their rates, Partner owner acceptance and `accepted_at`, Finance approval and `approved_at`, `effective_at`, `superseded_at`, reason/audit and idempotency/correlation;
- an agreement has no duplicate fulfillment-mode rate; every enabled fulfillment mode has exactly one rate in an active agreement; `commission_rate_bps` is an integer from `0` through `10000`;
- the lifecycle is `PROPOSED` → `PARTNER_ACCEPTED` → Finance-approved `ACTIVE` → `SUPERSEDED`; missing acceptance or Finance approval prevents activation;
- Partner acceptance records the bound Store owner, accepted agreement version and time. Silence, Store creation, role admission, catalog readiness or publication is not acceptance;
- only authorized Finance approval can activate the accepted version. A proposed, unaccepted or otherwise inactive agreement cannot authorize an Order or settlement;
- each material term change creates a new version. Historical active or superseded terms and their acceptance/approval evidence are immutable;
- a Store Type-by-mode policy, if retained, only prefills a suggested negotiation starting value. In Finance and negotiation surfaces it is identified as a suggested rate, separate from Store terms; it never authorizes an Order, settlement or fallback when a Store agreement is missing;
- Order commission resolution and immutable snapshot semantics are owned by ORDER_PAYMENT_COLLECTION;
- no more than one agreement version is active for a Store at a time;
- Field can propose only for its authorized joining Store and cannot accept on the Partner's behalf or approve financial terms;
- retries, stale versions and concurrent acceptance/approval preserve one auditable result and cannot create duplicate active terms.

## Failure and recovery

Missing Store context, disabled fulfillment mode, rate outside the admitted range, Partner actor or Store-scope mismatch, non-acceptance, missing Finance authority, stale agreement version and duplicate/conflicting mutation fail closed and recover through WLT and DSH canonical readback. Missing or inactive terms block Store publication and any Order that requires them; a Store Type default never fills the gap.
