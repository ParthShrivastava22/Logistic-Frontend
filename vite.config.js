import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // Remove the tailwindcss() plugin
  base: "/",
  build: {
    assetsDir: "assets",
    manifest: true,
    rollupOptions: {
      input: "./index.html",
    },
  },
});
