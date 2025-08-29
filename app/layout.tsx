import SmoothScrollProvider from '@/components/shared/SmoothScroll'
import { satoshi } from '@/utils/fonts'
import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import '../scss/main.scss'
import Image from 'next/image'
import { Loader } from 'lucide-react'

export const metadata: Metadata = {
  title: 'International Genitourinary Cancers Conference 2025 | IGCC 2025',
  description:
    'Join the International Genitourinary Cancers Conference (IGCC 2025), happening from 2-4 October 2025 at Hilton Jeddah, Saudi Arabia. A unique platform gathering global experts in urology and oncology to discuss the latest in genitourinary cancers.',
  keywords: [
    'IGCC 2025',
    'Genitourinary Cancer Conference',
    'Urology Conference Saudi Arabia',
    'Oncology Jeddah',
    'Bladder Cancer',
    'Prostate Cancer',
    'Kidney Cancer',
    'Saudi Medical Conference',
  ],
  openGraph: {
    title: 'International Genitourinary Cancers Conference 2025 | IGCC 2025',
    description:
      'Official website for IGCC 2025 in Jeddah, Saudi Arabia. Participate in discussions on cutting-edge developments in prostate, bladder, and kidney cancers with leading experts.',
    url: 'https://www.igcc-jed.org/',
    siteName: 'IGCC 2025',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 1000,
        alt: 'IGCC 2025 Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International Genitourinary Cancers Conference 2025 | IGCC 2025',
    description:
      'Be part of IGCC 2025 in Jeddah — bringing together urology and oncology experts to discuss advances in GU cancers.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <Suspense
          fallback={
            <div className="flex h-screen w-screen items-center justify-center">
              <Loader className="animate-spin" />
            </div>
          }>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  )
}
