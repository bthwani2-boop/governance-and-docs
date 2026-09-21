# Store Captain Membership

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/partner/store-captain-membership.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: STORE_CAPTAIN_MEMBERSHIP

## Outcome

A Store may establish an authorized Store-scoped affiliation with a canonical Captain actor so that eligible Partner-Captain fulfillment can occur without inventing another Identity role.

## Ownership

DSH owns membership/affiliation, Store scope, eligibility, suspension and operational readback. Identity owns the canonical Human Actor and `captain` role.

## Invariants

- Partner Captain is not a separate Identity role;
- membership references one canonical Captain actor and one Store;
- one Captain actor may hold multiple authorized Store relationships;
- Store owner authorization cannot grant or mutate Identity role by request input;
- membership eligibility is distinct from platform Captain availability/pool state;
- suspension/removal does not rewrite historical fulfillment records;
- Partner-Captain cash/earnings rules are explicit WLT policy and do not reuse BThwani Captain custody semantics by accident.

## Failure and recovery

Unknown Captain identity, unauthorized Store scope, duplicate membership, stale suspension/restore and conflicting fulfillment eligibility converge on one DSH relationship truth.
