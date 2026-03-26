import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhone
} from "react-icons/fa";

export function Contact() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formState, setFormState] = useState({
    type: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setFormState({
        type: "error",
        message: "All fields are required"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormState({
        type: "error",
        message: "Please enter a valid email address"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setFormState({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error || "Submission failed");
      }

      // Redirect to thank you page on success
      router.push("/thank-you");
      
    } catch (error) {
      setFormState({
        type: "error",
        message: error.message || "Failed to send message. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="grid gap-8 md:grid-cols-[1.1fr,1.2fr] md:items-start">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <span className="section-pill">
              <FaEnvelope className="text-xs" />
              <span>Contact</span>
            </span>
            <h2 className="section-title">Let&apos;s Collaborate</h2>
          </div>
          <p className="text-sm text-slate-300 md:text-[15px]">
            Open to{" "}
            <span className="text-emerald-300">
              AI/ML internships, software engineering roles, and full-stack
              projects
            </span>
            . If you are building something that needs security thinking from
            day one, I&apos;d love to connect.
          </p>

          <div className="space-y-2 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <FaLocationArrow className="text-emerald-300" />
              <span>India</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-emerald-300" />
              <a
                href="mailto:suryazoom4581@gmail.com"
                className="hover:text-emerald-300 transition"
              >
                suryazoom4581@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-emerald-300" />
              <a
                href="tel:+919676172757"
                className="hover:text-emerald-300 transition"
              >
                +91-9676172757
              </a>
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <a
              href="https://linkedin.com/in/pendyala-surya-venkata-sanjay"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200 border border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-200 transition"
            >
              <FaLinkedinIn className="text-sm text-emerald-300" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/pendyala-surya-venkata-sanjay"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200 border border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-200 transition"
            >
              <FaGithub className="text-sm text-emerald-300" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl border border-emerald-500/25 p-4 md:p-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-sm font-medium text-slate-100">
            Quick contact form
          </p>
          <p className="mb-4 mt-1 text-[12px] text-slate-400">
            Fast way to connect for internships, collaboration, and AI/ML work.
          </p>

          <div className="grid gap-3 text-[13px] text-slate-200 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="mb-1 block text-[12px] text-slate-300">
                Name
              </label>
              <input
                className="input-field"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="md:col-span-1">
              <label className="mb-1 block text-[12px] text-slate-300">
                Email
              </label>
              <input
                className="input-field"
                placeholder="you@example.com"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-[12px] text-slate-300">
                Subject
              </label>
              <input
                className="input-field"
                placeholder="Collaboration, internship, project..."
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-[12px] text-slate-300">
                Message
              </label>
              <textarea
                className="input-field min-h-[120px] resize-none"
                placeholder="Tell me briefly about what you have in mind."
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {formState.message && (
            <p
              className={`mt-3 rounded-lg border px-3 py-2 text-xs ${
                formState.type === "success"
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                  : "border-rose-500/40 bg-rose-500/10 text-rose-300"
              }`}
            >
              {formState.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary mt-4 w-full disabled:opacity-60 disabled:cursor-not-allowed md:w-auto"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

