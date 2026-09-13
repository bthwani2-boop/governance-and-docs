# BThwani Platform Model

ARTIFACT_CLASS: DURABLE_PLATFORM_GOVERNANCE
SEMANTIC_OWNER: governance/platform/PLATFORM.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Platform definition

BThwani is one unified multi-surface delivery-commerce platform operated as one Product, not a collection of independent applications or Partner-specific platform instances.

Current deployable surfaces are:
- `app-client`
- `app-partner`
- `app-captain`
- `app-field`
- `control-panel`

Surface hosts own shell/navigation/composition/presentation. They never own the business truth they display.

## Human Actor model

One human identity is represented cross-boundary by one permanent `actor_id`.

Current high-level roles/personas are exactly:
- `client` → `app-client`
- `partner` → `app-partner`
- `captain` → `app-captain`
- `field` → `app-field`
- `operator` → `control-panel`

One Human Actor may hold multiple roles. Role admission, credentials and sessions never create a second human identity.

`field` means Partner Acquisition and Onboarding Representative only. It does not create a generic field-operations domain.

`operator` is the only control-panel human role. First-Operator bootstrap is a one-time Identity lifecycle, not a second role or Product layer.

## Current domain owners

```text
Identity
→ actor_id / identifiers / credentials / high-level role admission / authentication / sessions

DSH
→ Partner joining / Partner-Store / catalog / serviceability / cart / order / dispatch / custody / delivery operational truth

WLT
→ financial truth when a financial capability is explicitly admitted
```

WLT remains a bounded system owner, but no financial Product capability is admitted merely because WLT exists.

## Current Product breadth

The current durable minimum Product breadth is the smallest coherent BThwani delivery core:
- identity and role-scoped access;
- Partner joining and Store publication;
- central catalog and Store assortment publication;
- customer address/serviceability;
- cart/checkout;
- canonical order lifecycle including Partner preparation;
- captain dispatch;
- Store↔Captain custody handoff;
- final-mile delivery execution and customer readback.

Everything else is absent from live Product governance until a current requirement proves it.

## Current fulfillment invariant

```text
CURRENT_FULFILLMENT_MODEL = BTHWANI_DELIVERY
ONE_STANDARD_ORDER → ONE_BTHWANI_FINAL_MILE_PATH
NO_CLIENT_SELECTED_EXECUTION_LANE
NO_PARTNER_OWNED_PARALLEL_FINAL_MILE_FLEET
NO_DORMANT_ALTERNATE_FULFILLMENT_MODEL
```

## Canonical terms

- **Human Actor** — one natural person represented by `actor_id`.
- **Role** — high-level Identity admission such as client/partner/captain/field/operator.
- **Surface** — deployable host; never a domain owner by itself.
- **Partner** — authenticated Human Actor with role `partner`.
- **Store** — DSH business resource belonging to a Partner; not a tenant or Human Actor.
- **Joining Case** — DSH pre/post-admission Partner onboarding workflow; never a second Partner identity.
- **Canonical owner** — bounded owner of durable meaning and authoritative mutation.
- **Canonical readback** — owner-backed observable committed state after mutation.
- **Derived projection** — rebuildable/read-optimized state with no mutation authority.
