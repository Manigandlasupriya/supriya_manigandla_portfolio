import { motion } from "framer-motion";

/**
 * Lightweight placeholder shown while the Three.js hero scene loads.
 * Pure CSS + a single Framer Motion pulse — no WebGL, no heavy deps.
 */
export function Hero3DFallback() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden"
      role="presentation"
    >
      {/* Soft ambient gradient orbs mimicking the 3D scene's palette */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.22 285 / 0.55) 0%, transparent 65%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute left-[30%] top-[35%] h-[260px] w-[260px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.16 200 / 0.45) 0%, transparent 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute right-[25%] bottom-[30%] h-[220px] w-[220px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.2 340 / 0.4) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
