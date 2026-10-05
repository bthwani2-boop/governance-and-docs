# Captured Yemen-Market App Evidence

DOCUMENT_CLASS: NONAUTHORITATIVE_EXTERNAL_REFERENCE
REFERENCE_CLASS: COMPETITOR_EVIDENCE_CACHE_INDEX
ADOPTION_AUTHORITY: NONE
REFERENCE_FRESHNESS: REVALIDATE_AT_USE
EXECUTION_AUTHORITY: NONE
PRODUCT_SEMANTIC_AUTHORITY: NONE
CURRENT_IMPLEMENTATION_AUTHORITY: NONE

These five files record bounded observations from installed competitor apps. Use them only as external evidence for a material decision; compare any relevant observation with pinned Governance and current BThwani implementation. They describe partial reviews, never BThwani requirements or current product guarantees. Revalidate app identity, version and relevant behavior at use. This folder is a small evidence cache, not a market inventory or Product authority.

- [Tawseel One](tawseel-one.md)
- [Tasaheel](tasaheel.md)
- [Etlobni](etlobni.md)
- [Nass](nass.md)
- [HungerStation](hungerstation.md)

## Cache protocol contract

Every captured competitor file carries the same structural contract:

- each file is the canonical evidence file for its app (`CANONICAL_FILE_FOR_THIS_APP: YES`); no parallel reports are allowed (`PARALLEL_REPORTS_ALLOWED: NO`);
- the identity section carries `Priority:` and `Role:` review-prioritization fields;
- the mandatory black-box review method is stated in each captured file and governs all of them; this index does not duplicate its body;
- coverage uses the shared two-column matrix with the allowed statuses `NOT_REVIEWED`, `CURRENT`, `STALE`, `PARTIAL`, `N/A`;
- local screenshot captures are app-foldered under `local-photos/` and excluded from Git by the repository-root `.gitignore`.

A file that does not carry this contract is a defect in the cache, not an alternate protocol.

Selected screenshots are kept beside these notes under `local-photos/` on the local development machine. The repository-root `.gitignore` explicitly excludes each of the five app-specific capture directories. The captures are not part of this repository's commits, pushes or pull requests. Markdown screenshot links resolve only on a machine that has those local captures.
