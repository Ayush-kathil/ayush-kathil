"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Home, User, Briefcase, Trophy, FolderKanban, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isHidden, setIsHidden] = useState(false);
  const [isHomeSection, setIsHomeSection] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const scrollY = window.scrollY;
      
      if (isMobile && pathname === "/") {
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

  const handleNavClick = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["about", "experience", "achievements", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  if (isHidden) return null;

  const navItems = [
    { name: "Summary", id: "about", icon: User },
    { name: "Experience", id: "experience", icon: Briefcase },
    { name: "Recognition", id: "achievements", icon: Trophy },
    { name: "Systems", id: "projects", icon: FolderKanban },
    { name: "Contact", id: "contact", icon: MessageSquare },
  ];

  return (
    <nav className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] px-4 w-full sm:max-w-fit transition-all duration-500 ${isHomeSection ? "opacity-0 translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"}`}>
      <ul className="flex items-center justify-around sm:justify-start gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-2xl sm:rounded-full border border-[var(--border-color)] bg-white/70 dark:bg-black/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <li key={item.id} className="flex-1 sm:flex-none">
              <button
                onClick={() => handleNavClick(item.id)}
                className={`relative w-full sm:w-auto flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-full text-[10px] sm:text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "text-black dark:text-white bg-black/5 dark:bg-white/10 sm:bg-black sm:text-white sm:dark:bg-white sm:dark:text-black" 
                    : "text-[var(--text-secondary)] hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-4 sm:h-4 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
                <span className="block">{item.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black dark:bg-white sm:hidden" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
