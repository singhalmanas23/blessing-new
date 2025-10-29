'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px 0px -10% 0px',
  triggerOnce = true,
  delay = 0
}: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          
          if (triggerOnce) {
            observer.unobserve(currentRef)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, triggerOnce, delay])

  return { ref, isVisible }
}

// Hook for staggered animations
export function useStaggeredAnimation(itemCount: number, staggerDelay: number = 100) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staggered animations
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]))
            }, i * staggerDelay)
          }
          observer.unobserve(currentRef)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [itemCount, staggerDelay])

  return { ref, visibleItems }
}

// Hook for parallax effect
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed
      
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setOffset(rate)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}
