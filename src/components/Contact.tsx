"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import { Mail, Phone, Linkedin, Github, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";

export default function Contact() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
    <section id="contact" className="w-full relative z-50 bg-black text-white px-4 sm:px-6 md:px-12 py-32 rounded-[var(--radius-uber)] -mt-12">
      <div className="max-w-[1600px] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
        >
          <div>
            <p className="text-white/50 uppercase tracking-[0.24em] text-xs mb-6 font-semibold">Communication</p>
            <h2 className="text-[clamp(3rem,10vw,7rem)] font-semibold tracking-[-0.05em] leading-[0.95] uppercase mb-12">
              <TextReveal>Contact</TextReveal>
            </h2>
            <p className="text-2xl md:text-3xl font-light text-white/70 mb-16 leading-tight max-w-xl">
              I am currently looking for upcoming internship opportunities in software engineering and ML infrastructure.
            </p>
            
            <div className="flex flex-col gap-6">
              <motion.a variants={itemVariants} href="mailto:kathilshiva@gmail.com" className="group flex items-center justify-between p-6 sm:p-8 rounded-3xl border border-white/10 hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                <div className="flex items-center gap-4 sm:gap-6 overflow-hidden">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
                  <span className="text-lg sm:text-2xl font-medium truncate">kathilshiva@gmail.com</span>
                </div>
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-2 transition-transform shrink-0" />
              </motion.a>
              <motion.a variants={itemVariants} href="https://www.linkedin.com/in/ayushkathil" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-6 sm:p-8 rounded-3xl border border-white/10 hover:bg-white hover:text-black transition-all duration-500">
                <div className="flex items-center gap-4 sm:gap-6">
                  <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-lg sm:text-2xl font-medium">LinkedIn</span>
                </div>
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-2 transition-transform" />
              </motion.a>
              <motion.a variants={itemVariants} href="https://github.com/Ayush-kathil" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-6 sm:p-8 rounded-3xl border border-white/10 hover:bg-white hover:text-black transition-all duration-500">
                <div className="flex items-center gap-4 sm:gap-6">
                  <Github className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-lg sm:text-2xl font-medium">GitHub</span>
                </div>
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col justify-end lg:items-end">
            <motion.div variants={itemVariants} className="w-full max-w-md p-8 sm:p-12 rounded-[var(--radius-uber)] bg-[#0A0F1C] border border-white/10 backdrop-blur-3xl shadow-[0_30px_60px_rgba(10,15,28,0.4)]">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6">Quick Links</h3>
              <div className="flex flex-col gap-4">
                <a href="tel:7007226872" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" /> 7007226872
                </a>
                <a href="/resume.pdf" download className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                  <FileText className="w-5 h-5" /> Download Resume
                </a>
              </div>
              <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/10">
                <p className="text-xs sm:text-sm text-white/40 leading-relaxed italic">
                  "Building scalable systems that empower teams and users alike."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
