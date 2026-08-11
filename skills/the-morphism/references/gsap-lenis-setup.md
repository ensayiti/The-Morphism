# GSAP + Lenis Setup for Next.js (Tailwind v4)

## Install

```bash
pnpm add gsap lenis
```

## LenisProvider component

Create `components/lenis-provider.tsx`:

```tsx
"use client"

import { useEffect, useRef, createContext, useContext } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type LenisContextValue = Lenis | null
const LenisContext = createContext<LenisContextValue>(null)

export function useLenis(): LenisContextValue {
  return useContext(LenisContext)
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number>(0)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    // Bridge Lenis scroll to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    // Drive Lenis via requestAnimationFrame -- NOT gsap.ticker.
    // PITFALL: gsap.ticker passes RELATIVE time (seconds since start),
    // but Lenis.raf() expects ABSOLUTE timestamps (performance.now()).
    // Using gsap.ticker causes Lenis to compute broken delta times
    // and scrolling silently freezes. Use raw RAF instead.
    function raf(time: number) {
      lenis.raf(time)
      rafIdRef.current = requestAnimationFrame(raf)
    }
    rafIdRef.current = requestAnimationFrame(raf)

    // Pause for reduced-motion users
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) lenis.stop()
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) lenis.stop()
      else lenis.start()
    }
    mq.addEventListener("change", handleMotionChange)

    return () => {
      mq.removeEventListener("change", handleMotionChange)
      cancelAnimationFrame(rafIdRef.current)
      // Kill ScrollTriggers before destroying Lenis (they reference Lenis scroll positions)
      ScrollTrigger.getAll().forEach((st) => st.kill())
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  )
}
```

## Wire into root layout

In `app/layout.tsx`:

```tsx
import { LenisProvider } from "@/components/lenis-provider"

// Inside <body>:
<body>
  <LenisProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </LenisProvider>
</body>
```

## GSAP ScrollTrigger React pattern

The recommended pattern for scroll-driven reveals in a page component:

```tsx
"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "motion/react"  // still used for mount animations

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

## The split rule

- **motion/react** for on-mount entrance animations: hero headlines, nav, initial load fades
- **GSAP + ScrollTrigger** for scroll-driven reveals: features grids, CTAs, demo panels, parallax, staggered card entrances

This split keeps mount animations simple (motion's declarative API) while giving scroll animations Lenis-synced precision (ScrollTrigger + `lenis.on('scroll', ScrollTrigger.update)` bridge).
