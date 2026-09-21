import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import ProductStructuredData from "@/components/ProductStructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://battlestation-storefront.vercel.app"),
  title: "Battlestation Supply Co. | The Developer Cockpit Ecosystem",
  description: "High-performance waterproof topographic desk mats, Developer Notion Operating Systems, and 4K/8K wallpapers engineered for software engineers.",
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
    title: "Battlestation Supply Co. | High-Performance Developer Workspaces",
    description: "Precision 900x400mm waterproof topographic mats & Developer Notion OS. Claim 10% off with code SETUPWARS10.",
    url: "https://battlestation-storefront.vercel.app",
    siteName: "Battlestation Supply Co.",
    images: [
      {
        url: "/products/luxury_developer_bundle_1789949136388.jpg",
        width: 1200,
        height: 630,
        alt: "The Developer Cockpit Starter Bundle"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Battlestation Supply Co. | Developer Cockpit Ecosystem",
    description: "900x400mm waterproof topographic desk mats & Developer Notion OS. 10% off with SETUPWARS10.",
    images: ["/products/luxury_developer_bundle_1789949136388.jpg"],
    creator: "@battlestationsupply"
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
      <head>
        <ProductStructuredData />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-300"
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
