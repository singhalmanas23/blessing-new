'use client'

import Image from 'next/image'

export default function CareerStorySection() {
  return (
    <section className="relative w-[1440px] h-[488px] bg-[#131416] overflow-hidden mx-auto">
      {/* Background SVG */}
      <div className="absolute left-0 top-0 w-[1440px] h-[488px]">
        <Image
          src="/images/career-story-bg.svg"
          alt="Career Story Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="absolute left-[406px] top-[186px] w-[629px] flex flex-col items-center">
        {/* First Line of Text */}
        <div className="w-full">
          <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[32px] text-center">
            Blessing SoftTech story is still being written and
          </p>
        </div>

        {/* Second Line of Text with Gradient */}
        <div className="w-full">
          <p className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Instrument_Serif'] text-[24px] font-normal leading-[32px] text-center">
            We Invite you to be part of it
          </p>
        </div>
      </div>
    </section>
  )
}
