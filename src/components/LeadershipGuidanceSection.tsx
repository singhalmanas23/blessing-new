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
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[335px]">
        {/* Background Image */}
        <div className="absolute right-[5%] top-[20%] w-[100px] h-[60px] sm:w-[120px] sm:h-[70px] md:w-40 md:h-[95px] lg:w-[219px] lg:h-[125px] xl:left-[1111px] xl:top-[105px] xl:right-auto">
          <Image
            src="/images/leadership-guidance-bg-e0d7d4.png"
            alt="Leadership Guidance Background"
            fill
            className="object-stretch"
            priority
          />
        </div>

        {/* Header Text */}
        <div className="absolute left-[5%] top-[25%] w-[85%] sm:w-[80%] md:w-[70%] lg:w-[426px] xl:left-24 xl:top-[99px]">
          <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[1.2] uppercase">
            Leadership and Visionary Guidance
          </p>
        </div>

        {/* Title Section */}
        <div className="absolute left-[5%] top-[45%] w-[90%] xl:left-24 xl:top-[142px] xl:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 lg:gap-3.5">
          <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] sm:text-[32px] md:text-[42px] lg:text-[52px] xl:text-[62px] font-medium leading-[1.2]">
            Leading from the
          </span>
          <span className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Instrument_Serif'] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-normal leading-[1.3]">
            Front
          </span>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[775px] overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute right-0 top-[8%] w-[65%] h-[85%] sm:w-[68%] md:w-[70%] lg:w-[72%] xl:w-[898px] xl:h-[717px] xl:left-[542px] xl:top-[58px] xl:right-auto opacity-60">
          <Image
            src="/images/leadership-carousel-bg-correct.png"
            alt="Leadership Carousel Background"
            fill
            className="object-cover object-center -mt-24"
          />
        </div>

        {/* Slide Content */}
        <div className="relative z-10 w-full h-full -mt-32">
          {/* Title */}
          <div className="absolute left-[5%] top-[12%] w-[85%] sm:w-[80%] md:w-[65%] lg:w-[55%] xl:left-24 xl:top-[153px] xl:w-[476px]">
            <h3 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[34px] xl:text-[40px] font-semibold leading-[1.2]">
              {currentSlideData.title}
            </h3>
          </div>

          {/* Description */}
          <div className="absolute left-[5%] top-[32%] w-[85%] sm:w-[80%] md:w-[65%] lg:w-[55%] xl:left-24 xl:top-[283px] xl:w-[508px]">
            <p className="text-white/80 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent font-['Neue_Haas_Grotesk_Display_Pro'] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-[1.6]">
              {currentSlideData.description}
            </p>
          </div>

          {/* Features List */}
          <div className="absolute left-[5%] bottom-[15%] w-[85%] sm:w-[80%] md:w-[65%] lg:w-[55%] xl:left-24 xl:top-[495px] xl:w-[400px] xl:bottom-auto">
            {currentSlideData.features.map((feature, index) => (
              <div key={index} className="relative flex items-center gap-2 sm:gap-[9px] mb-4 sm:mb-5 lg:mb-6 xl:mb-[25px]">
                {/* Icon */}
                <div className="w-3 h-3 sm:w-4 sm:h-4 shrink-0">
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
                <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-medium leading-[1.2]">
                  {feature}
                </span>

                {/* Dashed Line */}
                {index < currentSlideData.features.length - 1 && (
                  <div className="absolute left-1.5 sm:left-2 top-6 sm:top-7 lg:top-8 xl:top-[34px] w-0 h-4 sm:h-5 lg:h-6 xl:h-[26px] border-l border-dashed border-white"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 xl:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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
