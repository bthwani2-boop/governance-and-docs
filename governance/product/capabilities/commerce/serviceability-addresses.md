# Serviceability and Addresses

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/commerce/serviceability-addresses.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: SERVICEABILITY_ADDRESSES
STATUS: ADMITTED

## Outcome

A client can maintain an owned delivery address and receive one canonical DSH serviceability decision for the current BThwani delivery path.

## Ownership

DSH owns delivery-address operational truth and serviceability policy/result. Map/geocoding/routing providers are technical adapters only.

## Invariants

- client input supplies address/location intent, never authoritative serviceability;
- provider results are normalized before entering DSH truth;
- an address belongs to one authorized client;
- serviceability resolves server-side from current address/location plus current DSH policy;
- provider uncertainty never becomes false success;
- no alternate fulfillment lane can be selected through address/serviceability input.

## Failure and recovery

Invalid coordinates, provider outage, unserviceable address, stale evidence and offline state fail truthfully and recover by rereading/re-evaluating canonical owner state.
