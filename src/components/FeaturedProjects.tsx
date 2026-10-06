"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Maximize2, X } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, AnimatePresence, useReducedMotion } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import { projectsData } from "@/data/projects";

function TiltCard({ project, children, index, variants }: { project: any, children: React.ReactNode, index: number, variants?: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);

  const mouseXSpring = useSpring(x, springSoft);
  const mouseYSpring = useSpring(y, springSoft);

  const shouldReduceMotion = useReducedMotion();
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], shouldReduceMotion ? ["0deg", "0deg"] : ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], shouldReduceMotion ? ["0deg", "0deg"] : ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    mouseX.set(clientX);
    mouseY.set(clientY);

    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={variants}
      className={`project-card group relative flex flex-col justify-between bg-[#0A0F1C] border border-white/10 rounded-[var(--radius-uber)] p-6 sm:p-8 hover:shadow-[0_30px_60px_rgba(10,15,28,0.4)] transition-shadow duration-500 overflow-hidden ${index === 0 ? "lg:col-span-2 lg:flex-row gap-8" : "col-span-1"}`}
      style={{
        rotateX: isTouch ? 0 : rotateX,
        rotateY: isTouch ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Apple TV Specular Highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[var(--radius-uber)] opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-overlay z-20 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.15),
              transparent 40%
            )
          `,
        }}
      />
      
      <div 
        className={`flex h-full w-full z-10 gap-8 ${index === 0 ? "flex-col lg:flex-row" : "flex-col justify-between"}`}
        style={{ transform: isTouch ? "translateZ(0px)" : "translateZ(40px)", transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maximizedProject, setMaximizedProject] = useState<any | null>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 1.04,
      clipPath: "inset(10% 10% 10% 10% round 24px)"
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      clipPath: "inset(0% 0% 0% 0% round 24px)",
      transition: { duration: 1.2, ease: easeApple } 
    },
  };

  // Keyboard navigation for Modal (Issue #24)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && maximizedProject) {
        setMaximizedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [maximizedProject]);

  // Modal Focus Trapping / Body Scroll Lock (Issue #23)
  useEffect(() => {
    if (maximizedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [maximizedProject]);

  return (
    <>
      <AnimatePresence>
        {maximizedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMaximizedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 sm:p-10 cursor-pointer"
          >
            <motion.div 
              layoutId={`window-${maximizedProject.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-7xl max-h-[90vh] bg-[#0A0F1C] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default"
            >
              {/* macOS Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1A1F2C] border-b border-white/10 cursor-default">
                <div className="flex gap-2">
                  <button onClick={() => setMaximizedProject(null)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors flex items-center justify-center group/btn">
                    <X className="w-2 h-2 text-black/50 opacity-0 group-hover/btn:opacity-100" />
                  </button>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-white/50">{maximizedProject.liveUrl}</div>
                <div className="w-16"></div> {/* Spacer to center title */}
              </div>
              
              
              <div className="flex-1 w-full bg-black relative">
                {maximizedProject.liveUrl && maximizedProject.liveUrl !== "#" ? (
                  <iframe 
                    src={maximizedProject.liveUrl} 
                    className="w-full h-full border-none bg-white"
                    title={maximizedProject.title}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-white/40">
                    <Maximize2 className="w-12 h-12 mb-4 opacity-20" />
                    <p className="uppercase tracking-widest text-xs">No live preview available</p>
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-8 bg-[#0A0F1C] border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">{maximizedProject.title}</h3>
                  <p className="text-white/60 font-light">{maximizedProject.desc}</p>
                </div>
                <Link 
                  href={`/projects/${maximizedProject.slug}`}
                  className="shrink-0 px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 active:scale-95 transition-all"
                >
                  Read Full Case Study
                </Link>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="projects" ref={containerRef} className="w-full bg-[var(--bg-primary)] px-4 sm:px-6 md:px-12 py-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--text-secondary)] mb-4 font-semibold">Systems Engineering</p>
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] uppercase">
                <TextReveal>Project Portfolio</TextReveal>
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] font-light max-w-md text-lg">
              A focused collection of systems architecture, machine learning infrastructure, and production-ready tools.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectsData.map((project, i) => (
              <TiltCard key={project.slug} project={project} index={i} variants={itemVariants}>
                {i === 0 ? (
                  <>
                    <div className="flex flex-col justify-between h-full lg:w-[45%]">
                      <div>
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                          <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-widest font-semibold text-white/60 bg-white/5">
                            {project.role}
                          </span>
                          <div className="flex gap-3">
                            {project.githubUrl && (
                              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                              </a>
                            )}
                            {project.liveUrl !== "#" && (
                              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                                <ExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-semibold mb-4 text-white">
                          {project.title}
                        </h3>
                        <p className="text-white/60 font-light leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                          {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-white/40">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          {project.outcomes.slice(0, 2).map((outcome, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold text-white/80">
                              <div className="w-1 h-1 rounded-full bg-white/20" />
                              {outcome}
                            </div>
                          ))}
                        </div>
                        <Link 
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest hover:gap-3 transition-all text-blue-400"
                        >
                          Case Study <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <motion.div layoutId={`window-${project.slug}`} className="relative w-full lg:w-[55%] h-64 lg:h-auto rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl flex flex-col group/window cursor-pointer" onClick={() => setMaximizedProject(project)} style={{ transform: "translateZ(50px)" }}>
                      {/* macOS Titlebar */}
                      <div className="flex items-center px-4 py-2 bg-[#1A1F2C] border-b border-white/10 gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors flex items-center justify-center group/max"><Maximize2 className="w-[6px] h-[6px] text-black/50 opacity-0 group-hover/max:opacity-100" /></div>
                        <div className="flex-1 text-center font-mono text-[9px] text-white/40 overflow-hidden text-ellipsis whitespace-nowrap">
                          {project.liveUrl !== "#" ? project.liveUrl : "Local_Preview.exe"}
                        </div>
                      </div>
                      {/* Iframe */}
                      <div className="relative flex-1 w-full overflow-hidden pointer-events-none">
                        {project.liveUrl && project.liveUrl !== "#" ? (
                          <div className="w-full h-full relative">
                            <iframe 
                              src={project.liveUrl} 
                              className="w-[200%] h-[200%] origin-top-left scale-50 border-none transition-transform duration-700 group-hover/window:scale-[0.52] bg-white"
                              title={project.title}
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[10px] uppercase tracking-widest text-white/40">Preview N/A</div>
                        )}
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div layoutId={`window-${project.slug}`} className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/50 mb-6 sm:mb-8 border border-white/10 shadow-xl flex flex-col group/window cursor-pointer" onClick={() => setMaximizedProject(project)} style={{ transform: "translateZ(50px)" }}>
                      {/* macOS Titlebar */}
                      <div className="flex items-center px-4 py-2 bg-[#1A1F2C] border-b border-white/10 gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors flex items-center justify-center group/max"><Maximize2 className="w-[6px] h-[6px] text-black/50 opacity-0 group-hover/max:opacity-100" /></div>
                        <div className="flex-1 text-center font-mono text-[9px] text-white/40 overflow-hidden text-ellipsis whitespace-nowrap">
                          {project.liveUrl !== "#" ? project.liveUrl : "Local_Preview.exe"}
                        </div>
                      </div>
                      {/* Iframe */}
                      <div className="relative flex-1 w-full overflow-hidden pointer-events-none">
                        {project.liveUrl && project.liveUrl !== "#" ? (
                          <div className="w-full h-full relative">
                            <iframe 
                              src={project.liveUrl} 
                              className="w-[200%] h-[200%] origin-top-left scale-50 border-none transition-transform duration-700 group-hover/window:scale-[0.52] bg-white"
                              title={project.title}
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[10px] uppercase tracking-widest text-white/40">Preview N/A</div>
                        )}
                      </div>
                    </motion.div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                          <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-widest font-semibold text-white/60 bg-white/5">
                            {project.role}
                          </span>
                          <div className="flex gap-3">
                            {project.githubUrl && (
                              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                              </a>
                            )}
                            {project.liveUrl !== "#" && (
                              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                                <ExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
                          {project.title}
                        </h3>
                        <p className="text-white/60 font-light leading-relaxed mb-6 sm:mb-8 line-clamp-3 text-sm sm:text-base">
                          {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-white/40">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          {project.outcomes.slice(0, 2).map((outcome, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold text-white/80">
                              <div className="w-1 h-1 rounded-full bg-white/20" />
                              {outcome}
                            </div>
                          ))}
                        </div>
                        
                        <Link 
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest hover:gap-3 transition-all text-blue-400"
                        >
                          Case Study <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
