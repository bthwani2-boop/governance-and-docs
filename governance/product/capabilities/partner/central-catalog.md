# Central Catalog

ARTIFACT_CLASS: DURABLE_PRODUCT_CAPABILITY_GOVERNANCE
SEMANTIC_OWNER: governance/product/capabilities/partner/central-catalog.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE
CAPABILITY_ID: CENTRAL_CATALOG

## Outcome

DSH owns one canonical catalog and Store-assortment publication truth so Partner operations and customer discovery cannot fork item/category/availability meaning.

## Invariants

- catalog identity and Store assortment have one canonical DSH writer;
- Partner mutates only authorized Store catalog/assortment material;
- customer visibility requires current Store publication plus catalog/assortment eligibility;
- stale-version and materially different retry payloads are rejected;
- search/index/cache/local UI flags are derived and never publication authority;
- media/object storage owns bytes only, never catalog eligibility.

## Minimal lifecycle

DRAFT or PROPOSED → VALIDATED → PUBLISHED, with REJECTED / NEEDS_CORRECTION / HIDDEN branches only when required.

Do not add marketing, loyalty, promotion or advanced master-catalog stages until current Product need proves them.

## Failure and recovery

Duplicate identity, stale version, invalid assortment relation and publication-gate failure recover from canonical DSH readback; derived consumers are rebuildable.

## Material surfaces

`app-partner`, `control-panel` when owner review is required, `app-client` read-only discovery, DSH backend/database.
