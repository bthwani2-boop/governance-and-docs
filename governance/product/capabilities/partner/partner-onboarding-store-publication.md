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
- canonical Service City, primary Commerce Vertical and compatible commercial Store Type are required first-Store data and transfer atomically to the Store;
- first-Store fulfillment-mode policy is preserved through review/correction/resubmission and transferred with Store creation;
- after Store creation, only the currently authorized owner path may change Store fulfillment-mode policy; the surface hosting that work is not a second writer;
- Partner is not city-scoped and may own multiple Stores;
- a new Store cannot be created without an active canonical Service City;
- DSH joining eligibility may request Identity `partner` role admission; generic account input cannot create that role;
- `partner` role authenticates the Partner workspace, while Store ownership remains a separate DSH relationship;
- once bound to canonical `actor_id`, retries cannot silently rebind the case;
- `field` is Partner Acquisition and Onboarding Representative only;
- Field standing admission is a distinct DSH-owned fact and may request Identity `field` role admission only for an eligible candidate;
- Field may originate/progress authorized joining work but cannot create roles, approve its own submission or publish a Store;
- only a bound Partner may correct and resubmit its `needs_correction` case through the governed transition;
- Store publication is distinct from serviceability, catalog/offer eligibility and current operational orderability;
- a published Store may remain customer-discoverable as closed/paused when current Product/experience policy allows, but checkout may not treat publication as proof that the Store can accept orders now;
- trusted case/business scope is derived server-side, never granted by request input;
- mutations are concurrency-safe, idempotent and attributable.

## Minimal lifecycle

```text
FIELD CANDIDATE
→ DSH Field eligibility
→ Identity field role admission
→ FIELD joining work
→ OPERATOR review

PROSPECTIVE PARTNER
→ JoiningCase with first-Store facts
→ DSH Partner eligibility
→ Identity partner role admission
→ canonical actor binding
→ submission / review / correction
→ Store creation + Store ownership binding
→ catalog/readiness gates
→ Store publication
```

Documents, evidence and visit checks exist only when current onboarding policy requires them; they are not separate capabilities.

## Failure and recovery

Duplicate logical case, duplicate-actor risk, missing required Service City/vertical/type, stale version, unauthorized cross-case access, incomplete prerequisites, correction loop and retry conflict recover through canonical DSH/Identity readback. A suspended Field cannot originate joining work. Recovery never guesses a Store classification or rebinds a case to a different actor.

## Material participants

Field acquisition/onboarding work, Operator review/admission work, Partner post-admission work, Client publication consequences and DSH/Identity owner runtimes are material consumers. Store orderability is separately read from `STORE_OPERATIONAL_AVAILABILITY`.
