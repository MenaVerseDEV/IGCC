'use client'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import TextAppearAnimation02 from '../animation/TextAppearAnimation02'
import Image from 'next/image'
import { SPEAKERS } from '@/constants/SPEAKERS'
import { cn } from '@/utils/cn'

const ServicesV13 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2>
                Meet the <br />
                <span className="font-instrument italic">Expert Speakers</span>
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="flex-1 max-md:w-full">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg !text-center md:place-self-end md:text-right">
                Discover our distinguished lineup of world-renowned professionals sharing insights on genitourinary
                cancers and breakthroughs in oncology.
              </p>
            </TextAppearAnimation>

            <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/speakers" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>View All Speakers</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>View All Speakers</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <RevealWrapper className="reveal-me relative">
        <Swiper
          spaceBetween={30}
          modules={[Navigation, Autoplay]}
          className="!pl-[20%]"
          navigation={{
            prevEl: '.swiper-prev-btn',
            nextEl: '.swiper-next-btn',
          }}
          pagination={{ clickable: true }}
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}>
          {SPEAKERS.map((speaker, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide w-full">
                <SpeakerCard maxHeight="h-[500px]" speaker={speaker} />
              </div>
            </SwiperSlide>
          ))}
          <div className="mt-8 flex items-center space-x-2">
            <button className="swiper-prev-btn size-[72px] border bg-backgroundBody p-5 duration-300 hover:bg-primary active:bg-primary dark:border-dark dark:bg-secondary dark:hover:bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={33} viewBox="0 0 32 33" fill="none">
                <path
                  d="M27 16.25H5"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 7.25L5 16.25L14 25.25"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="swiper-next-btn group size-[72px] border bg-backgroundBody p-5 duration-300 hover:bg-primary active:bg-primary dark:border-dark dark:bg-secondary dark:hover:bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={33} viewBox="0 0 32 33" fill="none">
                <path
                  d="M5 16.25H27"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 7.25L27 16.25L18 25.25"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </RevealWrapper>
    </section>
  )
}

export default ServicesV13

export const SpeakerCard = ({
  speaker,
  maxHeight = 'h-[420px] md:h-[460px]',
}: {
  speaker: any
  maxHeight?: string
}) => {
  return (
    <RevealWrapper className={cn('group relative overflow-hidden rounded-md border dark:border-dark', maxHeight)}>
      {/* Speaker Image */}
      <div className="absolute inset-0 z-0">
        <img
          // width={1080}
          // height={1080}
          src={speaker.image}
          alt={speaker.name}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Flag - Top Right Corner (Always Visible) */}
      {speaker.flag && (
        <div className="absolute right-3 top-3 z-20 transition-transform duration-300 group-hover:scale-110">
          <Image
            src={speaker.flag}
            alt={`${speaker.name} flag`}
            width={56}
            height={56}
            className="rounded-md border-2 border-white/20 shadow-lg"
          />
        </div>
      )}

      {/* Bottom Content - Name Always Visible */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/60 via-black/40 to-transparent p-4 backdrop-blur-sm transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40">
        <h5 className="text-center text-[16px] font-bold text-white transition-all duration-300 group-hover:mb-2 group-hover:text-[18px] md:text-[22px] md:group-hover:text-[24px]">
          {speaker.name}
        </h5>
      </div>

      {/* Hover Overlay for Enhanced Interaction */}
      <div className="z-5 absolute inset-0 bg-black/30 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />
    </RevealWrapper>
  )
}
