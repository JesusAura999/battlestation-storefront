"use client";

import React from "react";
import { ShieldCheck, Droplets, Volume2, ArrowRight, Sparkles, RefreshCcw, Lock } from "lucide-react";

export default function RiskReversalGuarantee() {
  const handleClaimFounder = () => {
    window.location.href = "https://kjsy4w-34.myshopify.com/cart/50825409954035:1?discount=FOUNDER50";
  };

  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle radial emerald backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Guarantee Box */}
        <div className="rounded-3xl bg-zinc-900/70 border border-emerald-500/40 p-8 sm:p-12 shadow-2xl shadow-emerald-500/5 relative overflow-hidden">
          
          {/* Top Decorative Tag */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>THE 30-DAY &ldquo;SPILL &amp; GLIDE&rdquo; IRONCLAD GUARANTEE</span>
            </div>
            <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Risk-Free Purchase</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-white tracking-tight leading-tight mb-6">
            If your morning coffee doesn&apos;t bead up and wipe clean in 5 seconds, you don&apos;t pay.
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
            We engineered our 900x400mm topographic desk mats for developers who pull late-night coding marathons.
            Test it at your desk for 30 full days. If coffee, tea, or energy drinks don&apos;t bead up like mercury, or if your mechanical keyboard doesn&apos;t sound noticeably deeper with zero desk ping—keep the mat. We will refund 100% of your money immediately. Zero questions asked, zero return shipping required.
          </p>

          {/* Feature Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-zinc-800">
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-3">
              <Droplets className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-bold text-white uppercase">Hydrophobic Shield</h4>
                <p className="text-[11px] font-mono text-zinc-400 mt-1">Liquid spills bead instantly on dense micro-weave</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-3">
              <Volume2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-bold text-white uppercase">Acoustic Thock</h4>
                <p className="text-[11px] font-mono text-zinc-400 mt-1">4mm natural rubber absorbs hollow desk resonance</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-3">
              <RefreshCcw className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-bold text-white uppercase">Zero Return Friction</h4>
                <p className="text-[11px] font-mono text-zinc-400 mt-1">Instant refund without boxing or post office trips</p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-zinc-800">
            <div className="text-left w-full sm:w-auto">
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Batch 001: Founder&apos;s Founding Kit ($29)</span>
              </div>
              <p className="text-zinc-400 text-xs font-mono mt-0.5">
                Includes Topographic Mat + Free $41 Digital Developer Vault
              </p>
            </div>

            <button
              onClick={handleClaimFounder}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold text-xs sm:text-sm tracking-wide transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-400/40 cursor-pointer whitespace-nowrap"
            >
              <span>CLAIM FOUNDER KIT • CODE FOUNDER50</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
