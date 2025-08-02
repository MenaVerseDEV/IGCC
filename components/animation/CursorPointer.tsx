'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import IconBrand from '@/public/breast-cancer.png'

const CursorPointer = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useGSAP(() => {
    if (window.innerWidth >= 1023) {
      gsap.to('.pointer', {
        x: mousePosition.x,
        y: mousePosition.y,
        duration: 0.1,
        ease: 'power2.out',
      })
    }
  }, [mousePosition])

  useEffect(() => {
    const moseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    // Hide default cursor
    document.body.style.cursor = 'none'

    window.addEventListener('mousemove', moseMove)

    // Cleanup function to remove event listeners and restore cursor
    return () => {
      window.removeEventListener('mousemove', moseMove)
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <div className="pointer pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference">
      <Image
        src={IconBrand}
        alt="Custom Cursor"
        width={32}
        height={32}
        className="-translate-x-1/2 -translate-y-1/2 transform"
      />
    </div>
  )
}

export default CursorPointer
