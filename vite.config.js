import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    minify: "terser",
    rollupOptions: {
      treeshake: "safest",
      perf: true
    },
  },
});
