"use client";

import React, { useState, useEffect } from "react";
import { X, BookOpen, Check, ArrowRight, Sparkles, Download, Copy } from "lucide-react";
import { useCart } from "@/context/CartContext";

const STORAGE_KEY = "battlestation_lead_magnet_v1";

export default function LeadMagnetModal() {
  const { applyDiscountCode } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if dismissed or claimed previously
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    // Trigger after 25 seconds of session
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 25000);

    // Or trigger when scrolling past 40% of the page
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0 && window.scrollY / scrollTotal > 0.45) {
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, "dismissed");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    applyDiscountCode("BLUEPRINT15");
    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, "claimed");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("BLUEPRINT15");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-zinc-900 border border-zinc-700/80 shadow-2xl shadow-emerald-950/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle glowing accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FREE 18-PAGE SPECIFICATION GUIDE</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                The 2026 Developer Cockpit Architecture Blueprint
              </h3>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-sans">
                Engineered for deep-work software engineers. Covers millimeter-precise monitor sightlines, acoustic desk mat dampening, zero-drag cable routing, and our complete Cursor IDE prompt library.
              </p>

              {/* Perks List */}
              <div className="my-5 space-y-2 font-mono text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant 18-page vector PDF download</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct checkout unlock: <strong>15% OFF</strong> with code <code className="text-emerald-400 font-bold">BLUEPRINT15</code></span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero spam guarantee. One-click unsubscribe anytime.</span>
                </div>
              </div>

              {/* Email Capture Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    placeholder="developer@workstation.io"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-500 text-sm font-mono focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  >
                    <span>Get Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[11px] font-mono text-zinc-500 text-center sm:text-left">
                  We respect terminal hygiene. No promotional telemetry.
                </p>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-4 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Check className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Blueprint Dispatched & Discount Activated!
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  Your 15% discount has been applied directly to your active cart session.
                </p>
              </div>

              {/* Coupon Box */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-emerald-500/40 flex items-center justify-between gap-4 max-w-sm mx-auto">
                <div className="text-left font-mono">
                  <span className="text-[10px] text-zinc-400 block uppercase">15% Off Discount Code</span>
                  <span className="text-lg font-bold text-emerald-400">BLUEPRINT15</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Download CTA & Dismiss */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href="#products"
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Shop With 15% Off
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-xs transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
