import { SpeakerCard } from '@/components/homepage-14/ServicesV13'
import GalleryHeroSection from '@/components/IGCC/HeroSection'
import Layout from '@/components/IGCC/Layout'
import { SPEAKERS } from '@/constants/SPEAKERS'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IGCC Expert Speakers | International Genitourinary Cancers Conference',
  description:
    'Meet the distinguished lineup of expert speakers at the International Genitourinary Cancers Conference (IGCC) 2025. Renowned professionals from around the world sharing insights on cancer research, treatment, and innovations.',
  keywords: [
    'IGCC Speakers',
    'Oncology Expert Speakers',
    'Genitourinary Cancers Conference',
    'IGCC 2025 Speakers',
    'Medical Oncology Conference',
    'Cancer Research Experts',
    'Jeddah Medical Conference',
  ],
}

type Props = {}

const GalleryPage = (props: Props) => {
  return (
    <Layout>
      <GalleryHeroSection
        title="Meet the"
        subTitle="Expert Speakers"
        description="Discover our distinguished lineup of world-renowned professionals sharing insights on genitourinary cancers and breakthroughs in oncology."
      />
      <section className="container mx-auto mb-8 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3">
        {SPEAKERS.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </section>
    </Layout>
  )
}

export default GalleryPage
