"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero({ preloaderComplete = true }: { preloaderComplete?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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
        className="hero-container relative w-full max-w-[1600px] h-[calc(100svh-3rem)] md:h-[calc(100svh-4rem)] rounded-[var(--radius-uber)] overflow-hidden bg-black flex items-center justify-center"
      >
        {/* SUBTLE ARCHITECTURAL BACKGROUND */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="hero-content relative z-20 w-full max-w-6xl text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">
              Kubeflow Core Contributor • Available for Internships
            </p>
          </div>
          
          <h1 className="text-white text-[clamp(2.5rem,9vw,6.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] mb-8">
            Building Scalable <br className="hidden md:block" /> AI Systems.
          </h1>

          <p className="mx-auto max-w-3xl text-white/60 text-[clamp(1.1rem,2.2vw,1.4rem)] font-light leading-relaxed mb-12">
            Software Engineer specializing in high-concurrency AI infrastructure <br className="hidden md:block" /> 
            and production-grade retrieval pipelines optimized for semantic precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-black text-lg font-semibold transition-all hover:scale-105 active:scale-95"
            >
              View Projects <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 text-white text-lg font-semibold transition-all hover:bg-white/10"
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