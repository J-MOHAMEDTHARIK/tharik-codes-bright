import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Tharik Mohamed J" }] }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-mono text-primary uppercase tracking-widest">// about me</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">
          Crafting reliable, <span className="text-gradient">delightful</span> software.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          I'm a Full-Stack Web Developer from Chennai, India, with hands-on experience building
          scalable applications using React.js, Node.js, Express, MongoDB, SpringBoot and Firebase.
          I love turning complex problems into clean, performant interfaces — from real-time IoT
          dashboards to AI-powered platforms. Strong fundamentals from 1000+ solved coding
          challenges keep me sharp.
        </p>
      </motion.div>

      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {[
          {
            Icon: Briefcase,
            title: "Experience",
            sub: "Full-Stack Web Dev Intern",
            org: "VEI Technologies Pvt Ltd, Chennai",
            body: "Built scalable apps with React, Next.js, Node, and MongoDB. Improved API response times by 30% and frontend load times by 20%.",
          },
          {
            Icon: GraduationCap,
            title: "Education",
            sub: "B.E. Computer Science",
            org: "Sri Sairam Engineering College",
            body: "CGPA 7.24 — DSA, Web Development, Databases, AI.",
          },
          {
            Icon: Award,
            title: "Achievements",
            sub: "1000+ Problems Solved",
            org: "Skillrack",
            body: "Runner-Up at SYNSARA National Level TechFest. Certified Full-Stack Web Developer (Udemy 2024).",
          },
          {
            Icon: Award,
            title: "Strengths",
            sub: "What I bring",
            org: "Real-time · APIs · UI",
            body: "REST API design, real-time systems, performance optimization, dashboard analytics, and AI chatbots.",
          },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card rounded-2xl p-6 hover:border-primary/40 transition"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/15 text-primary">
                <c.Icon size={20} />
              </div>
              <h3 className="font-semibold text-lg">{c.title}</h3>
            </div>
            <div className="mt-4">
              <div className="font-medium">{c.sub}</div>
              <div className="text-sm text-muted-foreground">{c.org}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
