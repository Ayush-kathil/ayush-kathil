"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { CircleUserRound, TerminalSquare, Medal, Layers, Mail } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import MacDock from "@/components/MacDock";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isHidden, setIsHidden] = useState(false);
  const [isHomeSection, setIsHomeSection] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (pathname === "/") {
        setIsHomeSection(scrollY < 100);
      } else {
        setIsHomeSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    // Hide navbar when preloader is active
    const checkLoading = () => {
      setIsHidden(document.documentElement.classList.contains("is-loading"));
    };

    checkLoading();
    const observer = new MutationObserver(checkLoading);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const lenis = useLenis();

  const handleNavClick = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    if (id === "contact") {
      if (lenis) {
        lenis.scrollTo(document.documentElement.scrollHeight, { duration: 1.5, offset: 0 });
      } else {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
      }
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      if (lenis) {
        lenis.scrollTo(element, { duration: 1.5, offset: -50 });
      } else {
        const y = element.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["about", "experience", "achievements", "projects", "contact"];
    
    const handleScrollTracking = () => {
      const windowHeight = window.innerHeight;
      let newSection = "";

      for (const id of sectionIds) {
        if (id === "contact") continue; // We'll handle this exclusively
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 3) {
            newSection = id;
          }
        }
      }

      // If we scroll to the absolute bottom, it's Contact.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        newSection = "contact";
      }

      if (newSection) {
        setActiveSection((prev) => (prev !== newSection ? newSection : prev));
      }
    };

    window.addEventListener("scroll", handleScrollTracking);
    // Initial check
    handleScrollTracking();

    return () => {
      window.removeEventListener("scroll", handleScrollTracking);
    };
  }, [pathname]);

  if (isHidden) return null;

  const navItems = [
    { name: "Summary", id: "about", icon: CircleUserRound },
    { name: "Experience", id: "experience", icon: TerminalSquare },
    { name: "Recognition", id: "achievements", icon: Medal },
    { name: "Systems", id: "projects", icon: Layers },
    { name: "Contact", id: "contact", icon: Mail },
  ];

  return (
    <MacDock 
      navItems={navItems}
      activeSection={activeSection}
      handleNavClick={handleNavClick}
      isHidden={isHidden}
      isHomeSection={isHomeSection}
    />
  );
}
