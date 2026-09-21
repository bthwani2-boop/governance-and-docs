# Beneficiary Earnings and Settlement

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/finance/beneficiary-earnings-settlement.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: BENEFICIARY_EARNINGS_SETTLEMENT

## Outcome

Partner, Captain and Field financial entitlements are derived from canonical qualifying events and move through one governed WLT payout/settlement lifecycle to reconciled completion or explicit exception.

## Ownership

WLT owns earnings ledger, beneficiary availability/holds, payout intent, official destination state, settlement snapshot, execution evidence and reconciliation.

## Invariants

- earnings are created from one explicit qualifying owner event and are idempotent;
- economic entitlement is distinct from the customer's payment-source allocation;
- Partner/Captain/Field surfaces do not create, update, deactivate, replace or select official-wallet destination master data; Finance owns the governed provisioning/change workflow;
- payout approval freezes an immutable beneficiary/destination/amount snapshot;
- external execution evidence is verified/reconciled before completion;
- an approved payout cannot silently follow a later destination change;
- Field earning policy defines the qualifying event explicitly; attribution/publication alone does not silently become the permanent reward law;
- no surface edits ledger balances directly.

## Failure and recovery

Insufficient eligible amount, destination verification failure, duplicate payout, execution timeout/unknown, statement mismatch and reconciliation exception remain explicit and recover through WLT canonical readback.
