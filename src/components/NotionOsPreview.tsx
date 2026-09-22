"use client";

import React, { useState } from "react";
import { CheckSquare, Square, Code, FileText, BookOpen, Copy, Check, ArrowRight, Sparkles, Terminal } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

interface TaskItem {
  id: string;
  title: string;
  tag: string;
  priority: "High" | "Medium" | "Urgent";
  done: boolean;
}

const INITIAL_TASKS: TaskItem[] = [
  { id: "1", title: "Implement Zero-Cost Edge LLM Cascade (AGY + Ollama)", tag: "Architecture", priority: "Urgent", done: true },
  { id: "2", title: "Ship Headless Next.js 15 Custom Storefront", tag: "Frontend", priority: "High", done: true },
  { id: "3", title: "Configure Buffer Multi-Channel Video Ingestion", tag: "Marketing", priority: "High", done: true },
  { id: "4", title: "Deploy 100% Free Setup Scraper (Openverse/Wikimedia)", tag: "Data Engine", priority: "Medium", done: false },
  { id: "5", title: "Activate SETUPWARS10 Launch Discount Automation", tag: "Checkout", priority: "High", done: true }
];

export default function NotionOsPreview() {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<"tasks" | "prompts" | "snippets" | "architecture">("tasks");
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const notionProduct = PRODUCTS.find(
    (p) => p.shopifyVariantId === "50825384952051"
  )!;

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  };

  const samplePrompt = `// .cursorrules: Elite Senior Fullstack Architecture
You are an elite principal engineer adhering strictly to zero-defect execution.
1. Strictly maintain multi-file invariants and TypeScript strict mode.
2. Never rewrite unrelated files or introduce unvetted third-party libraries.
3. Optimize for edge execution, sub-second TTFB, and zero-cost headless APIs.
4. Ensure dark-mode UI with high contrast and accessible micro-interactions.`;

  const copyPromptText = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section id="notion-os" className="py-20 lg:py-28 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE WORKSPACE PREVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Ultimate Developer Notion OS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Click around the live interactive demo below. Designed to organize your sprints, system prompt vault, code snippet bank, and technical documentation into one frictionless command center.
          </p>
        </div>

        {/* Notion Container Card */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-2xl overflow-hidden">
          
          {/* Notion Header Simulation */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-zinc-900 to-zinc-950 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xl">
                💻
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
                  DevHub // Operating System
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Duplicate Template Ready
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  workspace://battlestation-cockpit/production
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => addToCart(notionProduct, 1)}
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
              >
                <span>Unlock Full OS ($29.00)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="px-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800 flex overflow-x-auto gap-2 sm:gap-4 scrollbar-none">
            <button
              onClick={() => setActiveTab("tasks")}
              className={`py-3 px-3 text-xs font-mono flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === "tasks"
                  ? "border-emerald-400 text-emerald-400 font-semibold"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              <CheckSquare className="w-4 h-4" /> Sprint Kanban & Tasks
            </button>

            <button
              onClick={() => setActiveTab("prompts")}
              className={`py-3 px-3 text-xs font-mono flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === "prompts"
                  ? "border-emerald-400 text-emerald-400 font-semibold"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              <Terminal className="w-4 h-4" /> AI Prompt Vault (.cursorrules)
            </button>

            <button
              onClick={() => setActiveTab("snippets")}
              className={`py-3 px-3 text-xs font-mono flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === "snippets"
                  ? "border-emerald-400 text-emerald-400 font-semibold"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              <Code className="w-4 h-4" /> Snippet Database
            </button>

            <button
              onClick={() => setActiveTab("architecture")}
              className={`py-3 px-3 text-xs font-mono flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === "architecture"
                  ? "border-emerald-400 text-emerald-400 font-semibold"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4" /> RFC & System Specs
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="p-4 sm:p-6 min-h-[320px] bg-zinc-950/40">
            
            {/* 1. TASKS TAB */}
            {activeTab === "tasks" && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span>Interactive Sprint Backlog (Click any row to test toggle)</span>
                  <span className="text-emerald-400">
                    {tasks.filter((t) => t.done).length}/{tasks.length} Completed
                  </span>
                </div>

                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer ${
                      task.done
                        ? "bg-zinc-900/30 border-zinc-800/60 opacity-60 text-zinc-500"
                        : "bg-zinc-900/90 border-zinc-800 text-zinc-200 hover:border-emerald-500/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {task.done ? (
                        <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                      )}
                      <span className={`text-xs sm:text-sm font-mono ${task.done ? "line-through" : ""}`}>
                        {task.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                        {task.tag}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          task.priority === "Urgent"
                            ? "bg-red-950/60 text-red-400 border-red-800/50"
                            : "bg-amber-950/60 text-amber-400 border-amber-800/50"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 2. PROMPTS TAB */}
            {activeTab === "prompts" && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">
                    File: <code>.cursorrules</code> (Claude 3.5 Sonnet / Cursor IDE)
                  </span>
                  <button
                    onClick={copyPromptText}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-xs font-mono text-emerald-400 hover:border-emerald-400 cursor-pointer"
                  >
                    {copiedPrompt ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPrompt ? "Copied" : "Copy Rule"}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto">
                  <pre className="text-emerald-400/90">{samplePrompt}</pre>
                </div>

                <p className="text-xs text-zinc-500 font-mono">
                  💡 The full pack contains 50+ pre-engineered rulesets covering Next.js 15, Python FastAPI, PostgreSQL schemas, and Docker multi-stage deployments.
                </p>
              </div>
            )}

            {/* 3. SNIPPETS TAB */}
            {activeTab === "snippets" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      python // async_pool.py
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400">
                      Concurrency
                    </span>
                  </div>
                  <pre className="font-mono text-[11px] text-zinc-300 overflow-x-auto">
{`async def fetch_pool(urls: list[str]):
    async with httpx.AsyncClient() as client:
        tasks = [client.get(u) for u in urls]
        return await asyncio.gather(*tasks)`}
                  </pre>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      typescript // cart_builder.ts
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400">
                      Checkout
                    </span>
                  </div>
                  <pre className="font-mono text-[11px] text-zinc-300 overflow-x-auto">
{`export function makePermalink(items, code) {
  const q = items.map(i => \`\${i.id}:\${i.qty}\`);
  return \`/cart/\${q.join(",")}?discount=\${code}\`;
}`}
                  </pre>
                </div>
              </div>
            )}

            {/* 4. ARCHITECTURE TAB */}
            {activeTab === "architecture" && (
              <div className="space-y-3 font-mono text-xs text-zinc-300">
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                  <span className="font-bold text-white">RFC-042: Headless Checkout Permalink Routing</span>
                  <span className="text-emerald-400">APPROVED</span>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                  <span className="font-bold text-white">RFC-041: Autonomous ElevenLabs Brian Voiceover Pipeline</span>
                  <span className="text-emerald-400">MERGED</span>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                  <span className="font-bold text-white">RFC-040: Tailscale Direct-to-Device Video Transfer</span>
                  <span className="text-emerald-400">VERIFIED</span>
                </div>
              </div>
            )}

          </div>

          {/* Notion OS Footer CTA */}
          <div className="p-4 bg-zinc-900/90 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Instant 1-Click Notion Template Duplicate URL delivered upon purchase.</span>
            </div>
            <button
              onClick={() => addToCart(notionProduct, 1)}
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>Add to Cart ($29.00)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
