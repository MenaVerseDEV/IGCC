import React from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'
import { gallaryImages } from '@/constants/gallary'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

function GallaryPageContant() {
  return (
    <section className="relative space-y-5 overflow-hidden pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <RevealWrapper>
        <Marquee speed={60} pauseOnHover gradient={false}>
          <div className="flex items-center gap-6 px-4">
            {gallaryImages.slice(0, 10).map((img, index) => (
              <div
                key={index}
                className="group relative min-w-80 max-w-96 overflow-hidden rounded-xl shadow-md transition-shadow duration-500 hover:shadow-xl">
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
      <RevealWrapper>
        <Marquee speed={60} pauseOnHover gradient={false}>
          <div className="flex items-center gap-6 px-4">
            {gallaryImages
              .slice(10, 20)
              .reverse()
              .map((img, index) => (
                <div
                  key={index}
                  className="group relative min-w-80 max-w-96 overflow-hidden rounded-xl shadow-md transition-shadow duration-500 hover:shadow-xl">
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

      <RevealWrapper>
        <Marquee speed={60} pauseOnHover gradient={false}>
          <div className="flex items-center gap-6 px-4">
            {gallaryImages.slice(10, 20).map((img, index) => (
              <div
                key={index}
                className="group relative min-w-80 max-w-96 overflow-hidden rounded-xl shadow-md transition-shadow duration-500 hover:shadow-xl">
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
      <RevealWrapper>
        <Marquee speed={60} pauseOnHover gradient={false}>
          <div className="flex items-center gap-6 px-4">
            {gallaryImages
              .slice(0, 10)
              .reverse()
              .map((img, index) => (
                <div
                  key={index}
                  className="group relative min-w-80 max-w-96 overflow-hidden rounded-xl shadow-md transition-shadow duration-500 hover:shadow-xl">
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
    </section>
  )
}

export default GallaryPageContant
