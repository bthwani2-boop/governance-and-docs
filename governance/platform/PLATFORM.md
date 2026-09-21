# BThwani Platform Model

ARTIFACT_CLASS: DURABLE_PLATFORM_GOVERNANCE
SEMANTIC_OWNER: governance/platform/PLATFORM.md
EXECUTION_AUTHORITY: NONE
IMPLEMENTATION_STATE_AUTHORITY: NONE

## Platform definition

BThwani is one unified multi-surface delivery-commerce Product. Its actor-facing surfaces are hosts for role-specific work and presentation; they are not independent Products, tenants or business-truth owners.

Deployable host names, repository paths, package identities and current runtime composition are implementation truth and do not belong in this semantic owner.

## Human Actor model

One natural person is represented cross-boundary by one permanent `actor_id`.

The current high-level BThwani roles/personas are exactly:

- `client`;
- `partner`;
- `captain`;
- `field`;
- `operator`.

One Human Actor may hold multiple roles. Role admission, credentials and sessions never create a second human identity.

`field` means Partner Acquisition and Onboarding Representative only. It does not create a generic field-operations domain.

`operator` is the human persona for the Operator workspace. First-Operator bootstrap is a one-time Identity lifecycle, not a second role or Product layer.

A Partner Captain is not a sixth Identity role. The Human Actor remains a canonical `captain`; Store-scoped affiliation/membership/eligibility is a DSH-owned relationship around that actor. The same Captain actor may hold multiple permitted relationships without creating duplicate identity.

Detailed role admission/authentication/session semantics belong to `IDENTITY_ACTIVATION_SESSIONS`. Store-scoped Captain relationship semantics belong to `STORE_CAPTAIN_MEMBERSHIP`. Bounded domain ownership belongs to `governance/system/SYSTEM.md`. Current Product breadth belongs to `governance/product/PRODUCT.md`.

Store-scoped delegated access is not a new high-level Identity role. It is an explicit DSH-owned grant from an authorized Store owner to a bounded actor, with Store scope, an allowlisted permission set, expiry/revocation and audit. It cannot create a generic Partner organization or team hierarchy.

## Surface model

A Surface is an actor-facing deployable presentation/composition host for admitted Product work.

A Surface may own its shell, navigation, composition, transient presentation state and platform adapters. It never becomes the canonical owner of the business facts it renders or mutates.

Brand unity does not imply identical information architecture or shell across roles.

## Canonical terms

- **Human Actor** — one natural person represented by `actor_id`.
- **Role** — high-level Identity admission such as client, partner, captain, field or operator.
- **Surface** — actor-facing presentation/composition host; never a business owner by itself.
- **Partner** — authenticated Human Actor with the `partner` role.
- **Captain** — authenticated Human Actor with the `captain` role; operational relationships are separate DSH facts.
- **Store** — DSH business resource belonging to a Partner; not a tenant or Human Actor.
- **Store Captain Membership** — DSH-owned Store-scoped relation between a Store and canonical Captain actor; not a role.
- **Store-scoped access grant** — DSH-owned bounded permission grant within one Store; not a role, tenant or generic team membership.
- **Joining Case** — DSH Partner-onboarding workflow; never a second Partner identity.
- **Canonical owner** — bounded owner of durable meaning and authoritative mutation.
- **Canonical readback** — owner-backed observable committed state after mutation.
- **Derived projection** — rebuildable/read-optimized state with no mutation authority.
