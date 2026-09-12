# Partner Onboarding Store Publication

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/partner/partner-onboarding-store-publication.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
PARENT_CAPABILITY_INDEX: governance/product/CAPABILITIES.md
CAPABILITY_ID: PARTNER_ONBOARDING_STORE_PUBLICATION

## Scope

This file is the **sole editable durable semantic owner** of `PARTNER_ONBOARDING_STORE_PUBLICATION`. Capability taxonomy/schema/admission law remains in `../../CAPABILITIES.md`; cross-capability journey semantics remain in `../../JOURNEYS.md`.

### PARTNER_ONBOARDING_STORE_PUBLICATION

**Problem.** Bringing a new Partner into BThwani is an acquisition/onboarding lifecycle, not a single visit or verification step. The lifecycle may begin with a prospective Partner before a `partner` Identity role exists and may require contact/follow-up, business/contact data capture, Identity binding/admission, first-Store setup, location, documents, evidence, a visit/check when policy requires it, correction loops, review, readiness and publication. These facts must remain one traceable governed journey rather than disconnected surface-specific records or a narrow field-inspection workflow.

**Problem frequency.** continuous

**Problem severity.** critical

**Target state.** An authorized Partner Acquisition and Onboarding Representative can originate or progress a Partner joining case from prospective Partner through complete owner-review submission, while Identity, DSH, WLT and publication owners retain their canonical boundaries. Every mutation is trusted-context derived, case/business scoped, authorization-scoped, concurrency-safe, idempotent, audited and readable on required surfaces.

**Primary success measure.** percentage of Partner joining cases that reach a governed terminal onboarding/publication outcome without manual cross-system reconstruction.

**Guardrail measures.** zero duplicate Partner identities from joining; zero unauthorized cross-case reads/writes; zero representative-created Partner roles; zero representative self-approval/publication; zero raw payout account identifiers returned by DSH; zero client-visible Stores failing an applicable publication gate; zero duplicate transition audit events for identical retries.

**Required outcome.** An authorized Field actor using the Partner Acquisition and Onboarding Representative persona can identify/contact a prospective Partner, create or receive a Partner joining case, capture/update the information required by active policy, assist with first-Store setup, capture location/documents/evidence, perform a visit/check when required, follow up and correct missing information, and submit/resubmit the case for canonical owner review. The joining case may exist before Partner role admission. Identity alone creates/resolves `actor_id`, admits role `partner` and owns activation/session semantics. DSH binds the joining case to that canonical Partner identity once admission occurs. The Field actor never approves their own submission or publishes a Store. WLT exclusively owns raw payout details and any admitted representative compensation.

**Primary actors.** Partner Acquisition and Onboarding Representative (`field`), prospective Partner/contact, Partner after Identity admission, control-operator, client.

**Canonical ownership.** DSH owns prospective-Partner joining case truth, representative assignment, onboarding/business/first-Store data, correction/submission/review state and Partner/Store operational readiness; Identity owns Human Actor identity, `partner` role admission, credentials/activation/session; WLT owns payout-destination and compensation truth; applicable publication owners retain their gates.

**Partner model invariant.** `Partner` is the authenticated `partner` actor identified by `actor_id` after admission. A prospective Partner or Partner joining case before admission is DSH onboarding truth only. This capability must not create `Partner Organization`, `Partner Member`, partner-team membership, a second Partner identifier, or another Partner ownership layer. A Store is a DSH resource directly related to its Partner actor after canonical binding.

**Boundary/non-overlap.** The `field` role is the dedicated Partner acquisition/onboarding persona, not a separate Field Operations capability or domain. It may originate and progress Partner joining work but cannot create Identity actors/roles, approve/publish its own cases or own financial truth. `CENTRAL_CATALOG` separately owns taxonomy/master-product/assortment/catalog publication; customer visibility requires all applicable owners to pass.

**Material deployable surfaces.** app-field, control-panel, app-partner after Partner role admission/activation, app-client after publication.

## Partner joining lifecycle

A durable case may progress through policy-specific equivalents of:

```text
PROSPECTIVE_PARTNER / JOINING_INTENT
→ JOINING_CASE
→ CONTACT / FOLLOW_UP
→ REQUIRED_PARTNER_BUSINESS_DATA
→ IDENTITY_RESOLUTION_AND_PARTNER_ROLE_ADMISSION_WHEN_ELIGIBLE
→ FIRST_STORE_SETUP_WHEN_APPLICABLE
→ LOCATION / DOCUMENT / EVIDENCE / VISIT_OR_CHECK_WHEN_REQUIRED
→ SUBMISSION
→ OWNER_REVIEW
→ CORRECTION / RESUBMISSION WHEN_REQUIRED
→ PARTNER_AND_STORE_READINESS
→ PUBLICATION WHEN ALL APPLICABLE GATES PASS
```

Exact implementation state names are contract/source truth. Governance requires the semantic boundaries and legal transitions above, not a specific enum vocabulary.

**Business invariants**
- A Partner joining case may be created before `partner` role admission; that case is not itself a Human Actor or Partner role.
- Identity alone creates/resolves `actor_id` and admits role `partner`; a Field actor cannot directly create, grant, activate or impersonate that identity/role.
- Once a joining case is bound to a canonical Partner `actor_id`, retries/corrections cannot silently rebind it to another actor.
- Every pre-admission joining case has stable correlation/deduplication identity sufficient to avoid duplicate acquisition cases for the same logical attempt according to active policy.
- Every Field actor may access only joining cases assigned or otherwise authorized by DSH policy.
- Partner joining may include multiple activities: contact/follow-up, data capture, first-Store assistance, location, documents, evidence, and a visit/check when required. None of those activities independently redefine the Field persona.
- Field submission is distinct from owner review/approval and Store publication.
- One Partner may manage multiple Stores; one Store belongs to one Partner unless an explicit transfer capability changes that relationship.
- WLT is the sole owner of raw payout destination and any financial compensation truth.
- Client visibility is a Store publication outcome, not merely a Partner status label.
- Every material transition records the actor, trusted context, business/case scope, correlation, retry and audit data required by current contracts.

**Forbidden/negative invariants**
- No `Partner Organization`, `Partner Member`, partner-team membership, organization/store-membership layer, or parallel Partner identity may be introduced by this capability.
- No Field-created `actor_id`, direct `partner` role grant, direct Partner activation or role impersonation.
- No client-controlled input selects or grants trusted business/authorization scope.
- Missing required trusted context cannot silently fall back inside Partner handlers.
- One joining case/Partner/Store scope cannot enumerate, read, link, mutate or infer another unauthorized scope.
- No unrelated operational task may be assigned through the `field` role or `app-field`.
- A Field actor cannot approve their own submission or publish a Partner/Store.
- A Partner cannot bypass Store publication gates.
- A Store cannot be reassigned by a generic link operation.
- DSH cannot persist raw payout account data after binding a WLT reference.
- A stale version cannot mutate joining/Partner state.
- A reused idempotency key cannot represent a different payload.
- A Store failing any applicable publication gate cannot appear to clients.

**Acceptance expectations**
- An authorized Field actor can originate a Partner joining case from a prospective Partner; the workflow does not require a pre-existing `partner` role merely to begin acquisition/onboarding.
- Business and authorization scope is derived server-side from authenticated Field identity plus canonical DSH assignment/policy; browser headers, query parameters and request bodies cannot grant or override it.
- Joining case data can be captured progressively and resumed safely; offline/degraded drafts do not become canonical success until server readback commits them.
- The lifecycle can establish/link canonical Partner Identity at the governed admission point without producing duplicate Human Actors or parallel Partner IDs.
- Field actors can capture/update required business/contact/first-Store/location/document/evidence data, perform visit/check steps when policy requires them, follow up missing information and submit/resubmit authorized cases.
- Submission/review/publication is blocked until prerequisites applicable to the active onboarding policy are complete.
- A WLT payout reference is required before the first state/financial action whose commercial model actually needs payout-destination truth; it is not a universal Store-publication prerequisite for models that create no such payout obligation.
- Partner and control-panel surfaces read back committed Identity/onboarding/readiness state after their applicable entry point.
- Client publication requires every applicable Partner, Store, catalog, marketing and serviceability gate.
- A Store already owned by one Partner cannot be linked to another through a generic onboarding operation.
- Identical transition and payout retries replay the original result; payload changes under the same idempotency identity are rejected.
- DSH persists and returns only WLT payout references or masked values allowed by the current contract.

**Named failure classes:** acquisition_requires_preexisting_partner_role, duplicate_partner_from_joining, joining_case_rebound_to_different_actor, field_grants_partner_role, field_self_approval, field_publishes_store, trusted_context_selected_from_client_input, missing_trusted_context_accepted, cross_scope_record_disclosure_mutation, raw_payout_data_stored_or_returned_by_dsh, store_ownership_silently_changed, publication_without_all_applicable_gates, approval_without_required_evidence, payload_divergent_retry_accepted, surface_reports_success_before_committed_readback, unrelated_field_task_admitted, duplicate_partner_identity_model_admitted.

**Actor responsibility envelope**
- `field` — Partner Acquisition and Onboarding Representative. Permitted: identify/contact prospective Partners; create or work authorized joining cases; capture/update required Partner/business/contact data; assist first-Store setup; capture location/documents/evidence; perform policy-required visit/check; follow up missing information; submit/resubmit for owner review; read canonical case result. Forbidden: create `actor_id`; grant/activate `partner`; approve own submission; publish Store; perform unrelated operational work; write WLT financial truth; override trusted scope.
- `prospective Partner/contact` — supplies truthful onboarding information/evidence through the authorized joining path; has no `partner` role authority until Identity admission and activation occur.
- `Partner` — after canonical admission/activation, reads governed activation/readiness/Store scope and operates capabilities admitted to the authenticated `partner` actor; forbidden: self-approve onboarding, override publication gates, read raw payout identifiers from DSH, access another Partner's Store scope.
- `control-operator` — reviews submitted case/evidence and applies governed decisions through exact server-side permissions; forbidden: bypass readiness gates, reassign another Partner's Store, persist raw payout identifiers in DSH, mutate WLT ledger truth, access records outside authorization.
- `client` — discovers a Store only after all applicable publication gates are satisfied; forbidden: discover hidden/unready Stores or read private onboarding data.

**Surface semantics**
- `app-field` — required for the Field persona; actors: field; states include empty/assigned/draft/saving/offline/blocked/submitted/correction_required/resubmitted/completed/error as applicable; actions: create joining case, open authorized case, capture/update Partner/business/contact/first-Store/location/document/evidence data, perform required visit/check, follow up, save/resume, submit/resubmit, read canonical outcome. No unrelated operational action is admitted.
- `control-panel` — required; actors: control-operator; states: loading, empty, ready, forbidden, conflict, readiness-blocked, correction-required, error; actions: review joining case/evidence, request correction, apply allowed decision, read audit.
- `app-partner` — required only after the Human Actor has canonical Partner admission/activation for Partner-authenticated actions; states: loading, blocked, in-review, active, hidden, deactivated, error; actions: activate when eligible, read own status/readiness/Store scope, operate capabilities admitted after readiness.
- `app-client` — required only for published Store discovery; actors: client; states: loading, empty, ready, offline, error; actions: discover published Store, open public Store detail.
- `app-captain` — excluded; states: out-of-scope; exclusion reason: Captain assignment and fulfillment begin after Store publication.
- `backend` — required; actors: field, prospective-Partner joining flow, Partner, control-operator, client; states: authorized, trusted-context-required, not-found, forbidden, conflict, readiness-blocked, idempotent-replay, service-unavailable; actions: authenticate acting user/service, derive trusted context, authorize, validate, persist, coordinate Identity admission, audit, handoff to WLT when applicable, read back.
- `database` — required; states: case-scope-isolated, identity-binding-consistent, conflict-rejected, idempotent, audit-retained; actions: enforce joining-case correlation, assignment scope, canonical Partner binding, Partner/Store relationship, version, idempotency and audit.
- technical presentation binding — required implementation evidence; states: loading, ready, offline, forbidden, conflict, partial, error; actions: map contracts, coordinate mutations, normalize readback, present recovery/correction actions.
