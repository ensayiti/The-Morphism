"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Boxes,
  Check,
  ChevronDown,
  Layers,
  FileText,
  Sparkles,
  Shield,
  Zap,
  Grid3X3,
  Hexagon,
  Circle,
  Square,
} from "lucide-react";

// ── style definitions ──────────────────────────────────────────────
const STYLES = [
  { id: "glass", label: "Glassmorphism", dial: "5 / 4 / 8 / 0" },
  { id: "neubrutalism", label: "Neubrutalism", dial: "6 / 1 / 0 / 0" },
  { id: "swiss", label: "Swiss Design", dial: "0 / 0 / 0 / 0" },
  { id: "bauhaus", label: "Bauhaus", dial: "0 / 0 / 0 / 0" },
  { id: "futurism", label: "Futurism", dial: "3 / 0 / 0 / 6" },
  { id: "minimalism", label: "Minimalism", dial: "0 / 0 / 0 / 0" },
  { id: "brutalism", label: "Brutalism", dial: "1 / 0 / 0 / 0" },
  { id: "maximalism", label: "Maximalism", dial: "6 / 3 / 0 / 1" },
] as const;

type StyleId = (typeof STYLES)[number]["id"];

// ── helpers ────────────────────────────────────────────────────────
function cn(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

// ── page ───────────────────────────────────────────────────────────
export default function Home() {
  const [idx, setIdx] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [mobileNav, setMobileNav] = useState(false);
  const style = STYLES[idx].id as StyleId;

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "r" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        setIdx((i) => (i + 1) % STYLES.length);
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  const nextStyle = () => setIdx((i) => (i + 1) % STYLES.length);

  // ── token map ────────────────────────────────────────────────────
  const isGlass = style === "glass";
  const isNeo = style === "neubrutalism";
  const isSwiss = style === "swiss";
  const isBauhaus = style === "bauhaus";
  const isFuturism = style === "futurism";
  const isMinimal = style === "minimalism";
  const isBrutal = style === "brutalism";
  const isMaximal = style === "maximalism";

  // page shell
  const pageBg =
    isGlass
      ? "bg-[#070b18] text-white"
      : isNeo
        ? "bg-[#fffdf5] text-black"
        : isSwiss
          ? "bg-[#fafaf9] text-[#1c1917]"
          : isBauhaus
            ? "bg-[#F5F0E6] text-black"
            : isFuturism
              ? "bg-[#050505] text-[#E0D5BE]"
              : isMinimal
                ? "bg-white text-[#1a1a1a]"
                : isBrutal
                  ? "bg-white text-black"
                  : "bg-[#F7F3E8] text-[#1a1a1a]"; // maximal

  const fontHeading =
    isMinimal || isMaximal
      ? "font-[Zodiak,Georgia,serif]"
      : isNeo
        ? "font-[var(--font-space-grotesk),system-ui] font-bold"
        : isFuturism || isBrutal
          ? "font-[var(--font-geist-mono),monospace]"
          : isSwiss
            ? "font-[var(--font-geist-sans),system-ui]"
            : isBauhaus
              ? "font-[var(--font-space-grotesk),system-ui] font-bold"
              : "font-[Satoshi,system-ui]";

  const headingWeight =
    isSwiss ? "font-light tracking-tight" : isMinimal ? "font-normal uppercase tracking-[0.02em]" : isFuturism ? "font-bold tracking-[0.04em]" : isBrutal ? "font-bold uppercase" : "font-bold tracking-tight";

  // nav
  const navWrap =
    isGlass
      ? "sticky top-0 z-40 backdrop-blur-xl bg-[#070b18]/60 border-b border-white/10"
      : isNeo
        ? "sticky top-0 z-40 bg-[#fffdf5] border-b-[3px] border-black"
        : isSwiss
          ? "sticky top-0 z-40 bg-[#fafaf9]/90 backdrop-blur border-b border-[#e7e5e4]"
          : isBauhaus
            ? "sticky top-0 z-40 bg-[#F5F0E6] border-b-[3px] border-black"
            : isFuturism
              ? "sticky top-0 z-40 bg-[#050505] border-b border-[#252525]"
              : isMinimal
                ? "sticky top-0 z-40 bg-white border-b border-[#1a1a1a]"
                : isBrutal
                  ? "sticky top-0 z-40 bg-white border-b border-black"
                  : "sticky top-0 z-40 bg-[#F7F3E8] border-b-2 border-[#1a1a1a]"; // maximal

  const cardBase =
    isGlass
      ? "rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.24)]"
      : isNeo
        ? "rounded-none border-[3px] border-black bg-white shadow-[5px_5px_0_0_#000]"
        : isSwiss
          ? "rounded-none border border-[#e7e5e4] bg-white"
          : isBauhaus
            ? "rounded-none border-[2px] border-black bg-white"
            : isFuturism
              ? "rounded-none border border-[#252525] bg-[#0D0D0D]"
              : isMinimal
                ? "rounded-none border border-[#1a1a1a]/15 bg-white"
                : isBrutal
                  ? "rounded-none border border-black bg-white"
                  : "rounded-none border-2 border-double border-[#1a1a1a] bg-[#FFFBF0] shadow-[4px_4px_0_0_#1a1a1a]"; // maximal

  const btnPrimary =
    isGlass
      ? "rounded-full bg-white text-[#070b18] px-7 py-3 text-sm font-semibold hover:bg-white/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
      : isNeo
        ? "rounded-none border-[3px] border-black bg-[#ffd23f] px-7 py-3 text-sm font-bold uppercase tracking-wide shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-[transform,box-shadow] focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
        : isSwiss
          ? "rounded-none bg-[#C8102E] px-7 py-3 text-sm font-medium text-white hover:bg-[#a00d24] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8102E] focus-visible:outline-offset-2"
          : isBauhaus
            ? "rounded-none bg-[#E2062C] px-7 py-3 text-sm font-bold uppercase tracking-wide text-[#F5F0E6] hover:bg-black hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
            : isFuturism
              ? "rounded-none border border-[#00ed3f] bg-transparent px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#00ed3f] shadow-[0_0_8px_#00ed3f66,0_0_20px_#00ed3f22] hover:bg-[#00ed3f]/10 hover:shadow-[0_0_12px_#00ed3f99] transition-all focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#00ed3f] focus-visible:outline-offset-2"
              : isMinimal
                ? "rounded-none border-b border-[#1a1a1a] bg-transparent px-0 py-2 text-xs font-medium uppercase tracking-[0.12em] hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#1a1a1a] focus-visible:outline-offset-4"
                : isBrutal
                  ? "rounded-none border border-black bg-black px-7 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-black transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-black focus-visible:outline-offset-2"
                  : "rounded-none bg-[#C8102E] px-7 py-3 text-sm font-bold uppercase tracking-wide text-white border-2 border-[#1a1a1a] shadow-[3px_3px_0_0_#1a1a1a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#1a1a1a] transition-[transform,box-shadow] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1a1a1a]";

  const btnGhost =
    isGlass
      ? "rounded-full border border-white/20 bg-white/[0.06] backdrop-blur px-7 py-3 text-sm font-medium text-white hover:bg-white/[0.12] transition-colors"
      : isNeo
        ? "rounded-none border-[3px] border-black bg-white px-7 py-3 text-sm font-bold uppercase shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-[transform,box-shadow]"
        : isSwiss
          ? "rounded-none border border-[#1c1917] bg-transparent px-7 py-3 text-sm font-medium hover:bg-[#1c1917] hover:text-white transition-colors"
          : isBauhaus
            ? "rounded-none border-[2px] border-black bg-[#FFDD00] px-7 py-3 text-sm font-bold uppercase text-black hover:bg-black hover:text-[#FFDD00] transition-colors"
            : isFuturism
              ? "rounded-none border border-[#252525] bg-transparent px-7 py-3 text-sm font-mono uppercase tracking-wide text-[#E0D5BE]/70 hover:text-[#E0D5BE] hover:border-[#E0D5BE]/30 transition-colors"
              : isMinimal
                ? "rounded-none border-b border-[#1a1a1a]/30 px-0 py-2 text-xs uppercase tracking-[0.12em] text-[#1a1a1a]/60 hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors"
                : isBrutal
                  ? "rounded-none border border-black bg-white px-7 py-3 text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors"
                  : "rounded-none border-2 border-[#1a1a1a] bg-transparent px-7 py-3 text-sm font-bold uppercase hover:bg-[#1a1a1a] hover:text-[#F7F3E8] transition-colors";

  const sectionLabel =
    isGlass
      ? "text-xs font-medium tracking-[0.18em] uppercase text-white/50 flex items-center gap-2"
      : isNeo
        ? "text-xs font-black uppercase tracking-[0.12em] text-black flex items-center gap-2"
        : isSwiss
          ? "text-[11px] font-medium tracking-[0.16em] uppercase text-[#1c1917]/40 flex items-center gap-2"
          : isBauhaus
            ? "text-xs font-bold uppercase tracking-[0.14em] text-black flex items-center gap-2"
            : isFuturism
              ? "font-mono text-[11px] uppercase tracking-[0.2em] text-[#00ed3f]/70 flex items-center gap-2"
              : isMinimal
                ? "text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 flex items-center gap-2"
                : isBrutal
                  ? "font-mono text-[11px] uppercase tracking-[0.14em] text-black flex items-center gap-2"
                  : "font-[Clash_Display,sans-serif] text-xs uppercase tracking-[0.14em] text-[#C8102E] flex items-center gap-2";

  const muted =
    isGlass
      ? "text-white/60"
      : isNeo
        ? "text-black/60"
        : isSwiss
          ? "text-[#1c1917]/60"
          : isBauhaus
            ? "text-black/60"
            : isFuturism
              ? "text-[#E0D5BE]/60"
              : isMaximal
                ? "text-[#1a1a1a]/65"
                : "text-[#1a1a1a]/60";

  return (
    <div className={cn("min-h-[100dvh] flex flex-col selection:bg-black selection:text-white", pageBg, "transition-colors duration-500")}>
      {/* glass background layers */}
      {isGlass && (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[#070b18]" />
          <div className="absolute -top-[20%] -right-[10%] h-[70%] w-[70%] rounded-full bg-gradient-to-br from-violet-600/30 via-indigo-500/20 to-transparent blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[10%] h-[60%] w-[60%] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-transparent blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")" }} />
        </div>
      )}

      {/* style switcher — fixed indicator */}
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 flex items-center gap-2">
        <div
          className={cn(
            "flex items-center gap-3 px-4 py-2 text-xs",
            isGlass
              ? "rounded-full border border-white/15 bg-[#0f1220]/80 backdrop-blur-xl text-white/80 shadow-lg"
              : isNeo
                ? "rounded-none border-[2px] border-black bg-[#ffd23f] text-black font-bold shadow-[3px_3px_0_0_#000]"
                : isSwiss
                  ? "rounded-none border border-[#e7e5e4] bg-white text-[#1c1917] shadow-sm"
                  : isBauhaus
                    ? "rounded-none border-[2px] border-black bg-[#FFDD00] text-black font-bold"
                    : isFuturism
                      ? "rounded-none border border-[#00ed3f]/40 bg-[#050505] text-[#00ed3f] font-mono shadow-[0_0_10px_#00ed3f22]"
                      : isMinimal
                        ? "rounded-none border border-[#1a1a1a] bg-white text-[#1a1a1a] font-medium"
                        : isBrutal
                          ? "rounded-none border border-black bg-black text-white font-mono"
                          : "rounded-none border-2 border-[#1a1a1a] bg-[#F7F3E8] text-[#1a1a1a] font-bold shadow-[2px_2px_0_0_#1a1a1a]"
          )}
        >
          <span className={cn("hidden sm:inline opacity-60", isFuturism && "text-[#00ed3f]/60")}>STYLE</span>
          <span className="font-semibold tracking-wide">{STYLES[idx].label}</span>
          <span className="opacity-40">{idx + 1}/8</span>
          <button
            onClick={nextStyle}
            aria-label="Next style"
            className={cn(
              "ml-1 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide transition-colors cursor-pointer",
              isGlass
                ? "bg-white text-[#070b18] hover:bg-white/90"
                : isNeo
                  ? "bg-black text-white hover:bg-black/80"
                  : isSwiss
                    ? "bg-[#C8102E] text-white hover:bg-[#a00d24]"
                    : isBauhaus
                      ? "bg-[#E2062C] text-white hover:bg-black"
                      : isFuturism
                        ? "bg-[#00ed3f] text-black hover:bg-[#00ed3f]/80"
                        : isMinimal
                          ? "bg-[#1a1a1a] text-white hover:bg-black"
                          : isBrutal
                            ? "bg-white text-black hover:bg-white/90"
                            : "bg-[#1a1a1a] text-white hover:bg-black"
            )}
          >
            Press R <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={cn(navWrap, "transition-colors duration-500")}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 flex h-[64px] items-center justify-between gap-6">
          <a href="#" className={cn("flex items-center gap-2.5", fontHeading)}>
            {isBauhaus ? (
              <span className="flex items-center gap-2">
                <span className="h-7 w-7 bg-[#E2062C] inline-block" />
                <span className="h-7 w-7 rounded-full bg-[#FFDD00] inline-block border border-black" />
                <span className="text-xl font-black uppercase tracking-tight">The Morphism</span>
              </span>
            ) : isFuturism ? (
              <span className="flex items-center gap-2 font-mono text-sm tracking-[0.16em]">
                <span className="h-2 w-2 bg-[#00ed3f] shadow-[0_0_6px_#00ed3f] animate-pulse" />
                MORPHISM.SYS
              </span>
            ) : (
              <span className="flex items-center gap-2">
                {isNeo ? <Boxes className="h-6 w-6" /> : isSwiss ? <Grid3X3 className="h-5 w-5 opacity-60" /> : isGlass ? <Hexagon className="h-5 w-5" /> : isMaximal ? <span className="h-6 w-6 border-2 border-double border-current grid place-items-center text-[10px] font-black">F</span> : <Box className="h-5 w-5" />}
                <span className={cn("text-[17px] tracking-tight", isSwiss ? "font-light text-xl" : "font-bold", isMinimal ? "font-[Zodiak,serif] uppercase tracking-[0.06em] text-base font-normal" : "")}>The Morphism</span>
                {!isMinimal && !isBrutal && !isFuturism && <span className={cn("text-xs font-medium px-1.5 py-0.5", isGlass ? "rounded-full bg-white/10 text-white/60" : isNeo ? "bg-black text-white" : isSwiss ? "bg-[#C8102E]/10 text-[#C8102E]" : isBauhaus ? "bg-black text-white" : "bg-[#1a1a1a] text-white")}>2026</span>}
              </span>
            )}
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm">
            {["Styles", "Recipes", "Docs", "Install"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={cn(
                  "transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4",
                  isGlass
                    ? "text-white/60 hover:text-white focus-visible:outline-white"
                    : isSwiss
                      ? "text-[#1c1917]/60 hover:text-[#1c1917] focus-visible:outline-[#C8102E]"
                      : isFuturism
                        ? "font-mono text-xs uppercase tracking-wide text-[#E0D5BE]/50 hover:text-[#00ed3f] focus-visible:outline-[#00ed3f]"
                        : isMinimal
                          ? "text-[#1a1a1a]/50 hover:text-[#1a1a1a] uppercase text-xs tracking-[0.08em] focus-visible:outline-[#1a1a1a]"
                          : isBrutal
                            ? "font-mono text-xs uppercase underline decoration-black/20 hover:decoration-black focus-visible:outline-black"
                            : "hover:opacity-70 focus-visible:outline-current"
                )}
              >
                {isFuturism ? `// ${l}` : l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#cta" className={cn("hidden sm:inline-flex items-center gap-2", btnPrimary, "text-sm !py-2.5 !px-5")}>
              {isFuturism ? "INIT" : isMinimal ? "Start building" : isBrutal ? "ENTER" : "Start building"}
              {!isMinimal && <ArrowRight className="h-3.5 w-3.5" />}
            </a>
            <button onClick={() => setMobileNav(!mobileNav)} className={cn("md:hidden p-2", isGlass ? "text-white/80" : "")} aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
          </div>
        </div>
        {mobileNav && (
          <div className={cn("md:hidden border-t px-6 py-4 flex flex-col gap-3 text-sm", isGlass ? "border-white/10 bg-[#070b18]/80 backdrop-blur" : "border-black/10 bg-white")}>
            {["Styles", "Recipes", "Docs", "Install"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMobileNav(false)}>{l}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO — same structure, tokenized skin */}
      <section className={cn("relative overflow-hidden", isSwiss ? "border-b border-[#e7e5e4]" : isBauhaus ? "border-b-[3px] border-black" : "")}>
        {isBauhaus && (
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="absolute right-[8%] top-[18%] h-28 w-28 rounded-full bg-[#FFDD00] border-[3px] border-black" />
            <div className="absolute right-[18%] bottom-[12%] h-0 w-0 border-l-[50px] border-r-[50px] border-b-[90px] border-l-transparent border-r-transparent border-b-[#00509E]" />
            <div className="absolute left-[52%] top-[10%] h-20 w-20 bg-[#E2062C] border-[3px] border-black" />
          </div>
        )}
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className={sectionLabel}>
              {isGlass ? <Sparkles className="h-3.5 w-3.5 opacity-60" /> : isNeo ? <Zap className="h-3.5 w-3.5" /> : isSwiss ? <span className="h-px w-8 bg-[#C8102E]" /> : isBauhaus ? <span className="h-2 w-2 bg-[#E2062C]" /> : isFuturism ? <span className="h-1.5 w-1.5 bg-[#00ed3f] animate-pulse shadow-[0_0_6px_#00ed3f]" /> : isMaximal ? <span className="h-px w-8 bg-[#C8102E]" /> : <span className="h-px w-6 bg-current opacity-30" />}
              <span>{isFuturism ? "SYSTEM // THE MORPHISM v3.11 ONLINE" : isSwiss ? "EIGHT STYLES  —  ONE PAGE  —  ZERO SLOP" : isBauhaus ? "FORM FOLLOWS TASTE" : isMinimal ? "ISSUE 04  —  THE TASTE ISSUE" : "Eight styles. One page. Never mix."}</span>
            </div>

            <h1 className={cn("mt-6 text-[40px] lg:text-[64px] leading-[0.92] max-w-[14ch]", fontHeading, headingWeight)}>
              {isFuturism ? (
                <span className="text-[#00ed3f] [text-shadow:0_0_8px_#00ed3f66]">EIGHT STYLES.<br />ONE PAGE.<br />ZERO SLOP.</span>
              ) : isBrutal ? (
                <span>EIGHT STYLES.<br />ONE PAGE.<br />ZERO SLOP.</span>
              ) : isBauhaus ? (
                <span className="uppercase">Eight<br />styles.<br />one page.<br />zero slop.</span>
              ) : isMinimal ? (
                <span className="uppercase font-normal">Eight styles.<br />one page.<br />zero slop.</span>
              ) : (
                <span>
                  Eight styles <br />
                  <span
                    className={cn(
                      isGlass ? "text-white/50" : isNeo ? "bg-[#74b9ff] px-1" : isSwiss ? "text-[#C8102E] font-light" : isMaximal ? "text-[#C8102E]" : "opacity-60"
                    )}
                  >
                    behind
                  </span>{" "}
                  the system.
                </span>
              )}
            </h1>

            <p className={cn("mt-6 max-w-[48ch] text-[17px] leading-relaxed", muted, isFuturism && "font-mono text-sm leading-relaxed", isMinimal && "text-[15px] leading-relaxed")}>
              The Morphism gives any agent eight exact styles, four dials, and named anti-patterns. One style per page. No drift. No purple gradients.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className={btnPrimary}>
                <span className="inline-flex items-center gap-2">
                  {isMinimal ? "Start building" : isFuturism ? "INITIALIZE" : isBrutal ? "START" : "Start building"} {!isMinimal && <ArrowRight className="h-4 w-4" />}
                </span>
              </a>
              <a href="#showcase" className={btnGhost}>
                <span className="inline-flex items-center gap-2">
                  View recipes <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>

            <div className={cn("mt-10 flex flex-wrap gap-6 text-xs", muted, isFuturism && "font-mono text-[11px] uppercase tracking-wide")}>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5" /> {isFuturism ? "SOC2 READY" : "SOC 2 ready"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5" /> {isFuturism ? "8 STYLES READY" : "Eight styles ready"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5" /> No lock in. Export anytime.
              </span>
            </div>
          </div>

          {/* hero preview — same content, styled per token */}
          <div className={cn("relative", isFuturism && "scanlines")}>
            <div className={cn("p-4 lg:p-5", cardBase, isFuturism && "notch", isGlass && "p-5")}>
              {/* chrome bar */}
              <div className={cn("flex items-center justify-between text-xs mb-4", muted, isFuturism && "font-mono uppercase tracking-wide text-[#00ed3f]/60")}>
                <span className="flex items-center gap-2">
                  <span className="flex gap-1.5">
                    <span className={cn("h-2.5 w-2.5 rounded-full", isFuturism ? "bg-[#00ed3f] shadow-[0_0_6px_#00ed3f]" : isNeo ? "bg-[#ffd23f] border border-black" : isBauhaus ? "bg-[#E2062C] border border-black" : "bg-current opacity-20")} />
                    <span className={cn("h-2.5 w-2.5 rounded-full", isFuturism ? "bg-[#ff8800]" : "bg-current opacity-20")} />
                    <span className={cn("h-2.5 w-2.5 rounded-full hidden sm:inline-block", isFuturism ? "bg-[#4466cc]" : "bg-current opacity-20")} />
                  </span>
                  {isFuturism ? "MORPHISM.SKILL  —  8 STYLES  —  0 SLOP" : "morphism.skill — 8 styles — zero slop"}
                </span>
                <span className={cn("hidden sm:inline", isGlass ? "text-white/40" : "")}>12:48 AM</span>
              </div>

              {/* dial table mock */}
              <div className={cn("grid grid-cols-3 gap-2 text-xs", isFuturism && "font-mono text-[11px]")}>
                {[
                  { k: "color.ink", v: "#1a1a1a", swatch: "bg-[#1a1a1a]" },
                  { k: "color.paper", v: "#ffffff", swatch: "bg-white border border-black/10" },
                  { k: "color.accent", v: isSwiss ? "#C8102E" : isBauhaus ? "#E2062C" : isFuturism ? "#00ed3f" : "#4f46e5", swatch: isSwiss ? "bg-[#C8102E]" : isBauhaus ? "bg-[#E2062C]" : isFuturism ? "bg-[#00ed3f]" : "bg-[#4f46e5]" },
                  { k: "space.4", v: "16px", swatch: "bg-current opacity-10" },
                  { k: "radius.card", v: isNeo || isBrutal || isFuturism ? "0px" : "16px", swatch: "bg-current opacity-10" },
                  { k: "type.display", v: isMinimal ? "Zodiak 400" : isNeo ? "Space Grotesk 700" : "Geist 600", swatch: "bg-current opacity-10" },
                ].map((t) => (
                  <div key={t.k} className={cn("p-3 flex flex-col gap-2", isGlass ? "rounded-xl bg-white/[0.06] border border-white/10" : isFuturism ? "border border-[#252525] bg-[#141414]" : isBrutal ? "border border-black" : isSwiss ? "border border-[#e7e5e4] bg-[#fafaf9]" : "border border-black/10 bg-black/[0.02]", isBauhaus && "border-[2px] border-black")}>
                    <span className={cn("h-6 w-full rounded", t.swatch)} />
                    <span className={cn("font-medium", muted)}>{t.k}</span>
                    <span className="font-mono text-[11px] opacity-70">{t.v}</span>
                  </div>
                ))}
              </div>

              <div
                className={cn(
                  "mt-4 flex items-center justify-between p-3 text-xs",
                  isGlass
                    ? "rounded-xl bg-white text-[#070b18] font-medium"
                    : isNeo
                      ? "bg-[#ffd23f] border-[2px] border-black font-bold"
                      : isSwiss
                        ? "bg-[#1c1917] text-white"
                        : isBauhaus
                          ? "bg-black text-white font-bold uppercase"
                          : isFuturism
                            ? "bg-[#00ed3f] text-black font-mono font-bold"
                            : isMinimal
                              ? "border-t border-[#1a1a1a] pt-3 font-medium"
                              : isBrutal
                                ? "border border-black bg-black text-white font-mono"
                                : "bg-[#1a1a1a] text-white border-2 border-[#1a1a1a]"
                )}
              >
                <span>{isFuturism ? ">> 8 STYLES READY — 0 SLOP" : "Eight styles ready — pick one, ship it — 0 slop"}</span>
                <span className={cn(isMinimal || isBrutal ? "underline underline-offset-4" : isGlass ? "rounded-full bg-black text-white px-3 py-1 text-xs" : "opacity-60")}>
                  {isFuturism ? "[OK]" : "View diff"}
                </span>
              </div>
            </div>

            {/* floating stat — style-aware */}
            <div
              className={cn(
                "absolute -bottom-4 -right-2 lg:-right-4 px-4 py-3 text-xs flex items-center gap-3",
                isGlass
                  ? "rounded-2xl border border-white/15 bg-white/90 backdrop-blur text-[#070b18] shadow-xl"
                  : isNeo
                    ? "border-[3px] border-black bg-[#88d498] shadow-[4px_4px_0_0_#000] font-bold"
                    : isSwiss
                      ? "border border-[#e7e5e4] bg-white shadow-sm"
                      : isBauhaus
                        ? "border-[3px] border-black bg-[#FFDD00] font-bold"
                        : isFuturism
                          ? "border border-[#00ed3f] bg-[#0D0D0D] text-[#00ed3f] font-mono shadow-[0_0_10px_#00ed3f33]"
                          : isMinimal
                            ? "border border-[#1a1a1a] bg-white"
                            : isBrutal
                              ? "border border-black bg-white font-mono"
                              : "border-2 border-[#1a1a1a] bg-white shadow-[3px_3px_0_0_#1a1a1a] font-bold"
              )}
            >
              <span className={cn("h-8 w-8 grid place-items-center", isGlass ? "rounded-full bg-[#070b18] text-white" : isFuturism ? "bg-[#00ed3f] text-black" : "bg-black text-white", (isMinimal || isSwiss) && "bg-[#1a1a1a] text-white")}>
                <Shield className="h-4 w-4" />
              </span>
              <span>
                <span className="block font-semibold leading-none">8 styles · 4 dials</span>
                <span className={cn("text-[11px]", muted)}>One style per page — never mix</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="product" className={cn("py-16 lg:py-24", isSwiss ? "bg-white border-y border-[#e7e5e4]" : isBauhaus ? "bg-white border-y-[3px] border-black" : "")}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className={sectionLabel}>
                <span className={cn(isSwiss ? "h-px w-8 bg-[#C8102E]" : isGlass ? "h-px w-8 bg-white/20" : "h-px w-8 bg-current opacity-20")} />
                Solutions
              </div>
              <h2 className={cn("mt-3 text-3xl lg:text-[40px] leading-none max-w-[14ch]", fontHeading, headingWeight)}>
                {isFuturism ? "THREE PROTOCOLS." : isBrutal ? "THREE RULES." : isMinimal ? "Three honest rules." : isBauhaus ? "Three recipes." : "Three things the skill gets right."}
              </h2>
            </div>
            <p className={cn("max-w-[44ch] text-sm leading-relaxed", muted)}>Most AI output looks the same. The Morphism makes it intentional — one style per page, four dials, exact recipes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {[
              {
                n: "01",
                title: "Exact recipes",
                desc: "Eight exact CSS recipes with Tailwind v4 equivalents. No guessing. No drift. Copy, tune the dials, ship.",
                icon: Layers,
                accent: isNeo ? "bg-[#ffd23f]" : isBauhaus ? "bg-[#E2062C] text-[#F5F0E6]" : isFuturism ? "text-[#00ed3f] border-[#00ed3f]/30" : isMaximal ? "text-[#C8102E]" : "",
              },
              {
                n: "02",
                title: "Four dials",
                desc: "DEPTH / SOFTNESS / TRANSLUCENCY / GLOW. Four dials gate every blur, radius, shadow, and glow. Tune one value, every surface updates.",
                icon: Boxes,
                accent: isNeo ? "bg-[#74b9ff]" : isBauhaus ? "bg-[#FFDD00] text-black" : isFuturism ? "text-[#ff8800] border-[#ff8800]/30" : isMaximal ? "text-[#1F4E79]" : "",
              },
              {
                n: "03",
                title: "Named tells",
                desc: "THE PILL BADGE, THE EM-DASH, THE SOFT SHADOW. Every anti-pattern is named so the agent recognizes and avoids it.",
                icon: FileText,
                accent: isNeo ? "bg-[#ff6b6b] text-white" : isBauhaus ? "bg-[#00509E] text-white" : isFuturism ? "text-[#4466cc] border-[#4466cc]/30" : isMaximal ? "text-[#B08D00]" : "",
              },
            ].map((s) => (
              <div key={s.n} className={cn("p-6 lg:p-7 flex flex-col gap-4", cardBase, isFuturism && "notch")}>
                <div className="flex items-start justify-between">
                  <span className={cn("text-xs font-mono tracking-wide", muted)}>{s.n}</span>
                  <span className={cn("h-8 w-8 grid place-items-center border", isGlass ? "rounded-full border-white/15 bg-white/5" : isNeo ? "border-black bg-white" : isSwiss ? "border-[#e7e5e4] bg-[#fafaf9]" : isBauhaus ? "border-black" : isFuturism ? "border-current bg-transparent" : isMinimal ? "border-[#1a1a1a]/15 bg-transparent" : isBrutal ? "border-black" : "border-[#1a1a1a] bg-white", s.accent)}>
                    <s.icon className="h-4 w-4" />
                  </span>
                </div>
                <h3 className={cn("text-[18px] leading-tight", fontHeading, isSwiss ? "font-medium" : "font-bold", isMinimal ? "font-[Zodiak,serif] font-normal uppercase text-[17px]" : "", isFuturism ? "font-mono uppercase tracking-wide text-[#E0D5BE]" : "")}>{s.title}</h3>
                <p className={cn("text-sm leading-relaxed", muted)}>{s.desc}</p>
                <a href="#" className={cn("mt-1 inline-flex items-center gap-1.5 text-xs font-medium", isMinimal ? "underline underline-offset-4 decoration-[#1a1a1a]" : isBrutal ? "underline" : isFuturism ? "font-mono uppercase tracking-wide text-[#00ed3f] hover:text-[#00ed3f]/80" : "hover:opacity-70")}>
                  Learn more <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="system" className={cn("py-16 lg:py-24", isGlass ? "bg-white/[0.02] border-y border-white/5" : isSwiss ? "bg-[#fafaf9]" : isBrutal ? "border-y border-black" : isFuturism ? "border-y border-[#252525] bg-[#0D0D0D]/50" : "")}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-center">
          <div>
            <div className={sectionLabel}>
              <span className={cn("h-px w-8", isGlass ? "bg-white/20" : isSwiss ? "bg-[#C8102E]" : "bg-current opacity-20")} />
              Showcase
            </div>
            <h2 className={cn("mt-3 text-3xl lg:text-[40px] leading-[0.95] max-w-[14ch]", fontHeading, headingWeight)}>
              {isFuturism ? "ONE CANVAS.\nTWO READERS." : isMinimal ? "One canvas. Two readers." : "One canvas for design and code."}
            </h2>
            <p className={cn("mt-4 max-w-[48ch] text-sm leading-relaxed", muted)}>
              The agent reads the brief, picks one style, and dresses the shape. Glass floats over a rich background. Neo slabs with hard shadows. Swiss grids with opacity.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Eight exact recipes — CSS-first, Tailwind v4 ready", "Four dials — DEPTH / SOFTNESS / TRANSLUCENCY / GLOW", "Named anti-patterns — THE PILL BADGE, THE SOFT SHADOW, and more"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className={cn("h-5 w-5 grid place-items-center", isGlass ? "rounded-full bg-white text-[#070b18]" : isNeo ? "bg-black text-white" : isSwiss ? "bg-[#C8102E] text-white" : isBauhaus ? "bg-black text-white" : isFuturism ? "border border-[#00ed3f] text-[#00ed3f]" : "bg-[#1a1a1a] text-white")}>
                    <Check className="h-3 w-3" />
                  </span>
                  <span className={cn(isFuturism && "font-mono text-xs uppercase tracking-wide")}>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#cta" className={btnPrimary}>View recipes</a>
              <a href="#" className={cn("text-xs font-medium inline-flex items-center gap-1.5 hover:opacity-70", isFuturism && "font-mono uppercase tracking-wide text-[#00ed3f]")}>
                Read the skill <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className={cn("p-4 lg:p-6", cardBase, isFuturism && "notch scanlines")}>
            <div className="grid grid-cols-[1.2fr_0.8fr] gap-4">
              <div className={cn("p-4", isGlass ? "rounded-xl bg-white/[0.06] border border-white/10" : isFuturism ? "border border-[#252525] bg-[#050505]" : "border border-black/10 bg-black/[0.02]", isBauhaus && "border-[2px] border-black")}>
                <div className={cn("text-xs font-medium mb-3 flex items-center gap-2", muted)}>
                  <Circle className="h-3 w-3" /> Token graph
                </div>
                <div className="space-y-2 font-mono text-[11px]">
                  {[
                    { a: "color.ink", b: "→", c: "text.primary" },
                    { a: "color.paper", b: "→", c: "bg.surface" },
                    { a: "dials", b: "→", c: "5 / 4 / 8 / 0" },
                  ].map((r) => (
                    <div key={r.a} className={cn("flex items-center justify-between p-2", isGlass ? "rounded-lg bg-white/5 border border-white/10" : isFuturism ? "border border-[#252525] bg-[#0D0D0D]" : "border border-black/10 bg-white")}>
                      <span>{r.a}</span>
                      <span className="opacity-40">{r.b}</span>
                      <span className={cn(isFuturism ? "text-[#00ed3f]" : "font-semibold")}>{r.c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className={cn("p-4 flex-1", isGlass ? "rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-white/10" : isNeo ? "bg-[#ffd23f] border-[2px] border-black" : isSwiss ? "bg-[#1c1917] text-white" : isBauhaus ? "bg-[#00509E] text-white border-[2px] border-black" : isFuturism ? "bg-[#00ed3f]/10 border border-[#00ed3f]/30" : isMinimal ? "border border-[#1a1a1a] bg-[#fafaf9]" : isBrutal ? "border border-black bg-[#E8E8E8]" : "bg-[#C8102E] text-white border-2 border-[#1a1a1a]")}>
                  <div className="text-xs opacity-70 mb-2">Component preview</div>
                  <div className={cn("h-20 grid place-items-center text-sm font-semibold", isGlass ? "rounded-xl bg-white text-[#070b18]" : isNeo ? "bg-white border-[2px] border-black" : isSwiss ? "bg-white text-[#1c1917]" : "bg-white text-black", isBauhaus && "border-[2px] border-black", isFuturism && "bg-[#050505] text-[#00ed3f] border border-[#00ed3f]")}>Card · The Morphism</div>
                  <div className="mt-3 flex gap-2">
                    <span className={cn("h-2 flex-1", isGlass ? "rounded-full bg-white/60" : "bg-current opacity-20")} />
                    <span className={cn("h-2 w-12", isGlass ? "rounded-full bg-white/30" : "bg-current opacity-10")} />
                  </div>
                </div>
                <div className={cn("p-3 flex items-center justify-between text-xs", isGlass ? "rounded-xl bg-white/5 border border-white/10" : "border border-black/10 bg-white", isFuturism && "border-[#252525] bg-[#050505] font-mono")}>
                  <span className={muted}>Agents</span>
                  <span className="font-bold">Hermes · Claude · Cursor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className={sectionLabel}>
            <span className={cn("h-px w-8", isGlass ? "bg-white/20" : isSwiss ? "bg-[#C8102E]" : "bg-current opacity-20")} />
            Testimonials
          </div>
          <div className="mt-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <h2 className={cn("text-3xl lg:text-[36px] leading-none max-w-[16ch]", fontHeading, headingWeight)}>
              {isFuturism ? "FIELD REPORTS." : isMinimal ? "What teams say after shipping." : "Teams that stopped shipping slop."}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { q: "Finally an agent that does not default to purple gradients. The dials actually mean something.", n: "Priya Nair", r: "Design Lead, Flux" },
                { q: "Our landing stopped looking AI-generated on the first try. One style, exact recipe, done.", n: "Marco Chen", r: "CTO, Atlas Labs" },
                { q: "The Before You Ship checklist caught the pill badge before we shipped it. Saved us a redesign.", n: "Sofia Reyes", r: "Brand Ops, Ciel" },
              ].map((t) => (
                <div key={t.n} className={cn("p-5 flex flex-col gap-4", cardBase)}>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span key={i} className={cn("h-1.5 w-1.5", isNeo ? "bg-black" : isBauhaus ? "bg-[#E2062C]" : isFuturism ? "bg-[#00ed3f]" : isGlass ? "bg-white/40" : "bg-current")} />
                    ))}
                  </div>
                  <p className={cn("text-sm leading-relaxed", isFuturism ? "font-mono text-xs" : "")}>"{t.q}"</p>
                  <div className={cn("mt-auto pt-4 border-t text-xs", isGlass ? "border-white/10" : "border-black/10", isFuturism && "border-[#252525] font-mono")}>
                    <span className="block font-semibold">{t.n}</span>
                    <span className={muted}>{t.r}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={cn("py-16 lg:py-24", isSwiss ? "bg-[#1c1917] text-[#fafaf9]" : isBauhaus ? "bg-black text-white" : isFuturism ? "bg-[#050505] border-y border-[#252525]" : isGlass ? "bg-white text-[#070b18]" : isBrutal ? "bg-[#E8E8E8] border-y border-black" : "bg-[#1a1a1a] text-white", isMaximal && "!bg-[#1a1a1a] !text-white")}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
            <div>
              <div className={cn("text-xs uppercase tracking-[0.16em] flex items-center gap-2", isSwiss ? "text-white/40" : isGlass ? "text-[#070b18]/40" : "text-white/50", isFuturism && "font-mono text-[#00ed3f]/60")}>
                <span className={cn("h-px w-8", isSwiss ? "bg-[#C8102E]" : isBauhaus ? "bg-[#FFDD00]" : isFuturism ? "bg-[#00ed3f]" : "bg-current opacity-30")} />
                Why us
              </div>
              <h2 className={cn("mt-4 text-3xl lg:text-[40px] leading-none", fontHeading, isSwiss ? "font-light" : "font-bold", isFuturism && "font-mono text-[#00ed3f]")}>
                {isFuturism ? "WHY THIS\nHOLDS." : isMinimal ? "Why teams stay." : isBrutal ? "WHY THIS, NOT THAT." : "Why teams stay after the migration."}
              </h2>
              <p className={cn("mt-4 text-sm leading-relaxed max-w-[42ch]", isSwiss ? "text-white/60" : isGlass ? "text-[#070b18]/60" : "text-white/60", isFuturism && "font-mono text-xs")}>
                Most skills add slop. The Morphism removes it. One style per page, four dials, exact recipes — versioned like code, shipped like taste.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { k: "08", l: "styles", d: "Glass, Futurism, Neubrutalism, Brutalism, Minimalism, Maximalism, Swiss, Bauhaus." },
                { k: "04", l: "dials", d: "DEPTH / SOFTNESS / TRANSLUCENCY / GLOW. Every decision gated." },
                { k: "∞", l: "zero slop", d: "Named tells kept out of every page. By design, not by luck." },
              ].map((s) => (
                <div
                  key={s.k}
                  className={cn(
                    "p-6 flex flex-col gap-3",
                    isGlass
                      ? "rounded-2xl bg-[#070b18] text-white border border-black/10"
                      : isSwiss
                        ? "border border-white/10 bg-white/[0.04]"
                        : isBauhaus
                          ? "border-2 border-white bg-white text-black"
                          : isFuturism
                            ? "border border-[#252525] bg-[#0D0D0D] text-[#E0D5BE]"
                            : isMinimal
                              ? "border border-white/10 bg-white/[0.04]"
                              : isBrutal
                                ? "border border-black bg-white text-black"
                                : "border border-white/10 bg-white/[0.06]"
                  )}
                >
                  <span className={cn("text-3xl", fontHeading, isSwiss ? "font-light text-[#C8102E]" : isBauhaus ? "font-black" : isFuturism ? "font-mono text-[#00ed3f]" : "font-bold")}>{s.k}</span>
                  <span className={cn("text-xs font-semibold uppercase tracking-wide", isSwiss ? "text-white" : isFuturism ? "font-mono text-[#E0D5BE]" : "")}>{s.l}</span>
                  <span className={cn("text-xs leading-relaxed", isSwiss ? "text-white/50" : isGlass ? "text-black/60" : "text-white/50", isBrutal && "!text-black/60")}>{s.d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={cn("mt-10 grid md:grid-cols-3 gap-4 text-sm", isSwiss ? "text-white/70" : isGlass ? "text-[#070b18]/70" : "text-white/70", isFuturism && "font-mono text-xs")}>
            {[
              { t: "One style per page", d: "The skill refuses to mash glass with neo on one page. That is the whole point." },
              { t: "No em-dash, no emoji", d: "Zero em-dashes anywhere visible. Zero emoji as icons. The skill enforces taste." },
              { t: "Agent-agnostic", d: "Hermes, Claude Code, Codex, Cursor, Cline — one SKILL.md, thin entry files, any agent." },
            ].map((f) => (
              <div key={f.t} className={cn("flex gap-3 p-4", isGlass ? "rounded-xl bg-black/[0.04] border border-black/5" : isSwiss ? "border border-white/10" : isBauhaus ? "border-2 border-white/20" : isFuturism ? "border border-[#252525]" : "border border-white/10")}>
                <Check className={cn("h-4 w-4 mt-0.5 shrink-0", isSwiss ? "text-[#C8102E]" : isBauhaus ? "text-[#FFDD00]" : isFuturism ? "text-[#00ed3f]" : "")} />
                <span>
                  <span className="block font-semibold text-current">{f.t}</span>
                  <span className="opacity-70">{f.d}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className={cn("p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8", cardBase, isGlass && "bg-gradient-to-br from-white to-white/80 text-[#070b18] border-white", isSwiss && "bg-[#1c1917] text-white border-[#1c1917]", isFuturism && "border-[#00ed3f]/30 bg-[#0D0D0D]")}>
            <div className="max-w-[56ch]">
              <h2 className={cn("text-2xl lg:text-[36px] leading-none", fontHeading, isSwiss ? "font-light" : "font-bold", isFuturism && "font-mono text-[#00ed3f]", isMinimal ? "font-[Zodiak,serif] font-normal uppercase" : "")}>
                {isFuturism ? "START WITH YOUR BRIEF." : isBrutal ? "START WITH TASTE." : isMinimal ? "Start with taste." : "Start with your brief."}
              </h2>
              <p className={cn("mt-3 text-sm leading-relaxed", isGlass ? "text-[#070b18]/60" : isSwiss ? "text-white/60" : isFuturism ? "font-mono text-xs text-[#E0D5BE]/60" : muted)}>
                Describe the page you want. The agent picks the style, sets four dials, and ships. One style per page. No mixing.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a href="#" className={btnPrimary}>
                Import Figma file
              </a>
              <a href="#" className={btnGhost}>
                Talk to a human
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={cn("py-16 lg:py-24 border-t", isGlass ? "border-white/10" : isFuturism ? "border-[#252525]" : "border-black/10", isSwiss && "border-[#e7e5e4] bg-white")}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <div>
            <div className={sectionLabel}>
              <span className={cn("h-px w-8", isGlass ? "bg-white/20" : isSwiss ? "bg-[#C8102E]" : "bg-current opacity-20")} />
              FAQ
            </div>
            <h2 className={cn("mt-3 text-3xl lg:text-[36px] leading-none", fontHeading, headingWeight)}>Questions we get every week.</h2>
            <p className={cn("mt-3 text-sm", muted)}>If yours is not here, write to us. We answer ourselves.</p>
          </div>

          <div className="divide-y divide-black/10">
            {[
              { q: "Does it work with my existing stack?", a: "Yes. Next.js, Astro, Vite, Svelte, or plain HTML. Tailwind v4 or pure CSS. The recipes are CSS-first — the agent scans your package.json and preserves what is there." },
              { q: "How does the agent pick a style?", a: "It reads the brief for five signals — page type, words used, references, audience, and existing brand — then declares a one-sentence Design Read before touching code." },
              { q: "Is it just another UI kit?", a: "No. A kit gives you components. The Morphism gives you eight exact CSS recipes, four dials, and a pre-ship checklist so the agent knows when NOT to use a style." },
              { q: "Can I use it without an agent?", a: "Yes. Paste templates/the-morphism.txt into any system prompt. Or npx the-morphism init for the full skill. Or npx skills add ensayiti/The-Morphism." },
              { q: "What about a11y?", a: "Mandatory. Every recipe ships contrast, reduced-motion, and reduced-transparency fallbacks. If it fails the Before You Ship checklist, the agent is not done." },
            ].map((f, i) => (
              <button
                key={f.q}
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                className={cn("w-full text-left py-5 flex items-start justify-between gap-6 group cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4", isFuturism ? "focus-visible:outline-[#00ed3f]" : "focus-visible:outline-current")}
              >
                <span className="flex-1">
                  <span className={cn("block text-sm font-semibold", isFuturism && "font-mono uppercase tracking-wide text-[#E0D5BE]", isMinimal && "font-[Zodiak,serif] font-normal uppercase tracking-wide")}>{f.q}</span>
                  {faqOpen === i && <span className={cn("mt-2 block text-sm leading-relaxed", muted, isFuturism && "font-mono text-xs")}>{f.a}</span>}
                </span>
                <span
                  className={cn(
                    "h-7 w-7 grid place-items-center shrink-0 border transition-transform",
                    isGlass ? "rounded-full border-white/15 bg-white/5" : isNeo ? "border-black bg-white" : isFuturism ? "border-[#252525] text-[#00ed3f]" : "border-black/10 bg-black/[0.03]",
                    faqOpen === i && "rotate-180"
                  )}
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={cn("mt-auto border-t", isGlass ? "border-white/10 bg-[#070b18] text-white" : isSwiss ? "border-[#e7e5e4] bg-[#fafaf9] text-[#1c1917]" : isBauhaus ? "border-black bg-[#F5F0E6] text-black border-t-[3px]" : isFuturism ? "border-[#252525] bg-[#050505] text-[#E0D5BE]" : isMinimal ? "border-[#1a1a1a] bg-white text-[#1a1a1a]" : isBrutal ? "border-black bg-white text-black" : isMaximal ? "border-[#1a1a1a] bg-[#1a1a1a] text-[#F7F3E8]" : "border-black/10 bg-white text-[#1a1a1a]")}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-12">
          {isBauhaus ? (
            <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-10">
              <div>
                <div className="flex items-center gap-2 font-black uppercase text-xl">
                  <span className="h-8 w-8 bg-[#E2062C] border-2 border-black" /> <span className="h-8 w-8 rounded-full bg-[#FFDD00] border-2 border-black" /> THE MORPHISM
                </div>
                <p className="mt-3 text-sm opacity-60 max-w-[32ch]">A design skill for agents that refuses to look AI-generated. Eight styles. One page. Zero slop.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="space-y-2">
                  <span className="block font-bold uppercase tracking-wide text-xs">Skill</span>
                  <a href="#" className="block opacity-60 hover:opacity-100">Styles</a>
                  <a href="#" className="block opacity-60 hover:opacity-100">Components</a>
                  <a href="#" className="block opacity-60 hover:opacity-100">Docs</a>
                </div>
                <div className="space-y-2">
                  <span className="block font-bold uppercase tracking-wide text-xs">Company</span>
                  <a href="#" className="block opacity-60 hover:opacity-100">Journal</a>
                  <a href="#" className="block opacity-60 hover:opacity-100">Pricing</a>
                  <a href="#" className="block opacity-60 hover:opacity-100">Contact</a>
                </div>
              </div>
              <div className="flex flex-col items-start lg:items-end justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-wide">THE MORPHISM — 2026</span>
                <span className="text-xs opacity-60">Built in public. Zero slop.</span>
              </div>
            </div>
          ) : isFuturism ? (
            <div className="font-mono text-xs">
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-[#00ed3f] tracking-[0.16em]"> <span className="h-2 w-2 bg-[#00ed3f] shadow-[0_0_6px_#00ed3f]" /> MORPHISM.SYS // 2026</div>
                  <p className="mt-2 opacity-50 max-w-[40ch]">Eight styles. Four dials. Zero slop. Versioned like code.</p>
                </div>
                <div className="flex gap-8 opacity-60">
                  <span>STATUS: ONLINE</span>
                  <span>UPTIME: 99.98%</span>
                  <span>TOKENS: 12,847</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#252525] flex flex-col sm:flex-row justify-between gap-3 opacity-40">
                <span>© 2026 THE MORPHISM. No tracking. Zero slop.</span>
                <span className="flex gap-4">
                  <a href="#" className="hover:text-[#00ed3f]">Privacy</a> <a href="#" className="hover:text-[#00ed3f]">Terms</a> <a href="#" className="hover:text-[#00ed3f]">Contact</a>
                </span>
              </div>
            </div>
          ) : isSwiss ? (
            <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 text-sm">
              <div>
                <span className="font-light text-lg tracking-tight">The Morphism</span>
                <p className="mt-2 text-[#1c1917]/60 max-w-[32ch] leading-relaxed">Eight exact recipes. Four dials. Named anti-patterns. The agent reads the brief and ships with taste.</p>
              </div>
              {[
                { h: "Skill", l: ["Styles", "Dials", "Recipes", "Changelog"] },
                { h: "Company", l: ["Journal", "Careers", "Contact"] },
                { h: "Legal", l: ["Privacy", "Terms"] },
              ].map((c) => (
                <div key={c.h}>
                  <span className="block text-xs uppercase tracking-[0.14em] text-[#1c1917]/40 mb-3">{c.h}</span>
                  <div className="space-y-2">
                    {c.l.map((x) => (
                      <a key={x} href="#" className="block text-[#1c1917]/70 hover:text-[#1c1917]">
                        {x}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : isMinimal ? (
            <div className="text-center">
              <span className="font-[Zodiak,serif] uppercase tracking-[0.12em] text-sm">The Morphism</span>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] opacity-40">The quarterly for teams who ship — Issue 04, 2026</p>
              <div className="mt-6 flex justify-center gap-6 text-xs uppercase tracking-[0.1em]">
                <a href="#" className="underline underline-offset-4">Journal</a>
                <a href="#" className="underline underline-offset-4">Pricing</a>
                <a href="#" className="underline underline-offset-4">Contact</a>
              </div>
              <p className="mt-8 text-xs opacity-30">© 2026 THE MORPHISM. Set in Zodiak and Switzer. Printed in public.</p>
            </div>
          ) : isBrutal ? (
            <div className="font-mono text-xs">
              <div className="flex flex-col lg:flex-row justify-between gap-6 border border-black p-4">
                <span className="font-bold">THE MORPHISM — 8 STYLES / 4 DIALS / ZERO SLOP</span>
                <span>© 2026 — NO TRACKING — <a href="#" className="underline">CONTACT</a></span>
              </div>
              <div className="mt-4 grid sm:grid-cols-3 gap-2">
                <a href="#" className="border border-black p-3 hover:bg-black hover:text-white">PRIVACY.TXT</a>
                <a href="#" className="border border-black p-3 hover:bg-black hover:text-white">TERMS.TXT</a>
                <a href="#" className="border border-black p-3 hover:bg-black hover:text-white">STATUS: ONLINE</a>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1.3fr_1fr_1fr] gap-10 text-sm">
              <div>
                <span className={cn("flex items-center gap-2 font-bold", isNeo && "uppercase", isMaximal && "font-[Zodiak,serif] text-lg")}>
                  {isNeo ? <Boxes className="h-5 w-5" /> : isMaximal ? <span className="h-6 w-6 border-2 border-double border-current grid place-items-center text-xs">F</span> : <Box className="h-5 w-5" />} THE MORPHISM
                </span>
                <p className={cn("mt-3 max-w-[32ch] leading-relaxed", muted)}>A design skill that refuses to look AI-generated. Eight styles, exact recipes, zero slop.</p>
                <p className="mt-4 text-xs opacity-40">© 2026 THE MORPHISM. Zero slop.</p>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide mb-3">Skill</span>
                <div className="space-y-2 opacity-70">
                  <a href="#" className="block hover:opacity-100">Tokens</a>
                  <a href="#" className="block hover:opacity-100">Components</a>
                  <a href="#" className="block hover:opacity-100">Docs</a>
                  <a href="#" className="block hover:opacity-100">Pricing</a>
                </div>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide mb-3">Connect</span>
                <div className="space-y-2 opacity-70">
                  <a href="#" className="block hover:opacity-100">Journal</a>
                  <a href="#" className="block hover:opacity-100">Contact</a>
                  <a href="#" className="block hover:opacity-100">Privacy</a>
                  <a href="#" className="block hover:opacity-100">Terms</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </footer>

      <style>{`@media (prefers-reduced-transparency: reduce) { .backdrop-blur-xl { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } }`}</style>
    </div>
  );
}
