import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const failures = [];
const glossaryPath = "governance/project/GLOSSARY.md";

function collect(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collect(absolute));
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(absolute);
  }
  return out;
}

function rel(file) {
  return path.relative(root, file).split(path.sep).join("/");
}

function tokenize(text) {
  return text
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/[^a-z0-9\s]+/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function hasSequence(tokens, words) {
  if (words.length > tokens.length) return false;
  for (let index = 0; index <= tokens.length - words.length; index += 1) {
    if (words.every((word, offset) => tokens[index + offset] === word)) return true;
  }
  return false;
}

const liveFiles = [
  ...collect(path.join(root, "governance")),
  ...collect(path.join(root, "docs")),
  path.join(root, "README.md"),
  path.join(root, "AGENTS.md"),
].filter((file) => fs.existsSync(file));

const retiredTerms = [
  ["platform", "owner"],
  ["operator", "owner"],
];

for (const file of liveFiles) {
  const relative = rel(file);
  if (relative === glossaryPath) continue;
  const tokens = tokenize(fs.readFileSync(file, "utf8"));
  for (const words of retiredTerms) {
    if (hasSequence(tokens, words)) {
      failures.push(`${relative} retains retired control-panel identity term: ${words.join(" ")}`);
    }
  }
}

const glossary = fs.readFileSync(path.join(root, ...glossaryPath.split("/")), "utf8");
for (const required of [
  "CONTROL_PANEL = ADMINISTRATIVE_SURFACE",
  "OPERATOR = ONLY_CONTROL_PANEL_HUMAN_ROLE",
  "FIRST_OPERATOR_BOOTSTRAP = ONE_TIME_IDENTITY_LIFECYCLE",
  "PLATFORM_OWNER = NOT_ADMITTED",
  "OPERATOR_OWNER = NOT_ADMITTED",
]) {
  if (!glossary.includes(required)) failures.push(`glossary missing control-panel identity invariant: ${required}`);
}

const actors = fs.readFileSync(path.join(root, "governance/project/ACTORS-TRUST-AND-SCOPE.md"), "utf8");
for (const required of [
  "operator → control-panel",
  "`Operator` is one Product persona and one `operator` role bound to one `actor_id`.",
]) {
  if (!actors.includes(required)) failures.push(`actors model missing canonical control-panel/operator mapping: ${required}`);
}

const identity = fs.readFileSync(path.join(root, "governance/product/capabilities/access/identity-activation-sessions.md"), "utf8");
for (const required of [
  "the current role set is exactly `client`, `partner`, `captain`, `field`, `operator`",
  "No second control-panel human role above `operator`.",
  "first-Operator bootstrap is an irreversible one-time Identity lifecycle rather than a second role or domain",
]) {
  if (!identity.includes(required)) failures.push(`Identity governance missing canonical Operator-only invariant: ${required}`);
}

if (failures.length) {
  console.error("CONTROL_PANEL_IDENTITY_VOCABULARY=FAIL");
  for (const failure of failures) console.error("  " + failure);
  process.exit(1);
}

console.log("CONTROL_PANEL_IDENTITY_VOCABULARY=PASS");
console.log("CONTROL_PANEL_SURFACE=control-panel");
console.log("CONTROL_PANEL_HUMAN_ROLE=operator");
console.log("RETIRED_CONTROL_PANEL_IDENTITY_TERMS=0");
