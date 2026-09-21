"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Minimize2, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface TerminalWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  type: "input" | "output" | "error" | "success";
  text: string;
}

export default function TerminalWidget({ isOpen, onClose }: TerminalWidgetProps) {
  const { applyDiscountCode, proceedToCheckout, cart } = useCart();
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    { type: "output", text: "Battlestation OS CLI v2.4.1 (x86_64-node-edge)" },
    { type: "output", text: "Type 'help' to view available system commands or 'promo SETUPWARS10' to apply 10% off." }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    setHistory((prev) => [...prev, { type: "input", text: `$ ${cmd}` }]);
    setInputVal("");

    const parts = cmd.split(" ");
    const action = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");

    switch (action) {
      case "help":
        setHistory((prev) => [
          ...prev,
          {
            type: "output",
            text: `Available commands:
  help                Show this command manual
  promo <code>        Apply a discount code (e.g. promo SETUPWARS10)
  cat bundle.json     View bundle contents JSON manifest
  specs               Print 900x400mm mat engineering specifications
  cart                Show current cart items and count
  checkout            Trigger instant headless Shopify checkout
  clear               Clear the terminal screen
  exit                Close the CLI interface`
          }
        ]);
        break;

      case "promo":
        if (!arg) {
          setHistory((prev) => [...prev, { type: "error", text: "Usage: promo <CODE>. Example: promo SETUPWARS10" }]);
        } else {
          const ok = applyDiscountCode(arg);
          if (ok) {
            setHistory((prev) => [
              ...prev,
              { type: "success", text: `[SUCCESS] Promo code '${arg.toUpperCase()}' verified and applied to cart!` }
            ]);
          } else {
            setHistory((prev) => [
              ...prev,
              { type: "error", text: `[ERROR] Invalid coupon code '${arg}'. Try SETUPWARS10 for 10% off.` }
            ]);
          }
        }
        break;

      case "specs":
        setHistory((prev) => [
          ...prev,
          {
            type: "output",
            text: `Hardware Specifications:
  - Dimensions: 900mm x 400mm x 4.0mm
  - Surface: High-Density Micro-Weave (Hydrophobic Nano-Coating)
  - Edge: 360-Degree Lock-Stitched Precision Border
  - Base: 100% Textured Natural Anti-Slip Rubber (720g Weight)
  - Acoustic Absorption: -3.8dB Mechanical Switch Resonance Dampening`
          }
        ]);
        break;

      case "cat":
        if (arg === "bundle.json" || arg === "bundle") {
          setHistory((prev) => [
            ...prev,
            {
              type: "output",
              text: JSON.stringify(
                {
                  bundle: "Developer Cockpit V2",
                  hardware: ["900x400mm Topo Desk Mat"],
                  software: [
                    "Ultimate Developer Notion OS",
                    "Cursor & Claude AI Prompt Vault (.cursorrules)",
                    "50+ 4K OLED Ultra-Wide Wallpapers",
                    "Linux & Docker Vector Cheat Sheets"
                  ],
                  pricing: { original: "$115.00", bundle: "$59.00", with_coupon: "$53.10" }
                },
                null,
                2
              )
            }
          ]);
        } else {
          setHistory((prev) => [...prev, { type: "error", text: `File not found: ${arg}. Try 'cat bundle.json'` }]);
        }
        break;

      case "cart":
        setHistory((prev) => [
          ...prev,
          {
            type: "output",
            text: `Active Cart: ${cart.length} item(s)\n` +
              cart.map((line) => `• ${line.product.title} x${line.quantity} ($${(line.product.price * line.quantity).toFixed(2)})`).join("\n")
          }
        ]);
        break;

      case "checkout":
        if (cart.length === 0) {
          setHistory((prev) => [
            ...prev,
            { type: "error", text: "Cart is empty. Add a product first or use 'cat bundle.json'" }
          ]);
        } else {
          setHistory((prev) => [
            ...prev,
            { type: "success", text: "Routing to secure Shopify checkout permalink..." }
          ]);
          setTimeout(() => proceedToCheckout(), 800);
        }
        break;

      case "clear":
        setHistory([]);
        break;

      case "exit":
        onClose();
        break;

      default:
        setHistory((prev) => [
          ...prev,
          { type: "error", text: `Command not found: '${cmd}'. Type 'help' for options.` }
        ]);
        break;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-xl p-2 sm:p-0">
      <div className="rounded-2xl border border-emerald-500/40 bg-zinc-950/95 backdrop-blur-xl shadow-2xl shadow-emerald-950/50 overflow-hidden flex flex-col font-mono text-xs text-zinc-300">
        
        {/* Terminal Titlebar */}
        <div className="p-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white text-xs">battlestation@nexus: ~ (CLI)</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div ref={scrollRef} className="p-4 max-h-72 overflow-y-auto space-y-2 select-text">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === "input" && <p className="text-zinc-200 font-semibold">{item.text}</p>}
              {item.type === "output" && (
                <pre className="text-zinc-400 whitespace-pre-wrap leading-relaxed">{item.text}</pre>
              )}
              {item.type === "error" && <p className="text-red-400">{item.text}</p>}
              {item.type === "success" && <p className="text-emerald-400">{item.text}</p>}
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleCommand} className="p-3 bg-zinc-900/80 border-t border-zinc-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command ('help', 'promo SETUPWARS10')..."
            className="flex-1 bg-transparent text-emerald-300 placeholder:text-zinc-600 focus:outline-none text-xs"
          />
        </form>

      </div>
    </div>
  );
}
