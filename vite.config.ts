import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  assetsInclude: ['**/*.pdf', '**/*.PDF'],
  
  build: {
    sourcemap: true, // Enable source maps for debugging.
    minify: "esbuild", // Use esbuild for minification.
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]", // This configuration disables obfuscation
    },
  },
});
