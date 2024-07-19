import type { Metadata } from "next";

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
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#fff" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
