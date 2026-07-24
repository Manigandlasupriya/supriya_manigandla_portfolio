import { motion } from "framer-motion";
import { Code2, Server, Layout, Database, Cloud, Brain, Wrench } from "lucide-react";
import { SKILLS } from "./data";
import { Section, SectionHeader } from "./Section";

const iconMap: Record<string, typeof Code2> = {
  Languages: Code2,
  Backend: Server,
  Frontend: Layout,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  "AI / ML": Brain,
  Tools: Wrench,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Technical arsenal"
        title="Skills & Technologies"
        description="A curated stack I use to design, build, and ship intelligent full-stack products."
      />
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
      >
        {SKILLS.map((group, idx) => {
          const Icon = iconMap[group.category] ?? Code2;
          const isLastAlone = idx === SKILLS.length - 1 && SKILLS.length % 3 === 1;
          return (
            <motion.div
              key={group.category}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0)", transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
              }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              style={{ transformStyle: "preserve-3d" }}
              data-cursor="card"
              className={`glass rounded-2xl p-6 group relative overflow-hidden shine ${isLastAlone ? "lg:col-start-2 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto sm:w-full" : ""}`}
            >

              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/25 transition-colors" />
              <div className="flex items-center gap-3 mb-4 relative">
                <div
                  className="grid h-10 w-10 place-items-center rounded-lg"
                  style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 255 / 0.3), oklch(0.68 0.22 305 / 0.3))" }}
                >
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2 relative">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-foreground/85 hover:border-primary/60 hover:text-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
