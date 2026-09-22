#!/usr/bin/env node
/**
 * FIRST SALE STRATEGY VALIDATION SUITE
 * Battlestation Supply Co. — first-customer growth guardrails
 *
 * Programmatically asserts that reports/FIRST_SALE_STRATEGY.md:
 *   1. Exists and is substantive (> 2000 bytes).
 *   2. Explicitly answers "Should we add more products?" with NO / FREEZE.
 *   3. Contains the Front-Door Tripwire Offer ($29 Topographic Mat + Free Digital Vault).
 *   4. Details all 4 high-intent distribution channels (Reddit, Discord, X/Twitter, Video).
 *   5. Provides the FOUNDER50 promotional mechanic (Batch 001 provenance).
 *
 * Exit code 0 => all checks pass. Exit code 1 => one or more checks failed.
 */

import { readFileSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const REPORT_PATH = resolve(projectRoot, "reports", "FIRST_SALE_STRATEGY.md");

const MIN_BYTES = 2000;

const results = [];

function record(name, passed, detail) {
  results.push({ name, passed, detail });
}

function assert(condition, name, detail) {
  record(name, Boolean(condition), detail);
}

/* ------------------------------------------------------------------ *
 * Load report
 * ------------------------------------------------------------------ */
let raw = "";
let bytes = 0;

if (existsSync(REPORT_PATH)) {
  raw = readFileSync(REPORT_PATH, "utf8");
  bytes = statSync(REPORT_PATH).size;
} else {
  console.error(`\n[FATAL] Required report not found: ${REPORT_PATH}\n`);
  process.exit(1);
}

const text = raw.toLowerCase();

/* ------------------------------------------------------------------ *
 * 1. Existence + substance
 * ------------------------------------------------------------------ */
assert(bytes > MIN_BYTES, "Report exists and exceeds 2000 bytes", `size = ${bytes} bytes (min ${MIN_BYTES})`);

/* ------------------------------------------------------------------ *
 * 2. Explicit NO / FREEZE answer to the catalog question
 * ------------------------------------------------------------------ */
assert(
  /should we add more products/.test(text),
  "Report restates the founder question verbatim (\"Should we add more products?\")",
  "expected the question text to appear in the report"
);
assert(
  /no\.\s*freeze/.test(text) || /freeze the (product )?catalog/.test(text),
  "Report explicitly answers with NO / FREEZE the catalog",
  "expected a NO. / FREEZE the catalog directive"
);
assert(
  /frozen at 28/.test(text) && /\bfreeze\b/.test(text),
  "Report states the catalog is FREEZE'd at 28 SKUs",
  "expected the catalog to be frozen at 28 SKUs"
);

/* ------------------------------------------------------------------ *
 * 3. Front-Door Tripwire Offer
 * ------------------------------------------------------------------ */
assert(
  /tripwire/.test(text),
  "Report defines the Front-Door Tripwire Offer",
  "expected the term \"tripwire\" to appear"
);
assert(
  /topographic/.test(text) && /\$29/.test(text),
  "Tripwire includes the $29 Topographic Desk Mat",
  "expected both \"topographic\" and \"$29\" in the report"
);
assert(
  /digital vault/.test(text) && /\$41/.test(text),
  "Tripwire includes the Free $41 Digital Vault (zero marginal cost)",
  "expected \"digital vault\" and \"$41\" to appear"
);
assert(
  /60(\.\d+)?%\s*gross margin|gross margin[^.\n]*60/.test(text),
  "Report documents the preserved 60% gross margin",
  "expected a 60% gross margin claim"
);

/* ------------------------------------------------------------------ *
 * 4. Four high-intent distribution channels
 * ------------------------------------------------------------------ */
const channels = [
  { label: "Reddit", re: /reddit/, needle: "reddit" },
  { label: "Discord", re: /discord/, needle: "discord" },
  { label: "X / Twitter", re: /(x\s*\/\s*twitter|twitter)/, needle: "x / twitter" },
  { label: "Short-form Video", re: /(short-form|video)/, needle: "video" },
];

for (const channel of channels) {
  record(
    `Distribution channel documented: ${channel.label}`,
    channel.re.test(text),
    `expected a ${channel.label} channel (token: "${channel.needle}")`
  );
}
assert(
  /trojan horse/.test(text) && /gifting/.test(text) && /spill test/.test(text) && /thock/.test(text),
  "All four channel mechanics present (Trojan Horse, Gifting, Spill Test, Thock Test)",
  "expected Reddit Trojan Horse, X gifting, hydrophobic spill test, and thock test references"
);

/* ------------------------------------------------------------------ *
 * 5. FOUNDER50 promotional mechanic + Batch 001 provenance
 * ------------------------------------------------------------------ */
assert(
  /founder50/.test(text),
  "Report provides the FOUNDER50 promotional mechanic",
  "expected the token \"FOUNDER50\""
);
assert(
  /batch\s*001/.test(text),
  "Report ties FOUNDER50 to Batch 001 scarcity provenance",
  "expected \"Batch 001\" provenance"
);
assert(
  /50\s*(redemptions|founder (units|spots)|orders)/.test(text) || /first 50/.test(text),
  "FOUNDER50 is capped at 50 founding units",
  "expected a 50-unit cap / first-50 framing"
);

/* ------------------------------------------------------------------ *
 * Report
 * ------------------------------------------------------------------ */
const passCount = results.filter((r) => r.passed).length;
const failCount = results.length - passCount;

console.log("\n==================================================");
console.log("  FIRST SALE STRATEGY VALIDATION SUITE");
console.log("  Battlestation Supply Co. Storefront");
console.log("==================================================");
console.log(`  Report: ${REPORT_PATH}`);
console.log(`  Size:   ${bytes} bytes`);
console.log("--------------------------------------------------");

for (const result of results) {
  const icon = result.passed ? "[OK]  " : "[X]   ";
  console.log(`${icon}${result.passed ? "PASS" : "FAIL"}  ${result.name}`);
  if (!result.passed) {
    console.log(`           -> ${result.detail}`);
  }
}

console.log("--------------------------------------------------");
console.log(`  RESULT: ${passCount}/${results.length} passed, ${failCount} failed`);
console.log("==================================================\n");

process.exit(failCount === 0 ? 0 : 1);
