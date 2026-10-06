"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FooterCurve() {
  const { scrollYProgress } = useScroll();
  
  // As the user scrolls near the bottom (0.8 to 1.0), the curve flattens out
  // The path starts as a massive curve pushing up into the white layer, and flattens down.
  // We'll use a path filled with black (matching the footer) that sits at the bottom of the white section.
  
  const curvePath = useTransform(
    scrollYProgress, 
    [0.75, 1], 
    [
      "M 0 200 Q 500 -150 1000 200 L 1000 200 L 0 200 Z", // Aggressive Half Moon
      "M 0 200 Q 500 200 1000 200 L 1000 200 L 0 200 Z" // Flat
    ]
  );

  return (
    <div className="absolute left-0 bottom-0 w-full h-[250px] translate-y-[2px] pointer-events-none hidden md:block" style={{ zIndex: 100 }}>
      <svg 
        viewBox="0 0 1000 200" 
        preserveAspectRatio="none" 
        className="w-full h-full fill-black"
      >
        <motion.path d={curvePath} />
      </svg>
    </div>
  );
}
