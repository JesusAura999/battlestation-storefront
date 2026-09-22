"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ShieldCheck, Zap, Sparkles, ArrowRight, X, Terminal } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

export default function Hero() {
  const { addToCart } = useCart();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const bundleProduct = PRODUCTS.find(
    (p) => p.shopifyVariantId === "50839092494579"
  );

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-zinc-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.12),rgba(255,255,255,0))]">
      {/* Ambient Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Version & Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-6 shadow-inner">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE DEVELOPER COCKPIT V2.0</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-300">CURATED FOR ENGINEERS</span>
            </div>

            {/* Kinetic Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Upgrade Your Setup Into A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                High-Performance
              </span>{" "}
              Developer Cockpit.
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Engineered for software engineers and creators who demand zero distractions. Extended 900x400mm waterproof topographic mats paired seamlessly with the Ultimate Developer Notion OS and 50+ 4K OLED wallpapers.
            </p>

            {/* Social Proof Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900/80 border border-zinc-800">
                <span className="text-amber-400">★★★★★</span>
                <span className="font-semibold text-white">4.9 / 5.0</span>
                <span className="text-zinc-500">(340+ Engineers)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900/80 border border-zinc-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Waterproof Micro-Weave</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900/80 border border-zinc-800">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Instant Digital Dispatch</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  window.location.href = "https://kjsy4w-34.myshopify.com/cart/50825409954035:1?discount=FOUNDER50";
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono font-bold text-sm tracking-wide transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-400/40 cursor-pointer"
                title="Claim the $29 Topographic Mat + Free $41 Digital Vault with code FOUNDER50"
              >
                <Zap className="w-4 h-4 fill-zinc-950" />
                <span>CLAIM FOUNDER KIT ($29)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  if (bundleProduct) {
                    addToCart(bundleProduct, 1);
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-sm transition-colors cursor-pointer"
              >
                <span>Full Cockpit Suite ($59)</span>
              </button>
            </div>

            {/* Promo Code Reminder */}
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Batch 001: <strong className="text-emerald-400">18/50 spots left</strong> • Use code <strong className="text-emerald-400 underline decoration-dashed">FOUNDER50</strong> for Free $41 Developer Vault</span>
            </div>
          </div>

          {/* Right Column: Interactive Hero Preview Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900 shadow-2xl shadow-emerald-950/30 group">
              
              {/* Product Hero Image */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/products/luxury_developer_bundle_1789949136388.jpg"
                  alt="The Developer Cockpit Starter Bundle"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Glassmorphic Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                      Full Hardware + Software Suite
                    </span>
                    <h3 className="text-sm font-bold text-white">
                      The Developer Cockpit V2
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-zinc-500 line-through block font-mono">$110.00</span>
                    <span className="text-sm font-bold font-mono text-emerald-400">$59.00</span>
                  </div>
                </div>

                {/* Video Play Overlay */}
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all group-hover:scale-105 cursor-pointer"
                  aria-label="Play Product Video"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/90 text-zinc-950 flex items-center justify-center shadow-lg shadow-emerald-500/40 transform transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-zinc-950 ml-1" />
                  </div>
                </button>
              </div>

              {/* Quick Specs Footbar */}
              <div className="grid grid-cols-3 divide-x divide-zinc-800 border-t border-zinc-800 bg-zinc-950/70 p-3 text-center text-[11px] font-mono text-zinc-400">
                <div>
                  <span className="block text-zinc-200 font-bold">900x400mm</span>
                  <span>Extended Mat</span>
                </div>
                <div>
                  <span className="block text-zinc-200 font-bold">Hydrophobic</span>
                  <span>Spill Proof</span>
                </div>
                <div>
                  <span className="block text-zinc-200 font-bold">Notion OS</span>
                  <span>Instant Key</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Player */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="relative w-full max-w-md bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-3 border-b border-zinc-800 bg-zinc-900/60">
              <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> 4K SHOWCASE — ELEVENLABS BRIAN VO
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative aspect-[9/16] w-full bg-black max-h-[75vh]">
              <video
                src="/assets/v2_Developer_Cockpit_Showcase.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 bg-zinc-900/80 flex items-center justify-between border-t border-zinc-800">
              <div>
                <p className="text-xs text-zinc-300 font-mono">Use discount code:</p>
                <p className="text-sm font-mono font-bold text-emerald-400">SETUPWARS10 (10% OFF)</p>
              </div>
              <button
                onClick={() => {
                  setVideoModalOpen(false);
                  if (bundleProduct) addToCart(bundleProduct, 1);
                }}
                className="px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold text-xs"
              >
                Buy Bundle
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
