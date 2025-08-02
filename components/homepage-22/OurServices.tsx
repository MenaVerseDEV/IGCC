'use client'

import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Image from 'next/image'
export type AgendaType = {
  slug: string
  title: string
  description: string
  date: string
  time: string
  hall: string
  number: string
  image: string
}

const agendaData: AgendaType[] = [
  {
    slug: 'day-1-advances',
    title: 'Day 1: Advances in Breast Cancer Treatment',
    description:
      'Experts will explore new systemic therapies, precision medicine, and updates in surgical and radiation oncology.',
    date: 'Thursday, 2 October 2025',
    time: '03:00 PM - 09:00 PM',
    hall: 'Hilton Hotel - Main Hall',
    number: '1',
    image: '/images/agent/17.png',
  },
  {
    slug: 'day-2-survivorship',
    title: 'Day 2: Breast Cancer Survivorship Care',
    description:
      'Sessions will cover survivorship planning, psycho-social support, and long-term care strategies for patients post-treatment.',
    date: 'Friday, 3 October 2025',
    time: '09:00 AM - 05:00 PM',
    hall: 'Hilton Hotel - Hall A',
    number: '2',
    image: '/images/agent/17.png',
  },
  {
    slug: 'day-3-regional-updates',
    title: 'Day 3: Regional Guidelines & Case Discussions',
    description:
      'Interactive case-based sessions and panel discussions highlighting regional protocols and clinical challenges.',
    date: 'Saturday, 4 October 2025',
    time: '09:00 AM - 04:00 PM',
    hall: 'Hilton Hotel - Conference Room B',
    number: '3',
    image: '/images/agent/17.png',
  },
]
const AgendaSection = () => {
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section
      ref={triggerRef}
      className="agenda-section relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <h2>
          Agenda <i className="font-instrument">Featured Sessions</i>
        </h2>
      </div>

      <article
        ref={contentRef}
        className="agenda-wrapper reveal-me mt-16 flex w-fit flex-row flex-nowrap gap-6 overflow-x-hidden pl-[10%]">
        {agendaData.map((session) => (
          <div
            className="group w-[calc(100vw-24px)] border p-4 dark:border-dark md:w-[740px] md:p-[30px] lg:w-[890px]"
            key={session.slug}>
            <div className="flex flex-col items-start gap-y-7 md:flex-row md:gap-x-12">
              <figure>
                <Image
                  width={270}
                  height={270}
                  src={session.image || '/placeholder.svg'}
                  alt={session.title}
                  className="h-auto w-full rounded-lg"
                />
              </figure>
              <div className="flex flex-col justify-between">
                <h4 className="text-[25px] font-semibold lg:text-[36px]">{session.title}</h4>
                <p className="mt-2 text-base lg:text-lg">{session.description}</p>
                <ul className="mt-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    📅 <strong>Date:</strong> {session.date}
                  </li>
                  <li>
                    ⏰ <strong>Time:</strong> {session.time}
                  </li>
                  <li>
                    🏛️ <strong>Hall:</strong> {session.hall}
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-3 flex items-end justify-end">
              <span className="text-5xl font-normal leading-[1.1] tracking-[-2px] text-black/10 dark:text-backgroundBody/10 sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:tracking-[-2.88px]">
                {session.number}
              </span>
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}

export default AgendaSection
