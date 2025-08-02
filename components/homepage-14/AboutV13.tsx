import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import HeroGradientAnimationV2 from '../shared/HeroGradientAnimationV2'

const AboutV13 = () => {
  return (
    <section className="relative pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <HeroGradientAnimationV2 />
      <div className="container">
        <div className="text-center">
          {/* Section badge */}
          <RevealWrapper className="rv-badge mb-3">
            <span className="rv-badge-text">Message</span>
          </RevealWrapper>

          {/* Title */}
          <TextAppearAnimation>
            <h2 className="text-appear mb-6">A Message from the Conference Chair</h2>
          </TextAppearAnimation>

          {/* Message */}
          <RevealWrapper as="h5">
            We are pleased to welcome you to the 5<sup>th</sup> International Genitourinary Cancer Conference. This
            scientific gathering brings together specialists from around the globe to share knowledge, collaborate, and
            drive advancements in urologic oncology.
          </RevealWrapper>

          {/* Optional secondary paragraph */}
          <RevealWrapper as="p" className="mx-auto mt-3 max-w-3xl">
            We look forward to insightful discussions, innovative research, and meaningful connections during this
            exceptional event in Jeddah.
          </RevealWrapper>

          {/* Optional CTA */}
          <RevealWrapper as="ul" className="mt-7 justify-self-center max-md:w-full md:mt-14">
            <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
              <Link href="/about" className="rv-button rv-button-white block md:inline-block">
                <div className="rv-button-top">
                  <span>Read More</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Read More</span>
                </div>
              </Link>
            </li>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AboutV13
