"use client";

import { useParams, useRouter } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft, Github, ExternalLink, ShieldCheck, Zap, Layers } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = projectsData.find((p) => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "expo.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] p-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 uppercase tracking-tighter">404</h1>
          <p className="text-xl font-light text-[var(--text-secondary)] mb-8">System node not found.</p>
          <button onClick={() => router.push("/")} className="px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-semibold">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)] pb-32">
      {/* HEADER NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 flex justify-between items-center pointer-events-none pr-24 sm:pr-28">
        <Link href="/#projects" className="pointer-events-auto flex items-center gap-2 group p-4 rounded-full bg-[var(--bg-secondary)] backdrop-blur-md border border-[var(--border-color)] shadow-sm hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold uppercase tracking-widest">Back</span>
        </Link>
        <div className="pointer-events-auto flex gap-3">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </a>
          )}
          {project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:scale-110 transition-transform shadow-sm">
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 px-6 sm:px-12 md:px-24 max-w-[1600px] mx-auto">
        <div className="reveal mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-secondary)] mb-6">
            {project.role}
          </span>
          <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-semibold tracking-[-0.05em] leading-[0.9] uppercase mb-8">
            {project.title}
          </h1>
          <p className="text-2xl md:text-3xl font-light text-[var(--text-secondary)] max-w-4xl leading-snug">
            {project.desc}
          </p>
        </div>

        {/* METRICS GRID */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 pt-12 border-t border-[var(--border-color)]">
          {project.outcomes.map((outcome, i) => (
            <div key={i} className="flex flex-col gap-6 p-10 rounded-[var(--radius-uber)] bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:bg-[var(--bg-primary)] hover:shadow-2xl transition-all duration-500 group">
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm text-[var(--text-primary)]">
                {i === 0 ? <Zap className="w-6 h-6" /> : i === 1 ? <ShieldCheck className="w-6 h-6" /> : <Layers className="w-6 h-6" />}
              </div>
              <p className="text-xl font-semibold uppercase tracking-tight text-[var(--text-primary)]">{outcome}</p>
            </div>
          ))}
        </div>

        {/* PROJECT IMAGE / PREVIEW */}
        <div className="reveal relative aspect-[16/9] w-full rounded-[var(--radius-uber)] bg-black overflow-hidden mb-32 group border border-[var(--border-color)] shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop";
              }}
            />
          )}
          <div className="absolute bottom-12 left-12 z-20">
             <p className="text-white/60 text-xs uppercase tracking-widest mb-2 font-semibold">Project Phase</p>
             <h3 className="text-white text-3xl font-semibold">Production Ready</h3>
          </div>
        </div>

        {/* CASE STUDY CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
          <div className="reveal space-y-20">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-8">System Deficit (The Problem)</p>
              <p className="text-3xl md:text-4xl font-light leading-[1.1] text-[var(--text-primary)]">{project.caseStudy.problem}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-8">Technical Architecture</p>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--text-secondary)]">{project.architecture}</p>
            </div>
          </div>

          <div className="reveal space-y-20 lg:pt-32">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-8">Engineering Response</p>
              <p className="text-xl md:text-2xl text-[var(--text-primary)] font-light leading-relaxed">{project.caseStudy.solution}</p>
            </div>
            <div className="p-12 md:p-16 rounded-[var(--radius-uber)] bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 mb-8">Verification & Impact</p>
              <p className="text-2xl md:text-3xl font-light leading-tight mb-12">{project.caseStudy.impact}</p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-5 py-2.5 rounded-full border border-[var(--bg-primary)]/20 bg-[var(--bg-primary)]/10 text-[10px] uppercase tracking-widest font-semibold hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)] transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="reveal mt-40 px-6 py-32 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] text-center">
         <p className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-10">Next Steps</p>
         <Link 
            href="/#contact" 
            className="text-[clamp(2.5rem,8vw,6rem)] font-semibold tracking-[-0.04em] uppercase hover:tracking-[0.05em] transition-all duration-700 block mb-12"
         >
           Let's build scale.
         </Link>
      </section>
    </main>
  );
}
