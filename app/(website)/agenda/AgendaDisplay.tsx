'use client'

import { agendaData } from '@/constants/Agenda'
import { Clock, Coffee, MessageSquare, Users } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AgendaDisplay() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <div className="container relative z-[400] mb-10">
      {/* Day Navigation */}
      <div className="flex w-full flex-col items-start gap-10">
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-5">
          {agendaData.map((day, index) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              key={index}
              onClick={() => setActiveDay(index)}
              className={`max-w-[300px] cursor-pointer rounded-xl px-6 py-4 transition-all duration-300 ${
                activeDay === index
                  ? 'scale-105 bg-primary !text-white'
                  : 'bg-primary/15 text-primary hover:bg-primary/30'
              }`}>
              <h2
                className={`border-b-2 pb-2 text-2xl font-bold md:text-3xl ${
                  activeDay === index ? 'border-white text-white' : 'border-primary text-primary'
                }`}>
                {day.day}
              </h2>
              <div className="mt-2 flex flex-col items-start justify-center text-base">
                <span className={`font-bold ${activeDay === index ? 'text-white/70' : 'text-primary/60'}`}>
                  {day.date}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Day Content */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="space-y-12">
              {agendaData[activeDay].sessions.map((session, sessionIndex) => (
                <motion.div
                  key={sessionIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: sessionIndex * 0.15,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  className="relative flex h-full w-full flex-col items-start gap-5 md:flex-row">
                  {/* Session Header */}
                  <div className="flex h-full w-full flex-col items-center justify-start md:max-w-[350px] md:items-start">
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold leading-tight text-black md:text-3xl">{session.title}</h3>
                    </div>
                  </div>

                  {/* Session Items */}
                  <div className="flex w-full flex-col gap-3">
                    {/* Activity Title */}
                    {session.activityTitle && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}>
                        <div className="relative z-20 mb-4 flex w-full flex-col items-start">
                          <div className="w-full rounded-lg bg-white/50 shadow-sm transition-all duration-300 hover:bg-white/70 hover:shadow-md">
                            <span className="flex w-full items-center gap-2 rounded-t-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700">
                              <Clock className="h-4 w-4" />
                              {session.activityTitle.time}
                            </span>
                            <div className="flex items-start gap-4 p-5">
                              {session.activityTitle.speakerImage && (
                                <Image
                                  src={session.activityTitle.speakerImage}
                                  alt={session.activityTitle.speaker}
                                  width={48}
                                  height={48}
                                  className="h-12 w-12 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                              )}
                              <div className="flex flex-1 flex-col items-start gap-1">
                                <h3 className="text-lg font-semibold leading-tight text-black">
                                  {session.activityTitle.title}
                                </h3>
                                <p className="text-sm text-gray-600">{session.activityTitle.speaker}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Regular Items */}
                    {session.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.2 + itemIndex * 0.1,
                          duration: 0.4,
                        }}
                        className="relative z-20 flex w-full flex-col items-start">
                        <div className="w-full overflow-hidden rounded-xl bg-white/40 transition-all duration-300 hover:bg-white/60 hover:shadow-md">
                          <div
                            className={`flex w-full items-center gap-2 px-3 py-2 text-sm font-medium ${
                              item.type === 'break'
                                ? 'bg-amber-50 text-amber-700'
                                : item.type === 'sponser'
                                  ? 'bg-purple-50 text-purple-700'
                                  : item.type === 'activity'
                                    ? 'bg-green-50 text-green-700'
                                    : 'bg-rose-50 text-rose-700'
                            }`}>
                            {item.type === 'break' ? (
                              <Coffee className="h-4 w-4" />
                            ) : item.type === 'activity' ? (
                              <MessageSquare className="h-4 w-4" />
                            ) : item.type === 'sponser' ? (
                              <Users className="h-4 w-4" />
                            ) : (
                              <Clock className="h-4 w-4" />
                            )}
                            {item.time}
                          </div>
                          <div className="flex items-start gap-4 p-5 transition-all duration-300">
                            {item.speakerImage && (
                              <Image
                                src={item.speakerImage}
                                alt={item.speaker || 'Speaker'}
                                width={48}
                                height={48}
                                className="h-12 w-12 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                              />
                            )}
                            <div className="flex flex-1 flex-col items-start gap-1">
                              <h3 className="text-lg font-semibold leading-tight text-black">{item.title}</h3>
                              {item.speaker && <p className="text-sm text-gray-600">{item.speaker}</p>}
                              {item.moderator && (
                                <p className="flex items-center gap-1 text-sm text-gray-500">
                                  <Users className="h-3 w-3" />
                                  Moderator: {item.moderator}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
