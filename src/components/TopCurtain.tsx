"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function TopCurtain() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hang down for 10 seconds, then retract
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: easeApple } }}
          transition={{ duration: 1.2, ease: easeApple, delay: 1 }}
          className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
        >
          {/* Half moon shape hanging from the top */}
          <div className="bg-black text-white px-8 sm:px-12 py-5 rounded-b-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center justify-center gap-4 border-b border-l border-r border-white/10 backdrop-blur-2xl">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-white/90 whitespace-nowrap">
              SWE Intern @ HackerRank • Kubeflow Contributor
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
