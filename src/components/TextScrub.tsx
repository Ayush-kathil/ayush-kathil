"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import clsx from "clsx";

interface TextScrubProps {
  text: string;
  className?: string;
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["rgba(255,255,255,0.3)", "rgba(255,255,255,1)"]);
  
  return (
    <span className="relative inline-block mr-2 mt-2">
      <motion.span style={{ opacity, color }} className="transition-colors duration-100">
        {children}
      </motion.span>
    </span>
  );
};

export default function TextScrub({ text, className }: TextScrubProps) {
  const container = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "start 30%"],
  });

  const words = text.split(" ");

  return (
    <p ref={container} className={clsx("flex flex-wrap", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
