"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Home, User, Briefcase, Trophy, FolderKanban, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const router = useRouter();
  const pathname = usePathname();

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
  }, []);

  const navItems = [
    { name: "Summary", id: "about", icon: User },
    { name: "Experience", id: "experience", icon: Briefcase },
    { name: "Recognition", id: "achievements", icon: Trophy },
    { name: "Systems", id: "projects", icon: FolderKanban },
    { name: "Contact", id: "contact", icon: MessageSquare },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] px-4 w-full max-w-fit">
      <ul className="flex items-center gap-2 p-2 rounded-full border border-[var(--border-color)] bg-white/70 dark:bg-black/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`relative flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "text-white bg-black dark:text-black dark:bg-white" 
                    : "text-[var(--text-secondary)] hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className={`${isActive ? "block" : "hidden md:block"}`}>{item.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
