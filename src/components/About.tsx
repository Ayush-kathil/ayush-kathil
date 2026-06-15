"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/TextReveal";
import TextScrub from "@/components/TextScrub";

gsap.registerPlugin(ScrollTrigger);



export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="w-full bg-[var(--bg-primary)] px-4 sm:px-6 md:px-12 py-24 border-t border-[var(--border-color)]">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--text-secondary)] mb-4 font-semibold uppercase tracking-widest">Professional Overview</p>
          <h2 className="text-[clamp(2.5rem,8.5vw,6.5rem)] font-semibold tracking-[-0.05em] leading-[0.9] uppercase">
            <TextReveal>Systems Engineering & AI</TextReveal>
          </h2>
        </div>

        <div className="flex flex-col gap-6 items-stretch">
          <div className="about-card rounded-[var(--radius-uber)] bg-black p-8 sm:p-14 text-white flex flex-col justify-between w-full max-w-4xl mx-auto">
            <div>
              <p className="text-white/40 uppercase tracking-widest text-[9px] sm:text-[10px] mb-8 sm:mb-12 font-semibold">Executive Summary</p>
              <TextScrub 
                text="I am Ayush Gupta, a Software Engineer specialized in building production-ready Gen AI systems and high-concurrency backend infrastructure." 
                className="text-[clamp(1.5rem,5vw,2.5rem)] font-light leading-[1.2] mb-8 sm:mb-10"
              />
              <p className="text-base sm:text-lg text-white/50 font-light leading-relaxed mb-10 sm:mb-12 max-w-2xl">
                Currently engineering distributed RAG systems and contributing to Kubeflow core. I solve complex scaling challenges at the intersection of systems engineering and large language models.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-white/10 mt-12">
              <div>
                <p className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-widest mb-2 font-semibold">B.Tech Graduation</p>
                <p className="text-lg sm:text-xl font-light">2028 @ VIT Bhopal</p>
              </div>
              <div>
                <p className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-widest mb-2 font-semibold">Primary Target</p>
                <p className="text-lg sm:text-xl font-light">FAANG Engineering</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
