"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import React from "react";

type TechItem = {
  name: string;
  color: string;
};

const topRow: TechItem[] = [
  { name: "Postman", color: "#FF6C37" },
  { name: "Jest", color: "#C21325" },
  { name: "Python", color: "#3776AB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "C++", color: "#00599C" },
  { name: "MySQL", color: "#4479A1" },
  { name: "C#", color: "#239120" },
];

const middleRow: TechItem[] = [
  { name: "Sass", color: "#CC6699" },
  { name: "Vite", color: "#646CFF" },
  { name: "Redux", color: "#764ABC" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Styled Components", color: "#DB7093" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
];

const bottomRow: TechItem[] = [
  { name: "Node.js", color: "#339933" },
  { name: "Express.js", color: "#000000" },
  { name: "FastAPI", color: "#009688" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Nginx", color: "#009639" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redis", color: "#DC382D" },
];

const Pill = ({ item }: { item: TechItem }) => (
  <Magnetic>
    <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:-translate-y-1 hover:bg-white/10 transition-all duration-400 cursor-pointer group">
      <div 
        className="w-4 h-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:scale-125 group-hover:shadow-[0_0_20px_currentColor] transition-all duration-500 ease-out"
        style={{ backgroundColor: item.color, color: item.color }}
      />
      <span className="font-semibold text-white/90 text-sm sm:text-base tracking-wide group-hover:tracking-widest transition-all duration-500">
        {item.name}
      </span>
    </div>
  </Magnetic>
);



import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Magnetic from "./Magnetic";

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: curveProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"]
  });

  // Parallax scroll physics
  const x1 = useTransform(scrollYProgress, [0, 1], [150, -400]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-400, 150]);
  const x3 = useTransform(scrollYProgress, [0, 1], [250, -300]);

  // Smooth dome curve that flattens out as you scroll down to the section
  const borderRadius = useTransform(
    curveProgress, 
    [0, 1], 
    ["50% 50% 0 0 / 200px 200px 0 0", "0% 0% 0 0 / 0px 0px 0 0"]
  );

  return (
    <motion.section 
      ref={containerRef} 
      className="pt-40 pb-32 w-full relative bg-[#0A0F1C] text-white -mt-10"
      style={{ borderRadius }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 mb-24 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6">
          Tech Stack
        </h2>
        <p className="text-xl md:text-2xl text-white/60 font-light">
          Tools and technologies I work with.
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: staggerSlow } }
          }}
          className="flex flex-col gap-8 relative z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-10"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 50, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: easeApple } } }}
            style={{ x: x1 }} className="flex gap-6 w-[200%] ml-[-20%]"
          >
            {[...topRow, ...topRow].map((item, i) => (
              <Pill key={`${item.name}-${i}`} item={item} />
            ))}
          </motion.div>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 50, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: easeApple } } }}
            style={{ x: x2 }} className="flex gap-6 w-[200%] ml-[-30%]"
          >
            {[...middleRow, ...middleRow].map((item, i) => (
              <Pill key={`${item.name}-${i}`} item={item} />
            ))}
          </motion.div>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 50, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: easeApple } } }}
            style={{ x: x3 }} className="flex gap-6 w-[200%] ml-[-10%]"
          >
            {[...bottomRow, ...bottomRow].map((item, i) => (
              <Pill key={`${item.name}-${i}`} item={item} />
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Subtle modern glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)] pointer-events-none" />
    </motion.section>
  );
}
