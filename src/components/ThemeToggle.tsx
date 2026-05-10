"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type PointerEvent as ReactPointerEvent } from "react";
import { Sun, Moon } from "lucide-react";

const THEME_STORAGE_KEY = "portfolio-theme";
const THEME_CHANGE_EVENT = "portfolio-theme-change";

const subscribeToTheme = (onStoreChange: () => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
  };
};

const getThemeSnapshot = () => {
  if (typeof window === "undefined") {
    return "light" as const;
  }

  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return "light"; // Force light default
};

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => "light");
  const [isMobile, setIsMobile] = useState(false);
  const [mobilePos, setMobilePos] = useState<{ x: number; y: number }>(() => {
    if (typeof window === "undefined") return { x: 20, y: 100 };
    const saved = localStorage.getItem("portfolio-theme-toggle-pos");
    return saved ? JSON.parse(saved) : { x: 20, y: 100 };
  });
  const [dragging, setDragging] = useState(false);
  const dragStartRef = useRef<{ px: number; py: number; sx: number; sy: number } | null>(null);

  useEffect(() => {
    const m = window.matchMedia("(max-width: 768px)");
    const s = () => setIsMobile(m.matches);
    s();
    m.addEventListener("change", s);
    return () => m.removeEventListener("change", s);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    document.documentElement.classList.add("theme-transition");
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
    setTimeout(() => document.documentElement.classList.remove("theme-transition"), 320);
  };

  const handlePointerDown = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (!isMobile) return;
    setDragging(false);
    dragStartRef.current = { px: e.clientX, py: e.clientY, sx: mobilePos.x, sy: mobilePos.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (!isMobile || !dragStartRef.current) return;
    const dx = e.clientX - dragStartRef.current.px;
    const dy = e.clientY - dragStartRef.current.py;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) setDragging(true);
    
    const nx = Math.min(Math.max(8, dragStartRef.current.sx + dx), window.innerWidth - 64);
    const ny = Math.min(Math.max(8, dragStartRef.current.sy + dy), window.innerHeight - 120);
    setMobilePos({ x: nx, y: ny });
  };

  const handlePointerUp = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (!isMobile) return;
    e.currentTarget.releasePointerCapture(e.pointerId);
    if (!dragging) {
      toggleTheme();
    } else {
      const snapX = mobilePos.x < window.innerWidth / 2 ? 16 : window.innerWidth - 64;
      const finalPos = { x: snapX, y: mobilePos.y };
      setMobilePos(finalPos);
      localStorage.setItem("portfolio-theme-toggle-pos", JSON.stringify(finalPos));
    }
    dragStartRef.current = null;
  };

  return (
    <button
      onClick={() => !isMobile && toggleTheme()}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="fixed z-[9999] p-3 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-xl text-[var(--text-primary)] border border-[var(--border-color)] shadow-xl transition-all duration-300 touch-none active:scale-95"
      style={isMobile ? { left: mobilePos.x, top: mobilePos.y, transition: dragging ? "none" : "all 0.3s ease" } : { top: "1.5rem", right: "1.5rem" }}
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Sun className={`absolute w-5 h-5 transition-all duration-500 ${theme === "dark" ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
        <Moon className={`absolute w-5 h-5 transition-all duration-500 ${theme === "light" ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
      </div>
    </button>
  );
}
