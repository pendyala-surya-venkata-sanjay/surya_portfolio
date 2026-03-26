import { useEffect, useMemo, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { InteractiveNetworkBg } from "./InteractiveNetworkBg";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const backgroundVariant = "futuristic";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionIds = useMemo(() => navItems.map((n) => n.id), []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const updateActive = () => {
      const y = window.scrollY + 120;
      let current = sectionIds[0] || "about";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, [sectionIds]);

  const scrollToSection = (id) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden matrix-bg text-slate-100 ${
        backgroundVariant === "premium"
          ? "bg-variant-premium"
          : "bg-variant-futuristic"
      }`}
    >
      <InteractiveNetworkBg />
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all ${
          scrolled
            ? "bg-slate-950/35 border-b border-transparent backdrop-blur-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-4 px-4 py-3 md:px-6">
          <nav className="hidden items-center gap-1 text-xs md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] transition ${
                  activeSection === item.id
                    ? "text-emerald-200 bg-emerald-500/10 border border-emerald-400/30"
                    : "text-slate-300/90 hover:text-emerald-300 hover:bg-emerald-500/10 border border-transparent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/pendyala-surya-venkata-sanjay"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/15 hover:text-emerald-200 transition"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/pendyala-surya-venkata-sanjay"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/15 hover:text-emerald-200 transition"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-24 md:pt-28">{children}</main>

      <footer className="relative z-10 border-t border-emerald-500/20 bg-slate-950/80 mt-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {new Date().getFullYear()} Pendyala Surya Venkata Sanjay. All
            rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}

