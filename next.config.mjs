import { fileURLToPath } from "node:url";
import bundleAnalyzer from "@next/bundle-analyzer";
import createJiti from "jiti";
import nextPWA from "next-pwa";
const jiti = createJiti(fileURLToPath(import.meta.url));

/** Check to see all the env variables present before building */
jiti("./config/env");

const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

const nextConfigWithBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
})(nextConfig);

const nextConfigWithPwa = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})(nextConfigWithBundleAnalyzer);

export default nextConfigWithPwa;
