"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

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
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[99999] bg-black flex flex-col justify-center items-center px-8"
    >
      <div ref={textRef} className="relative w-full max-w-md flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
            <h1 className="text-white text-5xl md:text-7xl font-semibold tracking-tighter uppercase mb-2">
                Ayush Gupta
            </h1>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-semibold">
                Systems Engineer
            </p>
        </div>

        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
           <div className="progress-bar absolute top-0 left-0 h-full w-0 bg-white shadow-[0_0_20px_white]" />
        </div>

        <div className="flex justify-between w-full">
            <p className="text-white/20 text-[10px] uppercase tracking-widest font-semibold">Loading Core</p>
            <p className="progress-text opacity-0 text-white text-4xl md:text-6xl font-semibold tracking-tighter italic">
                {progress}%
            </p>
        </div>
      </div>
    </div>
  );
}
