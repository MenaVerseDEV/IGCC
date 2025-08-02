'use client'

import { useState } from 'react'
import Layout from '@/components/IGCC/Layout'
import PageHeader from '@/components/IGCC/PageHeader'
import Image from 'next/image'
import { Clock, Calendar, Users } from 'lucide-react'

interface Speaker {
  name: string
  image?: string
}

interface ScheduleItem {
  time: string
  title: string
  speaker?: string
  speakerImage?: string
  type?: 'break' | 'session' | 'workshop' | 'discussion'
}

interface Session {
  title: string
  subtitle?: string
  items: ScheduleItem[]
}

interface DaySchedule {
  day: string
  date: string
  fullDate: string
  sessions: Session[]
}

const scheduleData: DaySchedule[] = [
  {
    day: 'DAY 1',
    date: 'Thursday',
    fullDate: '24 April 2025',
    sessions: [
      {
        title: 'Registration',
        items: [
          {
            time: '01:00 pm',
            title: 'Registration',
            type: 'break',
          },
        ],
      },
      {
        title: 'Nursing Workshop',
        subtitle: 'Empowering Nurses to Care for Patients Receiving Cellular and Bispecific Therapies',
        items: [
          {
            time: '03:00 - 03:05 pm',
            title: 'Opening Remarks & Introduction',
            speaker: 'Prof. Mubarak Al Mansour',
            type: 'session',
          },
          {
            time: '03:05 - 03:35 pm',
            title: 'Overview of CART Cells and Bispecific',
            speaker: 'Dr. Sameer Alamoudi',
            type: 'session',
          },
          {
            time: '03:35 - 04:05 pm',
            title: 'Toxicity and Side Effects',
            speaker: 'Dr. Nuha Faira',
            type: 'session',
          },
          {
            time: '04:05 - 04:20 pm',
            title: 'Break and Prayer',
            type: 'break',
          },
          {
            time: '04:20 - 04:45 pm',
            title: 'Nurse Experience and Care',
            speaker: 'Mr. Osama Younis',
            type: 'session',
          },
          {
            time: '04:45 - 05:00 pm',
            title: 'Panel Discussions',
            speaker: 'Workshop Speakers',
            type: 'discussion',
          },
          {
            time: '05:00 pm',
            title: 'Workshop Closing Remarks',
            speaker: 'Prof. Mubarak Al Mansour',
            type: 'session',
          },
        ],
      },
      {
        title: 'SESSION 1: T-CELL LYMPHOMA',
        subtitle: 'Part 1',
        items: [
          {
            time: '05:30 - 05:40 pm',
            title: 'Welcome and Opening Remarks',
            speaker: 'Prof. Mubarak Al Mansour',
            type: 'session',
          },
          {
            time: '05:40 - 05:55 pm',
            title: "What's new in Peripheral T-cell lymphoma?",
            speaker: "Prof. Owen O'Connor",
            speakerImage: '/placeholder.svg?height=60&width=60',
            type: 'session',
          },
          {
            time: '05:55 - 06:10 pm',
            title: 'How do I Treat Relapsed T-Cell Lymphoma?',
            speaker: "Prof. Owen O'Connor",
            speakerImage: '/placeholder.svg?height=60&width=60',
            type: 'session',
          },
          {
            time: '06:10 - 06:25 pm',
            title: 'Q&A Discussion',
            type: 'discussion',
          },
          {
            time: '06:25 - 06:40 pm',
            title: 'Is there a Role for Transplant in PTCL?',
            speaker: 'Dr. Nora Bennani',
            speakerImage: '/placeholder.svg?height=60&width=60',
            type: 'session',
          },
          {
            time: '06:40 - 06:55 pm',
            title: 'Is CART-cell Therapy Part of the Future of T-Cell Lymphomas?',
            speaker: 'Dr. Nora Bennani',
            speakerImage: '/placeholder.svg?height=60&width=60',
            type: 'session',
          },
          {
            time: '06:55 - 07:10 pm',
            title: 'Q&A Discussion',
            type: 'discussion',
          },
          {
            time: '07:10 - 07:25 pm',
            title: 'Maghrib Prayer & Coffee Break',
            type: 'break',
          },
        ],
      },
      {
        title: 'SESSION 2: T-CELL LYMPHOMA',
        subtitle: 'Part 2',
        items: [
          {
            time: '07:25 - 07:40 pm',
            title: 'What Role does Mogamulizumab Play in Treating MF and SS Patients',
            speaker: 'Dr. Ayman Ibrahim',
            speakerImage: '/placeholder.svg?height=60&width=60',
            type: 'session',
          },
          {
            time: '07:40 - 07:55 pm',
            title: "What's new in CTCL?",
            speaker: 'Dr. Nora Bennani',
            speakerImage: '/placeholder.svg?height=60&width=60',
            type: 'session',
          },
          {
            time: '07:55 - 08:05 pm',
            title: 'Q&A Discussion',
            type: 'discussion',
          },
          {
            time: '08:05 - 08:20 pm',
            title: 'Extranodal NK-T cell Lymphomas – How can we Move the Needle Forward?',
            speaker: 'Prof. Won Kim',
            speakerImage: '/placeholder.svg?height=60&width=60',
            type: 'session',
          },
          {
            time: '08:20 - 08:35 pm',
            title: 'Rare T-cell lymphoma: Therapeutic Challenges',
            speaker: 'Prof. Won Kim',
            speakerImage: '/placeholder.svg?height=60&width=60',
            type: 'session',
          },
          {
            time: '08:35 - 08:50 pm',
            title: 'Q&A Discussion',
            type: 'discussion',
          },
          {
            time: '08:50 pm',
            title: 'Wrap-up and Conclusion',
            speaker: 'Session Moderators, Prof. Mubarak Al Mansour',
            type: 'session',
          },
        ],
      },
    ],
  },
  {
    day: 'DAY 2',
    date: 'Friday',
    fullDate: '25 April 2025',
    sessions: [
      {
        title: 'Coming Soon',
        items: [
          {
            time: '09:00 am',
            title: 'Schedule will be announced soon',
            type: 'break',
          },
        ],
      },
    ],
  },
  {
    day: 'DAY 3',
    date: 'Saturday',
    fullDate: '26 April 2025',
    sessions: [
      {
        title: 'Coming Soon',
        items: [
          {
            time: '09:00 am',
            title: 'Schedule will be announced soon',
            type: 'break',
          },
        ],
      },
    ],
  },
]

const getTimeSlotColor = (index: number, type?: string) => {
  if (type === 'break') return 'bg-gray-100 text-gray-700'
  if (type === 'discussion') return 'bg-purple-100 text-purple-800'

  return index % 2 === 0 ? 'bg-white text-primary' : 'bg-blue-100 text-blue-800'
}

const getSessionTypeIcon = (type?: string) => {
  switch (type) {
    case 'break':
      return <Clock className="h-4 w-4" />
    case 'discussion':
      return <Users className="h-4 w-4" />
    default:
      return <Calendar className="h-4 w-4" />
  }
}

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <Layout>
      <PageHeader
        title="Conference Schedule"
        subtitle="Detailed Agenda"
        description="Explore our comprehensive three-day program featuring expert speakers, workshops, and networking opportunities."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Agenda', href: '/agenda' }, { label: 'Schedule' }]}
        variant="gradient"
        size="lg"
      />
      <div className="py-16">
        <div className="container relative z-[400]">
          <div className="flex w-full flex-col gap-16">
            {/* Day Navigation */}
            <div className="flex w-full flex-col items-start gap-10 md:flex-row">
              <div className="flex w-full flex-row flex-wrap items-center justify-center gap-5 md:max-w-[320px] md:flex-col md:flex-nowrap md:items-start">
                {scheduleData.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDay(index)}
                    className={`min-w-fit max-w-fit cursor-pointer rounded-xl px-6 py-4 transition-all duration-300 ${
                      activeDay === index
                        ? 'scale-105 bg-primary text-black shadow-lg'
                        : 'border-2 border-gray-200 bg-transparent text-black/50 hover:bg-primary/70 hover:text-black'
                    }`}>
                    <h2 className="border-b-2 border-black pb-2 text-3xl font-bold md:text-4xl">{day.day}</h2>
                    <div className="mt-2 flex flex-col items-start justify-center text-lg">
                      <span className="font-bold">{day.date}</span>
                      <span className="text-sm opacity-75">{day.fullDate}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Day Content */}
              <div className="w-full">
                <div className="mb-8">
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    {scheduleData[activeDay].day} - {scheduleData[activeDay].date}
                  </h2>
                  <p className="text-gray-600">{scheduleData[activeDay].fullDate}</p>
                </div>

                {/* Sessions */}
                <div className="space-y-12">
                  {scheduleData[activeDay].sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="flex w-full flex-col items-start gap-10 md:flex-row">
                      {/* Session Header */}
                      <div className="flex w-full flex-col items-center justify-center md:max-w-[320px] md:items-start">
                        <h3 className="text-3xl font-bold leading-tight text-primary md:text-4xl">{session.title}</h3>
                        {session.subtitle && (
                          <p className="-mt-1 text-lg text-gray-600 md:-mt-2 md:text-xl">{session.subtitle}</p>
                        )}
                      </div>

                      {/* Session Items */}
                      <div className="flex w-full flex-col gap-4">
                        {session.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="relative z-20 flex w-full flex-col items-start">
                            {/* Time Badge */}
                            <span
                              className={`flex w-fit items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ${getTimeSlotColor(itemIndex, item.type)}`}>
                              {getSessionTypeIcon(item.type)}
                              {item.time}
                            </span>

                            {/* Session Card */}
                            <div className="mt-2 w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                              <div className="flex items-center gap-4 transition-all duration-300 hover:translate-x-2">
                                {/* Speaker Image */}
                                {item.speakerImage && (
                                  <div className="flex-shrink-0">
                                    <Image
                                      src={item.speakerImage || '/placeholder.svg'}
                                      alt={item.speaker || 'Speaker'}
                                      width={60}
                                      height={60}
                                      className="w-15 h-15 rounded-full border-2 border-gray-200 object-cover"
                                    />
                                  </div>
                                )}

                                {/* Content */}
                                <div className="flex flex-1 flex-col items-start gap-1">
                                  <h3 className="text-xl font-semibold leading-tight text-gray-900">{item.title}</h3>
                                  {item.speaker && (
                                    <p className="text-lg font-medium text-primary/80">{item.speaker}</p>
                                  )}
                                </div>

                                {/* Session Type Badge */}
                                <div className="flex-shrink-0">
                                  <span
                                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                                      item.type === 'break'
                                        ? 'bg-gray-100 text-gray-600'
                                        : item.type === 'discussion'
                                          ? 'bg-purple-100 text-purple-600'
                                          : 'bg-white text-primary'
                                    }`}>
                                    {item.type === 'break'
                                      ? 'Break'
                                      : item.type === 'discussion'
                                        ? 'Discussion'
                                        : item.type === 'workshop'
                                          ? 'Workshop'
                                          : 'Session'}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-teal-50 to-blue-50 p-8">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Important Information</h3>
              <div className="grid gap-6 text-sm text-gray-600 md:grid-cols-3">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5 text-teal-600" />
                  <span>All times are local (GMT+3)</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="h-5 w-5 text-teal-600" />
                  <span>Schedule subject to change</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Users className="h-5 w-5 text-teal-600" />
                  <span>Q&A sessions included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
