import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { CERTIFICATIONS } from "./data";
import { Section, SectionHeader } from "./Section";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader eyebrow="Recognition" title="Certifications & Achievements" />
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      >
        {CERTIFICATIONS.map((c) => (
          <motion.div
            key={c.title + c.issuer}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 20 },
              show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] } },
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            data-cursor="card"
            className="glass rounded-2xl p-5 flex items-start gap-4 relative overflow-hidden group shine"
          >
            <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl group-hover:bg-accent/20 transition-colors" />
            <div
              className="grid h-11 w-11 place-items-center rounded-xl shrink-0 relative"
              style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 255 / 0.3), oklch(0.68 0.22 305 / 0.3))" }}
            >
              <Award size={18} className="text-primary" />
            </div>
            <div className="relative">
              <div className="font-semibold leading-tight">{c.title}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{c.issuer}</div>
              <div className="text-xs mt-1 text-primary/80">{c.year}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
