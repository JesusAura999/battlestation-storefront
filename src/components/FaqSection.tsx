"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Star,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  Terminal,
  ShieldCheck,
  Truck,
  Droplets,
  Tag,
  Code2,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

interface FaqItem {
  id: string;
  category: "notion" | "shipping" | "care" | "discounts" | "hardware" | "ai";
  categoryLabel: string;
  question: string;
  answer: string;
  codeSnippet?: string;
  actionType?: "copy-code" | "apply-discount";
  actionPayload?: string;
}

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  companyContext: string;
  verified: boolean;
  avatarSeed: string;
  rating: number;
  date: string;
  productName: string;
  techStack: string[];
  reviewText: string;
}

const FAQS: FaqItem[] = [
  {
    id: "faq-notion-os",
    category: "notion",
    categoryLabel: "Notion OS & Digital",
    question: "How do I access and duplicate the Developer Notion Operating System?",
    answer:
      "Instant access is granted upon checkout completion. A direct Notion template duplicate link is immediately rendered on your confirmation page and dispatched to your email. Click 'Duplicate' in the upper-right corner to instantly clone the complete workspace into your personal or organization Notion account. Includes free lifetime updates and automated markdown export formats.",
    codeSnippet: "https://notion.so/battlestation/ultimate-developer-os-v2",
  },
  {
    id: "faq-shipping",
    category: "shipping",
    categoryLabel: "Fulfillment & Tracking",
    question: "What are the shipping timelines for desk mats and physical accessories?",
    answer:
      "Physical orders (Topographic Desk Mats, MagSafe Stands) are packed and dispatched within 24 hours from our domestic US fulfillment node. Domestic US transit averages 3–5 business days with end-to-end tracking via USPS Priority or UPS Ground. International shipments arrive in 7–12 business days. Digital products (Notion OS, Wallpapers, Cheatsheets) are dispatched instantly with zero transit latency.",
  },
  {
    id: "faq-mat-care",
    category: "care",
    categoryLabel: "Hardware Maintenance",
    question: "How do I care for and clean the hydrophobic topographic desk mat?",
    answer:
      "The micro-weave surface is treated with an industrial-grade hydrophobic nano-coating. Accidental coffee, water, or energy drink spills bead up instantly on contact and can be wiped dry in seconds with a clean microfiber cloth. For periodic deep maintenance, the mat is 100% machine washable on a cold gentle cycle (air dry only, avoid heat). The 360° anti-fray micro-stitched borders resist edge degradation over years of intensive typing.",
  },
  {
    id: "faq-discounts",
    category: "discounts",
    categoryLabel: "Discount Codes",
    question: "What developer discount codes are currently valid at checkout?",
    answer:
      "Use code SETUPWARS10 for an instant 10% discount across your entire order. Upgrading with full workstation bundles? Code VIP20 grants 20% off qualifying multi-item setups. You can apply the code in your cart drawer or directly during Shopify checkout.",
    actionType: "apply-discount",
    actionPayload: "SETUPWARS10",
  },
  {
    id: "faq-ai-stack",
    category: "ai",
    categoryLabel: "AI Workflow & IDEs",
    question: "Which editors and AI models are supported by the Cursor & Claude OS?",
    answer:
      "The prompt repository, system instructions, and .cursorrules configurations are calibrated for Claude 3.5 Sonnet, GPT-4o, and DeepSeek-Coder. Fully compatible with Cursor IDE, VS Code (Continue/Cline/Roo Code extensions), Windsurf, and Claude Desktop. Includes hardened guidelines for TypeScript/Next.js, Rust, Python, and Go architectures.",
    codeSnippet: "// .cursorrules - Battlestation Strict TypeScript v2.0",
  },
  {
    id: "faq-mouse-sensor",
    category: "hardware",
    categoryLabel: "Hardware Precision",
    question: "Is the desk mat compatible with high-DPI optical gaming and CAD sensors?",
    answer:
      "Yes. The ultra-dense micro-weave glide fabric provides zero jitter and uniform static/kinetic friction coefficients. Extensively tested with top-tier optical sensors (PixArt PAW3395, Razer Focus Pro 30K, Logitech HERO 25K) up to 30,000 DPI for precision code navigation and competitive gaming.",
  },
];

const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Alexey R.",
    role: "Staff Infrastructure Engineer",
    companyContext: "Cloud Infrastructure / Kubernetes Core",
    verified: true,
    avatarSeed: "AR",
    rating: 5,
    date: "3 days ago",
    productName: "The Developer Cockpit Starter Bundle",
    techStack: ["Rust", "Kubernetes", "Linux", "Docker", "Neovim"],
    reviewText:
      "The 900x400mm topographic mat anchors my split ergonomic keyboard and 34\" ultrawide flawlessly. Spilled my espresso on day two—beaded right off without a single trace. The framed Docker cheatsheet and dark 4K wallpapers completed my dream battlestation.",
  },
  {
    id: "rev-2",
    name: "Elena K.",
    role: "Lead Full-Stack Architect",
    companyContext: "Fintech Platform",
    verified: true,
    avatarSeed: "EK",
    rating: 5,
    date: "1 week ago",
    productName: "Ultimate Developer Notion OS",
    techStack: ["TypeScript", "Next.js", "TailwindCSS", "PostgreSQL", "tRPC"],
    reviewText:
      "Replaced three separate tracking spreadsheets and Jira boards with this single Notion OS. The sprint velocity graphs, prompt vault, and automated RFC templates are engineered for real production teams, not influencer fluff.",
  },
  {
    id: "rev-3",
    name: "Marcus D.",
    role: "DevOps & Platform Specialist",
    companyContext: "Distributed Systems SRE",
    verified: true,
    avatarSeed: "MD",
    rating: 5,
    date: "2 weeks ago",
    productName: "Topographical Minimalist Desk Mat",
    techStack: ["Go", "Terraform", "AWS", "Grafana", "Zsh"],
    reviewText:
      "The stitching is genuinely micro-woven so it doesn't chafe wrists during 10-hour deploy nights. Zero chemical odor right out of the packaging, and the natural rubber base sticks like glue to solid walnut.",
  },
  {
    id: "rev-4",
    name: "Devon S.",
    role: "Senior AI Research Engineer",
    companyContext: "Applied Generative Intelligence",
    verified: true,
    avatarSeed: "DS",
    rating: 5,
    date: "2 weeks ago",
    productName: "Cursor & Claude AI Developer Workflow OS",
    techStack: ["Python", "PyTorch", "Claude 3.5", "Cursor", "FastAPI"],
    reviewText:
      "The .cursorrules presets alone eliminated 80% of hallucinated imports and premature file writes in our Next.js & Python repos. Paid for itself within the first 30 minutes of pair programming with Claude Sonnet.",
  },
  {
    id: "rev-5",
    name: "Priya M.",
    role: "Open Source Contributor & UI Engineer",
    companyContext: "Developer Tooling OSS",
    verified: true,
    avatarSeed: "PM",
    rating: 5,
    date: "3 weeks ago",
    productName: "The Developer Cockpit Starter Bundle",
    techStack: ["React 19", "TypeScript", "Tailwind", "Vite", "GraphQL"],
    reviewText:
      "Dispatched within 24 hours and arrived in pristine condition. Applied SETUPWARS10 at checkout and saved instantly. If you spend 8+ hours a day in front of monitors, this is the single best investment you can make in your desk ergonomically.",
  },
  {
    id: "rev-6",
    name: "Taro N.",
    role: "Systems Programmer",
    companyContext: "Game Engine & Graphics",
    verified: true,
    avatarSeed: "TN",
    rating: 5,
    date: "1 month ago",
    productName: "Minimalist 3-in-1 Foldable MagSafe Stand",
    techStack: ["C++20", "Vulkan", "Rust", "CMake", "Arch Linux"],
    reviewText:
      "Heavy matte aluminum feel. Sits cleanly next to my keyboard and charges my phone in StandBy desk clock mode without any stray wires dangling across the mat. Build quality easily rivals $100+ luxury stands.",
  },
];

export default function FaqSection() {
  const { applyDiscountCode, setIsCartOpen } = useCart();
  const [activeTab, setActiveTab] = useState<"all" | "faq" | "reviews">("all");
  const [openFaq, setOpenFaq] = useState<string | null>("faq-notion-os");
  const [faqCategoryFilter, setFaqCategoryFilter] = useState<string>("all");
  const [selectedTechTag, setSelectedTechTag] = useState<string>("All");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [appliedPromo, setAppliedPromo] = useState<boolean>(false);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleApplyPromo = (code: string) => {
    const success = applyDiscountCode(code);
    if (success) {
      setAppliedPromo(true);
      setIsCartOpen(true);
      setTimeout(() => setAppliedPromo(false), 3000);
    }
  };

  const allTechTags = [
    "All",
    "Rust",
    "TypeScript",
    "Python",
    "Kubernetes",
    "Linux",
    "Docker",
    "Next.js",
    "Claude 3.5",
  ];

  const filteredFaqs = FAQS.filter((item) => {
    if (faqCategoryFilter === "all") return true;
    return item.category === faqCategoryFilter;
  });

  const filteredReviews = REVIEWS.filter((item) => {
    if (selectedTechTag === "All") return true;
    return item.techStack.includes(selectedTechTag);
  });

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-zinc-950 border-b border-zinc-900 relative scroll-mt-16"
    >
      {/* Background ambient grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#10b9810a,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>[ENGINEER FAQ & WORKSPACE REVIEWS]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Flow State
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Answers to common developer setup questions and unfiltered technical reviews from engineers shipping production code on our gear.
          </p>

          {/* Master View Switcher (All / FAQ Only / Reviews Only) */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-emerald-500 text-zinc-950 font-bold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Full Overview
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === "faq"
                  ? "bg-emerald-500 text-zinc-950 font-bold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Technical FAQ ({FAQS.length})
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === "reviews"
                  ? "bg-emerald-500 text-zinc-950 font-bold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Engineer Reviews ({REVIEWS.length})
            </button>
          </div>
        </div>

        {/* TRUST & SATISFACTION METRICS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col items-center text-center">
            <div className="flex items-center gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-lg font-bold font-mono text-white">4.94 / 5.0</span>
            <span className="text-[11px] font-mono text-zinc-400">Verified Developer Rating</span>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col items-center text-center">
            <Truck className="w-4 h-4 text-emerald-400 mb-1" />
            <span className="text-lg font-bold font-mono text-white">24h Dispatch</span>
            <span className="text-[11px] font-mono text-zinc-400">3-5 Day Tracked US Shipping</span>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col items-center text-center">
            <Droplets className="w-4 h-4 text-cyan-400 mb-1" />
            <span className="text-lg font-bold font-mono text-white">Hydrophobic</span>
            <span className="text-[11px] font-mono text-zinc-400">Spill-Proof Nano Coating</span>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col items-center text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
            <span className="text-lg font-bold font-mono text-white">Zero Risk</span>
            <span className="text-[11px] font-mono text-zinc-400">30-Day Money-Back Guarantee</span>
          </div>
        </div>

        <div className="space-y-16">
          {/* FAQ SECTION (Visible on 'all' or 'faq') */}
          {(activeTab === "all" || activeTab === "faq") && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
                <div>
                  <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span>Frequently Asked Technical Questions</span>
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">
                    Click any inquiry to expand the detailed engineering breakdown.
                  </p>
                </div>

                {/* FAQ Category Filter */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: "all", label: "All Topics" },
                    { id: "notion", label: "Notion OS" },
                    { id: "shipping", label: "Shipping" },
                    { id: "care", label: "Mat Care" },
                    { id: "discounts", label: "Discounts" },
                    { id: "ai", label: "AI Stack" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFaqCategoryFilter(cat.id)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all cursor-pointer ${
                        faqCategoryFilter === cat.id
                          ? "bg-zinc-800 text-emerald-400 border border-emerald-500/40"
                          : "bg-zinc-900/50 text-zinc-400 border border-zinc-800/80 hover:text-zinc-200"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accordion List */}
              <div className="space-y-3">
                {filteredFaqs.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? "bg-zinc-900/80 border-emerald-500/40 shadow-lg shadow-emerald-950/20"
                          : "bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700"
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700/60 text-[10px] font-mono text-emerald-400 flex-shrink-0">
                            {faq.categoryLabel}
                          </span>
                          <span className="text-sm sm:text-base font-medium text-white font-sans">
                            {faq.question}
                          </span>
                        </div>
                        <div
                          className={`p-1 rounded-md bg-zinc-800 text-zinc-400 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? "rotate-180 text-emerald-400" : ""
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 text-xs sm:text-sm text-zinc-300 font-sans border-t border-zinc-800/60">
                          <p className="leading-relaxed">{faq.answer}</p>

                          {/* Action / Code block for relevant FAQs */}
                          {faq.actionType === "apply-discount" && faq.actionPayload && (
                            <div className="mt-4 p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-3">
                              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                                <Tag className="w-4 h-4" />
                                <span>Active Promo Code:</span>
                                <span className="px-2 py-0.5 rounded bg-emerald-500/20 font-bold border border-emerald-500/40">
                                  {faq.actionPayload}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleCopy(faq.actionPayload!)}
                                  className="px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                                >
                                  {copiedCode === faq.actionPayload ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-400" />
                                      <span className="text-emerald-400">Copied</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      <span>Copy Code</span>
                                    </>
                                  )}
                                </button>
                                <button
                                  onClick={() => handleApplyPromo(faq.actionPayload!)}
                                  className="px-3 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                                >
                                  {appliedPromo ? (
                                    <>
                                      <Check className="w-3.5 h-3.5" />
                                      <span>Applied!</span>
                                    </>
                                  ) : (
                                    <>
                                      <Sparkles className="w-3.5 h-3.5" />
                                      <span>Apply to Cart (10% Off)</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          )}

                          {faq.codeSnippet && !faq.actionType && (
                            <div className="mt-3 p-2.5 rounded-lg bg-black/60 border border-zinc-800 font-mono text-[11px] text-emerald-400 flex items-center justify-between">
                              <span className="truncate">{faq.codeSnippet}</span>
                              <button
                                onClick={() => handleCopy(faq.codeSnippet!)}
                                className="ml-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                                title="Copy snippet"
                              >
                                {copiedCode === faq.codeSnippet ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* VERIFIED REVIEWS SECTION (Visible on 'all' or 'reviews') */}
          {(activeTab === "all" || activeTab === "reviews") && (
            <div id="reviews">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
                <div>
                  <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <span>Verified Engineer Reviews & Tech Stacks</span>
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">
                    Filter feedback by real-world tech stacks used on these setups.
                  </p>
                </div>

                {/* Tech Stack Filter Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {allTechTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTechTag(tag)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all cursor-pointer ${
                        selectedTechTag === tag
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 font-semibold"
                          : "bg-zinc-900/50 text-zinc-400 border border-zinc-800/80 hover:text-zinc-200"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reviews Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-all duration-200 group hover:shadow-xl hover:shadow-emerald-950/10"
                  >
                    <div>
                      {/* Top Bar: Reviewer Info + Verified Badge */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
                            {rev.avatarSeed}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-white text-xs font-mono">
                                {rev.name}
                              </span>
                              {rev.verified && (
                                <span className="inline-flex items-center text-[10px] font-mono text-emerald-400 gap-0.5">
                                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                  <span className="hidden sm:inline">Verified</span>
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-zinc-400 block truncate max-w-[180px]">
                              {rev.role}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono text-zinc-400">
                          {rev.date}
                        </span>
                      </div>

                      {/* Stars & Product Tag */}
                      <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-zinc-800/80">
                        <div className="flex items-center text-amber-400 gap-0.5">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 truncate max-w-[180px]">
                          {rev.productName}
                        </span>
                      </div>

                      {/* Review Content */}
                      <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-4">
                        &ldquo;{rev.reviewText}&rdquo;
                      </p>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="pt-3 border-t border-zinc-800/80">
                      <span className="text-[10px] font-mono text-zinc-400 block mb-1.5">
                        ACTIVE TECH STACK:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {rev.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`px-1.5 py-0.5 rounded text-[10px] font-mono border ${
                              selectedTechTag === tech
                                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
                                : "bg-black/40 text-zinc-400 border-zinc-800"
                            }`}
                          >
                            #{tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
