'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const carouselSlides = [
  {
    id: 'vision-execution',
    title: 'Leadership with Vision and Execution',
    description: 'Our leadership combines deep industry experience and visionary goals. Founders and executives are hands-on technologists and strategists driving bold innovation, like embedding AI across all services by 2025, to ensure vision becomes successful execution.',
    features: [
      'Deep Industry Experience & Strategic Foresight',
      'Hands-on Leadership & Team Mentorship',
      'Bold AI-Driven Innovation Goals',
      'Direct Client & Project Engagement'
    ]
  },
  {
    id: 'outcomes-outputs',
    title: 'Focus on Outcomes, Not Just Outputs',
    description: 'Our CEO\'s mantra "We deliver outcomes, not just outputs" guides us to prioritize meaningful business results over just producing software. Our flat leadership empowers all employees to pitch ideas, fueling innovation like our internal accelerator that turns ideas into real offerings.',
    features: [
      'Outcome-Driven Mindset',
      'Flat & Open Leadership',
      'Employee Idea Empowerment',
      'Internal Accelerator Program'
    ]
  },
  {
    id: 'trusted-partner',
    title: 'Trusted Industry Partner with Recognized Expertise',
    description: 'Under strong leadership, Blessing SoftTech has built credibility as advanced consulting partners with AWS and Azure, official Salesforce integration partners, and holders of certifications like PMP, ITIL, and HIPAA compliance. We are industry thought leaders featured in tech forums, conferences, and award-winning recognitions, proving our stature and dependability.',
    features: [
      'Advanced AWS & Azure Consulting Partners',
      'Official Salesforce Integration Partners',
      'Certified in PMP, ITIL, HIPAA & More',
      'Award-Winning AI Innovation 2024'
    ]
  }
]

export default function LeadershipGuidanceSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentSlideData = carouselSlides[currentSlide]
  return (
    <section className="relative w-full bg-black">
      {/* Fixed Header Section */}
      <div className="relative w-full h-[335px]">
        {/* Background Image */}
        <div className="absolute left-[1111px] top-[105px] w-[219px] h-[125px]">
          <Image
            src="/images/leadership-guidance-bg-e0d7d4.png"
            alt="Leadership Guidance Background"
            fill
            className="object-stretch"
            priority
          />
        </div>

        {/* Header Text */}
        <div className="absolute left-[96px] top-[99px] w-[426px] h-[29px]">
          <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-normal leading-[28.8px] uppercase">
            Leadership and Visionary Guidance
          </p>
        </div>

        {/* Title Section */}
        <div className="absolute left-[96px] top-[142px] flex items-center gap-[14px]">
          <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[62px] font-medium leading-[74.4px]">
            Leading from the
          </span>
          <span className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Instrument_Serif'] text-[72px] font-normal leading-[93.6px]">
            Front
          </span>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full h-[775px] overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute left-[542px] top-[58px] w-[898px] h-[717px]">
          <Image
            src="/images/leadership-carousel-bg-correct.png"
            alt="Leadership Carousel Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Slide Content */}
        <div className="relative z-10 w-full h-full">
          {/* Title */}
          <div className="absolute left-[96px] top-[153px] w-[476px] h-[96px]">
            <h3 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[40px] font-semibold leading-[48px]">
              {currentSlideData.title}
            </h3>
          </div>

          {/* Description */}
          <div className="absolute left-[96px] top-[283px] w-[508px] h-[104px]">
            <p className="text-white/80 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent font-['Neue_Haas_Grotesk_Display_Pro'] text-base font-medium leading-[26px]">
              {currentSlideData.description}
            </p>
          </div>

          {/* Features List */}
          <div className="absolute left-[96px] top-[495px] w-[400px]">
            {currentSlideData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-[9px] mb-[25px]">
                {/* Icon */}
                <div className="w-4 h-4 flex-shrink-0">
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="7.5" stroke="white" strokeWidth="1"/>
                    <circle cx="8" cy="8" r="4" fill="url(#gradient)"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="2%" stopColor="#E79A01"/>
                        <stop offset="90%" stopColor="#E76C01"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Feature Text */}
                <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-[24px]">
                  {feature}
                </span>

                {/* Dashed Line */}
                {index < currentSlideData.features.length - 1 && (
                  <div className="absolute left-[8px] mt-[34px] w-0 h-[26px] border-l border-dashed border-white"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-[#E79A01] to-[#E76C01]' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
