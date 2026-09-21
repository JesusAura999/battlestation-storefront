"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Layers, Droplets, Moon, Sun, Check, ArrowRight, Shield } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

interface SetupConfig {
  id: string;
  name: string;
  subtitle: string;
  accentColor: string;
  borderColor: string;
  matName: string;
  matPrice: number;
  matShopifyVariantId: string;
  wallpaperName: string;
  image: string;
  specs: string[];
}

const CONFIGS: SetupConfig[] = [
  {
    id: "topo-stealth",
    name: "Topographic Stealth",
    subtitle: "Elevation Contour Lines • Matte Slate",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500",
    matName: "Topographical Minimalist Precision Desk Mat",
    matPrice: 34.99,
    matShopifyVariantId: "50825409954035",
    wallpaperName: "4K Dark Topo OLED (3840x2160)",
    image: "/products/topographic_desk_mat_1789949088023.jpg",
    specs: [
      "900x400x4mm High-density glide surface",
      "Hydrophobic spill-resistant micro-weave",
      "Anti-fray 360° lock-stitching"
    ]
  },
  {
    id: "cyber-matrix",
    name: "Cyberpunk Terminal",
    subtitle: "Synthwave Neon Grid • Deep Violet / Cyan",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500",
    matName: "Retro-Tech Cyberpunk Synthwave Desk Mat",
    matPrice: 36.99,
    matShopifyVariantId: "50825415786739",
    wallpaperName: "8K Neo-Tokyo Night Matrix",
    image: "/products/luxury_developer_bundle_1789949136388.jpg",
    specs: [
      "Ultra-vibrant high-DPI dye sublimation print",
      "4mm textured non-slip natural rubber base",
      "Optimized for optical & laser mouse sensors"
    ]
  },
  {
    id: "dev-obsidian",
    name: "Architect Obsidian",
    subtitle: "Minimal Pure Black • Clean Monospaced",
    accentColor: "text-amber-400",
    borderColor: "border-amber-500",
    matName: "Black Desk Mat — Minimalist Large Mouse Pad",
    matPrice: 34.00,
    matShopifyVariantId: "51542894608627",
    wallpaperName: "Docker & Linux Architecture 4K Wallpaper",
    image: "/products/developer_night_cockpit_1789949075279.jpg",
    specs: [
      "Zero branding distraction-free stealth finish",
      "Heavyweight 720g desk anchor",
      "Sound-dampening keyboard acoustics"
    ]
  }
];

export default function CockpitVisualizer() {
  const { addToCart } = useCart();
  const [selectedConfig, setSelectedConfig] = useState<SetupConfig>(CONFIGS[0]);
  const [hydrophobicSimulation, setHydrophobicSimulation] = useState(false);
  const [ambientNightMode, setAmbientNightMode] = useState(true);

  const handleAddToCart = () => {
    // Find matching product
    const product = PRODUCTS.find((p) => p.shopifyVariantId === selectedConfig.matShopifyVariantId) || PRODUCTS[1];
    addToCart(product, 1);
  };

  return (
    <section id="visualizer" className="py-20 lg:py-28 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>INTERACTIVE SETUP CONFIGURATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Preview & Customize Your Cockpit
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Toggle between custom setup themes, test the hydrophobic spill-proof coating simulation, and experience your new desk anchor in real-time.
          </p>
        </div>

        {/* Visualizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Top: Interactive Visual Stage */}
          <div className="lg:col-span-8">
            <div className={`relative rounded-2xl overflow-hidden border transition-all duration-500 bg-zinc-900 shadow-2xl ${ambientNightMode ? "shadow-emerald-950/40 border-zinc-800" : "shadow-zinc-900/60 border-zinc-700"}`}>
              
              {/* Top Bar / Controls */}
              <div className="px-4 py-3 bg-zinc-950/90 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 ml-2">
                    render://cockpit-stage/{selectedConfig.id}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Spill Sim Toggle */}
                  <button
                    onClick={() => setHydrophobicSimulation(!hydrophobicSimulation)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                      hydrophobicSimulation
                        ? "bg-cyan-950 text-cyan-300 border border-cyan-500/60"
                        : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                    }`}
                  >
                    <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Spill Simulation: {hydrophobicSimulation ? "ON" : "OFF"}</span>
                  </button>

                  {/* Ambiance Toggle */}
                  <button
                    onClick={() => setAmbientNightMode(!ambientNightMode)}
                    className="p-1.5 rounded bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                    title="Toggle Lighting Mode"
                  >
                    {ambientNightMode ? <Moon className="w-4 h-4 text-emerald-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
                  </button>
                </div>
              </div>

              {/* Dynamic Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src={selectedConfig.image}
                  alt={selectedConfig.name}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    ambientNightMode ? "brightness-95 contrast-105" : "brightness-105"
                  }`}
                />

                {/* Hydrophobic Droplets Overlay Simulation */}
                {hydrophobicSimulation && (
                  <div className="absolute inset-0 bg-cyan-950/20 backdrop-blur-[0.5px] flex items-center justify-center animate-fadeIn">
                    <div className="p-4 rounded-xl bg-zinc-950/90 border border-cyan-500/40 text-center max-w-xs shadow-2xl">
                      <Droplets className="w-8 h-8 text-cyan-400 mx-auto animate-bounce mb-2" />
                      <h4 className="text-sm font-bold font-mono text-cyan-300">
                        HYDROPHOBIC NANO-COATING
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        Coffee, energy drinks, and liquids bead up immediately into spherical droplets without penetrating the micro-weave cloth. Wipes dry in 1 second.
                      </p>
                    </div>
                  </div>
                )}

                {/* Live Layer Tags Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-200">
                    Mat: {selectedConfig.matName}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-400">
                    Active Wallpaper: {selectedConfig.wallpaperName}
                  </span>
                </div>
              </div>

              {/* Bottom Specs Bar */}
              <div className="p-4 bg-zinc-950/80 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  {selectedConfig.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500">Live Price:</span>
                  <span className="text-base font-mono font-bold text-white">
                    ${selectedConfig.matPrice.toFixed(2)}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right / Controls Column: Preset Selection */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-1">
              Select Setup Preset:
            </h3>

            {CONFIGS.map((config) => {
              const isSelected = selectedConfig.id === config.id;
              return (
                <div
                  key={config.id}
                  onClick={() => setSelectedConfig(config)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? `bg-zinc-900/90 ${config.borderColor} shadow-lg shadow-emerald-950/20`
                      : "bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        {config.name}
                        {isSelected && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                            ACTIVE
                          </span>
                        )}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5">{config.subtitle}</p>
                    </div>
                    <span className="text-sm font-mono font-semibold text-zinc-200">
                      ${config.matPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Quick Add CTA */}
            <div className="pt-2">
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <span>Add {selectedConfig.name} Mat to Cart</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-500">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span>Backed by 30-day anti-fray durability guarantee</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
