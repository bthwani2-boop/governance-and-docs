# Change and Reconstruction Method

DOCUMENT_CLASS: NON_NORMATIVE_METHOD_GUIDE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

## Safety before mutation

Before a material write, re-pin exact repository/ref/HEAD, prove expected target identity, and distinguish repository permission from environment/operation authorization. Credentials, authenticated tools, connected devices and reachable endpoints are capability, not authorization.

Production, destructive durable data/provider/release/credential/financial/break-glass effects require explicit target-specific human authorization.

For high-impact or externally consequential mutations: prepare/read-only assessment → revalidate authority → apply once → read back/reconcile. Never blind-retry an ambiguous external or financial effect.

## Canonical change

~~~text
DEFINE REQUIRED WINNER
→ PRESERVE REQUIRED TRUTH / EXTERNAL IDENTITY
→ BUILD OR REFOUND
→ MIGRATE / BACKFILL / RECONCILE
→ CUT OVER WRITERS / READERS / CONSUMERS
→ VERIFY CANONICAL READBACK
→ DELETE LOSERS / RESIDUE
~~~

Patch when the current owner/boundary/model is sound. Refound when the structure itself is the defect.

## Complete affected cone

Account for materially affected owner/domain, data/migrations, contracts/events/generated bindings, runtime/config/provider, required surfaces/consumers, security/privacy/finance, failure/unknown/recovery/readback and assurance/tests.

## Donor reconstruction

Donor/history is read-only evidence. Extract required semantic atoms, external identities, compatibility obligations, proven reusable patterns/assets and failure/recovery lessons. Do not copy donor topology or feature breadth because it existed.

## Cleanup

Once a losing writer/reader/adapter/wrapper/test/config path no longer owns required truth, live compatibility or migration value, delete it. Git history is the archive. Do not repackage garbage into legacy/common/core/shared wrappers.

## Parallel work

Parallel mutation is valid only for proven non-overlapping cones. Shared mutable owners, databases, contracts, runtime/export surfaces or integration targets require coordination/serialization. Reconcile foreign HEAD movement before writing.
