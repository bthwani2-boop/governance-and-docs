# Donor and Refoundation Forensics

DOCUMENT_CLASS: NONAUTHORITATIVE_DONOR_REFERENCE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE
ADOPTION_AUTHORITY: NONE

## Purpose

Historical donor/new-repository branches are evidence mines, not target architecture. This reference preserves only the reusable forensic method discovered during refoundation.

Audited historical snapshots included the donor refoundation state around commit `14c2ef2fd5a0ffadda00d307c9dea81d5cf49799` and early Samrim knowledge/lifecycle states around `1074cf0e8bd0d3fc1248b4eac48e27f5a47545de` and `cb438c13587f1614cb0c38c135f716931c8f1c6e`. Those SHAs are historical evidence only.

~~~text
DONOR/HISTORY PATH = FORENSIC CLUE
DONOR/HISTORY PATH != TARGET PATH AUTHORITY
~~~

## Census before deletion

Inspect only material evidence capable of changing the authorized outcome:

~~~text
APPS / ROUTES / NAVIGATION
ENDPOINTS / CONTRACTS / EVENTS
SCHEMA / MIGRATIONS / CONSTRAINTS
BUSINESS INVARIANTS / STATE MACHINES
AUTHORIZATION / FINANCIAL FLOWS
PROVIDERS / JOBS / QUEUES / OUTBOX
NOTIFICATIONS / OFFLINE / WEAK NETWORK
NATIVE CAPABILITIES / PERMISSIONS
ASSETS / FONTS / LICENSES / TRANSLATIONS
TESTS / FIXTURES / RUNBOOKS / INCIDENT WORKAROUNDS
EXTERNAL APP/STORE/PROVIDER/SIGNING IDENTITIES
~~~

Never copy secret values from history.

## Disposition classes

Every material finding receives one disposition:

~~~text
A REQUIRED_PRODUCT_OR_SYSTEM_TRUTH
B REQUIRED_EXTERNAL_IDENTITY_OR_COMPATIBILITY_FACT
C PROVEN_USEFUL_PATTERN_TO_REIMPLEMENT
D REUSABLE_CODE_OR_ASSET_CANDIDATE_REQUIRING_PROOF
E OBSOLETE
F ARCHITECTURAL_SECURITY_OR_QUALITY_DEBT_TO_REJECT
~~~

Class D additionally requires ownership fit, license/provenance, security, dependency and maintenance proof.

## Preserve external identity, not secrets

Before destructive refoundation preserve non-secret evidence for package/bundle IDs, store records, Expo/EAS project identity, callback/redirect registration, push identity, signing relationships/fingerprints, DNS/domain ownership and provider application/client identity.

~~~text
EXTERNAL_IDENTITY_CONTINUITY != COPY_SECRET_VALUES
~~~

## Historical shapes explicitly superseded

The following old shapes are not current authorities:

- `governance/decisions/**` — active rules moved into current semantic owners; Git history is rationale.
- `governance/product/WORKFORCE-MODEL.md` and Workforce-as-peer-domain — superseded by one `actor_id` plus domain-owned DSH participation/eligibility.
- numbered `docs/platform-engineering-lifecycle/**` and phase trees — superseded by focused Docs, canonical Governance owners and the consuming repository's concise agent safety contract.
- broad runbooks for unimplemented domains — deleted until executable operational responsibility exists.
- manual product-truth JSON/platform-model registries used as parallel semantics — replaced by canonical capability owners and executable contract/source lineage.
- generic provider/business domains, runtime feature registries and generic human/tenant/context engines — rejected unless an independently proven current responsibility later admits them.
- service/app-shaped duplicate UI/business trees — split to app-host presentation, service-owned semantics/contracts and domain-neutral Design System responsibilities.

## Extraction rule

~~~text
INSPECT REQUIRED VALUE
→ CLASSIFY OWNER
→ PRESERVE / REFINE / REIMPLEMENT / REGENERATE / REJECT
→ BUILD AT CURRENT CANONICAL OWNER
→ VERIFY CONSUMERS/READBACK
→ DELETE LOSING SHAPE
~~~

Historical agreement does not justify parallel truth. A current owner wins within its authority class unless new evidence proves that owner itself is wrong.
