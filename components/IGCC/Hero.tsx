import RevealWrapper from '../animation/RevealWrapper'

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-screen overflow-hidden lg:h-screen">
      <div className="absolute -bottom-4 left-0 h-full w-full bg-gradient-to-b from-primary/10 to-[#f1dce6]" />
      <video
        preload="none"
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline>
        <source
          src="/video/Day 3_ 16th International breast Cancer conference _ 3-5 October 2024.mp4"
          type="video/mp4"
        />
        <track src="subtitles/lawyer-hero-video-en.vtt" kind="subtitles" srcLang="en" label="English" />
        <track
          src="descriptions/lawyer-hero-video-desc.vtt"
          kind="descriptions"
          srcLang="en"
          label="English Descriptions"
        />
        Your browser does not support the video tag.
      </video>

      <RevealWrapper className="reveal-me container absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="rv-badge mb-1 backdrop-blur-md">
          <span className="rv-badge-text">IBCC 2025</span>
        </div>
        <h1 className="max-sm:text-4xlc mb-3 font-bold max-md:leading-none">
          17<sup>th</sup> Breast Cancer Conference
        </h1>

        <p className="mx-auto max-w-3xl">
          Join the leading breast cancer event in the region — bringing together experts, specialists, and healthcare
          professionals to advance cancer care and survivorship.
        </p>
      </RevealWrapper>
    </section>
  )
}

export default Hero
