"use client";

import { useRef, useEffect } from "react";
import { Mail, Phone, Linkedin, Github, FileText, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/TextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
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
    <section ref={containerRef} id="contact" className="w-full bg-black text-white px-4 sm:px-6 md:px-12 py-32 rounded-[var(--radius-uber)] -mt-12 relative z-50">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-white/50 uppercase tracking-[0.24em] text-xs mb-6 font-semibold uppercase tracking-widest">Communication</p>
            <h2 className="text-[clamp(3rem,10vw,7rem)] font-semibold tracking-[-0.05em] leading-[0.95] uppercase mb-12">
              <TextReveal>Contact</TextReveal>
            </h2>
            <p className="text-2xl md:text-3xl font-light text-white/70 mb-16 leading-tight max-w-xl">
              I am currently looking for upcoming internship opportunities in software engineering and ML infrastructure.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:kathilshiva@gmail.com" className="contact-item group flex items-center justify-between p-8 rounded-3xl border border-white/10 hover:bg-white hover:text-black transition-all duration-500">
                <div className="flex items-center gap-6">
                  <Mail className="w-8 h-8" />
                  <span className="text-2xl font-medium">kathilshiva@gmail.com</span>
                </div>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/ayushkathil" target="_blank" rel="noreferrer" className="contact-item group flex items-center justify-between p-8 rounded-3xl border border-white/10 hover:bg-white hover:text-black transition-all duration-500">
                <div className="flex items-center gap-6">
                  <Linkedin className="w-8 h-8" />
                  <span className="text-2xl font-medium">LinkedIn</span>
                </div>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="https://github.com/Ayush-kathil" target="_blank" rel="noreferrer" className="contact-item group flex items-center justify-between p-8 rounded-3xl border border-white/10 hover:bg-white hover:text-black transition-all duration-500">
                <div className="flex items-center gap-6">
                  <Github className="w-8 h-8" />
                  <span className="text-2xl font-medium">GitHub</span>
                </div>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end lg:items-end">
            <div className="contact-item w-full max-w-md p-12 rounded-[var(--radius-uber)] bg-white/5 border border-white/10 backdrop-blur-3xl">
              <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
              <div className="flex flex-col gap-4">
                <a href="tel:7007226872" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" /> 7007226872
                </a>
                <a href="/resume.pdf" download className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                  <FileText className="w-5 h-5" /> Download Resume
                </a>
              </div>
              <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-sm text-white/40 leading-relaxed italic">
                  "Building scalable systems that empower teams and users alike."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
