import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderSeparator from "@/components/layouts/HeaderSeparator";
import { Toaster } from "@/components/ui/sonner";
import { GlobalProvider } from "@/context/GlobalContext";
import FooterSeparator from "@/components/layouts/FooterSeparator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VERSES OF LIGHT",
  description: "No1 Quranic competition in Nigeria",
  icons: {
    icon: "/logo.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalProvider>
          <HeaderSeparator />
          {children}
          <Toaster />
          <FooterSeparator />
        </GlobalProvider>
      </body>
    </html>
  );
}
