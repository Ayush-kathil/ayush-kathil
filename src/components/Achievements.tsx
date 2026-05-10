"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Award, Code2, GraduationCap } from "lucide-react";
import TextReveal from "@/components/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: "Open Source Architect",
    organization: "Kubeflow",
    icon: Code2,
    description: "Successfully merged core architecture and bug-fix pull requests into Kubeflow (Katib and Docs-Agent), impacting a global ML infrastructure platform.",
  },
  {
    title: "DSC Winter of Code 2026",
    organization: "Google Developer Student Clubs",
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
          {achievements.map((ach, i) => {
            const Icon = ach.icon;
            return (
              <div 
                key={i} 
                className="ach-card bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6 sm:p-10 rounded-[var(--radius-uber)] hover:bg-white dark:hover:bg-[#0a0a0a] group transition-all duration-500"
              >
                <div className="flex flex-col gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-black border border-[var(--border-color)] flex items-center justify-center text-black dark:text-white group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                      {ach.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-4 transition-colors duration-500">
                      {ach.organization}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] font-light leading-relaxed group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                      {ach.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
