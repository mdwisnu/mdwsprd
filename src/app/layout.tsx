import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wisnu Pradnya — Photographer, Videographer & Video Editor",
  description:
    "Portfolio of Wisnu Pradnya, a photographer, videographer, and video editor based in Bali, Indonesia. Creating cinematic films, commercial visuals, and editorial photography.",
  openGraph: {
    title: "Wisnu Pradnya",
    description: "Photographer, Videographer & Video Editor from Bali",
    url: "https://wisnu.dev", // Placeholder URL
    siteName: "Wisnu Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-black text-white selection:bg-red-900/50 selection:text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
