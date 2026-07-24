import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Search, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from "./data";
import { Section, SectionHeader } from "./Section";
import { ProjectModal } from "./ProjectModal";
import { externalClickHandler } from "@/lib/open-external";
import careernovaImg from "@/assets/project-careernova.jpg";
import codemasteryImg from "@/assets/project-codemastery.jpg";
import medicineImg from "@/assets/project-medicine.jpg";

const IMAGE_MAP: Record<string, string> = {
  "CareerNova AI": careernovaImg,
  "AI Code Mastery Hub": codemasteryImg,
  "Medicine Identification for the Blind": medicineImg,
};

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="transition-transform duration-300 will-change-transform h-full">
      {children}
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<(typeof PROJECTS)[number] | null>(null);
  const [category, setCategory] = useState<ProjectCategory>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const inCat = category === "All" || p.categories?.includes(category);
      if (!inCat) return false;
      if (!q) return true;
      const haystack = [p.title, p.subtitle, p.description, ...p.tech].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [category, query]);

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Selected work"
        title="Key Projects"
        description="Click a card to open a detailed view with the tech stack, story, and links."
      />

      {/* Filter + Search */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((c) => {
            const count = c === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.categories?.includes(c)).length;
            const activeTab = category === c;
            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                data-cursor="magnet"
                aria-pressed={activeTab}
                className={`relative text-xs font-semibold uppercase tracking-wider px-3.5 py-2 rounded-full border transition-colors ${
                  activeTab
                    ? "border-primary/60 text-primary bg-primary/10"
                    : "border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:border-white/25"
                }`}
              >
                {c}
                <span className="ml-2 text-[10px] opacity-70">{count}</span>
              </button>
            );
          })}
        </div>
        <div className="relative md:w-72">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or tech…"
            aria-label="Search projects"
            className="w-full rounded-full border border-white/10 bg-white/[0.04] pl-9 pr-9 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary/60 focus:bg-white/[0.06] transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 grid h-6 w-6 place-items-center rounded-full text-white/50 hover:text-white hover:bg-white/10"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="glass rounded-2xl p-10 text-center text-sm text-muted-foreground"
          >
            No projects match <span className="text-white font-medium">"{query}"</span>
            {category !== "All" && <> in <span className="text-white font-medium">{category}</span></>}.
            <button
              onClick={() => { setQuery(""); setCategory("All"); }}
              className="ml-2 text-primary underline underline-offset-2"
            >
              Reset filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={`${category}-${query}`}
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
          >
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                variants={{
                  hidden: { opacity: 0, y: 44, filter: "blur(8px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0)", transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
                }}
                className="h-full"
              >
                <TiltCard>
                  <motion.button
                    layoutId={`project-card-${p.title}`}
                    onClick={() => setActive(p)}
                    data-cursor="card"
                    aria-label={`Open ${p.title} details`}
                    className="relative h-full w-full glass rounded-2xl overflow-hidden flex flex-col group text-left shine"
                  >
                    <div className={`h-48 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                      {IMAGE_MAP[p.title] && (
                        <img
                          src={IMAGE_MAP[p.title]}
                          alt={p.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={14} />
                      </div>
                      <div className="absolute bottom-4 left-5 right-5 z-10">
                        <div className="text-xs uppercase tracking-widest text-white/80">{p.subtitle}</div>
                        <h3 className="text-xl font-bold text-white mt-1 drop-shadow">{p.title}</h3>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground flex-1 line-clamp-3">{p.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {p.tech.slice(0, 4).map((t) => (
                          <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border border-white/10 bg-white/[0.03]">{t}</span>
                        ))}
                        {p.tech.length > 4 && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border border-white/10 bg-white/[0.03]">+{p.tech.length - 4}</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-5">
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-primary">
                          View details
                          <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                        <div className="flex items-center gap-2">
                          {p.live && (
                            <a
                              href={p.live} target="_blank" rel="noreferrer"
                              onClick={(e) => { e.stopPropagation(); externalClickHandler(p.live!)(e); }}
                              title={`${p.title} live demo — opens in new tab`}
                              aria-label={`${p.title} live demo (opens in new tab)`}
                              className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white/[0.04] hover:border-primary/60 hover:text-primary transition-colors"
                            ><ExternalLink size={12} /></a>
                          )}
                          {p.github && (
                            <a
                              href={p.github} target="_blank" rel="noreferrer"
                              onClick={(e) => { e.stopPropagation(); externalClickHandler(p.github!)(e); }}
                              title={`${p.title} on GitHub — opens in new tab`}
                              aria-label={`${p.title} on GitHub (opens in new tab)`}
                              className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white/[0.04] hover:border-primary/60 hover:text-primary transition-colors"
                            ><Github size={12} /></a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectModal
        project={active}
        image={active ? IMAGE_MAP[active.title] ?? null : null}
        onClose={() => setActive(null)}
      />
    </Section>
  );
}
