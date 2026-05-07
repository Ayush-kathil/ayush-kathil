"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/TextReveal";
import { projectsData } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
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
    <section id="projects" ref={containerRef} className="w-full bg-[var(--bg-primary)] px-4 sm:px-6 md:px-12 py-24">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--text-secondary)] mb-4 font-semibold uppercase tracking-widest">Systems Engineering</p>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] uppercase">
              <TextReveal>Project Portfolio</TextReveal>
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] font-light max-w-md text-lg">
            A focused collection of systems architecture, machine learning infrastructure, and production-ready tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, i) => (
            <div 
              key={project.slug}
              className="project-card group relative flex flex-col justify-between bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[var(--radius-uber)] p-8 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="px-3 py-1 rounded-full border border-[var(--border-color)] text-[10px] uppercase tracking-widest font-semibold text-[var(--text-secondary)] bg-white">
                    {project.role}
                  </span>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-black transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-black transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-black transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-8 line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-medium uppercase tracking-wider text-black/40 dark:text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--border-color)] flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  {project.outcomes.slice(0, 2).map((outcome, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] font-semibold text-black/60 dark:text-white/80">
                      <div className="w-1 h-1 rounded-full bg-black/20 dark:bg-white/20" />
                      {outcome}
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:gap-3 transition-all"
                >
                  Case Study <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
