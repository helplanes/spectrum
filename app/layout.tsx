import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocalFont from "next/font/local";
import Navigation from '@/components/navigation'
import Footer  from '@/components/footer'
import './globals.css'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});


export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: "Pccoe Spectrum'24",
    template: "%s | pccoespectrum.tech",
  },
  description: "Pccoe Spectrum'24 | PCET's PIMPRI CHINCHWAD COLLEGE OF ENGINEERING, Pune | Department of Applied Science and Humanities presents | Tech event for first year students | Annual State Level Technical Symposium for Extra Oridinary First Year Engineering Students!",
  openGraph: {
    title: "Pccoe Spectrum'24",
    description: "Pccoe Spectrum'24 | PCET's PIMPRI CHINCHWAD COLLEGE OF ENGINEERING, Pune | Department of Applied Science and Humanities presents | Tech event for first year students | Annual State Level Technical Symposium for Extra Oridinary First Year Engineering Students!",
    url: "https://pccoespectrum.tech",
    siteName: "pccoespectrum.tech",
    images: [
      {
        url: "https://i.imgur.com/rmVmQ7C.png",
        width: 548,
        height: 253,
        alt: 'Image',
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className={inter.className}>
        <Navigation />
          {children}
          <Script src='https://www.cssscript.com/demo/cat-follow-cursor-oneko/oneko.js' />
          <GoogleTagManager gtmId="G-0WEDSQL3ZX" />
        <Footer />
      </body>
    </html>
  )
}