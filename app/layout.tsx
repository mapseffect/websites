import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ABR Electric | McKinney Electricians Serving Allen, Frisco & Plano",
  description:
    "Licensed & Insured electricians serving McKinney, Allen, Frisco & Plano. 5-star reviews on Google & Yelp. Call (214) 690-1941 for a free quote.",
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
