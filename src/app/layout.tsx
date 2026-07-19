import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "StadiumFanFlow | FIFA World Cup 2026 Smart Stadium",
  description: "AI-powered smart stadium platform for the FIFA World Cup 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
