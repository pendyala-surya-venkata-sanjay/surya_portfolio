import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const skills = [
  { name: "Python", type: "Language", logo: "/assets/skills/python.svg" },
  { name: "Java", type: "Language", logo: "/assets/skills/java.svg" },
  { name: "C", type: "Language", logo: "/assets/skills/c.svg" },
  { name: "C++", type: "Language", logo: "/assets/skills/cplusplus.svg" },
  { name: "scikit-learn", type: "Framework", logo: "/assets/skills/scikitlearn.svg" },
  { name: "NumPy", type: "Library", logo: "/assets/skills/numpy.svg" },
  { name: "Pandas", type: "Library", logo: "/assets/skills/pandas.svg" },
  { name: "Flask", type: "Framework", logo: "/assets/skills/flask.svg" },
  { name: "Git", type: "Repository", logo: "/assets/skills/git.svg" },
  { name: "VS Code", type: "Code Editor", logo: "/assets/skills/vscode.svg" },
  { name: "Google Colab", type: "Platform", logo: "/assets/skills/googlecolab.svg" },
  { name: "Kaggle", type: "Platform", logo: "/assets/skills/kaggle.svg" }
];

function SkillTile({ name, type, logo }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/90 p-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950/95 border border-slate-700/80">
        <img
          src={logo}
          alt={name}
          className="h-7 w-7 select-none [filter:brightness(1.18)_saturate(1.22)]"
          draggable="false"
        />
      </div>
      <div className="min-w-0">
        <p className="truncate text-[15px] font-semibold text-slate-100">{name}</p>
        <p className="text-[12px] text-slate-400">{type}</p>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="mb-6 space-y-2">
        <span className="section-pill">
          <FaCode className="text-xs" />
          <span>Skills</span>
        </span>
        <h2 className="section-title">Technical Arsenal</h2>
        <p className="max-w-2xl text-sm text-slate-300 md:text-[15px]">
          Languages, ML tooling, and core CS fundamentals—plus the soft skills
          to collaborate and ship projects end-to-end.
        </p>
      </div>

      <p className="mb-4 text-xs text-slate-400">My Professional Skills</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((s, idx) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: idx * 0.03 }}
            className="hover:-translate-y-0.5 transition"
          >
            <SkillTile name={s.name} type={s.type} logo={s.logo} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

