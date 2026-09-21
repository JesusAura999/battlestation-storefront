"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { buildCheckoutUrl, formatCurrency } from "@/lib/checkout";

export default function MobileQuickBuyBar() {
  const { addToCart, setIsCartOpen, discountCode } = useCart();
  const bundleProduct = PRODUCTS.find((p) => p.id === "prod-bundle-cockpit") || PRODUCTS[0];

  // Calculated bundle price with 10% discount
  const discountedPrice = bundleProduct.price * 0.9;

  const handleInstantBuy = () => {
    // Add bundle to cart and open drawer
    addToCart(bundleProduct);
    setIsCartOpen(true);
  };

  return (
    <aside aria-label="Mobile Quick Checkout" className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800/80 p-3 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              SAVE 46%
            </span>
            <span className="text-[11px] font-mono text-zinc-400 truncate">
              Cockpit Bundle
            </span>
          </div>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-base font-bold font-mono text-white">
              {formatCurrency(discountedPrice)}
            </span>
            <span className="text-xs font-mono text-zinc-500 line-through">
              {formatCurrency(bundleProduct.compareAtPrice)}
            </span>
            <span className="text-[10px] font-mono text-emerald-400 font-semibold">
              (with 10% off)
            </span>
          </div>
        </div>

        <button
          onClick={handleInstantBuy}
          className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs font-mono shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
        >
          <span>Claim Bundle</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
