'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface PageHeaderProps {
  title: string
  breadcrumbs?: BreadcrumbItem[]
  subtitle?: string
  description?: string
  variant?: 'default' | 'gradient' | 'image' | 'solid'
  backgroundImage?: string
  className?: string
  showBackgroundPattern?: boolean
  textAlign?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const PageHeader = ({
  title,
  breadcrumbs = [],
  subtitle,
  description,
  variant = 'gradient',
  backgroundImage,
  className = '',
  showBackgroundPattern = true,
  textAlign = 'center',
  size = 'lg',
}: PageHeaderProps) => {
  const sizeClasses = {
    sm: 'py-16 md:py-20',
    md: 'py-20 md:py-24',
    lg: 'py-24 md:py-32',
    xl: 'py-32 md:py-40',
  }

  const titleSizeClasses = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-5xl md:text-6xl',
    xl: 'text-6xl md:text-7xl',
  }

  const getBackgroundClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-primary/70 via-primary/70 to-primary/80'
      case 'image':
        return backgroundImage ? '' : 'bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50'
      case 'solid':
        return 'bg-primary-600'
      default:
        return 'bg-gradient-to-r from-pink-600 via-pink-500 to-primary-500'
    }
  }

  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <section
      className={`relative overflow-hidden ${sizeClasses[size]} ${getBackgroundClasses()} ${className}`}
      style={
        variant === 'image' && backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : undefined
      }>
      {/* Background Overlay for better text readability */}
      {variant === 'image' && backgroundImage && <div className="absolute inset-0 bg-black/40" />}

      {/* Background Pattern */}
      {showBackgroundPattern && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 h-full w-1/2">
            <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />
            <div className="absolute right-32 top-32 h-24 w-24 rounded-full bg-white/5 blur-lg" />
            <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          </div>
          <div className="absolute left-0 top-0 h-full w-1/2">
            <div className="absolute left-10 top-20 h-28 w-28 rounded-full bg-white/5 blur-xl" />
            <div className="absolute bottom-32 left-40 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
          </div>
          {/* Abstract geometric shapes */}
          <div className="absolute inset-0">
            <svg
              className="absolute right-0 top-0 h-full w-full opacity-10"
              viewBox="0 0 1200 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M800 100C900 120 1000 80 1100 150C1150 180 1200 200 1200 0V400H0V300C100 250 200 280 300 250C400 220 500 200 600 180C700 160 750 140 800 100Z"
                fill="url(#gradient1)"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      )}

      <div className="container relative z-10">
        <div className={textAlignClasses[textAlign]}>
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <RevealWrapper className="reveal-me mb-6">
              <nav className="flex items-center justify-center space-x-2 text-white/90">
                {breadcrumbs.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-sm font-medium transition-colors hover:text-white md:text-base">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-sm font-medium text-white md:text-base">{item.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && <ChevronRight className="mx-2 h-4 w-4 text-white/70" />}
                  </div>
                ))}
              </nav>
            </RevealWrapper>
          )}

          {/* Main Title */}
          <TextAppearAnimation>
            <h1 className={`text-appear font-bold text-white ${titleSizeClasses[size]} mb-4`}>{title}</h1>
          </TextAppearAnimation>

          {/* Subtitle */}
          {subtitle && (
            <RevealWrapper className="reveal-me mb-4">
              <h2 className="text-xl font-semibold text-white/90 md:text-2xl">{subtitle}</h2>
            </RevealWrapper>
          )}

          {/* Description */}
          {description && (
            <RevealWrapper className="reveal-me">
              <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl">{description}</p>
            </RevealWrapper>
          )}
        </div>
      </div>
    </section>
  )
}

export default PageHeader
