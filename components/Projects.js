import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowUpRightFromSquare, FaXmark } from "react-icons/fa6";
import { FaCodeBranch } from "react-icons/fa6";
import { projects } from "../lib/projects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="mb-6 space-y-2">
        <span className="section-pill">
          <FaCodeBranch className="text-xs" />
          <span>Projects</span>
        </span>
        <h2 className="section-title">Projects</h2>
        <p className="max-w-2xl text-sm text-slate-300 md:text-[15px]">
          A selection of hands-on projects spanning AutoML, ML prediction
          systems, and full-stack integration.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="tilt-card group glass-card block overflow-hidden rounded-2xl border border-emerald-500/25 p-3 hover:border-emerald-400/60 hover:shadow-cyber-glow transition"
            >
              <div className="relative overflow-hidden rounded-xl border border-emerald-500/20 bg-slate-900/60">
                <div
                  className="h-40 w-full bg-cover bg-center transition duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-transparent" />
              </div>

              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-emerald-300">
                    {project.type}
                  </p>
                  <h3 className="mt-1 text-[15px] font-semibold leading-snug">
                    {project.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded-full bg-slate-900/80 px-2 py-1 text-[10px] text-slate-400">
                  {project.date}
                </span>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="glass-card relative w-full max-w-3xl rounded-2xl border border-emerald-500/30 p-4 md:p-5">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/30 bg-slate-900/80 text-emerald-300 hover:bg-emerald-500/10 transition"
              aria-label="Close project details"
            >
              <FaXmark />
            </button>

            <div className="space-y-3 pr-10">
              <p className="text-[11px] uppercase tracking-[0.16em] text-emerald-300">
                {selectedProject.type}
              </p>
              <h3 className="text-xl font-semibold md:text-2xl">
                {selectedProject.title}
              </h3>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-emerald-500/20">
              <div
                className="h-44 w-full bg-cover bg-center md:h-56"
                style={{ backgroundImage: `url('${selectedProject.image}')` }}
              />
            </div>

            <p className="mt-4 text-sm text-slate-300 md:text-[15px]">
              {selectedProject.description}
            </p>

            <ul className="mt-4 space-y-2 text-[13px] text-slate-300/95">
              {selectedProject.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-emerald-500/30 bg-slate-900/80 px-2.5 py-1 text-[11px] text-emerald-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-5 inline-flex"
            >
              <span>View Source Code</span>
              <FaArrowUpRightFromSquare className="text-sm" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

