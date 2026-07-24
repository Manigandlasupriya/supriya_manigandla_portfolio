import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SECTIONS } from "./data";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const s of [...SECTIONS].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) { setActive(s.id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "glass-strong py-3" : "py-5"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button onClick={() => go("home")} data-cursor="magnet" className="font-display text-xl font-bold gradient-text">
          Supriya.dev
        </button>
        <div className="hidden md:flex items-center gap-1">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              data-cursor="magnet"
              className={`relative px-4 py-2 text-sm transition-colors ${active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {s.label}
              {active === s.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full"
                  style={{ background: "linear-gradient(90deg, oklch(0.72 0.19 255), oklch(0.68 0.22 305))" }}
                />
              )}
            </button>
          ))}
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-strong mx-4 mt-2 rounded-2xl p-2"
        >
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={`block w-full px-4 py-3 text-left rounded-lg ${active === s.id ? "bg-white/5 text-foreground" : "text-muted-foreground"}`}
            >{s.label}</button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
