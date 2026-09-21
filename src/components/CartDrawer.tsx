"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShieldCheck, ArrowRight, Sparkles, ShoppingBag, Truck, Lock, BadgeCheck, CreditCard } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { formatCurrency, FREE_SHIPPING_THRESHOLD } from "@/lib/checkout";

export default function CartDrawer() {
  const {
    cart,
    addToCart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    discountCode,
    appliedDiscount,
    subtotal,
    discountAmount,
    total,
    proceedToCheckout,
    setDiscountCode,
    applyDiscountCode
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState(false);

  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const hasFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput) return;
    const ok = applyDiscountCode(promoInput);
    if (!ok) {
      setPromoError(true);
    } else {
      setPromoError(false);
      setPromoInput("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <h2 className="text-base font-bold font-mono text-white">
                Your Cockpit Cart ({cart.length})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center">
                <ShoppingBag className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
                <p className="text-sm font-mono text-zinc-400">Your cart is currently empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs font-bold"
                >
                  Explore Cockpit Upgrades
                </button>
              </div>
            ) : (
              cart.map((line) => (
                <div
                  key={line.product.id}
                  className="flex gap-4 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-zinc-800 bg-black flex-shrink-0">
                    <Image
                      src={line.product.imageUrl}
                      alt={line.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-white font-mono leading-tight">
                          {line.product.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(line.product.id)}
                          className="text-zinc-500 hover:text-red-400 transition-colors p-0.5 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs font-mono text-emerald-400 mt-1">
                        {formatCurrency(line.product.price)}
                      </p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-zinc-700 rounded-md bg-zinc-950 text-xs font-mono">
                        <button
                          onClick={() => updateQuantity(line.product.id, line.quantity - 1)}
                          className="px-2 py-1 text-zinc-400 hover:text-white cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-white font-bold">{line.quantity}</span>
                        <button
                          onClick={() => updateQuantity(line.product.id, line.quantity + 1)}
                          className="px-2 py-1 text-zinc-400 hover:text-white cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout & Summary Footer */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-zinc-800 bg-zinc-900/90 space-y-4">
              
              {/* Frequently Paired Upgrades Recommender */}
              {(() => {
                const upsellCandidates = [
                  PRODUCTS.find((p) => p.id === "prod-10187462803699"), // Walnut Wrist Rest
                  PRODUCTS.find((p) => p.id === "prod-10187462869235"), // Coiled Aviator Cable
                  PRODUCTS.find((p) => p.id === "prod-9963791089907"),  // Magnetic Cable Clips
                  PRODUCTS.find((p) => p.id === "prod-10187462967539"), // Swivel Headphone Hanger
                  PRODUCTS.find((p) => p.handle === "linux-docker-dev-cheat-sheet-bundle")
                ].filter((p): p is NonNullable<typeof p> => Boolean(p && !cart.some((item) => item.product.id === p.id)));

                if (upsellCandidates.length === 0) return null;

                const nextUpsell = upsellCandidates[0];

                return (
                  <div className="p-3 rounded-xl bg-zinc-950/80 border border-emerald-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        Frequently Paired Upgrades
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">Popular Add-On</span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-zinc-800 flex-shrink-0 bg-zinc-900">
                        <Image
                          src={nextUpsell.imageUrl}
                          alt={nextUpsell.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-mono font-bold text-white truncate">
                          {nextUpsell.title}
                        </p>
                        <p className="text-[11px] font-mono text-emerald-400 font-semibold">
                          +{formatCurrency(nextUpsell.price)}
                          {nextUpsell.compareAtPrice > nextUpsell.price && (
                            <span className="text-zinc-500 line-through ml-1.5 font-normal">
                              {formatCurrency(nextUpsell.compareAtPrice)}
                            </span>
                          )}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => addToCart(nextUpsell, 1)}
                        className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-mono font-bold flex-shrink-0 cursor-pointer active:scale-95 transition-all shadow-sm shadow-emerald-500/20"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                );
              })()}

              {/* Free Shipping Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-400" />
                  {hasFreeShipping ? (
                    <span className="text-emerald-400 font-mono text-xs font-semibold">
                      FREE Expedited Shipping Unlocked!
                    </span>
                  ) : (
                    <span className="text-zinc-300 font-mono text-xs">
                      {'Add ' + formatCurrency(freeShippingRemaining) + ' for FREE Expedited Shipping'}
                    </span>
                  )}
                </div>
                <div className="h-2 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                    style={{ width: freeShippingProgress + '%' }}
                  />
                </div>
              </div>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => {
                    setPromoInput(e.target.value.toUpperCase());
                    setPromoError(false);
                  }}
                  placeholder="COUPON (SETUPWARS10)"
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-xs font-mono text-zinc-200 cursor-pointer"
                >
                  Apply
                </button>
              </form>
              {promoError && (
                <p className="text-[10px] font-mono text-red-400">
                  Invalid coupon. Try &apos;SETUPWARS10&apos; for 10% off.
                </p>
              )}

              {/* Breakdown */}
              <div className="space-y-1.5 text-xs font-mono text-zinc-400">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-zinc-200">{formatCurrency(subtotal)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({discountCode} - {(appliedDiscount * 100).toFixed(0)}%):</span>
                    <span>-{formatCurrency(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-zinc-800">
                  <span>Estimated Total:</span>
                  <span className="text-emerald-400 font-mono text-base">{formatCurrency(total)}</span>
                </div>
              </div>

              {/* Direct Headless Checkout Trigger */}
              <button
                onClick={proceedToCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-500/20 cursor-pointer"
              >
                <span>PROCEED TO SECURE CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Accepted Payment Badges & Buyer Guarantee */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 space-y-2.5">
                <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Guaranteed Safe & Secure Checkout</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  <span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-900 text-[10px] font-mono font-semibold text-zinc-300 flex items-center gap-1">
                    <CreditCard className="w-3 h-3 text-zinc-400" />
                    Apple Pay
                  </span>
                  <span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-900 text-[10px] font-mono font-semibold text-zinc-300">
                    Google Pay
                  </span>
                  <span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-900 text-[10px] font-mono font-semibold text-zinc-300">
                    Shop Pay
                  </span>
                  <span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-900 text-[10px] font-mono font-semibold text-zinc-300">
                    PayPal
                  </span>
                  <span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-900 text-[10px] font-mono font-semibold text-zinc-300">
                    Visa
                  </span>
                  <span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-900 text-[10px] font-mono font-semibold text-zinc-300">
                    Mastercard
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-2 border-t border-zinc-800">
                  <span className="flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                    <BadgeCheck className="w-3 h-3 text-emerald-400" />
                    30-Day Zero-Risk Return Policy
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                    <BadgeCheck className="w-3 h-3 text-emerald-400" />
                    100% Insured Priority Tracking
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                    <BadgeCheck className="w-3 h-3 text-emerald-400" />
                    256-Bit SSL Encrypted Checkout
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Encrypted 256-bit PCI checkout powered by Shopify Backend</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
