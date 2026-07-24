import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-24 w-24">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{ borderTopColor: "oklch(0.72 0.19 255)", borderRightColor: "oklch(0.68 0.22 305)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-3 rounded-full border-2 border-transparent"
                style={{ borderBottomColor: "oklch(0.78 0.16 195)", borderLeftColor: "oklch(0.72 0.19 255)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-display text-xl font-bold gradient-text">SM</div>
            </div>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-sm tracking-[0.4em] text-muted-foreground uppercase"
            >
              Loading portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
