'use client'

import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import Image from 'next/image'
import Link from 'next/link'
import { gallaryImages } from '@/constants/gallary'

const image = '/images/marquee-img/our-portfolio-06.png'

const GallerySection = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
          <RevealWrapper className="rv-badge reveal-me mb-3">
            <span className="rv-badge-text">Gallery</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Discover the
              <br className="hidden md:block" />
              <i className="font-instrument"> Moments of </i>
              <i className="font-instrument">IGCC Events</i>
            </h2>
          </TextAppearAnimation>
        </div>
      </div>

      <RevealWrapper>
        <Marquee speed={60} pauseOnHover gradient={false}>
          <div className="flex items-center gap-6 px-4">
            {gallaryImages.map((img, index) => (
              <div
                key={index}
                className="group relative min-w-80 overflow-hidden rounded-xl shadow-md transition-shadow duration-500 hover:shadow-xl">
                <Image
                  width={300}
                  height={200}
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  quality={90}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <ul className="container mx-auto mt-7 flex w-full list-none items-center justify-center md:justify-start">
        <li className="m-auto block w-full text-center md:inline-block md:w-auto">
          <Link href="/gallery" className="rv-button rv-button-primary block md:inline-block">
            <div className="rv-button-top">
              <span>Show More</span>
            </div>
            <div className="rv-button-bottom">
              <span className="text-nowrap">Show More</span>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default GallerySection
