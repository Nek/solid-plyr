/* eslint-disable @typescript-eslint/no-unsafe-call */
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  optimizeDeps: {
    exclude: [],
  },
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    assetsDir: "_assets",
  },
});
