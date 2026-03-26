import { motion } from "framer-motion";
import { FaTrophy, FaSkullCrossbones } from "react-icons/fa";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-6xl px-4 py-10 md:px-6"
    >
      <div className="mb-6 space-y-2">
        <span className="section-pill">
          <FaTrophy className="text-xs" />
          <span>Achievements</span>
        </span>
        <h2 className="section-title">Highlights</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <motion.div
          className="glass-card flex items-start gap-3 rounded-2xl border border-emerald-500/25 p-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-200 shadow-cyber-glow">
            <FaSkullCrossbones className="text-lg" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Summer Training (AI + MERN)
            </p>
            <p className="mt-1 text-sm text-slate-200">
              Completed hands-on summer training at Lovely Professional
              University, building an end-to-end project with React, Node/Express,
              MongoDB, and an AI/ML model for real-time predictions.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="glass-card flex items-start gap-3 rounded-2xl border border-emerald-500/25 p-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-200 shadow-cyber-glow">
            <FaTrophy className="text-lg" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Volunteering
            </p>
            <p className="mt-1 text-sm text-slate-200">
              Volunteered with{" "}
              <span className="text-emerald-300">
                Undurthi Paul Foundation
              </span>{" "}
              (Jun 2024 – Jul 2024), contributing to community welfare through
              donation drives and local support initiatives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

