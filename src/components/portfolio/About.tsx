import { motion } from "framer-motion";
import { MapPin, Sparkles, Rocket, Brain } from "lucide-react";
import { PROFILE } from "./data";
import { Section, SectionHeader } from "./Section";

const stats = [
  { icon: Rocket, label: "Production apps shipped", value: "10+" },
  { icon: Brain, label: "AI projects built", value: "5+" },
  { icon: Sparkles, label: "CGPA", value: "8.55" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="About me" title="A little about my journey" />
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="lg:col-span-3 glass rounded-3xl p-8 relative overflow-hidden group lift shine"
          data-cursor="card"
        >
          <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-colors" />
          <p className="text-lg leading-relaxed text-foreground/90 relative">
            {PROFILE.summary}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground relative">
            <MapPin size={16} className="text-primary" />
            {PROFILE.location}
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-2 grid gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0)", transition: { duration: 0.55 } },
              }}
              whileHover={{ scale: 1.02, rotateX: 4, rotateY: -4 }}
              className="glass rounded-2xl p-5 flex items-center gap-4 lift"
              style={{ transformStyle: "preserve-3d" }}
              data-cursor="card"
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-xl"
                style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 255 / 0.25), oklch(0.68 0.22 305 / 0.25))" }}
              >
                <Icon size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
