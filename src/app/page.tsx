"use client";

import { useCallback, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";

const About = dynamic(() => import("@/components/About"));
const Experience = dynamic(() => import("@/components/Experience"));
const Achievements = dynamic(() => import("@/components/Achievements"));
const Responsibility = dynamic(() => import("@/components/Responsibility"));
const FeaturedProjects = dynamic(() => import("@/components/FeaturedProjects"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

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
    <main id="main-content" className="w-full bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen relative">
      {!preloaderComplete && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      <div className="relative z-10 w-full">
        <section aria-label="Hero section" className="w-full">
          <Hero preloaderComplete={preloaderComplete} />
        </section>

        <section aria-label="Portfolio sections" className="w-full">
          <About />
          <Experience />
          <Achievements />
          <Responsibility />
          <FeaturedProjects />
          <Contact />
          <Footer />
        </section>
      </div>
    </main>
  );
}
