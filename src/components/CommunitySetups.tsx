"use client";

import React from "react";
import Image from "next/image";
import { Camera, ExternalLink, Sparkles } from "lucide-react";

interface CommunityItem {
  title: string;
  creator: string;
  source: string;
  image: string;
  specs: string;
}

const SETUPS: CommunityItem[] = [
  {
    title: "Minimalist Dual-Monitor Standing Cockpit",
    creator: "Creative Commons / Openverse",
    source: "Wikimedia",
    image: "/assets/scraped_setups/setup_New_Desk_setup___Standing_Desk_e118b641.jpg",
    specs: "34\" Ultrawide + Vertical Secondary • Topographic Mat"
  },
  {
    title: "Engineering & Architecture Command Station",
    creator: "Creative Commons / Openverse",
    source: "Openverse",
    image: "/assets/scraped_setups/setup_The_battlestation_ca2042eb.jpg",
    specs: "Mechanical Keyboard • Studio Audio Monitors"
  },
  {
    title: "Late Night Deep Work Cockpit",
    creator: "Creative Commons / Openverse",
    source: "Wikimedia",
    image: "/assets/scraped_setups/setup_Windows_10_Battlestation_-_Fro_f0413c24.jpg",
    specs: "Warm Ambient Backlight • Anodized Aluminum Stand"
  },
  {
    title: "Clean Monochrome Developer Desk",
    creator: "Creative Commons / Openverse",
    source: "Openverse",
    image: "/assets/scraped_setups/setup_Office_Desk_Setup_ea951b07.jpg",
    specs: "Zero Cable Clutter • Wireless Ergonomic Peripherals"
  }
];

export default function CommunitySetups() {
  return (
    <section id="community" className="py-20 bg-zinc-950/80 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>COMMUNITY DESK INSPIRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built For Real Workspaces
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Real software engineers, indie hackers, and creators building high-performance desk setups around the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SETUPS.map((setup, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/60 group hover:border-emerald-500/40 transition-all shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <Image
                  src={setup.image}
                  alt={setup.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs font-mono font-bold text-white truncate">
                    {setup.title}
                  </p>
                  <p className="text-[10px] font-mono text-emerald-400 truncate mt-0.5">
                    {setup.specs}
                  </p>
                </div>
              </div>
              <div className="p-3 bg-zinc-950 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>Curated via {setup.source}</span>
                <span className="text-zinc-400">Verified Setup</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
