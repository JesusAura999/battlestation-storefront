#!/usr/bin/env node
/**
 * Conversion Feature Validation Suite
 * Battlestation Supply Co. — checkout conversion guardrails
 *
 * Asserts that the live urgency/scarcity widgets, viewer counter, dispatch
 * countdown, accepted payment badges and buyer-protection guarantees all
 * exist in the ProductModal and CartDrawer components.
 *
 * Exit code 0 => all checks pass. Exit code 1 => one or more checks failed.
 */

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const PRODUCT_MODAL = resolve(
  projectRoot,
  "src/components/ProductModal.tsx"
);
const CART_DRAWER = resolve(projectRoot, "src/components/CartDrawer.tsx");

const PAYMENT_METHODS = [
  "Apple Pay",
  "Google Pay",
  "Shop Pay",
  "PayPal",
  "Visa",
  "Mastercard",
];

const BUYER_GUARANTEES = [
  "30-Day Zero-Risk Return Policy",
  "100% Insured Priority Tracking",
  "256-Bit SSL Encrypted Checkout",
];

const results = [];

function readSource(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`Required source file not found: ${filePath}`);
  }
  return readFileSync(filePath, "utf8");
}

function extractLucideImports(source) {
  const match = source.match(/import\s*\{([\s\S]*?)\}\s*from\s*"lucide-react"/);
  if (!match) return new Set();
  return new Set(
    match[1]
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean)
  );
}

function record(name, passed, detail) {
  results.push({ name, passed, detail });
}

function assertIncludes(name, source, needle) {
  record(name, source.includes(needle), `expected to find "${needle}"`);
}

function assertAllIncluded(name, source, needles) {
  const missing = needles.filter((needle) => !source.includes(needle));
  record(
    name,
    missing.length === 0,
    missing.length === 0
      ? `all ${needles.length} tokens present`
      : `missing: ${missing.map((m) => `"${m}"`).join(", ")}`
  );
}

function assertIcons(name, source, icons) {
  const imported = extractLucideImports(source);
  const missing = icons.filter((icon) => !imported.has(icon));
  record(
    name,
    missing.length === 0,
    missing.length === 0
      ? `all ${icons.length} lucide icons imported`
      : `missing imports: ${missing.join(", ")}`
  );
}

let productModalSource = "";
let cartDrawerSource = "";

try {
  productModalSource = readSource(PRODUCT_MODAL);
  cartDrawerSource = readSource(CART_DRAWER);
} catch (error) {
  console.error(`\n[FATAL] ${error.message}\n`);
  process.exit(1);
}

/* ------------------------------------------------------------------ *
 * ProductModal.tsx checks
 * ------------------------------------------------------------------ */

assertIncludes(
  "ProductModal: scarcity indicator",
  productModalSource,
  "High Demand: Only 4 units remaining in current batch"
);

assertAllIncluded("ProductModal: live viewer counter", productModalSource, [
  "engineers viewing right now",
  "useState(14)",
  "animate-ping",
]);

assertAllIncluded("ProductModal: dispatch countdown timer", productModalSource, [
  "Order within",
  "for guaranteed same-day dispatch from our US warehouse",
  "setDispatchSeconds",
  "setInterval",
]);

assertAllIncluded(
  "ProductModal: accepted payment badges",
  productModalSource,
  PAYMENT_METHODS
);

assertAllIncluded(
  "ProductModal: buyer protection guarantees",
  productModalSource,
  BUYER_GUARANTEES
);

assertIcons("ProductModal: lucide icon imports", productModalSource, [
  "Flame",
  "Eye",
  "Clock",
  "Lock",
  "BadgeCheck",
  "CreditCard",
]);

/* ------------------------------------------------------------------ *
 * CartDrawer.tsx checks
 * ------------------------------------------------------------------ */

assertAllIncluded(
  "CartDrawer: accepted payment badges",
  cartDrawerSource,
  PAYMENT_METHODS
);

assertAllIncluded(
  "CartDrawer: buyer protection guarantees",
  cartDrawerSource,
  BUYER_GUARANTEES
);

assertIcons("CartDrawer: lucide icon imports", cartDrawerSource, [
  "Lock",
  "BadgeCheck",
  "CreditCard",
]);

/* ------------------------------------------------------------------ *
 * Report
 * ------------------------------------------------------------------ */

const passCount = results.filter((r) => r.passed).length;
const failCount = results.length - passCount;

console.log("\n==================================================");
console.log("  CONVERSION FEATURE VALIDATION SUITE");
console.log("  Battlestation Supply Co. Storefront");
console.log("==================================================");

for (const result of results) {
  const status = result.passed ? "PASS" : "FAIL";
  const icon = result.passed ? "[OK]" : "[X] ";
  console.log(`${icon} ${status}  ${result.name}`);
  if (!result.passed) {
    console.log(`         -> ${result.detail}`);
  }
}

console.log("--------------------------------------------------");
console.log(
  `  RESULT: ${passCount}/${results.length} passed, ${failCount} failed`
);
console.log("==================================================\n");

process.exit(failCount === 0 ? 0 : 1);
