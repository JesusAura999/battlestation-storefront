"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Zap, Sparkles, Shield, ArrowRight, Gift, Terminal } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

export default function BundleConfigurator() {
  const { addToCart, applyDiscountCode, appliedDiscount } = useCart();
  const [selectedMatVariant, setSelectedMatVariant] = useState<"topo" | "synthwave" | "stealth">("topo");
  const [promoInput, setPromoInput] = useState("SETUPWARS10");
  const [promoApplied, setPromoApplied] = useState(true);

  const bundleProduct = PRODUCTS.find((p) => p.id === "prod-bundle-cockpit") || PRODUCTS[0];

  const bundleItems = [
    { title: "Extended 900x400mm Waterproof Desk Mat", retail: "$36.00", icon: "🖥️", desc: "Topographic or Synthwave micro-weave surface" },
    { title: "Ultimate Developer Notion Operating System", retail: "$29.00", icon: "⚡", desc: "Full Kanban, Prompt Bank & Sprint Architecture" },
    { title: "Cursor & Claude AI Developer Rules (.cursorrules)", retail: "$29.00", icon: "🧠", desc: "Zero-defect rules for Claude 3.5 Sonnet & Cursor" },
    { title: "50+ 4K & 8K Ultra-Wide Battlestation Wallpapers", retail: "$9.00", icon: "🎨", desc: "Lossless uncompressed OLED dark mode renders" },
    { title: "Linux & Docker High-Res Printable Cheat Sheets", retail: "$12.00", icon: "📄", desc: "300 DPI vector reference cards for your desk" }
  ];

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    const success = applyDiscountCode(promoInput);
    setPromoApplied(success);
  };

  const originalTotal = 115.00;
  const bundlePrice = 59.00;
  const discountedPrice = bundlePrice * (1 - appliedDiscount);

  return (
    <section id="bundle" className="py-20 lg:py-28 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>EXCLUSIVE LAUNCH BUNDLE • SAVE 48%</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Developer Cockpit Starter Bundle
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Everything required to elevate your physical desktop and digital workflow into a cohesive, distraction-free software engineering command center.
          </p>
        </div>

        {/* Bundle Card Showcase */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-emerald-500/30 bg-zinc-950/90 shadow-2xl shadow-emerald-950/30 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: High-Res Mockup */}
            <div className="lg:col-span-5 relative p-6 sm:p-8 flex flex-col justify-between bg-zinc-900/60 border-b lg:border-b-0 lg:border-r border-zinc-800">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-700 shadow-xl mb-6">
                <Image
                  src="/products/luxury_developer_bundle_1789949136388.jpg"
                  alt="Developer Cockpit Bundle"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-emerald-500 text-zinc-950 font-mono text-[11px] font-bold shadow-lg">
                  ALL-IN-ONE SUITE
                </div>
              </div>

              {/* Mat Style Selector */}
              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                  Choose Included Desk Mat Style:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedMatVariant("topo")}
                    className={`py-2 px-2 text-[11px] font-mono rounded-lg border text-center transition-all cursor-pointer ${
                      selectedMatVariant === "topo"
                        ? "bg-zinc-800 border-emerald-400 text-emerald-400 font-bold shadow-md shadow-emerald-500/10"
                        : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
                    }`}
                  >
                    Topographic
                  </button>
                  <button
                    onClick={() => setSelectedMatVariant("synthwave")}
                    className={`py-2 px-2 text-[11px] font-mono rounded-lg border text-center transition-all cursor-pointer ${
                      selectedMatVariant === "synthwave"
                        ? "bg-zinc-800 border-cyan-400 text-cyan-400 font-bold shadow-md shadow-cyan-500/10"
                        : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
                    }`}
                  >
                    Synthwave
                  </button>
                  <button
                    onClick={() => setSelectedMatVariant("stealth")}
                    className={`py-2 px-2 text-[11px] font-mono rounded-lg border text-center transition-all cursor-pointer ${
                      selectedMatVariant === "stealth"
                        ? "bg-zinc-800 border-zinc-400 text-white font-bold"
                        : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
                    }`}
                  >
                    Stealth Black
                  </button>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tracked Parcel Dispatch</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Instant Digital Keys</span>
                </div>
              </div>

            </div>

            {/* Right Column: Breakdown & Checkout Calculation */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white font-mono">
                    What&apos;s Included in Your Cockpit:
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    5 Tools Included
                  </span>
                </div>

                {/* Items List */}
                <div className="space-y-3 mb-6">
                  {bundleItems.map((item, idx) => (
                    <div key={idx} className="flex items-start justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                      <div className="flex items-start gap-3">
                        <span className="text-base">{item.icon}</span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-zinc-200 font-mono">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-zinc-500 line-through whitespace-nowrap ml-3">
                        {item.retail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Interactive Coupon Code Box */}
                <form onSubmit={handleApplyCode} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 mb-6">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" /> Have a discount code?
                    </span>
                    {promoApplied && (
                      <span className="text-emerald-400 font-semibold">
                        {(appliedDiscount * 100).toFixed(0)}% OFF Applied!
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                      placeholder="ENTER PROMO CODE"
                      className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-xs font-mono text-emerald-400 uppercase tracking-wider focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-xs font-mono text-zinc-200 cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                </form>
              </div>

              {/* Price Calculation Box */}
              <div className="pt-4 border-t border-zinc-800">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono text-zinc-500 line-through block">
                      Total Separate Value: ${originalTotal.toFixed(2)}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                        ${discountedPrice.toFixed(2)}
                      </span>
                      {appliedDiscount > 0 && (
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                          Code SETUPWARS10 Active
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right text-xs font-mono text-emerald-400 font-semibold">
                    <span>You Save ${(originalTotal - discountedPrice).toFixed(2)}!</span>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(bundleProduct, 1)}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-extrabold text-sm sm:text-base tracking-wide transition-all shadow-xl shadow-emerald-500/25 cursor-pointer hover:scale-[1.01]"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>CLAIM THE COCKPIT BUNDLE NOW</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
