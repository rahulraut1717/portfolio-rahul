import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Mystery_Quest } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const mysteryQuest = Mystery_Quest({
  variable: "--font-mystery-quest",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rahul Raut | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building beautiful, performant web experiences.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Rahul Raut" }],
  creator: "Rahul Raut",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rahulraut.dev",
    siteName: "Rahul Raut Portfolio",
    title: "Rahul Raut | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Raut | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    creator: "@rahulraut",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${mysteryQuest.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
