"use client";

import React, { useState } from "react";
import { Sparkles, Copy, Check, Terminal } from "lucide-react";

const FOUNDER_DISCOUNT_CODE = "FOUNDER50";
const FOUNDER_KIT_CHECKOUT_URL =
  "https://kjsy4w-34.myshopify.com/cart/50825409954035:1?discount=FOUNDER50";

export default function PromoBanner() {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(FOUNDER_DISCOUNT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-zinc-950 to-cyan-950 border-b border-emerald-500/20 text-xs py-2.5 px-4 text-zinc-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-emerald-400 font-semibold tracking-wide uppercase">
            [BATCH_001_ALERT]
          </span>
          <span className="text-zinc-200">
            Founder Drop Live: 18/50 Workstations Left • $29 Topo Mat + Free $41 Digital Vault
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-zinc-400 hidden sm:inline">Founder code:</span>
          <button
            onClick={copyCode}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-emerald-500/40 text-emerald-400 font-mono font-bold hover:bg-emerald-950/50 hover:border-emerald-400 transition-all cursor-pointer group"
            title="Click to copy the FOUNDER50 promo code"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>{FOUNDER_DISCOUNT_CODE}</span>
            {copied ? (
              <Check className="w-3 h-3 text-emerald-300" />
            ) : (
              <Copy className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            )}
          </button>
          <a
            href={FOUNDER_KIT_CHECKOUT_URL}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold transition-colors"
            title="Claim the $29 Topo Mat + Free $41 Digital Vault with code FOUNDER50"
          >
            <span>CLAIM $29 KIT</span>
          </a>
          <span className="text-emerald-400/90 font-medium">Free $41 Vault</span>
        </div>
      </div>
    </div>
  );
}
