"use client";

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
  <div className="flex items-center gap-3 px-6 py-3.5 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100/50 flex-shrink-0 hover:scale-105 transition-transform duration-300 cursor-default">
    <div 
      className="w-3.5 h-3.5 rounded-full shadow-inner"
      style={{ backgroundColor: item.color }}
    />
    <span className="font-semibold text-[var(--text-primary)] text-sm tracking-wide">
      {item.name}
    </span>
  </div>
);

const MarqueeRow = ({ items, className = "" }: { items: TechItem[], className?: string }) => {
  // Duplicate items for seamless loop
  const doubledItems = [...items, ...items, ...items];
  
  return (
    <div className="flex w-[200%] overflow-hidden relative group">
      <div className={`flex gap-6 w-full ${className} group-hover:[animation-play-state:paused]`}>
        {doubledItems.map((item, i) => (
          <Pill key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default function TechStack() {
  return (
    <section className="py-32 w-full overflow-hidden relative bg-[var(--bg-primary)]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 mb-20 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
          Tech Stack
        </h2>
        <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium">
          Tools and technologies I work with.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <MarqueeRow items={topRow} className="animate-marquee" />
        <MarqueeRow items={middleRow} className="animate-marquee-reverse ml-[-10%]" />
        <MarqueeRow items={bottomRow} className="animate-marquee-slow" />
      </div>
      
      {/* Subtle modern glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
}
