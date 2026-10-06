import { Variants } from "framer-motion";

// ============================================================================
// EASING CURVES
// ============================================================================
export const easeApple = [0.16, 1, 0.3, 1] as const;
export const easeSmooth = [0.25, 1, 0.5, 1] as const;
export const easeStandard = [0.4, 0, 0.2, 1] as const;

// ============================================================================
// DURATIONS
// ============================================================================
export const durationFast = 0.3;
export const durationMedium = 0.65;
export const durationSlow = 1.0;

// ============================================================================
// STAGGERS
// ============================================================================
export const staggerFast = 0.08;
export const staggerMedium = 0.15;
export const staggerSlow = 0.2;

// ============================================================================
// SPRINGS
// ============================================================================
export const springSoft = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as any;
export const springMagnetic = { type: "spring", stiffness: 350, damping: 25, mass: 0.5 } as any;
export const springSnappy = { type: "spring", stiffness: 400, damping: 30, mass: 1 } as any;

// ============================================================================
// VIEWPORT CONFIG
// ============================================================================
export const viewportOneShot = { once: true, margin: "-100px" };

// ============================================================================
// REUSABLE VARIANTS
// ============================================================================
export const staggerContainer = (stagger: number = staggerMedium): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

export const fadeUp = (yOffset: number = 40, duration: number = durationSlow): Variants => ({
  hidden: { y: yOffset, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration, ease: easeApple } 
  },
});

export const fadeDown = (yOffset: number = -40, duration: number = durationSlow): Variants => ({
  hidden: { y: yOffset, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration, ease: easeApple } 
  },
});

export const fadeLeft = (xOffset: number = 40, duration: number = durationSlow): Variants => ({
  hidden: { x: xOffset, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration, ease: easeApple } 
  },
});

export const fadeRight = (xOffset: number = -40, duration: number = durationSlow): Variants => ({
  hidden: { x: xOffset, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration, ease: easeApple } 
  },
});

export const scaleReveal = (startScale: number = 0.9, duration: number = durationMedium): Variants => ({
  hidden: { scale: startScale, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration, ease: easeApple } 
  },
});
