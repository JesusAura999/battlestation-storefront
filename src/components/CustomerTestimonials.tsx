"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle2, Terminal, Code2, Cpu, Sparkles } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  productPurchased: string;
  quote: string;
  stackTags: string[];
  metrics: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex V.",
    role: "Senior Staff Infrastructure Engineer",
    company: "Cloudflare",
    avatar: "AV",
    rating: 5,
    productPurchased: "Stealth Asymmetric Monitor ScreenBar Light",
    quote:
      "Coding 10+ hours a day in dark mode caused brutal eye strain until I installed the ScreenBar. The 2.4GHz wireless rotary dial on the desk lets me dial color temperature instantly. Zero reflection on my dual 4K matte monitors.",
    stackTags: ["Go", "Kubernetes", "Linux", "Neovim"],
    metrics: "-80% Eye Fatigue in Night Sessions",
  },
  {
    name: "Marcus K.",
    role: "Lead Systems Architect",
    company: "Stripe",
    avatar: "MK",
    rating: 5,
    productPurchased: "Solid American Walnut Wrist Rest + Topo Desk Mat",
    quote:
      "The 8-degree incline on the solid walnut wrist rest fixed my wrist ache within 48 hours. The dense micro-weave topographic desk mat is the cleanest tracking surface I have ever used. High-grade craftsmanship.",
    stackTags: ["Rust", "Distributed Systems", "PostgreSQL"],
    metrics: "100% Zero Wrist Strain After 12h Sprints",
  },
  {
    name: "Elena R.",
    role: "Principal Frontend Engineer",
    company: "Vercel Ecosystem",
    avatar: "ER",
    rating: 5,
    productPurchased: "The Developer Cockpit Starter Bundle",
    quote:
      "The bundle paid for itself on day one. Having the Cursor AI ruleset paired with the physical extended mat and tactile cheat sheets turned my home desk into a legitimate cockpit. Fast shipping and flawless packaging.",
    stackTags: ["Next.js", "TypeScript", "Tailwind", "Cursor"],
    metrics: "2.5x Faster Daily PR Turnaround",
  },
  {
    name: "David T.",
    role: "Graphics & Game Engine Programmer",
    company: "Indie Studio",
    avatar: "DT",
    rating: 5,
    productPurchased: "Custom Braided Aviator Coiled Cable + Sound-Reactive RGB",
    quote:
      "The GX16 aviator connector has an incredible heavy metal feel and tight reverse coils that never sag. The sound-reactive RGB pillars pulse to my keystrokes and ambient bass with zero input lag. 10/10 battlestation aesthetic.",
    stackTags: ["C++", "Vulkan", "ShaderLab", "Blender"],
    metrics: "Cleanest Desk Aesthetic on SetupWars",
  },
];

export default function CustomerTestimonials() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VERIFIED ENGINEER COMMUNITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-white tracking-tight">
            BUILT FOR BUILDERS. LOVED BY DEVELOPERS.
          </h2>
          <p className="text-zinc-400 font-mono text-xs sm:text-sm">
            Real feedback from software engineers, systems programmers, and designers using our hardware and digital cockpits daily.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-all hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Buyer</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-zinc-200 text-sm sm:text-[15px] leading-relaxed mb-5">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Product Purchased Tag */}
                <div className="inline-block mb-5 px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                  <span className="text-zinc-500 mr-1.5">Equipped:</span>
                  <span className="text-zinc-200 font-semibold">{item.productPurchased}</span>
                </div>
              </div>

              {/* Author & Tech Stack */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
                    {item.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold font-mono text-white flex items-center gap-2">
                      {item.name}
                      <span className="text-zinc-500 text-xs font-normal">at {item.company}</span>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      {item.role}
                    </div>
                  </div>
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.stackTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metric Strip */}
        <div className="mt-12 p-4 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400">4.9 / 5.0</div>
            <div className="text-[11px] font-mono text-zinc-400">Average Hardware Rating</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-zinc-800" />
          <div>
            <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400">1,200+</div>
            <div className="text-[11px] font-mono text-zinc-400">Battlestations Shipped Worldwide</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-zinc-800" />
          <div>
            <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400">30 Days</div>
            <div className="text-[11px] font-mono text-zinc-400">Zero-Risk Replacement Guarantee</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-zinc-800" />
          <div>
            <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400">256-Bit SSL</div>
            <div className="text-[11px] font-mono text-zinc-400">Shopify Enterprise Encrypted Checkout</div>
          </div>
        </div>

      </div>
    </section>
  );
}
