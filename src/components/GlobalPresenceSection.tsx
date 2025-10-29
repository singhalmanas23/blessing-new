'use client'

import Image from 'next/image'
import { ResponsiveContainer } from './ResponsiveContainer'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function GlobalPresenceSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#131416] overflow-hidden py-clamp-16-32"
    >
      {/* Background Image with responsive positioning */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-[1440px] h-full">
          <div className="absolute inset-x-0 top-1/4 bottom-0 opacity-60">
            <Image
              src="/images/global-presence-bg-4a4d7c.png"
              alt="Global Presence Background"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
              quality={85}
            />
          </div>
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-linear-to-b from-[#131416] via-transparent to-[#131416]/80"></div>
        </div>
      </div>

      {/* Content Container with max-width */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <ResponsiveContainer spacing="lg" maxWidth="full">
          {/* Header Section */}
          <div className={`text-center mb-clamp-12-20 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-white font-neue text-clamp-lg-xl font-medium uppercase tracking-wider mb-clamp-4-6">
              Global Presence and Clientele
            </p>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4">
              <h1 className="text-white font-neue text-clamp-3xl-5xl font-medium leading-tight">
                Delivering Worldwide
              </h1>
              <h1 className="text-transparent bg-linear-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-instrument text-clamp-3xl-6xl font-normal leading-tight">
                Across Scales
              </h1>
            </div>
          </div>

          {/* Main Content Section */}
          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={`grid lg:grid-cols-4 gap-4 lg:gap-0 transition-all duration-700 delay-300 ${
              contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Main Content Card - Takes 3 columns on large screens */}
            <div className="lg:col-span-3 bg-black/20 backdrop-blur-xl rounded-l-2xl lg:rounded-l-none p-clamp-6-12 relative">
              {/* Main Icon */}
              <div className="absolute left-clamp-6-12 -top-8 lg:-top-12 w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 lg:w-14 lg:h-14">
                  <path d="M28 7L28 49M28 49L14 35M28 49L42 35" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Text Content */}
              <div className="mt-8 lg:mt-4">
                <p className="text-white font-neue text-clamp-lg-xl font-medium leading-relaxed">
                  From our inception, we&apos;ve had a global mindset. Today, Blessing SoftTech has a footprint across North America, Europe, Asia, and the Middle East, with offices and development centers in key tech hubs. But more importantly, we have successfully delivered projects in over 30+ countries – and that number grows every quarter. Our global presence isn&apos;t just about offices; it&apos;s about understanding local business cultures, regulations, and market needs. We take pride in being a cosmopolitan team that can operate 24/7, leveraging time zone differences to our clients&apos; advantage.
                </p>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-clamp-8-12 w-full lg:w-2/3 h-1.5 bg-linear-to-r from-[#E79A01] to-[#E76C01] rounded-full"></div>
            </div>

            {/* Right Side Indicator Cards */}
            <div className="lg:col-span-1 flex lg:flex-col gap-4 lg:gap-0">
              {/* Card 1 */}
              <div className="flex-1 bg-black/20 backdrop-blur-xl rounded-2xl lg:rounded-none lg:rounded-tr-2xl p-4 lg:p-6 flex flex-col items-center justify-center relative min-h-[100px] lg:min-h-[140px]">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mb-2 lg:mb-4">
                  <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-[38.4px] lg:h-[38.4px]">
                    <path d="M19 6L19 32M19 32L10 23M19 32L28 23" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white/80 text-xs lg:text-sm font-medium text-center">Projects</span>
              </div>

              {/* Card 2 */}
              <div className="flex-1 bg-black/20 backdrop-blur-xl rounded-2xl lg:rounded-none p-4 lg:p-6 flex flex-col items-center justify-center relative min-h-[100px] lg:min-h-[140px]">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mb-2 lg:mb-4">
                  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-9 lg:h-9">
                    <circle cx="18" cy="18" r="16.5" stroke="black" strokeWidth="2.5"/>
                  </svg>
                </div>
                <span className="text-white/80 text-xs lg:text-sm font-medium text-center">Clients</span>
              </div>

              {/* Card 3 */}
              <div className="flex-1 bg-black/20 backdrop-blur-xl rounded-2xl lg:rounded-none lg:rounded-br-2xl p-4 lg:p-6 flex flex-col items-center justify-center relative min-h-[100px] lg:min-h-[140px]">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mb-2 lg:mb-4">
                  <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-[34.72px] lg:h-[34.71px]">
                    <circle cx="17.5" cy="17.5" r="16.5" stroke="black" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-white/80 text-xs lg:text-sm font-medium text-center">Countries</span>
              </div>
            </div>
          </div>

          {/* Bottom scroll indicator */}
          <div className={`flex justify-center mt-clamp-16-24 transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <button 
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-white/30 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Scroll to next section"
              onClick={() => {
                const nextSection = document.querySelector('section:has(+ section)')?.nextElementSibling
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-y-0.5 transition-transform duration-300"
              >
                <path 
                  d="M12 4V20M12 20L6 14M12 20L18 14" 
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
