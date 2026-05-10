"use client";

import { ReactLenis } from "lenis/react";
import { useMemo } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const options = useMemo(() => {
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const reducedMotionLite = document.documentElement.classList.contains("reduced-motion-lite");

      if (prefersReducedMotion || reducedMotionLite) {
        return { smoothWheel: false, smoothTouch: false, duration: 0 };
      }
    }

    return {
      lerp: 0.05,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      smoothTouch: true,
    };
  }, []);

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
