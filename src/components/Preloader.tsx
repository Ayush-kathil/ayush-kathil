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



    </div>
  );
}
