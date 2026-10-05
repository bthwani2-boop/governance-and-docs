# Financial Integrity Policy

ARTIFACT_CLASS: DURABLE_CROSS_CUTTING_POLICY
SEMANTIC_OWNER: governance/policy/FINANCE.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

WLT is the sole authoritative owner of internal financial truth for every admitted financial effect. DSH/surfaces may express intent or consume bounded WLT-backed readback; providers are external rails, never the internal ledger.

## Money representation

For the current YER Product:

```text
AuthoritativeMoney:
  amount_minor: exact integer
  currency: YER

1 amount_minor = 1 YER
```

Authoritative monetary arithmetic never uses binary floating point. Rounding is server-owned and follows the applicable versioned policy.

Basis points are applied as:

```text
raw = amount × rate_bps / 10_000
result = apply_rounding_policy(raw)
```

## Financial ownership and conservation

- authoritative amounts are server-derived from trusted owner facts and applicable versioned policy;
- client totals/screenshots/provider labels are never financial truth;
- every value-changing operation is authenticated, authorized, idempotent, concurrency-safe, correlated and auditable;
- DSH references/projections never become a second ledger or mutable balance authority;
- one financial effect has one WLT owner path and one canonical readback.

Customer payment allocation and beneficiary/settlement allocation answer different questions and must not be collapsed.

```text
CustomerPaymentAllocation
→ how the customer's payable amount is funded
→ internal balance and/or cash for currently admitted checkout sources

SettlementAllocation
→ how economic entitlement/funding is distributed
→ merchant proceeds / commissions / delivery earnings / discounts / subsidies / refunds / adjustments
```

A platform-funded discount is a funding source for the merchant entitlement; it is not an extra copy of product value.

## External funding and internal balance

An external official wallet/payment provider is a rail, not BThwani balance truth. External funding becomes WLT internal balance only through the admitted funding capabilities (`CUSTOMER_BALANCE_FUNDING`, `CAPTAIN_BALANCE_FUNDING`), which own their admission scopes. Checkout consumes WLT internal balance/cash allocation; it does not treat an external provider account as an internal checkout balance. The provider rail never chooses the WLT wallet/accounting destination; the server-owned funding purpose does.

Provider timeout, unknown outcome and duplicate-movement law is owned by `governance/policy/INTEGRATIONS.md`; retry, idempotency and reconciliation law is owned by `governance/policy/RELIABILITY.md`.

## Fees and commissions

Commercial fee bearer is versioned policy rather than an architectural constant. Where an external funding provider charges a fee, the applicable versioned policy designates the bearer from currently admitted funding sources.

Field acquisition reward is owned by `PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT`, including its `STORE_CLIENT_VISIBLE` qualifying event, exactly-once admission and Store-Type-parameterized versioned policy. Later versioned-policy changes must not reinterpret or duplicate historical earnings of any admitted earning class.

## Refunds, payouts and settlement

Refund eligibility derives from canonical operational facts and versioned financial policy; the governed manual refund case and the provider-capability proof rule are owned by `ORDER_PAYMENT_COLLECTION`.

Beneficiary settlement uses one cross-cutting WLT shape:

```text
eligible amount
→ payout intent / hold
→ approved immutable beneficiary/destination snapshot
→ execution evidence
→ verification
→ reconciliation
→ completion or explicit exception
```

Payout execution method, destination derivation from canonical Identity facts, destination governance, statement/receipt evidence and beneficiary rules are owned by `PARTNER_CAPTAIN_FIELD_EARNINGS_SETTLEMENT`. Client-supplied phone, name or wallet data never creates or changes an official-wallet destination.

Customer balance withdrawal is not a customer-facing or self-service payout capability; it is a separately authorized exception workflow owned by `CUSTOMER_BALANCE_MANUAL_WITHDRAWAL`, distinct from Customer funding, Partner/Captain/Field earnings settlement and Captain COD remittance.

## Cross-owner reliability

If a DSH-proven operational transition creates a financial effect, WLT applies it idempotently with one canonical readback and reconciliation of unknown/partial outcomes. The cross-owner handoff, retry and unknown-outcome laws are owned by `governance/system/SYSTEM.md` and `governance/policy/RELIABILITY.md`. A synchronous call is not a distributed transaction, and an ambiguous commit result never allocates a new financial identity.

## Finance access

Finance workspace authorization follows the Operator permission boundaries owned by `IDENTITY_ACTIVATION_SESSIONS`; the `operator` role alone is never sufficient. Customer withdrawal request intake follows the Operator authorization model owned by `IDENTITY_ACTIVATION_SESSIONS` and the request-record ownership owned by `CUSTOMER_BALANCE_MANUAL_WITHDRAWAL`; intake permission never grants Finance approval, execution, reconciliation or ledger authority.
