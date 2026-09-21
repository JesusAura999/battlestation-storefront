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
  badge?: string | null;
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
    "id": "prod-9959841104115",
    "shopifyVariantId": "50839092494579",
    "title": "The Developer Cockpit Starter Bundle (Desk Mat + Cursor AI OS + Cheat Sheets)",
    "handle": "the-developer-cockpit-starter-bundle",
    "category": "bundle",
    "deliveryType": "hybrid",
    "deliveryLabel": "📦 Physical Desk Mat Shipped + ⚡ Instant Digital Assets",
    "price": 59.0,
    "compareAtPrice": 110.0,
    "badge": "Most Popular • Save 46%",
    "rating": 5.0,
    "reviewsCount": 184,
    "description": "The ultimate workstation transformation in a single order.  Save over 45% when pairing our extended desk mat with the full digital developer workflow ecosystem. \n        \n         Everything Included In This Starter Bundle: \n         \n             \n 1x Extended Precision Desk Mat (900x400mm):  Choose Retro-Tech or Midnight Stealth ($36 value). \n             \n 1x Cursor &amp; Claude AI Developer Workflow OS:  Complete prompt vault &amp; ruleset ($29 value). \n             \n 1x Linux &amp; Docker Dev Cheat Sheet Bundle:  Vector printable reference cards ($12 value). \n             \n 1x 4K &amp; 8K Ultra-Wide Wallpaper Pack:  50+ aesthetic renders ($9 value). \n             \n 1x VIP Launch Discount Code:  20% off all future store drops ($24 value). \n         \n\n         Fulfillment Architecture: \n         Your digital products are delivered to your email immediately upon checkout. Your physical desk mat is dispatched via tracked parcel service.",
    "features": [
      "📦 Physical: 1x Extended 900x400mm Hydrophobic Desk Mat (Free Tracked Shipping)",
      "⚡ Digital: Full Software Suite (Prompt Vault, Cheatsheets, 50+ 4K Wallpapers)",
      "⚡ Instant download link & Notion duplicate URL sent automatically at checkout",
      "⚡ Lifetime free updates to all digital tools & future cheat sheets"
    ],
    "specs": {
      "Mat Dimensions": "900mm x 400mm x 4mm",
      "Surface": "Ultra-dense micro-weave cloth with hydrophobic coating",
      "Digital Access": "Instant download + Notion template duplicate URL",
      "Fulfillment": "Physical Mat Shipped Worldwide + Digital Vault Instant Access"
    },
    "imageUrl": "/products/luxury_developer_bundle_1789949136388.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-9959841136883",
    "shopifyVariantId": "50839092527347",
    "title": "The Esports Precision Tactical Bundle (Desk Mat + PTFE Skates + Aim Guide)",
    "handle": "the-esports-precision-tactical-bundle",
    "category": "bundle",
    "deliveryType": "hybrid",
    "deliveryLabel": "📦 Physical Desk Mat Shipped + ⚡ Instant Digital Assets",
    "price": 49.0,
    "compareAtPrice": 95.0,
    "badge": "Most Popular • Save 46%",
    "rating": 4.8,
    "reviewsCount": 171,
    "description": "Eliminate friction and maximize mechanical consistency.  The complete hardware and training package for tactical FPS players. \n        \n         Bundle Inclusions: \n         \n             1x Extended Gaming Desk Mat (900x400mm Micro-Weave Surface) \n             1x Pure Virgin-Grade PTFE Speed Skates (40-Pack Micro-Dots) \n             1x Pro Aim Warmup &amp; Mechanical Consistency Guide (Tactical FPS Routine)",
    "features": [
      "📦 Physical: 1x Extended 900x400mm Hydrophobic Desk Mat (Free Tracked Shipping)",
      "⚡ Digital: Full Software Suite (Prompt Vault, Cheatsheets, 50+ 4K Wallpapers)",
      "⚡ Instant download link & Notion duplicate URL sent automatically at checkout",
      "⚡ Lifetime free updates to all digital tools & future cheat sheets"
    ],
    "specs": {
      "Mat Dimensions": "900mm x 400mm x 4mm",
      "Surface": "Ultra-dense micro-weave cloth with hydrophobic coating",
      "Digital Access": "Instant download + Notion template duplicate URL",
      "Fulfillment": "Physical Mat Shipped Worldwide + Digital Vault Instant Access"
    },
    "imageUrl": "/products/hex_mouse_grip_tape.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-10187462770931",
    "shopifyVariantId": "51565706838259",
    "title": "Stealth Asymmetric Monitor ScreenBar Light with 2.4GHz Wireless Dial",
    "handle": "stealth-asymmetric-monitor-screenbar-light-with-2-4ghz-wireless-dial",
    "category": "hardware",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 48.0,
    "compareAtPrice": 75.0,
    "badge": "New Arrival • Ra95",
    "rating": 4.8,
    "reviewsCount": 107,
    "description": "Engineered for night coding marathons. Asymmetric optical reflection illuminates your desk pad and mechanical keyboard with zero screen glare. Includes wireless rotary desktop puck for stepless brightness and color temperature adjustment (2700K-6500K).",
    "features": [
      "📦 Asymmetric optical reflector: 100% desk pad illumination with zero screen reflection",
      "📦 2.4GHz wireless desktop rotary dial: stepless brightness & color temperature control",
      "📦 Ra95 high color rendering index: natural daylight simulation (2700K - 6500K)",
      "📦 Weighted silicone counterweight clamp fits flat & curved screens (5mm-55mm)"
    ],
    "specs": {
      "Power": "USB-C 5V/2A (Braided 1.8m cable included)",
      "Color Temp": "2700K - 6500K Stepless",
      "CRI": "Ra95 High Fidelity",
      "Clamp Compatibility": "5mm to 55mm thickness (Flat & 1000R-1800R Curved)"
    },
    "imageUrl": "/products/monitor_screenbar_light.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-9963790991603",
    "shopifyVariantId": "50898124275955",
    "title": "Minimalist 3-in-1 Foldable MagSafe Wireless Charging Stand",
    "handle": "minimalist-3-in-1-foldable-magsafe-wireless-charging-stand",
    "category": "hardware",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 39.99,
    "compareAtPrice": 59.99,
    "badge": "Hardware Best Seller",
    "rating": 4.9,
    "reviewsCount": 162,
    "description": "Zero cable clutter. Instant 15W magnetic fast charging.  Power your phone, watch, and earbuds simultaneously with a foldable aerospace billet frame. \n         \n             15W Qi2 fast charging with landscape &amp; portrait StandBy mode support. \n             Folds completely flat for travel or ultra-minimal desktop footprints. \n             Matte anodized black finish matching dark workstations.",
    "features": [
      "📦 3-in-1 concurrent fast wireless charging: iPhone (15W), Apple Watch, and AirPods",
      "📦 Precision folding aerospace aluminum frame: collapses flat for travel",
      "📦 Compatible with Apple StandBy display mode for sleek desktop clock widgets",
      "📦 Weighted non-slip base ensures single-hand phone detachment"
    ],
    "specs": {
      "Input": "USB-C 30W PD (Braided cable included)",
      "Outputs": "15W Qi2 MagSafe / 5W Apple Watch / 5W AirPods",
      "Material": "Anodized Aluminum Alloy",
      "Dimensions": "145mm x 72mm x 16mm (Folded)"
    },
    "imageUrl": "/products/magsafe_charging_stand.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-10187462803699",
    "shopifyVariantId": "51565706871027",
    "title": "Solid American Walnut Ergonomic Keyboard Wrist Rest (Tenkeyless / 75%)",
    "handle": "solid-american-walnut-ergonomic-keyboard-wrist-rest-tenkeyless-75",
    "category": "hardware",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 29.0,
    "compareAtPrice": 45.0,
    "badge": "Handcrafted Wood",
    "rating": 4.8,
    "reviewsCount": 142,
    "description": "Handcrafted from solid North American black walnut. Precision-milled with an ergonomic 8-degree incline to relieve carpal strain during deep coding flow state. Hand-finished with organic matte wax and anti-slip silicone feet.",
    "features": [
      "📦 Handcrafted from sustainably harvested North American black walnut",
      "📦 Ergonomic 8-degree slope relieves wrist pressure during extended typing sessions",
      "📦 Hand-rubbed organic natural beeswax finish with smooth beveled edges",
      "📦 Non-marking high-friction silicone base feet prevent desk slide"
    ],
    "specs": {
      "Dimensions": "360mm x 80mm x 18mm",
      "Compatibility": "Tenkeyless (80%), 75%, and 65% Mechanical Keyboards",
      "Material": "Solid North American Black Walnut",
      "Finish": "Hand-buffed Natural Matte Wax"
    },
    "imageUrl": "/products/walnut_wrist_rest.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-10187462869235",
    "shopifyVariantId": "51565706936563",
    "title": "Custom Braided Aviator Coiled Keyboard Cable (Type-C / 4-Pin GX16)",
    "handle": "custom-braided-aviator-coiled-keyboard-cable-type-c-4-pin-gx16",
    "category": "hardware",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 24.0,
    "compareAtPrice": 38.0,
    "badge": "Custom Coiled",
    "rating": 4.9,
    "reviewsCount": 173,
    "description": "Double-sleeved 550 paracord with PET Techflex outer mesh. Heavy-duty 4-pin GX16 aviator connector in matte stealth black. Reversed heat-treated tight coil prevents sagging. Gold-plated Type-C to Type-A termination.",
    "features": [
      "📦 Double-sleeved 550 commercial paracord with PET Techflex outer armor",
      "📦 Heavy-duty zinc alloy GX16 4-pin quick-detach aviator coupling in matte black",
      "📦 Precision reverse-coil heat treated: tight 16cm coil never sags or unrolls",
      "📦 CNC gold-plated Type-C to Type-A connectors for zero-latency mechanical keyboards"
    ],
    "specs": {
      "Coil Length": "16cm tight coil (19mm diameter)",
      "Straight Cable": "1.5m extended braided lead",
      "Connector": "4-Pin Detachable GX16 Aviator + Gold Plated Type-C",
      "Wiring": "24AWG Power + 28AWG Data (USB 2.0 High-Speed)"
    },
    "imageUrl": "/products/aviator_coiled_cable.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-9963791089907",
    "shopifyVariantId": "50898124439795",
    "title": "Ultra-Clean Magnetic Cable Management Kit (5-Piece Set)",
    "handle": "ultra-clean-magnetic-cable-management-kit-5-piece-set",
    "category": "hardware",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 19.99,
    "compareAtPrice": 29.99,
    "badge": "Desk Organization",
    "rating": 4.9,
    "reviewsCount": 28,
    "description": "Lock Every Cable Into a Perfect Invisible Line. \n         The secret to viral battlestation aesthetics is invisible wire routing. This 5-piece magnetic anchor kit secures your keyboard, mouse, and charging cables directly along desk edges without sticky residue. \n         What's Included: \n         \n             \n 3x Magnetic Routing Blocks:  Neodymium magnet clips that snap cables firmly to metallic desk legs or adhesive base plates. \n             \n 2x Under-Desk Cable Spine Guides:  High-density silicone channels for thick monitor power cables. \n             \n Universal Cable Diameter Compatibility:  Snugly grips 3mm braided cords up to 8mm heavy power lines.",
    "features": [
      "📦 5-piece magnetic desktop cable management anchors & weighted base bar",
      "📦 Premium matte silicone collars snap securely onto Type-C, HDMI, and Lightning cables",
      "📦 Reusable residue-free micro-suction adhesive secures to wood, glass, or metal",
      "📦 Keeps charging cables docked at arm's reach without sliding behind the desk"
    ],
    "specs": {
      "Kit Contents": "1x Magnetic Base Dock + 5x Magnetic Cable Collars",
      "Cable Diameters": "Fits cables 3.0mm to 5.5mm",
      "Base Dimensions": "100mm x 25mm x 12mm",
      "Adhesive": "Washable Reusable Micro-Suction Pad"
    },
    "imageUrl": "/products/magnetic_cable_clips.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-10187462967539",
    "shopifyVariantId": "51565707034867",
    "title": "Heavy-Duty Under-Desk 360° Swivel Aluminum Headphone Hanger",
    "handle": "heavy-duty-under-desk-360-swivel-aluminum-headphone-hanger",
    "category": "hardware",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 18.0,
    "compareAtPrice": 28.0,
    "badge": null,
    "rating": 4.9,
    "reviewsCount": 47,
    "description": "CNC-machined aerospace aluminum clamp that secures to desks up to 50mm thick. 360-degree rotating arm conceals headphones under the desk when not in use. Soft curved silicone saddle prevents headband indentations. Integrated dual cable organizers.",
    "features": [
      "📦 CNC-machined aerospace-grade aluminum supporting heavy audiophile headphones",
      "📦 360-degree rotating swivel arm swings headphones completely under the desk",
      "📦 Contoured silicone cradle prevents headband indentations and leather fatigue",
      "📦 Integrated dual cable organizer channels keep charging cables off the floor"
    ],
    "specs": {
      "Desk Thickness": "Fits desk tops up to 50mm (2.0 inches)",
      "Clamp Force": "Dual-padded screw clamp with zero surface marring",
      "Load Capacity": "Up to 5.0 kg (11 lbs)",
      "Material": "Anodized Aerospace 6061 Aluminum + Silicone"
    },
    "imageUrl": "/products/headphone_hanger.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-9946366083315",
    "shopifyVariantId": "50825415786739",
    "title": "Retro-Tech Cyberpunk Synthwave Desk Mat",
    "handle": "retro-tech-cyberpunk-desk-mat",
    "category": "physical",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 36.99,
    "compareAtPrice": 48.0,
    "badge": "Synthwave Aesthetics",
    "rating": 4.9,
    "reviewsCount": 174,
    "description": "Nostalgic 80s Wireframes Meets Cyberpunk Battlestation Aesthetics  Transform your desk into a neon-drenched cockpit. Inspired by vintage CRT monitors, retro arcade cabinets, and cyberpunk megastructure schematics.  \n \n Visual Clarity:  High-definition thermal dye sublimation for intense contrast and deep blacks. \n \n Gliding Speed:  Balanced hybrid speed/control texture ideal for mechanical keyboards and optical sensors. \n \n Heavyweight Comfort:  4mm thick rubber cushion dampens mechanical keyboard reverberation. \n   Pair with RGB ambient backlighting for the ultimate nighttime aesthetic.",
    "features": [
      "📦 Extended 900x400x4mm surface area cradles keyboard, mouse, and phone dock",
      "📦 Ultra-dense hydrophobic micro-weave cloth: liquids bead up for effortless wipe-down",
      "📦 360-degree anti-fray precision micro-stitched border prevents edge peeling",
      "📦 Non-slip textured natural rubber base firmly anchors to wood, glass, and laminate"
    ],
    "specs": {
      "Dimensions": "900mm x 400mm x 4mm",
      "Surface": "Hydrophobic Micro-Weave Cloth",
      "Base": "Textured Anti-Slip Natural Rubber",
      "Fulfillment": "Physical Item Shipped (Free Global Tracked Delivery)"
    },
    "imageUrl": "/products/cyberpunk_synthwave_mat.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-10186088284403",
    "shopifyVariantId": "51542894510323",
    "title": "Retro-Tech Cyberpunk Synthwave Desk Mat (900x400mm Extended)",
    "handle": "retro-tech-cyberpunk-synthwave-desk-mat-900x400mm-extended",
    "category": "physical",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 36.0,
    "compareAtPrice": 52.0,
    "badge": "Synthwave Aesthetics",
    "rating": 4.8,
    "reviewsCount": 51,
    "description": "The centerpiece of your battlestation.  High-density micro-weave tracking surface bordered by 360-degree precision anti-fray stitching and vibrant cyberpunk synthwave aesthetics. \n        \n         Engineered For Precision &amp; Durability: \n         \n             \n Extended 900x400mm Footprint:  Ample room for full-sized mechanical keyboard, mouse, and desktop accessories. \n             \n 4mm Textured Natural Rubber Base:  Anchors firmly to wood, laminate, and glass surfaces with zero slippage. \n             \n Waterproof Coating:  Liquid spills bead up on the surface and wipe clean instantly. \n         \n\n         Shipping &amp; Fulfillment: \n         Custom manufactured on-demand to guarantee pristine print clarity. Ships in 2-4 business days with tracked domestic &amp; international parcel service.",
    "features": [
      "📦 Extended 900x400x4mm surface area cradles keyboard, mouse, and phone dock",
      "📦 Ultra-dense hydrophobic micro-weave cloth: liquids bead up for effortless wipe-down",
      "📦 360-degree anti-fray precision micro-stitched border prevents edge peeling",
      "📦 Non-slip textured natural rubber base firmly anchors to wood, glass, and laminate"
    ],
    "specs": {
      "Dimensions": "900mm x 400mm x 4mm",
      "Surface": "Hydrophobic Micro-Weave Cloth",
      "Base": "Textured Anti-Slip Natural Rubber",
      "Fulfillment": "Physical Item Shipped (Free Global Tracked Delivery)"
    },
    "imageUrl": "/products/cyberpunk_synthwave_mat.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-9946360283379",
    "shopifyVariantId": "50825409954035",
    "title": "Topographical Minimalist Precision Desk Mat",
    "handle": "topographical-minimalist-desk-mat",
    "category": "physical",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 34.99,
    "compareAtPrice": 45.0,
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewsCount": 142,
    "description": "Sleek Topographic Contours Engineered for Ultra-Smooth Glide and Precision  Elevate your workspace aesthetic with our high-definition contour line desk mat. Crafted with an ultra-dense micro-weave cloth surface and zero-slip natural rubber base for both competitive tracking and all-day typing comfort.  \n \n Surface:  High-density micro-woven polyester cloth with water-repellent coating. \n \n Edge:  360-degree precision anti-fray reinforced stitching. \n \n Base:  4mm textured non-slip natural open-cell rubber base. \n \n Maintenance:  Machine-washable (cold/delicate) and spill-resistant. \n   Printed on demand with vivid sublimation inks that never fade or crack.",
    "features": [
      "📦 Extended 900x400x4mm surface area cradles keyboard, mouse, and phone dock",
      "📦 Ultra-dense hydrophobic micro-weave cloth: liquids bead up for effortless wipe-down",
      "📦 360-degree anti-fray precision micro-stitched border prevents edge peeling",
      "📦 Non-slip textured natural rubber base firmly anchors to wood, glass, and laminate"
    ],
    "specs": {
      "Dimensions": "900mm x 400mm x 4mm",
      "Surface": "Hydrophobic Micro-Weave Cloth",
      "Base": "Textured Anti-Slip Natural Rubber",
      "Fulfillment": "Physical Item Shipped (Free Global Tracked Delivery)"
    },
    "imageUrl": "/products/topographic_desk_mat_1789949088023.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-10186088382707",
    "shopifyVariantId": "51542894608627",
    "title": "Black Desk Mat - Minimalist Large Mouse Pad for Office & Gaming",
    "handle": "black-desk-mat-minimalist-large-mouse-pad-for-office-gaming-1",
    "category": "physical",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 34.0,
    "compareAtPrice": 48.0,
    "badge": null,
    "rating": 4.9,
    "reviewsCount": 195,
    "description": "Pure stealth minimalism for productive desks.  Matte midnight black surface designed to complement clean workspaces, mechanical keyboards, and studio audio gear. \n        \n         Features: \n         \n             Ultra-smooth low-friction glide for optical and laser mice. \n             Reinforced stealth stitched edges prevent fraying and peeling. \n             Easy-clean splash-resistant fabric.",
    "features": [
      "📦 Extended 900x400x4mm surface area cradles keyboard, mouse, and phone dock",
      "📦 Ultra-dense hydrophobic micro-weave cloth: liquids bead up for effortless wipe-down",
      "📦 360-degree anti-fray precision micro-stitched border prevents edge peeling",
      "📦 Non-slip textured natural rubber base firmly anchors to wood, glass, and laminate"
    ],
    "specs": {
      "Dimensions": "900mm x 400mm x 4mm",
      "Surface": "Hydrophobic Micro-Weave Cloth",
      "Base": "Textured Anti-Slip Natural Rubber",
      "Fulfillment": "Physical Item Shipped (Free Global Tracked Delivery)"
    },
    "imageUrl": "/products/topographic_desk_mat_1789949088023.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-9959975583987",
    "shopifyVariantId": "50839422501107",
    "title": "Black Desk Mat — Minimalist Large Mouse Pad for Office & Gaming",
    "handle": "black-desk-mat-minimalist-large-mouse-pad-for-office-gaming",
    "category": "physical",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 26.99,
    "compareAtPrice": 37.79,
    "badge": null,
    "rating": 4.9,
    "reviewsCount": 81,
    "description": "This neoprene desk mat brings calm, control, and color to your workspace. Its soft, textured surface cushions your wrist while you type or sketch, and the anti-slip backing keeps everything steady during deadlines or late-night projects. Hemmed edges guard against fraying so the mat stays neat and usable for months. Choose from three sizes to anchor a compact laptop station or stretch across a full desktop — the vibrant print quality holds bright, crisp detail that complements creative setups and minimalist work corners alike. Slip it down, settle in, and let your desk feel like an intentional place to focus, create, and get things done.  Product features - Non-slip neoprene bottom prevents sliding during use - Versatile surface for writing, typing, drawing, and crafting - Vivid, high-resolution print with bright, crisp colors - Reinforced hemmed edges for long-lasting durability - Available in three sizes to fit different desks and setups  Care instructions - Use warm water and dish soap to clean spots off your pad. It's not necessary to soak the whole pad. For hard-to-clean spots use a soft-bristled brush.",
    "features": [
      "📦 Extended 900x400x4mm surface area cradles keyboard, mouse, and phone dock",
      "📦 Ultra-dense hydrophobic micro-weave cloth: liquids bead up for effortless wipe-down",
      "📦 360-degree anti-fray precision micro-stitched border prevents edge peeling",
      "📦 Non-slip textured natural rubber base firmly anchors to wood, glass, and laminate"
    ],
    "specs": {
      "Dimensions": "900mm x 400mm x 4mm",
      "Surface": "Hydrophobic Micro-Weave Cloth",
      "Base": "Textured Anti-Slip Natural Rubber",
      "Fulfillment": "Physical Item Shipped (Free Global Tracked Delivery)"
    },
    "imageUrl": "/products/topographic_desk_mat_1789949088023.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-9946378830067",
    "shopifyVariantId": "50825428730099",
    "title": "Ultra-Grip Hex-Textured Anti-Slip Mouse Grip Tape (Universal Pre-Cut Kit)",
    "handle": "ultra-grip-hex-mouse-grip-tape",
    "category": "physical",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 14.99,
    "compareAtPrice": 22.0,
    "badge": null,
    "rating": 5.0,
    "reviewsCount": 186,
    "description": "Lock In Your Grip During Intense Clutches and High-Velocity Swipes  Sweaty palms causing micro-slips? Our ultra-thin 0.5mm polyurethane grip tape features laser-etched hexagonal moisture-wicking channels to maintain tactile friction in any grip style (Claw, Fingertip, Palm).  \n \n 0.5mm Low Profile:  Ergonomic feel without altering the natural mouse contour. \n \n Residue-Free 3M Adhesive:  Secure adhesion that removes cleanly without adhesive stains. \n \n Universal Precision Hex Kit:  Includes 30 pre-cut modular hex pads for sides, buttons, and palm contact points. \n   Compatible with Razer, Logitech G, Finalmouse, Pulsar, Zowie, and Ninjutso gaming mice.",
    "features": [
      "📦 Extended 900x400x4mm surface area cradles keyboard, mouse, and phone dock",
      "📦 Ultra-dense hydrophobic micro-weave cloth: liquids bead up for effortless wipe-down",
      "📦 360-degree anti-fray precision micro-stitched border prevents edge peeling",
      "📦 Non-slip textured natural rubber base firmly anchors to wood, glass, and laminate"
    ],
    "specs": {
      "Dimensions": "900mm x 400mm x 4mm",
      "Surface": "Hydrophobic Micro-Weave Cloth",
      "Base": "Textured Anti-Slip Natural Rubber",
      "Fulfillment": "Physical Item Shipped (Free Global Tracked Delivery)"
    },
    "imageUrl": "/products/hex_mouse_grip_tape.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-9946384892147",
    "shopifyVariantId": "50825434464499",
    "title": "Pure Virgin-Grade PTFE Speed Skates (Universal 0.8mm Micro-Dots 40-Pack)",
    "handle": "pure-ptfe-speed-skates-universal-dots",
    "category": "physical",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 14.0,
    "compareAtPrice": 22.0,
    "badge": null,
    "rating": 4.8,
    "reviewsCount": 112,
    "description": "Frictionless tracking for competitive gamers.  100% pure virgin-grade PTFE dots with curved chamfered edges that eliminate mousepad scratching. \n         \n             Universal compatibility: fits Logitech, Razer, Zowie, and custom mice. \n             0.8mm optimum thickness preserving precise sensor lift-off distance. \n             Includes alcohol preparation wipes for residue-free installation.",
    "features": [
      "📦 Precision-engineered for high-performance developer and gamer workspaces",
      "📦 Premium build materials designed for maximum durability and tactile feedback",
      "📦 Seamless aesthetic integration into clean minimalist desk setups",
      "📦 100% Satisfaction Guarantee with free tracked global delivery"
    ],
    "specs": {
      "Category": "Competitive Gaming Mods",
      "Delivery": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
      "Fulfillment": "Physical Item Shipped"
    },
    "imageUrl": "/products/ptfe_speed_skates.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-10187463000307",
    "shopifyVariantId": "51565707100403",
    "title": "Full-Stack Next.js 16 & AI Micro-SaaS Production Boilerplate",
    "handle": "full-stack-next-js-16-ai-micro-saas-production-boilerplate",
    "category": "digital",
    "deliveryType": "digital",
    "deliveryLabel": "⚡ 100% Digital Asset • Instant Download Dispatched at Checkout",
    "price": 49.0,
    "compareAtPrice": 99.0,
    "badge": "SaaS Starter • Next.js 16",
    "rating": 4.9,
    "reviewsCount": 176,
    "description": "Production-ready SaaS architecture. Next.js 16 App Router, React 19, Supabase Auth &amp; PostgreSQL, Stripe &amp; Shopify webhook listeners, Tailwind CSS, Claude &amp; Cursor AI rules, and Docker Compose. Instant digital GitHub repo access.",
    "features": [
      "⚡ Production-ready Next.js 16 App Router + React 19 architecture",
      "⚡ Pre-wired Supabase Auth, PostgreSQL schema with RLS, and Stripe/Shopify Webhooks",
      "⚡ Claude 3.5 Sonnet & Cursor AI rulebooks for instant autonomous coding",
      "⚡ Docker Compose, GitHub Actions CI/CD, and 1-click Vercel deployment template"
    ],
    "specs": {
      "Stack": "Next.js 16, React 19, Supabase, Tailwind CSS, Stripe/Shopify",
      "License": "Full Commercial License (Unlimited Projects)",
      "Delivery": "Instant GitHub Private Repository Access + ZIP Download",
      "Fulfillment": "100% Digital Asset (No Physical Shipping)"
    },
    "imageUrl": "/products/nextjs_saas_boilerplate.jpg",
    "inStock": true,
    "requiresShipping": false
  },
  {
    "id": "prod-9963791220979",
    "shopifyVariantId": "50898124701939",
    "title": "Cursor & Claude AI Developer Workflow OS (Prompt Vault & Rules)",
    "handle": "cursor-claude-ai-developer-workflow-os-prompt-vault-rules",
    "category": "digital",
    "deliveryType": "digital",
    "deliveryLabel": "⚡ 100% Digital Asset • Instant Download Dispatched at Checkout",
    "price": 29.0,
    "compareAtPrice": 49.0,
    "badge": "AI Workflow",
    "rating": 4.9,
    "reviewsCount": 145,
    "description": "Eliminate prompt fatigue and hallucinated code.  The battle-tested system prompt vault and architectural ruleset engineered for senior developers using Cursor, VS Code, and Claude 3.5 Sonnet. \n        \n         Why Elite Engineers Use This System: \n         \n             \n Zero-Defect Code Generation:  Explicit architectural boundaries stop LLMs from rewriting unrelated files or inventing non-existent libraries. \n             \n One-Shot PR Generation:  Standardized markdown prompt templates that turn raw bullet points into production-ready Git diffs. \n             \n Cross-IDE Compatibility:  Drop-in  .cursorrules  files and custom Claude system instructions. \n         \n\n         What's Included: \n         \n             1x Master Cursor Ruleset Repository (Next.js, Python, TypeScript, Rust) \n             1x 50+ Specialized Engineering Prompt Vault (.md &amp; Notion format) \n             1x Architectural Context-Packing Guide (How to fit 200k tokens effectively) \n             Lifetime updates &amp; Discord community access \n         \n\n         Frequently Asked Questions: \n          Q: How do I receive my access?  \n        A: Access is instant. Immediately upon checkout, you will receive a direct download link and an automated access email with your Notion duplicate URL and raw markdown assets. \n          Q: Is this beginner-friendly?  \n        A: Yes. It includes a 5-minute quickstart video showing you exactly where to paste rules in Cursor and Claude Desktop.",
    "features": [
      "⚡ Battle-tested .cursorrules files for Next.js, Python, Rust, Go, and TypeScript",
      "⚡ 50+ specialized engineering prompt templates with chain-of-thought instructions",
      "⚡ Zero-defect architectural constraints reducing LLM hallucinations by 80%",
      "⚡ Drop-in directory templates ready for immediate project initialization"
    ],
    "specs": {
      "Format": ".cursorrules, Markdown, Notion Database",
      "Delivery": "Instant ZIP Download + Notion Link",
      "Physical Shipping": "None"
    },
    "imageUrl": "/products/developer_night_cockpit_1789949075279.jpg",
    "inStock": true,
    "requiresShipping": false
  },
  {
    "id": "prod-9946335215859",
    "shopifyVariantId": "50825384952051",
    "title": "Ultimate Developer Notion Operating System",
    "handle": "ultimate-developer-notion-os",
    "category": "digital",
    "deliveryType": "digital",
    "deliveryLabel": "⚡ 100% Digital Asset • Instant Download Dispatched at Checkout",
    "price": 29.0,
    "compareAtPrice": 49.0,
    "badge": "Digital Favorite",
    "rating": 4.9,
    "reviewsCount": 31,
    "description": "Streamline Your Engineering Architecture, Sprints &amp; Life in One Place  The  Ultimate Developer Notion OS  is engineered for software engineers, tech leads, and indie hackers who need a battle-tested command center. Built around the PARA method and agile sprint cycles.  \n \n System Architecture Database:  Document API endpoints, cloud schemas, and microservice topologies. \n \n Agile Sprint Kanban:  Epics, User Stories, Burn-down boards, and Tech Debt tracking. \n \n Snippet &amp; Cheat Vault:  Fast-query index for shell one-liners, regex patterns, and algorithms. \n \n Automated Career Roadmap:  Promotion rubric tracker, quarterly OKRs, and portfolio manager. \n   Instant digital access. Fully customizable and compatible with free Notion accounts.",
    "features": [
      "⚡ Complete engineering sprint Kanban with automatic story point velocity tracking",
      "⚡ Architectural Decision Record (ADR) repository and API documentation vault",
      "⚡ Curated prompt engineering database with versioning and input variable slots",
      "⚡ 1-click duplicate into your personal or workspace Notion account"
    ],
    "specs": {
      "Format": "Notion Duplicate Template + Markdown Exporter",
      "Delivery": "Instant 1-Click Duplicate Link via Email & Screen",
      "Physical Shipping": "None (100% Digital Asset)"
    },
    "imageUrl": "/products/developer_notion_os_1789949102325.jpg",
    "inStock": true,
    "requiresShipping": false
  },
  {
    "id": "prod-9946354909427",
    "shopifyVariantId": "50825404711155",
    "title": "Make.com & Zapier Automation Blueprints Pack (Pre-Built JSON Exports)",
    "handle": "make-zapier-automation-blueprints-pack",
    "category": "digital",
    "deliveryType": "digital",
    "deliveryLabel": "⚡ 100% Digital Asset • Instant Download Dispatched at Checkout",
    "price": 19.0,
    "compareAtPrice": 39.0,
    "badge": "System Design",
    "rating": 4.9,
    "reviewsCount": 134,
    "description": "Automate your entire digital business infrastructure in 10 minutes.  Pre-built, tested JSON blueprint templates that connect Shopify, Stripe, email delivery, and customer notifications. \n        \n         Automated Workflows Included: \n         \n             \n Instant Digital Asset Emailer:  Fires on  orders/paid  to dispatch personalized download links. \n             \n Automated Failed Payment Recovery:  Multi-step email sequence recovering abandoned checkouts. \n             \n Slack / Discord Sales HUD:  Real-time animated revenue alerts posted directly to your team channel. \n         \n\n         Frequently Asked Questions: \n          Q: Do I need a paid Make.com account?  \n        A: No, all blueprints run within Make.com's generous 1,000 operations/month free tier.",
    "features": [
      "⚡ 45+ high-resolution vector architecture diagrams for senior engineering interviews",
      "⚡ Distributed Caching, Database Sharding, Kafka Event Streams, and Rate Limiters",
      "⚡ Vector 300 DPI printable sheets + full editable Figma design component library",
      "⚡ Real-world trade-off matrices: latency, consistency, availability, and cost"
    ],
    "specs": {
      "Format": "Printable Vector PDF (300 DPI) + Figma Source Components",
      "Topics": "45 Architecture Blueprints & System Design Patterns",
      "Delivery": "Instant Download Link + Cloud Folder Access",
      "Fulfillment": "100% Digital Asset (No Physical Shipping)"
    },
    "imageUrl": "/products/make_automation_blueprints.jpg",
    "inStock": true,
    "requiresShipping": false
  },
  {
    "id": "prod-10187463065843",
    "shopifyVariantId": "51565707165939",
    "title": "System Design & Distributed Architecture Blueprint Master Deck",
    "handle": "system-design-distributed-architecture-blueprint-master-deck",
    "category": "digital",
    "deliveryType": "digital",
    "deliveryLabel": "⚡ 100% Digital Asset • Instant Download Dispatched at Checkout",
    "price": 19.0,
    "compareAtPrice": 39.0,
    "badge": "System Design",
    "rating": 4.9,
    "reviewsCount": 56,
    "description": "45+ high-density vector architecture blueprints for senior software engineering and system design interviews. Covers Distributed Caching, Database Sharding, Kafka Event Streams, Rate Limiters, and Microservices. 300 DPI vector PDFs + Figma files.",
    "features": [
      "⚡ 45+ high-resolution vector architecture diagrams for senior engineering interviews",
      "⚡ Distributed Caching, Database Sharding, Kafka Event Streams, and Rate Limiters",
      "⚡ Vector 300 DPI printable sheets + full editable Figma design component library",
      "⚡ Real-world trade-off matrices: latency, consistency, availability, and cost"
    ],
    "specs": {
      "Format": "Printable Vector PDF (300 DPI) + Figma Source Components",
      "Topics": "45 Architecture Blueprints & System Design Patterns",
      "Delivery": "Instant Download Link + Cloud Folder Access",
      "Fulfillment": "100% Digital Asset (No Physical Shipping)"
    },
    "imageUrl": "/products/system_design_deck.jpg",
    "inStock": true,
    "requiresShipping": false
  },
  {
    "id": "prod-9946390593779",
    "shopifyVariantId": "50825440231667",
    "title": "Pro Aim Warmup & Mechanical Consistency Guide (Tactical FPS Routine)",
    "handle": "pro-aim-warmup-mechanical-routine-guide",
    "category": "digital",
    "deliveryType": "digital",
    "deliveryLabel": "⚡ 100% Digital Asset • Instant Download Dispatched at Checkout",
    "price": 15.0,
    "compareAtPrice": 25.0,
    "badge": null,
    "rating": 5.0,
    "reviewsCount": 155,
    "description": "The 15-Minute Daily Routine to Master Micro-Flicks, Tracking &amp; Crosshair Placement  Stop playing on auto-pilot. Designed by Tier-1 competitive FPS coaches, this guide breaks down biomechanical mouse control into daily 15-minute warmup drills that build indestructible muscle memory.  \n \n Stage 1: Biomechanical Priming (3 Mins):  Wrist flexor activation and tendon gliding exercises to prevent RSI/carpal tunnel. \n \n Stage 2: Static &amp; Micro-Clicking (4 Mins):  Over-aim correction, target confirmation, and micro-precision timing. \n \n Stage 3: Smoothness &amp; Reactivity (5 Mins):  Eliminating micro-jitters during dynamic target tracking. \n \n Stage 4: Target Switching &amp; In-Game Calibration (3 Mins):  Applying sensitivity parity across Valorant, CS2, and Apex Legends. \n \n Bonus:  Includes printable Sensitivity &amp; CM/360 conversion matrix chart. \n   Instant PDF download with clickable Kovaak's &amp; Aimlabs playlist codes.",
    "features": [
      "📦 Precision-engineered for high-performance developer and gamer workspaces",
      "📦 Premium build materials designed for maximum durability and tactile feedback",
      "📦 Seamless aesthetic integration into clean minimalist desk setups",
      "📦 100% Satisfaction Guarantee with free tracked global delivery"
    ],
    "specs": {
      "Category": "Competitive Gaming Mods",
      "Delivery": "⚡ 100% Digital Asset • Instant Download Dispatched at Checkout",
      "Fulfillment": "Instant Digital Delivery"
    },
    "imageUrl": "https://cdn.shopify.com/s/files/1/0852/0053/5795/files/photo-1542751110-97427bbecf20.jpg?v=1788378466",
    "inStock": true,
    "requiresShipping": false
  },
  {
    "id": "prod-9946349502707",
    "shopifyVariantId": "50825400221939",
    "title": "Linux & Docker Dev Cheat Sheet Bundle (High-Res Printable Reference Cards)",
    "handle": "linux-docker-dev-cheat-sheet-bundle",
    "category": "digital",
    "deliveryType": "digital",
    "deliveryLabel": "100% Digital Download - Instant Delivery at Checkout",
    "price": 12.0,
    "compareAtPrice": 24.0,
    "badge": "Desk Reference",
    "rating": 4.9,
    "reviewsCount": 36,
    "description": "Stop switching tabs to Google basic terminal commands.  Keep high-density, vector-rendered Linux and Docker reference sheets directly on your desk or secondary screen. \n        \n         Transform Your Terminal Speed: \n         \n             \n Instant Command Recall:  Color-coded syntax grouping network diagnostics, systemd services, and file permissions. \n             \n Zero Context-Switching:  Prune dangling volumes, inspect containers, and orchestrate Docker Compose stacks without breaking flow state. \n             \n Print-Ready 300 DPI:  Crisp vector typography designed for standard letter/A4 printing or tablet display. \n         \n\n         What's Inside: \n         \n             1x Master Linux Terminal Diagnostics &amp; Administration Sheet (PDF) \n             1x Docker Engine &amp; Compose Multi-Container Orchestration Sheet (PDF) \n             1x Git Advanced Rebase, Stash &amp; Conflict Resolution Matrix (PDF) \n         \n\n         Frequently Asked Questions: \n          Q: Are these printable?  \n        A: Yes, formatted at ultra-high resolution 300 DPI suitable for framing beside your battlestation.",
    "features": [
      "📦 Physical: 1x Extended 900x400mm Hydrophobic Desk Mat (Free Tracked Shipping)",
      "⚡ Digital: Full Software Suite (Prompt Vault, Cheatsheets, 50+ 4K Wallpapers)",
      "⚡ Instant download link & Notion duplicate URL sent automatically at checkout",
      "⚡ Lifetime free updates to all digital tools & future cheat sheets"
    ],
    "specs": {
      "Mat Dimensions": "900mm x 400mm x 4mm",
      "Surface": "Ultra-dense micro-weave cloth with hydrophobic coating",
      "Digital Access": "Instant download + Notion template duplicate URL",
      "Fulfillment": "Physical Mat Shipped Worldwide + Digital Vault Instant Access"
    },
    "imageUrl": "/products/docker_cheatsheet_wallpaper_1789949120208.jpg",
    "inStock": true,
    "requiresShipping": false
  },
  {
    "id": "prod-9946372178163",
    "shopifyVariantId": "50825421979891",
    "title": "4K & 8K Ultra-Wide Battlestation Wallpaper Pack (50+ Minimalist Renders)",
    "handle": "4k-ultrawide-dynamic-wallpaper-bundle",
    "category": "digital",
    "deliveryType": "digital",
    "deliveryLabel": "100% Digital Download - Instant Delivery at Checkout",
    "price": 9.0,
    "compareAtPrice": 19.0,
    "badge": "50+ 4K/8K Wallpapers",
    "rating": 4.8,
    "reviewsCount": 78,
    "description": "Complete the visual look of your dual-monitor or ultrawide workstation.  50+ curated high-fidelity renders engineered for 21:9, 32:9, and standard 16:9 displays. \n        \n         Aesthetic Perfection: \n         \n             \n True Dark Mode:  Deep OLED blacks (HEX #0a0a0a) to minimize eye strain during late-night coding sessions. \n             \n Dual-Screen Seamless Alignment:  Renders specifically framed so focal points don't get cut off by screen bezels. \n             \n Uncompressed Lossless PNG:  Crisp detail without JPEG compression artifacts.",
    "features": [
      "📦 Physical: 1x Extended 900x400mm Hydrophobic Desk Mat (Free Tracked Shipping)",
      "⚡ Digital: Full Software Suite (Prompt Vault, Cheatsheets, 50+ 4K Wallpapers)",
      "⚡ Instant download link & Notion duplicate URL sent automatically at checkout",
      "⚡ Lifetime free updates to all digital tools & future cheat sheets"
    ],
    "specs": {
      "Mat Dimensions": "900mm x 400mm x 4mm",
      "Surface": "Ultra-dense micro-weave cloth with hydrophobic coating",
      "Digital Access": "Instant download + Notion template duplicate URL",
      "Fulfillment": "Physical Mat Shipped Worldwide + Digital Vault Instant Access"
    },
    "imageUrl": "/products/docker_cheatsheet_wallpaper_1789949120208.jpg",
    "inStock": true,
    "requiresShipping": false
  },
  {
    "id": "prod-10187504287987",
    "shopifyVariantId": "51565852066035",
    "title": "CNC Aluminum Switch Opener & Acrylic Lube Station Deck",
    "handle": "cnc-aluminum-switch-opener-acrylic-lube-station-deck",
    "category": "hardware",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 24.0,
    "compareAtPrice": 38.0,
    "badge": "Keeb Modding",
    "rating": 4.9,
    "reviewsCount": 34,
    "description": "Solid CNC machined anodized matte black aluminum switch opener with magnetic clasp and 24-slot acrylic switch lubrication station. Opens MX and Kailh box switches in 1 click without bent switch pins.",
    "features": [
      "📦 CNC anodized aircraft aluminum switch opener with magnetic closure",
      "📦 24-switch acrylic lubrication testing and staging station",
      "📦 Dual-compatible with both Cherry MX style and Kailh Box switch latches",
      "📦 Includes ergonomic switch stem holder and fine-tip nylon lube brushes"
    ],
    "specs": {
      "Opener Material": "CNC Machined 6063 Anodized Aluminum",
      "Station Material": "Precision Laser-Cut Polished Acrylic",
      "Switch Compatibility": "Cherry MX, Gateron, Kailh Box, Outemu, Holy Panda",
      "Capacity": "24 Disassembled Switches (Stems, Springs, Housings)"
    },
    "imageUrl": "/products/switch_opener_lube_deck.jpg",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-10187504320755",
    "shopifyVariantId": "51565852098803",
    "title": "Under-Desk No-Drill Steel Cable Management Spine Raceway",
    "handle": "under-desk-no-drill-steel-cable-management-spine-raceway",
    "category": "hardware",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 34.0,
    "compareAtPrice": 55.0,
    "badge": "Zero Wire Clutter",
    "rating": 5.0,
    "reviewsCount": 52,
    "description": "Heavy-duty cold-rolled steel raceway with padded anti-scratch desk edge clamps. Conceals 12-outlet surge protectors, high-wattage power bricks, and excess cable slack with zero drilling or desk damage.",
    "features": [
      "📦 Heavy-duty cold-rolled steel wire mesh with electrostatic powder coat",
      "📦 Dual padded C-clamps support desks 10mm to 50mm thick with zero screws",
      "📦 Massive 16-inch open-air design prevents heat buildup around power bricks",
      "📦 Includes 10 reusable Velcro cable ties and silicone wire routing clips"
    ],
    "specs": {
      "Dimensions": "400mm x 160mm x 140mm (16\" x 6.3\" x 5.5\")",
      "Clamp Range": "10mm to 50mm (0.4\" to 2.0\" desktop thickness)",
      "Load Capacity": "Up to 15kg (33 lbs) of bricks, surge bars, and wiring",
      "Material": "Cold-Rolled Carbon Steel + Silicone Padding"
    },
    "imageUrl": "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&auto=format&fit=crop&q=80",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-10187504353523",
    "shopifyVariantId": "51565852131571",
    "title": "Sound-Reactive Dual RGB Ambient Smart Lightbar Towers",
    "handle": "sound-reactive-dual-rgb-ambient-smart-lightbar-towers",
    "category": "hardware",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 39.0,
    "compareAtPrice": 65.0,
    "badge": "Ambient Soundstage",
    "rating": 4.8,
    "reviewsCount": 63,
    "description": "Pair of vertical desk pillars with 32-bit ARM DSP acoustic sensor. Visualizes audio frequencies, git commit notifications, and IDE ambient backlighting with 16 million colors and fluid 60 FPS motion.",
    "features": [
      "📦 Dual sound-reactive vertical ambient lighting pillars (32 LEDs per tower)",
      "📦 32-bit ARM DSP processor with high-sensitivity acoustic microphone pick-up",
      "📦 18 dynamic color modes, 8 AGC rhythmic visualizer curves, and solid accents",
      "📦 USB Type-C plug-and-play with wireless Bluetooth mobile app tuning"
    ],
    "specs": {
      "Height": "240mm (9.5 inches) with weighted silicone anti-tip base",
      "LED Count": "64 Individually Addressable RGB SMD LEDs (32 per bar)",
      "Connectivity": "Bluetooth 5.2 Low Energy + 5V USB-C Power",
      "Frequency Response": "100Hz – 16,000Hz Ultra-Low Latency DSP"
    },
    "imageUrl": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-10187504386291",
    "shopifyVariantId": "51565852197107",
    "title": "Ergonomic Memory Foam Lumbar Support with Cooling Gel Layer",
    "handle": "ergonomic-memory-foam-lumbar-support-with-cooling-gel-layer",
    "category": "physical",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 36.0,
    "compareAtPrice": 60.0,
    "badge": "Spine Relief",
    "rating": 4.9,
    "reviewsCount": 89,
    "description": "Orthopedic high-density memory foam cushion with cooling hydro-gel channel designed for Aeron, Embody, and high-back task chairs. Prevents spinal compression during 10+ hour deep work sprints.",
    "features": [
      "📦 Orthopedic contoured slow-rebound memory foam core",
      "📦 Embedded honeycomb cooling hydro-gel layer dissipates lower-back heat",
      "📦 3D breathable mesh removable zipper cover (cold machine washable)",
      "📦 Dual adjustable elastic buckle straps lock firmly to any task chair"
    ],
    "specs": {
      "Dimensions": "440mm x 380mm x 120mm (17.3\" x 15\" x 4.7\")",
      "Core Material": "High-Density CertiPUR-US Temperature Neutral Foam",
      "Cooling Layer": "Polymer Hydro-Gel Honeycomb Grid",
      "Compatibility": "Universal (Mesh chairs, gaming seats, leather executive chairs)"
    },
    "imageUrl": "https://images.unsplash.com/photo-1580481077198-c8478d1ea59a?w=800&auto=format&fit=crop&q=80",
    "inStock": true,
    "requiresShipping": true
  },
  {
    "id": "prod-10187504451827",
    "shopifyVariantId": "51565852262643",
    "title": "Precision Screen & Optical Sensor Micro-Mist Cleaner Kit",
    "handle": "precision-screen-optical-sensor-micro-mist-cleaner-kit",
    "category": "physical",
    "deliveryType": "physical",
    "deliveryLabel": "📦 Physical Hardware • Free Tracked Worldwide Shipping",
    "price": 16.0,
    "compareAtPrice": 25.0,
    "badge": "Streak-Free",
    "rating": 4.8,
    "reviewsCount": 42,
    "description": "2-in-1 refillable anti-static screen cleaning spray wrapped in a micro-chamois wiping shell. Alcohol-free, ammonia-free, safe for matte anti-glare coatings, Apple Studio Displays, and camera lenses.",
    "features": [
      "📦 All-in-one spray bottle and wrapped microfiber wiping block",
      "📦 Alcohol-free, ammonia-free, streak-free non-abrasive formula",
      "📦 Safe for delicate nano-texture glass, OLED monitors, and smartphone screens",
      "📦 Refillable cartridge design with translucent protective dust sleeve"
    ],
    "specs": {
      "Capacity": "20ml Refillable Precision Atomizer (200+ Sprays)",
      "Surface Material": "Washable Microfiber Flannel Body Shell",
      "Formula": "Purified Deionized Water + Anti-Static Surfactant",
      "Safety": "Zero Alcohol, Zero Ammonia, Non-Corrosive to Oleophobic Coatings"
    },
    "imageUrl": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80",
    "inStock": true,
    "requiresShipping": true
  }
];
