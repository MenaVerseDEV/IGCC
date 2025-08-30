import StartsIn from '../IGCC/StartsIn'

const HeroV14 = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <video
        preload=""
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/video/poster.jpg">
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
      <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-gradient-to-r from-black/70 to-black/70 md:to-black/60"></div>
      <section className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center md:left-1/3 md:top-2/3 md:-translate-x-1/3 md:-translate-y-2/3 md:text-left lg:top-1/2 lg:-translate-y-1/2">
        <h1 className="} mb-3 text-backgroundBody md:leading-none">
          5<sup className="text-backgroundBody">th</sup> International
          <br className="block" />
          Genitourinary Cancer <br className="hidden md:block" />
          <i className="font-instrument text-inherit">Conference 2025</i>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-backgroundBody/80 md:mx-0">
          A global event in urologic oncology, gathering top experts and clinicians.
        </p>

        <p className="mt-2 text-xl font-semibold text-backgroundBody/90">
          20 - 22 November 2025 — Hilton hotel, Jeddah
        </p>
        <StartsIn />

        {/* Primary CTA Button */}
        {/* <ul className="mt-7 flex list-none justify-center md:justify-start lg:mt-14">
          <li className="block w-full text-center md:inline-block md:w-auto">
            <Link href="/registration" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top !text-white">
                <span className="!text-white">Register Now</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Register Now</span>
              </div>
            </Link>
          </li>
        </ul> */}
      </section>
    </section>
  )
}

export default HeroV14
