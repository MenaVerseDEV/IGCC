import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import Image from 'next/image'
const image = '/images/marquee-img/our-portfolio-06.png'
const speakersData = [
  {
    id: 1,
    src: image,
    alt: 'Speaker 1',
    name: 'John Smith',
  },
  {
    id: 2,
    src: image,
    alt: 'Speaker 2',
    name: 'Sarah Johnson',
  },
  {
    id: 3,
    src: image,
    alt: 'Speaker 3',
    name: 'Michael Brown',
  },
  {
    id: 4,
    src: image,
    alt: 'Speaker 4',
    name: 'Emily Davis',
  },
  {
    id: 5,
    src: image,
    alt: 'Speaker 5',
    name: 'David Wilson',
  },
  {
    id: 6,
    src: image,
    alt: 'Speaker 6',
    name: 'Lisa Anderson',
  },
  {
    id: 7,
    src: image,
    alt: 'Speaker 7',
    name: 'Robert Taylor',
  },
  {
    id: 8,
    src: image,
    alt: 'Speaker 8',
    name: 'Jennifer Martinez',
  },
  {
    id: 9,
    src: image,
    alt: 'Speaker 9',
    name: 'Christopher Lee',
  },
  {
    id: 10,
    src: image,
    alt: 'Speaker 10',
    name: 'Amanda White',
  },
]

const OurSpeakers = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
          <RevealWrapper className="rv-badge reveal-me mb-3">
            <span className="rv-badge-text">Our Speakers</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Meet our
              <br className="hidden md:block" />
              <i className="font-instrument"> inspiring </i>
              <i className="font-instrument">speakers </i>
            </h2>
          </TextAppearAnimation>
        </div>
      </div>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover>
          <div className="flex items-center justify-around gap-5 md:gap-[30px]">
            {speakersData.map((speaker) => (
              <div
                className="group relative h-72 min-w-60 overflow-hidden rounded-lg md:h-[460px] md:min-w-[370px]"
                key={speaker.id}>
                <Image
                  src={speaker.src}
                  width={370}
                  height={460}
                  alt={speaker.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Name at bottom */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold text-white md:text-xl">{speaker.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover direction="right">
          <div className="flex items-center justify-around gap-5 pt-[30px] md:gap-[30px]">
            {speakersData.toReversed().map((speaker) => (
              <div
                className="group relative h-72 min-w-60 overflow-hidden rounded-lg md:h-[460px] md:min-w-[370px]"
                key={speaker.id}>
                <Image
                  width={370}
                  height={460}
                  src={speaker.src}
                  alt={speaker.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Name at bottom */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold text-white md:text-xl">{speaker.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default OurSpeakers
