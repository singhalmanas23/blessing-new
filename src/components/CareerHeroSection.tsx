'use client'

import Image from 'next/image'
import UnionIcon from './UnionIcon'

export default function CareerHeroSection() {
  return (
    <section className="relative w-[1440px] h-[1024px] bg-[#131416] overflow-hidden mx-auto">
      {/* Background Image */}
      <div className="absolute left-[-379px] top-0 w-[2199px] h-[1024px] opacity-50">
        <Image
          src="/images/career-hero-bg.png"
          alt="Career Hero Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Navigation */}
      <div className="absolute left-[472px] top-[49px] flex items-center gap-[50px]">
        <span className="text-white/80 font-['DM_Sans'] text-[16px] font-normal leading-[20.83px]">
          Our Services
        </span>
        <span className="text-white/80 font-['DM_Sans'] text-[16px] font-normal leading-[20.83px]">
          Products
        </span>
        <span className="text-white/80 font-['DM_Sans'] text-[16px] font-normal leading-[20.83px]">
          Why Choose Us?
        </span>
        <span className="text-white/80 font-['DM_Sans'] text-[16px] font-normal leading-[20.83px]">
          Careers
        </span>
      </div>

      {/* Contact Us Button */}
      <div className="absolute left-[1244px] top-[32px] flex items-center justify-center gap-[10px] px-[20px] py-[16px] bg-[rgba(25,27,32,0.2)]">
        <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[16px] font-medium leading-[19.2px]">
          Contact Us
        </span>
      </div>

      {/* Company Logo */}
      <div className="absolute left-[80px] top-[40px] w-[135.02px] h-[38.92px]">
        <div className="absolute left-[36.03px] top-[3.44px] w-[99px] h-[22px]">
          <span className="text-white font-['Crimson_Text'] text-[30.76px] font-normal leading-[21.87px]">
            Blessing
          </span>
        </div>
        <div className="absolute left-[76.69px] top-[22.92px] w-[44px] h-[16px]">
          <span className="text-transparent bg-gradient-to-r from-[#E79A01] to-[#E76C01] bg-clip-text font-['Crimson_Text'] text-[11.96px] font-semibold leading-[15.54px] drop-shadow-[0px_0.34px_0.68px_rgba(0,0,0,0.25)]">
            SoftTech
          </span>
        </div>
        <div className="absolute left-0 top-0 w-[31.41px] h-[34.2px]">
          <UnionIcon />
        </div>
      </div>

      {/* Main Heading - "Join our Journey" */}
      <div className="absolute left-[531px] top-[255px] w-[378px] h-[83px]">
        <h1 className="text-white font-['Instrument_Serif'] text-[64px] font-normal leading-[83.2px] text-center">
          Join our Journey
        </h1>
      </div>

      {/* Large Text - "FOR CLIENTS" */}
      <div className="absolute left-[332px] top-[413px] w-[594px] h-[115px]">
        <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[96px] font-semibold leading-[115.2px] text-center">
          FOR CLIENTS
        </span>
      </div>

      {/* Large Text - "PARTNERS" */}
      <div className="absolute left-[566px] top-[510px] w-[488px] h-[115px]">
        <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[96px] font-semibold leading-[115.2px] text-center">
          PARTNERS
        </span>
      </div>

      {/* Large Text - "AND TALENT" */}
      <div className="absolute left-[349px] top-[619px] w-[561px] h-[115px]">
        <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[96px] font-semibold leading-[115.2px] text-right">
          AND TALENT
        </span>
      </div>

      {/* Decorative Rectangles */}
      <div className="absolute left-[933px] top-[425px] w-[161px] h-[85px] bg-[#D9D9D9]"></div>
      <div className="absolute left-[387px] top-[522px] w-[161px] h-[85px] bg-[#D9D9D9]"></div>
      <div className="absolute left-[930px] top-[631px] w-[161px] h-[85px] bg-[#D9D9D9]"></div>
    </section>
  )
}
