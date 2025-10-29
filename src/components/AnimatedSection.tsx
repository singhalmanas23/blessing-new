'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'none'
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  className = '',
  animation = 'slideUp',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  once = true
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentElement = ref.current
    if (!currentElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setTimeout(() => {
            setIsVisible(true)
            if (once) setHasAnimated(true)
          }, delay)
          
          if (once) {
            observer.unobserve(currentElement)
          }
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(currentElement)

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [delay, threshold, once, hasAnimated])

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out will-change-transform`
    const durationClass = `duration-[${duration}ms]`
    
    switch (animation) {
      case 'fadeIn':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`
      case 'slideUp':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`
      case 'slideLeft':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`
      case 'slideRight':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`
      case 'scaleIn':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`
      case 'none':
        return ''
      default:
        return baseClasses
    }
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  )
}

// Staggered animation for multiple items
interface StaggeredAnimationProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn'
  baseDelay?: number
}

export function StaggeredAnimation({
  children,
  className = '',
  staggerDelay = 100,
  animation = 'slideUp',
  baseDelay = 0
}: StaggeredAnimationProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          animation={animation}
          delay={baseDelay + index * staggerDelay}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  )
}
