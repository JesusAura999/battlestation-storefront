"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Terminal, Menu, X, Zap } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface NavbarProps {
  onOpenTerminal: () => void;
}

export default function Navbar({ onOpenTerminal }: NavbarProps) {
  const { cartCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-emerald-500/30 group-hover:border-emerald-400/80 transition-colors shadow-lg shadow-emerald-950/20">
            <Image
              src="/products/brand_profile_avatar_1789951106316.jpg"
              alt="Battlestation Supply Co."
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors text-sm sm:text-base">
                BATTLESTATION
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                v2.0
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
              DEVELOPER COCKPIT
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
          <a
            href="#bundle"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1"
          >
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cockpit Bundle</span>
          </a>
          <a
            href="#visualizer"
            className="hover:text-emerald-400 transition-colors"
          >
            Desk Customizer
          </a>
          <a
            href="#notion-os"
            className="hover:text-emerald-400 transition-colors"
          >
            Notion Dev OS
          </a>
          <a
            href="#products"
            className="hover:text-emerald-400 transition-colors"
          >
            Catalog
          </a>
          <a
            href="#community"
            className="hover:text-emerald-400 transition-colors"
          >
            Community Setups
          </a>
          <a
            href="#faq"
            className="hover:text-emerald-400 transition-colors"
          >
            FAQ & Reviews
          </a>
        </nav>

        {/* Right CTA / Actions */}
        <div className="flex items-center gap-3">
          {/* CLI Terminal Toggle */}
          <button
            onClick={onOpenTerminal}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all cursor-pointer"
            title="Open Developer Console"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>terminal</span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-zinc-950 text-[11px] font-bold font-mono w-5 h-5 rounded-full flex items-center justify-center animate-scaleIn shadow-md shadow-emerald-500/30">
                {cartCount}
              </span>
            )}
          </button>

          {/* Direct CTA */}
          <a
            href="#bundle"
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 font-mono"
          >
            Get Cockpit Bundle
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-6 flex flex-col gap-3 font-mono text-sm">
          <a
            href="#bundle"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-emerald-400 flex items-center gap-2"
          >
            <Zap className="w-4 h-4" /> Cockpit Starter Bundle
          </a>
          <a
            href="#visualizer"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-zinc-300 hover:text-white"
          >
            Desk Customizer
          </a>
          <a
            href="#notion-os"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-zinc-300 hover:text-white"
          >
            Notion Dev OS
          </a>
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-zinc-300 hover:text-white"
          >
            Store Catalog
          </a>
          <a
            href="#community"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-zinc-300 hover:text-white"
          >
            Community Setups
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-zinc-300 hover:text-white"
          >
            FAQ & Reviews
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTerminal();
            }}
            className="w-full mt-2 py-2.5 rounded bg-zinc-900 border border-emerald-500/30 text-emerald-400 flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4" /> Launch Terminal CLI
          </button>
        </div>
      )}
    </header>
  );
}
