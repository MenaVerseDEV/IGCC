'use client'

import { cn } from '@/utils/cn'
import RevealWrapper from '../animation/RevealWrapper'

const GalleryHeroSection = ({
  title,
  description,
  subTitle,

  isNewLine = false,
}: {
  title: string
  description: string
  subTitle: string
  isNewLine?: boolean
}) => {
  return (
    <section className="overflow-hidden pb-14 pt-[120px] sm:pt-[135px] md:min-h-[90vh] md:pb-16 md:pt-[150px] lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-48">
      <div className="relative">
        {/* Gradient Blur Background */}
        <div className="h-fw-full absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 scale-75 blur-[60px]">
          <div className="absolute -top-20 left-1/4 z-20 hidden h-96 w-96 rounded-full bg-primary/30 blur-3xl transition-all duration-500 md:block"></div>
          <div className="absolute -top-20 right-1/3 z-20 hidden h-64 w-64 rounded-full bg-secondary/30 blur-2xl transition-all duration-500 md:block"></div>
        </div>

        {/* Hero Text */}
        <RevealWrapper className="container">
          <h1 className={cn('text-center', isNewLine && 'flex flex-col')}>
            {title} <i className={cn('font-instrument')}>{subTitle}</i>
          </h1>
          <p className="text-muted-foreground mx-auto mt-3 max-w-3xl text-center text-lg">{description}</p>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default GalleryHeroSection
