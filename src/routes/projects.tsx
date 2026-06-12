import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects — Tharik Mohamed J" }] }),
  component: Projects,
});

const projects = [
  {
    title: "Vehicle Management Dashboard",
    tag: "IoT · Real-time",
    desc: "Connected Mobility — real-time vehicle monitoring dashboard for EV and petrol fleets. Processes 10,000+ daily telemetry points (battery, tire pressure, engine temp) and reduced fleet downtime by 20% with predictive analytics. Integrated Google Maps API for live tracking and geofencing.",
    stack: ["React.js", "Firebase", "Google Maps API", "Analytics"],
  },
  {
    title: "Food Ordering Website",
    tag: "MERN · AI",
    desc: "AI-Enabled Food Delivery Platform built with React, Node, Express, and MongoDB. AI chatbot automates customer support and cuts response time by 30%. High-throughput REST APIs support 1,000+ daily transactions.",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "AI Chatbot"],
  },
  {
    title: "Gym Application Website",
    tag: "Web App",
    desc: "Membership and workout management portal with optimized UI/UX that lifted engagement by 25%. State management plus responsive layouts deliver a seamless experience across devices.",
    stack: ["React.js", "REST APIs", "Tailwind CSS"],
  },
];

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-sm font-mono text-primary uppercase tracking-widest">// projects</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">
          Selected <span className="text-gradient">work</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A handful of recent builds spanning real-time dashboards, AI features, and full-stack platforms.
        </p>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            <div className="relative h-40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-mono text-6xl font-bold text-foreground/10 group-hover:text-foreground/20 transition">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <span className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-full bg-background/60 backdrop-blur border border-border text-muted-foreground">
                {p.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-xl">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="text-[11px] px-2 py-1 rounded-md bg-secondary/70 text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 text-sm">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition">
                  <Github size={14} /> Code
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition">
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
