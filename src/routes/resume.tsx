import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({ meta: [{ title: "Resume — Tharik Mohamed J" }] }),
  component: Resume,
});

function Resume() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-end justify-between gap-4"
      >
        <div>
          <p className="text-sm font-mono text-primary uppercase tracking-widest">// resume</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">resume</span>
          </h1>
          <p className="mt-3 text-muted-foreground">View it inline or download the PDF.</p>
        </div>
        <a
          href="/Tharik_Mohamed_Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:glow transition"
        >
          <Download size={16} /> Download PDF
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-10 glass-card rounded-2xl overflow-hidden"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border text-xs text-muted-foreground">
          <FileText size={14} className="text-primary" />
          Tharik_Mohamed_Resume.pdf
        </div>
        <object
          data="/Tharik_Mohamed_Resume.pdf"
          type="application/pdf"
          className="w-full h-[80vh] bg-secondary/30"
        >
          <iframe src="/Tharik_Mohamed_Resume.pdf" className="w-full h-[80vh]" title="Resume" />
        </object>
      </motion.div>
    </section>
  );
}
