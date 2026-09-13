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
- the initial operator admission/submit transition is the DSH-owned eligibility point that may request Identity `partner` role admission; a generic accounts action cannot create that role;
- once bound to canonical `actor_id`, retries cannot silently rebind the case;
- `field` is Partner Acquisition and Onboarding Representative only;
- Field may originate/progress authorized joining work but cannot create Identity actors/roles, approve its own submission or publish a Store;
- one Partner may own multiple Stores; Store is not a tenant or actor;
- owner review is distinct from Field submission;
- only a bound Partner may correct and resubmit a `needs_correction` case, as one atomic business transition; an Operator may not resubmit it;
- customer-visible Store requires applicable Store and catalog publication gates;
- trusted case/business scope is derived server-side, never granted by request input;
- mutations are concurrency-safe, idempotent and attributable.

## Minimal lifecycle

PROSPECTIVE PARTNER → JOINING CASE → REQUIRED BUSINESS / FIRST-STORE DATA → DSH ADMISSION/ELIGIBILITY → authorized Identity request → Identity resolution + partner ROLE ADMISSION → CANONICAL actor_id BINDING → SUBMISSION → OWNER REVIEW → bound Partner atomic CORRECT-AND-RESUBMIT when required → STORE READINESS → STORE PUBLICATION.

Documents, evidence and visit checks exist only when current onboarding policy requires them; they are not separate capabilities.

## Failure and recovery

Duplicate logical case, duplicate-actor risk, stale version, unauthorized cross-case access, incomplete prerequisites, correction loop and retry conflict recover through canonical DSH/Identity readback.

## Material surfaces

`app-field`, `control-panel`, `app-partner` after admission, `app-client` after publication, DSH/Identity backends/databases.
