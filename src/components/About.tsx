"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import { useRef } from "react";
import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import TextScrub from "@/components/TextScrub";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="about" ref={sectionRef} className="w-full bg-[var(--bg-primary)] px-4 sm:px-6 md:px-12 py-24 border-t border-[var(--border-color)]">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--text-secondary)] mb-4 font-semibold uppercase tracking-widest">Professional Overview</p>
          <h2 className="text-[clamp(2.5rem,8.5vw,6.5rem)] font-semibold tracking-[-0.05em] leading-[0.9] uppercase">
            <TextReveal>Systems Engineering & AI</TextReveal>
          </h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col gap-6 items-stretch"
        >
          <motion.div variants={itemVariants} className="about-card relative rounded-[var(--radius-uber)] bg-[#0A0F1C] border border-white/10 p-8 sm:p-14 text-white flex flex-col justify-between w-full max-w-4xl mx-auto overflow-hidden shadow-2xl">
            {/* Subtle glow effect */}
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-500/20 to-purple-500/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10">
              <p className="text-white/50 uppercase tracking-widest text-[9px] sm:text-[10px] mb-8 sm:mb-12 font-semibold">Executive Summary</p>
              <TextScrub 
                text="I am Ayush Gupta, a Software Engineering Intern at HackerRank and Open-Source Contributor to Google Kubeflow." 
                className="text-white text-[clamp(1.5rem,5vw,2.5rem)] font-light leading-[1.2] mb-8 sm:mb-10"
              />
              <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed mb-10 sm:mb-12 max-w-2xl">
                I specialize in distributed systems, machine learning engineering, and full-stack development. Recently, I patched critical DoS vulnerabilities in Kubeflow's Go backend and published an Indian Patent (No. 202621077168) for data accessibility in storage devices. 
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-white/10 mt-12">
              <div>
                <p className="text-white/50 text-[9px] sm:text-[10px] uppercase tracking-widest mb-2 font-semibold">B.Tech Graduation</p>
                <p className="text-lg sm:text-xl font-light text-white">2028 @ VIT Bhopal (7.96 CGPA)</p>
              </div>
              <div>
                <p className="text-white/50 text-[9px] sm:text-[10px] uppercase tracking-widest mb-2 font-semibold">Contact</p>
                <p className="text-lg sm:text-xl font-light text-white">kathilshiva@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}

