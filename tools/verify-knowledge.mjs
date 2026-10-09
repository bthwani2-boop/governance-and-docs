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
  "docs/EXECUTION-CONTRACT.md",
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

  if (/\bJ\d+\b/.test(body)) fail(`${relative} retains a retired J-numbered journey reference`);

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
if (!journeySections.length) fail("JOURNEYS.md has no cross-surface E2E scenario sections");

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
if (!censusRows.length) fail("Platform material census has no rows");
for (const row of censusRows) if (!/\|\s*MAPPED\s*\|\s*$/.test(row)) fail(`Platform material census row is not closed as MAPPED: ${row.trim()}`);
for (const forbidden of ["UNMAPPED", "TBD_WITHOUT_OWNER", "UNKNOWN_WITHOUT_DECISION"]) {
  if (materialCensus.includes(forbidden)) fail(`Platform material census contains unresolved status token: ${forbidden}`);
}

for (const heading of [
  "## Matrix — Journey × Surface",
  "## Matrix — Capability participation",
  "## Matrix — Journey × Canonical Owner",
  "## Platform material census",
  "## Supporting subflows and cross-cutting lanes",
  "## End-to-end integration proof boundary",
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
// Index references must resolve in both directions. A missing referenced guide is a failure,
// not a reason to silently treat the guide as absent from the docs census.
for (const match of docsIndex.matchAll(/^\s*-\s*`([^`]+\.md)`/gm)) {
  const indexed = path.posix.normalize(`docs/${match[1]}`);
  if (!indexed.startsWith("docs/") || !exists(indexed)) {
    fail(`docs/README.md references missing document: ${match[1]}`);
  }
}
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
