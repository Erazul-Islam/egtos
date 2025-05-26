import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/shared/footer/footer";
import { Navbar } from "@/shared/navbar/navbar";

const inter = Inter({
  variable: "--inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "egtos",
  description:
    "The Intelligent Marketplace for Talent Acquisition Avoid hiring costs and layoffs by trading talent within a trusted network”",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} px-2 md:px-4 max-w-[1440px] mx-auto antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
