'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ResponsiveContainer } from './ResponsiveContainer'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const slides = [
  {
    id: 'excellence',
    title: 'Excellence',
    backgroundImage: '/images/excel.png',
    description: 'Quality is our hallmark. With CMMI and ISO 9001 certifications, we uphold strict quality assurance at every step, instilling a culture of craftsmanship and pride in every employee. Our solutions are robust, scalable, and polished—always striving to exceed expectations, deliver ahead of deadlines, and under budget.',
    position: 'left'
  },
  {
    id: 'integrity',
    title: 'Integrity',
    backgroundImage: '/images/integrity-bg-7b76c4.png',
    description: 'Trust is our foundation. We operate with complete transparency and honesty—about feasibility, timelines, and costs—always prioritizing what\'s right for our clients. Upholding the highest standards in data security and privacy, we give clients peace of mind, especially in regulated industries.',
    position: 'right'
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    backgroundImage: '/images/collaboration-bg.png',
    description: 'We see every project as a partnership, closely integrating with client teams and practicing agile methodologies that keep stakeholders involved at every step. Our cross-functional teams collaborate seamlessly, nurturing a supportive environment where every idea counts.',
    position: 'left'
  },
  {
    id: 'customer-success',
    title: 'Customer Success',
    backgroundImage: '/images/customer-success-bg.png',
    description: 'Customer success is at our core. We go beyond contracts with extra training, post-launch support, and strategic consulting. We celebrate client wins as our own and actively gather feedback for continuous improvement, delivering real results as true partners.',
    position: 'right'
  }
]

export default function InnovationCultureSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    
    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    
    handleSelect()
    emblaApi.on('select', handleSelect)
    
    return () => {
      emblaApi.off('select', handleSelect)
    }
  }, [emblaApi])

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#131416] overflow-hidden"
    >
      {/* Content Container with max-width */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <ResponsiveContainer spacing="lg" maxWidth="full">
          {/* Header Section */}
          <div className={`text-center py-clamp-16-24 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-white font-neue text-clamp-lg-xl font-medium uppercase tracking-wider mb-clamp-4-6">
              Core Values and Innovation Culture
            </p>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 mb-clamp-6-8">
              <h1 className="text-white font-neue text-clamp-3xl-5xl font-medium leading-tight">
                DNA of
              </h1>
              <h1 className="text-transparent bg-linear-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-instrument text-clamp-3xl-6xl font-normal leading-tight">
                Excellence
              </h1>
            </div>
            
            <p className="text-white/80 font-neue text-clamp-base-xl font-medium leading-relaxed max-w-4xl mx-auto">
              At the heart of Blessing SoftTech is a strong culture of innovation and integrity. Our core values guide every project and internal initiative:
            </p>
          </div>
        </ResponsiveContainer>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide) => (
              <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
                <div className="w-full max-w-[1440px] mx-auto">
                  <ResponsiveContainer spacing="lg" maxWidth="full">
                    {/* Slide Content */}
                    <div className={`grid lg:grid-cols-2 gap-clamp-8-16 items-center min-h-[600px] lg:min-h-[500px] ${
                      slide.position === 'right' ? 'lg:grid-flow-col-dense' : ''
                    }`}>
                      
                      {/* Text Content */}
                      <div className={`space-y-clamp-6-8 ${
                        slide.position === 'right' ? 'lg:col-start-2' : ''
                      }`}>
                        <div className="space-y-clamp-4-6">
                          <h2 className="text-white font-neue text-clamp-2xl-5xl font-semibold leading-tight">
                            {slide.title}
                          </h2>
                          
                          {/* <button className="inline-flex items-center gap-3 px-6 py-3 bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-black/30 hover:border-white/30 transition-all duration-300 group">
                            <span className="text-white font-neue text-clamp-base-lg font-medium">
                              Discover How
                            </span>
                            <svg 
                              viewBox="0 0 17 11" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="w-4 h-3 group-hover:translate-x-1 transition-transform duration-300"
                            >
                              <path 
                                d="M11 1L16 6L11 10M16 6L1 6" 
                                stroke="white" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button> */}
                        </div>
                        
                        <p className="text-white/85 font-neue text-clamp-base-lg font-medium leading-relaxed">
                          {slide.description}
                        </p>
                        
                        {/* Decorative line */}
                        <div className="w-full lg:w-2/3 h-0.5 bg-linear-to-r from-white/30 via-[#E79A01] to-transparent"></div>
                      </div>

                      {/* Image Content */}
                      <div className={`relative ${
                        slide.position === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
                      }`}>
                        <div className="relative w-full h-clamp-300-500 lg:h-clamp-400-600 rounded-2xl overflow-hidden">
                          <Image
                            src={slide.backgroundImage}
                            alt={`${slide.title} Background`}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            quality={85}
                          />
                          {/* Gradient overlay for better visual appeal */}
                          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </ResponsiveContainer>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-8 pointer-events-none">
          <button
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/30 hover:border-white/30 transition-all duration-300 pointer-events-auto group"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-0.5 transition-transform duration-300">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/30 hover:border-white/30 transition-all duration-300 pointer-events-auto group"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-0.5 transition-transform duration-300">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <ResponsiveContainer spacing="sm" maxWidth="full">
          <div className="flex justify-center py-clamp-8-12">
            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'bg-[#E79A01] w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
