"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  {
    title: "Gen AI & RAG",
    body: "Architecting Retrieval-Augmented Generation systems with vector embeddings, semantic search, and prompt engineering.",
  },
  {
    title: "ML Infrastructure",
    body: "Optimizing training pipelines and serving infrastructure for large-scale models using Kubernetes and Kubeflow.",
  },
  {
    title: "Backend Systems",
    body: "Designing distributed architectures with a focus on high throughput, low latency, and efficient data processing.",
  },
  {
    title: "Computer Vision",
    body: "Implementing real-time spatial and temporal analysis systems using deep learning for surveillance and safety.",
  },
];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="about-card rounded-[var(--radius-uber)] bg-black p-10 md:p-14 text-white flex flex-col justify-between">
            <div>
              <p className="text-white/40 uppercase tracking-widest text-[10px] mb-12 font-semibold">Executive Summary</p>
              <p className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-light leading-[1.1] mb-10">
                I am Ayush Gupta, a Software Engineer specialized in building production-ready <span className="text-white font-medium">Gen AI systems</span> and high-concurrency backend infrastructure.
              </p>
              <p className="text-lg text-white/50 font-light leading-relaxed mb-12">
                Currently engineering distributed RAG systems and contributing to Kubeflow core. I solve complex scaling challenges at the intersection of systems engineering and large language models.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2 font-semibold">B.Tech Graduation</p>
                <p className="text-xl font-light">2028 @ VIT Bhopal</p>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2 font-semibold">Primary Target</p>
                <p className="text-xl font-light">FAANG Engineering</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((item) => (
              <div key={item.title} className="about-card rounded-[var(--radius-uber)] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 flex flex-col justify-between hover:bg-white hover:border-black/5 transition-all duration-500">
                <span className="w-fit rounded-full border border-[var(--border-color)] px-3 py-1 text-[9px] uppercase tracking-widest text-[var(--text-secondary)] font-semibold mb-8">
                  {item.title}
                </span>
                <p className="text-lg md:text-xl font-light leading-snug text-[var(--text-primary)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNICAL STACK MARQUEE */}
        <div className="mt-24 pt-12 border-t border-[var(--border-color)] overflow-hidden">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-8 font-semibold text-center">Engineered With</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {["LangChain", "Kubernetes", "PyTorch", "gRPC", "Go", "Next.js", "TypeScript", "FAISS", "Pinecone", "Docker", "Redis"].map((skill) => (
              <span key={skill} className="text-xl md:text-2xl font-semibold tracking-tighter grayscale hover:grayscale-0 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
