# Partner, Captain and Field Earnings Settlement

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/finance/partner-captain-field-earnings-settlement.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT

## Outcome

Partner, BThwani Captain and Field financial entitlements are derived from their canonical qualifying events and move through one governed WLT payout/settlement lifecycle to reconciled completion or an explicit exception. Each Store's future settlement is routed to that Store's effective beneficiary. The Operator Finance workspace presents separate beneficiary sections while sharing the payout, execution and reconciliation controls that have the same financial semantics.

## Ownership

WLT owns the earnings ledger, Store-attributed economic allocation, Store effective-beneficiary assignment, beneficiary eligibility/holds, payout intent, official destination state, immutable approved settlement snapshot, payout pinning, settlement batch, transfer evidence and reconciliation. DSH supplies operational qualifying facts and Store relationship evidence; the Operator surface provides bounded intent and consumes WLT readback. Neither is a second financial writer.

## Qualifying events and journey participation

- BThwani Captain earnings are created from the qualifying delivery-completion event of `BTHWANI_CAPTAIN_DELIVERY` under an explicit versioned earning policy; dispatch acceptance alone never creates an earning.
- Partner entitlement arises from Store commission terms owned by `STORE_COMMERCIAL_AGREEMENT`; Store-retained proceeds and commission receivables follow the pickup/remittance rules owned by `ORDER_PAYMENT_COLLECTION`.
- Field acquisition reward is a one-time earning for a Field-attributed Partner joining case. Its qualifying event is the canonical `STORE_CLIENT_VISIBLE` visibility event owned by `PARTNER_ONBOARDING_STORE_PUBLICATION`; DSH proves that event and WLT records the resulting earning exactly once under an explicit versioned policy for the commercial Store Type of the first qualifying Store. A joining case can produce at most one Field acquisition reward regardless of additional Stores, repeated publication or visibility changes. The reward is financially distinct from per-Order Partner commission: Store Type may parameterize this Field reward only, while per-Order Partner commission is governed by the active Store-specific `STORE_COMMERCIAL_AGREEMENT` and never by a shared Store Type rate. Missing policy never falls back to another type or a default.
- a legal Order adjustment or exception that reverses the basis of a created earning produces an attributable entitlement reversal or hold in the earnings ledger, distinct from the customer payment refund/reversal treatment owned by `ORDER_PAYMENT_COLLECTION`;
- Captain COD remittance closure is owned by `ORDER_PAYMENT_COLLECTION`; remitting collected cash is receivable closure, never an earnings payout or balance Cash-In;
- Store-affiliated Partner Captain compensation and cash custody remain outside this capability and WLT unless a separately governed integration is explicitly admitted.

## Store effective beneficiary

Each Store settlement is routed to exactly one effective beneficiary: the Store owner by default, or an eligible verified staff beneficiary explicitly selected by the authorized Store owner.

- Store payout-recipient routing is owner-only; it is not a delegatable Store permission and is never implied by `finance_read` or `payout_request` delegated permissions owned by `STORE_SCOPED_ACCESS_DELEGATION`;
- a staff beneficiary must be eligible and verified at selection time against current DSH Store relationships and canonical Identity facts;
- the owner may change the effective future beneficiary only before payout pinning; payout approval pins the immutable beneficiary/destination/Store-allocation snapshot, and a later beneficiary or destination change never rewrites an approved or historical payout snapshot;
- revocation or suspension of a staff actor who is the current effective beneficiary never silently reroutes future payouts; WLT blocks or partitions the affected Store allocations and requires an explicit owner action — reselection or held reconciliation — before any further payout for that Store;
- a settlement batch groups only allocations with the same effective beneficiary and verified destination; a mixed-beneficiary aggregate payout request is rejected or partitioned, never merged;
- financial read permission, payout-request intent, Store payout-recipient routing, Finance approval, execution and reconciliation are distinct authorities.

## Invariants

- earnings are created from one explicit qualifying owner event and are idempotent;
- economic entitlement is distinct from the Customer's payment-source allocation;
- later versioned earning-policy changes must not reinterpret or duplicate historical earnings;
- outstanding Partner commission receivables from Store-collected pickup cash reduce that Partner's later eligible earnings before payout; they never offset another Partner's entitlement;
- a remaining Partner commission receivable may be cleared by a direct Partner remittance only after WLT records and reconciles the verified receipt;
- Store-collected sale proceeds already retained by the Partner do not become a second WLT Partner wallet credit;
- Partner/Captain/Field payout execution is currently a governed manual official-wallet transfer; a provider payout API is not implied;
- each external transfer has transfer-specific receipt/evidence, while a period/batch statement is retained once and matched statement rows may be linked to multiple transfers;
- generated spreadsheets are immutable execution artifacts and never a source of WLT financial truth;
- Partner, BThwani Captain and Field surfaces do not create, update, deactivate, replace or select official-wallet destination master data; Finance owns the governed provisioning/change workflow;
- official-wallet admission for Partner, BThwani Captain and Field collects a provider preference only. WLT derives the number and beneficiary name from current canonical Identity facts; stale Identity facts require reverification before payout approval or execution;
- a derived wallet number may be shown read-only; it is never an editable destination input;
- payout approval freezes an immutable beneficiary/destination/amount snapshot;
- external execution evidence is independently verified/reconciled before completion;
- an approved payout cannot silently follow a later destination change;
- attribution/publication alone does not silently become the permanent reward law;
- no surface edits ledger balances directly.

## Failure and recovery

Insufficient eligible amount, destination verification failure, stale destination, duplicate payout, mixed-beneficiary aggregate request, stale beneficiary assignment, staff beneficiary revocation, execution timeout/unknown, missing receipt, statement mismatch, duplicate statement import and reconciliation exception remain explicit and recover through WLT canonical readback; payouts for an affected Store remain blocked or partitioned until the required owner action completes.
