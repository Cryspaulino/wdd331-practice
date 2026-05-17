// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    transformer: "lightningcss",
    lightningcss: {
      drafts: {
        customMedia: true,
      },
    },
  },
});