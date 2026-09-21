"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ShoppingBag, Star, Check, Eye, Search, X, SlidersHorizontal } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/checkout";
import ProductModal from "@/components/ProductModal";

interface ProductGridProps {
  onSelectProduct?: (product: Product) => void;
}

export default function ProductGrid({ onSelectProduct }: ProductGridProps) {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState<"all" | "bundle" | "hardware" | "physical" | "digital">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [internalModalProduct, setInternalModalProduct] = useState<Product | null>(null);

  const handleOpenProduct = (product: Product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      setInternalModalProduct(product);
    }
  };

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      // Category filter
      if (filter === "bundle" && p.category !== "bundle") return false;
      if (filter === "hardware" && p.category !== "hardware") return false;
      if (filter === "physical" && p.category !== "physical") return false;
      if (filter === "digital" && p.category !== "digital") return false;

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = p.title.toLowerCase().includes(q);
        const inDesc = p.description.toLowerCase().includes(q);
        const inFeatures = p.features.some((f) => f.toLowerCase().includes(q));
        const inBadge = p.badge?.toLowerCase().includes(q);
        if (!inTitle && !inDesc && !inFeatures && !inBadge) return false;
      }
      return true;
    });

    // Sorting
    if (sortBy === "price-asc") {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list = [...list].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list = [...list].sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
    }

    return list;
  }, [filter, searchQuery, sortBy]);

  return (
    <section id="products" className="py-20 lg:py-28 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
              [CURATED HARDWARE & WORKFLOW ASSETS • {PRODUCTS.length} PRODUCTS LIVE]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Workstation & Dev Upgrades
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-xl">
              Precision desk mats, anodized hardware, full-stack micro-SaaS boilerplates, and developer OS systems designed for peak flow state.
            </p>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search gear or software..."
                className="w-full pl-9 pr-8 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="relative flex items-center">
              <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-500 absolute left-3 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="w-full sm:w-auto appearance-none pl-8 pr-8 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Customer Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filter Pills & Counter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-zinc-900">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: `All Upgrades (${PRODUCTS.length})` },
              { id: "bundle", label: "Bundles" },
              { id: "hardware", label: "Hardware & Accessories" },
              { id: "physical", label: "Desk Mats & Surfaces" },
              { id: "digital", label: "Developer OS & Code" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-zinc-800 text-emerald-400 border border-emerald-500/40 font-semibold shadow-sm"
                    : "bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-zinc-500">
            Showing <span className="text-emerald-400 font-semibold">{filteredProducts.length}</span> of {PRODUCTS.length} upgrades
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 px-4 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-mono font-bold text-white mb-1">
              &gt;_ NO MATCHING WORKSPACE ASSETS FOUND
            </h3>
            <p className="text-xs font-mono text-zinc-400 max-w-sm mx-auto mb-5">
              No products matched your search for &quot;{searchQuery}&quot; in this category.
            </p>
            <button
              onClick={() => {
                setFilter("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-emerald-400 text-xs font-mono font-semibold transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:shadow-emerald-950/10"
            >
              <div>
                {/* Product Image Container with Quick View Trigger */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-black/40 border-b border-zinc-800 cursor-pointer"
                  onClick={() => handleOpenProduct(product)}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-zinc-950/80 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono text-emerald-400 font-semibold">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 right-3 px-2.5 py-1 rounded-md bg-zinc-950/90 border border-zinc-800/90 backdrop-blur-md text-[10px] font-mono flex items-center justify-between shadow-lg">
                    <span className="font-bold text-emerald-400">
                      {product.deliveryType === "hybrid"
                        ? "📦 PHYSICAL + ⚡ DIGITAL"
                        : product.deliveryType === "physical"
                        ? "📦 PHYSICAL HARDWARE"
                        : "⚡ 100% DIGITAL ASSET"}
                    </span>
                    <span className="text-zinc-400">
                      {product.requiresShipping ? "Tracked Delivery" : "Instant Access"}
                    </span>
                  </div>

                  {/* Hover Overlay Quick View button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-lg bg-zinc-950/90 text-zinc-100 border border-zinc-700 text-xs font-mono font-medium flex items-center gap-1.5 shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Quick View</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="flex items-center text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400">
                      ({product.reviewsCount})
                    </span>
                  </div>

                  <h3
                    onClick={() => handleOpenProduct(product)}
                    className="text-base font-bold text-white font-mono leading-snug mb-2 group-hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    {product.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4 font-sans">
                    {product.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-zinc-800/80 mb-5">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] font-mono text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold font-mono text-white">
                      {formatCurrency(product.price)}
                    </span>
                    {product.compareAtPrice > product.price && (
                      <span className="text-xs font-mono text-zinc-500 line-through">
                        {formatCurrency(product.compareAtPrice)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenProduct(product)}
                    className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    title="Quick Spec Matrix"
                    aria-label="Quick Spec Matrix"
                  >
                    <Eye className="w-4 h-4 text-zinc-400 hover:text-emerald-400" />
                  </button>

                  <button
                    onClick={() => addToCart(product, 1)}
                    className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold text-xs transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Standalone fallback modal if parent did not wire handler */}
      {!onSelectProduct && (
        <ProductModal
          product={internalModalProduct}
          isOpen={!!internalModalProduct}
          onClose={() => setInternalModalProduct(null)}
        />
      )}
    </section>
  );
}
