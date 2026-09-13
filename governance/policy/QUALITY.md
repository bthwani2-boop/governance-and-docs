# Quality Policy

ARTIFACT_CLASS: DURABLE_CROSS_CUTTING_POLICY
SEMANTIC_OWNER: governance/policy/QUALITY.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

Quality is proven against the affected cone, not by one green test. Every material task must examine the complete material-quality census below; no dimension may disappear merely because the task began in a different layer.

## Material quality dimensions

Each `QUALITY_DIMENSION` below is a durable review dimension. For every material task, classify every one as `AFFECTED`, `PROVEN_UNAFFECTED`, or `N/A_WITH_REASON`.

QUALITY_DIMENSION: PRODUCT_BUSINESS
QUALITY_DIMENSION: OWNERSHIP_ARCHITECTURE
QUALITY_DIMENSION: DATA_MIGRATION
QUALITY_DIMENSION: CONTRACT_API_EVENT
QUALITY_DIMENSION: SECURITY_AUTHORIZATION
QUALITY_DIMENSION: PRIVACY_PII_LOCATION
QUALITY_DIMENSION: FINANCE
QUALITY_DIMENSION: RELIABILITY_RECOVERY
QUALITY_DIMENSION: PERFORMANCE_CAPACITY
QUALITY_DIMENSION: OBSERVABILITY_AUDIT
QUALITY_DIMENSION: UX_IA_CONTENT
QUALITY_DIMENSION: ACCESSIBILITY_RTL_LOCALIZATION
QUALITY_DIMENSION: VISUAL_IDENTITY_DESIGN_SYSTEM
QUALITY_DIMENSION: PLATFORM_DEVICE
QUALITY_DIMENSION: RUNTIME_CONFIG_INFRA
QUALITY_DIMENSION: DEPENDENCY_SUPPLY_CHAIN
QUALITY_DIMENSION: RELEASE_STORE_DEPLOYABLE_IDENTITY
QUALITY_DIMENSION: VERIFICATION_EVIDENCE
QUALITY_DIMENSION: GOVERNANCE_DOCS_RESIDUE

`AFFECTED` requires the applicable owner, invariant/failure condition and evidence class. `PROVEN_UNAFFECTED` requires evidence-backed reasoning. `N/A_WITH_REASON` requires a scope-specific reason. `UNEXAMINED`, `MAYBE`, `LATER` and silent omission are not closure states.

## Proof model

As applicable, prove:

- Product/business state-machine correctness and user/business outcome;
- semantic owner, canonical writer/readback and architecture/boundary correctness;
- database/migration/retention/concurrency integrity;
- contract/event/generated-client and compatibility consistency;
- authentication, authorization, abuse resistance and negative security cases;
- privacy/PII/location minimization, purpose limitation and disclosure boundaries;
- money precision, idempotency, unknown-outcome and reconciliation semantics;
- retry/timeout/recovery/restart/resume and concurrent-state correctness;
- performance, resource use and capacity claims at the scale materially asserted;
- logs/metrics/traces/audit attribution sufficient to prove and operate the affected outcome without leaking unnecessary sensitive data;
- UX/information architecture/content clarity, interaction states and recovery;
- accessibility, RTL/localization semantics, text scaling, keyboard/screen-reader/touch behavior as applicable;
- brand/visual-system consistency through canonical Design System roles/components/patterns;
- native platform/device behavior and adaptive/responsive behavior;
- runtime/config/infrastructure ownership and parity for the authorized environment;
- dependency license/security/provenance/maintenance and supply-chain controls when dependencies change;
- package/bundle/EAS/signing/deep-link/provider/store/release identity where deployable identity or release is affected;
- fit static/unit/contract/database/integration/browser/device/runtime evidence for each material claim;
- Governance/Docs convergence and absence of obsolete/shadow/losing paths after cutover.

A quality dimension being unaffected never weakens another affected dimension. A single tool may cover several dimensions; tool count is not assurance strength.

## Real-device and rendered proof

When correctness depends on OS/device behavior, use representative real-device evidence for the material claim, including process restart/resume, foreground/background behavior, weak/offline reconnect, permissions, location/background restrictions, deep-link/notification handoff, text scaling/accessibility and post-recovery canonical readback as applicable. Export/build success alone does not prove these behaviors.

For user-facing work, rendered quality is part of correctness. Representative evidence covers the materially affected responsive/adaptive sizes, RTL, light/dark appearance, accessibility, loading/empty/forbidden/conflict/offline/error/recovery states, and actual user interaction path. A screenshot alone is not journey proof.

## External assurance

Use current primary standards and assurance references from `docs/reference/` when they can change the proof model. Mutable upstream versions/status are revalidated at use. Best practice is evidence, not automatic architecture authority.

## Closure

For the exact authorized candidate/cone, quality closure requires zero unexamined material dimensions, zero affected dimensions without owner/rule/required proof, zero known material defect or contradiction, zero decision-critical unknown, zero stale required evidence and zero unjustified shadow/residue within the affected cone. This is current material closure, not a claim of permanent infallibility.
