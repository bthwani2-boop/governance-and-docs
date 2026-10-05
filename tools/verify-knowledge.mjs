import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const failures = [];

const rel = (p) => path.relative(root, p).split(path.sep).join("/");
const read = (p) => fs.readFileSync(path.join(root, ...p.split("/")), "utf8");
const exists = (p) => fs.existsSync(path.join(root, ...p.split("/")));
const fail = (m) => failures.push(m);

function collect(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collect(absolute));
    else if (entry.isFile()) out.push(absolute);
  }
  return out.sort();
}

const required = [
  "AGENTS.md",
  "GOVERNANCE-STANDARDS.md",
  "README.md",
  "governance/GOVERNANCE.md",
  "governance/platform/PLATFORM.md",
  "governance/product/PRODUCT.md",
  "governance/product/CAPABILITIES.md",
  "governance/product/JOURNEYS.md",
  "governance/system/SYSTEM.md",
  "governance/policy/QUALITY.md",
  "governance/policy/EXPERIENCE.md",
  "governance/policy/DESIGN.md",
  "docs/README.md",
  "docs/DEVELOPMENT.md",
  "docs/OPERATIONS.md",
  ".github/pull_request_template.md",
  ".github/workflows/knowledge-integrity.yml",
  ".github/workflows/governance-pr-policy.yml",
];
for (const p of required) if (!exists(p)) fail(`missing required knowledge entrypoint: ${p}`);

const metaStandard = read("GOVERNANCE-STANDARDS.md");
for (const token of [
  "ARTIFACT_CLASS: GOVERNANCE_AND_AGENT_META_STANDARD",
  "PROJECT_SEMANTIC_AUTHORITY: NONE",
  "CURRENT_IMPLEMENTATION_AUTHORITY: NONE",
  "EXECUTION_AUTHORITY: NONE",
]) if (!metaStandard.includes(token)) fail(`GOVERNANCE-STANDARDS.md missing meta-authority boundary: ${token}`);

const retiredRoots = [
  "governance/project",
  "governance/architecture",
  "governance/policies",
  "governance/product/PRD.md",
  "governance/product/COMMERCIAL-AND-PARTNER-MODEL.md",
  "governance/product/FINANCIAL-MODEL.md",
  "governance/product/EXPERIENCE-AND-DESIGN.md",
  "docs/method",
  "docs/development",
  "docs/runbooks",
  "tools/verify-control-panel-identity-vocabulary.mjs",
];
for (const p of retiredRoots) if (exists(p)) fail(`retired knowledge topology survives: ${p}`);

const governanceFiles = collect(path.join(root, "governance")).filter((p) => p.endsWith(".md"));
const docsFiles = collect(path.join(root, "docs")).filter((p) => p.endsWith(".md"));

const allowedGovernancePrefixes = [
  "governance/GOVERNANCE.md",
  "governance/platform/",
  "governance/product/",
  "governance/system/",
  "governance/policy/",
];
for (const file of governanceFiles) {
  const relative = rel(file);
  if (!allowedGovernancePrefixes.some((prefix) => relative === prefix || relative.startsWith(prefix))) {
    fail(`unexpected governance ownership lane: ${relative}`);
  }
}

const owners = new Map();
for (const file of governanceFiles) {
  const relative = rel(file);
  const body = fs.readFileSync(file, "utf8");
  const ownerMatches = [...body.matchAll(/^SEMANTIC_OWNER:\s*(\S+)\s*$/gm)].map((m) => m[1]);
  if (ownerMatches.length !== 1) {
    fail(`${relative} must declare exactly one SEMANTIC_OWNER`);
    continue;
  }
  const owner = ownerMatches[0];
  if (owner !== relative) fail(`${relative} SEMANTIC_OWNER mismatch: ${owner}`);
  if (owners.has(owner)) fail(`duplicate SEMANTIC_OWNER: ${owner}`);
  owners.set(owner, relative);
  if (!body.includes("EXECUTION_AUTHORITY: NONE")) fail(`${relative} missing execution non-authority`);
  if (!body.includes("IMPLEMENTATION_STATE_AUTHORITY: NONE")) fail(`${relative} missing implementation-state non-authority`);

  const forbiddenSnapshots = [
    { re: /\b\d{3}\.\.\d{3}\b/, label: "migration ordinal/range snapshot" },
    { re: /\b(?:localhost|127\.0\.0\.1):\d{2,5}\b/i, label: "local runtime port snapshot" },
    { re: /\b[0-9a-f]{40}\b/i, label: "commit SHA as live Governance meaning" },
    { re: /\bapp-(?:client|partner|captain|field)\b|\bcontrol-panel\b/i, label: "deployable host/repository inventory" },
  ];
  for (const rule of forbiddenSnapshots) {
    if (rule.re.test(body)) fail(`${relative} contains ${rule.label}`);
  }
}

for (const file of docsFiles) {
  const relative = rel(file);
  const body = fs.readFileSync(file, "utf8");
  if (!body.includes("DOCUMENT_CLASS:")) fail(`${relative} missing DOCUMENT_CLASS`);
  if (!body.includes("EXECUTION_AUTHORITY: NONE")) fail(`${relative} missing execution non-authority`);
  if (!body.includes("PRODUCT_SEMANTIC_AUTHORITY: NONE")) fail(`${relative} missing Product non-authority`);
  if (!body.includes("CURRENT_IMPLEMENTATION_AUTHORITY: NONE")) fail(`${relative} missing implementation non-authority`);
  if (/^SEMANTIC_OWNER:/m.test(body)) fail(`${relative} must not be a semantic owner`);
}

const quality = read("governance/policy/QUALITY.md");
const qualityDimensions = [...quality.matchAll(/^QUALITY_DIMENSION:\s*([A-Z0-9_]+)\s*$/gm)].map((m) => m[1]);
if (qualityDimensions.length < 10) fail("QUALITY.md must expose a meaningful material-quality discovery taxonomy");
if (new Set(qualityDimensions).size !== qualityDimensions.length) fail("QUALITY.md contains duplicate QUALITY_DIMENSION identifiers");
for (const token of ["AFFECTED", "PROVEN_UNAFFECTED", "N/A_WITH_REASON", "plausibly material"]) {
  if (!quality.includes(token)) fail(`QUALITY.md missing proportional applicability contract: ${token}`);
}

const agent = read("AGENTS.md");
for (const token of [
  "ARTIFACT_CLASS: AGENT_OPERATING_SAFETY_CONTRACT",
  "GOVERNANCE-STANDARDS.md",
  "GOVERNANCE_IMPACT=NONE",
  "GOVERNANCE_IMPACT=REVALIDATE_ONLY",
  "GOVERNANCE_IMPACT=UPDATE_REQUIRED",
  "GOVERNANCE_IMPACT=DEFECT_FOUND",
  "100% CURRENT MATERIAL CLOSURE",
]) if (!agent.includes(token)) fail(`AGENTS.md missing stable execution-law boundary: ${token}`);

const capabilityRoot = path.join(root, "governance/product/capabilities");
const capabilityFiles = collect(capabilityRoot).filter((p) => p.endsWith(".md"));
const capabilityIds = new Map();
for (const file of capabilityFiles) {
  const relative = rel(file);
  const body = fs.readFileSync(file, "utf8");
  const ids = [...body.matchAll(/^CAPABILITY_ID:\s*([A-Z0-9_]+)\s*$/gm)].map((m) => m[1]);
  if (ids.length !== 1) {
    fail(`${relative} must declare exactly one CAPABILITY_ID`);
    continue;
  }
  const id = ids[0];
  if (capabilityIds.has(id)) fail(`duplicate CAPABILITY_ID: ${id}`);
  capabilityIds.set(id, relative);
  if (/^STATUS:/mi.test(body)) fail(`${relative} keeps duplicated/historical STATUS metadata`);
}

const product = read("governance/product/PRODUCT.md");
const admittedBlock = product.match(/## Admitted capabilities([\s\S]*?)(?=\n## |$)/)?.[1] ?? "";
const admittedIds = new Set([...admittedBlock.matchAll(/`([A-Z][A-Z0-9_]+)`/g)].map((m) => m[1]));
if (!admittedIds.size) fail("PRODUCT.md has no admitted capability set");

for (const [id, p] of capabilityIds) if (!admittedIds.has(id)) fail(`capability owner not admitted by PRODUCT.md: ${id} -> ${p}`);
for (const id of admittedIds) if (!capabilityIds.has(id)) fail(`PRODUCT.md admits capability without owner: ${id}`);

const router = read("governance/product/CAPABILITIES.md");
for (const [id, p] of capabilityIds) {
  const local = p.replace("governance/product/", "");
  if (!router.includes(`\`${id}\``) || !router.includes(`\`${local}\``)) fail(`capability router missing ${id} -> ${local}`);
}
const routedIds = new Set([...router.matchAll(/`([A-Z][A-Z0-9_]+)`\s*→/g)].map((m) => m[1]));
for (const id of routedIds) if (!capabilityIds.has(id)) fail(`capability router contains non-owner ID: ${id}`);

// JOURNEYS.md structural evidence only. Semantic correctness remains human/governance evidence.
const journeys = read("governance/product/JOURNEYS.md");
if (/^##\s+J\d+\s+—/m.test(journeys)) fail("retired sequential J0..Jn journey taxonomy survives");

const allowedSurfaces = new Set(["CLIENT", "PARTNER", "CAPTAIN", "FIELD", "OPERATOR"]);
const allowedOwners = new Set(["IDENTITY", "DSH", "WLT"]);
const seenJourneyIds = new Set();
const coveredSurfaces = new Set();
const journeySections = [...journeys.matchAll(/^##\s+([A-Z][A-Z0-9_]+)\s+—[^\n]*\n([\s\S]*?)(?=^##\s+|\Z)/gm)];
if (journeySections.length < 10) fail(`JOURNEYS.md exposes too few top-level multi-surface journeys: ${journeySections.length}`);

const requiredJourneyFields = ["JOURNEY_ID", "OUTCOME", "SURFACES", "OWNERS", "CAPABILITIES", "ENTRY", "EXIT", "READBACK"];
for (const section of journeySections) {
  const headingId = section[1];
  const body = section[2];
  const fields = new Map();
  for (const field of requiredJourneyFields) {
    const matches = [...body.matchAll(new RegExp(`^${field}:\\s*(.+)$`, "gm"))];
    if (matches.length !== 1) fail(`${headingId} must declare exactly one ${field}`);
    else fields.set(field, matches[0][1].trim());
  }
  const declaredId = fields.get("JOURNEY_ID");
  if (declaredId && declaredId !== headingId) fail(`${headingId} JOURNEY_ID mismatch: ${declaredId}`);
  if (seenJourneyIds.has(headingId)) fail(`duplicate JOURNEY_ID: ${headingId}`);
  seenJourneyIds.add(headingId);

  const surfaces = (fields.get("SURFACES") ?? "").split(",").map((v) => v.trim()).filter(Boolean);
  const uniqueSurfaces = new Set(surfaces);
  if (uniqueSurfaces.size < 2) fail(`${headingId} must declare at least two distinct actor-facing surfaces`);
  for (const surface of uniqueSurfaces) {
    if (!allowedSurfaces.has(surface)) fail(`${headingId} contains invalid actor-facing surface: ${surface}`);
    else coveredSurfaces.add(surface);
  }

  const ownerTokens = (fields.get("OWNERS") ?? "").split(",").map((v) => v.trim()).filter(Boolean);
  if (!ownerTokens.length) fail(`${headingId} declares no canonical owner`);
  for (const owner of ownerTokens) if (!allowedOwners.has(owner)) fail(`${headingId} contains invalid canonical owner: ${owner}`);

  const capabilityTokens = (fields.get("CAPABILITIES") ?? "").split(",").map((v) => v.trim()).filter(Boolean);
  if (!capabilityTokens.length) fail(`${headingId} declares no capability participation`);
  for (const id of capabilityTokens) if (!admittedIds.has(id)) fail(`${headingId} references non-admitted capability: ${id}`);
}
for (const surface of allowedSurfaces) if (!coveredSurfaces.has(surface)) fail(`actor-facing surface has no top-level journey coverage: ${surface}`);

const capabilityMatrix = journeys.match(/## Matrix — Capability participation([\s\S]*?)(?=\n## |$)/)?.[1] ?? "";
if (!capabilityMatrix) fail("JOURNEYS.md missing capability participation matrix");
const mappedCapabilityIds = [...capabilityMatrix.matchAll(/^\|\s*`([A-Z][A-Z0-9_]+)`\s*\|/gm)].map((m) => m[1]);
const mappedCounts = new Map();
for (const id of mappedCapabilityIds) mappedCounts.set(id, (mappedCounts.get(id) ?? 0) + 1);
for (const id of admittedIds) {
  const count = mappedCounts.get(id) ?? 0;
  if (count !== 1) fail(`admitted capability must have exactly one capability-matrix row: ${id} count=${count}`);
}
for (const id of mappedCounts.keys()) if (!admittedIds.has(id)) fail(`capability participation matrix contains non-admitted ID: ${id}`);

const materialCensus = journeys.match(/## Platform material census([\s\S]*?)(?=\n## |$)/)?.[1] ?? "";
if (!materialCensus) fail("JOURNEYS.md missing Platform material census");
const censusRows = materialCensus.split("\n").filter((line) => /^\|[^-].*\|$/.test(line.trim()) && !/^\|\s*Material concept\s*\|/.test(line.trim()));
if (censusRows.length < 20) fail(`Platform material census is unexpectedly small: ${censusRows.length}`);
for (const row of censusRows) if (!/\|\s*MAPPED\s*\|\s*$/.test(row)) fail(`Platform material census row is not closed as MAPPED: ${row.trim()}`);
for (const forbidden of ["UNMAPPED", "TBD_WITHOUT_OWNER", "UNKNOWN_WITHOUT_DECISION"]) {
  if (materialCensus.includes(forbidden)) fail(`Platform material census contains unresolved status token: ${forbidden}`);
}

for (const heading of [
  "## Matrix — Journey × Surface",
  "## Matrix — Capability participation",
  "## Matrix — Journey × Canonical Owner",
  "## Matrix — Journey × Correctness dimension",
  "## Platform material census",
  "## Supporting subflows and cross-cutting lanes",
  "## Journey acceptance law",
]) if (!journeys.includes(heading)) fail(`JOURNEYS.md missing structural section: ${heading}`);

const referenceFiles = docsFiles.filter((p) => rel(p).startsWith("docs/reference/"));
if (!referenceFiles.length) fail("no external reference routing exists");
const urlOwners = new Map();
const referenceClasses = new Map();
for (const file of referenceFiles) {
  const relative = rel(file);
  const body = fs.readFileSync(file, "utf8");
  for (const token of ["ADOPTION_AUTHORITY: NONE", "REFERENCE_FRESHNESS: REVALIDATE_AT_USE"]) {
    if (!body.includes(token)) fail(`${relative} missing reference boundary: ${token}`);
  }
  const classes = [...body.matchAll(/^REFERENCE_CLASS:\s*(\S+)\s*$/gm)].map((m) => m[1]);
  if (classes.length !== 1) fail(`${relative} must declare exactly one REFERENCE_CLASS`);
  else if (referenceClasses.has(classes[0])) fail(`duplicate REFERENCE_CLASS: ${classes[0]} in ${referenceClasses.get(classes[0])} and ${relative}`);
  else referenceClasses.set(classes[0], relative);

  for (const match of body.matchAll(/https?:\/\/[^\s)>`]+/g)) {
    const url = match[0].replace(/[.,;:]$/, "");
    if (urlOwners.has(url) && urlOwners.get(url) !== relative) fail(`duplicate curated external URL: ${url} in ${urlOwners.get(url)} and ${relative}`);
    else urlOwners.set(url, relative);
  }
}

const docsIndex = read("docs/README.md");
for (const file of docsFiles) {
  const relative = rel(file);
  if (relative === "docs/README.md") continue;
  const local = relative.slice("docs/".length);
  if (!docsIndex.includes(`\`${local}\``)) fail(`docs/README.md does not route ${local}`);
}

const prTemplate = read(".github/pull_request_template.md");
for (const heading of [
  "## Exact candidate and material question",
  "## Governance impact",
  "## Material quality scope",
  "## Evidence and freshness",
  "## Verification",
  "## Negative space and consumer impact",
]) if (!prTemplate.includes(heading)) fail(`pull request template missing canonical evidence section: ${heading}`);

const liveKnowledge = [...governanceFiles, ...docsFiles, path.join(root, "AGENTS.md"), path.join(root, "README.md")].filter(fs.existsSync);
const stalePathTokens = ["governance/project/", "governance/architecture/", "governance/policies/", "docs/method/", "docs/development/", "docs/runbooks/"];
for (const file of liveKnowledge) {
  const relative = rel(file);
  const body = fs.readFileSync(file, "utf8");
  for (const token of stalePathTokens) if (body.includes(token)) fail(`${relative} retains retired live path: ${token}`);
}

// ===== Refoundation hardening: relational and forbidden-state checks =====
// These checks pin mechanically detectable classes of semantic drift that the
// structural checks above cannot see. They prove relationships, not truth.

// GAP 4a — canonical surface-term alias guard (PLATFORM.md owns the surface set).
for (const file of [...governanceFiles, path.join(root, "AGENTS.md")]) {
  if (!fs.existsSync(file)) continue;
  const body = fs.readFileSync(file, "utf8");
  if (/\bControl Panel\b/.test(body)) fail(`${rel(file)} uses retired surface alias "Control Panel" (canonical: Operator)`);
}

// GAP 4b — competitor-cache REFERENCE_CLASS stem rule.
for (const file of referenceFiles) {
  const relative = rel(file);
  if (!relative.startsWith("docs/reference/competitors/")) continue;
  const stem = path.basename(relative, ".md");
  if (stem === "README") continue;
  const body = fs.readFileSync(file, "utf8");
  const expected = `CACHED_COMPETITOR_OBSERVATION_${stem.replace(/-/g, "_").toUpperCase()}`;
  const declared = body.match(/^REFERENCE_CLASS:\s*(\S+)\s*$/m)?.[1];
  if (declared && declared !== expected) fail(`${relative} REFERENCE_CLASS must be ${expected} (found ${declared})`);
}

// GAP 8a — GOVERNANCE.md canonical owner tree must match the filesystem.
{
  const govIndex = read("governance/GOVERNANCE.md");
  const treeBlock = govIndex.match(/## Canonical owner tree\s*\n```text\n([\s\S]*?)```/)?.[1] ?? "";
  const treeSet = new Set();
  const stack = [];
  for (const line of treeBlock.split("\n")) {
    const branchIdx = Math.max(line.indexOf("├"), line.indexOf("└"));
    if (branchIdx < 0) continue;
    const depth = Math.floor(branchIdx / 4);
    const name = line.slice(branchIdx + 4).trim();
    stack.length = depth;
    if (name.endsWith("/")) {
      stack.length = depth;
      stack.push(name.slice(0, -1));
      continue;
    }
    if (name === "capabilities/**") {
      for (const p of capabilityFiles) treeSet.add(rel(p));
      continue;
    }
    if (name.endsWith(".md")) treeSet.add(["governance", ...stack.slice(0, depth), name].join("/"));
  }
  const actual = new Set(governanceFiles.map(rel).filter((p) => p !== "governance/GOVERNANCE.md"));
  for (const p of treeSet) if (!actual.has(p)) fail(`GOVERNANCE.md owner tree lists a file that does not exist: ${p}`);
  for (const p of actual) if (!treeSet.has(p)) fail(`governance file is absent from the GOVERNANCE.md owner tree: ${p}`);
}

// GAP 9 — every governance/docs path reference resolves on disk.
{
  const referencing = [...governanceFiles, ...docsFiles, path.join(root, "AGENTS.md"), path.join(root, "README.md"), path.join(root, "GOVERNANCE-STANDARDS.md")].filter(fs.existsSync);
  for (const file of referencing) {
    const relative = rel(file);
    const body = fs.readFileSync(file, "utf8");
    for (const match of body.matchAll(/(?:governance|docs)\/[A-Za-z0-9\/_.\-]+\.md/g)) {
      if (!exists(match[0])) fail(`${relative} references a non-existent knowledge path: ${match[0]}`);
    }
  }
}

// Subflow IDs (reused by census/matrix resolution checks).
const subflowIds = new Set(
  [...journeys.matchAll(/^\|\s*([A-Z][A-Z0-9_]+)\s*\|/gm)].map((m) => m[1]),
);
const resolvableIds = new Set([...seenJourneyIds, ...subflowIds]);

// GAP 2 — Platform material census row contract.
{
  const allowedDispositions = new Set([
    "TOP_LEVEL_MULTI_SURFACE_JOURNEY",
    "SUPPORTING_SUBFLOW",
    "CROSS_CUTTING_LANE",
    "POLICY_FLOW",
    "PROJECTION",
    "FINANCIAL_PUBLICATION_PREREQUISITE",
    "EXPLICIT_NON_GOAL",
  ]);
  const seenConcepts = new Set();
  for (const row of censusRows) {
    const cells = row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
    if (cells.length !== 5) {
      fail(`Platform material census row must have exactly 5 cells: ${row.trim()}`);
      continue;
    }
    const [concept, , disposition, placement, status] = cells;
    if (seenConcepts.has(concept)) fail(`duplicate Platform material census concept: ${concept}`);
    seenConcepts.add(concept);
    if (!allowedDispositions.has(disposition)) fail(`census row has invalid disposition "${disposition}": ${concept}`);
    if (status !== "MAPPED") fail(`census row is not closed as MAPPED: ${concept}`);
    for (const token of placement.match(/[A-Z][A-Z0-9]*_[A-Z0-9_]+/g) ?? []) {
      if (!resolvableIds.has(token)) fail(`census placement token does not resolve to a Journey or subflow ID: ${token} (row: ${concept})`);
    }
  }
}

// GAP 3 — Journey × Surface and Journey × Canonical Owner matrix consistency.
{
  const declaredSurfaces = new Map();
  const declaredOwners = new Map();
  for (const section of journeySections) {
    const body = section[2];
    const surfaces = (body.match(/^SURFACES:\s*(.+)$/m)?.[1] ?? "").split(",").map((v) => v.trim());
    const owners = (body.match(/^OWNERS:\s*(.+)$/m)?.[1] ?? "").split(",").map((v) => v.trim());
    declaredSurfaces.set(section[1], new Set(surfaces));
    declaredOwners.set(section[1], new Set(owners));
  }
  const parseMatrix = (heading, columns) => {
    const block = journeys.match(new RegExp(`## Matrix — ${heading}([\\s\\S]*?)(?=\\n## |$)`))?.[1] ?? "";
    const rows = new Map();
    for (const line of block.split("\n")) {
      const cells = line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
      if (cells.length !== columns.length + 1) continue;
      const [journey, ...values] = cells;
      if (!/^[A-Z][A-Z0-9_]+$/.test(journey)) continue;
      rows.set(journey, values);
    }
    return { rows, columns };
  };
  const surfaceMatrix = parseMatrix("Journey × Surface", ["CLIENT", "PARTNER", "CAPTAIN", "FIELD", "OPERATOR"]);
  for (const [journey, values] of surfaceMatrix.rows) {
    const marked = new Set(surfaceMatrix.columns.filter((_, i) => values[i] !== "—"));
    const declared = declaredSurfaces.get(journey) ?? new Set();
    for (const s of marked) if (!declared.has(s)) fail(`Journey × Surface matrix marks ${s} for ${journey} but SURFACES does not declare it`);
    for (const s of declared) if (!marked.has(s)) fail(`Journey ${journey} declares surface ${s} but the Journey × Surface matrix does not mark it`);
  }
  for (const [id, declared] of declaredSurfaces) if (!surfaceMatrix.rows.has(id)) fail(`Journey ${id} missing from Journey × Surface matrix`);

  const ownerMatrix = parseMatrix("Journey × Canonical Owner", ["IDENTITY", "DSH", "WLT"]);
  for (const [journey, values] of ownerMatrix.rows) {
    const marked = new Set(ownerMatrix.columns.filter((_, i) => values[i] !== "—"));
    const declared = declaredOwners.get(journey) ?? new Set();
    for (const o of marked) if (!declared.has(o)) fail(`Journey × Canonical Owner matrix marks ${o} for ${journey} but OWNERS does not declare it`);
    for (const o of declared) if (!marked.has(o)) fail(`Journey ${journey} declares owner ${o} but the Journey × Canonical Owner matrix does not mark it`);
  }
  for (const [id, declared] of declaredOwners) if (!ownerMatrix.rows.has(id)) fail(`Journey ${id} missing from Journey × Canonical Owner matrix`);
}

// GAP 1 — capability-participation matrix journey tokens must resolve.
{
  for (const line of capabilityMatrix.split("\n")) {
    const cells = line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
    if (cells.length !== 3) continue;
    const id = cells[0].replace(/`/g, "");
    if (!capabilityIds.has(id)) continue;
    for (const token of cells[1].match(/[A-Z][A-Z0-9]*_[A-Z0-9_]+/g) ?? []) {
      if (!resolvableIds.has(token)) fail(`capability participation matrix token does not resolve to a Journey or subflow ID: ${token} (capability: ${id})`);
    }
  }
}

// GAP 5 — policy placement guard: policy files own cross-cutting invariants only.
{
  const productFiles = collect(path.join(root, "governance/product")).filter((p) => p.endsWith(".md"));
  const ownedVocabulary = new Set();
  for (const file of [...productFiles, path.join(root, "governance/system/SYSTEM.md"), path.join(root, "governance/platform/PLATFORM.md")]) {
    const body = fs.readFileSync(file, "utf8");
    for (const m of body.matchAll(/`([A-Z][A-Z0-9]*_[A-Z0-9_]+)`/g)) ownedVocabulary.add(m[1]);
  }
  const policyEnums = new Set(["GOVERNANCE_IMPACT", "QUALITY_DIMENSION", "NOT_CHECKED"]);
  for (const file of collect(path.join(root, "governance/policy")).filter((p) => p.endsWith(".md"))) {
    const relative = rel(file);
    const body = fs.readFileSync(file, "utf8");
    const classes = [...body.matchAll(/^ARTIFACT_CLASS:\s*(\S+)\s*$/gm)].map((m) => m[1]);
    if (classes.length !== 1 || classes[0] !== "DURABLE_CROSS_CUTTING_POLICY") fail(`${relative} must declare exactly one ARTIFACT_CLASS: DURABLE_CROSS_CUTTING_POLICY`);
    if (/\bcapabilit(?:y|ies)\b[^.\n]*\b(?:is|are)\s+(?:currently\s+)?admitted\b/i.test(body)) fail(`${relative} declares capability admission state; admission belongs to PRODUCT.md/capability owners`);
    if (/\bnot enabled by this admission\b/i.test(body)) fail(`${relative} declares admission scope; admission belongs to capability owners`);
    for (const m of body.matchAll(/`([A-Z][A-Z0-9]*_[A-Z0-9_]+)`/g)) {
      const token = m[1];
      if (capabilityIds.has(token) || ownedVocabulary.has(token) || policyEnums.has(token)) continue;
      fail(`${relative} uses backticked token not owned by any capability/product/system/platform owner: ${token}`);
    }
  }
}

// GAP 6 — duplicate-invariant shingle detector (one-source law evidence).
// Structural metadata (headers, field labels) is excluded; only durable prose counts.
{
  const shingleSize = 12;
  const shingles = new Map();
  for (const file of [...governanceFiles, path.join(root, "AGENTS.md")]) {
    if (!fs.existsSync(file)) continue;
    const relative = rel(file);
    let body = fs.readFileSync(file, "utf8");
    body = body.replace(/```[\s\S]*?```/g, "\n");
    const firstSection = body.indexOf("\n## ");
    if (firstSection >= 0) body = body.slice(firstSection);
    body = body.split("\n").filter((line) => !/^[A-Z][A-Z_]+:\s/.test(line)).join("\n");
    const words = body.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean);
    for (let i = 0; i + shingleSize <= words.length; i++) {
      const shingle = words.slice(i, i + shingleSize).join(" ");
      if (!shingles.has(shingle)) shingles.set(shingle, new Set());
      shingles.get(shingle).add(relative);
    }
  }
  for (const [shingle, ownersSet] of shingles) {
    if (ownersSet.size >= 2) fail(`duplicate durable-invariant shingle across ${[...ownersSet].join(" + ")}: "${shingle}"`);
  }
}

// GAP 10 — user-visible state vocabulary single source.
{
  const acceptance = journeys.match(/## Journey acceptance law([\s\S]*?)(?=\n## |$)/)?.[1] ?? "";
  const journeyStates = [...acceptance.matchAll(/`([a-z_]+)`/g)].map((m) => m[1]);
  const experience = read("governance/policy/EXPERIENCE.md");
  const vocabSentence = experience.match(/canonical user-visible state vocabulary[^\n]*/)?.[0] ?? "";
  for (const state of journeyStates) {
    if (!vocabSentence.includes(state)) fail(`JOURNEYS acceptance-law state \`${state}\` is not part of the canonical EXPERIENCE.md state vocabulary`);
  }
}

// GAP 11 — competitor-cache structural contract.
{
  const gitignore = read(".gitignore");
  for (const file of referenceFiles) {
    const relative = rel(file);
    if (!relative.startsWith("docs/reference/competitors/")) continue;
    const stem = path.basename(relative, ".md");
    if (stem === "README") continue;
    const body = fs.readFileSync(file, "utf8");
    for (const token of ["## Mandatory black-box review method", "CANONICAL_FILE_FOR_THIS_APP: YES", "PARALLEL_REPORTS_ALLOWED: NO"]) {
      if (!body.includes(token)) fail(`${relative} missing competitor-cache contract element: ${token}`);
    }
    if (!/^\s*-\s*Priority:\s/m.test(body) || !/^\s*-\s*Role:\s/m.test(body)) fail(`${relative} missing Priority/Role identity fields`);
    if (!gitignore.includes(`/docs/reference/competitors/local-photos/${stem}/`)) fail(`.gitignore missing local-photos boundary for ${stem}`);
  }
}

// GAP 7 + GAP 12 — closure-token sync, workflow content, meta-standard neutrality.
{
  const agents = read("AGENTS.md");
  const agentTokens = [...agents.matchAll(/^`?([A-Z][A-Z0-9_]+)=(?:0|1)`?$/gm)].map((m) => m[1]);
  if (new Set(agentTokens).size !== agentTokens.length) fail("AGENTS.md closure block contains duplicate tokens");
  const template = read(".github/pull_request_template.md");
  const templateTokens = [...template.matchAll(/^`?([A-Z][A-Z0-9_]+)=(?:0|1)`?$/gm)].map((m) => m[1]);
  for (const token of templateTokens) if (!agentTokens.includes(token)) fail(`pull request template closure token is not canonical AGENTS.md law: ${token}`);
  for (const token of agentTokens) if (!templateTokens.includes(token)) fail(`AGENTS.md closure token missing from pull request template: ${token}`);

  const integrityWorkflow = read(".github/workflows/knowledge-integrity.yml");
  if (!integrityWorkflow.includes("node tools/verify-knowledge.mjs")) fail("knowledge-integrity.yml no longer runs the verifier");
  if (!/push:\s*\n\s*branches:\s*\[main\]/.test(integrityWorkflow) || !/pull_request:\s*\n\s*branches:\s*\[main\]/.test(integrityWorkflow)) fail("knowledge-integrity.yml must trigger on push and pull_request to main");
  if (!/ref:\s*\$\{\{ github\.event\.pull_request\.head\.sha \|\| github\.sha \}\}/.test(integrityWorkflow)) fail("knowledge-integrity.yml must verify the exact candidate SHA");

  const prPolicy = read(".github/workflows/governance-pr-policy.yml");
  for (const token of agentTokens) {
    if (!prPolicy.includes(token)) fail(`governance-pr-policy.yml does not enforce canonical closure token: ${token}`);
  }
  for (const heading of ["## Summary", "## Exact candidate and material question", "## Governance impact", "## Material quality scope", "## Evidence and freshness", "## Verification", "## Negative space and consumer impact"]) {
    if (!prPolicy.includes(heading)) fail(`governance-pr-policy.yml does not enforce template heading: ${heading}`);
  }

  const standards = read("GOVERNANCE-STANDARDS.md");
  if (/\b(?:BThwani|WLT|DSH|YER|Yemen)\b/.test(standards)) fail("GOVERNANCE-STANDARDS.md must remain project-neutral (BThwani-specific semantics leaked in)");
}

if (failures.length) {
  console.error("KNOWLEDGE_STRUCTURE_INTEGRITY=FAIL");
  for (const failure of [...new Set(failures)].sort()) console.error(`  ${failure}`);
  process.exit(1);
}

console.log("KNOWLEDGE_STRUCTURE_INTEGRITY=PASS");
console.log(`SEMANTIC_OWNERS=${owners.size}`);
console.log(`ADMITTED_CAPABILITIES=${capabilityIds.size}`);
console.log(`TOP_LEVEL_JOURNEYS=${seenJourneyIds.size}`);
console.log(`COVERED_ACTOR_SURFACES=${coveredSurfaces.size}`);
console.log(`MATERIAL_CENSUS_ROWS=${censusRows.length}`);
console.log(`QUALITY_DIMENSIONS=${qualityDimensions.length}`);
console.log(`REFERENCE_FILES=${referenceFiles.length}`);
console.log(`REFERENCE_CLASSES=${referenceClasses.size}`);
console.log(`CURATED_EXTERNAL_URLS=${urlOwners.size}`);
console.log("SEMANTIC_TRUTH_PROVEN_BY_VERIFIER=0");
