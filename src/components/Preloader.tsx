"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Laptop, Keyboard, Mouse, Printer, Cpu, Terminal, Database, Server, Monitor } from "lucide-react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("is-loading");

    // Progress Counter Animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "auto";
          onComplete();
        }
      });

      tl.to(".progress-text", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })
      .to(".progress-bar", {
        width: "100%",
        duration: 2.2,
        ease: "power4.inOut"
      }, 0)
      .to(textRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 0.8,
        ease: "expo.inOut",
        delay: 0.2
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "expo.inOut"
      }, "-=0.6");
        
    }, containerRef);

    return () => {
      ctx.revert();
      clearInterval(interval);
      document.body.style.overflow = "auto";
      document.documentElement.classList.remove("is-loading");
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[1000000] bg-white flex flex-col justify-center items-center overflow-hidden"
    >
      <div ref={textRef} className="relative w-full max-w-4xl flex flex-col items-center gap-12">
        <div className="flex flex-col items-center">
            <h1 className="text-black text-[clamp(2.5rem,8vw,5rem)] font-semibold tracking-[-0.03em] uppercase mb-2">
                Ayush Gupta
            </h1>
        </div>

        <div className="relative h-32 w-32 flex items-center justify-center">
           {/* Animated Icons Container */}
           {[
             { Icon: Laptop, threshold: 10 },
             { Icon: Mouse, threshold: 20 },
             { Icon: Keyboard, threshold: 30 },
             { Icon: Printer, threshold: 40 },
             { Icon: Cpu, threshold: 50 },
             { Icon: Monitor, threshold: 60 },
             { Icon: Terminal, threshold: 70 },
             { Icon: Database, threshold: 80 },
             { Icon: Server, threshold: 100 }
           ].map((item, index, array) => {
             const prevThreshold = index === 0 ? -1 : array[index-1].threshold;
             const isVisible = progress > prevThreshold && progress <= item.threshold;
             const Icon = item.Icon;
             
             return (
               <div 
                 key={index}
                 className="absolute transition-all duration-300 ease-out"
                 style={{ 
                   opacity: isVisible ? 1 : 0, 
                   transform: `scale(${isVisible ? 1 : 0.5}) rotate(${isVisible ? 0 : -15}deg)`,
                   visibility: isVisible ? 'visible' : 'hidden'
                 }}
               >
                 <Icon size={48} strokeWidth={1} className="text-black shadow-[0_0_20px_rgba(0,0,0,0.05)]" />
               </div>
             );
           })}

           {/* Glow Effect */}
           <div className="absolute inset-0 bg-black/5 blur-3xl rounded-full animate-pulse" />
        </div>

      </div>

      {/* Wavy Arrow Line - Full Screen Swimming Pool Layers */}
      <div className="absolute bottom-24 left-0 w-screen h-24 pointer-events-none overflow-hidden z-20">
          <svg viewBox="0 0 1440 120" className="w-full h-full preserve-3d" preserveAspectRatio="none">
              <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                  </marker>
              </defs>
              {/* Layer 1 - Deep */}
              <path 
                  d="M0,80 C150,130 350,30 500,80 C650,130 850,30 1000,80 C1150,130 1350,30 1440,80" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="0.5"
                  opacity="0.1"
                  className="wave-line-anim"
                  style={{ animationDelay: '-1s' }}
              />
              {/* Layer 2 - Mid */}
              <path 
                  d="M0,70 C150,120 350,20 500,70 C650,120 850,20 1000,70 C1150,120 1350,20 1440,70" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="0.8"
                  opacity="0.2"
                  className="wave-line-anim"
                  style={{ animationDelay: '-0.5s' }}
              />
              {/* Layer 3 - Surface (Main) */}
              <path 
                  d="M0,60 C150,110 350,10 500,60 C650,110 850,10 1000,60 C1150,110 1350,10 1440,60" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="1.2"
                  markerEnd="url(#arrowhead)"
                  className="wave-line-anim"
              />
          </svg>
      </div>

    </div>
  );
}
