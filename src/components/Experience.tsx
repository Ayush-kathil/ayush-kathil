"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import TextReveal from "@/components/TextReveal";

gsap.registerPlugin(ScrollTrigger);

function ExperienceCard({ exp, index }: { exp: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (isTouch) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className="exp-item group relative rounded-[var(--radius-uber)] bg-[#050505] p-6 sm:p-12 border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[var(--radius-uber)] opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
        <div className="md:w-1/3">
          <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-blue-400 mb-2">
            {exp.organization}
          </p>
          <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold tracking-tight text-white group-hover:text-blue-50 transition-colors duration-500">
            {exp.title}
          </h3>
        </div>
        <div className="md:w-2/3 md:pl-16 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 group-hover:border-blue-500/30 transition-colors duration-500">
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-white/60 group-hover:text-white/90 transition-colors duration-500">
            {exp.description}
          </p>
        </div>
      </div>
    </div>
  );
}

const experiences = [
  {
    title: "Open Source Contributor",
    organization: "Kubeflow",
    description:
      "Contributing to Katib (AutoML) and Docs-Agent. Fixed HuggingFace trainer startup crashes, ensured backward compatibility for empty payloads, and optimized backend retrieval for the documentation agent.",
  },
  {
    title: "Contributor",
    organization: "GSSOC",
    description:
      "Contributed to various open-source repositories, focusing on bug fixes, code maintainability, and passing automated CI/CD checks during technical reviews.",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="w-full bg-[var(--bg-secondary)] px-4 sm:px-6 md:px-12 py-24 rounded-[var(--radius-uber)] -mt-12 relative z-30 border-t border-[var(--border-color)]">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--text-secondary)] mb-4 font-semibold uppercase tracking-widest">Technical Track Record</p>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] uppercase">
            <TextReveal>Work Experience</TextReveal>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
