import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const failures = [];
const MAX_BYTES = 24000;

function collectMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectMarkdown(absolute));
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(absolute);
  }
  return out;
}

function rel(file) {
  return path.relative(root, file).replaceAll("\\", "/");
}

const governance = collectMarkdown(path.join(root, "governance"));
const docs = collectMarkdown(path.join(root, "docs"));
const all = [...governance, ...docs];

for (const required of [
  "governance/GOVERNANCE.md",
  "docs/README.md",
]) {
  if (!fs.existsSync(path.join(root, ...required.split("/")))) {
    failures.push("missing required knowledge entrypoint: " + required);
  }
}

for (const forbidden of [
  "tools/prompting/bthwani-orchestrator",
  "governance/decisions",
  "docs/platform-engineering-lifecycle",
  "docs/reference/target-operations",
]) {
  if (fs.existsSync(path.join(root, ...forbidden.split("/")))) {
    failures.push("forbidden live authority/residue exists: " + forbidden);
  }
}

const owners = new Map();
for (const file of governance) {
  const relative = rel(file);
  const body = fs.readFileSync(file, "utf8");
  const size = fs.statSync(file).size;
  if (size > MAX_BYTES) {
    failures.push(relative + " exceeds canonical knowledge size limit: " + size);
  }
  const declared = [...body.matchAll(/^SEMANTIC_OWNER:\s*(\S+)\s*$/gm)].map((m) => m[1]);
  if (declared.length > 1) failures.push(relative + " declares multiple SEMANTIC_OWNER values");
  if (declared.length === 1) {
    if (declared[0] !== relative) {
      failures.push(relative + " SEMANTIC_OWNER mismatch: " + declared[0]);
    }
    if (owners.has(declared[0])) {
      failures.push("duplicate SEMANTIC_OWNER: " + declared[0]);
    }
    owners.set(declared[0], relative);
  }
}

for (const file of docs) {
  const relative = rel(file);
  const body = fs.readFileSync(file, "utf8");
  const size = fs.statSync(file).size;
  if (size > MAX_BYTES) {
    failures.push(relative + " exceeds canonical knowledge size limit: " + size);
  }
  for (const token of [
    "DOCUMENT_CLASS:",
    "EXECUTION_AUTHORITY: NONE",
    "PRODUCT_SEMANTIC_AUTHORITY: NONE",
    "CURRENT_IMPLEMENTATION_AUTHORITY: NONE",
  ]) {
    if (!body.includes(token)) failures.push(relative + " missing Docs metadata: " + token);
  }
}

for (const file of all) {
  const body = fs.readFileSync(file, "utf8");
  const relative = rel(file);

  if (body.includes("tools/dev/open-integration-runtime.ps1")) {
    failures.push(relative + " contains retired runtime-open path");
  }

  for (const match of body.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    let ref = match[1].trim();
    if (!ref || /^(https?:|mailto:|tel:|#)/i.test(ref)) continue;
    ref = ref.split("#", 1)[0].split("?", 1)[0];
    if (!ref || /[<>{}*]/.test(ref)) continue;

    const absolute = ref.startsWith("/")
      ? path.join(root, ref.slice(1))
      : path.resolve(path.dirname(file), ref);
    const relativeTarget = path.relative(root, absolute);
    if (relativeTarget.startsWith("..") || path.isAbsolute(relativeTarget)) {
      failures.push(relative + " link escapes knowledge repository: " + match[1]);
      continue;
    }
    if (!fs.existsSync(absolute)) {
      failures.push(relative + " has broken internal link: " + match[1]);
    }
  }
}

const securityPath = path.join(root, "governance/policies/security.md");
if (fs.existsSync(securityPath)) {
  const security = fs.readFileSync(securityPath, "utf8");
  const phrase = "Development/bootstrap credentials or historical examples never define normal Identity credential policy.";
  const occurrences = security.split(phrase).length - 1;
  if (occurrences !== 1) {
    failures.push("security bootstrap credential policy must occur exactly once; found " + occurrences);
  }
}

if (failures.length) {
  console.error("KNOWLEDGE_INTEGRITY=FAIL");
  for (const failure of [...new Set(failures)].sort()) console.error("  " + failure);
  process.exit(1);
}

console.log("KNOWLEDGE_INTEGRITY=PASS");
console.log("GOVERNANCE_MARKDOWN=" + governance.length);
console.log("DOCS_MARKDOWN=" + docs.length);
console.log("SEMANTIC_OWNERS=" + owners.size);
