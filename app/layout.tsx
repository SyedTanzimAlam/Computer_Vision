import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "VisionForge Console | Sign in";
const description =

  "Securely access the VisionForge Console to manage computer vision deployments and monitor edge performance.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "visionforge",
    "console",
    "computer vision",
    "edge ai",
    "mlops",

    "login",

  ],
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {children}
      </body>
    </html>
  );
}
