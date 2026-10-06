"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import { useRef, useEffect } from "react";
import { Users, Settings } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";


const responsibilities = [
  {
    title: "Core Member - Technical Team",
    organization: "TechnoMech Club, VIT Bhopal",
    icon: Settings,
    description: "Architected and deployed internal campus tools for 5,000+ users. Improved system load times by 82% and established strict version control practices as a lead technical member.",
  },
  {
    title: "Core Member - Technical Team",
    organization: "MATRIX Club, VIT Bhopal",
    icon: Users,
    description: "Collaborate with team members to organize coding competitions and technical workshops. Mentor junior students in Python programming and Data Structures.",
  },
];

export default function Responsibility() {
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
    hidden: { x: -40, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: easeApple } 
    },
  };

  return (
    <section id="responsibility" ref={containerRef} className="w-full bg-[var(--bg-primary)] px-4 sm:px-6 md:px-12 py-24 rounded-[var(--radius-uber)] -mt-12 relative z-40">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16 md:text-right">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--text-secondary)] mb-4 font-semibold uppercase tracking-widest">Impact</p>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] uppercase">
            <TextReveal>Leadership & Roles</TextReveal>
          </h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col gap-6"
        >
          {responsibilities.map((resp, i) => {
            const Icon = resp.icon;
            return (
              <motion.div 
                variants={itemVariants}
                key={i} 
                className="resp-item group flex flex-col md:flex-row gap-6 md:gap-8 md:items-center bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6 sm:p-12 rounded-[var(--radius-uber)] hover:bg-white dark:hover:bg-[#0a0a0a] transition-all duration-500"
              >
                <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-black border border-[var(--border-color)] flex items-center justify-center text-black dark:text-white group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                    {resp.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-widest mb-4 transition-colors duration-500">
                    {resp.organization}
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed group-hover:text-black dark:group-hover:text-white transition-colors duration-500 max-w-5xl">
                    {resp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

