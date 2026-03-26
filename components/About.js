import { motion } from "framer-motion";
import { FaShieldAlt, FaBrain, FaBug } from "react-icons/fa";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-start">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <span className="section-pill">
              <FaShieldAlt className="text-xs" />
              <span>About</span>
            </span>
            <h2 className="section-title">About Me</h2>
          </div>
          <p className="text-sm text-slate-300 md:text-[15px]">
            I&apos;m an <span className="text-emerald-300">AI/ML Engineer</span>
            {" "}at Lovely Professional University, building complete products
            that combine intelligent models with practical software systems.
          </p>
          <p className="text-sm text-slate-300 md:text-[15px]">
            I like taking ideas from{" "}
            <span className="text-emerald-300">
              data preprocessing → model training → evaluation → deployment
            </span>{" "}
            and packaging them behind APIs with a clean frontend. Along the way,
            I keep sharpening fundamentals like DSA, OS, DBMS, and software
            engineering.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-3 text-xs md:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="glass-card rounded-xl p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
                <FaBug className="text-sm" />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Engineering Mindset
              </p>
            </div>
            <p className="mt-2 text-[13px] text-slate-300">
              I value clean APIs, reliable pipelines, and measurable results.
            </p>
          </div>
          <div className="glass-card rounded-xl p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
                <FaBrain className="text-sm" />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Machine Learning
              </p>
            </div>
            <p className="mt-2 text-[13px] text-slate-300">
              Building practical ML systems with scikit-learn, NumPy, and Pandas.
            </p>
          </div>
          <div className="glass-card rounded-xl p-3 md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
              Open to
            </p>
            <p className="mt-2 text-[13px] text-slate-300">
              Internship opportunities and project work in{" "}
              <span className="text-emerald-300">
                AI/ML, software engineering, and full-stack development
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

