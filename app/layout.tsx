import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Delta-V | Shepherd Space Systems",
  description:
    "Revolutionary 3D printed rocket engines with AI-optimized fuel geometries for custom thrust profiles and rapid deployment.",
  keywords: ["rocket engines", "3D printing", "AI optimization", "propulsion", "aerospace", "defense"],
  authors: [{ name: "Shepherd Space Systems" }],
  icons: {
    icon: "/delta-v-logo-new.png",
  },
  openGraph: {
    title: "Delta-V | Shepherd Space Systems",
    description: "Revolutionary 3D printed rocket engines with AI-optimized fuel geometries",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
