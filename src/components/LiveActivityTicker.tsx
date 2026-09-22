"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle, X, ShoppingBag, Sparkles } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

interface ActivityOrder {
  id: string;
  name: string;
  title: string;
  location: string;
  productId: string;
  productName: string;
  productImage: string;
  timeAgo: string;
  statusBadge: string;
}

const RECENT_ORDERS: ActivityOrder[] = [
  {
    id: "act-1",
    name: "Alex M.",
    title: "Staff Systems Engineer",
    location: "San Francisco, CA",
    productId: "prod-9959841104115",
    productName: "The Developer Cockpit Starter Bundle",
    productImage: "/products/luxury_developer_bundle_1789949136388.jpg",
    timeAgo: "3m ago",
    statusBadge: "Verified Order • USPS Priority",
  },
  {
    id: "act-2",
    name: "David L.",
    title: "Full-Stack Dev",
    location: "Austin, TX",
    productId: "prod-9963791220979",
    productName: "Cursor & Claude AI Developer Workflow OS",
    productImage: "/products/developer_night_cockpit_1789949075279.jpg",
    timeAgo: "7m ago",
    statusBadge: "Instant Access Dispatched",
  },
  {
    id: "act-3",
    name: "Sarah K.",
    title: "Platform Architect",
    location: "Seattle, WA",
    productId: "prod-9946360283379",
    productName: "Topographical Minimalist Desk Mat",
    productImage: "/products/topographic_desk_mat_1789949088023.jpg",
    timeAgo: "14m ago",
    statusBadge: "Verified Order • Fast Track",
  },
  {
    id: "act-4",
    name: "Marcus T.",
    title: "Principal SRE",
    location: "Berlin, Germany",
    productId: "prod-9946335215859",
    productName: "Ultimate Developer Notion OS",
    productImage: "/products/developer_notion_os_1789949102325.jpg",
    timeAgo: "22m ago",
    statusBadge: "Verified Global Order",
  },
  {
    id: "act-5",
    name: "Priya P.",
    title: "AI Engineer",
    location: "Toronto, Canada",
    productId: "prod-9959841104115",
    productName: "The Developer Cockpit Starter Bundle",
    productImage: "/products/luxury_developer_bundle_1789949136388.jpg",
    timeAgo: "31m ago",
    statusBadge: "Applied Promo SETUPWARS10",
  },
  {
    id: "act-6",
    name: "Kenji S.",
    title: "Kernel Developer",
    location: "Tokyo, Japan",
    productId: "prod-9963790991603",
    productName: "Minimalist 3-in-1 Foldable MagSafe Stand",
    productImage: "/products/developer_night_cockpit_1789949075279.jpg",
    timeAgo: "44m ago",
    statusBadge: "Verified Order • Dispatched",
  },
];

interface LiveActivityTickerProps {
  onSelectProduct?: (product: Product) => void;
}

export default function LiveActivityTicker({
  onSelectProduct,
}: LiveActivityTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Initial delay before showing first ticker notification
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Cycle through recent orders every 7 seconds when not paused or dismissed
  useEffect(() => {
    if (isDismissed || isPaused) return;

    const interval = setInterval(() => {
      setIsVisible(false);

      // Brief transition delay
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_ORDERS.length);
        setIsVisible(true);
      }, 400);
    }, 7000);

    return () => clearInterval(interval);
  }, [isDismissed, isPaused]);

  if (isDismissed) return null;

  const currentOrder = RECENT_ORDERS[currentIndex];

  const handleCardClick = () => {
    if (onSelectProduct && currentOrder) {
      const match = PRODUCTS.find((p) => p.id === currentOrder.productId);
      if (match) {
        onSelectProduct(match);
      }
    }
  };

  return (
    <div
      className={`fixed bottom-4 left-4 z-30 max-w-[340px] sm:max-w-[380px] w-full transition-all duration-500 ease-out pointer-events-auto ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        onClick={handleCardClick}
        className="relative group rounded-xl bg-zinc-950/95 backdrop-blur-md border border-zinc-800/90 hover:border-emerald-500/40 shadow-2xl shadow-black/80 p-3 sm:p-3.5 transition-all duration-200 cursor-pointer"
      >
        {/* Top live pulse indicator & dismiss button */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold tracking-wider uppercase">
              RECENT VERIFIED ORDER
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-zinc-400">
              {currentOrder.timeAgo}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDismissed(true);
              }}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              title="Dismiss live ticker"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card Content Row */}
        <div className="flex items-center gap-3">
          {/* Thumbnail */}
          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-black/60 border border-zinc-800 flex-shrink-0 group-hover:border-emerald-500/40 transition-colors">
            <Image
              src={currentOrder.productImage}
              alt={currentOrder.productName}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1 text-xs text-white font-mono">
              <span className="font-semibold text-zinc-100 truncate">
                {currentOrder.name}
              </span>
              <span className="text-[10px] text-zinc-400 truncate">
                ({currentOrder.location})
              </span>
            </div>

            <p className="text-xs font-mono font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors truncate">
              {currentOrder.productName}
            </p>

            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1 truncate">
                <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <span>{currentOrder.statusBadge}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Subtle quick view hint on hover */}
        <div className="mt-2 pt-2 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-400 group-hover:text-emerald-400/90 transition-colors">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Click to inspect specifications</span>
          </span>
          <span className="text-zinc-400">ESC to close</span>
        </div>
      </div>
    </div>
  );
}
