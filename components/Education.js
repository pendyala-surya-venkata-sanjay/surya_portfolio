import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    title: "Bachelor of Technology – Computer Science and Engineering",
    institution: "Lovely Professional University",
    period: "2023 – Present",
    details: "CGPA: 8.12",
    emphasis: "B.Tech (CSE) — building strong fundamentals in CS and software engineering."
  },
  {
    title: "Intermediate",
    institution: "Sasi Junior College",
    period: "Apr 2021 – May 2023",
    details: "Percentage: 95.6%",
    emphasis: "Strong foundation in mathematics and core sciences."
  },
  {
    title: "Matriculation",
    institution: "Sasi High School",
    period: "Apr 2020 – Apr 2021",
    details: "Percentage: 97%",
    emphasis: "Consistent academic performance and discipline."
  }
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="mb-6 space-y-2">
        <span className="section-pill">
          <FaGraduationCap className="text-xs" />
          <span>Education</span>
        </span>
        <h2 className="section-title">Academic Journey</h2>
      </div>

      <div className="relative">
        <div className="absolute left-[9px] top-2 bottom-2 hidden w-[1px] bg-gradient-to-b from-emerald-400 via-emerald-500/40 to-transparent md:block" />
        <div className="space-y-4">
          {education.map((item, idx) => (
            <motion.div
              key={item.title}
              className="relative flex gap-3 md:gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <div className="mt-1 hidden md:flex flex-col items-center">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400 bg-slate-950">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
              </div>
              <div className="glass-card flex-1 rounded-2xl border border-emerald-500/25 p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[13px] font-semibold text-slate-100">
                      {item.title}
                    </p>
                    <p className="text-[12px] text-emerald-300">
                      {item.institution}
                    </p>
                  </div>
                  {item.period && (
                    <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] text-slate-400">
                      {item.period}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[12px] text-slate-200">
                  {item.details}
                </p>
                <p className="mt-1 text-[12px] text-slate-300">
                  {item.emphasis}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

