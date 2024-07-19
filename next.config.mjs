import createJiti from "jiti";
import nextPWA from "next-pwa";
import { fileURLToPath } from "node:url";
import bundleAnalyzer from "@next/bundle-analyzer";
const jiti = createJiti(fileURLToPath(import.meta.url));

/** Check to see all the env variables present before building */
jiti("./config/env");

const nextConfig = {
  compiler: { removeConsole: true },
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
