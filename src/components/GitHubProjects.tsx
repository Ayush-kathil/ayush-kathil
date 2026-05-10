"use client";

import { useEffect, useRef } from "react";
import { Github, ArrowUpRight, Code } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const githubRepos = [
  {
    name: "ai-surveillance",
    desc: "Real-time surveillance system with CNN/RNN for anomaly detection.",
    stars: "12",
    tech: "Python • PyTorch",
    link: "https://github.com/Ayush-kathil/ai-surveillance",
  },
  {
    name: "kubeflow-contrib",
    desc: "Active contributions to Katib and Docs-Agent components.",
    stars: "5k+",
    tech: "Go • Python",
    link: "https://github.com/kubeflow/kubeflow",
  },
  {
    name: "herway-nav",
    desc: "Predictive safe route navigation algorithm for urban environments.",
    stars: "8",
    tech: "TypeScript • Node.js",
    link: "https://github.com/Ayush-kathil/herway",
  },
];

export default function GitHubProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".repo-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[var(--bg-primary)] px-4 sm:px-6 md:px-12 py-32">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-secondary)] mb-4">Open Source</p>
          <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] uppercase">
            <TextReveal>GitHub Activity</TextReveal>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubRepos.map((repo, i) => (
            <a 
              key={i} 
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="repo-card group flex flex-col justify-between p-8 sm:p-10 rounded-[var(--radius-uber)] border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:bg-black dark:hover:bg-white transition-all duration-500 min-h-[320px] sm:min-h-[400px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-black border border-[var(--border-color)] flex items-center justify-center text-black dark:text-white">
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--text-secondary)] group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-white dark:group-hover:text-black transition-colors">
                  {repo.name}
                </h3>
                <p className="text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed group-hover:text-white/70 dark:group-hover:text-black/70 transition-colors">
                  {repo.desc}
                </p>
              </div>
              
              <div className="pt-8 border-t border-[var(--border-color)] group-hover:border-white/10 dark:group-hover:border-black/10 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-white/60 dark:group-hover:text-black/60">
                  {repo.tech}
                </span>
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-[var(--text-secondary)] group-hover:text-white/60 dark:group-hover:text-black/60">
                  <Code className="w-4 h-4" />
                  {repo.stars}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
