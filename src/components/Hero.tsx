"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";

export default function Hero({ preloaderComplete = true }: { preloaderComplete?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!preloaderComplete) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-content > *",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "expo.out",
        }
      );

      gsap.fromTo(
        ".hero-container",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "expo.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [preloaderComplete]);

  return (
    <section
      aria-busy={!preloaderComplete}
      className="relative w-full min-h-[100svh] bg-[var(--bg-primary)] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-6 md:py-8"
    >
      <div 
        ref={containerRef}
        className="hero-container relative w-full max-w-[1600px] min-h-[calc(100svh-4rem)] py-12 md:py-0 rounded-[var(--radius-uber)] overflow-hidden bg-black flex items-center justify-center"
      >
        {/* SUBTLE ARCHITECTURAL BACKGROUND */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="hero-content relative z-20 w-full max-w-6xl text-center px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">
              Kubeflow Core Contributor • Available for Internships
            </p>
          </div>
          
          <motion.h1 
            style={{ 
              scale: useTransform(scrollY, [0, 500], [1, 3.5]),
              y: useTransform(scrollY, [0, 500], [0, 150]),
              opacity: useTransform(scrollY, [0, 300, 500], [1, 0.8, 0])
            }}
            className="text-white text-[clamp(3rem,12vw,6.5rem)] font-semibold tracking-[-0.04em] leading-[0.9] mb-6 sm:mb-8 break-words origin-center z-50"
          >
            Ayush Gupta
          </motion.h1>

          <p className="mx-auto max-w-4xl text-white/60 text-[clamp(1rem,4vw,1.4rem)] font-light leading-relaxed mb-10 sm:mb-12">
            Software Engineer specializing in <span className="text-white font-medium">Scaling Intelligence with Distributed RAG Systems</span> and production-grade AI infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto sm:max-w-none">
            <Link
              href="#projects"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-black text-base sm:text-lg font-semibold transition-all hover:scale-105 active:scale-95"
            >
              View Projects <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/Ayush_Gupta_Resume.pdf"
              download="Ayush_Gupta_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 text-white text-base sm:text-lg font-semibold transition-all hover:bg-white/10"
            >
              Download CV <Download className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* MOUSE SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
          <span className="text-white text-[10px] uppercase tracking-widest">Scroll</span>
        </div>
      </div>
    </section>
  );
}