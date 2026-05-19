import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "PANAS - Premium Underground Beats",
  description: "A cinematic underground beat marketplace experience for premium licenses."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${barlow.variable}`}>{children}</body>
    </html>
  );
}
