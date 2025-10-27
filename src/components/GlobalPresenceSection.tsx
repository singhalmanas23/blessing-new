'use client'

import Image from 'next/image'

export default function GlobalPresenceSection() {
  return (
    <section className="relative w-full h-[1024px] overflow-hidden bg-[#131416]">
      {/* Background Image */}
      <div className="absolute left-[3px] top-[217px] w-[1435px] h-[814px]">
        <Image
          src="/images/global-presence-bg-4a4d7c.png"
          alt="Global Presence Background"
          fill
          className="object-stretch"
          priority
        />
      </div>
      
      {/* Blur overlay */}
      <div className="absolute left-[-229px] top-[-30px] w-[1898px] h-[412px] bg-[#131416] blur-[244px]"></div>

      {/* Header Text - "Global Presence and Clientele" */}
      <div className="absolute left-[526px] top-[118px] w-[387px] h-[29px]">
        <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-normal leading-[28.8px] uppercase text-center">
          Global Presence and Clientele
        </p>
      </div>

      {/* Main Title */}
      <div className="absolute left-[276px] top-[151px] flex items-center gap-3.5">
        <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[62px] font-medium leading-[74.4px] text-center">
          Delivering Worldwide
        </span>
        <span className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Instrument_Serif'] text-[72px] font-normal leading-[93.6px] text-center">
          Across Scales
        </span>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute left-0 top-[593px] w-[1439px] h-[431px] flex items-center">
        {/* Main Content Card */}
        <div className="w-[1132px] h-full bg-black/20 backdrop-blur-[34px] relative">
          {/* Text Content */}
          <div className="absolute left-24 top-[54px] w-[940px] h-[252px]">
            <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[26px] font-medium leading-9">
              From our inception, we've had a global mindset. Today, Blessing SoftTech has a footprint across North America, Europe, Asia, and the Middle East, with offices and development centers in key tech hubs. But more importantly, we have successfully delivered projects in over 30+ countries – and that number grows every quarter. Our global presence isn't just about offices; it's about understanding local business cultures, regulations, and market needs. We take pride in being a cosmopolitan team that can operate 24/7, leveraging time zone differences to our clients' advantage.
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="absolute left-0 top-[425px] w-[580px] h-1.5 bg-gradient-to-r from-[#E79A01] to-[#E76C01]"></div>
        </div>

        {/* Right Side Elements - Empty cards for now */}
        <div className="flex-1 h-full bg-black/20 backdrop-blur-[34px]"></div>
        <div className="flex-1 h-full bg-black/20 backdrop-blur-[34px]"></div>
        <div className="flex-1 h-full bg-black/20 backdrop-blur-[34px]"></div>
      </div>

      {/* Icon Elements */}
      {/* Icon 1 - Large white circle */}
      <div className="absolute left-24 top-[493px] w-20 h-20 bg-white rounded-[50px] flex items-center justify-center">
        <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
          <path d="M28 7L28 49M28 49L14 35M28 49L42 35" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Icon 2 */}
      <div className="absolute left-[1151px] top-[509px] w-16 h-16 bg-white rounded-[50px] flex items-center justify-center">
        <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[38.4px] h-[38.4px]">
          <path d="M19 6L19 32M19 32L10 23M19 32L28 23" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Icon 3 */}
      <div className="absolute left-[1254px] top-[509px] w-16 h-16 bg-white rounded-[50px] flex items-center justify-center">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
          <circle cx="18" cy="18" r="16.5" stroke="black" strokeWidth="2.5"/>
        </svg>
      </div>

      {/* Icon 4 */}
      <div className="absolute left-[1356px] top-[509px] w-16 h-16 bg-white rounded-[50px] flex items-center justify-center">
        <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[34.72px] h-[34.71px]">
          <circle cx="17.5" cy="17.5" r="16.5" stroke="black" strokeWidth="2"/>
        </svg>
      </div>
    </section>
  )
}
