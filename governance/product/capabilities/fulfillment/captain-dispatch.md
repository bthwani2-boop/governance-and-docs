# Captain Dispatch

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/fulfillment/captain-dispatch.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: CAPTAIN_DISPATCH

## Outcome

A ready BThwani-delivery order receives at most one active DSH dispatch offer/assignment with governed Captain eligibility, response timeout and concurrency-safe reassignment.

## Ownership

DSH owns Captain operational eligibility/availability, dispatch offer, assignment and reassignment truth. WLT owns any later-admitted financial effect.

## Admission boundary

DSH establishes standing Captain admission/operational eligibility before a Captain role is requested from Identity. The canonical order is:

```text
DSH Captain admission / standing operational eligibility
→ authorized Identity request
→ Identity actor resolution + `captain` role admission
→ activation / enrollment
→ DSH availability
→ dispatch offer / assignment
```

A transient delivery assignment is not standing role admission and is not required merely to activate or enter the Captain surface.

## Invariants

- only a canonically ready order is dispatchable;
- only an eligible available Captain may receive/accept an offer;
- one order has at most one active assignment;
- capacity and eligibility are enforced server-side under concurrency;
- only the authenticated offered Captain may accept/reject the live offer;
- expiry and rejection are durable decisions;
- reassignment before pickup is atomic; after custody begins, ordinary reassignment is forbidden;
- no surface computes final dispatch authority.

## Failure and recovery

No eligible Captain, timeout, decline, stale offer, concurrent assignment, reassignment conflict and offline state preserve one assignment truth. Expired offers cannot be accepted.

## Material participants

Captain operations, Operator dispatch work, customer-safe Client tracking consequences and the DSH owner runtime/persistence are material consumers of this capability. Deployable host names and repository paths remain implementation truth.
