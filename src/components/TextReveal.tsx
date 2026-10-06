"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function TextReveal({ children, delay = 0 }: TextRevealProps) {
  // If children is a string, we split it into words for a premium staggered reveal
  if (typeof children === "string") {
    const words = children.split(" ");
    
    return (
      <span className="flex flex-wrap items-center">
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block mr-[0.25em]">
            <motion.span
              className="inline-block"
              initial={{ y: "100%", filter: "blur(8px)", opacity: 0 }}
              whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ 
                duration: 0.8, 
                ease: easeApple, 
                delay: delay + (i * 0.04) 
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  // Fallback for non-string, single block reveal
  return (
    <div className="overflow-hidden inline-block align-bottom w-full">
      <motion.div
        initial={{ y: "100%", filter: "blur(8px)", opacity: 0 }}
        whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: easeApple, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
