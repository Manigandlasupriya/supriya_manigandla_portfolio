import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/**
 * Premium custom cursor:
 * - Two layers: a small precise dot + a larger springy ring
 * - Context-aware states via data-cursor="magnet | card | cta" (falls back to buttons/links)
 * - Ring morphs: bigger + label on CTAs, subtle grow on cards, snappy magnet on links
 * - Fine pointers only; native cursor is hidden via CSS
 */
type Variant = "default" | "magnet" | "card" | "cta";

const RING_SIZE: Record<Variant, number> = {
  default: 34,
  magnet: 46,
  card: 74,
  cta: 100,
};

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");
  const [label, setLabel] = useState<string | null>(null);
  const [pressed, setPressed] = useState(false);

  // Springs for smooth follow
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 300, damping: 30, mass: 0.4 });
  const ringY = useSpring(dotY, { stiffness: 300, damping: 30, mass: 0.4 });

  const raf = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFine || reduced) return;


    const move = (e: MouseEvent) => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        dotX.set(e.clientX);
        dotY.set(e.clientY);
        raf.current = null;
      });
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const el =
        t.closest<HTMLElement>("[data-cursor]") ||
        t.closest<HTMLElement>("a, button, [role='button'], input, textarea, label");

      if (!el) {
        setVariant("default");
        setLabel(null);
        return;
      }
      const explicit = el.getAttribute("data-cursor") as Variant | null;
      const v: Variant = explicit ?? (el.tagName === "A" || el.tagName === "BUTTON" ? "magnet" : "default");
      setVariant(v);

      if (v === "cta") {
        const l =
          el.getAttribute("data-cursor-label") ??
          (el as HTMLAnchorElement).getAttribute("aria-label") ??
          el.textContent?.trim().slice(0, 22) ??
          "Click";
        setLabel(l || "Click");
      } else if (v === "card") {
        setLabel("Open");
      } else {
        setLabel(null);
      }
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => dotX.set(-200);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [dotX, dotY]);

  if (!mounted) return null;

  const size = RING_SIZE[variant] * (pressed ? 0.85 : 1);

  return (
    <>
      {/* Dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          background: "white",
        }}
      />
      {/* Ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full grid place-items-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: size,
          height: size,
          borderColor:
            variant === "cta"
              ? "oklch(0.78 0.16 200 / 0.9)"
              : variant === "card"
              ? "oklch(0.72 0.19 255 / 0.65)"
              : "oklch(1 0 0 / 0.35)",
          backgroundColor:
            variant === "cta" ? "oklch(0.78 0.16 200 / 0.14)" : "oklch(1 0 0 / 0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.5 }}
      >
        <div className="h-full w-full rounded-full border" />
        <AnimatePresence>
          {label && (
            <motion.span
              key={variant + label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.15 }}
              className="absolute font-medium uppercase tracking-[0.18em] text-[9px] text-white/90 pointer-events-none whitespace-nowrap"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
