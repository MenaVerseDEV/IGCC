import { MentorCard } from '@/components/homepage-14/Mentorers'
import GalleryHeroSection from '@/components/IGCC/HeroSection'
import Layout from '@/components/IGCC/Layout'
import { MODERATORS } from '@/constants/MODERATORS'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IGCC Expert Mentors | International Genitourinary Cancers Conference',
  description:
    'Meet the distinguished lineup of expert mentors at the International Genitourinary Cancers Conference (IGCC) 2025. Renowned professionals from around the world providing mentorship, guidance, and expertise in cancer research, treatment, and innovations.',
  keywords: [
    'IGCC Mentors',
    'Oncology Expert Mentors',
    'Genitourinary Cancers Conference',
    'IGCC 2025 Mentors',
    'Medical Oncology Conference',
    'Cancer Research Mentors',
    'Jeddah Medical Conference',
  ],
}

type Props = {}

const GalleryPage = (props: Props) => {
  return (
    <Layout>
      <GalleryHeroSection
        title="Meet our"
        subTitle="Expert Mentors"
        description="Discover our distinguished mentors providing guidance, expertise, and inspiration on genitourinary cancers and breakthroughs in oncology."
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
