"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MacReveal({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 60%"] // Starts when top hits bottom, finishes when top hits 60% down the screen
  });

  // Apple-style scrubbed 3D transformations
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const brightness = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div ref={ref} className={`perspective-[1500px] ${className}`}>
      <motion.div
        style={{
          opacity,
          y,
          rotateX,
          scale,
          filter: useTransform(brightness, v => v === 1 ? "none" : `brightness(${v})`),
          willChange: "transform, opacity, filter"
        }}
        className="w-full h-full origin-bottom"
      >
        {children}
      </motion.div>
    </div>
  );
}
