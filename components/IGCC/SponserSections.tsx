'use client'

import { SPONSORS } from '@/constants/SPONSORS'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SponserSections = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const [currentSponsorIndex, setCurrentSponsorIndex] = useState(0)

  useEffect(() => {
    // Only set up the interval if isHomePage is true
    if (isHomePage) {
      const interval = setInterval(() => {
        setCurrentSponsorIndex((prevIndex) => (prevIndex + 1) % SPONSORS.length)
      }, 5000) // 5 seconds

      return () => clearInterval(interval) // Clean up on unmount
    }
  }, [isHomePage])

  // If it's homepage, only show the current sponsor category
  const sponsorsToShow = isHomePage ? [SPONSORS[currentSponsorIndex]] : SPONSORS

  return (
    <section className="mb-16 space-y-20">
      {isHomePage ? (
        <AnimatePresence mode="wait">
          {sponsorsToShow.map((sponsor) => (
            <motion.div
              key={currentSponsorIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="my-10 space-y-20">
              <Fragment>
                {/* title */}
                <section className="flex h-[100px] w-full items-center justify-center bg-primary md:h-[160px]">
                  <div className="container mx-auto flex max-w-[1000px] items-center justify-start gap-5">
                    {/* image */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}>
                      <Image
                        src={sponsor.sponserCategory.image}
                        alt={sponsor.sponserCategory.title}
                        width={250}
                        height={350}
                        className="max-h-[160px] w-auto max-w-[220px] object-contain md:max-h-[280px] md:min-h-[280px]"
                      />
                    </motion.div>
                    {/* text */}
                    <div className="flex flex-col items-center">
                      <div className="">
                        <motion.span
                          className="text-md hidden font-bold text-white md:block"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}>
                          Supporting advancements in healthcare
                        </motion.span>
                        <motion.h2
                          className="text-4xl font-[800] text-white md:text-6xl"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}>
                          {sponsor.sponserCategory.title}
                        </motion.h2>
                      </div>
                    </div>
                  </div>
                </section>
                {/* cards */}
                <section className="container m-auto grid max-w-[1100px] justify-center gap-6 py-4 md:grid-cols-2 lg:grid-cols-3">
                  {sponsor.cards.map((item, cardIndex) => (
                    <motion.div
                      key={cardIndex}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * cardIndex }}>
                      <Link
                        href={item.link}
                        className="flex w-full flex-col items-center rounded-lg bg-white p-6 transition-all duration-300 ease-in-out hover:-translate-y-2">
                        <div className="relative mb-4 h-[150px] w-full">
                          <Image src={item.logo} alt={item.name} fill className="h-auto w-auto object-contain" />
                        </div>
                        <h3 className="my-2 w-full text-start text-3xl font-[800] leading-tight">{item.name}</h3>
                        <p className="text-xl text-black/70">{item.description}</p>
                      </Link>
                    </motion.div>
                  ))}
                </section>
              </Fragment>
            </motion.div>
          ))}
        </AnimatePresence>
      ) : (
        // Regular non-animated version for non-homepage
        <>
          {sponsorsToShow.map((sponsor, index) => (
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
                    className="max-h-[160px] w-auto max-w-[220px] object-contain md:max-h-[280px] md:min-h-[280px]"
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
                {sponsor.cards.map((item, cardIndex) => (
                  <Link
                    href={item.link}
                    key={cardIndex}
                    className="flex w-full flex-col items-center rounded-lg bg-white p-6 transition-all duration-300 ease-in-out hover:-translate-y-2">
                    <div className="relative mb-4 h-[150px] w-full">
                      <Image src={item.logo} alt={item.name} fill className="h-auto w-auto object-contain" />
                    </div>
                    <h3 className="my-2 w-full text-start text-3xl font-[800] leading-tight">{item.name}</h3>
                    <p className="text-xl text-black/70">{item.description}</p>
                  </Link>
                ))}
              </section>
            </Fragment>
          ))}
        </>
      )}
    </section>
  )
}

export default SponserSections
