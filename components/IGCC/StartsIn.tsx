'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function StartsIn() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const targetDate = new Date('2025-11-20T00:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
        setIsExpired(false)
      } else {
        setIsExpired(true)
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  // Don't render anything if the target date has passed
  if (isExpired) {
    return null
  }

  return (
    <div className="mt-5 flex items-center gap-4 text-sm sm:gap-5">
      {[
        { title: 'days', value: timeLeft.days },
        { title: 'hours', value: timeLeft.hours },
        { title: 'minutes', value: timeLeft.minutes },
        { title: 'seconds', value: timeLeft.seconds },
      ].map(({ title, value }) => (
        <div key={title} className="group flex flex-col items-center gap-1">
          <span className="text-xs uppercase text-white/80">{title}</span>
          <div className="relative overflow-hidden rounded bg-primary/50 px-3 py-1 text-lg font-bold tracking-wide text-white transition-colors duration-300 group-hover:bg-primary/70">
            <AnimatePresence mode="wait">
              <motion.span
                key={value} // This ensures animation triggers when value changes
                className="block text-white"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                // transition={{
                //   type: 'spring',
                //   stiffness: 400,
                //   damping: 25,
                //   duration: 0.3,
                //           }}
              >
                {value.toString().padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StartsIn
