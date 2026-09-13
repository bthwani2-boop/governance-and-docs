# Partner Onboarding and Store Publication

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/partner/partner-onboarding-store-publication.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: PARTNER_ONBOARDING_STORE_PUBLICATION

## Outcome

A prospective Partner progresses through one DSH-owned joining lifecycle to one canonically bound Partner actor and one governed Store-publication result.

## Ownership

DSH owns joining-case, assignment, Partner/Store readiness, review/correction and Store-publication truth. Identity alone creates or resolves `actor_id` and admits role `partner`. Catalog publication remains with `CENTRAL_CATALOG`.

## Invariants

- a joining case may exist before `partner` role admission and is never a second Partner identity;
- once bound to canonical `actor_id`, retries cannot silently rebind the case;
- `field` is Partner Acquisition and Onboarding Representative only;
- Field may originate/progress authorized joining work but cannot create Identity actors/roles, approve its own submission or publish a Store;
- one Partner may own multiple Stores; Store is not a tenant or actor;
- owner review is distinct from Field submission;
- customer-visible Store requires applicable Store and catalog publication gates;
- trusted case/business scope is derived server-side, never granted by request input;
- mutations are concurrency-safe, idempotent and attributable.

## Minimal lifecycle

PROSPECTIVE PARTNER → JOINING CASE → REQUIRED BUSINESS / FIRST-STORE DATA → IDENTITY RESOLUTION + partner ROLE ADMISSION WHEN ELIGIBLE → CANONICAL actor_id BINDING → SUBMISSION → OWNER REVIEW → CORRECTION / RESUBMISSION WHEN REQUIRED → STORE READINESS → STORE PUBLICATION.

Documents, evidence and visit checks exist only when current onboarding policy requires them; they are not separate capabilities.

## Failure and recovery

Duplicate logical case, duplicate-actor risk, stale version, unauthorized cross-case access, incomplete prerequisites, correction loop and retry conflict recover through canonical DSH/Identity readback.

## Material surfaces

`app-field`, `control-panel`, `app-partner` after admission, `app-client` after publication, DSH/Identity backends/databases.
