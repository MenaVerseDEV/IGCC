'use client'
import Image from 'next/image'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import { SpeakersData } from '@/constants'
import Link from 'next/link'

type Speakers = {
  id: number
  name: string
  image: string
  flag: string
  fullDescription: string
}

const TeamV4 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 lg:mb-20">
          <RevealWrapper
            as="p"
            className="text-center font-satoshi text-sm font-normal uppercase leading-6 tracking-[3px]">
            Speakers
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mt-3 text-center lg:mt-5">
              Meet the Voices Shaping the Future of Breast Cancer Care
            </h2>
            <h4 className="mx-auto mt-3 flex w-full items-center justify-center text-center text-lg text-gray-600 lg:mt-4">
              Ordered Alphabetically According To Last Name
            </h4>
          </TextAppearAnimation>
        </div>
        <RevealWrapper
          as="div"
          className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SpeakersData?.map((item: Speakers) => (
            <Link href={`/speakers/${item.id}`} key={item.id} className="group w-full">
              <figure className="relative aspect-square min-h-[270px] w-full overflow-hidden rounded-lg">
                <Image
                  width={720}
                  height={720}
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-1 group-hover:scale-105"
                />
                {/* Hover overlay with gradient background */}
                <div className="absolute inset-0 bg-gradient-to-t from-primaryDark via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-3">
                      <Image
                        width={32}
                        height={32}
                        src={item.flag}
                        alt="Flag"
                        className="h-6 w-8 rounded object-cover"
                      />
                      <h6 className="text-lg font-semibold leading-tight text-white">{item.name}</h6>
                    </div>
                  </div>
                </div>
              </figure>
            </Link>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default TeamV4
