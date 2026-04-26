import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { projects } from "../../lib/projects";
import { FaArrowLeft, FaArrowUpRightFromSquare, FaCodeBranch } from "react-icons/fa6";

export default function ProjectPage({ project }) {
  if (!project) return null;

  return (
    <>
      <Head>
        <title>{project.title} | Surya</title>
        <meta name="description" content={project.description} />
      </Head>
      <Layout>
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <div className="mb-6 space-y-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-300 transition"
            >
              <FaArrowLeft className="text-xs" />
              <span>Back to Projects</span>
            </Link>

            <div className="space-y-2">
              <span className="section-pill">
                <FaCodeBranch className="text-xs" />
                <span>Project</span>
              </span>
              <h1 className="section-title">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-300 border border-emerald-500/20">
                  {project.type}
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-400 border border-emerald-500/20">
                  {project.date}
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr] md:items-start">
            <div className="glass-card rounded-2xl border border-emerald-500/25 p-4 md:p-5">
              <div className="relative overflow-hidden rounded-xl border border-emerald-500/20 bg-slate-900/60">
                <div
                  className="h-48 w-full bg-cover bg-center md:h-56"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-transparent" />
              </div>

              <p className="mt-4 text-sm text-slate-300 md:text-[15px]">
                {project.description}
              </p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Key features
                </p>
                <ul className="mt-2 space-y-2 text-[13px] text-slate-300/95">
                  {project.features.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="glass-card rounded-2xl border border-emerald-500/25 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Tech stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-emerald-300 border border-emerald-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl border border-emerald-500/25 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Source code
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-3 w-full"
                >
                  <span>View Source Code</span>
                  <FaArrowUpRightFromSquare className="text-sm" />
                </a>
              </div>
            </aside>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug) || null;
  return { props: { project } };
}

