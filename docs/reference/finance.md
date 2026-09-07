# External References — Finance and Payments

DOCUMENT_CLASS: NON_AUTHORITATIVE_EXTERNAL_REFERENCE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE
ADOPTION_AUTHORITY: NONE
REFERENCE_FRESHNESS: REVALIDATE_AT_USE
LICENSE_RECHECK_ON_ADOPTION: REQUIRED
SECURITY_SUPPLY_CHAIN_RECHECK_ON_ADOPTION: REQUIRED

## Use

Use for payment lifecycle, ledger invariants, idempotency, unknown outcomes, settlement/payout and reconciliation falsification. Financial references are invariant oracles, not automatic WLT replacements.

Choose a reference by the question being falsified. Stop when additional references no longer change the owner/boundary, invariant, failure/recovery model, UX/security requirement, implementation option or test case.

Reference selection never authorizes dependency/provider adoption.

## References

- Stripe docs — https://docs.stripe.com/
- Adyen docs — https://docs.adyen.com/
- TigerBeetle — https://github.com/tigerbeetle/tigerbeetle and https://docs.tigerbeetle.com/
- Formance Ledger — https://github.com/formancehq/ledger and https://docs.formance.com/
- Blnk — https://github.com/blnkfinance/blnk and https://docs.blnkfinance.com/
- Apache Fineract — https://github.com/apache/fineract

## Boundary

Extract behavior/invariants/failure cases, not vendor naming, topology, extra Product breadth or generic abstractions. Any code/tool/provider adoption returns to current BThwani Governance and executable dependency/configuration truth.
