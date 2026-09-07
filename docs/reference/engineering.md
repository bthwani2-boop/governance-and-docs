# External References — Engineering

DOCUMENT_CLASS: NON_AUTHORITATIVE_EXTERNAL_REFERENCE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE
ADOPTION_AUTHORITY: NONE
REFERENCE_FRESHNESS: REVALIDATE_AT_USE
LICENSE_RECHECK_ON_ADOPTION: REQUIRED
SECURITY_SUPPLY_CHAIN_RECHECK_ON_ADOPTION: REQUIRED

## Use

Use for API contracts, generation, integration/fault testing, telemetry, supply-chain and runtime engineering falsification.

Choose a reference by the question being falsified. Stop when additional references no longer change the owner/boundary, invariant, failure/recovery model, UX/security requirement, implementation option or test case.

Reference selection never authorizes dependency/provider adoption.

## References

- OpenAPI Specification — https://spec.openapis.org/oas/latest.html
- Redocly docs — https://redocly.com/docs/
- Schemathesis — https://github.com/schemathesis/schemathesis
- Testcontainers-Go — https://github.com/testcontainers/testcontainers-go
- OpenTelemetry — https://opentelemetry.io/docs/
- Sentry docs — https://docs.sentry.io/
- k6 — https://github.com/grafana/k6
- SLSA — https://slsa.dev/

## Boundary

Extract behavior/invariants/failure cases, not vendor naming, topology, extra Product breadth or generic abstractions. Any code/tool/provider adoption returns to current BThwani Governance and executable dependency/configuration truth.
