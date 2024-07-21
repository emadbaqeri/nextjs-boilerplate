import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  DirectionProvider,
  type MantineColorScheme,
  MantineProvider,
} from "@mantine/core";
import type { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Hello, World",
  applicationName: "Boilerplate",
  description: "Next.js Boilerplate",
  authors: [{ name: "emad", url: "https://emaaad.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultColorTheme =
    (cookies().get("theme")?.value as MantineColorScheme) ?? "auto";

  console.log({ defaultColorTheme });
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#fff" />
        <link rel="manifest" href="/manifest.json" />
        <ColorSchemeScript />
      </head>
      <body>
        <DirectionProvider>
          <MantineProvider defaultColorScheme={defaultColorTheme}>
            {children}
          </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
