import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // Points TanStack Start's server entry at src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
    }),
    // react() must come after tanstackStart()
    viteReact(),
    nitro(),
  ],
});
