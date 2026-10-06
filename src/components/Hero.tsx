"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useVelocity, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import TypewriterEffect from "@/components/TypewriterEffect";
import Magnetic from "@/components/Magnetic";

export default function Hero({ preloaderComplete = true }: { preloaderComplete?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skewY = useTransform(smoothVelocity, [-1000, 1000], shouldReduceMotion ? ["0deg", "0deg"] : ["-2deg", "2deg"]);

  const heroScale = useTransform(scrollY, [0, 800], shouldReduceMotion ? [1, 1] : [1, 0.9]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const heroBlur = useTransform(scrollY, [0, 800], shouldReduceMotion ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(10px)"]);
  
  // Depth Layers
  const bgY = useTransform(scrollY, [0, 800], shouldReduceMotion ? [0, 0] : [0, 200]);
  const ambientY = useTransform(scrollY, [0, 800], shouldReduceMotion ? [0, 0] : [0, 100]);
  const ambientOpacity = useTransform(scrollY, [0, 500], [0.5, 0]);
  const headlineZ = useTransform(scrollY, [0, 800], shouldReduceMotion ? [0, 0] : [0, -200]);
  const headlineOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 800], shouldReduceMotion ? [0, 0] : [0, 50]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const ctaY = useTransform(scrollY, [0, 800], shouldReduceMotion ? [0, 0] : [0, -50]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, springSoft);
  const springY = useSpring(mouseY, springSoft);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 15);
    mouseY.set((clientY / innerHeight - 0.5) * -15);
  };

  const containerVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: easeApple,
        staggerChildren: staggerMedium,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: easeApple }
    }
  };

  return (
    <section
      aria-busy={!preloaderComplete}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[100svh] bg-[var(--bg-primary)] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-6 md:py-8"
    >
      <motion.div 
        ref={containerRef}
        initial="hidden"
        animate={preloaderComplete ? "visible" : "hidden"}
        variants={containerVariants}
        style={{ scale: heroScale, opacity: heroOpacity, filter: heroBlur, perspective: "1000px" }}
        className="hero-container relative w-full max-w-[1600px] min-h-[calc(100svh-4rem)] py-12 md:py-0 rounded-[var(--radius-uber)] overflow-hidden bg-[var(--bg-secondary)] flex items-center justify-center origin-bottom transform-gpu shadow-2xl"
      >
        {/* BACKGROUND LAYER */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.03),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]"></div>
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent z-10" />
        </motion.div>

        {/* AMBIENT LIGHT LAYER */}
        <motion.div style={{ y: ambientY, opacity: ambientOpacity }} className="absolute top-0 w-full h-[500px] pointer-events-none z-0">
          <div className="w-full h-full bg-gradient-to-b from-black/5 dark:from-white/5 to-transparent blur-3xl opacity-80" />
        </motion.div>

        <div className="hero-content relative z-20 w-full max-w-6xl text-center px-4 sm:px-6">

          {/* HEADLINE LAYER */}
          <motion.h1 
            variants={itemVariants}
            style={{ 
              z: headlineZ,
              opacity: headlineOpacity,
              rotateX: springY,
              rotateY: springX,
              skewY: skewY
            }}
            className="text-[var(--text-primary)] text-[clamp(2.2rem,10vw,6.5rem)] font-semibold tracking-[-0.04em] leading-[0.9] mb-6 sm:mb-8 break-words origin-center transform-gpu"
          >
            Ayush Gupta
          </motion.h1>

          {/* SUPPORTING TEXT LAYER */}
          <motion.div style={{ y: textY, opacity: textOpacity }} className="transform-gpu">
            <motion.p variants={itemVariants} className="mx-auto max-w-4xl text-[var(--text-secondary)] text-[clamp(1rem,4vw,1.4rem)] font-light leading-relaxed mb-10 sm:mb-12">
              <TypewriterEffect text="Software Engineer specializing in Distributed Systems, GenAI APIs, and High-Concurrency Infrastructure." delay={1} />
            </motion.p>
          </motion.div>

          {/* CTA LAYER */}
          <motion.div style={{ y: ctaY }} className="transform-gpu">
            
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto sm:max-w-none">
                <Magnetic>
                  <Link
                    href="#projects"
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-8 py-4 text-[var(--bg-primary)] text-base sm:text-lg font-semibold transition-all hover:scale-105 active:scale-95"
                  >
                    View Selected Work <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]/50 backdrop-blur-md px-8 py-4 text-[var(--text-primary)] text-base sm:text-lg font-semibold transition-all hover:bg-[var(--text-secondary)]/10"
                  >
                    Download Resume <Download className="h-5 w-5" />
                  </a>
                </Magnetic>
              </div>
              <div className="flex items-center gap-6 mt-2 opacity-70">
                <a href="https://github.com/Ayush-kathil" target="_blank" className="hover:text-blue-500 transition-colors uppercase tracking-widest text-[10px] font-semibold">GitHub</a>
                <a href="https://linkedin.com/in/ayush-gupta-2b7405256" target="_blank" className="hover:text-blue-500 transition-colors uppercase tracking-widest text-[10px] font-semibold">LinkedIn</a>
                <a href="mailto:kathilshiva@gmail.com" className="hover:text-blue-500 transition-colors uppercase tracking-widest text-[10px] font-semibold">Email</a>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* MOUSE SCROLL INDICATOR */}
        <motion.div variants={itemVariants} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--text-primary)] to-transparent" />
          <span className="text-[var(--text-primary)] text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
