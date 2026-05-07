"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Open Source Contributor",
    organization: "Kubeflow",
    description:
      "Contributing to Katib (AutoML) and Docs-Agent. Fixed HuggingFace trainer startup crashes, ensured backward compatibility for empty payloads, and optimized backend retrieval for the documentation agent.",
  },
  {
    title: "Contributor",
    organization: "DSC Winter of Code",
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

        <div className="grid grid-cols-1 gap-4">
          {experiences.map((exp, i) => (
            <div 
              key={i} 
              className="exp-item group relative overflow-hidden rounded-[var(--radius-uber)] bg-[var(--bg-primary)] p-8 md:p-12 border border-[var(--border-color)] hover:border-black/10 transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="md:w-1/3">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                    {exp.organization}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {exp.title}
                  </h3>
                </div>
                <div className="md:w-2/3 md:pl-16 border-l border-[var(--border-color)] group-hover:border-black/10 transition-colors duration-500">
                  <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--text-secondary)] group-hover:text-black transition-colors duration-500">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
