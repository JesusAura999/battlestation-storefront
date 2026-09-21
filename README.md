# ⚡ Battlestation Supply Co. | Custom Headless Storefront

> High-performance Next.js 16 App Router custom storefront engineered for developer setups, mechanical keyboard enthusiasts, and workspace aesthetics. Fully headless, powered by Shopify Checkout with auto-applied discount mechanics.

🌐 **Live Storefront**: [battlestation-storefront.vercel.app](https://battlestation-storefront.vercel.app)  
🛒 **Shopify Backend**: `kjsy4w-34.myshopify.com` / [battlestationsupply.com](https://battlestationsupply.com)  
🐙 **GitHub Repository**: [JesusAura999/battlestation-storefront](https://github.com/JesusAura999/battlestation-storefront)

---

## 🚀 Key Architectural Features & Conversion Systems

### 1. 🛒 Headless Shopify Cart Permalink Engine
- **Direct Checkout Bypass**: Bypasses Shopify Liquid storefront limits by routing directly to Shopify's high-converting, native checkout with Shop Pay, Apple Pay, Google Pay, and PayPal.
- **Auto-Discount Code**: Automatically passes and applies `?discount=SETUPWARS10` (10% OFF) on all checkout links.
- **Cart Permalinks**:
  ```ts
  https://kjsy4w-34.myshopify.com/cart/{variant_id}:{quantity}?discount=SETUPWARS10
  ```

### 2. 📱 Sticky Mobile Quick-Buy Dock (`MobileQuickBuyBar.tsx`)
- **Instant Thumb-Reach Checkout**: Fixed glassmorphic bottom bar for mobile traffic featuring the flagship **$53.10 Cockpit Starter Bundle**.
- Includes live discount badge (`10% OFF CODE AUTO-APPLIED`), dynamic pricing comparison (`$53.10` vs `$59.00`), and a 1-tap checkout CTA.

### 3. ⚡ 1-Click Cart Order Bump (`CartDrawer.tsx`)
- **High-Margin Upsell**: Embeds the **Linux & Docker Dev Cheat Sheet Bundle** (+$12.00 instant PDF download) directly inside the sliding cart drawer.
- **Zero Friction**: Customers can add or remove the bump with a single toggle switch without reloading the page.

### 4. 🏷️ Zero-Confusion Product Disambiguation (`products.ts`, `ProductGrid.tsx`, `ProductModal.tsx`)
- **Disambiguation Badges**:
  - `[📦 PHYSICAL + ⚡ DIGITAL]` — Hybrid Starter Bundle
  - `[📦 PHYSICAL HARDWARE]` — Topographic Desk Mat
  - `[⚡ 100% DIGITAL ASSET]` — Notion Developer OS & Cheat Sheet Pack
- **Delivery & Fulfillment Format Banner**: Full-width high-contrast matrix inside the quick-view modal explaining exact fulfillment method, instant access links, and physical shipping timelines.

### 5. 💬 Social Proof & Verification Systems
- **Live Activity Ticker (`LiveActivityTicker.tsx`)**: Real-time rotating notifications of verified developer orders across San Francisco, London, Berlin, Austin, and Tokyo.
- **Engineer Reviews & Interactive FAQ (`FaqSection.tsx`)**: Verified engineer testimonials with tech stack tags (`Rust / Linux`, `TypeScript / Next.js`, `Go / Docker`) and accordion FAQ addressing shipping, digital access, and discount codes.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: Next.js 16 App Router (`React 19`)
- **Styling**: Tailwind CSS, PostCSS, Lucide React Icons
- **Deployment**: Vercel Hobby ($0.00 CI/CD)
- **Favicon & Meta**: Glowing emerald `>_` terminal SVG favicon, full OpenGraph & Twitter Card metadata

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/JesusAura999/battlestation-storefront.git

# Install dependencies
npm install

# Run the local development server
npm run dev

# Build for production
npm run build
```

---

## 📈 Monetization & Marketing Engine

For the complete zero-ad-spend monetization roadmap, Reddit setup breakdown playbooks, micro-influencer outreach scripts, and viral video retention formulas, refer to:
- [`antigravity-opencode-nexus/DEEP_AUDIT_AND_MONETIZATION_BLUEPRINT.md`](../antigravity-opencode-nexus/DEEP_AUDIT_AND_MONETIZATION_BLUEPRINT.md)

