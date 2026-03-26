import Head from "next/head";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Achievements } from "../components/Achievements";
import { Certifications } from "../components/Certifications";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pendyala Surya Venkata Sanjay | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Pendyala Surya Venkata Sanjay – AI/ML Engineer focused on model development, MLOps-ready pipelines, and full-stack AI products."
        />
        <meta name="keywords" content="AI ML Engineer, Machine Learning Engineer, Python, Flask, scikit-learn, Portfolio, Surya Sanjay" />
        <meta name="author" content="Pendyala Surya Venkata Sanjay" />
        <meta property="og:title" content="Pendyala Surya Venkata Sanjay | AI/ML Engineer" />
        <meta
          property="og:description"
          content="AI/ML Engineer portfolio featuring AutoML, ML system design, full-stack AI products, and project case studies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/pendyala-surya-venkata-sanjay" />
        <meta property="og:image" content="/assets/surya.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pendyala Surya Venkata Sanjay | AI/ML Engineer" />
        <meta
          name="twitter:description"
          content="AI/ML Engineer building model-driven products from training to deployment."
        />
        <meta name="twitter:image" content="/assets/surya.png" />
        <link rel="canonical" href="https://github.com/pendyala-surya-venkata-sanjay" />
      </Head>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </Layout>
    </>
  );
}

