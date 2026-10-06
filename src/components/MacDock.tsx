"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

function DockItem({
  item,
  mouseX,
  isActive,
  onClick,
}: {
  item: { name: string; id: string; icon: LucideIcon };
  mouseX: any;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  
  // Calculate distance from mouse to center of this icon
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Transform distance into scale and width
  // When mouse is exactly over (distance=0), scale is largest.
  // Magnification curve drops off at 150px distance.
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, springMagnetic);

  // Icon scale
  const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.8, 1]);
  const scale = useSpring(scaleSync, springMagnetic);

  // Icon Y displacement (lifts up slightly when hovered)
  const ySync = useTransform(distance, [-150, 0, 150], [0, -15, 0]);
  const y = useSpring(ySync, springMagnetic);

  const Icon = item.icon;

  return (
    <button
      ref={ref}
      onClick={onClick}
      className="relative group flex items-center justify-center rounded-xl"
    >
      <motion.div
        style={{ width }}
        className="flex flex-col items-center justify-center relative"
      >
        <motion.div 
          style={{ scale, y }} 
          className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300 ${isActive ? 'bg-[#0A0F1C] text-white shadow-lg border border-white/20' : 'bg-transparent text-[var(--text-secondary)] group-hover:bg-black/5 dark:group-hover:bg-white/10'}`}
        >
          <Icon className="w-5 h-5" />
        </motion.div>

        {/* MacOS Tooltip */}
        <div className="absolute -top-10 px-3 py-1.5 rounded-lg bg-[#0A0F1C] border border-white/10 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl whitespace-nowrap z-50">
          {item.name}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0A0F1C] border-r border-b border-white/10 rotate-45"></div>
        </div>
      </motion.div>
      
      {/* Active Dot Indicator under the icon */}
      {isActive && (
        <motion.div 
          layoutId="active-nav-dot"
          transition={springSoft}
          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black dark:bg-white" 
        />
      )}
    </button>
  );
}

export default function MacDock({
  navItems,
  activeSection,
  handleNavClick,
  isHidden,
  isHomeSection
}: {
  navItems: { name: string; id: string; icon: LucideIcon }[];
  activeSection: string;
  handleNavClick: (id: string) => void;
  isHidden: boolean;
  isHomeSection: boolean;
}) {
  const mouseX = useMotionValue(Infinity);

  if (isHidden) return null;

  return (
    <nav 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] px-4 transition-all duration-700 ${isHomeSection ? "opacity-0 translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"}`}
    >
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-2 p-2 h-16 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]/80 backdrop-blur-3xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] mx-auto"
      >
        {navItems.map((item) => (
          <DockItem
            key={item.id}
            item={item}
            mouseX={mouseX}
            isActive={activeSection === item.id}
            onClick={() => handleNavClick(item.id)}
          />
        ))}
      </motion.div>
    </nav>
  );
}
