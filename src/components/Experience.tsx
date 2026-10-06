"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import TextReveal from "@/components/TextReveal";


function ExperienceCard({ exp, index, variants }: { exp: any, index: number, variants?: any }) {
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
    <motion.div 
      variants={variants}
      className="exp-item group relative rounded-[var(--radius-uber)] bg-[#0A0F1C] p-6 sm:p-12 border border-white/10 shadow-[0_20px_40px_rgba(10,15,28,0.2)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[var(--radius-uber)] opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.2),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
        <div className="md:w-[40%]">
          <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-blue-400 mb-2">
            {exp.organization}
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white group-hover:text-blue-50 transition-colors duration-500">
            {exp.title}
          </h3>
        </div>
        <div className="md:w-[60%] md:pl-12 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 group-hover:border-blue-500/30 transition-colors duration-500">
          <ul className="space-y-4">
            {exp.descriptions.map((desc: string, i: number) => (
              <li key={i} className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/60 group-hover:text-white/90 transition-colors duration-500 flex items-start gap-3">
                <span className="text-blue-500/50 mt-1.5 text-xs">•</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

const experiences = [
  {
    title: "Open-Source Contributor",
    organization: "Kubeflow Pipelines (Google / Linux Foundation)",
    descriptions: [
      "Patched a critical Denial of Service (DoS) vulnerability in the Go backend by enforcing strict byte limits on artifact uploads to prevent zip bomb crashes [PR #14171].",
      "Secured the metrics parsing engine against unbounded memory exploits by implementing precise traversal budgets, eliminating Out-of-Memory (OOM) attacks [PR #14186]."
    ]
  },
  {
    title: "Open-Source Contributor",
    organization: "DevPath",
    descriptions: [
      "Fixed a major bug causing 500 Internal Server Errors by adding safe JSON data parsing, ensuring the backend doesn't crash when handling broken links [PR #765].",
      "Improved the recommendation algorithm using partial string matching for better search accuracy, expanded the database with 15 new projects, and fixed failing CI/CD tests [PR #804]."
    ]
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerSlow,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: easeApple } 
    },
  };

  return (
    <section id="experience" ref={containerRef} className="w-full bg-[var(--bg-secondary)] px-4 sm:px-6 md:px-12 py-24 rounded-[var(--radius-uber)] -mt-12 relative z-30 border-t border-[var(--border-color)]">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--text-secondary)] mb-4 font-semibold uppercase tracking-widest">Technical Track Record</p>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] uppercase">
            <TextReveal>Work Experience</TextReveal>
          </h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6"
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

