"use client";

import React, { useState, useEffect } from "react";
import PromoBanner from "@/components/PromoBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CockpitVisualizer from "@/components/CockpitVisualizer";
import NotionOsPreview from "@/components/NotionOsPreview";
import BundleConfigurator from "@/components/BundleConfigurator";
import ProductGrid from "@/components/ProductGrid";
import CommunitySetups from "@/components/CommunitySetups";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import FaqSection from "@/components/FaqSection";
import LiveActivityTicker from "@/components/LiveActivityTicker";
import ProductModal from "@/components/ProductModal";
import CartDrawer from "@/components/CartDrawer";
import TerminalWidget from "@/components/TerminalWidget";
import MobileQuickBuyBar from "@/components/MobileQuickBuyBar";
import LeadMagnetModal from "@/components/LeadMagnetModal";
import Footer from "@/components/Footer";
import { Product } from "@/data/products";

export default function StorefrontClient() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Keyboard shortcut listener for ~ or ` to open terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 font-sans relative">
      {/* Top Banner */}
      <PromoBanner />

      {/* Main Header */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 pb-20 sm:pb-0">
        {/* 1. Hero Section with Video Showcase */}
        <Hero />

        {/* 2. Flagship Bundle Configurator */}
        <BundleConfigurator />

        {/* 3. Interactive Desk Setup Visualizer */}
        <CockpitVisualizer />

        {/* 4. Interactive Notion Dev OS Preview */}
        <NotionOsPreview />

        {/* 5. Complete Product Grid */}
        <ProductGrid onSelectProduct={setSelectedProduct} />

        {/* 6. Authentic Scraped Community Setups */}
        <CommunitySetups />

        {/* 7. Verified Engineer Testimonials & Social Proof */}
        <CustomerTestimonials />

        {/* 8. Interactive Technical FAQ & Verified Engineer Reviews */}
        <FaqSection />
      </main>

      {/* Sticky Mobile Quick-Buy Floating Bar */}
      <MobileQuickBuyBar />

      {/* Interactive Product Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Sleek Live Verified Developer Orders Ticker */}
      <LiveActivityTicker onSelectProduct={setSelectedProduct} />

      {/* Interactive Terminal CLI Widget */}
      <TerminalWidget
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Flyout Cart Drawer */}
      <CartDrawer />

      {/* Developer Architecture Blueprint Exit-Intent / Scroll Modal */}
      <LeadMagnetModal />

      {/* Footer */}
      <Footer />
    </div>
  );
}
