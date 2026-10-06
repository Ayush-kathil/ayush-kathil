"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import { useRef, ReactElement } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic({ children }: { children: ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = springMagnetic;
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    mouseX.set(middleX * 0.2);
    mouseY.set(middleY * 0.2);
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="inline-block magnetic"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
