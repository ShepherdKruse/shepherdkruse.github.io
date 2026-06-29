import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-sans"
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-mono"
})

export const metadata: Metadata = {
  title: "Shepherd Space Systems | Advanced Solid Propulsion Manufacturing",
  description:
    "Shepherd Space Systems manufactures high-performance solid rocket motors using proprietary vacuum-extrusion technology. Defense and commercial aerospace. Colorado Springs, CO.",
  keywords: ["solid rocket motors", "propulsion", "aerospace", "defense", "vacuum extrusion", "manufacturing"],
  authors: [{ name: "Shepherd Space Systems" }],
  icons: {
    icon: "/sss-logo.png",
  },
  openGraph: {
    title: "Shepherd Space Systems | Advanced Solid Propulsion Manufacturing",
    description: "High-performance solid rocket motors using proprietary vacuum-extrusion technology",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-[var(--bg)] text-[var(--text)] antialiased">
        {children}
      </body>
    </html>
  )
}
