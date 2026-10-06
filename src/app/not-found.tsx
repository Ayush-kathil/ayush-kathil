"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerMedium,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: easeApple } 
    },
  };

  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-[12rem] md:text-[20rem] font-bold tracking-tighter leading-none text-black selection:bg-black selection:text-white">
          404
        </h1>
      </motion.div>
      
      <motion.div variants={itemVariants} className="max-w-lg">
        <p className="text-2xl md:text-3xl font-light text-gray-500 mb-12">
          Whoops! This node is offline. <br />
          <span className="text-black font-medium italic">"pls visit again we are working on this currently"</span>
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:scale-105 active:scale-95 transition-all"
        >
          <ArrowLeft size={20} /> Return to Base
        </Link>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-24 flex gap-4 opacity-20">
         <div className="w-2 h-2 rounded-full bg-black animate-ping" />
         <div className="w-2 h-2 rounded-full bg-black animate-ping [animation-delay:0.2s]" />
         <div className="w-2 h-2 rounded-full bg-black animate-ping [animation-delay:0.4s]" />
      </motion.div>
    </motion.main>
  );
}
