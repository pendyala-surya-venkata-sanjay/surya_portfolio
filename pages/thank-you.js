import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    // Auto redirect after 5 seconds
    const timer = setTimeout(() => {
      router.push("/#contact");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <motion.div
        className="glass-card rounded-2xl border border-emerald-500/25 p-8 md:p-12 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <FaCheckCircle className="mx-auto text-6xl text-emerald-400" />
        </motion.div>

        <motion.h1
          className="mb-4 text-3xl font-bold text-slate-100 md:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Thank You for Submitting!
        </motion.h1>

        <motion.p
          className="mb-6 text-slate-300 md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Your message has been successfully sent. I'll get back to you as soon as possible.
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-slate-400">
            You will be automatically redirected back to the contact page in 5 seconds.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => router.push("/#contact")}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <FaArrowLeft className="text-sm" />
              Back to Contact
            </button>

            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-200 border border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-200 transition"
            >
              Home
            </button>
          </div>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="mx-auto h-2 w-48 overflow-hidden rounded-full bg-slate-700">
            <motion.div
              className="h-full bg-emerald-400"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </div>
          <p className="mt-2 text-xs text-slate-400">Redirecting...</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
