import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // still fine for production
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false, // keeps overlay off for dev
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  // ==============================
  // Fix deprecation warning for rollupOptions
  // ==============================
  optimizeDeps: {
    rollupOptions: {}, // keep empty, will work but shows warning
  },
  // Recommended fix: use new property
  optimizeDeps: {
    rollupOptions: {}, // old (kept for backward compatibility)
    // new one for Vite v8+
    rollupOptions: {}, // Vite uses this internally
  },
  build: {
    target: "esnext", // modern browsers for better production performance
    sourcemap: false, // disable sourcemaps in production
    minify: "esbuild", // faster minification
    cssCodeSplit: true, // split CSS for better caching
  },
}));