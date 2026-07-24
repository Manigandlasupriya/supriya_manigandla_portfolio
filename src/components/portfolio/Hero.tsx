import { motion } from "framer-motion";
import { useEffect, useState, lazy, Suspense } from "react";
import { Download, Mail, Github, Linkedin, ArrowDown, ArrowRight } from "lucide-react";
import { PROFILE } from "./data";
import heroPhoto from "@/assets/hero-wave.png";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { externalClickHandler } from "@/lib/open-external";

import { Hero3DFallback } from "./Hero3DFallback";

const Hero3D = lazy(() => import("./Hero3D"));

function useTypewriter(words: string[], speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), pause);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI(i + 1); }
      }
    }, del ? 35 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

const SYNE = { fontFamily: "'Syne', 'Space Grotesk', sans-serif" };

export function Hero() {
  const typed = useTypewriter(["Welcome to my portfolio"]);
  const reducedMotion = usePrefersReducedMotion();
  const [showScene, setShowScene] = useState(false);
  useEffect(() => {
    if (reducedMotion) return;
    const w = window as any;
    const id = w.requestIdleCallback
      ? w.requestIdleCallback(() => setShowScene(true), { timeout: 1500 })
      : window.setTimeout(() => setShowScene(true), 600);
    return () => {
      if (w.cancelIdleCallback && typeof id === "number") w.cancelIdleCallback(id);
      else window.clearTimeout(id as number);
    };
  }, [reducedMotion]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20"
    >
      {/* Mouse-reactive 3D scene — behind hero content */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        {!reducedMotion && (
          showScene ? (
            <Suspense fallback={<Hero3DFallback />}>
              <Hero3D />
            </Suspense>
          ) : (
            <Hero3DFallback />
          )
        )}
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">
        {/* LEFT — Typography */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-white/10 bg-white/[0.04] backdrop-blur-md mb-6"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ background: "oklch(0.78 0.16 200)" }} />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "oklch(0.78 0.16 200)" }} />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "oklch(0.85 0.12 210)" }}>
              Available for opportunities
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.45em] mb-3"
            style={{ color: "oklch(0.74 0.16 300)" }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-extrabold tracking-tighter leading-[0.95] text-white text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem]"
            style={SYNE}
          >
            <span className="block">I am</span>
            <span
              className="block text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #ffffff 0%, #c7d0ff 40%, #7c8bff 80%, #a78bfa 100%)" }}
            >
              Supriya
              <motion.span
                aria-hidden
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block align-middle ml-2 h-[0.9em] w-[6px] rounded-sm"
                style={{ background: "oklch(0.78 0.16 200)" }}
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 inline-flex items-center gap-3 rounded-full py-2.5 px-5 border border-white/10 bg-white/[0.04] backdrop-blur-md"
          >
            <span className="text-sm font-medium text-white/90 min-h-[1.25rem]">
              {typed}
              <span className="ml-0.5 caret" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              data-cursor="cta"
              className="group inline-flex items-center gap-2 rounded-full glass-strong gradient-border text-white font-semibold px-7 py-3.5 text-sm transition-all hover:scale-[1.03] active:scale-95 hover:shadow-[0_20px_50px_-10px_rgba(167,139,250,0.35)]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={PROFILE.resume}
              download
              data-cursor="cta"
              className="group inline-flex items-center gap-2 rounded-full glass-strong gradient-border text-white font-semibold px-7 py-3.5 text-sm transition-all hover:scale-[1.03] active:scale-95 hover:shadow-[0_20px_50px_-10px_rgba(167,139,250,0.35)]"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex items-center gap-3"
          >
            {[
              { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
              { icon: Github, href: PROFILE.github, label: "GitHub" },
              { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                onClick={label === "Email" ? undefined : externalClickHandler(href)}
                target="_blank"
                rel="noreferrer"
                data-cursor="magnet"
                aria-label={`${label} (opens in new tab)`}
                title={`${label} — opens in new tab`}
                className="relative grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition"
              >
                <Icon size={18} />
                <span
                  className="absolute -top-1 -right-1 grid h-3.5 w-3.5 place-items-center rounded-full text-[7px] font-bold text-black"
                  style={{ background: "oklch(0.78 0.16 200)" }}
                >
                  ↗
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Mascot anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative h-[420px] sm:h-[480px] lg:h-[540px] block mt-10 lg:mt-0"
        >
          {/* Background glass cards */}
          <motion.div
            aria-hidden
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: -6, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute top-8 right-8 h-[420px] w-[340px] rounded-[2.5rem] border border-white/10 backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.03)" }}
          />
          <div
            aria-hidden
            className="absolute top-20 right-28 h-[260px] w-[260px] rounded-[2rem] border border-white/5"
            style={{ background: "linear-gradient(135deg, oklch(0.55 0.2 285 / 0.16), oklch(0.65 0.24 340 / 0.10))" }}
          />

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 left-4 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-3 py-2 text-[11px] text-white/80"
          >
            <span className="text-white/50 mr-2">uptime</span>99.9%
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 140 }}
            className="absolute top-6 right-32 z-30 glass-strong gradient-border px-4 py-2.5 rounded-2xl rounded-br-none shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          >
            <span className="text-sm font-semibold text-white/90">Hi there! 👋</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-24 left-0 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-3 py-2 text-[11px] text-white/80"
          >
            <span className="text-white/50 mr-2">shipped</span>5+projects
          </motion.div>

          {/* Main glass card with mascot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-0 right-4 w-[360px] sm:w-[420px] z-20"
            style={{ filter: "drop-shadow(0 30px 60px oklch(0.55 0.25 295 / 0.55))" }}
          >
            {/* Soft glow halo */}
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[3rem] opacity-70 blur-3xl"
              style={{ background: "radial-gradient(circle, oklch(0.65 0.25 290 / 0.35) 0%, transparent 70%)" }}
            />

            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md p-4">
              <motion.img
                src={heroPhoto}
                alt="3D style portrait of Supriya waving hello"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-white/80 transition"
        aria-label="Scroll to about"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
