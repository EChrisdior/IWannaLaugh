import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/IWannaLaugh/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  }
});
