import { defineConfig } from "vite";

export default defineConfig({
  css: { postcss: { plugins: [] } },
  test: {
    include: ["**/*.test.{ts,tsx}"],
    environment: "jsdom",
    globals: true,
    setupFiles: "tests/global-setup.ts",
    coverage: {
      include: ["**/*.{ts,tsx}"],
      all: true,
    },
  },
});
