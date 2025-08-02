import TeamV4 from '@/components/homepage-05/TeamV4'
import Layout from '@/components/IGCC/Layout'
import PageHeader from '@/components/IGCC/PageHeader'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IBCC 2025 Speakers | Meet the Experts',
  description:
    'Meet the esteemed speakers of IBCC 2025 — top breast cancer experts, clinicians, and healthcare leaders gathering in Jeddah, Saudi Arabia to share their knowledge and latest research.',
  keywords: [
    'IBCC 2025 Speakers',
    'Breast Cancer Conference 2025',
    'Oncology Experts',
    'Medical Conference Jeddah',
    'Cancer Survivorship Summit',
    'Breast Cancer Saudi Arabia',
    'Saudi Oncology Society',
  ],
  openGraph: {
    title: 'IBCC 2025 Speakers | Meet the Experts',
    description:
      'Discover the lineup of top international speakers and medical leaders at IBCC 2025 in Jeddah, Saudi Arabia.',
  },
}
type Props = {}

const SpeakersPage = (props: Props) => {
  return (
    <Layout>
      <PageHeader
        title="IBCC Speakers"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Speakers' }]}
        subtitle="Meet the esteemed speakers of the IBCC conference — thought leaders and experts in the fight against breast cancer."
        variant="gradient"
        size="lg"
        showBackgroundPattern={true}
      />

      <section className="py-16">
        <TeamV4 />
      </section>
    </Layout>
  )
}

export default SpeakersPage
