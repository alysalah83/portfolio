import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import { NoiseOverlay } from "@/components/portfolio/chrome/NoiseOverlay";
import ContactSection from "@/components/contact-section/ContactSection";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "AlySalh — Front-End Engineer",
  description:
    "Front-End Engineer focused on React, performance, and real-time systems.",
  openGraph: {
    title: "AlySalh — Front-End Engineer",
    description: "I build React UI systems not just screens.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${dmSans.variable} ${ibmPlexMono.variable} relative min-h-dvh`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}`}
        </Script>

        <NoiseOverlay />
        <Nav />
        {children}
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
