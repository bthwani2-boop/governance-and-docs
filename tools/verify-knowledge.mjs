import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const failures = [];
const MAX_BYTES = 24000;

function collect(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collect(absolute));
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(absolute);
  }
  return out.sort();
}
function rel(file) { return path.relative(root, file).split(path.sep).join("/"); }
function read(relative) { return fs.readFileSync(path.join(root, ...relative.split("/")), "utf8"); }
function exists(relative) { return fs.existsSync(path.join(root, ...relative.split("/"))); }
function fail(message) { failures.push(message); }

const governanceFiles = collect(path.join(root, "governance"));
const docsFiles = collect(path.join(root, "docs"));

for (const required of [
  "governance/GOVERNANCE.md",
  "governance/product/CAPABILITIES.md",
  "governance/product/JOURNEYS.md",
  "docs/README.md",
]) if (!exists(required)) fail("missing entrypoint: " + required);

for (const forbidden of [
  "governance/decisions",
  "governance/product/WORKFORCE-MODEL.md",
  "governance/architecture/FOUNDATION-AND-JOURNEY-READY-SUBSTRATE.md",
  "docs/platform-engineering-lifecycle",
  "docs/development/README.md",
  "docs/runbooks/README.md",
  "docs/reference/external-systems",
  "docs/reference/donor-reconstruction-patterns.md",
]) if (exists(forbidden)) fail("retired knowledge shape exists: " + forbidden);

const expectedDocs = [
  "docs/README.md",
  "docs/method/diagnosis-and-decision.md",
  "docs/method/change-and-reconstruction.md",
  "docs/method/verification-and-evidence.md",
  "docs/development/workflow.md",
  "docs/development/backend.md",
  "docs/development/frontend.md",
  "docs/development/design-system.md",
  "docs/development/mobile.md",
  "docs/development/runtime.md",
  "docs/development/observability.md",
  "docs/development/quality.md",
  "docs/development/release.md",
  "docs/runbooks/identity.md",
  "docs/runbooks/platform-recovery.md",
  "docs/reference/donor.md",
  "docs/reference/commerce.md",
  "docs/reference/finance.md",
  "docs/reference/identity.md",
  "docs/reference/engineering.md",
  "docs/reference/experience.md",
];
const expectedDocSet = new Set(expectedDocs);
for (const file of docsFiles) if (!expectedDocSet.has(rel(file))) fail("unexpected docs file: " + rel(file));
for (const file of expectedDocs) if (!exists(file)) fail("missing docs file: " + file);

for (const file of [...governanceFiles, ...docsFiles]) {
  if (fs.statSync(file).size > MAX_BYTES) fail(rel(file) + " exceeds " + MAX_BYTES + " bytes");
}

const owners = new Map();
for (const file of governanceFiles) {
  const relative = rel(file);
  const text = fs.readFileSync(file, "utf8");
  const matches = [...text.matchAll(/^SEMANTIC_OWNER:\s*(\S+)\s*$/gm)].map((m) => m[1]);
  if (matches.length !== 1) { fail(relative + " must have exactly one SEMANTIC_OWNER"); continue; }
  if (matches[0] !== relative) fail(relative + " SEMANTIC_OWNER mismatch: " + matches[0]);
  if (owners.has(matches[0])) fail("duplicate SEMANTIC_OWNER: " + matches[0]);
  owners.set(matches[0], relative);
  if (!text.includes("EXECUTION_AUTHORITY: NONE")) fail(relative + " missing execution non-authority");
  if (!text.includes("IMPLEMENTATION_STATE_AUTHORITY: NONE")) fail(relative + " missing implementation non-authority");
}

for (const file of docsFiles) {
  const relative = rel(file);
  const text = fs.readFileSync(file, "utf8");
  for (const token of [
    "DOCUMENT_CLASS:",
    "EXECUTION_AUTHORITY: NONE",
    "PRODUCT_SEMANTIC_AUTHORITY: NONE",
    "CURRENT_IMPLEMENTATION_AUTHORITY: NONE",
  ]) if (!text.includes(token)) fail(relative + " missing docs metadata: " + token);
  if (/^SEMANTIC_OWNER:/m.test(text)) fail(relative + " must not be a semantic owner");
}

const liveTextFiles = [
  ...governanceFiles,
  ...docsFiles,
  path.join(root, "README.md"),
  path.join(root, "AGENTS.md"),
].filter((file) => fs.existsSync(file));

for (const file of liveTextFiles) {
  const text = fs.readFileSync(file, "utf8");
  if (/MANDATORY_EXECUTION_STATE_MACHINE\s*=\s*1/i.test(text)) {
    fail(rel(file) + " attempts to establish a mandatory execution state machine");
  }
}

const docsIndex = read("docs/README.md");
for (const expected of expectedDocs.slice(1)) {
  const short = expected.slice("docs/".length);
  if (!docsIndex.includes(short)) fail("docs/README.md does not route: " + short);
}

const capabilityFiles = collect(path.join(root, "governance/product/capabilities"));
const capabilityIds = new Map();
for (const file of capabilityFiles) {
  const relative = rel(file);
  const text = fs.readFileSync(file, "utf8");
  const ids = [...text.matchAll(/^CAPABILITY_ID:\s*([A-Z0-9_]+)\s*$/gm)].map((m) => m[1]);
  if (ids.length !== 1) { fail(relative + " must have exactly one CAPABILITY_ID"); continue; }
  const id = ids[0];
  if (capabilityIds.has(id)) fail("duplicate CAPABILITY_ID: " + id);
  capabilityIds.set(id, relative);
  if (!text.includes("### " + id)) fail(relative + " missing capability heading for " + id);
}

const capabilityIndex = read("governance/product/CAPABILITIES.md");
for (const [id, relative] of capabilityIds) {
  const indexPath = relative.replace("governance/product/", "");
  if (!capabilityIndex.includes(indexPath) || !capabilityIndex.includes(id)) {
    fail("capability index missing owner: " + id + " -> " + indexPath);
  }
}
const indexedPathCount = (capabilityIndex.match(/capabilities\/[a-z0-9\/-]+\.md/g) || []).length;
if (indexedPathCount !== capabilityIds.size) fail("capability index count mismatch");

const journeys = read("governance/product/JOURNEYS.md");
const journeyNumbers = [...journeys.matchAll(/^##\s+J(\d+)\s+—/gm)].map((m) => Number(m[1]));
const expectedJourneyNumbers = Array.from({ length: journeyNumbers.length }, (_, i) => i);
if (JSON.stringify(journeyNumbers) !== JSON.stringify(expectedJourneyNumbers)) fail("journeys are not sequential J0..Jn");
const journeyIds = new Set(journeyNumbers.map((n) => "J" + n));

for (const id of capabilityIds.keys()) {
  const row = journeys.split("\n").find((line) => line.startsWith("| " + id + " |"));
  if (!row) { fail("capability missing journey coverage: " + id); continue; }
  const refs = [...row.matchAll(/\bJ\d+\b/g)].map((m) => m[0]);
  if (!refs.length) fail("capability coverage has no journey: " + id);
  for (const ref of refs) if (!journeyIds.has(ref)) fail("unknown journey " + ref + " in coverage for " + id);
}

for (const [file, token] of [
  ["governance/policies/documentation-and-knowledge.md", "EXACT KNOWLEDGE COMMIT SHA = ADMISSIBLE"],
  ["governance/policies/engineering.md", "PARALLEL IMPLEMENTATION != HORIZONTAL PARTIAL CLOSURE"],
  ["governance/architecture/PLATFORM-SUBSTRATE.md", "REAL REPRESENTATIVE VERTICAL + CANONICAL READBACK"],
  ["governance/product/FINANCIAL-MODEL.md", "Binary floating-point arithmetic is forbidden"],
  ["governance/product/capabilities/access/account-privacy-lifecycle.md", "CAPABILITY_ID: ACCOUNT_PRIVACY_LIFECYCLE"],
  ["governance/product/JOURNEYS.md", "## J16 — Customer account and privacy lifecycle"],
  ["governance/policies/runtime-reliability.md", "RESTORE INTO ISOLATED TARGET"],
]) if (!exists(file) || !read(file).includes(token)) fail(file + " missing recovered semantic: " + token);

for (const file of docsFiles) {
  const relative = rel(file);
  const text = fs.readFileSync(file, "utf8");
  for (const forbidden of [
    "REFERENCE_REVIEWED_ON:",
    "REFERENCE_MAX_REVIEW_AGE_DAYS:",
    "Snapshot reviewed:",
  ]) if (text.includes(forbidden)) fail(relative + " freezes mutable reference state: " + forbidden);

  if (relative !== "docs/reference/donor.md") {
    for (const retired of [
      "docs/platform-engineering-lifecycle/",
      "docs/reference/external-systems/",
      "governance/product/WORKFORCE-MODEL.md",
    ]) if (text.includes(retired)) fail(relative + " retains retired live path: " + retired);
  }
}

for (const file of docsFiles.filter((f) => rel(f).startsWith("docs/reference/") && rel(f) !== "docs/reference/donor.md")) {
  if (!fs.readFileSync(file, "utf8").includes("REFERENCE_FRESHNESS: REVALIDATE_AT_USE")) {
    fail(rel(file) + " missing external revalidation boundary");
  }
}

const release = read("docs/development/release.md");
for (const pattern of [/API level\s+\d+/i, /Xcode\s+\d+/i, /Snapshot date:/i]) {
  if (pattern.test(release)) fail("release guide freezes mutable platform requirement: " + pattern);
}

if (read("governance/project/ACTORS-TRUST-AND-SCOPE.md").includes("allowed to provision employees")) {
  fail("obsolete generic employee provisioning wording remains");
}

const security = read("governance/policies/security.md");
const phrase = "Development/bootstrap credentials or historical examples never define normal credential policy.";
if (security.split(phrase).length - 1 !== 1) fail("bootstrap credential rule must occur exactly once");

if (failures.length) {
  console.error("KNOWLEDGE_INTEGRITY=FAIL");
  for (const failure of [...new Set(failures)].sort()) console.error("  " + failure);
  process.exit(1);
}

console.log("KNOWLEDGE_INTEGRITY=PASS");
console.log("GOVERNANCE_MARKDOWN=" + governanceFiles.length);
console.log("DOCS_MARKDOWN=" + docsFiles.length);
console.log("SEMANTIC_OWNERS=" + owners.size);
console.log("CAPABILITY_OWNERS=" + capabilityIds.size);
console.log("JOURNEYS=" + journeyIds.size);
