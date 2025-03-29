import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/leaflet/dist/images/*",
          dest: "images",
        },
      ],
    }),
  ],
  base: "/",
  build: {
    assetsDir: "assets",
    manifest: true,
    rollupOptions: {
      input: "./index.html",
      output: {
        manualChunks: {
          leaflet: ["leaflet"],
          react: ["react", "react-dom"],
          vendor: ["lodash", "axios"],
        },
      },
    },
  },
  server: {
    fs: {
      strict: true,
    },
  },
});
