import z from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    API_URI: z.string().url(),
    ANALYZE: z.string(),
  },
  client: {},
  runtimeEnv: {
    API_URI: process.env.API_URI,
    ANALYZE: process.env.ANALYZE,
  },
});
