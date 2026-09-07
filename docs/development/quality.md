# Quality, Testing and Verification

DOCUMENT_CLASS: HUMAN_DEVELOPMENT_GUIDE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE
CURRENT_WORKFLOW_TRUTH_SOURCE: .github/workflows and repository scripts

## Principle

A green tool proves only the claim it exercised. Use the smallest evidence capable of falsifying the material claim, then deepen by risk.

Evidence classes include compile/type/static, schema/contract, unit/domain, migration/database, integration, runtime/journey, visual/accessibility, security/privacy, financial/reconciliation and release/deployment evidence. They are not interchangeable.

## Interactive verification

The consuming repository's Orchestrator owns closure semantics. Practical roles when installed:

- Playwright CLI/MCP for browser exploration; Playwright Test for durable web regression.
- `agent-device` for agent-native mobile exploration/interaction.
- Maestro for durable declarative mobile journeys when it is the simpler owned suite.
- ADB for Android connectivity/process/log/network plumbing, not user-journey closure by itself.
- scrcpy/Maestro Studio for human inspection/authoring assistance only.

Do not duplicate the same material journey across frameworks merely to increase tool count.

## Risk-based real-device matrix

Choose coverage from supported-user and failure risk, not a ceremonial fixed list. As applicable include:

- current mainstream Android and a materially lower-resource/smaller class;
- current iPhone and the oldest materially supported iPhone/OS class;
- materially different screen/text-scale/accessibility settings;
- high-latency network, offline/reconnect and process kill/relaunch;
- permission denied/revoked and location disabled;
- foreground/background and battery restrictions where required;
- expired/revoked session;
- fresh install and upgrade.

Captain/field workflows may require especially strong background-location, process-death, battery and intermittent-network evidence.

## Failure-space and negative-space proof

Material journeys should exercise applicable validation, forbidden/object-scope, conflict/concurrency, duplicate/replay, timeout/unknown, partial failure, offline/reconnect, retry/recovery and canonical later readback.

After cutover search for old writers/readers, aliases, stale exports/config, obsolete mocks/tests, duplicate contracts and wrong-owner paths.

## CI guard discipline

A custom guard must enforce a unique durable invariant not better enforced by compiler/schema/test/runtime tooling. Remove obsolete topology guards, debt baselines, pass-through wrappers and campaign-only checks.

A red workflow is a finding to diagnose, never something to suppress merely to manufacture green.

## Standards routing

Revalidate current official sources at use time:

- OWASP ASVS — https://owasp.org/www-project-application-security-verification-standard/
- OWASP MASVS/MASTG — https://mas.owasp.org/
- W3C WCAG — https://www.w3.org/WAI/standards-guidelines/wcag/
- NIST SSDF SP 800-218 — https://csrc.nist.gov/pubs/sp/800/218/final
- SLSA — https://slsa.dev/spec/

## Knowledge/Docs verification

Use current repository scripts such as `pnpm docs:verify:all`, `pnpm knowledge:verify:all` and `pnpm workspace:verify` as applicable. Exact command truth remains executable.
