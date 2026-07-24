import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "./data";
import { Section, SectionHeader } from "./Section";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title="Where I've built" />
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px origin-top"
          style={{ background: "linear-gradient(to bottom, oklch(0.72 0.19 255), oklch(0.68 0.22 305), transparent)" }}
        />
        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={exp.role + i}
                initial={{ opacity: 0, x: left ? -40 : 40, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${left ? "" : "sm:[direction:rtl]"}`}
              >
                <div className={`sm:[direction:ltr] pl-12 sm:pl-0 ${left ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-6 lift shine hover:border-primary/60 transition-colors"
                    data-cursor="card"
                  >
                    <div className="text-xs uppercase tracking-widest text-primary mb-2">{exp.period}</div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <div className="text-muted-foreground mb-4">{exp.company}</div>
                    <ul className={`space-y-1.5 text-sm text-foreground/85 ${left ? "sm:list-none" : ""}`}>
                      {exp.points.map((p) => (
                        <li key={p} className="before:content-['▸'] before:mr-2 before:text-primary">{p}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.15 }}
                  className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full glow-electric"
                  style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 255), oklch(0.68 0.22 305))" }}
                >
                  <Briefcase size={14} className="text-white" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
