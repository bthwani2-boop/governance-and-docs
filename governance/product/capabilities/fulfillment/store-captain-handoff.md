# Store to Captain Handoff

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/fulfillment/store-captain-handoff.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: STORE_CAPTAIN_HANDOFF

## Outcome

Order custody transfers from the owning Store to the currently assigned Captain exactly once through one DSH-owned handoff truth.

## Ownership

DSH owns custody/handoff and operational handoff-exception truth. Financial consequences, if later admitted, belong to WLT.

## Invariants

- handoff is bound to current order, Store and active Captain assignment;
- only authorized owning-Store Partner scope confirms the Store side;
- only the assigned Captain completes Captain-side pickup;
- pickup cannot complete before required Store/Captain confirmation;
- one active assignment has at most one executable handoff attempt;
- replacement assignment supersedes obsolete handoff attempts;
- a blocking mismatch/shortage prevents pickup until canonically resolved;
- retries are idempotent and materially different payload cannot reuse the same operation identity;
- no surface keeps independent custody truth.

## Failure and recovery

Stale assignment, wrong Store/Captain, duplicate attempt, retry conflict, mismatch/shortage and offline state recover from DSH canonical readback.

## Material surfaces

`app-partner`, `app-captain`, `control-panel` for authorized exception handling, `app-client` tracking consequence, DSH backend/database.
