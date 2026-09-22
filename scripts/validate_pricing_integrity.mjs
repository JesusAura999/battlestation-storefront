/**
 * PRIORITY-1 PRICING INTEGRITY & CHECKOUT PERMALINK VALIDATION SUITE
 * ------------------------------------------------------------------
 * Critical invariants enforced:
 *  (a) Desk Mat variant 50825409954035 has price === 29 and compareAtPrice === 45.
 *  (b) All 28 catalog products expose a valid numeric shopifyVariantId,
 *      a positive price, and compareAtPrice >= price.
 *  (c) Every checkout permalink in Hero.tsx, PromoBanner.tsx,
 *      RiskReversalGuarantee.tsx, ProductGrid.tsx and ProductModal.tsx
 *      references a valid active Shopify variant id and a recognized
 *      discount parameter.
 *  (d) Exit code 0 on success, exit code 1 with descriptive errors on failure.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storefrontRoot = path.resolve(__dirname, "..");

const PRODUCTS_PATH = path.join(storefrontRoot, "src", "data", "products.ts");
const PERMALINK_COMPONENTS = [
  "src/components/Hero.tsx",
  "src/components/PromoBanner.tsx",
  "src/components/RiskReversalGuarantee.tsx",
  "src/components/ProductGrid.tsx",
  "src/components/ProductModal.tsx",
];

const TARGET_VARIANT_ID = "50825409954035";
const EXPECTED_PRICE = 29;
const EXPECTED_COMPARE_AT = 45;
const EXPECTED_PRODUCT_COUNT = 28;
const SHOPIFY_STORE_DOMAIN = "kjsy4w-34.myshopify.com";

const KNOWN_DISCOUNT_CODES = new Set([
  "FOUNDER50",
  "BLUEPRINT15",
  "SETUPWARS10",
  "VIP20",
  "DEV10",
  "WARS10",
  "COCKPIT15",
]);

const errors = [];
let passed = 0;
let total = 0;

function check(condition, message) {
  total++;
  if (condition) {
    passed++;
    console.log(`  \u2705 [PASS] ${message}`);
  } else {
    console.error(`  \u274C [FAIL] ${message}`);
    errors.push(message);
  }
}

function readFileOrFail(relPath) {
  const abs = path.join(storefrontRoot, relPath);
  if (!fs.existsSync(abs)) {
    errors.push(`Missing required file: ${relPath}`);
    return null;
  }
  return fs.readFileSync(abs, "utf-8");
}

// ---------------------------------------------------------------------------
// PARSER: extract product objects from products.ts
// ---------------------------------------------------------------------------
function parseProducts(source) {
  const products = [];
  const objectRegex = /\{[\s\S]*?\n  \}/g;
  const blocks = source.match(objectRegex) || [];

  for (const block of blocks) {
    const variantMatch = block.match(/"shopifyVariantId":\s*"([^"]*)"/);
    if (!variantMatch) continue;

    const idMatch = block.match(/"id":\s*"([^"]*)"/);
    const priceMatch = block.match(/"price":\s*(-?\d+(?:\.\d+)?)/);
    const compareMatch = block.match(/"compareAtPrice":\s*(-?\d+(?:\.\d+)?)/);
    const titleMatch = block.match(/"title":\s*"([^"]*)"/);

    products.push({
      id: idMatch ? idMatch[1] : "",
      shopifyVariantId: variantMatch[1],
      price: priceMatch ? Number(priceMatch[1]) : NaN,
      compareAtPrice: compareMatch ? Number(compareMatch[1]) : NaN,
      title: titleMatch ? titleMatch[1] : "(untitled)",
    });
  }

  return products;
}

// ---------------------------------------------------------------------------
// PERMALINK SCANNER: extract hardcoded /cart/<var>:<qty>?discount=<code> links
// ---------------------------------------------------------------------------
function extractPermalinks(source) {
  const links = [];
  const regex = /https:\/\/kjsy4w-34\.myshopify\.com\/cart\/([^"`\s?]+)(?:\?discount=([A-Za-z0-9_-]+))?/g;
  let match;
  while ((match = regex.exec(source)) !== null) {
    links.push({ path: match[1], discount: match[2] || null });
  }
  return links;
}

// A permalink line is "dynamic" when its variant id is a template expression
// (e.g. ${product.shopifyVariantId}) resolved at runtime from the catalog,
// rather than a hardcoded numeric literal.
function isDynamicVariantRef(variantId) {
  return variantId.includes("${");
}

console.log("============================================================");
console.log("PRICING INTEGRITY & CHECKOUT PERMALINK VALIDATION");
console.log("============================================================\n");

// ---------------------------------------------------------------------------
// Section 0: Load source files
// ---------------------------------------------------------------------------
console.log("[0] SOURCE FILE LOAD");
const productsSource = readFileOrFail("src/data/products.ts");
const componentSources = {};
for (const rel of PERMALINK_COMPONENTS) {
  const content = readFileOrFail(rel);
  if (content !== null) componentSources[rel] = content;
}
check(productsSource !== null, "src/data/products.ts is present and readable");

if (productsSource === null) {
  console.error("\nFATAL: products.ts missing. Aborting.");
  process.exit(1);
}

const products = parseProducts(productsSource);

// ---------------------------------------------------------------------------
// Section A: Desk Mat target variant pricing
// ---------------------------------------------------------------------------
console.log("\n[A] DESK MAT TARGET VARIANT (50825409954035)");
const deskMat = products.find((p) => p.shopifyVariantId === TARGET_VARIANT_ID);
check(!!deskMat, `Variant ${TARGET_VARIANT_ID} exists in products.ts`);
if (deskMat) {
  check(
    deskMat.price === EXPECTED_PRICE,
    `Desk Mat price === ${EXPECTED_PRICE} (found: ${deskMat.price})`
  );
  check(
    deskMat.compareAtPrice === EXPECTED_COMPARE_AT,
    `Desk Mat compareAtPrice === ${EXPECTED_COMPARE_AT} (found: ${deskMat.compareAtPrice})`
  );
}

// ---------------------------------------------------------------------------
// Section B: Full-catalog invariants (all 28 products)
// ---------------------------------------------------------------------------
console.log("\n[B] FULL CATALOG INVARIANTS");
check(
  products.length === EXPECTED_PRODUCT_COUNT,
  `Catalog contains exactly ${EXPECTED_PRODUCT_COUNT} products (found: ${products.length})`
);

const seenIds = new Set();
for (const p of products) {
  const label = `"${p.title}" (${p.shopifyVariantId})`;
  check(
    /^\d{6,}$/.test(p.shopifyVariantId),
    `Valid numeric Shopify variant id for ${label}`
  );
  check(
    Number.isFinite(p.price) && p.price > 0,
    `Positive numeric price for ${label} (found: ${p.price})`
  );
  check(
    Number.isFinite(p.compareAtPrice) && p.compareAtPrice >= p.price,
    `compareAtPrice >= price for ${label} (found: compareAt ${p.compareAtPrice} vs price ${p.price})`
  );
  check(!seenIds.has(p.shopifyVariantId), `Unique variant id for ${label}`);
  seenIds.add(p.shopifyVariantId);
}

const validVariantIds = new Set(products.map((p) => p.shopifyVariantId));
const validProductIds = new Set(products.map((p) => p.id).filter(Boolean));

// ---------------------------------------------------------------------------
// Section C: Checkout permalink audit
// ---------------------------------------------------------------------------
console.log("\n[C] CHECKOUT PERMALINK AUDIT");
for (const rel of PERMALINK_COMPONENTS) {
  const source = componentSources[rel];
  if (!source) {
    check(false, `${rel} present for permalink audit`);
    continue;
  }

  const links = extractPermalinks(source);
  check(links.length > 0, `${rel} contains at least one hardcoded checkout permalink`);

  for (const link of links) {
    // Permalink path segment can be: <variantId>:<qty> or comma-separated lines
    const lines = link.path.split(",");
    for (const line of lines) {
      const [variantId, qtyRaw] = line.split(":");

      if (isDynamicVariantRef(variantId)) {
        // Dynamic reference: assert the component sources variant ids from the catalog.
        check(
          source.includes("shopifyVariantId"),
          `${rel}: dynamic variant reference "${variantId}" is bound to catalog shopifyVariantId`
        );
        check(
          /from\s+["']@\/data\/products["']/.test(source),
          `${rel}: dynamic variant reference is backed by the imported product catalog`
        );
        check(
          isDynamicVariantRef(qtyRaw) || (Number.isInteger(Number(qtyRaw)) && Number(qtyRaw) > 0),
          `${rel}: dynamic variant quantity "${qtyRaw}" is a positive value or runtime expression`
        );
        continue;
      }

      const qty = Number(qtyRaw);

      check(
        /^\d{6,}$/.test(variantId),
        `${rel}: "${variantId}" is a valid numeric variant id`
      );
      check(
        validVariantIds.has(variantId),
        `${rel}: variant ${variantId} exists in the active catalog`
      );
      check(
        Number.isInteger(qty) && qty > 0,
        `${rel}: variant ${variantId} has a positive integer quantity (found: ${qtyRaw})`
      );
    }

    check(
      link.discount !== null && KNOWN_DISCOUNT_CODES.has(link.discount),
      `${rel}: discount parameter "${link.discount}" is a recognized active code`
    );
  }
}

// ---------------------------------------------------------------------------
// Section D: Founder Kit canonical permalink consistency
// ---------------------------------------------------------------------------
console.log("\n[D] CANONICAL FOUNDER KIT PERMALINK");
const canonicalFounderUrl = `https://${SHOPIFY_STORE_DOMAIN}/cart/${TARGET_VARIANT_ID}:1?discount=FOUNDER50`;
for (const rel of [
  "src/components/Hero.tsx",
  "src/components/PromoBanner.tsx",
  "src/components/RiskReversalGuarantee.tsx",
]) {
  const source = componentSources[rel];
  if (!source) {
    check(false, `${rel} present for Founder Kit audit`);
    continue;
  }
  check(
    source.includes(canonicalFounderUrl),
    `${rel} references the canonical $29 Founder Kit permalink`
  );
  check(
    source.includes("FOUNDER50"),
    `${rel} references the FOUNDER50 discount code`
  );
  check(
    source.includes("$29"),
    `${rel} advertises the $29 Founder Kit price point`
  );
  check(
    source.includes("$41"),
    `${rel} advertises the Free $41 Digital Vault offer`
  );
}

// PromoBanner must copy the FOUNDER50 code, never the generic default code.
const promoBannerSource = componentSources["src/components/PromoBanner.tsx"];
if (promoBannerSource) {
  check(
    /writeText\(\s*(?:["']FOUNDER50["']|FOUNDER_DISCOUNT_CODE)\s*\)/.test(
      promoBannerSource
    ),
    "PromoBanner copy action writes the FOUNDER50 code"
  );
  check(
    !/writeText\(\s*DEFAULT_DISCOUNT_CODE\s*\)/.test(promoBannerSource),
    "PromoBanner copy action does not write the generic default code"
  );
}

// ---------------------------------------------------------------------------
// Section E: Shared checkout builder domain consistency
// ---------------------------------------------------------------------------
console.log("\n[E] SHARED CHECKOUT BUILDER");
const checkoutLib = readFileOrFail("src/lib/checkout.ts");
if (checkoutLib) {
  check(
    checkoutLib.includes(`"${SHOPIFY_STORE_DOMAIN}"`),
    `src/lib/checkout.ts targets the live storefront domain ${SHOPIFY_STORE_DOMAIN}`
  );
}

// ---------------------------------------------------------------------------
// Section F: Product-bound CTA binding (no phantom catalog ids)
// ---------------------------------------------------------------------------
console.log("\n[F] PRODUCT-BOUND CTA BINDING");
const BINDING_COMPONENTS = [
  "src/components/Hero.tsx",
  "src/components/NotionOsPreview.tsx",
  "src/components/BundleConfigurator.tsx",
  "src/components/LiveActivityTicker.tsx",
];
for (const rel of BINDING_COMPONENTS) {
  const source = readFileOrFail(rel);
  if (!source) continue;

  const referencedIds = new Set();
  for (const re of [/p\.id\s*===\s*"([^"]+)"/g, /productId:\s*"([^"]+)"/g]) {
    let m;
    while ((m = re.exec(source)) !== null) {
      if (m[1].startsWith("prod-")) referencedIds.add(m[1]);
    }
  }

  for (const id of referencedIds) {
    check(
      validProductIds.has(id),
      `${rel}: referenced product id "${id}" exists in the active catalog`
    );
  }
}

// The $29 Notion OS CTA must bind to the $29 Notion OS variant.
const notionSource = readFileOrFail("src/components/NotionOsPreview.tsx");
if (notionSource) {
  check(
    notionSource.includes("50825384952051"),
    "NotionOsPreview binds its $29 CTA to the Notion OS variant 50825384952051"
  );
}

// The $59 Cockpit bundle CTA must bind to the bundle variant.
const heroSource = componentSources["src/components/Hero.tsx"];
if (heroSource) {
  check(
    heroSource.includes("50839092494579"),
    "Hero binds the $59 Cockpit Suite CTA to the bundle variant 50839092494579"
  );
}

// ---------------------------------------------------------------------------
// RESULTS
// ---------------------------------------------------------------------------
console.log("\n============================================================");
if (errors.length > 0) {
  console.error(`VALIDATION FAILED: ${passed}/${total} checks passed, ${errors.length} error(s).`);
  console.error("\nFailures:");
  for (const err of errors) console.error(`  - ${err}`);
  console.log("============================================================");
  process.exit(1);
}
console.log(`VALIDATION PASSED: ${passed}/${total} checks passed.`);
console.log("Pricing integrity verified. Exit Code 0.");
console.log("============================================================");
process.exit(0);
