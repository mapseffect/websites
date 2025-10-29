import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Electrician in McKinney, TX | ABR Electric | Licensed",
  description:
    "Licensed electricians in McKinney, Allen, Frisco & Plano. 5-star reviews. Tesla certified. Call (214) 690-1941 for a free quote today.",
  generator: "v0.app",
  icons: {
    icon: "https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/3cc05301-a411-4b9f-baeb-20b8f9355b00/public",
    shortcut: "https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/3cc05301-a411-4b9f-baeb-20b8f9355b00/public",
    apple: "https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/3cc05301-a411-4b9f-baeb-20b8f9355b00/public",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
