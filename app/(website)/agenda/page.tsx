'use client'

import GalleryHeroSection from '@/components/IGCC/HeroSection'
import Layout from '@/components/IGCC/Layout'
import AgendaDisplay from './AgendaDisplay'
import { TimelineDemo } from './text'

export default function SchedulePage() {
  return (
    <Layout>
      <GalleryHeroSection
        title=""
        subTitle="Conference Agenda"
        description="Explore our comprehensive three-day program featuring expert speakers, workshops, and networking opportunities."
      />
      <AgendaDisplay />
      {/* <TimelineDemo /> */}
    </Layout>
  )
}
