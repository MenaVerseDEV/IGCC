import Layout from '@/components/IGCC/Layout'
import Image from 'next/image'
import { Metadata } from 'next'
import GalleryHeroSection from '@/components/IGCC/HeroSection'
import DirectorImage from '@/public/images/speakers/Prof. Mubarak Al Mansour.png'

type Props = {}

export const metadata: Metadata = {
  title: 'Message from the Chair | IGCC 2025',
  description:
    'Prof. Mubarak Al Mansour, Chairman of the International Genitourinary Cancer Conference (IGCC), welcomes attendees to the 5th IGCC in Jeddah, Saudi Arabia.',
  keywords: [
    'IGCC Message',
    'Prof. Mubarak Al Mansour',
    'IGCC 2025',
    'Genitourinary Cancer Conference',
    'Saudi Arabia Oncology Event',
    'IGCC Chairman Message',
  ],
  openGraph: {
    title: 'Message from the Chair | IGCC 2025',
    description:
      'Read the welcome message from Prof. Mubarak Al Mansour, Chairman of the 5th International Genitourinary Cancer Conference (IGCC) in Jeddah, Saudi Arabia.',
    siteName: 'IGCC 2025',
    images: [
      {
        url: '/images/speakers/Prof. Mubarak Al Mansour.png',
        width: 1200,
        height: 630,
        alt: 'Prof. Mubarak Al Mansour - IGCC Chairman',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Message from the Chair | IGCC 2025',
    description:
      'Prof. Mubarak Al Mansour shares his welcome note for the 5th International Genitourinary Cancer Conference (IGCC) 2025 in Jeddah.',
    images: ['/images/speakers/Prof. Mubarak Al Mansour.png'],
  },
}

const MessagePage = (props: Props) => {
  return (
    <Layout>
      <GalleryHeroSection
        title="Message from the Chairman"
        subTitle="Prof. Mubarak Al Mansour"
        isNewLine
        description="Welcome note for the 5th International Genitourinary Cancer Conference (IGCC) 2025"
      />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-lg p-4 shadow-sm md:p-6">
            {/* Mobile: Image first, Desktop: Text first */}
            <div className="space-y-6 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
              {/* Image */}
              <div className="order-1 md:order-2 md:col-span-1">
                <div className="flex flex-col items-center space-y-3">
                  <Image
                    src={DirectorImage}
                    alt="Prof. Mubarak Al Mansour"
                    width={1080}
                    height={1080}
                    quality={100}
                    className="rounded-lg object-cover md:h-auto md:w-full"
                  />

                  <div className="space-y-2 text-white">
                    <h3 className="text-xl font-bold">Prof. Mubarak Al Mansour</h3>
                    <ul className="text-md space-y-2 leading-relaxed text-blue-100">
                      <li className="">Chairman, International Genitourinary Cancer Conference</li>
                      <li>Consultant, King Abdulaziz Medical City</li>
                      <li>Ministry of National Guard Health Affairs, Jeddah</li>
                      <li>Professor, College of Medicine - Jeddah</li>
                      <li>King Saud bin Abdulaziz University for Health Sciences</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-2 space-y-4 md:order-1 md:col-span-2">
                <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                  It is with great pride and immense pleasure that I welcome you to the 5<sup>th</sup> International
                  Genitourinary Cancer Conference (IGCC), to be held from 20 to 22 November 2025 at the prestigious
                  Hilton Hotel in Jeddah, Kingdom of Saudi Arabia.
                </p>

                <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                  Since its inception, IGCC has grown to become a leading platform for scientific exchange, professional
                  collaboration, and advancement in the field of genitourinary oncology. This year, we mark a
                  significant milestone as we gather for the fifth edition of this esteemed conference, an event that
                  continues to unite a global community of oncologists, urologists, pathologists, clinical pharmacists,
                  and healthcare professionals dedicated to improving outcomes in genitourinary cancers.
                </p>

                <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                  The 2025 program promises a rich and diverse scientific agenda, featuring keynote lectures, expert
                  panels, and interactive discussions that reflect the latest breakthroughs in diagnostics,
                  therapeutics, and multidisciplinary approaches to care. We are also proud to highlight innovative
                  research and foster discussions that address regional challenges and global perspectives in
                  genitourinary oncology.
                </p>

                <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                  Jeddah, the gateway to the Two Holy Mosques and a city steeped in history and hospitality, offers a
                  fitting backdrop for this international gathering. We invite you to experience the warmth of Saudi
                  culture alongside a stimulating academic experience.
                </p>

                <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                  As the Conference Chairman and on behalf of the organizing committee, I extend my heartfelt gratitude
                  to our distinguished speakers, sponsors, moderators, organizing committees, and all attendees whose
                  dedication and contributions make this conference possible. Together, let us continue to push the
                  boundaries of knowledge and collaborate toward a future of excellence in patient care.
                </p>

                <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                  We look forward to welcoming you to Jeddah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default MessagePage
