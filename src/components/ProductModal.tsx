"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Star,
  Check,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Zap,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/checkout";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

// Curated supplementary gallery photos based on product category & context
const PRODUCT_GALLERIES: Record<string, string[]> = {
  "prod-bundle-cockpit": [
    "/products/luxury_developer_bundle_1789949136388.jpg",
    "/products/topographic_desk_mat_1789949088023.jpg",
    "/products/developer_notion_os_1789949102325.jpg",
    "/products/docker_cheatsheet_wallpaper_1789949120208.jpg",
    "/products/developer_night_cockpit_1789949075279.jpg",
  ],
  "prod-mat-topo": [
    "/products/topographic_desk_mat_1789949088023.jpg",
    "/products/luxury_developer_bundle_1789949136388.jpg",
    "/products/developer_night_cockpit_1789949075279.jpg",
  ],
  "prod-notion-os": [
    "/products/developer_notion_os_1789949102325.jpg",
    "/products/developer_night_cockpit_1789949075279.jpg",
    "/products/luxury_developer_bundle_1789949136388.jpg",
  ],
  "prod-cursor-os": [
    "/products/developer_night_cockpit_1789949075279.jpg",
    "/products/developer_notion_os_1789949102325.jpg",
    "/products/docker_cheatsheet_wallpaper_1789949120208.jpg",
  ],
  "prod-wallpapers-4k": [
    "/products/docker_cheatsheet_wallpaper_1789949120208.jpg",
    "/products/developer_night_cockpit_1789949075279.jpg",
    "/products/luxury_developer_bundle_1789949136388.jpg",
  ],
  "prod-cheat-sheets": [
    "/products/docker_cheatsheet_wallpaper_1789949120208.jpg",
    "/products/luxury_developer_bundle_1789949136388.jpg",
    "/products/developer_night_cockpit_1789949075279.jpg",
  ],
  "prod-magsafe-stand": [
    "/products/developer_night_cockpit_1789949075279.jpg",
    "/products/topographic_desk_mat_1789949088023.jpg",
    "/products/luxury_developer_bundle_1789949136388.jpg",
  ],
};

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Reset image index & quantity when product changes or opens
  useEffect(() => {
    if (product) {
      setSelectedImageIndex(0);
      setQuantity(1);
      setAdded(false);
    }
  }, [product, isOpen]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  // Resolve full gallery images
  const galleryImages =
    PRODUCT_GALLERIES[product.id] || [product.imageUrl];

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const handleQuickCheckout = () => {
    addToCart(product, quantity);
    setIsCartOpen(true);
    onClose();
  };

  const discountPercent =
    product.compareAtPrice > product.price
      ? Math.round(
          ((product.compareAtPrice - product.price) / product.compareAtPrice) *
            100
        )
      : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className="relative w-full max-w-5xl my-auto rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl shadow-black/80 overflow-hidden z-10 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-zinc-800 bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              [SYSTEM_SPEC_VIEW]
            </span>
            <span className="text-zinc-600 font-mono">/</span>
            <span className="text-xs font-mono text-zinc-400 capitalize">
              {product.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 md:p-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Photo Gallery (5 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              {/* Main Active Image Box */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/60 border border-zinc-800 group">
                <Image
                  src={galleryImages[selectedImageIndex]}
                  alt={`${product.title} view ${selectedImageIndex + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />

                {/* Badge Overlay */}
                {product.badge && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-emerald-500/40 text-xs font-mono text-emerald-400 font-semibold shadow-md">
                    {product.badge}
                  </div>
                )}

                {/* Shipping / Delivery Pill */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono text-zinc-300 border border-zinc-800">
                  {product.requiresShipping
                    ? "📦 US Tracked (3-5 Days)"
                    : "⚡ Instant Digital Download"}
                </div>

                {/* Gallery Navigation Arrows (if > 1 image) */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white backdrop-blur-sm border border-zinc-700 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white backdrop-blur-sm border border-zinc-700 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Row */}
              {galleryImages.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                        selectedImageIndex === idx
                          ? "border-emerald-400 shadow-md shadow-emerald-500/20 scale-95"
                          : "border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Quick Quality Indicators */}
              <div className="grid grid-cols-2 gap-2 mt-2 pt-3 border-t border-zinc-800/80">
                <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>30-Day Money Back</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                  <Truck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Dispatched in 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Specs, Details & Add to Cart (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Review & Stock status */}
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-mono font-bold text-white">
                      {product.rating.toFixed(1)}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      ({product.reviewsCount} verified reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>In Stock & Ready</span>
                  </div>
                </div>

                {/* Title */}
                <h2
                  id="product-modal-title"
                  className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight"
                >
                  {product.title}
                </h2>

                {/* Price Bar */}
                <div className="flex items-baseline gap-3 mt-3 pb-4 border-b border-zinc-800">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                    {formatCurrency(product.price)}
                  </span>
                  {product.compareAtPrice > product.price && (
                    <>
                      <span className="text-sm sm:text-base font-mono text-zinc-500 line-through">
                        {formatCurrency(product.compareAtPrice)}
                      </span>
                      {discountPercent && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-xs font-mono text-emerald-400 font-bold">
                          Save {discountPercent}%
                        </span>
                      )}
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  {product.description}
                </p>

                {/* Key Features Checklist */}
                <div className="mt-4 space-y-2 bg-zinc-900/40 p-3.5 rounded-xl border border-zinc-800/80">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                    [ENGINEER DELIVERABLES]
                  </span>
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs font-mono text-zinc-200"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* TECHNICAL SPEC MATRIX TABLE */}
                <div className="mt-5">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5 mb-2.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Technical Specification Matrix</span>
                  </h4>
                  <div className="rounded-xl border border-zinc-800 overflow-hidden divide-y divide-zinc-800/80 font-mono text-xs">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div
                        key={key}
                        className="grid grid-cols-12 px-3.5 py-2.5 bg-zinc-900/40 hover:bg-zinc-900/80 transition-colors"
                      >
                        <span className="col-span-5 text-zinc-400 font-medium truncate">
                          {key}
                        </span>
                        <span className="col-span-7 text-white font-semibold">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ACTION AREA: Quantity + One-Click Add to Cart */}
              <div className="pt-4 border-t border-zinc-800 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity Selector */}
                  <div className="flex items-center rounded-lg border border-zinc-700 bg-zinc-900 overflow-hidden">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors text-sm font-mono cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-3 py-2 text-white font-mono font-bold text-xs min-w-[32px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors text-sm font-mono cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-3 px-4 rounded-xl font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                      added
                        ? "bg-emerald-400 text-zinc-950 shadow-emerald-400/30"
                        : "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-emerald-500/20"
                    }`}
                  >
                    {added ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Added to Cart ({quantity})</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>
                          Add to Cart • {formatCurrency(product.price * quantity)}
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Instant Checkout Option */}
                <button
                  onClick={handleQuickCheckout}
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Quick Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>

                {/* Discount Code Note */}
                <p className="text-[11px] font-mono text-center text-zinc-400">
                  ⚡ Use promo code{" "}
                  <span className="text-emerald-400 font-bold">SETUPWARS10</span>{" "}
                  at checkout for an additional 10% off.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
