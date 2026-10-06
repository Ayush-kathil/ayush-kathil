"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GithubSnakeGrid() {
  const cols = 40;
  const rows = 7;
  const [grid, setGrid] = useState<number[][]>([]);
  const [snakePos, setSnakePos] = useState({ x: 0, y: 3 });

  // Generate random contribution grid
  useEffect(() => {
    const newGrid = Array.from({ length: rows }).map(() =>
      Array.from({ length: cols }).map(() => Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0)
    );
    setGrid(newGrid);
  }, []);

  // Simple Snake AI moving right and oscillating vertically
  useEffect(() => {
    const interval = setInterval(() => {
      setSnakePos((prev) => {
        let newX = prev.x + 1;
        let newY = prev.y + (Math.random() > 0.5 ? 1 : -1);
        
        if (newX >= cols) newX = 0;
        if (newY < 0) newY = 0;
        if (newY >= rows) newY = rows - 1;

        // "Eat" the contribution (turn it bright green temporarily)
        setGrid((g) => {
          const newG = [...g];
          if (newG[newY] && newG[newY][newX] !== undefined) {
             newG[newY][newX] = 5; // Special snake color
          }
          return newG;
        });

        return { x: newX, y: newY };
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const getColor = (level: number) => {
    if (level === 5) return "bg-green-400 dark:bg-green-500 shadow-[0_0_10px_rgba(74,222,128,0.8)] z-10 scale-125 rounded-sm"; // Snake head
    if (level === 4) return "bg-green-700 opacity-90";
    if (level === 3) return "bg-green-600 opacity-70";
    if (level === 2) return "bg-green-500 opacity-50";
    if (level === 1) return "bg-green-300 opacity-30";
    return "bg-black/5 dark:bg-white/5"; // Empty day
  };

  if (grid.length === 0) return null;

  return (
    <div className="w-full overflow-hidden p-6 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl relative">
      <div className="absolute top-4 left-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-widest">Live Contribution Activity</span>
      </div>
      
      <div className="mt-8 flex flex-col gap-1 w-max mx-auto md:mx-0">
        {grid.map((row, y) => (
          <div key={y} className="flex gap-1">
            {row.map((level, x) => (
              <motion.div
                key={`${x}-${y}`}
                layout
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-sm transition-colors duration-500 ${getColor(level)}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
