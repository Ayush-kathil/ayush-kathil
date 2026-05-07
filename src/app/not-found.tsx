"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "expo.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
      <div className="reveal mb-8">
        <h1 className="text-[12rem] md:text-[20rem] font-bold tracking-tighter leading-none text-black selection:bg-black selection:text-white">
          404
        </h1>
      </div>
      
      <div className="reveal max-w-lg">
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
      </div>

      <div className="reveal mt-24 flex gap-4 opacity-20">
         <div className="w-2 h-2 rounded-full bg-black animate-ping" />
         <div className="w-2 h-2 rounded-full bg-black animate-ping [animation-delay:0.2s]" />
         <div className="w-2 h-2 rounded-full bg-black animate-ping [animation-delay:0.4s]" />
      </div>
    </main>
  );
}
