# MOTION AND INTERACTION AUDIT

## 1. Baseline Framework
* **Engine:** Framer Motion (v12)
* **Smooth Scroll:** Lenis React (^1.3.17)
* **Configuration:** Centralized at `src/lib/motion.ts` (exports standard `easeApple`, `springSoft`, etc.)

## 2. Scroll Integration (Lenis)
* **Setup:** Confirmed `ReactLenis` is instantiated exactly once in `src/components/SmoothScroll.tsx` (wrapped around `layout.tsx`).
* **Conflict Prevention:** Lenis leverages `requestAnimationFrame` seamlessly with Framer Motion. `useScroll()` natively maps the window coordinate position without duplicated `scroll` event listeners.
* **Apple Scroll Inertia:** Implemented via `lerp: 0.05` and `duration: 1.8`. Touch devices successfully revert to native physics (`smoothTouch: false`), preventing trackpad heuristic bugs on iOS/macOS.

## 3. High-Value Motion Discoveries & Fixes
* **MacReveal.tsx Defect (Fixed):** The `MacReveal` wrapper previously forced `rotateX(15deg)`, `scale(0.95)`, and `filter: brightness()` mapped to scroll on *every single section* of the page simultaneously. 
  - **Resolution:** Purged the expensive `brightness` filter. Stripped the `rotateX` to prevent deep 3D stacking contexts on mobile. Refactored to a minimal, elegant `y` translation (0-60px) and `opacity` transition. Implemented `useReducedMotion` fallback to bypass completely for accessibility.
* **Preloader UX (Fixed):** The application locked the viewport for over 2.5 seconds on mount while iterating an arbitrary loop. 
  - **Resolution:** Slashed the animation delay constraints by 80%. Bound the entire Preloader unmount directly to `useReducedMotion` to grant instant access to visually sensitive users.
* **FeaturedProjects Tilt (Retained):** The mouse-linked `TiltCard` was retained, but its rotation was restricted to a conservative ±5° max to reflect premium, deliberate motion rather than erratic "awwwards-style" flipping.

## 4. Accessibility
* Every dynamic `useTransform` mapped to scroll velocity, pointer position, or scroll progress now accurately interrogates the user's OS preference (`useReducedMotion`).
* The custom cursor (`CustomCursor.tsx`) detects touch hardware (`@media (hover: none) and (pointer: coarse)`) and instantly yields back to the native mobile viewport without rendering a stuck floating div.
