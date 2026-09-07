# Account Privacy Lifecycle

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/access/account-privacy-lifecycle.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
PARENT_CAPABILITY_INDEX: governance/product/CAPABILITIES.md
CAPABILITY_ID: ACCOUNT_PRIVACY_LIFECYCLE

## Scope

This file is the sole editable durable semantic owner of the customer account/privacy-request lifecycle and cross-owner completion semantics for `ACCOUNT_PRIVACY_LIFECYCLE`. It does not become a second owner of Identity credentials/roles, DSH customer/profile fields, WLT financial records, provider data or legal retention policy. Sovereign owners apply their own governed disposition and report completion evidence back to this lifecycle.

### ACCOUNT_PRIVACY_LIFECYCLE

**Problem.** Customer self-service account creation creates an ongoing privacy/account lifecycle. Treating deletion as store-submission metadata, a support-only message, a local UI toggle or a destructive database cascade can leave credentials active, retain undeclared personal data, erase required financial/audit evidence, delete unrelated roles of the same Human Actor, or claim completion before sovereign owners converge.

**Required outcome.** A customer can initiate the currently required account/privacy request through applicable customer-facing entrypoints; the request is safely verified, idempotently tracked, executed through sovereign owners, reconciled and exposed through truthful terminal readback. Mutable distribution/legal entrypoint mechanics remain current external-policy/Docs truth rather than frozen Product semantics.

**Primary actors.** customer; authorized support/operator only when assistance is explicitly permitted.

**Canonical ownership.** DSH owns the customer account/privacy-request workflow, correlation and cross-owner completion state. Identity remains sole owner of `actor_id`, client-role admission, credentials, verification and sessions. DSH customer/profile owners remain writers of their customer data. WLT remains sole writer of financial/audit/reconciliation truth. Other processors/providers remain subordinate to the owner that shared the data.

**Material deployable surfaces.** app-client; an external request surface when current distribution/legal policy requires one; control-panel only for explicitly authorized support/diagnosis.

**Durable states/actions.**
- request lifecycle distinguishes `requested`, `verification_required`, `accepted`, `processing`, `completed`, `completed_with_required_retention`, `rejected` and recoverable failure/conflict where materially applicable;
- request creation uses stable correlation/idempotency identity and cannot create duplicate destructive work;
- requester verification proves authority to act on the customer account without exposing unrelated account/role existence;
- accepted deletion makes the client account non-usable according to governed cutover while sovereign owners complete their dispositions;
- Identity client-session/credential/access disposition is independent from unrelated roles held by the same Human Actor;
- each owner reports an attributable disposition such as deleted, anonymized, retained-for-governed-obligation, not-applicable or unresolved;
- terminal completion requires reconciliation of all required owner/processor effects or an explicit unresolved blocker;
- a data-access/export action is admitted only when a Product/legal requirement actually requires it; any export is owner-derived, privacy-scoped and never a second truth store.

**Business invariants**
- customer account deletion is not automatic deletion of the Human Actor;
- customer account deletion is not automatic revocation/deletion of partner, captain, field, operator or platform-owner roles;
- disabling/deactivating the customer account without required deletion/anonymization is not represented as completed deletion;
- financial, fraud, audit, dispute, security or regulatory records survive only under their owning retention rule and do not keep ordinary customer access active;
- deletion/anonymization follows canonical owner contracts; DSH does not directly edit Identity or WLT private storage;
- third-party processor/provider deletion follows the owning domain's contract/provenance and remains unresolved until the required external effect is known;
- user-facing completion never claims more deletion than evidence proves.

**Forbidden/negative invariants**
- No raw cross-service delete cascade or operator SQL as the normal deletion path.
- No public deletion endpoint usable for account enumeration or unauthorized deletion.
- No stale verification proof reused after request/credential/security context changes.
- No deletion request silently destroys unrelated Human Actor roles.
- No DSH mutation of WLT ledger/payment/settlement/audit truth for privacy convenience.
- No indefinite retention without a governed purpose/owner.
- No store-form answer or local settings toggle counts as Product deletion evidence.
- No retained personal data hidden behind a generic `required` label without an owning retention reason.

**Failure/recovery.** Verification failure, idempotency conflict, owner unavailable, provider/processor unknown result, version conflict and required-retention disposition remain explicit. Retry resumes the same request when safe rather than creating duplicate destructive work. Reconciliation rereads every required sovereign owner/processor result before terminal completion.

**Acceptance expectations.**
- the customer can discover and initiate the applicable deletion/privacy request path without support improvisation where self-service is required;
- requester verification and confirmation protect against accidental/unauthorized deletion without unreasonable lock-in;
- accepted deletion ends customer access according to Identity/client-role semantics and does not affect unrelated actor roles;
- DSH customer/profile data reaches its governed deletion/anonymization/retention disposition;
- WLT/financial/audit data remains solely WLT-owned and retained/anonymized only according to applicable governed obligations;
- required external processor effects are tracked and unknown outcomes remain visible/reconcilable;
- final readback distinguishes completed deletion from completed-with-required-retention and unresolved states without leaking unnecessary sensitive detail.

**Named failure classes:** account_deletion_as_store_checkbox, unauthorized_deletion_request, deletion_account_enumeration, duplicate_destructive_request, actor_deleted_with_unrelated_roles, credentials_left_active_after_accepted_deletion, profile_data_retained_without_owner, required_financial_audit_record_erased, dsh_mutates_wlt_for_privacy, processor_deletion_unknown_claimed_complete, deletion_disabled_only_not_deleted, privacy_export_shadow_truth.

**Actor responsibility envelope**
- `customer` — initiates/verifies only the owned customer account/privacy request and reads privacy-safe status.
- `operator` — assists only through explicitly authorized, audited support/diagnostic actions; never bypasses owner contracts.
- `DSH privacy lifecycle` — canonical request/correlation/orchestration/completion writer; calls sovereign owner contracts and reconciles dispositions.
- `Identity` — canonical writer for client-role credentials/sessions/access and Human Actor identity semantics; preserves unrelated roles unless separately governed.
- `DSH customer/profile owners` — canonical writers for their own customer-data disposition.
- `WLT` — canonical writer for financial/audit/reconciliation disposition and required retention.
- `external processor/provider` — executes only bounded processor effects requested by its owning domain; never becomes privacy Product authority.

**Surface semantics**
- `app-client` — required when self-service privacy action is applicable; states: ready, confirmation, verification_required, processing, completed, completed_with_required_retention, recoverable_error.
- `external request surface` — conditional on current distribution/legal policy; safe initiation/status only, never second account truth.
- `control-panel` — conditional authorized support/diagnosis only; no arbitrary delete/edit.
- `backend` — required; verifies caller/intent, persists idempotent lifecycle, invokes owner contracts, reconciles results and returns privacy-safe readback.
- `database` — DSH-owned request/correlation/audit lifecycle only; sovereign Identity/WLT/customer facts remain with their owners.
- technical presentation binding — implementation evidence only; no local privacy/account truth.

**Target state.** One DSH-owned customer privacy-request lifecycle coordinates sovereign-owner dispositions without deleting unrelated roles, bypassing retention obligations or claiming completion before canonical reconciliation.

**Primary success measure.** verified account/privacy requests reach truthful reconciled terminal status across all required owners.

**Guardrail measures.** unauthorized requests; duplicate destructive work; unrelated-role deletion; retained customer access after accepted deletion; undeclared retention; financial/audit corruption; processor unknown outcome falsely closed.
