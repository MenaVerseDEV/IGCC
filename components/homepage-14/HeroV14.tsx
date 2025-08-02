import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const HeroV14 = () => {
  return (
    <section className="relative h-[80vh] w-screen overflow-hidden lg:h-screen">
      <video
        preload="none"
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline>
        <source src="/video/igbb.mp4" type="video/mp4" />
        <track src="subtitles/lawyer-hero-video-en.vtt" kind="subtitles" srcLang="en" label="English" />
        <track
          src="descriptions/lawyer-hero-video-desc.vtt"
          kind="descriptions"
          srcLang="en"
          label="English Descriptions"
        />
        Your browser does not support the video tag.
      </video>

      {/* overlay    */}
      <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-gradient-to-r from-black/60 to-black/50"></div>
      <RevealWrapper className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center md:left-1/3 md:top-2/3 md:-translate-x-1/3 md:-translate-y-2/3 md:text-left lg:top-1/2 lg:-translate-y-1/2">
        <h1 className="mb-3 text-backgroundBody max-md:leading-none">
          5<sup className="text-backgroundBody">th</sup> International
          <br className="hidden md:block" />
          Genitourinary Cancer
          <br className="hidden md:block" />
          <i className="font-instrument text-inherit">Conference 2025</i>
        </h1>

        <p className="mx-auto max-w-3xl text-backgroundBody/80 md:mx-0">
          A global event in urologic oncology, gathering top experts and clinicians.
        </p>

        <p className="mt-2 text-sm text-backgroundBody/70 md:text-base">20–22 November 2025 — Jeddah, KSA</p>

        {/* Primary CTA Button */}
        <ul className="mt-7 flex list-none justify-center md:justify-start lg:mt-14">
          <li className="block w-full text-center md:inline-block md:w-auto">
            <Link href="/registration" className="rv-button rv-button-primary block !text-white md:inline-block">
              <div className="rv-button-top">
                <span>Register Now</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Register Now</span>
              </div>
            </Link>
          </li>
        </ul>
      </RevealWrapper>
    </section>
  )
}

export default HeroV14
