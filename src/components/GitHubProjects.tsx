"use client";
import { easeApple, easeSmooth, springSoft, springMagnetic, springSnappy, durationFast, durationMedium, durationSlow, staggerFast, staggerMedium, staggerSlow, viewportOneShot, fadeUp, fadeDown, fadeLeft, fadeRight, scaleReveal, staggerContainer } from "@/lib/motion";

import { useEffect, useState } from "react";
import { Github, ArrowUpRight, Code, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "@/components/TextReveal";

const githubRepos = [
  {
    name: "kubeflow/pipelines (PR #14171)",
    desc: "Patched a critical DoS zip bomb vulnerability in the Go backend by enforcing strict byte limits on artifact uploads.",
    stars: "5k+",
    tech: "Go • Security",
    link: "https://github.com/kubeflow/pipelines/pull/14171",
  },
  {
    name: "kubeflow/pipelines (PR #14186)",
    desc: "Secured metrics parsing engine against unbounded memory exploits (OOM attacks) by implementing traversal budgets.",
    stars: "5k+",
    tech: "Go • Memory Safe",
    link: "https://github.com/kubeflow/pipelines/pull/14186",
  },
  {
    name: "DevPath (PR #765 & #804)",
    desc: "Fixed 500 ISEs by adding safe JSON parsing and improved recommendation algorithm using partial string matching.",
    stars: "120",
    tech: "Backend • Algorithms",
    link: "https://github.com/Ayush-kathil",
  },
];

export default function GitHubProjects() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("/api/github")
      .then(res => res.json().then(data => ({ status: res.status, data })))
      .then(({ status, data }) => {
        if (status !== 200 || data.error) {
          setError(true);
          setErrorMsg(data.error || "GitHub API failed");
          setLoading(false);
          return;
        }
        setData(data?.data?.user?.contributionsCollection?.contributionCalendar);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setErrorMsg("Failed to fetch GitHub data");
        setLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: easeApple } },
  };

  const getLevelColor = (count: number) => {
    if (count === 0) return "bg-[var(--bg-primary)] border border-white/5";
    if (count <= 3) return "bg-emerald-900/40 border border-emerald-800/50";
    if (count <= 6) return "bg-emerald-700/60 border border-emerald-600/50";
    if (count <= 10) return "bg-emerald-500/80 border border-emerald-400/50";
    return "bg-emerald-400 border border-emerald-300/50";
  };

  return (
    <section className="w-full bg-[var(--bg-primary)] px-4 sm:px-6 md:px-12 py-32">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-[1600px] mx-auto"
      >
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-secondary)] mb-4 font-semibold">Open Source</p>
            <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] uppercase">
              <TextReveal>GitHub Activity</TextReveal>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <a href="https://github.com/Ayush-kathil" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-semibold hover:scale-105 active:scale-95 transition-all text-sm">
              View GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
            {!loading && !error && data && (
              <p className="text-[10px] uppercase tracking-widest text-[var(--text-secondary)] font-medium mr-2">
                {data.totalContributions} Contributions in the last year
              </p>
            )}
          </div>
        </div>

        <motion.div variants={itemVariants} className="mb-16 bg-[#0A0F1C] p-6 sm:p-10 rounded-[var(--radius-uber)] border border-white/10 overflow-hidden shadow-2xl relative min-h-[250px] flex flex-col justify-center">
          
          <AnimatePresence mode="wait">
            {loading && (
              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center h-full w-full opacity-50">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin mb-4" />
                <p className="text-[10px] uppercase tracking-widest text-white/50">Fetching Contributions...</p>
              </motion.div>
            )}

            {error && (
              <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center h-full w-full">
                <AlertCircle className="w-10 h-10 text-white/20 mb-4" />
                <p className="text-sm font-semibold text-white/60 mb-2">GitHub Activity Temporarily Unavailable</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">{errorMsg}</p>
              </motion.div>
            )}

            {!loading && !error && data && (
              <motion.div key="graph" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} className="w-full overflow-x-auto pb-4 custom-scrollbar">
                <div className="flex gap-1.5 min-w-[800px]">
                  {data.weeks.map((week: any, wIndex: number) => (
                    <div key={wIndex} className="flex flex-col gap-1.5">
                      {week.contributionDays.map((day: any, dIndex: number) => (
                        <div 
                          key={day.date} 
                          className={`w-3 h-3 rounded-[2px] transition-all duration-300 hover:scale-125 hover:z-10 group relative ${getLevelColor(day.contributionCount)}`}
                        >
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[10px] font-mono whitespace-nowrap rounded opacity-0 group-hover:opacity-100 pointer-events-none z-50">
                            {day.contributionCount} contributions on {day.date}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubRepos.map((repo, i) => (
            <motion.a 
              variants={itemVariants}
              key={i} 
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between p-8 sm:p-10 rounded-[var(--radius-uber)] border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:bg-black dark:hover:bg-white transition-all duration-500 min-h-[320px] sm:min-h-[400px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-black border border-[var(--border-color)] flex items-center justify-center text-black dark:text-white">
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--text-secondary)] group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-white dark:group-hover:text-black transition-colors">
                  {repo.name}
                </h3>
                <p className="text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed group-hover:text-white/70 dark:group-hover:text-black/70 transition-colors">
                  {repo.desc}
                </p>
              </div>
              
              <div className="pt-8 border-t border-[var(--border-color)] group-hover:border-white/10 dark:group-hover:border-black/10 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-white/60 dark:group-hover:text-black/60">
                  {repo.tech}
                </span>
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-[var(--text-secondary)] group-hover:text-white/60 dark:group-hover:text-black/60">
                  <Code className="w-4 h-4" />
                  {repo.stars}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
