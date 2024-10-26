import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    host: true,      // Allow Vite to listen on all IPs, making it accessible on Railway’s domain
    port: 4173       // Port that Railway typically uses for Vite apps
  }
});
