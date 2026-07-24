import { motion } from "framer-motion";
import { useMemo } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Full-page animated background:
 * - Slow-moving aurora gradient blobs
 * - Soft grid overlay
 * - Twinkling particles
 * Fixed behind all content, non-interactive.
 * Honors prefers-reduced-motion by dropping particles and stilling blobs.
 */
export function BackgroundFX() {
  const reducedMotion = usePrefersReducedMotion();
  const particles = useMemo(
    () =>
      reducedMotion
        ? []
        : Array.from({ length: 42 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2.5 + 0.6,
            delay: Math.random() * 6,
            duration: Math.random() * 6 + 6,
          })),
    [reducedMotion]
  );

  const blobAnim = (a: any) => (reducedMotion ? undefined : a);


  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full blur-[120px] opacity-60"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.19 255 / 0.55), transparent 60%)" }}
        animate={blobAnim({ x: [0, 80, -40, 0], y: [0, 60, -30, 0] })}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full blur-[120px] opacity-50"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.22 305 / 0.55), transparent 60%)" }}
        animate={blobAnim({ x: [0, -70, 40, 0], y: [0, -50, 40, 0] })}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full blur-[120px] opacity-45"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.16 195 / 0.5), transparent 60%)" }}
        animate={blobAnim({ x: [0, 60, -30, 0], y: [0, 40, -30, 0] })}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />


      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.6) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/70"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: `${p.size}px`, height: `${p.size}px`,
            boxShadow: "0 0 8px oklch(0.72 0.19 255 / 0.9)",
          }}
          animate={{ opacity: [0.1, 0.9, 0.1], y: [0, -14, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)]" />
    </div>
  );
}
