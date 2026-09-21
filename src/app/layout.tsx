import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://battlestationsupply.com"),
  title: "Battlestation Supply Co. | The Developer Cockpit Ecosystem",
  description: "High-performance desk mats, Notion Developer Operating Systems, and 4K wallpapers designed for software engineers and digital minimalists.",
  keywords: [
    "developer desk setup",
    "topographic desk mat",
    "developer notion os",
    "cursor rules",
    "claude prompt vault",
    "battlestation supply",
    "900x400 desk pad"
  ],
  authors: [{ name: "Battlestation Supply Co." }],
  openGraph: {
    title: "Battlestation Supply Co. | The Developer Cockpit Ecosystem",
    description: "Upgrade your workstation with precision 900x400mm waterproof topographic mats and the Ultimate Developer Notion OS.",
    images: ["/products/luxury_developer_bundle_1789949136388.jpg"],
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-300"
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
