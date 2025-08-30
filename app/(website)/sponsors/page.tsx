import GalleryHeroSection from '@/components/IGCC/HeroSection'
import Layout from '@/components/IGCC/Layout'
import SponserSections from '@/components/IGCC/SponserSections'
// import { SponserCard } from '@/components/IGCC/SponserSections'
import { SPONSORS } from '@/constants/SPONSORS'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IGCC Sponsors | International Genitourinary Cancers Conference',
  description:
    'Discover the distinguished sponsors of the International Genitourinary Cancers Conference (IGCC) 2025. Leading organizations supporting advancements in cancer research, treatment, and innovation.',
  keywords: [
    'IGCC Sponsors',
    'Oncology Conference Sponsors',
    'Genitourinary Cancers Conference Sponsors',
    'IGCC 2025 Sponsors',
    'Medical Oncology Conference',
    'Cancer Research Sponsors',
    'Jeddah Medical Conference',
  ],
}

type Props = {}

const GalleryPage = (props: Props) => {
  return (
    <Layout>
      <GalleryHeroSection
        title="Our"
        subTitle="Proud Sponsors"
        description="We are honored to be supported by leading organizations driving innovation, excellence, and progress in oncology and cancer care."
      />

      <SponserSections />
    </Layout>
  )
}

export default GalleryPage
