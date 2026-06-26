import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: "Contact — Tharik Mohamed J" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSent(true);
      formRef.current.reset();

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-mono text-primary uppercase tracking-widest">// contact</p>

        <h1 className="mt-3 text-4xl md:text-5xl font-bold">
          Let's <span className="text-gradient">build</span> something
        </h1>

        <p className="mt-4 text-muted-foreground max-w-xl">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="mt-12 grid lg:grid-cols-5 gap-6">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 glass-card rounded-2xl p-6 space-y-5"
        >
          {[
            {
              Icon: Mail,
              label: "Email",
              value: "mohamedtharik1508@gmail.com",
              href: "mailto:mohamedtharik1508@gmail.com",
            },
            {
              Icon: Phone,
              label: "Phone",
              value: "+91 6382650792",
              href: "tel:+916382650792",
            },
            {
              Icon: MapPin,
              label: "Location",
              value: "Chennai, India",
            },
          ].map((item) => (
            <a key={item.label} href={item.href} className="flex items-start gap-4 group">
              <div className="p-2.5 rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <item.Icon size={18} />
              </div>

              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </div>

                <div className="font-medium">{item.value}</div>
              </div>
            </a>
          ))}

          <div className="pt-4 border-t border-border flex gap-2">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 glass-card rounded-2xl p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your Name" name="user_name" placeholder="John Doe" />

            <Field label="Email" name="user_email" type="email" placeholder="john@example.com" />
          </div>

          <Field label="Subject" name="subject" placeholder="Let's work together" />

          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">
              Message
            </label>

            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              className="mt-1.5 w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:glow transition disabled:opacity-50"
          >
            {loading ? (
              "Sending..."
            ) : sent ? (
              "Message Sent ✓"
            ) : (
              <>
                Send Message <Send size={15} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Field({ label, ...props }: FieldProps) {
  return (
    <div>
      <label className="text-xs text-muted-foreground uppercase tracking-wider">{label}</label>

      <input
        required
        {...props}
        className="mt-1.5 w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
      />
    </div>
  );
}
