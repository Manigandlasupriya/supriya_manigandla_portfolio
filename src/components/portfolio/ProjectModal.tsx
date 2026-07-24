import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ExternalLink, Github, X, ArrowUpRight, Check } from "lucide-react";
import type { PROJECTS } from "./data";
import { externalClickHandler } from "@/lib/open-external";

type Project = (typeof PROJECTS)[number];

export function ProjectModal({
  project,
  image,
  onClose,
}: {
  project: Project | null;
  image: string | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[95] flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />

          <motion.div
            layoutId={`project-card-${project.title}`}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl glass-strong gradient-border"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/60 transition"
              data-cursor="cta"
            >
              <X size={16} />
            </button>

            {/* Hero image */}
            <div className={`relative h-56 sm:h-72 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
              {image && (
                <motion.img
                  initial={{ scale: 1.1 }} animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-xs uppercase tracking-[0.3em] text-white/80"
                >
                  {project.subtitle}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 }}
                  className="text-2xl sm:text-3xl font-bold text-white mt-1"
                >
                  {project.title}
                </motion.h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-foreground/90 leading-relaxed"
              >
                {project.description}
              </motion.p>

              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">Tech stack</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {project.tech.map((t) => (
                    <div key={t} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm">
                      <Check size={14} className="text-primary" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                {project.live && (
                  <a
                    href={project.live} onClick={externalClickHandler(project.live)} target="_blank" rel="noreferrer"
                    data-cursor="cta"
                    className="shine inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground glow-electric"
                    style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 255), oklch(0.68 0.22 305))" }}
                  >
                    <ExternalLink size={14} /> Live Demo
                    <ArrowUpRight size={14} className="opacity-80" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github} onClick={externalClickHandler(project.github)} target="_blank" rel="noreferrer"
                    data-cursor="cta"
                    className="shine inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                  >
                    <Github size={14} /> View Source
                    <ArrowUpRight size={14} className="opacity-80" />
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
