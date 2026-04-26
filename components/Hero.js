import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaFolderOpen } from "react-icons/fa";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-4 md:flex-row md:items-center md:justify-between md:px-6 md:pb-24 md:pt-8">
        <motion.div
          className="relative z-10 max-w-xl space-y-6"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 border border-emerald-500/40 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse-soft" />
            <span>AI/ML + Full-Stack Portfolio</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Pendyala{" "}
              <span className="text-emerald-400">
                Surya
              </span>{" "}
              Venkata
              {" "}Sanjay
            </h1>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
              AI/ML Engineer • India
            </p>
          </div>

          <p className="max-w-xl text-sm text-slate-300 md:text-[15px]">
            AI/ML engineer focused on{" "}
            <span className="text-emerald-300">
              machine learning systems, APIs, and practical end-to-end projects
            </span>
            . I enjoy building models (training → evaluation → deployment) and
            shipping clean, usable interfaces on top.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              <FaFolderOpen className="text-sm" />
              <span>View Projects</span>
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollToSection("contact")}
            >
              <FaEnvelope className="text-sm" />
              <span>Contact</span>
            </button>
            <a
              href="/surya_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-300 transition"
            >
              <FaDownload className="text-sm text-emerald-400" />
              <span>Open Resume (PDF)</span>
            </a>
          </div>

          <div className="grid max-w-md grid-cols-3 gap-3 text-xs text-slate-300/90">
            <div className="glass-card rounded-xl p-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Focus
              </p>
              <p className="mt-1 font-medium text-emerald-300">
                AutoML & ML Systems
              </p>
            </div>
            <div className="glass-card rounded-xl p-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Build
              </p>
              <p className="mt-1 font-medium text-emerald-300">APIs + UI</p>
            </div>
            <div className="glass-card rounded-xl p-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Strength
              </p>
              <p className="mt-1 font-medium text-emerald-300">
                Problem Solving
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto mt-2 flex w-full max-w-xs items-center justify-center md:max-w-sm"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-6 -z-10 rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-500/15 via-slate-900/60 to-slate-950 shadow-cyber-glow" />
          <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-emerald-400/60 bg-slate-900/80 md:h-80 md:w-80">
            {/* Replace src with your actual profile image path under /public */}
            {/* e.g. /assets/profile-sanjay.jpg */}
            <img
              src="https://github.com/pendyala-surya-venkata-sanjay.png"
              alt="Surya profile"
              className="absolute inset-0 h-full w-full object-cover object-top"
              style={{ objectPosition: "66% top" }}
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/40" />
          </div>

          <div className="absolute -bottom-4 right-3 w-40 glass-card rounded-2xl border border-emerald-500/40 px-3 py-2 text-[11px] text-slate-200 shadow-cyber-glow">
            <p className="font-semibold text-emerald-300">
              Always Learning
            </p>
            <p className="mt-0.5 text-[10px] text-slate-400">
              Building ML projects, APIs, and clean web UIs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

