"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export default function TypewriterEffect({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let currentIteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < currentIteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (currentIteration >= text.length) {
        clearInterval(interval);
      }
      currentIteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, started]);

  return <motion.span>{started ? displayText : ""}</motion.span>;
}
