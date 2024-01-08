import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      app: path.resolve(__dirname, "./src/app"),
      pages: path.resolve(__dirname, "./src/pages"),
      shared: path.resolve(__dirname, "./src/shared"),
      assets: path.resolve(__dirname, "./src/shared/assets"),
    },
  },
  plugins: [solid()],
});
