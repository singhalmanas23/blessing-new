'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

const slides = [
  {
    id: 'excellence',
    title: 'Excellence',
    backgroundImage: '/images/excellence-bg-fd73eb.png',
    description: 'Quality is our hallmark. With CMMI and ISO 9001 certifications, we uphold strict quality assurance at every step, instilling a culture of craftsmanship and pride in every employee. Our solutions are robust, scalable, and polished—always striving to exceed expectations, deliver ahead of deadlines, and under budget. By setting clear KPIs, relentlessly pursuing results, and focusing on client success, we\'ve earned industry awards and recognition for excellence.',
    buttonPosition: { left: '96px', top: '486px' },
    textPosition: { left: '96px', top: '852px', width: '403px' },
    titlePosition: { left: '891px', top: '486px' },
    imagePosition: { left: '401px', top: '467px', width: '639px', height: '718px' },
    lines: [{ left: '812px', top: '593px', width: '628px', height: '0px' }]
  },
  {
    id: 'integrity',
    title: 'Integrity',
    backgroundImage: '/images/integrity-bg-7b76c4.png',
    description: 'Trust is our foundation. We operate with complete transparency and honesty—about feasibility, timelines, and costs—always prioritizing what\'s right for our clients, even if it means recommending new directions. Upholding the highest standards in data security and privacy, we give clients peace of mind, especially in regulated industries. Internally, we value integrity, respect, and open learning, always honoring our promises and commitments.',
    buttonPosition: { left: '958px', top: '486px' },
    textPosition: { left: '958px', top: '906px', width: '386px' },
    titlePosition: { left: '79px', top: '486px' },
    imagePosition: { left: '335px', top: '470px', width: '691px', height: '717px' },
    lines: [{ left: '0px', top: '593px', width: '628px', height: '0px' }]
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    backgroundImage: '/images/collaboration-bg.png',
    description: 'We see every project as a partnership, closely integrating with client teams and practicing agile methodologies that keep stakeholders involved at every step. Our cross-functional teams collaborate seamlessly—developers, designers, analysts, QA, and ops—nurturing a supportive, flat environment where every idea counts. This approach sparks creativity, swift solutions, and ensures alignment toward shared goals.',
    buttonPosition: { left: '96px', top: '486px' },
    textPosition: { left: '96px', top: '861px', width: '386px' },
    titlePosition: { left: '891px', top: '486px' },
    imagePosition: { left: '434px', top: '428px', width: '605px', height: '757px' },
    lines: [{ left: '812px', top: '593px', width: '628px', height: '0px' }]
  },
  {
    id: 'customer-success',
    title: 'Customer Success',
    backgroundImage: '/images/customer-success-bg.png',
    description: 'Customer success is at our core. We go beyond contracts with extra training, post-launch support, and strategic consulting—never nickel-and-diming. We celebrate client wins as our own and actively gather feedback for continuous improvement. Our leadership stays engaged, often checking in with CXOs to ensure expectations are met. We deliver real results, whether improving metrics, enabling capabilities, or supporting clients through crises, as true partners.',
    buttonPosition: { left: '958px', top: '486px' },
    textPosition: { left: '958px', top: '906px', width: '386px' },
    titlePosition: { left: '79px', top: '486px' },
    imagePosition: { left: '384px', top: '486px', width: '614px', height: '767px' },
    lines: [
      { left: '0px', top: '593px', width: '628px', height: '0px' },
      { left: '809px', top: '826px', width: '0px', height: '359px' }
    ]
  }
]

export default function InnovationCultureSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

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
    
    handleSelect() // Set initial index
    emblaApi.on('select', handleSelect)
    
    return () => {
      emblaApi.off('select', handleSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative w-full h-[1185px] overflow-hidden bg-[#131416]">
      {/* Fixed Header */}
      <div className="relative z-20">
        {/* Header Text */}
        <div className="absolute left-[498px] top-[163px] w-[442px] h-[29px]">
          <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-normal leading-[28.8px] uppercase text-center">
            Core Values and Innovation Culture
          </p>
        </div>
        
        {/* Title */}
        <div className="absolute left-[489px] top-[196px] flex items-center gap-3.5">
          <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[62px] font-medium leading-[74.4px]">
            DNA of
          </span>
          <span className="text-transparent bg-linear-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Instrument_Serif'] text-[72px] font-normal leading-[93.6px]">
            Excellence
          </span>
        </div>

        {/* Description */}
        <div className="absolute left-[214px] top-[303px] w-[1012px] h-16">
          <p className="text-white/80 font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-8 text-center">
            At the heart of Blessing SoftTech is a strong culture of innovation and integrity. Our core values guide every project and internal initiative:
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              {/* Background Image */}
              <div 
                className="absolute"
                style={{
                  left: slide.imagePosition.left,
                  top: slide.imagePosition.top,
                  width: slide.imagePosition.width,
                  height: slide.imagePosition.height
                }}
              >
                <Image
                  src={slide.backgroundImage}
                  alt={`${slide.title} Background`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative Lines */}
              {slide.lines.map((line, index) => (
                <div
                  key={index}
                  className="absolute border-white/30"
                  style={{
                    left: line.left,
                    top: line.top,
                    width: line.width,
                    height: line.height,
                    borderTop: line.height === '0px' ? '1px solid' : 'none',
                    borderLeft: line.width === '0px' ? '1px solid' : 'none'
                  }}
                />
              ))}

              {/* Title */}
              <div 
                className="absolute"
                style={{
                  left: slide.titlePosition.left,
                  top: slide.titlePosition.top
                }}
              >
                <h2 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[74px] font-medium leading-14">
                  {slide.title}
                </h2>
              </div>

              {/* Discover How Button */}
              <div 
                className="absolute"
                style={{
                  left: slide.buttonPosition.left,
                  top: slide.buttonPosition.top
                }}
              >
                <div className="flex items-center justify-center gap-2.5 px-5 py-4 bg-[rgba(25,27,32,0.2)] backdrop-blur-sm rounded-lg">
                  <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-6">
                    Discover How
                  </span>
                  <svg viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[17.42px] h-[11.31px]">
                    <path d="M11 1L16 6L11 10M16 6L1 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Description Text */}
              <div 
                className="absolute"
                style={{
                  left: slide.textPosition.left,
                  top: slide.textPosition.top,
                  width: slide.textPosition.width
                }}
              >
                <p className="text-white/80 font-['Neue_Haas_Grotesk_Display_Pro'] text-[16px] font-medium leading-[25px]">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedIndex 
                  ? 'bg-linear-to-r from-[#E79A01] to-[#E76C01]' 
                  : 'bg-white/30'
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
        onClick={scrollPrev}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
        onClick={scrollNext}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Mobile Layout */}
      <div className="lg:hidden absolute inset-0 px-6 py-8">
        <div className="text-center mb-8">
          <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-lg font-normal uppercase mb-4">
            Core Values and Innovation Culture
          </p>
          <div className="flex flex-col items-center gap-2 mb-4">
            <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-3xl font-medium">
              DNA of
            </span>
            <span className="text-transparent bg-linear-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Instrument_Serif'] text-4xl font-normal">
              Excellence
            </span>
          </div>
          <p className="text-white/80 font-['Neue_Haas_Grotesk_Display_Pro'] text-base font-medium leading-relaxed">
            At the heart of Blessing SoftTech is a strong culture of innovation and integrity. Our core values guide every project and internal initiative:
          </p>
        </div>

        {/* Mobile Carousel Content */}
        <div className="space-y-6">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`bg-black/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 transition-all ${
                index === selectedIndex ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <h3 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-2xl font-medium mb-4">
                {slide.title}
              </h3>
              <p className="text-white/80 font-['Neue_Haas_Grotesk_Display_Pro'] text-sm font-medium leading-relaxed">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
