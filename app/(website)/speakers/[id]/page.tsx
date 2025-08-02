import Layout from '@/components/IGCC/Layout'
import PageHeader from '@/components/IGCC/PageHeader'
import { SpeakersData } from '@/constants'
import { Metadata } from 'next'
import Image from 'next/image'

// dynamic metadata function
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const speaker = SpeakersData.find((speaker) => String(speaker.id) == id)

  if (!speaker) {
    return {
      title: 'Speaker Not Found | IBCC 2025',
      description: 'The speaker you are looking for does not exist.',
    }
  }

  return {
    title: `${speaker.name} | IBCC 2025 Speaker`,
    description: `${speaker.name}, speaker at IBCC 2025 — ${speaker.country}. ${speaker.fullDescription}`,
    openGraph: {
      title: `${speaker.name} | IBCC 2025 Speaker`,
      description: `${speaker.name}, speaker at IBCC 2025 — ${speaker.country}. ${speaker.fullDescription}`,
      images: [
        {
          url: speaker.image,
          width: 800,
          height: 800,
          alt: speaker.name,
        },
      ],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${speaker.name} | IBCC 2025 Speaker`,
      description: `${speaker.name}, speaker at IBCC 2025 — ${speaker.country}. ${speaker.fullDescription}`,
      images: [speaker.image],
    },
  }
}
const SpeakersPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const speaker = SpeakersData.find((speaker) => String(speaker.id) == id)

  if (!speaker) {
    return (
      <Layout>
        <PageHeader
          title={'Speaker Not Found'}
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Speakers', href: '/speakers' }, { label: 'Not Found' }]}
          variant="gradient"
          size="lg"
          showBackgroundPattern={true}
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">Speaker Not Found</h2>
              <p className="text-gray-600">The speaker you're looking for doesn't exist.</p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      <PageHeader
        title={'Speaker Details'}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Speakers', href: '/speakers' },
          { label: speaker?.name ?? '' },
        ]}
        variant="gradient"
        size="lg"
        showBackgroundPattern={true}
      />

      <div className="container my-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          {/* Speaker Image and Info - Shows first on mobile */}
          <div className="flex flex-col items-center gap-4 lg:order-2 lg:col-span-1">
            <Image
              src={speaker.image}
              alt={speaker.name}
              quality={100}
              width={1200}
              height={1200}
              className="h-64 w-64 rounded-lg object-cover sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />

            <div className="flex items-center gap-2">
              <Image
                src={speaker.flag}
                alt={speaker.country}
                width={32}
                height={32}
                className="h-6 w-6 object-cover sm:h-8 sm:w-8"
              />
              <h2 className="text-lg font-bold text-gray-800 sm:text-xl lg:text-2xl">{speaker.name}</h2>
            </div>
          </div>

          {/* Description - Shows second on mobile */}
          <div className="lg:order-1 lg:col-span-2">
            <h2 className="mb-6 flex w-full items-center gap-3 text-xl font-bold text-gray-800 sm:text-2xl">
              <div className="h-6 w-1 rounded-full bg-primary sm:h-8"></div>
              About {speaker.name.split(' ').slice(-1)[0]}
            </h2>

            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <div className="space-y-4 leading-relaxed text-gray-700">
                {speaker.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-justify">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SpeakersPage
