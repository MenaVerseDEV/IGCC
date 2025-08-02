// import Layout from '@/components/IGCC/Layout'
// import PageHeader from '@/components/IGCC/PageHeader'
// import Image from 'next/image'
// import DirectorImage from '../../../public/images/Speakers/Dr. Meteb Al-Foheidi.jpg'
// import { Metadata } from 'next'

// type Props = {}
// export const metadata: Metadata = {
//   title: 'Welcome Message | IBCC 2025',
//   description:
//     'Read the welcome message from Dr. Meteb Al-Foheidi, Conference Director of the 17th International Breast Cancer Conference (IBCC 2025) and 4th Breast Cancer Survivorship Summit, taking place in Jeddah, Saudi Arabia.',
//   keywords: [
//     'Breast Cancer Conference 2025',
//     'IBCC 2025',
//     'Breast Cancer Saudi Arabia',
//     'Oncology Conference',
//     'Cancer Survivorship Summit',
//     'Medical Oncology',
//     'Radiation Oncology',
//     'Jeddah Cancer Conference',
//     'Saudi Oncology Society',
//   ],
//   openGraph: {
//     title: 'Welcome Message | IBCC 2025',
//     description: 'Welcome message from Dr. Meteb Al-Foheidi, Conference Director of IBCC 2025 in Jeddah, Saudi Arabia.',
//     images: [
//       {
//         url: '@/public/images/Speakers/Dr. Meteb Al-Foheidi.jpg',
//         width: 800,
//         height: 800,
//         alt: 'Dr. Meteb Al-Foheidi',
//       },
//     ],
//   },
// }

// const MessagePage = (props: Props) => {
//   return (
//     <Layout>
//       <PageHeader
//         title="Welcome"
//         breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Message' }]}
//         subtitle="Messages from Our Leaders"
//         description="Read inspiring messages from conference organizers, keynote speakers, and healthcare leaders who are dedicated to advancing breast cancer research and patient care."
//         variant="gradient"
//         size="lg"
//         showBackgroundPattern={true}
//       />

//       <section className="py-8">
//         <div className="container mx-auto px-4">
//           <div className="rounded-lg p-4 shadow-sm md:p-6">
//             {/* Mobile: Image first, Desktop: Text first */}
//             <div className="space-y-6 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
//               {/* Image - Shows first on mobile, second on desktop */}
//               <div className="order-1 md:order-2 md:col-span-1">
//                 <div className="flex flex-col items-center space-y-3">
//                   <Image
//                     // src={DirectorImage}
//                     alt="Dr. Meteb Al-Foheidi"
//                     width={1080}
//                     height={1080}
//                     quality={100}
//                     className="rounded-lg object-cover md:h-auto md:w-full"
//                   />
//                   <h2 className="text-center text-lg font-semibold text-gray-800 md:text-xl">Dr. Meteb Al-Foheidi</h2>
//                 </div>
//               </div>

//               {/* Content - Shows second on mobile, first on desktop */}
//               <div className="order-2 space-y-4 md:order-1 md:col-span-2">
//                 <p className="text-sm leading-relaxed text-gray-700 md:text-base">
//                   It is with great pleasure that I welcome you to the{' '}
//                   <strong>17th International Breast Cancer Conference (IBCC)</strong> and the{' '}
//                   <strong>4th Breast Cancer Survivorship Summit (BCSS)</strong>, taking place in the vibrant city of
//                   Jeddah, Saudi Arabia, from <strong>2–4 October 2025</strong>.
//                 </p>

//                 <p className="text-sm leading-relaxed text-gray-700 md:text-base">
//                   Over the years, IBCC has grown into a recognized global platform that brings together leading experts,
//                   clinicians, researchers, and healthcare professionals to share the latest advances in breast cancer
//                   care. This year's conference continues this tradition by offering a dynamic and multidisciplinary
//                   program focused on the biology, prevention, diagnosis, treatment, and survivorship of breast cancer.
//                 </p>

//                 <p className="text-sm leading-relaxed text-gray-700 md:text-base">
//                   Our agenda is thoughtfully curated to encourage rich discussions, highlight emerging research, and
//                   promote collaboration across specialties. Whether you are a medical or surgical oncologist,
//                   radiologist, radiation oncologist, pathologist, oncology nurse, pharmacist, or fellow, this summit
//                   will provide you with valuable insights and professional growth opportunities.
//                 </p>
//               </div>
//             </div>

//             {/* Closing paragraph */}
//             <div className="mt-6 space-y-4">
//               <p className="text-sm leading-relaxed text-gray-700 md:text-base">
//                 Join us as we exchange knowledge, strengthen partnerships, and move forward together in the fight
//                 against breast cancer. We look forward to welcoming you to an exceptional and impactful scientific
//                 event.
//               </p>

//               {/* Director info */}
//               <div className="mt-6 rounded-lg bg-primary/35 p-4">
//                 <div className="space-y-1 text-xs text-gray-600 md:text-sm">
//                   <div className="font-semibold text-gray-800">Dr. Meteb Al-Foheidi, MD, FRCPC</div>
//                   <div>Conference Director & Scientific Committee Chairman</div>
//                   <div>President of Saudi Oncology Society</div>
//                   <div>Consultant Breast Medical Oncology - Princess Noorah Oncology Center</div>
//                   <div>Assistant Professor - King Saud Bin Abdulaziz University for Health Sciences (KSAU-HS)</div>
//                   <div>King Abdulaziz Medical City, Jeddah, Saudi Arabia</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   )
// }

// export default MessagePage
import React from 'react'

type Props = {}

function page({}: Props) {
  return <div>page</div>
}

export default page
