"use client";
import { useCallback, useState, useSyncExternalStore, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";

const About = dynamic(() => import("@/components/About"), { loading: () => <div className="h-screen flex items-center justify-center">Loading...</div> });
const TechStack = dynamic(() => import("@/components/TechStack"), { loading: () => <div className="h-screen flex items-center justify-center">Loading...</div> });
const Experience = dynamic(() => import("@/components/Experience"), { loading: () => <div className="h-screen flex items-center justify-center">Loading...</div> });
const Achievements = dynamic(() => import("@/components/Achievements"));
const Responsibility = dynamic(() => import("@/components/Responsibility"));
const FeaturedProjects = dynamic(() => import("@/components/FeaturedProjects"), { loading: () => <div className="h-screen flex items-center justify-center">Loading...</div> });
const GitHubProjects = dynamic(() => import("@/components/GitHubProjects"), { loading: () => <div className="h-screen flex items-center justify-center">Loading...</div> });
const Contact = dynamic(() => import("@/components/Contact"), { loading: () => <div className="h-screen flex items-center justify-center">Loading...</div> });
const Footer = dynamic(() => import("@/components/Footer"));
const MacReveal = dynamic(() => import("@/components/MacReveal"));
const FooterCurve = dynamic(() => import("@/components/FooterCurve"));

const subscribeToPreloaderStore = () => () => {};

const getPreloaderSnapshot = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem("portfolio-preloader-seen") === "1";
};

export default function Home() {
  const [preloaderDismissed, setPreloaderDismissed] = useState(false);
  const preloaderSeen = useSyncExternalStore(
    subscribeToPreloaderStore,
    getPreloaderSnapshot,
    () => false,
  );
  const preloaderComplete = preloaderSeen || preloaderDismissed;

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDismissed(true);
    window.sessionStorage.setItem("portfolio-preloader-seen", "1");
  }, []);

  return (
    <>
      {!preloaderComplete && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      <main id="main-content" className="w-full bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-[100dvh] relative">
        {/* Main Content (Rolls up to reveal footer) */}
        <div className="relative z-[10] w-full bg-[var(--bg-primary)] pb-24 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          <section aria-label="Hero section" className="relative w-full overflow-hidden">
            <Hero preloaderComplete={preloaderComplete} />
          </section>

          <div className="relative w-full bg-[var(--bg-primary)]">
            <MacReveal><About /></MacReveal>
          </div>

          <div className="relative w-full bg-[var(--bg-secondary)]">
            <MacReveal><TechStack /></MacReveal>
          </div>

          <div className="relative w-full bg-[var(--bg-primary)]">
            <MacReveal><Experience /></MacReveal>
          </div>

          <div className="relative w-full bg-[var(--bg-secondary)]">
            <MacReveal><Achievements /></MacReveal>
          </div>

          <div className="relative w-full bg-[var(--bg-primary)]">
            <MacReveal><Responsibility /></MacReveal>
          </div>

          <div className="relative w-full bg-[var(--bg-secondary)] shadow-2xl">
            <MacReveal><FeaturedProjects /></MacReveal>
          </div>

          <div className="relative w-full bg-[var(--bg-primary)]">
            <MacReveal><GitHubProjects /></MacReveal>
          </div>

          <div className="relative w-full bg-[#0A0F1C] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/20 mt-12">
            <MacReveal><Contact /></MacReveal>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
