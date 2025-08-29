'use client'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import TextAppearAnimation02 from '../animation/TextAppearAnimation02'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import { MODERATORS } from '@/constants/MODERATORS'

const Mentors = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2>
                Meet the <br />
                <span className="font-instrument italic">Expert Mentors</span>
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="flex-1 max-md:w-full">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg !text-center md:place-self-end md:text-right">
                Learn from our experienced mentors who bring valuable expertise, guidance, and inspiration to help shape
                the future of oncology and medical research.
              </p>
            </TextAppearAnimation>

            <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/mentors" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>View All Mentors</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>View All Mentors</span>
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
          modules={[Navigation]}
          className="!pl-[20%]"
          navigation={{
            prevEl: '.swiper-prev-btn',
            nextEl: '.swiper-next-btn',
          }}
          pagination={{ clickable: true }}
          slidesPerView={4}
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
          {MODERATORS.map((mentor, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide w-full">
                <MentorCard mentor={mentor} />
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

export default Mentors

export const MentorCard = ({
  mentor,
}: {
  mentor: {
    image?: string
    name: string
    role: string
  }
}) => {
  return (
    <RevealWrapper className={cn('group relative h-[420px] overflow-hidden rounded-md border dark:border-dark')}>
      {/* Speaker Image */}
      <div className="absolute inset-0 z-0">
        {mentor.image && (
          <Image
            width={1080}
            height={1080}
            src={mentor.image}
            alt={mentor.name}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>

      {/* Default overlay showing only name at bottom */}
      {mentor.image && (
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-primary/80 via-primary/50 to-primary/0 p-4 transition-opacity duration-500 group-hover:opacity-0">
          <h5 className="text-center text-xl font-bold text-white">{mentor.name}</h5>
        </div>
      )}

      {/* Hover overlay showing name and role in center */}
      <div
        className={cn(
          'absolute inset-0 z-20 flex flex-col items-center justify-center bg-primary/80 transition-all duration-500 dark:bg-primary',
          mentor.image ? 'opacity-0 group-hover:opacity-100' : 'opacity-100',
        )}>
        <h5 className="mb-2 text-center text-2xl font-bold text-white">{mentor.name}</h5>
        <p className="px-2 text-center text-xl text-white">{mentor.role}</p>
      </div>
    </RevealWrapper>
  )
}
