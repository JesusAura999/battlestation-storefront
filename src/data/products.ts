export interface Product {
  id: string;
  shopifyVariantId: string;
  title: string;
  handle: string;
  category: "bundle" | "physical" | "digital" | "hardware";
  deliveryType: "hybrid" | "physical" | "digital";
  deliveryLabel: string;
  price: number;
  compareAtPrice: number;
  badge?: string;
  rating: number;
  reviewsCount: number;
  description: string;
  features: string[];
  specs: { [key: string]: string };
  imageUrl: string;
  inStock: boolean;
  requiresShipping: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-bundle-cockpit",
    shopifyVariantId: "50839092494579",
    title: "The Developer Cockpit Starter Bundle",
    handle: "the-developer-cockpit-starter-bundle",
    category: "bundle",
    deliveryType: "hybrid",
    deliveryLabel: "📦 Physical Desk Mat Shipped + ⚡ Instant Digital Notion OS & Assets",
    price: 59.00,
    compareAtPrice: 110.00,
    badge: "Most Popular • Save 46%",
    rating: 5.0,
    reviewsCount: 184,
    description: "The complete workstation upgrade in a single package. Combines the 900x400mm waterproof topographic desk mat with the full digital developer ecosystem (Notion OS + 50+ 4K wallpapers + Linux/Docker cheatsheets).",
    features: [
      "📦 Physical: 1x Extended 900x400mm Topographic Desk Mat (Free Tracked Shipping)",
      "⚡ Digital: 1x Cursor & Claude AI Developer Workflow OS (Prompt Vault & Rules)",
      "⚡ Digital: 1x Linux & Docker Dev Cheat Sheet Bundle (Printable 300 DPI)",
      "⚡ Digital: 1x 4K & 8K Ultra-Wide Battlestation Wallpaper Pack (50+ Renders)",
      "⚡ Lifetime updates + Instant digital downloads dispatched at checkout"
    ],
    specs: {
      "Mat Dimensions": "900mm x 400mm x 4mm",
      "Surface": "Ultra-dense micro-weave cloth with hydrophobic coating",
      "Digital Access": "Instant download + Notion template duplicate URL",
      "Fulfillment": "Physical Mat Shipped Worldwide + Digital Vault Instant Access"
    },
    imageUrl: "/products/luxury_developer_bundle_1789949136388.jpg",
    inStock: true,
    requiresShipping: true
  },
  {
    id: "prod-mat-topo",
    shopifyVariantId: "50825409954035",
    title: "Topographical Minimalist Precision Desk Mat (900x400mm)",
    handle: "topographical-minimalist-desk-mat",
    category: "physical",
    deliveryType: "physical",
    deliveryLabel: "📦 Physical Hardware Only • Free Worldwide Tracked Delivery",
    price: 34.99,
    compareAtPrice: 49.99,
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 142,
    description: "Subtle contour elevation vectors printed on an ultra-dense, hydrophobic glide surface. Anchors keyboards and peripherals while providing zero-drag mouse tracking.",
    features: [
      "📦 900x400x4mm extended footprint (Physical Hardware Shipped)",
      "Spill-proof hydrophobic treatment: liquids bead up instantly",
      "360° reinforced anti-fray micro-stitched borders",
      "High-density natural non-slip textured rubber base"
    ],
    specs: {
      "Dimensions": "900 x 400 x 4 mm",
      "Weight": "720g",
      "Material": "Hydrophobic Micro-Weave + Natural Rubber",
      "Fulfillment": "Physical Item Shipped (Free Global Tracked Delivery)"
    },
    imageUrl: "/products/topographic_desk_mat_1789949088023.jpg",
    inStock: true,
    requiresShipping: true
  },
  {
    id: "prod-notion-os",
    shopifyVariantId: "50825384952051",
    title: "Ultimate Developer Notion Operating System",
    handle: "ultimate-developer-notion-os",
    category: "digital",
    deliveryType: "digital",
    deliveryLabel: "⚡ 100% Digital Download • Instant 1-Click Notion Duplicate Link",
    price: 29.00,
    compareAtPrice: 49.00,
    badge: "Digital Favorite",
    rating: 4.9,
    reviewsCount: 96,
    description: "An all-in-one Notion workspace engineered specifically for software engineers. Includes integrated sprint tracking, API documentation vaults, project roadmaps, and automated weekly retro templates.",
    features: [
      "⚡ 100% Digital Software - Instant Duplicate Link (No physical shipment)",
      "Engineering Sprint & Backlog Kanban board with velocity tracking",
      "Reusable System Prompt & LLM Rulebook Database",
      "Centralized Project Architecture & RFC documentation hub"
    ],
    specs: {
      "Format": "Notion Duplicate Template + Markdown Exporter",
      "Delivery": "Instant 1-Click Duplicate Link via Email & Screen",
      "Physical Shipping": "None (100% Digital Asset)"
    },
    imageUrl: "/products/developer_notion_os_1789949102325.jpg",
    inStock: true,
    requiresShipping: false
  },
  {
    id: "prod-cursor-os",
    shopifyVariantId: "50898124701939",
    title: "Cursor & Claude AI Developer Workflow OS (Prompt Vault)",
    handle: "cursor-claude-ai-developer-workflow-os-prompt-vault-rules",
    category: "digital",
    deliveryType: "digital",
    deliveryLabel: "⚡ 100% Digital Download • Instant .cursorrules & Prompt Vault",
    price: 29.00,
    compareAtPrice: 49.00,
    badge: "AI Workflow",
    rating: 5.0,
    reviewsCount: 67,
    description: "Eliminate prompt fatigue and hallucinated code. Battle-tested system prompts, .cursorrules configurations, and architectural context guidelines for Claude 3.5 Sonnet & Cursor IDE.",
    features: [
      "⚡ Instant Digital Access (No physical shipping required)",
      "Zero-defect architectural boundaries for Next.js, Python, TypeScript & Rust",
      "50+ specialized engineering prompt templates",
      "Drop-in .cursorrules and system instructions"
    ],
    specs: {
      "Format": ".cursorrules, Markdown, Notion Database",
      "Delivery": "Instant ZIP Download + Notion Link",
      "Physical Shipping": "None"
    },
    imageUrl: "/products/developer_night_cockpit_1789949075279.jpg",
    inStock: true,
    requiresShipping: false
  },
  {
    id: "prod-wallpapers-4k",
    shopifyVariantId: "50825421979891",
    title: "4K & 8K Ultra-Wide Battlestation Wallpaper Pack",
    handle: "4k-ultrawide-dynamic-wallpaper-bundle",
    category: "digital",
    deliveryType: "digital",
    deliveryLabel: "⚡ 100% Digital Download • Instant Uncompressed 4K/8K ZIP",
    price: 9.00,
    compareAtPrice: 19.00,
    badge: "Digital Download",
    rating: 4.8,
    reviewsCount: 53,
    description: "50+ curated high-fidelity wallpapers engineered specifically for dark workstations, 21:9 ultrawides, 32:9 super-ultrawides, and dual-monitor multi-display desks.",
    features: [
      "⚡ Instant Digital ZIP (Zero Physical Shipping)",
      "True OLED deep black levels (#0a0a0a) to protect eyes during night coding",
      "Multi-monitor bezel-aligned compositions",
      "Uncompressed lossless PNG files up to 7680x4320 resolution"
    ],
    specs: {
      "Resolutions": "4K UHD (3840x2160), 8K UHD (7680x4320), 21:9 Ultrawide",
      "Format": "Uncompressed Lossless PNGs",
      "Delivery": "Instant Download Link"
    },
    imageUrl: "/products/docker_cheatsheet_wallpaper_1789949120208.jpg",
    inStock: true,
    requiresShipping: false
  },
  {
    id: "prod-cheat-sheets",
    shopifyVariantId: "50825400221939",
    title: "Linux & Docker Dev Cheat Sheet Bundle (Printable)",
    handle: "linux-docker-dev-cheat-sheet-bundle",
    category: "digital",
    deliveryType: "digital",
    deliveryLabel: "⚡ 100% Digital Download • Printable 300 DPI Vector PDFs",
    price: 12.00,
    compareAtPrice: 24.00,
    badge: "Desk Reference",
    rating: 4.9,
    reviewsCount: 38,
    description: "Stop breaking flow state searching for terminal flags. High-density, vector-rendered cheat sheets for Linux administration, Docker Compose orchestration, and Git rebasing.",
    features: [
      "⚡ Instant PDF Vector Download (Printable at home or desk)",
      "Printable 300 DPI vector PDF sheets suitable for framing or desk use",
      "Quick syntax grouping for systemctl, docker-compose, and git cherry-pick",
      "Dark mode and light mode vector sheets included"
    ],
    specs: {
      "Format": "Vector PDF (300 DPI High Resolution)",
      "Sizes": "Letter, A4, and Ultrawide Desktop Reference",
      "Delivery": "Instant Digital Delivery"
    },
    imageUrl: "/products/docker_cheatsheet_wallpaper_1789949120208.jpg",
    inStock: true,
    requiresShipping: false
  },
  {
    id: "prod-magsafe-stand",
    shopifyVariantId: "50898124275955",
    title: "Minimalist 3-in-1 Foldable MagSafe Wireless Stand",
    handle: "minimalist-3-in-1-foldable-magsafe-wireless-charging-stand",
    category: "hardware",
    deliveryType: "physical",
    deliveryLabel: "📦 Physical Hardware Only • Tracked Global Shipping",
    price: 39.99,
    compareAtPrice: 59.99,
    badge: "Hardware",
    rating: 4.8,
    reviewsCount: 41,
    description: "Clean anodized matte black aerospace aluminum frame charging your iPhone, Apple Watch, and AirPods simultaneously with zero wire clutter on your desk.",
    features: [
      "📦 Physical Hardware Unit Shipped to Your Door",
      "15W Qi2 fast charging with landscape StandBy clock support",
      "Folds completely flat for travel or ultra-minimal desk footprint",
      "Weighted silicone base prevents sliding when lifting devices"
    ],
    specs: {
      "Power": "15W Phone + 5W Watch + 5W Earbuds",
      "Material": "Anodized Aluminum + Silicone",
      "Fulfillment": "Physical Item Shipped (Free Global Tracked Delivery)"
    },
    imageUrl: "/products/developer_night_cockpit_1789949075279.jpg",
    inStock: true,
    requiresShipping: true
  }
];
