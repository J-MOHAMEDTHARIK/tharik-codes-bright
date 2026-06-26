import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [{ title: "Projects — Tharik Mohamed J" }],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Vehicle Management Dashboard",
    tag: "IoT · Real-time",
    image: "/images/vehicle-dashboard.png",
    desc: "Connected Mobility dashboard for monitoring EV and petrol fleets in real time. Displays vehicle location, battery health, tire pressure, engine temperature, and analytics. Integrated Google Maps API for live tracking and Firebase for cloud data synchronization.",
    stack: ["React.js", "Firebase", "Google Maps API", "Analytics"],
    live: "https://v-dasborad.netlify.app/",
    github: "https://github.com/",
  },
  {
    title: "Food Ordering Website",
    tag: "MERN · AI",
    image: "/images/food-ordering.png",
    desc: "Full-stack food ordering platform built with React, Node.js, Express, and MongoDB. Includes AI chatbot support, user authentication, menu management, and order tracking.",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "AI Chatbot"],
    live: "https://goodfoodapp.netlify.app/",
    github: "https://github.com/",
  },
  {
    title: "Gym Application Website",
    tag: "Web App",
    image: "/images/gym-app.png",
    desc: "Modern fitness and membership management platform featuring workout plans, membership tracking, responsive UI, and optimized user experience.",
    stack: ["React.js", "REST APIs", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/",
  },
];

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-mono text-primary uppercase tracking-widest">// projects</p>

        <h1 className="mt-3 text-4xl md:text-5xl font-bold">
          Selected <span className="text-gradient">Work</span>
        </h1>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          A collection of projects showcasing my expertise in React, Firebase, MERN Stack, AI
          integration, and real-time application development.
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
            className="group glass-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20" />

              <span className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-full bg-background/80 backdrop-blur border border-border text-muted-foreground">
                {p.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-semibold text-xl">{p.title}</h3>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2 py-1 rounded-md bg-secondary/70 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
                >
                  <Github size={16} />
                  Code
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
