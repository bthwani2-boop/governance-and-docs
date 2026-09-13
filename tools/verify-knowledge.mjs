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
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...collect(p));
    else if (e.isFile()) out.push(p);
  }
  return out.sort();
}

const required = [
  "AGENTS.md",
  "README.md",
  "governance/GOVERNANCE.md",
  "governance/platform/PLATFORM.md",
  "governance/product/PRODUCT.md",
  "governance/product/CAPABILITIES.md",
  "governance/product/JOURNEYS.md",
  "governance/system/SYSTEM.md",
  "docs/README.md",
  "docs/DEVELOPMENT.md",
  "docs/OPERATIONS.md",
];
for (const p of required) if (!exists(p)) fail(`missing required knowledge entrypoint: ${p}`);

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
for (const f of governanceFiles) {
  const r = rel(f);
  if (!allowedGovernancePrefixes.some((p) => r === p || r.startsWith(p))) {
    fail(`unexpected governance ownership lane: ${r}`);
  }
}

const owners = new Map();
for (const f of governanceFiles) {
  const r = rel(f);
  const text = fs.readFileSync(f, "utf8");
  const ownerMatches = [...text.matchAll(/^SEMANTIC_OWNER:\s*(\S+)\s*$/gm)].map((m) => m[1]);
  if (ownerMatches.length !== 1) {
    fail(`${r} must declare exactly one SEMANTIC_OWNER`);
    continue;
  }
  const owner = ownerMatches[0];
  if (owner !== r) fail(`${r} SEMANTIC_OWNER mismatch: ${owner}`);
  if (owners.has(owner)) fail(`duplicate SEMANTIC_OWNER: ${owner}`);
  owners.set(owner, r);
  if (!text.includes("EXECUTION_AUTHORITY: NONE")) fail(`${r} missing execution non-authority`);
  if (!text.includes("IMPLEMENTATION_STATE_AUTHORITY: NONE")) fail(`${r} missing implementation-state non-authority`);
}

for (const f of docsFiles) {
  const r = rel(f);
  const text = fs.readFileSync(f, "utf8");
  if (!text.includes("DOCUMENT_CLASS:")) fail(`${r} missing DOCUMENT_CLASS`);
  if (!text.includes("EXECUTION_AUTHORITY: NONE")) fail(`${r} missing execution non-authority`);
  if (!text.includes("PRODUCT_SEMANTIC_AUTHORITY: NONE")) fail(`${r} missing Product non-authority`);
  if (!text.includes("CURRENT_IMPLEMENTATION_AUTHORITY: NONE")) fail(`${r} missing implementation non-authority`);
  if (/^SEMANTIC_OWNER:/m.test(text)) fail(`${r} must not be a semantic owner`);
}

const capabilityRoot = path.join(root, "governance/product/capabilities");
const capabilityFiles = collect(capabilityRoot).filter((p) => p.endsWith(".md"));
const capabilityIds = new Map();
for (const f of capabilityFiles) {
  const r = rel(f);
  const text = fs.readFileSync(f, "utf8");
  const ids = [...text.matchAll(/^CAPABILITY_ID:\s*([A-Z0-9_]+)\s*$/gm)].map((m) => m[1]);
  if (ids.length !== 1) {
    fail(`${r} must declare exactly one CAPABILITY_ID`);
    continue;
  }
  const id = ids[0];
  if (capabilityIds.has(id)) fail(`duplicate CAPABILITY_ID: ${id}`);
  capabilityIds.set(id, r);
  if (/^STATUS:\s*FUTURE\s*$/mi.test(text)) fail(`${r} attempts to keep future Product breadth live`);
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

const journeys = read("governance/product/JOURNEYS.md");
const journeyNumbers = [...journeys.matchAll(/^##\s+J(\d+)\s+/gm)].map((m) => Number(m[1]));
for (let i = 0; i < journeyNumbers.length; i += 1) if (journeyNumbers[i] !== i) fail(`journeys must be sequential J0..Jn; found ${journeyNumbers.join(",")}`);
for (const id of admittedIds) if (!journeys.includes(`\`${id}\``)) fail(`admitted capability has no current journey coverage: ${id}`);

const referenceFiles = docsFiles.filter((p) => rel(p).startsWith("docs/reference/"));
if (!referenceFiles.length) fail("no external reference routing exists");
const urlOwners = new Map();
for (const f of referenceFiles) {
  const r = rel(f);
  const text = fs.readFileSync(f, "utf8");
  for (const token of ["ADOPTION_AUTHORITY: NONE", "REFERENCE_FRESHNESS: REVALIDATE_AT_USE", "REFERENCE_CLASS:"]) {
    if (!text.includes(token)) fail(`${r} missing reference boundary: ${token}`);
  }
  for (const m of text.matchAll(/https?:\/\/[^\s)>`]+/g)) {
    const url = m[0].replace(/[.,;:]$/, "");
    if (urlOwners.has(url) && urlOwners.get(url) !== r) fail(`duplicate curated external URL: ${url} in ${urlOwners.get(url)} and ${r}`);
    else urlOwners.set(url, r);
  }
}

const docsIndex = read("docs/README.md");
for (const f of docsFiles) {
  const r = rel(f);
  if (r === "docs/README.md") continue;
  const local = r.slice("docs/".length);
  if (!docsIndex.includes(`\`${local}\``)) fail(`docs/README.md does not route ${local}`);
}

const liveKnowledge = [...governanceFiles, ...docsFiles, path.join(root, "AGENTS.md"), path.join(root, "README.md")].filter(fs.existsSync);
const stalePathTokens = ["governance/project/", "governance/architecture/", "governance/policies/", "docs/method/", "docs/development/", "docs/runbooks/"];
for (const f of liveKnowledge) {
  const r = rel(f);
  const text = fs.readFileSync(f, "utf8");
  for (const token of stalePathTokens) if (text.includes(token)) fail(`${r} retains retired live path: ${token}`);
}

if (failures.length) {
  console.error("KNOWLEDGE_INTEGRITY=FAIL");
  for (const f of [...new Set(failures)].sort()) console.error(`  ${f}`);
  process.exit(1);
}

console.log("KNOWLEDGE_INTEGRITY=PASS");
console.log(`SEMANTIC_OWNERS=${owners.size}`);
console.log(`ADMITTED_CAPABILITIES=${capabilityIds.size}`);
console.log(`REFERENCE_FILES=${referenceFiles.length}`);
console.log(`CURATED_EXTERNAL_URLS=${urlOwners.size}`);
