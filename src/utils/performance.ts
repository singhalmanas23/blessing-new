'use client'

// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private marks: Map<string, number> = new Map()
  private measures: Map<string, number> = new Map()

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  // Mark the start of a performance measurement
  mark(name: string): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(`${name}-start`)
      this.marks.set(name, performance.now())
    }
  }

  // End a performance measurement and log the result
  measure(name: string, log: boolean = true): number {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const startTime = this.marks.get(name)
      if (startTime) {
        const endTime = performance.now()
        const duration = endTime - startTime
        
        performance.mark(`${name}-end`)
        performance.measure(name, `${name}-start`, `${name}-end`)
        
        this.measures.set(name, duration)
        
        if (log) {
          console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`)
        }
        
        return duration
      }
    }
    return 0
  }

  // Get Core Web Vitals
  getCoreWebVitals(): Promise<void> {
    return new Promise((resolve) => {
      if (typeof window !== 'undefined') {
        // First Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              console.log(`[Core Web Vitals] FCP: ${entry.startTime.toFixed(2)}ms`)
            }
          })
        }).observe({ entryTypes: ['paint'] })

        // Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          console.log(`[Core Web Vitals] LCP: ${lastEntry.startTime.toFixed(2)}ms`)
        }).observe({ entryTypes: ['largest-contentful-paint'] })

        // Cumulative Layout Shift
        let clsValue = 0
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as PerformanceEntry & {
              hadRecentInput?: boolean
              value?: number
            }
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value || 0
            }
          }
          console.log(`[Core Web Vitals] CLS: ${clsValue.toFixed(4)}`)
        }).observe({ entryTypes: ['layout-shift'] })
      }
      resolve()
    })
  }

  // Report performance metrics
  reportMetrics(): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      console.group('[Performance Report]')
      console.log(`DNS Lookup: ${(navigation.domainLookupEnd - navigation.domainLookupStart).toFixed(2)}ms`)
      console.log(`TCP Connection: ${(navigation.connectEnd - navigation.connectStart).toFixed(2)}ms`)
      console.log(`Request: ${(navigation.responseStart - navigation.requestStart).toFixed(2)}ms`)
      console.log(`Response: ${(navigation.responseEnd - navigation.responseStart).toFixed(2)}ms`)
      console.log(`DOM Loading: ${(navigation.domInteractive - navigation.responseEnd).toFixed(2)}ms`)
      console.log(`DOM Complete: ${(navigation.domComplete - navigation.domInteractive).toFixed(2)}ms`)
      console.log(`Total Load Time: ${(navigation.loadEventEnd - navigation.loadEventStart).toFixed(2)}ms`)
      console.groupEnd()
    }
  }
}

// Image optimization utilities
export const imageOptimization = {
  // Generate responsive image srcSet
  generateSrcSet(basePath: string, sizes: number[]): string {
    return sizes
      .map(size => `${basePath}?w=${size} ${size}w`)
      .join(', ')
  },

  // Get optimal image sizes based on viewport
  getOptimalSizes(): string {
    return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  },

  // Preload critical images
  preloadImage(src: string, as: 'image' = 'image'): void {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = as
      link.href = src
      document.head.appendChild(link)
    }
  }
}

// Intersection Observer utility for lazy loading
export class LazyLoadManager {
  private observer: IntersectionObserver | null = null
  private elements: Set<Element> = new Set()

  constructor() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.loadElement(entry.target)
              this.unobserve(entry.target)
            }
          })
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.1
        }
      )
    }
  }

  observe(element: Element): void {
    if (this.observer && element) {
      this.observer.observe(element)
      this.elements.add(element)
    }
  }

  unobserve(element: Element): void {
    if (this.observer && element) {
      this.observer.unobserve(element)
      this.elements.delete(element)
    }
  }

  private loadElement(element: Element): void {
    // Load image
    if (element.tagName === 'IMG') {
      const img = element as HTMLImageElement
      const dataSrc = img.getAttribute('data-src')
      if (dataSrc) {
        img.src = dataSrc
        img.removeAttribute('data-src')
      }
    }

    // Load background image
    const dataBg = element.getAttribute('data-bg')
    if (dataBg) {
      ;(element as HTMLElement).style.backgroundImage = `url(${dataBg})`
      element.removeAttribute('data-bg')
    }

    // Add loaded class
    element.classList.add('loaded')
  }

  disconnect(): void {
    if (this.observer) {
      this.observer.disconnect()
      this.elements.clear()
    }
  }
}

// Export singleton instances
export const performanceMonitor = PerformanceMonitor.getInstance()
export const lazyLoadManager = new LazyLoadManager()
