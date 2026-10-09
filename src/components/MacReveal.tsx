"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function MacReveal({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className={className}>
      <noscript>
        <style>{`.mac-reveal { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>
      <motion.div
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 60,
          scale: shouldReduceMotion ? 1 : 0.98
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          willChange: shouldReduceMotion ? "opacity" : "transform, opacity"
        }}
        className="mac-reveal w-full h-full origin-bottom"
      >
        {children}
      </motion.div>
    </div>
  );
}
