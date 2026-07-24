import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "./Section";

export function Education() {
  return (
    <Section id="education">
      <SectionHeader eyebrow="Academics" title="Education" />
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
        whileHover={{ y: -4 }}
        data-cursor="card"
        className="max-w-3xl mx-auto glass rounded-3xl p-8 gradient-border relative overflow-hidden lift shine"
      >
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="flex flex-col sm:flex-row items-start gap-6 relative">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.2 }}
            className="grid h-16 w-16 place-items-center rounded-2xl shrink-0 glow-electric"
            style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 255), oklch(0.68 0.22 305))" }}
          >
            <GraduationCap size={28} className="text-white" />
          </motion.div>
          <div className="flex-1">
            <div className="text-xs uppercase tracking-widest text-primary">2020 — 2024</div>
            <h3 className="text-2xl font-bold mt-1">B.Tech, Computer Science & Engineering</h3>
            <div className="text-muted-foreground mt-1">Sri Vasavi Institute of Engineering & Technology</div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm">
              <span className="text-muted-foreground">CGPA</span>
              <span className="font-bold gradient-text">8.55 / 10</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
