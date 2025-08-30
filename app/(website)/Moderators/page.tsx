import { MentorCard } from '@/components/homepage-14/Mentorers'
import GalleryHeroSection from '@/components/IGCC/HeroSection'
import Layout from '@/components/IGCC/Layout'
import { MODERATORS } from '@/constants/MODERATORS'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IGCC Expert Moderators | International Genitourinary Cancers Conference',
  description:
    'Meet the distinguished lineup of expert Moderators at the International Genitourinary Cancers Conference (IGCC) 2025. Renowned professionals from around the world providing Moderatorship, guidance, and expertise in cancer research, treatment, and innovations.',
  keywords: [
    'IGCC Moderators',
    'Oncology Expert Moderators',
    'Genitourinary Cancers Conference',
    'IGCC 2025 Moderators',
    'Medical Oncology Conference',
    'Cancer Research Moderators',
    'Jeddah Medical Conference',
  ],
}

type Props = {}

const GalleryPage = (props: Props) => {
  return (
    <Layout>
      <GalleryHeroSection
        title="Meet our"
        subTitle="Expert Moderators"
        description="Discover our distinguished Moderators providing guidance, expertise, and inspiration on genitourinary cancers and breakthroughs in oncology."
      />
      <section className="container mx-auto mb-8 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3">
        {MODERATORS.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </section>
    </Layout>
  )
}

export default GalleryPage
