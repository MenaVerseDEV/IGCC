'use client'

import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import { SPONSORS } from '@/constants/SPONSORS'
import Image from 'next/image'
import Link from 'next/link'

const SponserSections = () => {
  const platinumSponsors = SPONSORS.filter((s) => s.category === 'Platinum')

  return (
    <section className="relative overflow-hidden pb-14 pt-14">
      <div className="container">
        {/* Header */}
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Sponsors</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3 max-sm:text-[28px]">
              Our <i className="font-instrument">Platinum</i> Sponsors
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">
              We are proud to be supported by leading organizations driving innovation and excellence in oncology.
            </p>
          </TextAppearAnimation>
        </div>

        {/* Platinum Sponsors */}
        {platinumSponsors.length > 0 && <SponserCard tiitle="Platinum Sponsors" Sponsers={platinumSponsors} />}
        <ul className="container mx-auto mt-7 flex w-full list-none items-center justify-center md:justify-start">
          <li className="m-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/sponsors" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span className="!text-white">Show More</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Show More</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default SponserSections

export const SponserCard = ({ tiitle, Sponsers }: { tiitle: string; Sponsers: any }) => {
  return (
    <div className="mb-14">
      <TextAppearAnimation>
        <h3 className="mb-6 text-center text-4xl font-bold !text-primary">{tiitle}</h3>
      </TextAppearAnimation>
      <RevealWrapper className="reveal-me grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Sponsers?.map((sponsor: any, index: number) => (
          <Link
            key={index}
            href={sponsor.link}
            target="_blank"
            className="group flex items-center justify-center rounded-md border bg-white p-4">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={200}
              height={100}
              className="max-h-[120px] object-contain transition-all duration-300 group-hover:scale-105"
            />
          </Link>
        ))}
      </RevealWrapper>
    </div>
  )
}
