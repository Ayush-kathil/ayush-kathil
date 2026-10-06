"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import { motion, useDragControls } from "framer-motion";
import { Maximize2, Minus, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function RecruiterWindow() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [siteUrl, setSiteUrl] = useState("");
  const dragControls = useDragControls();

  useEffect(() => {
    // Only run on client to get the current URL
    setSiteUrl(window.location.href);
  }, []);

  if (!isOpen || !siteUrl) return null;

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: isMinimized ? window.innerHeight - 100 : 0,
        x: isMinimized ? window.innerWidth / 2 - 150 : 0
      }}
      transition={springSoft}
      className={`fixed z-[99999] bottom-10 right-10 flex flex-col bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-[0_30px_60px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden backdrop-blur-3xl transition-all ${
        isMinimized ? "w-[300px] h-[60px]" : "w-[400px] sm:w-[600px] h-[300px] sm:h-[400px]"
      }`}
    >
      {/* macOS Style Titlebar */}
      <div 
        className="flex items-center justify-between px-4 py-3 bg-[var(--bg-primary)] border-b border-[var(--border-color)] cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => dragControls.start(e)}
      >
        <div className="flex gap-2">
          <button onClick={() => setIsOpen(false)} className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group">
            <X className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-red-900" />
          </button>
          <button onClick={() => setIsMinimized(!isMinimized)} className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center group">
            <Minus className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-yellow-900" />
          </button>
          <button onClick={() => setIsMinimized(false)} className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center group">
            <Maximize2 className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-green-900" />
          </button>
        </div>
        <div className="text-[10px] font-mono text-[var(--text-secondary)] pointer-events-none select-none">
          Recruiter_Evaluation_Mode.exe
        </div>
        <div className="w-10"></div> {/* Spacer for balance */}
      </div>

      {/* Recursive Iframe (The Website inside the Website) */}
      {!isMinimized && (
        <div className="relative w-full h-full bg-[var(--bg-primary)] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] z-10" />
          <iframe 
            src={siteUrl} 
            className="w-[200%] h-[200%] origin-top-left scale-50 border-none pointer-events-auto"
            title="Recursive Portfolio"
          />
        </div>
      )}
    </motion.div>
  );
}
