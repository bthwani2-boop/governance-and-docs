# Partner, Captain and Field Earnings Settlement

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/finance/partner-captain-field-earnings-settlement.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT

## Outcome

Partner, BThwani Captain and Field financial entitlements are derived from their canonical qualifying events and move through one governed WLT payout/settlement lifecycle to reconciled completion or an explicit exception. The Operator Finance workspace presents separate beneficiary sections while sharing the payout, execution and reconciliation controls that have the same financial semantics.

## Ownership

WLT owns earnings ledger, beneficiary eligibility/holds, payout intent, official destination state, immutable approved settlement snapshot, settlement batch, transfer evidence and reconciliation. DSH and Control Panel provide operational facts or bounded intent and consume WLT readback; they are never a second financial writer.

## Invariants

- earnings are created from one explicit qualifying owner event and are idempotent;
- economic entitlement is distinct from the Customer's payment-source allocation;
- outstanding Partner commission receivables from Store-collected pickup cash reduce that Partner's later eligible earnings before payout; they never offset another Partner's entitlement;
- a remaining Partner commission receivable may be cleared by a direct Partner remittance only after WLT records and reconciles the verified receipt;
- Store-collected sale proceeds already retained by the Partner do not become a second WLT Partner wallet credit;
- Partner/Captain/Field payout execution is currently a governed manual official-wallet transfer; a provider payout API is not implied;
- each external transfer has transfer-specific receipt/evidence, while a period/batch statement is retained once and matched statement rows may be linked to multiple transfers;
- generated spreadsheets are immutable execution artifacts and never a source of WLT financial truth;
- Partner, BThwani Captain and Field surfaces do not create, update, deactivate, replace or select official-wallet destination master data; Finance owns the governed provisioning/change workflow;
- payout approval freezes an immutable beneficiary/destination/amount snapshot;
- external execution evidence is independently verified/reconciled before completion;
- an approved payout cannot silently follow a later destination change;
- Field earning policy defines the qualifying event explicitly; attribution/publication alone does not silently become the permanent reward law;
- Store-affiliated Partner Captain compensation and cash custody remain outside this capability and WLT unless a separately governed integration is explicitly admitted;
- no surface edits ledger balances directly.

## Failure and recovery

Insufficient eligible amount, destination verification failure, duplicate payout, execution timeout/unknown, missing receipt, statement mismatch, duplicate statement import and reconciliation exception remain explicit and recover through WLT canonical readback.
