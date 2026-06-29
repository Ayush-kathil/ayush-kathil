"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Trophy, Award, Code2, GraduationCap } from "lucide-react";
import TextReveal from "@/components/TextReveal";

gsap.registerPlugin(ScrollTrigger);

function AchievementCard({ ach }: { ach: any }) {
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

  const Icon = ach.icon;

  return (
    <div 
      className="ach-card relative overflow-hidden bg-[#050505] border border-white/10 p-6 sm:p-10 rounded-[var(--radius-uber)] group transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[var(--radius-uber)] opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col gap-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all duration-500 shadow-lg">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white transition-colors duration-500">
            {ach.title}
          </h3>
          <p className="text-[10px] sm:text-xs font-semibold text-purple-400 uppercase tracking-wider mb-4 transition-colors duration-500">
            {ach.organization}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed group-hover:text-white/90 transition-colors duration-500">
            {ach.description}
          </p>
        </div>
      </div>
    </div>
  );
}

const achievements = [
  {
    title: "Open Source Architect",
    organization: "Kubeflow",
    icon: Code2,
    description: "Successfully merged core architecture and bug-fix pull requests into Kubeflow (Katib and Docs-Agent), impacting a global ML infrastructure platform.",
  },
  {
    title: "GSSOC 2026",
    organization: "GirlScript Summer of Code",
    icon: Trophy,
    description: "Selected from a highly competitive applicant pool to maintain and scale community-driven open-source repositories.",
  },
  {
    title: "#T20DSAChallenge Competitor",
    organization: "Coding Challenge",
    icon: Award,
    description: "Completed an intensive data structures and algorithms challenge, demonstrating proficiency in complex problem-solving.",
  },
  {
    title: "Technical Certifications",
    organization: "Coursera & Google Cloud",
    icon: GraduationCap,
    description: "Applied Machine Learning in Python (U. Michigan) & Introduction to Generative AI (Google Cloud Skills Boost).",
  },
];

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ach-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
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
    <section id="achievements" ref={containerRef} className="w-full bg-[var(--bg-primary)] px-4 sm:px-6 md:px-12 py-24">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--text-secondary)] mb-4 font-semibold uppercase tracking-widest">Recognition</p>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] uppercase">
            <TextReveal>Technical Recognition</TextReveal>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, i) => (
            <AchievementCard key={i} ach={ach} />
          ))}
        </div>
      </div>
    </section>
  );
}
