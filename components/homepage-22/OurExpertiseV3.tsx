'use client'

import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const WhyAttendConference = () => {
  const conferenceItems = [
    {
      title: 'Medical Oncologists',
      description:
        'Connect with leading medical oncologists presenting cutting-edge treatment protocols and systemic therapy innovations.',
    },
    {
      title: 'Radiologists',
      description:
        'Advanced imaging techniques and diagnostic breakthroughs in oncological radiology and precision medicine.',
    },
    {
      title: 'Radiation Oncologists',
      description:
        'Latest developments in radiation therapy, stereotactic techniques, and treatment planning innovations.',
    },
    {
      title: 'Oncology Pharmacists',
      description:
        'Specialized pharmaceutical care, drug interactions, and personalized medication management in oncology.',
    },
    {
      title: 'Surgical Oncologists',
      description:
        'Minimally invasive techniques, robotic surgery, and multidisciplinary surgical approaches to cancer care.',
    },
    {
      title: 'Medical Fellows',
      description:
        'Specialized training opportunities, Moderatorship programs, and career development in oncology subspecialties.',
    },
    {
      title: 'Pathologists',
      description:
        'Molecular pathology, biomarker identification, and precision diagnostics for targeted cancer therapies.',
    },
    {
      title: 'Oncology Nurses',
      description:
        'Patient care excellence, symptom management, and nursing leadership in comprehensive cancer care delivery.',
    },
  ]

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Why Attend</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3 max-sm:text-[28px]">
              A conference experience that <br />
              <i className="font-instrument">inspires and informs</i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">Join leading experts shaping the future of oncology care and research.</p>
          </TextAppearAnimation>
        </div>

        <article>
          {/* First Row - 3 items */}
          <RevealWrapper className="reveal-me flex flex-col gap-5 md:flex-row md:gap-[30px]">
            {conferenceItems.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="group flex-1 border px-6 pb-10 pt-4 transition-all duration-300 dark:border-dark md:border-b-0">
                <span className="text-5xl font-normal leading-[1.1] tracking-[-2px] text-black/10 dark:text-backgroundBody/10 sm:text-[55px] xl:text-6xl xl:tracking-[-2.88px]">
                  {index + 1}
                </span>
                <h5 className="mb-2.5 mt-5 transition-all duration-300 group-hover:translate-x-2">{item.title}</h5>
                <p className="transition-all duration-300 group-hover:translate-x-4">{item.description}</p>
              </div>
            ))}
          </RevealWrapper>

          {/* Second Row - 2 items */}
          <RevealWrapper className="reveal-me flex flex-col gap-5 md:flex-row md:justify-center md:gap-[30px]">
            {conferenceItems.slice(3, 5).map((item, index) => (
              <div
                key={index + 3}
                className="group max-w-none flex-1 border px-6 py-10 pb-10 pt-4 transition-all duration-300 dark:border-dark md:max-w-[calc(50%-15px)]">
                <span className="text-5xl font-normal leading-[1.1] tracking-[-2px] text-black/10 dark:text-backgroundBody/10 sm:text-[55px] xl:text-6xl xl:tracking-[-2.88px]">
                  {index + 4}
                </span>
                <h5 className="mb-2.5 mt-5 transition-all duration-300 group-hover:translate-x-2">{item.title}</h5>
                <p className="transition-all duration-300 group-hover:translate-x-4">{item.description}</p>
              </div>
            ))}
          </RevealWrapper>

          {/* Third Row - 3 items */}
          <RevealWrapper className="reveal-me flex flex-col gap-5 md:flex-row md:gap-[30px]">
            {conferenceItems.slice(5, 8).map((item, index) => (
              <div
                key={index + 5}
                className="group flex-1 border px-6 pb-10 pt-4 transition-all duration-300 dark:border-dark md:border-t-0">
                <span className="text-5xl font-normal leading-[1.1] tracking-[-2px] text-black/10 dark:text-backgroundBody/10 sm:text-[55px] xl:text-6xl xl:tracking-[-2.88px]">
                  {index + 6}
                </span>
                <h5 className="mb-2.5 mt-5 transition-all duration-300 group-hover:translate-x-2">{item.title}</h5>
                <p className="transition-all duration-300 group-hover:translate-x-4">{item.description}</p>
              </div>
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default WhyAttendConference
