import { Timeline } from '@/components/IGCC/Timellien'
import React from 'react'

export function TimelineDemo() {
  const data = [
    {
      title: '2024',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ]
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute left-0 top-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  )
}
