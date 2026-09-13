# Providers and Integrations Policy

ARTIFACT_CLASS: DURABLE_CROSS_CUTTING_POLICY
SEMANTIC_OWNER: governance/policy/INTEGRATIONS.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

- External providers implement bounded semantic ports; availability never makes them Product/domain owners.
- Normalize and validate external responses at the adapter boundary before owner state changes.
- Provider timeout/unknown result is represented explicitly and reconciled where effects may have occurred.
- Provider identifiers are references, not replacements for BThwani canonical identity.
- Adoption requires current need, fit, license/provenance, security/supply-chain, operational/recovery and replaceability evidence as applicable.
- Mutable provider/API/platform facts are revalidated at use from current primary sources.
- Discovery catalogs and OSS exemplars surface candidates; neither grants adoption authority.
