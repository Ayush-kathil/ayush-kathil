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
      lerp: 0.05, // Smoother, heavier feel
      duration: 1.8, // Slightly longer duration for the Apple inertia feel
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo.easeOut
      smoothWheel: true,
      wheelMultiplier: 1, // Native feeling multiplier
      touchMultiplier: 1.5,
      smoothTouch: false,
    };
  }, []);

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
