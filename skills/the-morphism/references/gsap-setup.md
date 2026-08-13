# GSAP + ScrollTrigger Setup (Framework-Agnostic)

## Install

```bash
npm install gsap
# or: pnpm add gsap / yarn add gsap
```

## React / Next.js / Remix Pattern

```tsx
"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // gsap.context() groups all ScrollTriggers for cleanup
    const ctx = gsap.context(() => {
      // Heading reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0,
            duration: 0.7, ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Staggered card reveals
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0,
            duration: 0.6, ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        )
      })
    }, sectionRef)

    // ctx.revert() kills all ScrollTriggers on unmount
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef}>
      <div ref={headingRef}>
        <h2>Section heading</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {items.map((item, i) => (
          <div key={item.title} ref={(el) => { cardsRef.current[i] = el }}>
            <Card {...item} />
          </div>
        ))}
      </div>
    </section>
  )
}
```

## Vanilla JS / Plain HTML Pattern

```html
<script type="module">
  import { gsap } from "https://esm.sh/gsap"
  import { ScrollTrigger } from "https://esm.sh/gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger)

  // Use gsap.context() for automatic cleanup
  const ctx = gsap.context(() => {
    // Heading reveal
    gsap.fromTo(".section-heading", { opacity: 0, y: 24 }, {
      opacity: 1, y: 0,
      duration: 0.7, ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-heading",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    })

    // Staggered card reveals
    gsap.utils.toArray(".feature-card").forEach((card, i) => {
      gsap.fromTo(card, { opacity: 0, y: 32 }, {
        opacity: 1, y: 0,
        duration: 0.6, ease: "power2.out",
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      })
    })
  })

  // Cleanup on page unload
  window.addEventListener("beforeunload", () => ctx.revert())
</script>
```

## Astro Pattern

```astro
---
// Component frontmatter (server-side)
---

<section id="features">
  <h2 class="section-heading">Features</h2>
  <div class="grid gap-6 sm:grid-cols-3">
    <div class="feature-card">Card 1</div>
    <div class="feature-card">Card 2</div>
    <div class="feature-card">Card 3</div>
  </div>
</section>

<script>
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger)

  const ctx = gsap.context(() => {
    gsap.fromTo(".section-heading", { opacity: 0, y: 24 }, {
      opacity: 1, y: 0,
      duration: 0.7, ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-heading",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    })

    gsap.utils.toArray(".feature-card").forEach((card, i) => {
      gsap.fromTo(card, { opacity: 0, y: 32 }, {
        opacity: 1, y: 0,
        duration: 0.6, ease: "power2.out",
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      })
    })
  })

  // Astro cleans up component scripts automatically on navigation
  // For SPA mode, add: document.addEventListener("astro:after-swap", () => ctx.revert())
</script>
```

## Svelte Pattern

```svelte
<script>
  import { onMount, onDestroy } from "svelte"
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger)

  let sectionEl
  let headingEl
  let cards = []

  let ctx

  onMount(() => {
    ctx = gsap.context(() => {
      if (headingEl) {
        gsap.fromTo(headingEl, { opacity: 0, y: 24 }, {
          opacity: 1, y: 0,
          duration: 0.7, ease: "power2.out",
          scrollTrigger: {
            trigger: headingEl,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      }

      cards.forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 32 }, {
          opacity: 1, y: 0,
          duration: 0.6, ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        })
      })
    }, sectionEl)
  })

  onDestroy(() => ctx?.revert())
</script>

<section bind:this={sectionEl}>
  <h2 bind:this={headingEl}>Section heading</h2>
  <div class="grid gap-6 sm:grid-cols-3">
    {#each items as item, i}
      <div bind:this={cards[i]}>
        <Card {...item} />
      </div>
    {/each}
  </div>
</section>
```

## The split rule

- **Motion** (or CSS `@keyframes`) for on-mount entrance animations: hero headlines, nav, initial load fades.
- **GSAP + ScrollTrigger** for scroll-driven reveals: features grids, CTAs, demo panels, parallax, staggered card entrances.

This split keeps mount animations simple (Motion's declarative API or CSS) while giving scroll animations ScrollTrigger's precision and rich easing.

## CSS vs GSAP: don't let them fight

The #1 source of "the animations feel broken" bugs is CSS and GSAP animating the same property on the same element. Both write `transform` (and often `opacity`), and they overwrite each other. Two specific traps:

### Trap 1: a CSS mount animation on a GSAP scroll-scrubbed element

```tsx
// WRONG — the rise-in animation keeps owning `transform` after it ends,
// so GSAP's parallax scrub silently does nothing.
<div ref={el} style={{ animation: "rise-in 0.7s both" }}>
```

A CSS animation with `fill-mode: both` (or `forwards`) keeps applying its final `transform` after it finishes, which overrides the inline `transform` GSAP writes every tick. The parallax never moves.

Fix: put the mount animation on a parent, let GSAP own the child.

```tsx
<div style={{ animation: "rise-in 0.7s both" }}>
  <div ref={el}> {/* GSAP scrubs this one */}
```

### Trap 2: a `transition` (especially on `transform`) on a GSAP-tweened element

```tsx
// WRONG — every GSAP tick gets wrapped in a 500ms CSS transition.
// The reveal smears and the hover lift fights the leftover transform.
<div className="transition-all duration-500 hover:-translate-y-1">
```

When GSAP tweens `transform` (or `opacity`), a CSS transition on the same property re-transitions every frame GSAP writes, producing lag and a mushy reveal.

Fixes, in order of preference:

1. Scope the hover to non-transform properties — the "increased blur" glass hover is really a background/opacity shift:
   ```tsx
   className="transition-colors duration-300 hover:bg-white/15"
   ```
2. Move the transform hover to a child element GSAP never touches.
3. Let GSAP own the hover too (mouseenter/mouseleave tweens) — heavier, only when you need spring physics.

### The rule

- CSS `@keyframes` / Motion for mount entrance, GSAP for scroll reveals — on DIFFERENT elements.
- If an element is a GSAP target, it gets NO CSS `animation` and no `transition` on `transform`/`opacity`.
- Hover on a GSAP target: transition colors/opacity only, or move the transform to a child.

## Reduced motion

Always respect the user's motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

For GSAP specifically, check the media query in JS:

```js
const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
if (mq.matches) {
  // Skip GSAP animations entirely
  gsap.set([".feature-card", ".section-heading"], { opacity: 1, y: 0 })
  return
}
```

The Motion/React equivalent has its own SSR trap — gating `initial`/`animate`/`whileInView` on `useReducedMotion()` blanks the page for reduced-motion users. Wrap the app in `<MotionConfig reducedMotion="user">` at the root instead (see `motion.md` → THE REDUCED-MOTION GATE).
