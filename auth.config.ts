import type { NextAuthConfig } from "next-auth";
import Apple from "next-auth/providers/apple";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { env } from "@/config";

export default {
  cookies: {
    callbackUrl: {
      name: "__Secure-next-auth.callback-url",
      options: {
        httpOnly: false,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
  providers: [
    GitHub({ clientId: env.GITHUB_ID, clientSecret: env.GITHUB_SECRET }),
    Google({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Apple({
      clientId: env.APPLE__CLIENT_ID,
      clientSecret: env.APPLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "name email",
          response_mode: "form_post",
          response_type: "code",
          redirect_uri: env.APPLE_AUTH_REDIRECT_URI,
        },
      },
    }),
  ],
} satisfies NextAuthConfig;
