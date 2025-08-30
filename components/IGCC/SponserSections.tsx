'use client'

import { SPONSORS } from '@/constants/SPONSORS'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

const SponserSections = ({ isPlatium = false }: { isPlatium?: boolean }) => {
  const SonsersData = isPlatium ? [SPONSORS[0]] : SPONSORS
  return (
    <section className="mb-16 space-y-20">
      {SonsersData?.map((sponsor, index) => (
        <Fragment key={index}>
          {/* title */}
          <section className="flex h-[100px] w-full items-center justify-center bg-primary md:h-[160px]">
            <div className="container mx-auto flex max-w-[1000px] items-center justify-start gap-5">
              {/* image */}
              <Image
                src={sponsor.sponserCategory.image}
                alt={sponsor.sponserCategory.title}
                width={250}
                height={350}
                className="max-h-[160px] w-auto max-w-[220px] object-cover md:max-h-[280px] md:min-h-[280px]"
              />
              {/* text */}
              <div className="flex flex-col items-center">
                <div className="">
                  <span className="text-md hidden font-bold text-white md:block">
                    Supporting advancements in healthcare
                  </span>
                  <h2 className="text-4xl font-[800] text-white md:text-6xl">{sponsor.sponserCategory.title}</h2>
                </div>
              </div>
            </div>
          </section>
          {/* cards */}
          <section className="container m-auto grid max-w-[1100px] justify-center gap-6 py-4 md:grid-cols-2 lg:grid-cols-3">
            {sponsor.cards.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className={`flex w-full flex-col items-center rounded-lg bg-white p-6 transition-all duration-300 ease-in-out hover:-translate-y-2`}>
                  <div className="relative mb-4 h-[150px] w-full">
                    <Image src={item.logo} alt={item.name} fill className="h-auto w-auto object-contain" />
                  </div>
                  <h3 className="my-2 w-full text-start text-3xl font-[800] leading-tight">{item.name}</h3>
                  <p className="text-xl text-black/70">{item.description}</p>
                </Link>
              )
            })}
          </section>
        </Fragment>
      ))}
    </section>
  )
}

export default SponserSections
