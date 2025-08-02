import GallaryPageContant from '@/components/IGCC/GallaryPageContant'
import GalleryHeroSection from '@/components/IGCC/HeroSection'
import Layout from '@/components/IGCC/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IGCC Photo Gallery | International Genitourinary Cancers Conference',
  description:
    'Explore the official IGCC photo gallery. Relive unforgettable moments from past International Genitourinary Cancers Conferences held in Jeddah, Saudi Arabia.',
  keywords: [
    'IGCC Gallery',
    'IGCC Conference Photos',
    'Genitourinary Cancer Event Photos',
    'Medical Conference Gallery',
    'Saudi Arabia Oncology Event',
    'IGCC 2025 Moments',
  ],
  openGraph: {
    title: 'IGCC Photo Gallery | International Genitourinary Cancers Conference',
    description:
      'Dive into our gallery and relive the most inspiring moments from previous IGCC conferences — featuring world-class experts and cutting-edge cancer discussions.',
    url: 'https://www.igcc-jed.org/gallery',
    siteName: 'IGCC 2025',
    images: [
      {
        url: '/images/gallary/1.jpg',
        width: 1200,
        height: 630,
        alt: 'IGCC Conference Gallery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGCC Photo Gallery | IGCC 2025',
    description:
      'Step into the IGCC gallery and relive the most iconic moments from previous genitourinary cancer summits in Jeddah.',
    images: ['/images/gallary/1.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}
type Props = {}

const GalleryPage = (props: Props) => {
  return (
    <Layout>
      <GalleryHeroSection
        title="Explore the"
        subTitle="memories of IGCC"
        description=" Dive into our gallery and relive the most inspiring moments from previous IGCC conferences — where global
            oncology leaders, breakthrough ideas, and unforgettable experiences come together.
   "
      />
      <GallaryPageContant />
    </Layout>
  )
}

export default GalleryPage
