import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 5000,
    strictPort: true,
  },
});
