'use client'

import Image from 'next/image'
import { ResponsiveContainer } from './ResponsiveContainer'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function LeadershipSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#0c0c11] overflow-hidden py-clamp-16-32"
    >
      {/* Full Section Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/leadership-section-bg.png"
          alt="Leadership Background"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
          priority={false}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Gradient overlay for additional depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c11]/80 via-transparent to-[#0c0c11]/80"></div>
      </div>

      {/* Content Container with max-width */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <ResponsiveContainer spacing="lg" maxWidth="full">
          {/* Main Description */}
          <div className={`text-center mb-clamp-12-20 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-white font-neue text-clamp-xl-3xl font-medium leading-tight max-w-5xl mx-auto">
              Our innovation culture also extends to how we work internally. We&apos;ve embraced modern ways of working:
            </p>
          </div>

          {/* Tag Badges */}
          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={`flex flex-wrap justify-center items-center gap-4 lg:gap-6 mb-clamp-16-24 transition-all duration-700 delay-300 ${
              contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="bg-white rounded-full px-6 py-2 lg:px-8 lg:py-3 hover:scale-105 transition-transform duration-300">
              <span className="text-black font-neue text-clamp-lg-2xl font-medium">
                agile
              </span>
            </div>
            
            <div className="bg-white rounded-full px-6 py-2 lg:px-8 lg:py-3 hover:scale-105 transition-transform duration-300">
              <span className="text-black font-neue text-clamp-lg-2xl font-medium">
                remote collaboration
              </span>
            </div>
            
            <div className="bg-white rounded-full px-6 py-2 lg:px-8 lg:py-3 hover:scale-105 transition-transform duration-300">
              <span className="text-black font-neue text-clamp-lg-2xl font-medium">
                continuous learning
              </span>
            </div>
          </div>

          {/* Content Cards */}
          <div className={`grid lg:grid-cols-2 gap-clamp-8-16 max-w-6xl mx-auto transition-all duration-700 delay-500 ${
            contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            {/* Left Content Card */}
            <div className="group">
              <div className="bg-black/20 backdrop-blur-xl border-t border-white/30 rounded-xl p-clamp-6-10 hover:bg-black/30 hover:border-white/40 transition-all duration-300">
                <p className="text-white/85 font-neue text-clamp-base-lg font-medium leading-relaxed text-center">
                  We are proud to have a diverse workforce that brings a variety of perspectives, which we believe is core to innovative thinking. Our employees are our greatest asset: we hire passionate, curious, and skilled professionals and give them an environment to thrive.
                </p>
                {/* Decorative line */}
                <div className="w-full h-0.5 bg-linear-to-r from-transparent via-[#E79A01] to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Right Content Card */}
            <div className="group">
              <div className="bg-black/20 backdrop-blur-xl border-t border-white/30 rounded-xl p-clamp-6-10 hover:bg-black/30 hover:border-white/40 transition-all duration-300">
                <p className="text-white/85 font-neue text-clamp-base-lg font-medium leading-relaxed text-center">
                  This has been recognized in our industry &ndash; we&apos;ve been named a &ldquo;Top Employer&rdquo; in several of our locations. Happy, motivated teams create the best solutions, and our clients feel that positive energy in projects.
                </p>
                {/* Decorative line */}
                <div className="w-full h-0.5 bg-linear-to-r from-transparent via-[#E79A01] to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Bottom scroll indicator */}
          <div className={`flex justify-center mt-clamp-16-24 transition-all duration-700 delay-700 ${
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
