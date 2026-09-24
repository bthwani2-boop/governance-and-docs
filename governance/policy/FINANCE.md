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

An external official wallet/payment provider is a rail, not BThwani balance truth.

```text
FundingIntent
→ provider evidence
→ reconciliation when needed
→ WLT internal balance credit
```

Checkout consumes WLT internal balance/cash allocation. It does not treat an external provider account as an internal checkout balance.

Provider timeout or missing confirmation is not automatic failure or success. Unknown outcomes remain unknown until reconciled, and another rail is not invoked while duplicate movement remains possible.

External provider Cash-In is currently admitted only for Customers and BThwani Captains. Customer funding and Captain funding are separately governed capabilities even when they share a CashInRail implementation. Partner, Field and Store-affiliated Partner Captain funding are not enabled by this admission. The provider rail never chooses the WLT wallet/accounting destination; the server-owned funding purpose does.

## COD exposure, collateral and remittance

Captain COD coverage is a risk hold, not ordinary settlement consumption.

```text
available_exposure
= governed collateral / eligible balance capacity
- active COD holds
- other governed exposure
```

- accepting a covered COD obligation creates/reserves a hold against available exposure;
- ordinary successful COD delivery/collection does not consume the Captain's collateral;
- the hold remains until the associated cash remittance/reconciliation closes the exposure;
- cash remittance closes the corresponding WLT cash receivable in the ledger and releases the governed hold;
- collateral/balance is debited only for an explicit governed shortage/default/loss or another independently authorized financial effect;
- Store-affiliated Partner Captain or Store-collected cash must not be silently treated as BThwani Captain cash custody.

Risk policy may require full collateral at one stage and a different exposure limit later; the architecture governs exposure capacity, not an eternal fixed percentage.

## Fees, discounts and commissions

Commercial fee bearer is versioned policy rather than an architectural constant. Where an external funding provider charges a fee, the policy may designate platform, customer or campaign funding as bearer.

Field acquisition reward has an explicit attributable eligibility/earning event. For the current approved target, the qualifying event is canonical `STORE_CLIENT_VISIBLE`; DSH proves that event and WLT records the resulting earning exactly once. Any later change requires an explicit versioned commercial policy and must not reinterpret historical earnings.

## Refunds, payouts and settlement

Refund eligibility derives from canonical operational facts and versioned financial policy. Where provider-side refund capability is not proven, a governed manual refund case may be used; provider capability is never inferred from provider name.

Beneficiary settlement uses:

```text
eligible amount
→ payout intent / hold
→ approved immutable beneficiary/destination snapshot
→ execution evidence
→ verification
→ reconciliation
→ completion or explicit exception
```

The current external payout execution method is manual transfer through the appropriate official wallet, not a provider payout API. WLT still derives the eligible amount, places/releases/finalizes holds, resolves and pins the verified destination, and controls every legal transition. Each transfer requires its own receipt/evidence attached to that transfer. An authoritative official-wallet statement is retained once per period or batch and its matched statement rows are linked to the relevant transfers; one statement may support multiple transfers. A generated XLSX may serve as a frozen execution artifact, but it never updates WLT accounting truth.

For the current approved target, Partner/Captain/Field surfaces are read-only for official-wallet destination master data. Finance creates or changes a destination through the authorized verification/approval workflow; beneficiaries cannot create, update, deactivate, replace or select a destination for payout. A destination change cannot rewrite an already approved payout snapshot.

Customer balance withdrawal is not a customer-facing or self-service payout capability. A rare exception begins with an Operations-recorded request and authorization/evidence; WLT resolves the eligible internal balance and reserves the approved amount. Authorized Finance staff approve and perform the manual external transfer, attach transfer-specific receipt evidence, and bind the transfer to the period/batch statement evidence. A different authorized operator independently reconciles the transfer and statement row. WLT reduces the customer liability only after required reconciliation; unknown, mismatched or unsupported outcomes remain held/open as an explicit exception. This process is distinct from Customer funding, Partner/Captain/Field earnings settlement and Captain COD remittance.

## Cross-owner reliability

If an operational owner event creates a financial effect:

```text
DSH proves canonical operational transition
→ durable idempotent handoff
→ WLT applies financial effect
→ WLT canonical readback
→ reconciliation of unknown/partial outcomes
```

Synchronous calls are not treated as a distributed transaction. A retry must preserve the same logical operation identity and cannot allocate a new financial identity merely because a commit result was ambiguous.

## Finance access

Every Finance workspace read and mutation requires the current Identity `finance` permission on the Operator session. The `operator` role alone is insufficient. Missing, stale or invalid permission evidence fails closed. The Finance commission-policy editor follows this boundary; each financial mutation remains attributed to its acting Operator and audited by its canonical owner. Customer withdrawal request intake belongs to the Operations owner and requires its own authorization; intake permission does not grant Finance approval, execution, reconciliation or ledger authority.
