import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/skills")({
  head: () => ({ meta: [{ title: "Skills — Tharik Mohamed J" }] }),
  component: Skills,
});

const groups = [
  { title: "Frontend", items: ["HTML5", "CSS3", "React.js", "Material UI", "Bootstrap"] },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Web Security", "JWT / OAuth"],
  },
  { title: "Databases", items: ["MongoDB", "MySQL", "Firebase Firestore", "Realtime DB"] },
  { title: "Languages", items: ["JavaScript (ES6+)", "C++", "Java"] },
  { title: "DevOps & Tools", items: ["Git", "GitHub", "Postman", "Vite"] },
  {
    title: "Extras",
    items: ["AI Chatbots", "Google Maps API", "Real-Time Tracking", "Dashboard Analytics"],
  },
];

function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-mono text-primary uppercase tracking-widest">// skills</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">
          My <span className="text-gradient">technical toolkit</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          The technologies I reach for to design, build, and ship production-grade web applications.
        </p>
      </motion.div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="glass-card rounded-2xl p-6 hover:border-primary/40 transition"
          >
            <h3 className="font-display font-semibold text-lg text-gradient">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary/80 text-foreground/90 border border-border hover:border-primary/60 hover:text-primary transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
