# Wlt Money Movement Payout Reconciliation

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/finance/wlt-money-movement-payout-reconciliation.md
EXECUTION_AUTHORITY: NONE
CLOSURE_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
PARENT_CAPABILITY_INDEX: governance/product/CAPABILITIES.md
CAPABILITY_ID: WLT_MONEY_MOVEMENT_PAYOUT_RECONCILIATION

## Scope

This file is the **sole editable durable semantic owner** of `WLT_MONEY_MOVEMENT_PAYOUT_RECONCILIATION`. Capability taxonomy/schema/admission law remains in `../../CAPABILITIES.md`; cross-capability journey semantics remain in `../../JOURNEYS.md`.

### WLT_MONEY_MOVEMENT_PAYOUT_RECONCILIATION

**Problem.** BThwani needs one governed financial capability that preserves WLT-owned internal wallet truth while safely connecting official-wallet Cash-In, captain COD exposure, stakeholder earnings and governed external settlements without duplicate money movement, parallel ledgers, unverifiable completion, beneficiary-controlled payout master data or manual authoritative financial arithmetic.
**Problem frequency.** continuous
**Problem severity.** critical
**Target state.** Cash-In, payment allocation, captain COD, admitted stakeholder earnings, destination master data, payout eligibility, governed manual external settlement, evidence, reconciliation and financial close use one WLT-owned financial truth.
**Primary success measure.** share of financial movements with complete automatically derived WLT ledger lineage and required external evidence and reconciliation lineage
**Guardrail measures.** beneficiary financial-master-data mutation path count; manual authoritative monetary override path count; unverified-destination payout count; duplicate financial effect count; unreconciled completed payout count; direct balance mutation path count; ambiguous-provider duplicate attempt count; blocking finance exposure at close; cross-context financial disclosure count

**Required outcome.** Every money movement and stakeholder financial view is derived from trusted operational events and approved WLT policy, attributable to one WLT-owned wallet and ledger truth and, where external money moves, to one authoritative provider or governed manual-settlement evidence chain through reconciliation and close.

**Primary actors.** client, captain, partner, finance-operator, system; field only when admitted Partner-joining compensation creates WLT payout state.

**Canonical ownership.** WLT financial truth; DSH application facade; Identity trust context.

**Boundary/non-overlap.** WLT_MONEY_MOVEMENT_PAYOUT_RECONCILIATION owns common wallet/ledger movement, Cash-In/COD, payout execution and reconciliation. Commission/settlement calculation policy and its evidence-derived lifecycle remain in SETTLEMENTS_COMMISSIONS; shared ledger primitives do not create two writers for the same posting.

**Material deployable surfaces.** app-client, app-captain, app-partner, control-panel; app-field only when applicable compensation payout exists.

**Business invariants**
- WLT is the sole internal financial truth owner and every value-changing movement is represented by the canonical double-entry ledger.
- Authoritative monetary values are system-derived from trusted events and versioned policy; human actions express governed intent or evidence, not accounting arithmetic.
- Official external wallets move external money but do not own internal BThwani balances, liabilities or settlement state.
- There is one internal wallet per financially admitted actor; role existence alone does not create one.
- Partner and Captain use the common payout engine when eligible. Field uses it only for WLT-admitted Partner acquisition/onboarding compensation.
- Payout destination data is read-only on beneficiary surfaces and controlled as WLT-owned Finance master data.
- Order payment composition and COD exposure are server-owned financial facts.
- The current production Cash-Out model is governed manual external official-wallet settlement; automated payout requires a separately approved capability.
- Unknown or conflicting external outcomes remain reconcilable until authoritative evidence resolves them.

**Forbidden/negative invariants**
- No DSH or frontend component writes WLT balances or ledger truth.
- No beneficiary surface mutates official-wallet destination master data.
- No client or finance surface directly supplies an authoritative earning commission fee balance hold payable settlement total or full-payout amount.
- No provider name determines the internal ledger account or stakeholder entitlement.
- No screenshot spreadsheet or unverified file row creates financial success.
- No unverified or silently changed destination receives payout.
- No frozen batch or approved payout snapshot is edited in place.
- No second provider is invoked for the same ambiguous external mutation before reconciliation.
- No legacy COD custody/remit path and captain-wallet debit path both account for the same order value.
- No daily financial close hides unresolved blocking exposure or mismatched control totals.
- No Field payout eligibility exists without canonical WLT compensation derived from Partner-joining evidence.

**Acceptance expectations**
- WLT remains the sole writer of wallet balances, ledger transactions, payments, refunds, commissions, payouts, settlements and reconciliation truth.
- Authoritative monetary values are derived server-side from trusted events, canonical state and versioned policy; no beneficiary or finance UI directly overrides them.
- Each financially admitted actor has one canonical internal WLT wallet; held pending earned settled and withdrawal-eligibility values are states or projections, not parallel wallets.
- Cash-In credits an internal wallet only after authoritative provider evidence is verified and normalized.
- Mock or sandbox provider behavior cannot be selected as a production fallback.
- Every applicable order has one server-owned payment allocation that conserves the governed order total and prevents duplicate delivery-fee treatment.
- Captain COD authorization is order-specific, atomic and idempotent; cancellation releases once and finalization debits once.
- The current captain-funded COD path cannot simultaneously create a second remittance liability for the same order value; any alternate custody model requires a separately approved Product/financial governance decision.
- Customer withdrawal and cash-out of externally funded principal remain disabled unless a separately approved product, legal and financial policy enables them.
- Field payout, when present, uses the common WLT engine and eligibility derived from canonical Partner-joining compensation; app-field cannot fabricate entitlement from case activity.
- Beneficiary surfaces expose payout destination information read-only and cannot create, update, deactivate, replace or select destination master data.
- Official-wallet destination master data is WLT-owned, versioned, encrypted and masked; only an independently verified active version is eligible for payout.
- Beneficiary payout intent contains only amount mode, optional specified amount, and idempotency context; WLT resolves beneficiary, eligible funds and current verified destination transactionally.
- Approved payout facts and frozen settlement batches are immutable; later destination changes cannot rewrite them.
- The current production Cash-Out model is governed manual external official-wallet settlement; automated payout requires a separately approved capability.
- Manual external execution records required reference and evidence and cannot expose a bare mark-paid transition.
- Final completion requires agreement between approved payout, frozen batch row, execution evidence and authoritative external statement; mismatch creates a blocking reconciliation exception.
- Financial separation of duties is enforced server-side according to active policy.
- Legitimate adjustments are typed governed WLT events with reason, evidence and authorization; there is no direct balance edit or generic monetary override.
- Blocking finance exceptions, missing required evidence, control-total mismatch or unresolved material reconciliation exposure prevent affected completion.
- Refund routing follows the authoritative original money source unless an explicit product policy states otherwise.
- An ambiguous external mutation result is reconciled before any new provider or route attempt can move the same money again.
- External official-wallet account balances are treasury control facts and never a second internal wallet ledger.

**Named failure classes:** parallel_financial_truth, direct_balance_mutation, manual_authoritative_financial_value, beneficiary_destination_mutation, beneficiary_selected_destination, client_asserted_success, client_computed_full_payout_amount, payment_allocation_mismatch, delivery_fee_double_count, cod_overcommit, cod_double_effect, field_role_fabricates_payout, unverified_destination, approved_snapshot_mutation, frozen_batch_mutation, bare_mark_paid, duplicate_external_reference, ambiguous_result_retried_elsewhere, unreconciled_completion, spreadsheet_as_truth, self_approval_bypass, blocking_exception_ignored, mock_in_production, source_unaware_refund, financial_close_with_unresolved_exposure.

**Actor responsibility envelope**
- `client` — Customer funding or paying through supported WLT-governed payment paths and reading only owned internal financial state; forbidden: assert top-up success, directly mutate wallet balance, select provider credentials, supply authoritative financial totals, withdraw internal balance unless separately approved.
- `captain` — Captain using one WLT internal wallet for approved funding, order-specific COD exposure, automatically derived earnings and governed settlement requests; forbidden: accept uncovered COD exposure, mutate reserve/balance locally, create/edit earning amount, mutate payout destination, complete external settlement locally.
- `partner` — Partner receiving WLT-calculated governed proceeds and requesting settlement to the current server-resolved approved official-wallet destination; forbidden: mutate destination, supply authoritative payable totals, edit approved payout snapshot, mark settlement paid.
- `field` — only when an admitted Partner acquisition/onboarding compensation policy creates WLT state; permitted: read own canonical compensation/wallet, masked current destination and request eligible payout; forbidden: infer entitlement from app-field activity, create/edit compensation value, mutate/select payout destination, exceed server-owned eligibility, complete external settlement.
- `finance-operator` — Permission-scoped operator performing governed master-data, approval, execution, evidence, reconciliation and close transitions; forbidden: directly edit wallet/ledger balances, override authoritative monetary truth, use bare mark-paid, bypass separation of duties.
- `system` — WLT-owned financial engine/provider adapters/reconciliation/policy enforcement producing canonical ledger, payout and audit truth from trusted events and approved policies.

**Surface semantics**
- `app-client` — required when applicable; states: loading, ready, pending, authoritative_success, reconciliation_required, failed, offline, forbidden, error; actions: create Cash-In intent, select supported payment route, read canonical result, inspect wallet history.
- `app-captain` — required when applicable; states: loading, eligible, insufficient_balance, cod_reserved, cod_released, cod_finalized, earning_posted, destination_unavailable, destination_verified, payout_held, payout_pending, error; actions: top up, read balance, accept eligible order, read automatic COD/earning effects, read masked payout destination, request payout.
- `app-partner` — required when applicable; states: loading, destination_unavailable, destination_verified, available, held, payout_pending, completed, error; actions: read wallet, read masked payout destination, request payout, read payout state.
- `app-field` — conditional on admitted Partner-joining compensation payout; states: loading, earned, destination_unavailable, destination_verified, held, payout_pending, completed, error; actions: read canonical Partner-joining compensation/wallet, read masked payout destination, request eligible payout, read payout state.
- `control-panel` — required; actors: finance-operator; states: loading, ready, blocked, needs_action, awaiting_approval, awaiting_execution, awaiting_evidence, awaiting_verification, awaiting_reconciliation, exception, closed, forbidden, error; actions: inspect server-calculated truth, govern destination/payout/execution/reconciliation according to policy.
- `backend` — required; states: authenticated, authorized, idempotent, reserved, held, approved, frozen, executed, evidenced, verified, reconciled, completed, unknown_external_result, blocked, exception; actions: derive trusted financial purpose/effects, enforce policy, post ledger, normalize provider evidence, reconcile, audit, fail closed.
- `database` — required; states: balanced, append_only, versioned, immutable_when_frozen, reconcilable, auditable, authorization_scope_isolated; actions: enforce uniqueness, balance invariants, history, replay consistency and destination-version provenance.
