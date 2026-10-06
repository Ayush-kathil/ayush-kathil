"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Keyboard, Mouse, Printer, Cpu, Terminal, Database, Server, Monitor } from "lucide-react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("is-loading");

    // Progress Counter Animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 500); // Small delay before exit
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("is-loading");
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isExiting && (
        <motion.div 
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: easeApple }}
          className="fixed inset-0 z-[1000000] bg-white flex flex-col justify-center items-center overflow-hidden origin-top"
        >
          <motion.div 
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: easeApple }}
            className="relative w-full max-w-4xl flex flex-col items-center gap-12"
          >
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
