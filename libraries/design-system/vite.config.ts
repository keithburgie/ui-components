import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.tsx"),
      name: "UIDesignSystem",
      fileName: "index",
      formats: ["es"], // ESM format for modern bundlers
    },
    rollupOptions: {
      // Externalize React and dependencies that use React context
      external: [
        /^react($|\/)/,
        /^react-dom($|\/)/,
        /^tailwind-variants($|\/)/,
        /^tailwind-merge($|\/)/,
      ],
      output: {
        // Preserve the directory structure for better tree-shaking
        preserveModules: true,
        preserveModulesRoot: "src",
        // Map @/ imports to relative paths in the output
        entryFileNames: ({ name }) => {
          // Keep the original path structure
          return name === "index" ? "index.js" : "[name].js";
        },
        // Add "use client" directive to the index file for Next.js
        banner: (chunk) => {
          if (chunk.name === "components/index") {
            return '"use client";';
          }
          return "";
        },
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
