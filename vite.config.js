import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Add this line
  build: {
    assetsDir: "assets", // Add this section
    manifest: true,
    rollupOptions: {
      input: "./index.html",
    },
  },
});
