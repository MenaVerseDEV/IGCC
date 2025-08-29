'use client'

import type React from 'react'

import logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { soon: true, name: 'Register', href: '' },
  { name: 'Message', href: '/message' },
  {
    soon: true,
    name: 'Agenda',
    href: '/agenda',
    hasDropdown: true,
    children: [
      { name: 'Schedule', href: '/agenda/schedule' },
      { name: 'Sessions', href: '/agenda/sessions' },
      { name: 'Workshops', href: '/agenda/workshops' },
    ],
  },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Mentors', href: '/mentors' },
  { name: 'Sponsors', href: '/sponsors' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const [hoveredSoonItem, setHoveredSoonItem] = useState<string | null>(null)
  const lastScrollY = useRef(0)
  const dropdownTimeoutRef = useRef<any>()

  // Mobile menu refs
  const menuRef = useRef<HTMLElement>(null)
  const menuOverflowRef = useRef<HTMLDivElement>(null)
  const menuItemsRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const openBtnRef = useRef<HTMLButtonElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const scrollPositionRef = useRef(0)
  const isMenuOpenRef = useRef(false)

  // Handle scroll visibility
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 200) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = window.scrollY
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [])

  // GSAP Mobile Menu Setup
  useEffect(() => {
    gsap.registerEase('custom', (progress) => (progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)))

    if (
      menuRef.current &&
      menuOverflowRef.current &&
      menuItemsRef.current &&
      closeBtnRef.current &&
      openBtnRef.current
    ) {
      gsap.set(menuRef.current, {
        pointerEvents: 'none',
        autoAlpha: 0,
      })
      gsap.set(menuOverflowRef.current, {
        pointerEvents: 'none',
        autoAlpha: 0,
        y: -30,
        rotate: -1,
        scale: 0.98,
      })
      gsap.set(menuItemsRef.current, {
        autoAlpha: 0,
        y: -10,
        scale: 0.95,
      })
      gsap.set(closeBtnRef.current, {
        autoAlpha: 0,
        y: -10,
        scale: 0.95,
      })

      timelineRef.current = gsap.timeline({
        paused: true,
        defaults: {
          ease: 'custom',
          duration: 0.8,
        },
        onReverseComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.pointerEvents = 'none'
          }
        },
      })

      timelineRef.current
        .to(
          menuRef.current,
          {
            autoAlpha: 1,
            pointerEvents: 'auto',
            duration: 0.5,
            ease: 'power2.out',
          },
          0,
        )
        .to(
          menuOverflowRef.current,
          {
            autoAlpha: 1,
            pointerEvents: 'auto',
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 0.6,
            ease: 'custom',
          },
          0.1,
        )
        .to(
          menuItemsRef.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'custom',
          },
          0.2,
        )
        .to(
          closeBtnRef.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
          },
          0.3,
        )
        .to(
          openBtnRef.current,
          {
            autoAlpha: 0,
            y: -10,
            scale: 0.95,
            duration: 0.5,
            delay: 0.3,
            ease: 'back.out(1.7)',
          },
          0.1,
        )
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [])

  const openMobileMenu = useCallback(() => {
    if (menuOverflowRef.current && openBtnRef.current && menuRef.current && timelineRef.current) {
      isMenuOpenRef.current = true
      scrollPositionRef.current = window.scrollY

      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'

      gsap.set(menuOverflowRef.current, { scale: 0.98 })
      openBtnRef.current.classList.add('opacity-0')
      timelineRef.current.timeScale(1).play()
      menuRef.current.style.pointerEvents = 'auto'
    }
  }, [])

  const closeMobileMenu = useCallback(() => {
    if (openBtnRef.current && menuRef.current && timelineRef.current) {
      isMenuOpenRef.current = false

      const scrollY = Number.parseInt(document.body.style.top || '0') * -1
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      window.scrollTo(0, Math.abs(scrollY))

      openBtnRef.current.classList.remove('opacity-1')
      gsap.to(openBtnRef.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        delay: 0.5,
        ease: 'back.out(1.7)',
      })

      timelineRef.current.timeScale(1.2).reverse()
      menuRef.current.style.pointerEvents = 'none'
      setOpenMobileDropdown(null)
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    if (isMenuOpenRef.current) {
      closeMobileMenu()
    }
    setOpenDropdown(null)
  }, [pathname, closeMobileMenu])

  const handleDropdownEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setOpenDropdown(itemName)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  const handleDropdownClick = (e: React.MouseEvent, item: any) => {
    if (item.hasDropdown || item.soon) {
      e.preventDefault()
      return false
    }
  }

  const handleMobileDropdownClick = (itemName: string) => {
    setOpenMobileDropdown(openMobileDropdown === itemName ? null : itemName)
  }

  const handleSoonItemHover = (itemName: string, isHovering: boolean) => {
    setHoveredSoonItem(isHovering ? itemName : null)
  }

  return (
    <>
      <header className="fixed z-[9999] w-full transition-transform duration-300">
        {/* Original complex background blur effects */}
        <div
          className={`pointer-events-none fixed top-0 z-[21] h-[66px] w-full transition duration-300 ease-linear will-change-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}></div>
        </div>

        <nav
          className={`fixed z-[1000] w-full px-5 transition duration-300 ease-linear will-change-transform sm:px-8 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex justify-between">
            <Link href="/" className="relative z-10 py-3">
              <Image
                className="inline-block max-h-[50px] w-auto"
                src={logo || '/placeholder.svg'}
                alt="logo"
                width={136}
                height={68}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-1 lg:flex">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasDropdown && !item.soon) {
                      handleDropdownEnter(item.name)
                    }
                    if (item.soon) {
                      handleSoonItemHover(item.name, true)
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.hasDropdown && !item.soon) {
                      handleDropdownLeave()
                    }
                    if (item.soon) {
                      handleSoonItemHover(item.name, false)
                    }
                  }}>
                  {item.soon ? (
                    <span
                      className={`flex cursor-not-allowed items-center gap-1 rounded-md px-3 py-1 text-lg font-[500] transition-colors duration-200 ${
                        pathname === item.href ? 'bg-gray-400 text-gray-600' : 'text-gray-400 hover:text-gray-500'
                      }`}>
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="h-4 w-4 text-gray-400" />}
                    </span>
                  ) : (
                    <Link
                      href={item.hasDropdown ? '#' : item.href}
                      onClick={(e) => handleDropdownClick(e, item)}
                      className={`flex items-center gap-1 rounded-md px-3 py-1 text-lg font-[500] transition-colors duration-200 ${
                        pathname === item.href
                          ? 'bg-primary text-white'
                          : 'text-gray-700 hover:bg-primary/60 hover:text-white'
                      }`}>
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </Link>
                  )}

                  {/* Soon Tooltip */}
                  {item.soon && hoveredSoonItem === item.name && (
                    <div className="absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-sm text-white shadow-lg">
                      Soon
                      <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-black"></div>
                    </div>
                  )}

                  {/* Desktop Dropdown Menu */}
                  {item.hasDropdown && item.children && openDropdown === item.name && !item.soon && (
                    <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                ref={openBtnRef}
                onClick={openMobileMenu}
                className="menu-open relative h-[68px] w-[68px] cursor-pointer before:absolute before:left-1/2 before:top-[28px] before:h-0.5 before:w-9 before:-translate-x-1/2 before:bg-black before:transition-all before:duration-300 before:content-[''] after:absolute after:bottom-[28px] after:left-1/2 after:h-0.5 after:w-9 after:-translate-x-1/2 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:before:top-[25px] hover:after:bottom-[25px] dark:before:bg-white dark:after:bg-white"
                aria-label="Open Menu"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <nav
        ref={menuRef}
        data-lenis-prevent="true"
        className="menu fixed right-6 top-0 z-[99999] min-h-screen w-full overflow-y-auto opacity-0">
        <button
          ref={closeBtnRef}
          onClick={closeMobileMenu}
          className="menu-close sticky left-[89%] top-9 h-[40px] w-[40px] cursor-pointer text-white sm:left-[90%] md:left-[93%] lg:left-[94.7%] xl:left-[96.5%] 2xl:left-[97%]"
          aria-label="Close Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
            <path
              d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
              fill="#fff"
            />
          </svg>
        </button>

        <div
          ref={menuItemsRef}
          className="menu-wrapper relative z-[99999] mx-auto flex max-h-[90vh] max-w-[300px] flex-col gap-4 overflow-y-auto overflow-x-hidden pb-4 pt-8 sm:max-w-[400px] md:max-w-[580px] lg:max-w-[900px] xl:max-w-[1030px]">
          {navItems.map((item) => (
            <div key={item.name} className="text-white">
              <div className="flex items-center justify-between">
                {item.soon ? (
                  <span
                    className={`flex-1 cursor-not-allowed text-2xl font-light ${
                      pathname === item.href ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                    {item.name}
                    <span className="ml-2 text-sm text-gray-500">(Soon)</span>
                  </span>
                ) : (
                  <Link
                    href={item.hasDropdown ? '#' : item.href}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault()
                        handleMobileDropdownClick(item.name)
                      } else {
                        closeMobileMenu()
                      }
                    }}
                    className={`block flex-1 text-2xl font-light transition-colors duration-200 ${
                      pathname === item.href ? 'text-primary' : 'text-white hover:text-gray-300'
                    }`}>
                    {item.name}
                  </Link>
                )}
                {item.hasDropdown && !item.soon && (
                  <button
                    onClick={() => handleMobileDropdownClick(item.name)}
                    className="p-2 text-white hover:text-gray-300">
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        openMobileDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown */}
              {item.hasDropdown && item.children && openMobileDropdown === item.name && !item.soon && (
                <div className="mt-2 space-y-2 pl-6">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={closeMobileMenu}
                      className="block text-lg text-gray-300 transition-colors duration-200 hover:text-white">
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div
        ref={menuOverflowRef}
        className="menu-overflow pointer-events-none fixed inset-0 z-[9999] bg-[rgba(10,10,10,0.95)] backdrop-blur-[25px]"
      />
    </>
  )
}
