import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-20 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs text-muted-foreground mb-6">
            <Sparkles size={14} className="text-primary" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
            Hi, I'm <span className="text-gradient">Tharik Mohamed J</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            A Full Stack Developer building scalable web applications with the MERN stack, Java, and Spring Boot.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:glow transition-all"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/Tharik_Mohamed_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-all"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2">
            {[
              { Icon: Github, href: "https://github.com/" },
              { Icon: Linkedin, href: "https://linkedin.com/" },
              { Icon: Mail, href: "mailto:mohamedtharik1508@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full glass-card hover:text-primary hover:-translate-y-1 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { k: "Open to Work", v: "Available for opportunities" },
            { k: "Full Stack", v: "Developer" },
            { k: "Java + Spring Boot", v: "Backend Expertise" },
            { k: "MERN Stack", v: "Developer" },
          ].map((s) => (
            <div key={s.v} className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
