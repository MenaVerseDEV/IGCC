import Image from 'next/image'
import mainIcon from '@/public/breast-cancer.png'

const BackgroundIcons = () => {
  return (
    <>
      <div className="absolute right-0 top-[10%] z-[-1] opacity-15">
        <Image
          src={mainIcon}
          alt="Main Icon"
          className="mx-auto max-w-[300px] rotate-[30deg] max-md:max-w-[200px]"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute left-0 top-[14%] z-[-1] opacity-10">
        <Image
          src={mainIcon}
          alt="Main Icon"
          className="mx-auto max-w-[300px] rotate-[230deg] max-md:max-w-[200px]"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute left-0 top-[30%] z-[-1] opacity-20">
        <Image
          src={mainIcon}
          alt="Main Icon"
          className="mx-auto max-w-[200px] rotate-[-30deg] max-md:max-w-[200px]"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute left-[25%] top-[55%] z-[-1] opacity-5">
        <Image
          src={mainIcon}
          alt="Main Icon"
          className="mx-auto max-w-[800px] max-md:max-w-[800px]"
          width={800}
          height={800}
        />
      </div>
    </>
  )
}

export default BackgroundIcons
