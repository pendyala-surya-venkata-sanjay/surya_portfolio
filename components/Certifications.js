import { motion } from "framer-motion";
import { FaCertificate, FaNetworkWired } from "react-icons/fa";

const certs = [
  {
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "Infosys",
    period: "Aug 2025",
    focus: "Building GenAI solutions using no-code tools and workflows.",
    link: "https://drive.google.com/file/d/1htiM82y94f89_TIMHmW7pFt71Znc5CnF/view?usp=drive_link"
  },
  {
    title: "ChatGPT-4 Prompt Engineering (Generative AI & LLMs)",
    issuer: "Infosys",
    period: "",
    focus: "Prompt engineering fundamentals for LLM-based applications.",
    link: "https://drive.google.com/file/d/1WGHJV7H-gwkglKJaA43B-_sj_dq2TRlE/view?usp=drive_link"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    period: "Oct 2023",
    focus: "HTML/CSS fundamentals and responsive layout practices.",
    link: "https://drive.google.com/file/d/1xanklaqsvY6h_egeaf5onJT3eaGdSoo0/view?usp=drive_link"
  }
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-4 py-10 md:px-6"
    >
      <div className="mb-6 space-y-2">
        <span className="section-pill">
          <FaCertificate className="text-xs" />
          <span>Certifications</span>
        </span>
        <h2 className="section-title">Certificates</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {certs.map((cert, idx) => (
          <motion.a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl border border-emerald-500/25 p-4"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: idx * 0.06 }}
          >
            <div className="flex items-start gap-2">
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900/90 border border-emerald-400/40 text-emerald-300">
                {idx === 0 ? (
                  <FaCertificate className="text-sm" />
                ) : (
                  <FaNetworkWired className="text-sm" />
                )}
              </div>
              <div className="space-y-1">
                <p className="text-[13px] font-semibold text-slate-100">
                  {cert.title}
                </p>
                <p className="text-[12px] text-emerald-300">{cert.issuer}</p>
                {cert.period && (
                  <p className="text-[11px] text-slate-400">{cert.period}</p>
                )}
                <p className="text-[12px] text-slate-300">{cert.focus}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

