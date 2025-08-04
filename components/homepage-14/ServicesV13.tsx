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

const speakers = [
  {
    slug: 'dr-john-doe',
    name: 'Dr. John Doe',
    image: '/images/career-img/career-img-1.png',
    description: 'Renowned for his groundbreaking research in prostate cancer treatment and targeted therapies.',
    feature: ['30+ years of experience', 'Published 50+ papers', 'Global keynote speaker'],
  },
  {
    slug: 'dr-jane-smith',
    name: 'Dr. Jane Smith',
    image: '/images/career-img/career-img-1.png',
    description: 'Leading urologist focusing on robotic surgeries and minimally invasive procedures.',
    feature: ['Chair of GU Society', 'TEDx Speaker', 'Award-winning surgeon'],
  },
  {
    slug: 'prof-alex-tan',
    name: 'Prof. Alex Tan',
    image: '/images/career-img/career-img-1.png',
    description: 'Expert in advanced stereotactic body radiation therapy for bladder and kidney cancers.',
    feature: ['Harvard-trained', 'Head of Oncology Center', '20+ years clinical work'],
  },
  {
    slug: 'dr-john-doe',
    name: 'Dr. John Doe',
    image: '/images/career-img/career-img-1.png',
    description: 'Renowned for his groundbreaking research in prostate cancer treatment and targeted therapies.',
    feature: ['30+ years of experience', 'Published 50+ papers', 'Global keynote speaker'],
  },
  {
    slug: 'dr-jane-smith',
    name: 'Dr. Jane Smith',
    image: '/images/career-img/career-img-1.png',
    description: 'Leading urologist focusing on robotic surgeries and minimally invasive procedures.',
    feature: ['Chair of GU Society', 'TEDx Speaker', 'Award-winning surgeon'],
  },
  {
    slug: 'prof-alex-tan',
    name: 'Prof. Alex Tan',
    image: '/images/career-img/career-img-1.png',
    description: 'Expert in advanced stereotactic body radiation therapy for bladder and kidney cancers.',
    feature: ['Harvard-trained', 'Head of Oncology Center', '20+ years clinical work'],
  },
]

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
          {speakers.map((speaker, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide w-full">
                <Card speaker={speaker} />
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

const Card = ({ speaker }: { speaker: any }) => {
  return (
    <RevealWrapper
      key={speaker.slug}
      className="group relative h-[500px] overflow-hidden rounded-md border dark:border-dark">
      {/* Speaker Image */}
      <div className="absolute inset-0 z-0">
        <Image
          width={1080}
          height={1080}
          src={speaker.image}
          alt={speaker.name}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay  */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:opacity-30" />
        <h3 className="absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold text-white">
          {speaker.name}
        </h3>
      </div>

      {/* Overlay (on hover) */}
      <div className="absolute z-10 h-full w-full translate-y-full border-t border-white bg-secondary/70 p-8 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-secondary">
        <Link href={`/speakers/${speaker.slug}`}>
          <div className="mb-[55px] flex items-center justify-between gap-1">
            <h5 className="translate-y-5 font-bold text-white opacity-0 transition-all delay-[240ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-backgroundBody max-sm:text-2xl">
              {speaker.name}
              <br />
            </h5>
            <span className="translate-x-20 transition-all duration-1000 group-hover:translate-x-0">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                <path
                  d="M5 16H27"
                  className="stroke-white dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 7L27 16L18 25"
                  className="stroke-white dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <p className="translate-y-5 text-backgroundBody/90 opacity-0 transition-all delay-[340ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100">
            {speaker.description}
          </p>

          <ul className="mt-6 translate-y-5 pl-4 opacity-0 transition-all delay-[440ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100">
            {speaker.feature.map((f: string) => (
              <li key={f} className="list-disc text-base leading-relaxed text-backgroundBody/80">
                {f}
              </li>
            ))}
          </ul>
        </Link>
      </div>
    </RevealWrapper>
  )
}
