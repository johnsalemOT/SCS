import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { url } from "inspector";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:"Vital Heal",
  description: "Vital heal is Your Wound Care Specialist. Where Care Meets Compassion. A Dedicated Expert Committed to Your Healing Journey. Our Team Prioritizes Your Well-being, Offering Compassionate Care and Expertise Tailored to Your Unique Needs.",
  robots: 'index,follow',
  applicationName:'Vital Heal Landing Page',
  generator: 'Next.js',
  icons: '/favicon.ico',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
