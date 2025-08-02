'use client'

import RevealWrapper from '../animation/RevealWrapper'
import Image from 'next/image'

const GalleryHeroSection = ({
  title,
  description,
  subTitle,
}: {
  title: string
  description: string
  subTitle: string
}) => {
  return (
    <section className="overflow-hidden pb-14 pt-[120px] sm:pt-[135px] md:min-h-[90vh] md:pb-16 md:pt-[150px] lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-48">
      <div className="relative">
        {/* Gradient Blur Background */}
        <div className="h-fw-full absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 scale-75 blur-[60px]">
          <Image
            src="/images/hero-gradient-bg.png"
            alt="hero gradient background"
            width={1000}
            height={1000}
            className="absolute left-[42%] top-[44%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {/* Hero Text */}
        <RevealWrapper className="container">
          <h1 className="text-center">
            {title} <i className="font-instrument">{subTitle}</i>
          </h1>
          <p className="text-muted-foreground mx-auto mt-3 max-w-3xl text-center text-lg">{description}</p>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default GalleryHeroSection
