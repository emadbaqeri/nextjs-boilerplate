import z from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    API_URI: z.string().url(),
    ANALYZE: z.boolean(),
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
    GOOGLE_ID: z.string(),
    GOOGLE_SECRET: z.string(),
    APPLE__CLIENT_ID: z.string(),
    APPLE_CLIENT_SECRET: z.string(),
    APPLE_AUTH_REDIRECT_URI: z.string().url(),
  },
  client: {},
  runtimeEnv: {
    API_URI: process.env.API_URI,
    ANALYZE: process.env.ANALYZE,
    GITHUB_SECRET: process.env.GITHUB_AUTH_CLIENT_SECRET,
    GITHUB_ID: process.env.GITHUB_AUTH_CLIENT_ID,
    GOOGLE_SECRET: process.env.GOOGLE_AUTH_CLIENT_SCECRET,
    GOOGLE_ID: process.env.GOOGLE_AUTH_CLIENT_ID,
    APPLE__CLIENT_ID: process.env.APPLE_AUTH_CLIENT_ID,
    APPLE_CLIENT_SECRET: process.env.APPLE_AUTH_CLIENT_SECRET,
    APPLE_AUTH_REDIRECT_URI: process.env.APPLE_AUTH_REDIRECT_URI,
  },
});
