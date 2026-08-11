---
name: the-morphism
description: "Anti-slop morphism & aesthetic design skill covering Glassmorphism, Neumorphism, Claymorphism, Minimalism, Maximalism, Brutalism, Skeuomorphism, and Apple Liquid Glass. The agent reads the brief, picks the right aesthetic style, and ships depth-rich interfaces with TailwindCSS v4 and Motion + GSAP. Works with any framework (Next.js, Astro, Vite, Svelte, Remix, or plain HTML). Framework-agnostic CSS recipes. Zero em-dash, zero emoji-as-icon. Strict contrast and a11y enforcement."
version: 2.2.0
author: XEM
license: MIT
metadata:
  hermes:
    tags: [frontend, design, morphism, glassmorphism, neumorphism, claymorphism, minimalism, maximalism, brutalism, skeuomorphism, liquid-glass, css, tailwindcss]
---

# The Morphism: Aesthetic Design Skill for AI Frontend Agents

> Glassmorphism, Neumorphism, Claymorphism, Minimalism, Maximalism, Brutalism, Skeuomorphism, and Apple Liquid Glass.
> Landing pages, portfolios, SaaS surfaces, dashboards, creative sites, and product UI.
> Every rule below is **contextual**. First read the brief, then pick the one style that fits. Never mix styles on the same page.

---

## 0. BRIEF INFERENCE (Read the Room Before Anything Else)

Before touching code, **infer which aesthetic style the user actually wants**. Most LLM design output is bad because the model defaults to AI-purple gradients and three equal cards instead of reading the brief.

### 0.A Read these signals first
1. **Page kind** -- landing page, SaaS dashboard, portfolio, product card, mobile app shell, creative/agency site, editorial, settings panel.
2. **Aesthetic vibe words** the user used -- "glass", "frosted", "translucent", "blur", "neumorphic", "soft 3D", "clay", "chunky", "pillowy", "plush", "minimal", "clean", "simple", "maximalist", "dense", "loud", "brutalist", "raw", "mono", "skeuomorphic", "realistic", "liquid glass", "Apple", "Vision Pro", "depth", "layered", "floating".
3. **Reference signals** -- URLs they linked, screenshots, Dribbble shots, products they named (Apple Vision Pro = liquid glass, Linear = minimal, macOS = frosted, early iOS = skeuomorphic).
4. **Audience** -- design-forward consumer vs. enterprise dashboard vs. accessibility-required audience. Accessibility-critical audiences OVERRIDE high-translucency and low-contrast styles.
5. **Existing brand** -- logo, colors, type. The style must work WITH the brand, not fight it.

### 0.B Output a one-line "Design Read" before generating
Before any code, state: **"Reading this as: <page kind> with a <aesthetic style> language, at depth <N>/10, softness <N>/10, translucency <N>/10."**

Example reads:
- *"Reading this as: SaaS landing page with a Glassmorphism language, at depth 6/10, softness 4/10, translucency 8/10."*
- *"Reading this as: creative agency site with a Brutalism language, at depth 3/10, softness 2/10, translucency 0/10."*
- *"Reading this as: kids' education landing with a Claymorphism language, at depth 8/10, softness 9/10, translucency 0/10."*
- *"Reading this as: premium product showcase with a Liquid Glass language, at depth 7/10, softness 5/10, translucency 9/10."*

### 0.C If the brief is ambiguous, ask one question
Ask exactly **one** clarifying question: *"Should this feel more like frosted glass, soft 3D, chunky/playful, clean/minimal, dense/maximal, raw/brutalist, or realistic/skeuomorphic?"*

If you can confidently infer, **do not ask**. Declare the design read and proceed.

### 0.D Anti-Default Discipline
Do NOT default to: AI-purple gradients, centered hero over dark mesh, three equal feature cards, generic glassmorphism on everything, infinite-loop micro-animations everywhere, Inter + slate-900, em-dash as punctuation, emoji as icons. These are the LLM defaults. Reach past them deliberately based on the design read.

---

## 1. THE THREE DIALS (Aesthetic Configuration)

After the design read, set three dials. Every shadow, blur, radius, and layout decision below is gated by these.

* **`DEPTH_INTENSITY: 5`** -- 1 = Completely flat (no shadows, no depth), 10 = Extreme 3D (heavy shadows, strong layering)
* **`SOFTNESS: 5`** -- 1 = Sharp / Crisp / Hard edges, 10 = Pillowy / Plush / Extreme rounding
* **`TRANSLUCENCY: 0`** -- 1 = Fully opaque (solid backgrounds), 10 = Fully transparent (glass, see-through). **WARNING: TRANSLUCENCY greater than 5 requires a11y fallbacks (Section 6).**

**Baseline:** `5 / 5 / 0`. Override per style below.

### 1.A Aesthetic Style to Dial Presets

| Style | DEPTH | SOFTNESS | TRANSLUCENCY | Best for |
|---|---|---|---|---|
| **Glassmorphism** | 4-6 | 3-5 | 7-10 | SaaS landing, hero overlays, nav bars, modals, premium product cards |
| **Neumorphism** | 6-8 | 5-7 | 0 | Dashboards, settings panels, calculator UIs, soft product cards, interactive controls |
| **Claymorphism** | 7-9 | 8-10 | 0 | Kids apps, creative portfolios, playful brands, ed-tech, gaming, event pages |
| **Minimalism** | 1-2 | 3-5 | 0 | Enterprise SaaS, dashboards, documentation, portfolios, any trust/seriousness surface |
| **Maximalism** | 5-7 | 4-7 | 2-5 | Creative agencies, experimental portfolios, Dribbble-style, fashion, music |
| **Brutalism** | 1-3 | 1-2 | 0 | Designer portfolios, counter-culture brands, art projects, raw/anti-design statements |
| **Skeuomorphism** | 8-10 | 3-6 | 0 | Niche retro, music production UIs, game interfaces, realistic tool simulations |
| **Liquid Glass** | 6-8 | 4-6 | 8-10 | Apple Vision Pro-style, premium product, immersive experiences, spatial UI |

### 1.B Use-Case Presets (quick reference)

| Use case | Style | DEPTH | SOFTNESS | TRANSLUCENCY |
|---|---|---|---|---|
| SaaS landing (design-forward) | Glassmorphism | 5 | 4 | 8 |
| SaaS landing (enterprise/trust) | Minimalism | 1 | 3 | 0 |
| Product dashboard | Neumorphism | 7 | 6 | 0 |
| Creative portfolio (designer) | Maximalism | 6 | 5 | 3 |
| Creative portfolio (anti-design) | Brutalism | 2 | 1 | 0 |
| Kids / playful brand | Claymorphism | 8 | 9 | 0 |
| Mobile app settings | Neumorphism | 6 | 5 | 0 |
| Hero card overlay (image bg) | Glassmorphism | 4 | 3 | 8 |
| Music production UI | Skeuomorphism | 9 | 4 | 0 |
| Public-sector / a11y-critical | Minimalism | 1 | 3 | 0 |
| Spatial / Vision Pro UI | Liquid Glass | 7 | 5 | 9 |
| Fashion / editorial / loud | Maximalism | 6 | 6 | 3 |
| Retro gaming UI | Skeuomorphism | 9 | 6 | 0 |

---

## 2. AESTHETIC CSS RECIPES (The Core Reference)

This is the heart of the skill. Each style gets an **exact CSS recipe**. Do not approximate. Use these as your baseline, then tune dials.

All recipes are **framework-agnostic CSS**. Tailwind utility equivalents are provided in Section 3.

---

### 2.A Glassmorphism Recipe

```css
/* === GLASSMORPHISM: The Frosted Glass Look === */
.glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.4),
    0 8px 32px rgba(0, 0, 0, 0.12);
  color: #1a1a2e;
}

@media (prefers-color-scheme: dark) {
  .glass {
    background: rgba(15, 23, 42, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.15),
      0 8px 32px rgba(0, 0, 0, 0.30);
    color: #e2e8f0;
  }
}

@media (prefers-reduced-transparency: reduce) {
  .glass {
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```

**Glassmorphism tuning by dials:**

| Dial | Low (1-3) | Mid (4-6) | High (7-10) |
|---|---|---|---|
| DEPTH | `blur(8px)`, shadows `rgba(0,0,0,0.06)` | `blur(20px)`, shadows `rgba(0,0,0,0.12)` | `blur(40px)`, shadows `rgba(0,0,0,0.20)`, layered borders |
| SOFTNESS | `border-radius: 8px`, sharp borders | `border-radius: 16px` | `border-radius: 24px`, pill shapes |
| TRANSLUCENCY | `rgba(255,255,255,0.70)` | `rgba(255,255,255,0.35)` | `rgba(255,255,255,0.08)`, stronger blur needed |

**When to use:** Rich background (gradients, images, video) behind the glass. The background IS the design; glass is the frame. Flat color behind glass defeats the purpose.

See `references/glass-landing-example.md` for a complete, build-verified glass landing page implementation (Nav, Hero, Features grid, CTA, Footer) with reusable `GlassCard` component and a11y fallback injection pattern.

See `references/gsap-setup.md` for the GSAP ScrollTrigger pattern — framework-agnostic with React, vanilla JS, and Astro examples.

---

### 2.B Neumorphism Recipe

```css
/* === NEUMORPHISM: Soft Extruded 3D === */
.neumorph {
  /* CRITICAL: background MUST match parent background exactly */
  background: #e8ecf1;
  border-radius: 16px;
  box-shadow:
    8px 8px 16px rgba(163, 177, 198, 0.6),
    -8px -8px 16px rgba(255, 255, 255, 0.8);
  border: none;
}

/* Pressed / inset state */
.neumorph-pressed {
  background: #e8ecf1;
  border-radius: 16px;
  box-shadow:
    inset 6px 6px 12px rgba(163, 177, 198, 0.6),
    inset -6px -6px 12px rgba(255, 255, 255, 0.8);
}

@media (prefers-color-scheme: dark) {
  .neumorph {
    background: #1e2329;
    box-shadow:
      8px 8px 16px rgba(0, 0, 0, 0.5),
      -8px -8px 16px rgba(255, 255, 255, 0.05);
  }
  .neumorph-pressed {
    background: #1e2329;
    box-shadow:
      inset 6px 6px 12px rgba(0, 0, 0, 0.5),
      inset -6px -6px 12px rgba(255, 255, 255, 0.05);
  }
}
```

**Neumorphism tuning by dials:**

| Dial | Low (1-3) | Mid (4-6) | High (7-10) |
|---|---|---|---|
| DEPTH | shadows `4px` offset, `rgba(..., 0.3)` | shadows `8px` offset, `rgba(..., 0.6)` | shadows `14px` offset, `rgba(..., 0.8)`, layered |
| SOFTNESS | `border-radius: 8px`, tightly spaced | `border-radius: 16px` | `border-radius: 30px`, pill shapes |

**Neumorphism color formula:**
- Background: mid-tone color. Light mode `#e0e5ec` range, dark mode `#1a1e24` range. NEVER pure white or black.
- Dark shadow: same hue as background, darker and more saturated, 40-60% opacity.
- Light shadow: same hue as background, lighter and desaturated, 70-90% opacity.

---

### 2.C Claymorphism Recipe

```css
/* === CLAYMORPHISM: Chunky, Pillowy, Playful 3D === */
.clay {
  background: linear-gradient(145deg, #fdfdfd 0%, #f0f0f0 100%);
  border-radius: 32px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.10),
    0 4px 8px rgba(0, 0, 0, 0.08),
    inset 0 2px 4px rgba(255, 255, 255, 0.8),
    inset 0 -4px 8px rgba(0, 0, 0, 0.06);
}

/* Clay pressed state */
.clay:active {
  transform: translateY(2px);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.08),
    inset 0 4px 8px rgba(0, 0, 0, 0.10),
    inset 0 -1px 2px rgba(255, 255, 255, 0.6);
}
```

**Claymorphism tuning by dials:**

| Dial | Low (1-3) | Mid (4-6) | High (7-10) |
|---|---|---|---|
| DEPTH | `border-radius: 16px`, single shadow pair | `border-radius: 24px`, 3 shadow layers | `border-radius: 40px+`, 4-5 shadow layers, dome gradient |
| SOFTNESS | `border-radius: 12px`, tighter shadows | `border-radius: 24px` | `border-radius: 48px`, everything pill-shaped, blob-like |

**Claymorphism color formula:**
- Background: pastel base (HSL: S less than 40%, L greater than 80% for light; S less than 30%, L less than 25% for dark).
- Gradient: +/- 5-10% lightness from base for the dome effect.
- Accents: saturated pops against the pastel base (coral, electric blue, lime green).

---

### 2.D Minimalism Recipe

```css
/* === MINIMALISM: Clean, Restrained, High-Contrast === */
.minimal {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: none;
  padding: 24px;
  color: #111827;
}

/* Minimal card variant with subtle elevation */
.minimal-raised {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

@media (prefers-color-scheme: dark) {
  .minimal {
    background: #0f1117;
    border-color: #27272a;
    color: #fafafa;
  }
  .minimal-raised {
    background: #0f1117;
    border-color: #27272a;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
}
```

**Minimalism principles:**
- Max 1 accent color. Saturation less than 80%. Use neutral bases (Zinc, Slate, Stone).
- Typography does the heavy lifting. Font weight, size, and spacing create hierarchy, not color or shadow.
- Borders over shadows. Use `border` and `divide-y` for separation, not elevation.
- Whitespace is the primary layout tool. Generous padding, wide max-widths, breathing room.
- Everything must justify its existence. If removing an element doesn't hurt the message, remove it.
- **Inspired by:** Linear, Notion, Apple settings, Stripe dashboard.

---

### 2.E Maximalism Recipe

```css
/* === MAXIMALISM: Dense, Loud, Layered, Expressive === */
.maximal {
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 25%, #48dbfb 50%, #ff9ff3 75%, #54a0ff 100%);
  border: 3px solid #1a1a2e;
  border-radius: 0;
  box-shadow: 8px 8px 0 #1a1a2e;
  padding: 32px;
  color: #1a1a2e;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

/* Maximal layered card */
.maximal-card {
  background: #fffbf0;
  border: 2px solid #1a1a2e;
  border-radius: 0;
  box-shadow:
    6px 6px 0 #ff6b6b,
    12px 12px 0 #48dbfb,
    18px 18px 0 #feca57;
  padding: 40px;
}

/* Maximal marquee / ticker */
.maximal-ticker {
  background: #1a1a2e;
  color: #feca57;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  padding: 16px 0;
  overflow: hidden;
  white-space: nowrap;
}
```

**Maximalism principles:**
- More is more. Layering, overlapping, dense information, bold typography.
- High contrast. Black on neon, white on black, clashing colors with intent.
- Hard edges. Zero or near-zero border-radius. Box shadows as solid blocks, not soft blurs.
- Typography as decoration. Oversized, condensed, outlined, rotated, stacked.
- Patterns, textures, repeating elements. Background noise, grid overlays, duotone.
- Multiple typefaces on one page (but with a system: one display, one body, one accent).
- **Inspired by:** Dribbble experimental, anti-design movement, fashion editorials, music festival sites.

---

### 2.F Brutalism Recipe

```css
/* === BRUTALISM: Raw, Mechanical, Unapologetic === */
.brutal {
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 0;
  box-shadow: none;
  padding: 24px;
  color: #000000;
  font-family: 'Geist Mono', 'JetBrains Mono', 'Courier New', monospace;
}

/* Brutal button */
.brutal-btn {
  background: #000000;
  color: #ffffff;
  border: 3px solid #000000;
  border-radius: 0;
  padding: 12px 32px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: background 0.1s, color 0.1s;
}

.brutal-btn:hover {
  background: #ffffff;
  color: #000000;
}

/* Brutal section divider */
.brutal-divider {
  border: none;
  border-top: 3px solid #000000;
  margin: 48px 0;
}
```

**Brutalism principles:**
- Zero ornament. No gradients, no shadows, no blur, no rounding.
- Monospace or grotesk typefaces. Default to system fonts. Raw, unpolished.
- Black and white as the core palette. One accent color maximum (red, yellow, or blue, used sparingly).
- Full-bleed elements. Content stretches edge to edge. No max-width containers unless intentional.
- Visible structure. Borders are thick and visible. Grid lines can be shown. Raw HTML aesthetic.
- Interactive elements feel mechanical. Hard instant transitions, no easing, no motion unless it serves a message.
- **BANNED in brutalism:** box-shadow, border-radius over 2px, gradients, backdrop-filter, font smoothing tricks, Inter as default font.
- **Inspired by:** early web, Swiss design posters, brutalist architecture, Bloomberg.com (original), Craigslist.

---

### 2.G Skeuomorphism Recipe

```css
/* === SKEUOMORPHISM: Realistic, Textured, Physical === */
.skeuo-wood {
  background:
    linear-gradient(90deg, rgba(139, 90, 43, 0.1) 1px, transparent 1px),
    linear-gradient(180deg, #8b5a2b 0%, #a0724a 25%, #8b5a2b 50%, #6b3f1f 75%, #8b5a2b 100%);
  border: 3px solid #5a2d0c;
  border-radius: 8px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -2px 0 rgba(0, 0, 0, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.3);
  padding: 24px;
  color: #f5e6d3;
}

/* Skeuo metal / brushed aluminum */
.skeuo-metal {
  background:
    linear-gradient(180deg, #d4d4d4 0%, #e8e8e8 15%, #b0b0b0 50%, #c8c8c8 85%, #a0a0a0 100%);
  border: 1px solid #888;
  border-radius: 6px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 16px;
  color: #333;
}

/* Skeuo knob (volume/control dial) */
.skeuo-knob {
  width: 64px;
  height: 64px;
  background: radial-gradient(circle at 40% 35%, #f0f0f0 0%, #999 60%, #555 100%);
  border: 2px solid #444;
  border-radius: 50%;
  box-shadow:
    inset 0 -4px 8px rgba(0, 0, 0, 0.4),
    inset 0 4px 8px rgba(255, 255, 255, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
```

**Skeuomorphism principles:**
- Realistic textures: wood grain, brushed metal, leather, paper, glass, plastic, fabric.
- Complex gradients and layered box-shadows for physical depth.
- Real-world metaphors: knobs, dials, switches, sliders that look like physical controls.
- Lighting simulation: highlights that suggest a light source, shadows that suggest gravity.
- Limited use case. Only for: music production, audio engineering, gaming, retro, or niche simulation UIs.
- **NOT for:** modern SaaS, enterprise, accessibility-first, or general web. Say so explicitly if the brief pushes skeuomorphism where it doesn't belong.
- Performance warning: heavy gradient + shadow stacks are expensive. Profile on low-end devices.

---

### 2.H Liquid Glass Recipe (Apple Design)

```css
/* === LIQUID GLASS: Apple Vision Pro-Style Spatial Material === */
.liquid-glass {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.30), rgba(255, 255, 255, 0.08)),
    rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(24px) saturate(180%) contrast(1.05);
  -webkit-backdrop-filter: blur(24px) saturate(180%) contrast(1.05);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.48),
    inset 0 -1px 0 rgba(255, 255, 255, 0.12),
    0 18px 60px rgba(0, 0, 0, 0.18);
  padding: 32px;
  color: #1a1a2e;
}

/* Inner highlight layer */
.liquid-glass::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  background:
    radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.55), transparent 34%),
    linear-gradient(90deg, rgba(255, 255, 255, 0.18), transparent 42%, rgba(255, 255, 255, 0.14));
  pointer-events: none;
}

/* Inner border ring */
.liquid-glass::after {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.14);
  pointer-events: none;
}

/* Lightweight variant for nav bars / toolbars */
.liquid-glass-thin {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 0;
  box-shadow: none;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .liquid-glass {
    border-color: rgba(255, 255, 255, 0.18);
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04)),
      rgba(15, 23, 42, 0.42);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.22),
      0 18px 60px rgba(0, 0, 0, 0.42);
    color: #e2e8f0;
  }
  .liquid-glass-thin {
    background: rgba(15, 23, 42, 0.55);
    border-bottom-color: rgba(255, 255, 255, 0.08);
  }
}

/* A11y fallback */
@media (prefers-reduced-transparency: reduce) {
  .liquid-glass,
  .liquid-glass-thin {
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```

**Liquid Glass principles:**
- This is a **web approximation** of Apple's Liquid Glass material. Apple documents it for Apple platforms only. There is NO official `liquid-glass.css` from Apple. Label it as an approximation in code comments.
- Distinguished from standard Glassmorphism by: inner highlight ring (::before), inner border ring (::after), higher saturation boosting, larger blur radius, softer border-radius, more complex multi-layer backgrounds, and the distinct radial-gradient highlight at the top.
- Use `prefers-reduced-transparency` as a mandatory fallback.
- Dark mode variant MUST ship alongside light mode.
- Best for: immersive product showcases, spatial UI concepts, Vision Pro-inspired landing pages, premium brand experiences.
- **NOT for:** data-heavy dashboards, long-form text, or surfaces where the background content must remain sharply readable.
- Official Apple references: Apple Human Interface Guidelines > Materials; Apple Developer > Liquid Glass; Apple Developer > Adopting Liquid Glass; SwiftUI > Material.

---

## 3. TAILWIND CSS V4 INTEGRATION

All recipes above work as standalone CSS. These are Tailwind v4 utility equivalents for common patterns. Tailwind v4 uses CSS-first configuration (no `tailwind.config.js` needed). Use `@tailwindcss/postcss` or the Vite plugin.

### 3.A Glassmorphism (Tailwind)

```html
<div class="
  bg-white/15 backdrop-blur-xl backdrop-saturate-150
  border border-white/25 rounded-2xl
  shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]
  shadow-lg text-gray-900
  dark:bg-slate-900/45 dark:border-white/10
  dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
  dark:text-gray-100
  p-6
">
  Glass card content
</div>
```

### 3.B Neumorphism (Tailwind)

```html
<div class="
  bg-[#e8ecf1] rounded-2xl
  shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.8)]
  dark:bg-[#1e2329]
  dark:shadow-[8px_8px_16px_rgba(0,0,0,0.5),-8px_-8px_16px_rgba(255,255,255,0.05)]
  p-6
">
  Neumorphic card
</div>

<!-- Neumorphic button (pressed on active) -->
<button class="
  bg-[#e8ecf1] rounded-2xl px-8 py-4 font-semibold text-[#2d3436]
  shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.8)]
  active:shadow-[inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]
  active:scale-[0.98] transition-all duration-150
  focus:outline-2 focus:outline-[#4A90D9] focus:outline-offset-2
  dark:bg-[#1e2329] dark:text-gray-200
  dark:shadow-[8px_8px_16px_rgba(0,0,0,0.5),-8px_-8px_16px_rgba(255,255,255,0.05)]
  dark:active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.5),inset_-6px_-6px_12px_rgba(255,255,255,0.05)]
">
  Click Me
</button>
```

### 3.C Claymorphism (Tailwind)

```html
<div class="
  bg-gradient-to-br from-[#fdfdfd] to-[#f0f0f0]
  rounded-[32px] border-2 border-white/60
  shadow-[0_12px_32px_rgba(0,0,0,0.10),0_4px_8px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-4px_8px_rgba(0,0,0,0.06)]
  p-8 transition-all duration-200
  active:translate-y-[2px]
  active:shadow-[0_4px_12px_rgba(0,0,0,0.08),inset_0_4px_8px_rgba(0,0,0,0.10),inset_0_-1px_2px_rgba(255,255,255,0.6)]
">
  Clay card
</div>
```

### 3.D Minimalism (Tailwind)

```html
<div class="
  bg-white border border-zinc-200 rounded-lg
  p-6 text-zinc-900
  dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-100
">
  Minimal card
</div>
```

### 3.E Maximalism (Tailwind)

```html
<div class="
  bg-gradient-to-br from-red-400 via-yellow-300 to-blue-400
  border-[3px] border-zinc-900 rounded-none
  shadow-[8px_8px_0_#1a1a2e]
  p-8 text-zinc-900 font-extrabold uppercase tracking-tight
">
  MAXIMAL CARD
</div>
```

### 3.F Brutalism (Tailwind)

```html
<div class="
  bg-white border-[3px] border-black rounded-none
  p-6 text-black font-mono
  dark:bg-black dark:border-white dark:text-white
">
  Raw content. No decoration.
</div>

<button class="
  bg-black text-white border-[3px] border-black rounded-none
  px-8 py-3 font-bold uppercase tracking-wider
  hover:bg-white hover:text-black transition-all duration-100
  dark:bg-white dark:text-black dark:border-white
  dark:hover:bg-black dark:hover:text-white
">
  CLICK
</button>
```

### 3.G Skeuomorphism (Tailwind)

```html
<!-- Wood texture card -->
<div class="
  rounded-lg border-[3px] border-[#5a2d0c]
  shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.3)]
  p-6 text-[#f5e6d3]
" style="background: linear-gradient(180deg, #8b5a2b 0%, #a0724a 25%, #8b5a2b 50%, #6b3f1f 75%, #8b5a2b 100%);">
  Wood panel content
</div>
```

### 3.H Liquid Glass (Tailwind)

```html
<div class="
  relative isolate overflow-hidden
  rounded-[28px] border border-white/30
  bg-[linear-gradient(135deg,rgba(255,255,255,0.30),rgba(255,255,255,0.08)),rgba(255,255,255,0.12)]
  backdrop-blur-2xl backdrop-saturate-150 backdrop-contrast-105
  shadow-[inset_0_1px_0_rgba(255,255,255,0.48),inset_0_-1px_0_rgba(255,255,255,0.12),0_18px_60px_rgba(0,0,0,0.18)]
  p-8 text-gray-900
  dark:border-white/15
  dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04)),rgba(15,23,42,0.42)]
  dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_18px_60px_rgba(0,0,0,0.42)]
  dark:text-gray-100
  before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]
  before:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.55),transparent_34%),linear-gradient(90deg,rgba(255,255,255,0.18),transparent_42%,rgba(255,255,255,0.14))]
  before:pointer-events-none
  after:absolute after:inset-px after:rounded-[inherit]
  after:border after:border-white/15 after:pointer-events-none
">
  Liquid Glass content
</div>
```

---

## 4. STACK & CONVENTIONS

### 4.A Framework
- **Any framework** with TailwindCSS v4: Next.js, Astro, Vite + React, Svelte, Remix, or plain HTML. The CSS recipes in Section 2 are pure CSS — they work everywhere. Tailwind utility equivalents in Section 3 use standard Tailwind classes (no framework lock-in).
- **Tailwind v4 notes:** CSS-first config. Use `@tailwindcss/postcss` or Vite plugin. No `tailwind.config.js`. Dark mode via `dark:` variant. Container queries and arbitrary values work natively.
- **Font loading by framework:**
  - **Next.js:** `next/font/google` for automatic subsetting and `font-display: swap`.
  - **Astro / Vite / Svelte / Remix:** `@fontsource` packages (e.g. `@fontsource/geist-sans`) or self-host with `@font-face` + `font-display: swap`. Never link Google Fonts via `<link>` in production.
- **Motion (mount animations):** Works with any React-compatible framework (Next.js, Vite + React, Remix). Import from `motion/react`. Use for: on-mount entrance animations (hero headlines, nav, initial load). For non-React frameworks (Astro, Svelte, plain HTML), use CSS `@keyframes` + `animation` or the Web Animations API (`element.animate()`) for mount effects.
- **GSAP + ScrollTrigger (scroll animations):** Framework-agnostic. Use for: scroll-driven reveals (features grids, CTAs, demo panels, parallax, staggered card entrances). In React: `useRef` + `gsap.context()` + cleanup in `useEffect`. In vanilla JS / Svelte / Astro: `gsap.context()` in a lifecycle hook or `<script>`. See `references/gsap-setup.md` for patterns across frameworks.
- **The split:** Motion (or CSS animations) for mount, GSAP+ScrollTrigger for scroll. Never use GSAP for on-mount — it's heavier and imperative; Motion and CSS are declarative and simpler for that job.

**Design token const pattern (strongly recommended).** For Neumorphism, Claymorphism, and Maximalism especially, Tailwind class strings get very long and are repeated across many elements (cards, buttons, inputs, tags, dividers). Centralize all style tokens into a single `const TOKENS` object at the top of the component file:

```tsx
const NEU = {
  bg: "bg-[#e8ecf1] dark:bg-[#1a1e24]",
  card: "rounded-2xl bg-[#e8ecf1] shadow-[...] dark:bg-[#1e2329] dark:shadow-[...]",
  cardInset: "rounded-2xl bg-[#e8ecf1] shadow-[inset_...] ...",
  btn: "rounded-xl px-5 py-2.5 ... active:shadow-[inset_...] active:scale-[0.98] ...",
  text: "text-[#2d3436] dark:text-gray-200",
  textMuted: "text-[#636e72] dark:text-gray-400",
  input: "w-full rounded-xl ... shadow-[inset_...] ...",
}
```

Then reference tokens with template literals: `className={NEU.card}`, `className={[NEU.btn, "flex-1"].join(" ")}`. Benefits: (a) every element stays on the same recipe, (b) tuning a dial means changing one shadow offset and every element updates, (c) the file is scannable instead of 150-line class strings on every div. For Glassmorphism and Minimalism, this pattern is optional (fewer surfaces, shorter class strings).

**TIP -- Design token const pattern.** For morphism pages, the Tailwind class strings are long and repeated across many elements (cards, buttons, inputs, tags). Centralize all tokens into a single `const TOKENS = { card: "...", btn: "...", input: "..." }` object at the top of the component file. Reference tokens with `${TOKENS.card}` in template literals. This makes the file scannable, keeps every element on the same recipe, and makes dial-tuning trivial (change one shadow offset and every element updates). Use this for Neumorphism and Claymorphism especially; Glassmorphism can get away with inline classes if only a few glass surfaces exist.

### 4.B Fonts (shadcn/ui ecosystem)
- **Next.js:** Use `next/font/google` for automatic subsetting and `font-display: swap`.
- **Other frameworks (Astro, Vite, Svelte, Remix):** Use `@fontsource` packages (e.g. `npm install @fontsource/geist-sans`) or self-host with `@font-face` + `font-display: swap`. Never link Google Fonts via `<link>` in production. `@fontsource` packages come pre-configured with `font-display: swap` and subsetting.

**Available typefaces:**
- **Default:** Geist Sans + Geist Mono (shadcn/ui default)
- **Sans-serif options:** Inter, Outfit, Plus Jakarta Sans, DM Sans, Manrope, Space Grotesk, Public Sans, Work Sans
- **Display / wide:** Sora, Clash Display, Cabinet Grotesk (self-host), Satoshi (self-host)
- **Mono options:** Geist Mono, JetBrains Mono, Fira Code, IBM Plex Mono, Space Mono
- **Serif options:** Newsreader, Playfair Display, Lora, Merriweather, EB Garamond

**Per-style recommendations:**
- Glassmorphism: Geist, Outfit, Satoshi (crisp, modern)
- Neumorphism: Geist, Inter (neutral, lets depth speak)
- Claymorphism: Nunito, Baloo 2, Quicksand (rounded, friendly)
- Minimalism: Geist, Inter, DM Sans (clean, precise)
- Maximalism: Clash Display + JetBrains Mono, Sora (bold, expressive)
- Brutalism: Geist Mono, Space Mono, JetBrains Mono (raw, mechanical)
- Skeuomorphism: varies by texture (serif for vintage, mono for tech)
- Liquid Glass: Geist, SF Pro (via system font stack), Outfit

### 4.C Icons
**Allowed libraries (pick one per project):**
- `lucide-react` -- clean, consistent, most popular with shadcn/ui
- `@phosphor-icons/react` -- extensive, multiple weights (Thin through Fill)
- `@tabler/icons-react` -- sharp, technical, good for dashboards

**Per-style recommendations:**
- Glassmorphism / Liquid Glass: Lucide (Regular) or Phosphor (Regular)
- Neumorphism: Phosphor (Bold) -- stands out against soft backgrounds
- Claymorphism: Phosphor (Fill) -- chunky, matches pillowy aesthetic
- Minimalism: Lucide (default weight) -- cleanest, most restrained
- Maximalism: Phosphor (Fill or Duotone) -- bold, colorful
- Brutalism: Tabler (default) -- sharp, mechanical, no fluff
- Skeuomorphism: any, as appropriate for the texture context

**Rules:**
- One icon family per project. Do not mix Lucide with Phosphor in the same tree.
- Standardize `strokeWidth` globally (1.5 or 2.0).
- NEVER hand-roll SVG icon paths. If a glyph is missing, install a second library.
- **When Phosphor is not installed** (common in shadcn/ui starter projects that ship with only lucide-react): use Lucide for ALL styles with `strokeWidth={2}`. It works fine for Neumorphism, Claymorphism, and Maximalism despite the Phosphor recommendation above. Do not install Phosphor mid-session unless the user asks for it or the visual difference is demonstrably hurting the output.

**PITFALL -- lucide-react 1.x removed all brand icons.** `Github`, `Twitter`, `Facebook`, `Linkedin`, `Youtube`, `Instagram`, `Slack`, `Discord`, `Twitch`, and similar brand-name exports do NOT exist in lucide-react 1.0+. Build will fail with "Export X doesn't exist in target module" and a "Did you mean to import ...?" suggestion for an unrelated icon. The fix is NOT to guess another name -- use generic icons instead: `Globe`, `MessageCircle`, `Link`, `AtSign`, `Rss`, `ExternalLink`, `Share2`. If brand recognition is essential, fall back to Phosphor (which retains brand icons) or use inline SVG from simple-icons.

**PITFALL: lucide-react 1.x removed all brand icons.** `Github`, `Twitter`, `Facebook`, `Linkedin`, `Youtube`, `Instagram`, `Slack`, `Discord`, `Twitch`, and similar brand-name exports do NOT exist in lucide-react 1.0+. If you need brand/social icons, either (a) use generic alternatives (`Globe`, `MessageCircle`, `Link`, `AtSign`, `Rss`) or (b) install `@phosphor-icons/react` alongside Lucide specifically for brand glyphs (Phosphor retains them). Do NOT guess brand icon names -- if the build fails with "Export X doesn't exist in target module", it is always this issue.

### 4.D Responsiveness
- `min-h-[100dvh]` -- NEVER `h-screen` (iOS Safari address bar collapse).
- CSS Grid over flexbox math (`grid grid-cols-1 md:grid-cols-3 gap-6`).
- Morphism effects MUST degrade gracefully on mobile: fewer shadow layers, simpler blur.
- Standard breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`.

---

## 5. STYLE DECISION TREE

Use this logic before picking a style:

```
1. Is the brief a11y-critical (public sector, healthcare, fintech, government)?
   -> YES -> Minimalism. DEPTH 1-2. Skip all morphism.
   -> NO -> Continue.

2. Does the brief use words like "glass", "frosted", "transparent", "blur"?
   -> YES -> Glassmorphism. If "Apple" or "Vision Pro" or "spatial", use Liquid Glass.

3. Does the brief say "soft 3D", "neumorphic", "extruded", "soft UI"?
   -> YES -> Neumorphism. Confine to interactive elements only.

4. Is the brief playful, kid-friendly, "clay", "chunky", "pillowy", "plush"?
   -> YES -> Claymorphism. Verify pastel palette.

5. Is the brief "minimal", "clean", "simple", "less is more"?
   -> YES -> Minimalism.

6. Is the brief "maximal", "loud", "dense", "Dribbble", "experimental", "fashion"?
   -> YES -> Maximalism.

7. Is the brief "brutalist", "raw", "ugly on purpose", "anti-design"?
   -> YES -> Brutalism.

8. Is the brief "skeuomorphic", "realistic", "like real [object]"?
   -> YES -> Skeuomorphism. Verify it's the right audience.

9. Is the brief "Apple", "Vision Pro", "spatial", "immersive", "liquid"?
   -> YES -> Liquid Glass. Label as approximation, not official Apple.

10. None of the above?
    -> Minimalism as safe default.
```

---

## 6. ACCESSIBILITY & FALLBACKS (Non-Negotiable)

Morphism styles are notorious for a11y failures. These rules are **mandatory**.

### 6.A Contrast Enforcement
- Neumorphic buttons with shadow-only affordance are invisible to low-vision users. Every neumorphic interactive MUST have a visible text/icon with 4.5:1 contrast OR a visible border OR a distinct fill color.
- Glass/Liquid Glass text over variable backgrounds MUST have a text-shadow or subtle scrim.
- Clay pastel-on-pastel schemes MUST pass 4.5:1 contrast between text and background.
- Maximalism high-saturation color combos MUST pass contrast. Bright yellow text on white = fail.
- Brutalism black-on-white is inherently high contrast. Ensure dark mode inverts cleanly.

### 6.B Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
- No scroll-driven transitions for reduced-motion users.
- Clay `:active` squish must be instant or removed.
- Maximalism marquees must pause.

### 6.C Reduced Transparency (Glassmorphism and Liquid Glass only)
```css
@media (prefers-reduced-transparency: reduce) {
  .glass, .liquid-glass, [class*="glass"] {
    background: var(--glass-fallback, rgba(255, 255, 255, 0.92));
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```
Every glass/liquid-glass element MUST ship a solid fallback. Never ship glass without it.

### 6.D Focus States
- Neumorphic: visible outline (not shadow change). `outline: 2px solid #4A90D9; outline-offset: 2px;`
- Glass/Liquid Glass: `outline: 2px solid rgba(255,255,255,0.8);` dark bg, `outline: 2px solid rgba(0,0,0,0.6);` light bg.
- Clay: thick colored outline. `outline: 3px solid var(--clay-accent); outline-offset: 3px;`
- Brutalism: `outline: 3px solid #000; outline-offset: 2px;` (visible, mechanical).
- Minimalism: standard accessible outline matching the accent color.
- Maximalism: `outline: 3px solid currentColor; outline-offset: 2px;`

---

## 7. ANTI-PATTERNS & SLOP BANS

### 7.A Universal Bans (all styles)
- **MIXING STYLES ON ONE PAGE.** One page = one aesthetic style. Glass nav + neumorphic cards + clay buttons = chaos. Pick one.
- **Morphism without fallback.** Every glass/liquid-glass panel gets a solid-fill fallback. Every neumorphic button gets a visible border or fill.
- **Shadow-only affordance.** If removing shadows makes the element invisible, the design is broken.
- **Excessive shadow layers.** Max 4 box-shadow declarations per element (performance).
- **EM-DASH (`--`) is COMPLETELY BANNED.** Use a period, comma, colon, or hyphen instead. Zero em-dashes in headlines, body, captions, buttons, alt text, anywhere visible to the user. En-dash (`-`) banned as separator too. Only regular hyphen `-` is permitted.
- **EMOJI AS ICONS IS BANNED.** Use icon library glyphs (Lucide, Phosphor, Tabler). Emoji may ONLY be used when the user explicitly asks for a playful/chat-style/social-native vibe, and even then, sparingly.
- **Inter as unconditional default.** Inter is acceptable for Minimalism and enterprise. For every other style, pick a font with character from Section 4.B.
- **No `h-screen`.** Use `min-h-[100dvh]`.
- **No generic AI copy cliches:** "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer", "Delve", "Revolutionize". Write plain, specific language.
- **No generic placeholder names:** "John Doe", "Acme Corp", "Lorem Ipsum". Use realistic, contextual content.
- **PILL BADGE (`rounded-full bg-white/10 backdrop-blur-md border ... px-4 py-1.5`) IS AI SLOP.** This exact pattern -- a frosted-glass rounded-full chip with a small icon -- is one of the most common AI-generated hero micro-labels. It shows up in nearly every Glassmorphism/Liquid Glass hero as a "New in beta" / "Now available" / "Developer preview" badge. **Never use this pattern.** Replace it with a simple text label: `flex items-center gap-2 text-sm font-medium tracking-wide text-white/60` plus the icon. No background, no border, no rounded-full, no padding wrapper. The icon alone carries the visual weight.

### 7.B Glassmorphism Bans
- **Glass without blur.** `background: rgba(255,255,255,0.5)` without `backdrop-filter` is NOT glassmorphism. It's a transparent rectangle that makes background content unreadable.
- **Glass over busy images without text protection.** Add `text-shadow` or a subtle scrim behind text.
- **Glass on glass on glass.** Max 2 layers of glass overlaid. Three layers = unreadable soup.
- **`backdrop-filter` without `-webkit-backdrop-filter`.** Safari needs the prefix.

### 7.C Neumorphism Bans
- **White (`#fff`) or black (`#000`) as the neumorphic background.** Use mid-tones only.
- **Low-contrast text on neumorphic backgrounds.** Text must be significantly darker (light mode) or lighter (dark mode) than the background.
- **Neumorphic inputs that look like static cards.** Inputs MUST use the inset (pressed) shadow variant.
- **Neumorphism as the ONLY visual style on a page.** Use it on interactive surfaces, not structural containers.

### 7.D Claymorphism Bans
- **Claymorphism on serious/enterprise briefs.** If the brief is fintech, healthcare, government, legal -- claymorphism is wrong. Say so.
- **Too many clay elements.** Max 6 clay cards per page. Beyond that, visual noise.
- **Clay without `:active` squish.** Interactive clay MUST have a pressed state. Static clay = cheap plastic.
- **Pastel color soup.** Pick ONE pastel family (warm: peach/coral, cool: lavender/mint, or neutral: warm grey/beige).

### 7.E Minimalism Bans
- **"Minimal" as an excuse for incomplete.** Minimalism is intentional restraint, not lazy half-finished UI.
- **Minimal but unreadable.** Light grey text (`#ccc`) on white is not minimal. It's inaccessible.
- **No visual hierarchy.** If every element has the same weight, the page is flat soup, not minimalist. Use typographic scale and spacing.

### 7.F Maximalism Bans
- **Loud without intent.** Random color vomit is not maximalism. Maximalism is dense with purpose.
- **Unreadable due to contrast.** High-saturation combos must still pass readability.
- **Animation overload.** Maximalism is dense visually, not necessarily heavy on motion. One marquee per page max.

### 7.G Brutalism Bans
- **Brutalism as an excuse for broken layout.** Raw aesthetic means intentional choices, not missing CSS.
- **Unreadable type.** Even brutalism must be readable. Monospace at 10px with `line-height: 1` fails.
- **Functionally broken interactivity.** Brutalist buttons must still work. Focus states are mandatory (Section 6.D).

### 7.H Skeuomorphism Bans
- **Skeuomorphism on modern SaaS.** Leather stitching and wood grain on a fintech dashboard is wrong. Say so.
- **Performance-ignorant textures.** Heavy gradients + shadows are expensive. Profile on low-end devices.

### 7.I Liquid Glass Bans
- **Claiming it's "official Apple."** It is NOT. Label as approximation in code comments.
- **Using Liquid Glass on high-density data.** The depth effect makes text hard to read. Use for hero sections, cards, and nav, not data tables.
- **No reduced-transparency fallback.** This is the #1 Liquid Glass a11y violation.

---

## 8. MOTION RULES PER STYLE

**Mount animations** (Motion or CSS `@keyframes`): hero headlines, nav entrance, on-load fades. **Scroll animations** (GSAP ScrollTrigger): features grids, CTAs, demo panels, staggered reveals, parallax.

| Style | Motion character | Mount (motion) | Scroll (GSAP+ScrollTrigger) |
|---|---|---|---|
| Glassmorphism | Smooth, elegant, floating | `duration-500 ease-out`. Hover: `scale(1.02)` + increased blur | Staggered card reveals (`delay: i * 0.1`), CTA scale-up (`scale: 0.97 -> 1`) |
| Neumorphism | Physical, pressable, mechanical | `duration-150 ease-out`. Press: instant shadow swap, `scale(0.98)` | None -- neumorphism is interactive, not narrative |
| Claymorphism | Bouncy, squishy, playful | `duration-200 cubic-bezier(0.34,1.56,0.64,1)`. Press: `translateY(2px)` + shadow collapse | Bouncy staggered reveals with overshoot easing |
| Minimalism | Subtle, invisible, functional | `duration-200 ease-out`. Hover micro-changes only | None -- minimalism avoids scroll theatre |
| Maximalism | Bold, energetic, expressive | `duration-300 ease-out`. Marquees, parallax | Scroll-driven parallax, staggered grid reveals, marquee triggers |
| Brutalism | Instant, mechanical, no easing | `transition: none` or `duration-100`. Hard cuts | None -- brutalism rejects decorative motion |
| Skeuomorphism | Realistic, weighted, detailed | `duration-300 ease-out`. Complex multi-property transitions | Subtle parallax for depth illusion |
| Liquid Glass | Floating, ethereal, spatial | `duration-700 ease-out`. Parallax depth, slow floating micro-movements | Staggered card reveals, scale-up CTAs, parallax depth layers |

**GSAP ScrollTrigger pattern** (see `references/gsap-setup.md` for React, vanilla JS, and Astro examples):
```tsx
const sectionRef = useRef<HTMLElement>(null)
const cardsRef = useRef<(HTMLDivElement | null)[]>([])

useEffect(() => {
  const ctx = gsap.context(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return
      gsap.fromTo(card, { opacity: 0, y: 32 }, {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        delay: i * 0.1,
        scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
      })
    })
  }, sectionRef)
  return () => ctx.revert()
}, [])
```

---

## 9. COLOR PALETTE RULES PER STYLE

### 9.A Glassmorphism
- Background behind glass: rich and varied (gradients, images, videos).
- Glass transparency: light mode `rgba(255,255,255,0.10-0.25)`, dark mode `rgba(15,23,42,0.30-0.55)`.
- Text: high contrast. Light mode near-black, dark mode near-white.
- Accent: one vibrant color (electric blue, emerald, deep rose).

### 9.B Neumorphism
- Background: MID-TONE. Light mode `#e0e5ec` range, dark mode `#1a1e24` range.
- Shadows derived from background color.
- Text: high contrast against mid-tone.
- Accent: one color, not the same hue as background.

### 9.C Claymorphism
- Base: pastel. HSL S less than 40%, L greater than 80% (light) or less than 25% (dark).
- Gradient: +/- 5-10% lightness from base.
- Shadows: warm-tinted, low opacity. Never pure black on pastels.
- Accent: saturated pop (coral, electric blue, lime, magenta).
- BANNED pastel defaults: misty rose + pastel pink ("cute app"), pastel green + pastel blue ("ed-tech"). Rotate.

### 9.D Minimalism
- Max 1 accent color. Saturation less than 80%.
- Neutral bases: Zinc, Slate, or Stone.
- ONE palette per project. Do not mix warm and cool grays.
- Color consistency: same accent across all sections.

### 9.E Maximalism
- 2-4 bold accent colors, intentionally clashing or harmonized.
- High saturation allowed. S greater than 70%.
- Full-spectrum gradients. Neon, electric, vibrant.
- Dark text on light backgrounds, or white/neon on dark.

### 9.F Brutalism
- Black and white as core. One accent max (red `#ff0000`, yellow `#ffff00`, or blue `#0000ff`).
- No gradients. No opacity tricks. Solid, flat colors only.
- Pure black (`#000`), pure white (`#fff`). No off-black, no off-white.

### 9.G Skeuomorphism
- Depends on the material being simulated. Wood, metal, leather, paper, glass, plastic.
- Real-world color references. Sample from photos of real materials.
- Lighting: consistent light source direction across all elements.

### 9.H Liquid Glass
- Background: rich, immersive (deep gradients, spatial imagery, dark environments).
- Glass: transparency with high blur and saturation boost.
- Highlights: bright white at low opacity. Never pure white.
- Dark mode required. Liquid Glass in light mode over white background is pointless.

---

## 10. PRE-FLIGHT CHECK (Mandatory Before Shipping)

Run every box. If any fails, the output is NOT done.

### Style Selection
- [ ] **Design Read** declared (Section 0.B one-liner)?
- [ ] **Dial values** (DEPTH / SOFTNESS / TRANSLUCENCY) explicit and reasoned?
- [ ] **ONE style** per page (no mixing)?

### Accessibility (CRITICAL)
- [ ] **Contrast check:** all text on styled elements has 4.5:1 contrast ratio?
- [ ] **Neumorphic interactives:** buttons/inputs have visible border or fill?
- [ ] **Glass/Liquid Glass fallback:** `prefers-reduced-transparency` solid-fill provided?
- [ ] **Reduced motion:** `prefers-reduced-motion` disables all ambient animations?
- [ ] **Focus states:** all interactive elements have visible focus rings?

### Style-Specific
- [ ] **Glassmorphism:** `backdrop-filter` AND `-webkit-backdrop-filter` both present?
- [ ] **Neumorphism:** background is mid-tone, not white/black?
- [ ] **Claymorphism:** pastel palette AND not the banned defaults?
- [ ] **Minimalism:** one accent color, consistent across all sections?
- [ ] **Maximalism:** dense but readable, one marquee max?
- [ ] **Brutalism:** monospace, black/white, zero border-radius over 2px?
- [ ] **Skeuomorphism:** appropriate audience, not on modern SaaS?
- [ ] **Liquid Glass:** labeled as approximation, not official Apple?

### Code Quality
- [ ] **No `h-screen`** -- using `min-h-[100dvh]`?
- [ ] **CSS Grid** over flexbox math?
- [ ] **Max 4 box-shadow declarations** per element?
- [ ] **Dark mode** variants provided where applicable?
- [ ] **Mobile responsive:** effects degrade gracefully?

### Anti-Slop
- [ ] **Zero em-dashes (`--`)** anywhere visible to the user?
- [ ] **Zero emoji as icons** (unless user explicitly requested)?
- [ ] **No AI copy cliches** ("Elevate", "Seamless", "Unleash", etc.)?
- [ ] **No generic placeholders** ("John Doe", "Acme Corp", "Lorem Ipsum")?
- [ ] **No pill badge** (`rounded-full bg-white/10 backdrop-blur ...`) -- bare text label + icon only?
- [ ] **Font is NOT Inter** (unless Minimalism/enterprise)?
- [ ] **No mixing styles** on one page?

---

## 11. OUT OF SCOPE

This skill is NOT for:
- Pure flat design with zero depth or aesthetic character (use a different skill).
- 3D WebGL/Three.js scenes (this skill is CSS-only depth).
- Native mobile (use platform HIG: Material Design, Apple HIG).
- Print design or non-web surfaces.
- Data visualization libraries (D3, Chart.js, etc.).

If the brief is out of scope, **say so** and recommend the right approach.

---

## Appendix A: Quick Reference

| User says... | Style | Dial preset |
|---|---|---|
| "glass", "frosted", "transparent", "blur background" | Glassmorphism | 5/4/8 |
| "soft UI", "soft 3D", "neumorphic", "extruded", "raised" | Neumorphism | 7/6/0 |
| "clay", "chunky", "pillowy", "blobby", "squishy", "playful" | Claymorphism | 8/9/0 |
| "minimal", "clean", "simple", "less is more", "Linear-style" | Minimalism | 1/3/0 |
| "maximal", "loud", "dense", "Dribbble-style", "fashion", "bold" | Maximalism | 6/6/3 |
| "brutalist", "raw", "ugly", "anti-design", "mechanical" | Brutalism | 2/1/0 |
| "skeuomorphic", "realistic", "like real [object]", "leather", "metal" | Skeuomorphism | 9/4/0 |
| "Apple", "Vision Pro", "liquid glass", "spatial", "immersive glass" | Liquid Glass | 7/5/9 |

## Appendix B: Real-World References

- **Glassmorphism:** Apple Vision Pro UI, macOS Sonoma lock screen, Windows 11 Mica, Stripe dashboard, Linear modals.
- **Neumorphism:** Dribbble neumorphic concepts (2020 wave), fitness tracking apps, smart home panels, audio mixer UIs.
- **Claymorphism:** Duolingo (character cards), Notion (illustrations), Headspace, ed-tech platforms.
- **Minimalism:** Linear, Notion, Apple Settings, Stripe dashboard, Vercel design, Railway.
- **Maximalism:** Dribbble experimental, anti-design movement, fashion editorial sites, music festival landing pages.
- **Brutalism:** Bloomberg.com (original), Craigslist, Swiss design posters, brutalist architecture, some designer portfolio sites.
- **Skeuomorphism:** Early iOS (pre-iOS 7), Native Instruments, Propellerhead Reason, premium watch face designs.
- **Liquid Glass:** Apple Vision Pro spatial UI, visionOS materials, Apple Human Interface Guidelines.
