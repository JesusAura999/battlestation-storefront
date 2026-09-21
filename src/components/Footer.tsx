"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Terminal, Shield, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-emerald-500/30">
                <Image
                  src="/products/brand_profile_avatar_1789951106316.jpg"
                  alt="Battlestation Supply Co."
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-white text-sm">BATTLESTATION SUPPLY CO.</span>
            </div>
            <p className="text-zinc-400 font-sans text-xs leading-relaxed max-w-sm">
              Engineering high-performance physical workspace accessories and digital productivity systems for developers, designers, and creators worldwide.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational • Headless Next.js 15 Engine</span>
            </div>
          </div>

          {/* Social Channels */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">
              Official Channels
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.tiktok.com/@battlestationsupplyco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>TikTok (@battlestationsupplyco)</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/battle.stationssupply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram (@battle.stationssupply)</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@BattlestationSupply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>YouTube (@BattlestationSupply)</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Store Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">
              Products
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#bundle" className="hover:text-emerald-400 transition-colors">
                  Developer Cockpit Bundle
                </a>
              </li>
              <li>
                <a href="#visualizer" className="hover:text-emerald-400 transition-colors">
                  Topographic Desk Mat
                </a>
              </li>
              <li>
                <a href="#notion-os" className="hover:text-emerald-400 transition-colors">
                  Ultimate Notion Dev OS
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  4K OLED Wallpapers
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Technical FAQ & Care
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors">
                  Verified Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Guarantee & Specs */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">
              Engineering Specs
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>30-Day Durability Guarantee</span>
              </li>
              <li>⚡ Instant Digital Asset Access</li>
              <li>📦 Tracked Global Parcel Delivery</li>
              <li>🔒 256-bit Encrypted Checkout</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© <span suppressHydrationWarning>2026</span> Battlestation Supply Co. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-mono">10% OFF CODE: SETUPWARS10</span>
            <span>•</span>
            <span>Crafted for Engineers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
