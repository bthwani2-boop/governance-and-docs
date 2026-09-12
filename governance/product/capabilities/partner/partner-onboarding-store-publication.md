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

**Problem.** Partner onboarding, first-Store readiness, approval and publication must form one governed journey with authenticated actors, server-resolved Store scope and explicit canonical ownership instead of disconnected surface-specific records and manual checks. The `field` role and `app-field` exist only to perform the field-assisted portion of this onboarding journey when policy requires a field visit, verification, document capture or evidence collection.

**Problem frequency.** continuous

**Problem severity.** critical

**Target state.** Every mutation is trusted-context derived, Partner/Store scoped, authorization-scoped, concurrency-safe, idempotent, audited and readable on required surfaces.

**Primary success measure.** percentage of submitted Partner onboarding cases reaching a governed terminal decision without manual cross-system reconciliation.

**Guardrail measures.** zero cross-Partner/Store document, visit or audit reads/writes; zero Stores reassigned between Partners outside an explicit transfer journey; zero raw payout account identifiers returned by DSH; zero client-visible Stores failing any publication gate; zero duplicate transition audit events for identical retries.

**Required outcome.** A Partner can be onboarded from an authorized onboarding case to a client-visible first Store through one traceable trusted-context-aware state model. When policy requires field assistance, an authorized Field actor works only on the assigned Partner/first-Store onboarding case, captures required visit/check/document/evidence data and submits it for owner review. Operator-managed onboarding may proceed without manufacturing a Field task when policy does not require field assistance. WLT exclusively owns raw payout details whenever payout setup is applicable.

**Primary actors.** Partner, control-operator, client; Field actor only for the field-assisted Partner/first-Store onboarding subflow.

**Canonical ownership.** DSH owns Partner/Store onboarding operational truth, including any field-assisted onboarding assignment, visit, checklist and evidence state; WLT owns payout-destination truth; Identity owns trusted identity/session context.

**Partner model invariant.** `Partner` is the authenticated `partner` actor identified by `actor_id`. This capability must not create `Partner Organization`, `Partner Member`, partner-team membership, a second Partner identifier, or another Partner ownership layer. A Store is a DSH resource directly related to its Partner actor.

**Boundary/non-overlap.** Field-assisted onboarding is a subflow of this capability, not a separate Field Operations capability. Every field assignment/visit/check/evidence record must be bound to an authorized Partner/first-Store onboarding case. The Field actor may collect and submit onboarding evidence but cannot activate/publish a Partner or Store. `CENTRAL_CATALOG` separately owns taxonomy/master-product/assortment/catalog publication; customer visibility requires all applicable owners to pass.

**Material deployable surfaces.** app-client, app-partner, control-panel; app-field only for onboarding increments/policies that require field-assisted Partner/first-Store evidence capture.

**Business invariants**
- Every onboarding child record is bound to the exact Partner `actor_id` and Store scope required by the current model.
- One Partner may manage multiple Stores; one Store belongs to one Partner unless an explicit transfer capability changes that relationship.
- Every Field assignment/visit/check/evidence record is subordinate to one authorized Partner/first-Store onboarding case; no unrelated/general Field task may be created under the `field` role.
- Control-panel approval is distinct from Field evidence capture.
- WLT is the sole owner of raw payout destination data.
- Client visibility is a Store publication outcome, not merely a Partner status label.
- Every material transition records the actor, trusted context, business scope, correlation, retry and audit data required by current contracts.

**Forbidden/negative invariants**
- No `Partner Organization`, `Partner Member`, partner-team membership, organization/store-membership layer, or parallel Partner identity may be introduced by this capability.
- Client-controlled input cannot select or grant trusted business/authorization scope.
- Missing required trusted context cannot silently fall back inside Partner handlers.
- One Partner/Store scope cannot enumerate, read, link, mutate or infer another unauthorized Store scope.
- No standalone/general Field Operations capability, unrelated Field assignment or non-onboarding Field task may be created from the `field` role or `app-field`.
- A Field actor cannot approve their own evidence where separation is required.
- A Partner cannot bypass Store publication gates.
- A Store cannot be reassigned by a generic link operation.
- DSH cannot persist raw payout account data after binding a WLT reference.
- A stale version cannot mutate Partner state.
- A reused idempotency key cannot represent a different payload.
- A Store failing any applicable publication gate cannot appear to clients.

**Acceptance expectations**
- Business and authorization scope is derived server-side from authenticated identity plus canonical owner facts; browser headers, query parameters and request bodies cannot grant or override it.
- Requests requiring trusted context fail closed when it is absent and do not reach persistence.
- Partner, documents, visits, Stores, assignments/scopes, transitions and audit records are read or mutated only within trusted context plus object/business authorization.
- Cross-scope Partner/Store identifiers do not disclose ownership details.
- Field actors can create, resume, save and submit only assigned or authorized Partner/first-Store onboarding drafts/evidence; they cannot receive unrelated operational tasks through the Field role.
- Submission/publication is blocked until legal, first-Store and other prerequisites applicable to the active onboarding policy are complete.
- A WLT payout reference is required before the first state/financial action whose commercial model actually needs payout-destination truth; it is not a universal Store-publication prerequisite for models that create no such payout obligation.
- Documents, Field evidence and independent review are required exactly when the active onboarding/publication policy marks them mandatory; missing applicable evidence always fails closed.
- Client publication requires every applicable Partner, Store, catalog, marketing and serviceability gate.
- A Store already owned by one Partner cannot be linked to another through a generic onboarding operation.
- Identical transition and payout retries replay the original result; payload changes under the same idempotency identity are rejected.
- DSH persists and returns only WLT payout references or masked compatibility values allowed by the current contract.
- Partner and control-panel surfaces read back committed activation and readiness state.

**Named failure classes:** trusted context selected from client-controlled input, missing trusted context accepted, cross-scope record disclosure/mutation, raw payout data stored or returned by DSH, Store ownership silently changed, publication without all applicable gates, approval without required evidence, payload-divergent retry accepted, surface reports success before committed readback, unrelated/general Field task admitted, duplicate Partner identity/model admitted.

**Actor responsibility envelope**
- `Field` — when a field-assisted onboarding policy is active, works only on the assigned Partner/first-Store onboarding case; permitted: capture Partner/first-Store profile, perform required visit/checks, upload required documents/evidence, submit evidence for review; forbidden: unrelated/general Field operations, self-assign privileged work, approve own evidence, publish a Store, reassign another Partner's Store, write financial ledger/settlement truth, override trusted scope. No Field task is fabricated when policy does not require field assistance.
- `Partner` — reads governed activation, readiness and Store scope for the authenticated `partner` actor; permitted: read own activation/readiness/Stores and operate authorized Store/catalog/order capabilities; forbidden: self-approve onboarding, override publication gates, read raw payout identifiers from DSH, access another Partner's Store scope.
- `control-operator` — reviews documents/evidence and applies governed activation/publication decisions through exact server-side permissions; forbidden: bypass readiness gates, reassign another Partner's Store, persist raw payout identifiers in DSH, mutate WLT ledger truth, access records outside authorization.
- `client` — discovers a Store only after all applicable publication gates are satisfied; forbidden: discover hidden/unready Stores or read private onboarding data.

**Surface semantics**
- `app-client` — required; actors: client; states: loading, empty, ready, offline, error; actions: discover published Store, open public Store detail.
- `app-partner` — required; actors: Partner; states: loading, blocked, in-review, active, hidden, deactivated, error; actions: read own status, readiness and Store scope; operate capabilities admitted after readiness.
- `app-captain` — excluded; states: out-of-scope; exclusion reason: Captain assignment and fulfillment begin after Store publication.
- `app-field` — conditional; required only when the active Partner-onboarding policy/increment requires field assistance; actors: Field; states: blank, draft, saving, conflict, offline, blocked, submitted, error; actions: open assigned onboarding case, save draft, capture Partner/first-Store data, perform required visit/checks, upload required document/evidence, submit for review. No non-onboarding action is admitted.
- `control-panel` — required; actors: control-operator; states: loading, empty, ready, forbidden, conflict, readiness-blocked, error; actions: review evidence, apply allowed transition, read audit.
- `backend` — required; actors: Field, Partner, control-operator, client; states: authorized, trusted-context-required, not-found, forbidden, conflict, readiness-blocked, idempotent-replay, service-unavailable; actions: authenticate, derive trusted context, authorize, validate, persist, audit, handoff to WLT, read back.
- `database` — required; states: scope-isolated, consistent, conflict-rejected, single-active-payout, audit-retained; actions: enforce Partner actor/Store relation, version, idempotency and audit.
- technical presentation binding — required implementation evidence; states: loading, ready, offline, forbidden, conflict, partial, error; actions: map contracts, coordinate mutations, normalize readback, present recovery actions.
