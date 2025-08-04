import AboutV13 from '@/components/homepage-14/AboutV13'
import HeroV14 from '@/components/homepage-14/HeroV14'
import ServicesV13 from '@/components/homepage-14/ServicesV13'
import GalarySection from '@/components/IGCC/GalarySection'
import Layout from '@/components/IGCC/Layout'
import WhyAttendConference from '@/components/IGCC/WhyAttendConference'
import Image from 'next/image'
import bgIcon from '@/public/nephrology.png'
import kidneyBgIcon from '@/public/kidney.png'
const homepage22 = () => {
  return (
    <Layout>
      <HeroV14 />
      <AboutV13 />
      <WhyAttendConference />
      <ServicesV13 />
      <GalarySection />

      <Image
        src={bgIcon}
        alt="nephrology"
        className="absolute left-[10%] top-[52%] z-[-1] hidden object-cover opacity-10 blur-[4px] sm:block md:h-[600px] md:w-[600px]"
        width={300}
        height={300}
      />
      <Image
        src={kidneyBgIcon}
        alt="kidney"
        className="absolute right-[5%] top-[26%] z-[-1] hidden h-[600px] w-[600px] object-cover opacity-20 blur-[2px] sm:block"
        width={300}
        height={300}
      />
    </Layout>
  )
}

export default homepage22
