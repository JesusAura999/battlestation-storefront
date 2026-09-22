/**
 * Automated Verification Suite for Batch 001 / FOUNDER50 Tripwire & Workflow Upgrade
 * Asserts:
 * 1. PromoBanner.tsx features FOUNDER50 and Batch 001 launch notice.
 * 2. Hero.tsx implements direct 1-click Founder Kit permalink with FOUNDER50.
 * 3. RiskReversalGuarantee.tsx implements the 30-day Spill & Glide ironclad refund guarantee.
 * 4. StorefrontClient.tsx imports and renders RiskReversalGuarantee.
 * 5. OpenCode bridge runner incorporates REST daemon architecture on port 4096.
 * 6. Catalog maintains exact 28-product freeze invariant.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storefrontRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(storefrontRoot, "..");

let passedAssertions = 0;
let totalAssertions = 0;

function assert(condition, message) {
  totalAssertions++;
  if (!condition) {
    console.error(`❌ [FAIL] Assertion failed: ${message}`);
    process.exit(1);
  }
  passedAssertions++;
  console.log(`✅ [PASS] ${message}`);
}

console.log("============================================================");
console.log("BATTLESTATION SUPPLY CO. - BATCH 001 & WORKFLOW UPGRADE AUDIT");
console.log("============================================================\n");

// 1. PromoBanner.tsx Audit
const promoBannerPath = path.join(storefrontRoot, "src", "components", "PromoBanner.tsx");
assert(fs.existsSync(promoBannerPath), "PromoBanner.tsx exists");
const promoBannerContent = fs.readFileSync(promoBannerPath, "utf-8");
assert(
  promoBannerContent.includes("FOUNDER50") &&
  promoBannerContent.includes("18/50"),
  "PromoBanner.tsx features FOUNDER50 code and 18/50 workstation countdown"
);

// 2. Hero.tsx Audit
const heroPath = path.join(storefrontRoot, "src", "components", "Hero.tsx");
assert(fs.existsSync(heroPath), "Hero.tsx exists");
const heroContent = fs.readFileSync(heroPath, "utf-8");
assert(
  heroContent.includes("cart/50825409954035:1?discount=FOUNDER50") &&
  heroContent.includes("CLAIM FOUNDER KIT"),
  "Hero.tsx implements 1-click Founder Kit checkout permalink with FOUNDER50"
);

// 3. RiskReversalGuarantee.tsx Audit
const guaranteePath = path.join(storefrontRoot, "src", "components", "RiskReversalGuarantee.tsx");
assert(fs.existsSync(guaranteePath), "RiskReversalGuarantee.tsx exists");
const guaranteeContent = fs.readFileSync(guaranteePath, "utf-8");
assert(
  guaranteeContent.includes("SPILL") &&
  guaranteeContent.includes("GLIDE") &&
  guaranteeContent.includes("morning coffee") &&
  guaranteeContent.includes("FOUNDER50"),
  "RiskReversalGuarantee.tsx features the 30-day coffee spill and acoustic thock guarantee"
);

// 4. StorefrontClient.tsx Audit
const storefrontClientPath = path.join(storefrontRoot, "src", "components", "StorefrontClient.tsx");
assert(fs.existsSync(storefrontClientPath), "StorefrontClient.tsx exists");
const storefrontClientContent = fs.readFileSync(storefrontClientPath, "utf-8");
assert(
  storefrontClientContent.includes("RiskReversalGuarantee") &&
  storefrontClientContent.includes("<RiskReversalGuarantee />"),
  "StorefrontClient.tsx imports and renders <RiskReversalGuarantee />"
);

// 5. OpenCode Bridge Runner Audit
const runnerPath = path.join(repoRoot, "antigravity-opencode-nexus", "src", "bridge", "runner.py");
assert(fs.existsSync(runnerPath), "OpenCode runner.py exists");
const runnerContent = fs.readFileSync(runnerPath, "utf-8");
assert(
  runnerContent.includes("http://127.0.0.1:4096/session") &&
  runnerContent.includes("opencode-go") &&
  runnerContent.includes("deepseek-v4.1-flash"),
  "OpenCode runner.py modernized to use headless REST daemon on port 4096"
);

// 6. 28-Product Freeze Invariant
const productsPath = path.join(storefrontRoot, "src", "data", "products.ts");
assert(fs.existsSync(productsPath), "products.ts exists");
const productsContent = fs.readFileSync(productsPath, "utf-8");
const idMatches = productsContent.match(/shopifyVariantId":\s*"(\d+)"/g) || [];
assert(idMatches.length === 28, `Catalog maintains invariant of exactly 28 products (found: ${idMatches.length})`);

console.log("\n============================================================");
console.log(`AUDIT COMPLETE: ${passedAssertions}/${totalAssertions} Assertions PASSED (Exit Code 0)`);
console.log("============================================================");
process.exit(0);
