'use client'

import Image from 'next/image'

export default function StorySection() {
  return (
    <section className="relative h-[1001px] w-full overflow-hidden bg-[#131416]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/section2-bg.png"
          alt="Story Section Background"
          fill
          className="object-cover"
          //style={{ transform: 'translateX(-369px)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-20 py-32">
        {/* Main Text */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[50px] font-normal leading-[60px] mb-4">
            Over the years, we have grown from a small startup into a{' '}
            <span className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Instrument_Serif'] text-[74px] font-normal leading-[96.2px]">
              Global Technology Partner{' '}
            </span>
            trusted by enterprises, mid-market firms, and startups in numerous industries.
          </div>
        </div>

        {/* Insight Section */}
        <div className="text-center mb-12">
          <p className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Neue_Haas_Grotesk_Display_Pro'] text-2xl font-medium leading-[28.8px] uppercase mb-6">
            Here&apos;s an insight into
          </p>
          
          {/* Navigation Pills */}
          <div className="flex items-center justify-center gap-5 mb-8">
            <div className="flex items-center gap-5">
              <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[32px] font-normal leading-[70px]">
                Who we are
              </span>
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[32px] font-normal leading-[70px]">
                What we do
              </span>
            </div>
          </div>
          
          <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[32px] font-normal leading-[70px]">
            How we deliver value to our clients, partners, and employees.
          </p>
        </div>

        {/* Bottom Icon */}
        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-[50px] border border-white/40 flex items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <path 
                d="M16 6V26M16 26L10 20M16 26L22 20" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
