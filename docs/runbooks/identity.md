# Identity Operations Runbook

DOCUMENT_CLASS: OPERATIONAL_RUNBOOK
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

## Scope and owners

Identity owns Human Actor identity/actor_id, verified login identifiers, credentials, Identity-wide security eligibility, high-level role admission, verification/activation/recovery and role-scoped sessions. DSH owns partner/captain/field operational eligibility/scope. Platform Control owns only the privileged Identity/control responsibilities Governance assigns.

Current executable contracts/code/config/runtime are implementation authority.

## Triage

1. Pin exact candidate, environment and correlation identity.
2. Verify current Identity health/readiness through executable interfaces.
3. Classify: customer registration/auth/recovery; managed-role activation/re-enrollment; operator MFA; refresh/revocation; service authentication; challenge delivery; abuse controls.
4. Resolve actor/session role server-side.
5. Verify canonical credential/challenge/session readback and owning-domain eligibility where business authorization is involved.
6. Reproduce with sanitized identifiers and masked contact data.

## Safety

- Verification challenge never self-grants governed partner/captain/field/operator admission.
- Managed activation is one-time enrollment, not recurring login.
- Role disable revokes only that role's sessions/proofs; unrelated roles remain independent.
- Identity-wide disable revokes authentication state without deleting role bindings.
- Privileged sessions obey required MFA/step-up.
- Caller headers/body/query/UI state never grant identity, role, scope or service identity.
- Never repair stale development state by adding legacy compatibility authority.
- Never log passwords, challenges, bearer/refresh tokens, hashes or secrets.

## Challenge delivery failure

Use current logs/provider evidence and executable delivery state to distinguish delivery failure, rate/budget rejection and unknown outcome. Do not mutate queues/tables blindly. Retry only according to current challenge/provider policy; source challenge semantics remain Identity-owned.

## Suspected refresh replay or credential compromise

Use security audit/correlation evidence to distinguish legitimate refresh race from confirmed replay. Confirmed replay follows canonical session-family compromise handling. Broader actor security disable/recovery uses the governed privileged control path; do not invent client-side revocation authority.

## Privileged lockout

- Operator recovery uses the governed Platform Control reset/re-enrollment path.
- The repository administrative recovery CLI, where present, is development/test only unless a separately controlled stronger break-glass mechanism is explicitly materialized and authorized.
- Never use arbitrary SQL, disable MFA or grant roles as a shortcut.

## Migration/schema failure

Applied migrations remain immutable. On checksum/schema mismatch, diagnose exact migration lineage and roll forward with a new governed migration where correction is required. Local integration reset uses current repository runtime scripts; Production data repair is never inferred from a local reset command.

Schema/readback verification uses the executable schema-verification mechanism from the owning service when present.

## Closure

Verify canonical Identity readback, affected domain authorization/eligibility, revoked/renewed session behavior, negative cross-role cases and sensitive-data hygiene. Execution/campaign closure remains Orchestrator authority.
