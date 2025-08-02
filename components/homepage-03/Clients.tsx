'use client'

import SectionHeader from '../shared/SectionHeader'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'

const sponsorPlaceholder = '/images/marquee-img/our-portfolio-06.png'

const sponsors = [
  { id: 1, logo: sponsorPlaceholder },
  { id: 2, logo: sponsorPlaceholder },
  { id: 3, logo: sponsorPlaceholder },
  { id: 4, logo: sponsorPlaceholder },
  { id: 5, logo: sponsorPlaceholder },
  { id: 6, logo: sponsorPlaceholder },
]

const reverseSponsors = [...sponsors]

const Sponsors = () => {
  return (
    <section className="relative mt-14 overflow-hidden bg-dark py-20 md:mt-16 lg:mt-[88px] lg:py-[120px] xl:mt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            headingTitle="Meet Our Sponsors"
            italicTitle="Proudly"
            serviceHeadingColor
            description="Grateful for the generous support of our partners making this event possible."
          />
        </div>
      </div>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover>
          <div className="flex items-center justify-between gap-x-20 py-8 md:gap-x-36">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="transition-transform duration-300 first:ml-20 hover:scale-110 md:first:ml-36">
                {/* <Image src={sponsor.logo} alt="Sponsor Logo" width={120} height={60} /> */}
                <div className="h-[120px] w-[240px] bg-gray-200"></div>
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover direction="right">
          <div className="flex items-center justify-between gap-x-20 py-8 md:gap-x-36">
            {reverseSponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="transition-transform duration-300 first:ml-20 hover:scale-110 md:first:ml-36">
                {/* <Image src={sponsor.logo} alt="Sponsor Logo" width={120} height={60} /> */}{' '}
                <div className="h-[120px] w-[240px] bg-gray-200"></div>
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default Sponsors
