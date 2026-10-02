# Partner Onboarding and Store Publication

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/partner/partner-onboarding-store-publication.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: PARTNER_ONBOARDING_STORE_PUBLICATION

## Outcome

A prospective Partner progresses through one DSH-owned joining lifecycle to one canonically bound Partner actor and one governed Store-publication result, including the required primary Commerce Vertical, commercial Store Type and initially admitted fulfillment modes for the first Store.

## Ownership

DSH owns joining-case, Field standing admission/eligibility, assignment, Partner/Store readiness, review/correction, canonical Service City, primary Commerce Vertical, commercial Store Type, initial Store fulfillment-mode assignment, operator-authorized post-creation fulfillment-mode policy changes, Store ownership binding and Store-publication truth. Identity alone creates/resolves `actor_id` and admits `partner`/`field` roles after an authorized DSH request. Catalog publication remains with `CENTRAL_CATALOG`; current Store opening/orderability after publication belongs to `STORE_OPERATIONAL_AVAILABILITY`.

## Invariants

- a joining case may exist before `partner` role admission and is never a second Partner identity;
- canonical Service City is required first-Store data on the joining case;
- primary Commerce Vertical is required first-Store data on the joining case and transfers to the Store atomically;
- commercial Store Type is required first-Store data, belongs to exactly one compatible primary Commerce Vertical, and transfers from the joining case to the Store atomically;
- DSH owns the active commercial Store Type registry and validates the selected type against its parent Commerce Vertical; type identity is a stable canonical code, not a localized label;
- commercial Store Type describes the Store business model and is independent of catalog product categories; it is never inferred from products or category assignments;
- each Store has its own commercial Store Type; one Partner may own multiple Stores with different types and corresponding financial terms;
- first-Store Service City, Commerce Vertical, commercial Store Type and fulfillment-mode policy are preserved through review, correction and resubmission and become canonical Store facts atomically at Store creation;
- first-Store Store Type may be corrected before Store creation only through the governed case-correction path;
- after Store creation, only an active authorized Operator path may change the Store's durable enabled fulfillment-mode policy; Partner surfaces cannot mutate that durable policy;
- Partner may change only the temporary operational availability allowed by `STORE_OPERATIONAL_AVAILABILITY`; pausing a mode never enables/disables the durable admitted mode policy;
- fulfillment-mode policy mutation remains DSH-owned, versioned, attributable and auditable; the Operator surface is an authorized host, not a second writer;
- Partner is not city-scoped; a Partner may own multiple Stores in the same or different Service Cities;
- a new Store cannot be created without an active canonical Service City;
- DSH joining eligibility may request Identity `partner` role admission; generic account input cannot create that role;
- `partner` role authenticates the Partner workspace, while Store ownership remains a separate DSH relationship;
- once bound to canonical `actor_id`, retries cannot silently rebind the case;
- `field` is Partner Acquisition and Onboarding Representative only;
- Field standing admission is a distinct DSH-owned fact: an authorized Operator creates the candidate and may suspend/restore it; DSH may request Identity `field` role admission only for an eligible, unbound candidate, which binds to one canonical Field `actor_id`;
- Field may originate/progress authorized joining work but cannot create Identity actors/roles, approve its own submission or publish a Store;
- owner review is distinct from Field submission;
- only a bound Partner may correct and resubmit its `needs_correction` case as one governed atomic business transition; Operator does not impersonate that resubmission;
- Store publication is distinct from serviceability, catalog/offer eligibility and current operational orderability;
- customer-visible Store publication requires applicable Store publication, active Service City assignment and catalog publication gates; current orderability is evaluated separately;
- a published Store may remain customer-discoverable as closed/paused when current Product/experience policy allows, but checkout may not treat publication as proof that the Store can accept orders now;
- trusted case/business scope is derived server-side, never granted by request input;
- mutations are concurrency-safe, idempotent and attributable.

## Minimal lifecycle

```text
FIELD CANDIDATE
→ DSH Field admission / eligibility
→ authorized Identity request
→ Identity field role admission + canonical actor binding
→ authorized FIELD joining work
→ OPERATOR review

PROSPECTIVE PARTNER
→ JoiningCase with first-Store Service City + Commerce Vertical + Store Type + fulfillment-mode policy
→ DSH Partner admission / eligibility
→ authorized Identity request
→ Identity partner role admission + canonical actor binding
→ submission / owner review
→ bound Partner correction/resubmission when required
→ Store creation + Store ownership binding + canonical first-Store facts
→ catalog/readiness gates
→ Store publication
```

Documents, evidence and visit checks exist only when current onboarding policy requires them; they are not separate capabilities.

## Failure and recovery

Duplicate logical case, duplicate-actor risk, missing required Service City/vertical/type, incompatible Store Type/Vertical, stale version, unauthorized cross-case access, incomplete prerequisites, correction loop and retry conflict recover through canonical DSH/Identity readback. A suspended or stale Field admission cannot originate joining work; restoring DSH standing and the applicable Identity role is an explicit authorized recovery. Recovery never guesses a Store classification or rebinds a case/Field admission to a different actor.

## Material participants

Field acquisition/onboarding work, Operator review/admission work, Partner post-admission work, Client publication consequences and DSH/Identity owner runtimes are material consumers. Store orderability is separately read from `STORE_OPERATIONAL_AVAILABILITY`.
