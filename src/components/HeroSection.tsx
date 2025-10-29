'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import UnionIcon from './UnionIcon'
import { ResponsiveContainer } from './ResponsiveContainer'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

// Hero content stages based on Figma designs - exact content and styling
const heroStages = [
  {
    id: 1,
    title: "Welcome to Blessing SoftTech",
    description: "a company founded on the belief that technology can be a profound force for good and growth when guided by a bold vision.",
    titleWeight: "font-medium", // 500 weight from Figma
    fontSize: "text-xl sm:text-2xl md:text-3xl lg:text-4xl" // 32px from Figma, responsive
  },
  {
    id: 2,
    title: "Our journey began with a simple yet ambitious mission",
    description: "to empower businesses globally through innovative software solutions that drive transformation and create lasting impact.",
    titleWeight: "font-semibold", // 600 weight from Figma  
    fontSize: "text-xl sm:text-2xl md:text-3xl lg:text-4xl" // 32px from Figma, responsive
  },
  {
    id: 3,
    title: "We didn't get here by doing the ordinary",
    description: "we got here by dreaming big, staying ahead of trends, and delivering excellence consistently.",
    titleWeight: "font-semibold", // 600 weight from Figma
    fontSize: "text-xl sm:text-2xl md:text-3xl lg:text-4xl" // 32px from Figma, responsive
  }
]

export default function HeroSection() {
  const { ref: heroRef, isVisible } = useScrollAnimation()
  const [currentStage, setCurrentStage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentStage((prevStage) => (prevStage + 1) % heroStages.length)
        setIsTransitioning(false)
      }, 500) // Longer transition for smoother effect
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentContent = heroStages[currentStage]

  return (
    <section 
      ref={heroRef}
      className="relative w-full h-screen max-h-screen overflow-hidden flex flex-col"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Header - Fixed max-width container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto shrink-0">
        <ResponsiveContainer 
          as="header" 
          className="flex justify-between items-center py-3 sm:py-4 lg:py-6"
          spacing="sm"
          maxWidth="full"
        >
          {/* Logo */}
          <div className={`flex items-center gap-2 sm:gap-3 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <UnionIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            <div className="leading-none">
              <span className="text-white font-crimson text-lg sm:text-xl md:text-2xl lg:text-3xl block">
                Blessing
              </span>
              <span className="text-transparent bg-linear-to-r from-[#E79A01] to-[#E76C01] bg-clip-text text-xs sm:text-sm font-semibold">
                SoftTech
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`hidden lg:flex items-center gap-6 xl:gap-8 transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {["Our Services", "Products", "Why Choose Us?", "Careers"].map((item, index) => (
              <span
                key={item}
                className={`text-white/80 hover:text-white transition-all duration-300 cursor-pointer text-sm xl:text-base ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {item}
              </span>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className={`lg:hidden p-2 hover:bg-white/5 rounded-md transition-all duration-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white transition-all duration-200"></div>
              <div className="w-full h-0.5 bg-white transition-all duration-200"></div>
              <div className="w-full h-0.5 bg-white transition-all duration-200"></div>
            </div>
          </button>

          {/* Contact Button */}
          <button className={`hidden sm:block px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 bg-[rgba(25,27,32,0.2)] backdrop-blur-md rounded-md text-white hover:bg-black/30 transition-all duration-300 text-sm lg:text-base ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
          >
            Contact Us
          </button>
        </ResponsiveContainer>
      </div>

      {/* Static Hero Headlines - Always visible */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto shrink-0">
        <ResponsiveContainer className="text-center" spacing="sm" maxWidth="full">
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12">
            <h1 className={`text-white font-instrument text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-1 sm:mb-2 transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              The story of
            </h1>

            <h2 className={`text-white font-neue font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-2 sm:mb-3 transition-all duration-700 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Blessing SoftTech
            </h2>

            <p className={`text-transparent bg-linear-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-6 sm:mb-8 lg:mb-10 transition-all duration-700 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Innovating with Purpose and Vision
            </p>
          </div>
        </ResponsiveContainer>
      </div>

      {/* Dynamic Content Area - Changes every 5 seconds */}
      <div className="relative z-10 flex-1 flex flex-col justify-center min-h-0">
        <div className="w-full max-w-[1440px] mx-auto">
          <ResponsiveContainer 
            className="text-center space-y-3 sm:space-y-4"
            spacing="sm"
            maxWidth="5xl"
          >
            {/* Dynamic Title */}
            <h3 className={`text-white ${currentContent.titleWeight} text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight transition-all duration-700 ease-in-out ${
              isTransitioning ? 'translate-y-8 opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'
            }`}>
              {currentContent.title}
            </h3>
            
            {/* Dynamic Description */}
            <p className={`text-white/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 sm:px-8 lg:px-12 xl:px-0 max-w-4xl mx-auto transition-all duration-700 ease-in-out delay-100 ${
              isTransitioning ? 'translate-y-8 opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'
            }`}>
              {currentContent.description}
            </p>

            {/* Stage Indicators */}
            <div className="flex justify-center items-center gap-3 mt-4 sm:mt-6">
              {heroStages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStage 
                      ? 'bg-[#E79A01] w-6' 
                      : index < currentStage 
                        ? 'bg-[#E79A01]' 
                        : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Section - Consistent with container max-width */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto shrink-0">
        {/* Divider */}
        <ResponsiveContainer className="mb-4 sm:mb-6" spacing="sm" maxWidth="full">
          <div className={`w-full border-t border-white/30 transition-all duration-700 delay-1000 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`} 
          style={{ transformOrigin: 'center' }}
          />
        </ResponsiveContainer>

        {/* Scroll Indicator */}
        <ResponsiveContainer className="pb-4 sm:pb-6 lg:pb-8" spacing="sm" maxWidth="full">
          <div className={`flex flex-col items-center gap-2 sm:gap-4 transition-all duration-700 delay-1100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Arrow Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" className="sm:w-6 sm:h-6">
              <path
                d="M12 2L12 22M12 22L6 16M12 22L18 16"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="gradient" x1="4%" y1="0%" x2="92%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="46%" stopColor="#E79A01" />
                  <stop offset="100%" stopColor="#E76C01" />
                </linearGradient>
              </defs>
            </svg>

            {/* Scroll Text and Progress Indicator */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <span className="text-white text-xs sm:text-sm lg:text-base">Scroll</span>
              <div className="hidden sm:flex items-center gap-1.5">
                {/* Progress indicators that match current stage */}
                {[0, 1, 2].map((index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full border transition-colors duration-300 ${
                      index <= currentStage ? 'border-[#E79A01]' : 'border-white/40'
                    }`}></div>
                    {index < 2 && (
                      <div className={`w-12 lg:w-16 border-t transition-colors duration-300 ${
                        index < currentStage ? 'border-[#E79A01]' : 'border-white/30'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
