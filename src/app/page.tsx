"use client";

import dynamic from "next/dynamic";

const StorefrontClient = dynamic(
  () => import("@/components/StorefrontClient"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center font-mono text-zinc-400 gap-3">
        <div className="w-8 h-8 border-2 border-emerald-500/30 border-t-emerald-400 rounded-full animate-spin" />
        <span className="text-xs text-emerald-400 tracking-wider">
          [SYS_INIT] Loading Developer Cockpit...
        </span>
      </div>
    ),
  }
);

export default function Home() {
  return <StorefrontClient />;
}
