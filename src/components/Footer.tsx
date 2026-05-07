"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--bg-primary)] px-4 sm:px-6 md:px-12 pt-24 pb-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-[var(--border-color)] pt-12">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-3xl font-black tracking-tighter uppercase">Ayush Gupta</p>
            <p className="text-sm text-[var(--text-secondary)] font-medium">Software Engineer • ML Systems</p>
          </div>

          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)]">
            <a href="https://www.linkedin.com/in/ayushkathil" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="https://github.com/Ayush-kathil" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
            <a href="mailto:kathilshiva@gmail.com" className="hover:text-black transition-colors">Email</a>
          </div>

          <p className="text-xs text-[var(--text-secondary)] font-medium">
            © {currentYear} ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
