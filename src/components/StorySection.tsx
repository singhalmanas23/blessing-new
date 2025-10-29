'use client'

import Image from 'next/image'
import { ResponsiveContainer } from './ResponsiveContainer'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function StorySection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen max-w-[1440px] mx-auto overflow-hidden bg-[#131416] flex items-center justify-center py-clamp-16-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/section2-bg.png"
          alt="Story Section Background"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
          priority={false}
          quality={85}
        />
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container with max-width */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <ResponsiveContainer 
          className="flex flex-col items-center justify-center text-center min-h-[80vh]"
          spacing="lg"
          maxWidth="6xl"
        >
          {/* Main Text */}
          <div className={`mb-clamp-12-20 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-white font-neue text-clamp-2xl-4xl font-normal leading-tight mb-clamp-4-6">
              Over the years, we have grown from a small startup into a{' '}
              <span className="text-transparent bg-linear-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-instrument text-clamp-3xl-5xl font-normal leading-tight">
                Global Technology Partner{' '}
              </span>
              trusted by enterprises, mid-market firms, and startups in numerous industries.
            </h2>
          </div>

          {/* Insight Section */}
          <div className={`text-center mb-clamp-8-12 transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-transparent bg-linear-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-neue text-clamp-lg-xl font-medium uppercase mb-clamp-6-8 tracking-wider">
              Here&apos;s an insight into
            </p>
            
            {/* Navigation Pills */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 lg:gap-6 mb-clamp-6-8 transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 lg:gap-6">
                <span className="text-white font-neue text-clamp-lg-xl font-normal hover:text-white/80 transition-colors duration-300 cursor-pointer">
                  Who we are
                </span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/60 hidden sm:block"></div>
                <span className="text-white font-neue text-clamp-lg-xl font-normal hover:text-white/80 transition-colors duration-300 cursor-pointer">
                  What we do
                </span>
              </div>
            </div>
            
            <p className={`text-white/90 font-neue text-clamp-lg-xl font-normal leading-relaxed max-w-4xl mx-auto transition-all duration-700 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              How we deliver value to our clients, partners, and employees.
            </p>
          </div>

          {/* Bottom Icon */}
          <div className={`flex justify-center transition-all duration-700 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <button 
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-white/40 flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Scroll to next section"
            >
              <svg 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-y-0.5 transition-transform duration-300"
              >
                <path 
                  d="M16 6V26M16 26L10 20M16 26L22 20" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
