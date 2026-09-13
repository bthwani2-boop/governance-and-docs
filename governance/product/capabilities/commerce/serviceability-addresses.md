# Serviceability and Addresses

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/commerce/serviceability-addresses.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: SERVICEABILITY_ADDRESSES
STATUS: ADMITTED

## Outcome

A client can maintain an owned delivery address and receive one canonical DSH serviceability decision for a target customer-visible Store on the current BThwani delivery path.

## Ownership

DSH owns delivery-address operational truth, the Store delivery-origin fact required for evaluation, and serviceability policy/result. Map/geocoding/routing providers are technical adapters only.

## Invariants

- client input supplies address/location intent, never authoritative serviceability;
- an address belongs to exactly one authorized client, derived from the verified client session;
- serviceability is Store-scoped, not a global address-only decision;
- the canonical evaluation input is the target canonical Store, its current DSH-owned delivery origin, the owned client address, and the current versioned DSH policy;
- Store publication/customer visibility remains J1 truth; delivery-origin and serviceability readiness are J2 prerequisites and do not redefine publication;
- provider results are technical evidence normalized by DSH, and provider uncertainty or evaluation failure never becomes false success;
- missing origin or policy produces an unavailable/not-ready result, not serviceable or unserviceable;
- the canonical result exposes sufficient Store, address and policy version evidence for later Cart freshness validation;
- no alternate fulfillment lane can be selected through address/serviceability input;
- exact location is purpose-limited operational data and must be minimized.

## Failure and recovery

Invalid coordinates, missing Store origin or policy, provider outage/uncertainty, evaluation failure, unserviceable address, stale evidence and offline state fail truthfully and recover by rereading/re-evaluating canonical owner state. A successful user-facing result requires canonical committed readback.
