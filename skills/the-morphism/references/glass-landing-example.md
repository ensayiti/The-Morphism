# Glass Landing Page Example (Build-Verified)

This is a complete, build-verified glassmorphism landing page built with the `the-morphism` skill. Use it as a reference for structure, component patterns, and the a11y fallback injection pattern.

## Stack

- Next.js 16 (App Router) with TailwindCSS v4
- Motion (`motion/react`) -- `useInView` for scroll-triggered reveals
- Lucide icons (no brand icons -- see pitfall below)
- Outfit font via `next/font/google`
- pnpm as package manager

## Page structure

| Section | Component | Key pattern |
|---|---|---|
| Nav | `Nav` | Fixed thin glass bar, `backdrop-blur-2xl`, logo + links + CTA |
| Hero | `Hero` | Staggered `motion.div` reveals, glass browser-mockup card, badge |
| Features | `Features` + `FeatureCard` | CSS Grid 1→2→3 cols, `useInView` per card with stagger delay |
| CTA | `CtaSection` | Centered glass card, `useInView` for entrance |
| Footer | `Footer` | Border-top, link list, social icons (Globe + MessageCircle) |

## Reusable `GlassCard` component

```tsx
function GlassCard({ children, className = "", hover = true }) {
  return (
    <div className={[
      "rounded-2xl border border-white/20 p-6 shadow-lg",
      "bg-white/10 backdrop-blur-xl backdrop-saturate-150",
      "shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]",
      "dark:bg-slate-900/35 dark:border-white/10",
      "dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
      hover && "transition-all duration-500 hover:scale-[1.02] hover:bg-white/15 hover:shadow-xl",
      className,
    ].join(" ")}>
      {children}
    </div>
  )
}
```

## Background recipe

Dark gradient + subtle SVG grain noise for richness behind glass:

```css
bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.18),_transparent_50%),
    radial-gradient(ellipse_at_bottom_left,_rgba(99,102,241,0.22),_transparent_50%),
    radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.15),_transparent_50%)]
bg-slate-950
```

Grain overlay: `pointer-events-none fixed` div with SVG `feTurbulence` at 3% opacity, `backgroundSize: 200px`.

## A11y fallback injection pattern

Inject fallback CSS via a `<style>` tag in the page component rather than relying on globals.css:

```tsx
<style dangerouslySetInnerHTML={{ __html: `
  @media (prefers-reduced-transparency: reduce) {
    [class*="backdrop-blur"] {
      background: rgba(15, 23, 42, 0.92) !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
` }} />
```

## Build verification

Always run the project's build command before claiming success:

```bash
pnpm build   # or: npm run build
```

This catches import errors (e.g. missing lucide-react brand icons) that `pnpm dev` defers until page visit.

## Pitfalls avoided

1. **lucide-react brand icons don't exist in 1.x.** Used `Globe` and `MessageCircle` instead of `Github`/`Twitter`.
2. **No `h-screen`.** Used `min-h-[100dvh]` throughout.
3. **Glass over dark background only.** Flat/light backgrounds behind glass defeat the effect.
4. **Backdrop filters degrade on mobile.** Kept blur moderate (`xl` / `2xl`) rather than extreme values.
5. **"use client" required.** Motion's `useInView` is a client-side hook; the whole page must be a Client Component.
