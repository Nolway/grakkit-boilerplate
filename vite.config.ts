import { defineConfig } from "vite";
import ViteGrakkitHrm from "vite-grakkit-hrm";
import ViteGrakkitImportsTransform from "vite-grakkit-imports-transform";

const plugins = process.env.NODE_ENV === "development" ? [ViteGrakkitHrm("./server/server.properties")] : [];

export default defineConfig({
  plugins: [ViteGrakkitImportsTransform([]), ...plugins],
  build: {
    rollupOptions: {
      input: {
        index: "./src/index.ts",
      },
      output: {
        entryFileNames: "[name].js",
        dir: "./server/plugins/grakkit",
      },
    },
  },
});
