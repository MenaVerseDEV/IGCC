'use client'

import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import { Stethoscope, Syringe, Radiation, Microscope, BriefcaseMedical, Hospital, ClipboardMinus } from 'lucide-react'

const TargetAudienceSection = () => {
  const audienceItems = [
    {
      title: 'Medical Oncologists',
      icon: Stethoscope,
      description:
        'Connect with experts presenting the latest in systemic therapy, immunotherapy, and precision medicine.',
    },
    {
      title: 'Urologists',
      icon: Syringe,
      description:
        'Explore surgical techniques, innovations in urologic oncology, and multidisciplinary approaches to care.',
    },
    {
      title: 'Radiation Oncologists',
      icon: Microscope,
      description:
        'Gain insights into advanced radiation techniques, including SBRT, IMRT, and personalized treatment planning.',
    },
    {
      title: 'Clinical Pharmacists',
      icon: Hospital,
      description:
        'Engage with discussions on drug interactions, oncology pharmacotherapy, and the pharmacist’s role in cancer care teams.',
    },
    {
      title: 'Pathologists',
      icon: ClipboardMinus,
      description:
        'Discover advancements in molecular diagnostics, tumor profiling, and pathology’s evolving role in precision oncology.',
    },
    {
      title: 'Nurses',
      icon: BriefcaseMedical,
      description:
        'Enhance patient-centered care skills, symptom management strategies, and interprofessional collaboration practices.',
    },
  ]

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Target Audience</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3 max-sm:text-[28px]">
              Designed for professionals <br />
              <i className="font-instrument">advancing urologic oncology</i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">
              The conference welcomes a multidisciplinary audience shaping the future of cancer care.
            </p>
          </TextAppearAnimation>
        </div>

        <article>
          <RevealWrapper className="reveal-me grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audienceItems.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-start rounded-md border p-6 transition-all duration-300 dark:border-dark">
                <div className="bg-muted mb-4 rounded-full !text-gray-400">
                  <item.icon color="gray" className="h-8 w-8 !text-gray-400" />
                </div>
                <h5 className="mb-2.5 mt-1 text-lg font-semibold transition-all duration-300 group-hover:translate-x-2">
                  {item.title}
                </h5>
                <p className="text-muted-foreground transition-all duration-300 group-hover:translate-x-4">
                  {item.description}
                </p>
              </div>
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default TargetAudienceSection
