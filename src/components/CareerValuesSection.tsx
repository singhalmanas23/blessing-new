'use client'

import Image from 'next/image'

export default function CareerValuesSection() {
  return (
    <section className="relative w-full h-[1440px] bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute left-0 top-[373px] w-[1440px] h-[810px]">
        <Image
          src="/images/career-values-bg.png"
          alt="Values Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Main Heading */}
      <div className="absolute left-[96px] top-[124px] w-[558px] h-[231px]">
        <h2 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[64px] font-medium leading-[1.2em]">
          Blessing SoftTech stands at the intersection of
        </h2>
      </div>

      {/* Value Pills */}
      {/* Integrity Pill */}
      <div className="absolute left-[96px] top-[408px] bg-white rounded-[94.91px] flex items-center justify-center gap-[19.42px] px-[23.31px] py-[3.88px]">
        <span className="text-black font-['Neue_Haas_Grotesk_Display_Pro'] text-[50.49px] font-medium leading-[1.3846em]">
          Integrity
        </span>
      </div>

      {/* Innovation Pill */}
      <div className="absolute left-[352.9px] top-[438.15px] bg-white rounded-[94.91px] flex items-center justify-center gap-[19.42px] px-[23.31px] py-[3.88px]">
        <span className="text-black font-['Neue_Haas_Grotesk_Display_Pro'] text-[50.49px] font-medium leading-[1.3846em]">
          Innovation
        </span>
      </div>

      {/* Impact Pill */}
      <div className="absolute left-[184.05px] top-[541.88px] bg-white rounded-[94.91px] flex items-center justify-center gap-[19.42px] px-[23.31px] py-[3.88px]">
        <span className="text-black font-['Neue_Haas_Grotesk_Display_Pro'] text-[50.49px] font-medium leading-[1.3846em]">
          Impact
        </span>
      </div>

      {/* Mission-driven growth */}
      <div className="absolute left-[780px] top-[442px] w-[310px] h-[38px]">
        <h3 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[32px] font-semibold leading-[1.2em]">
          Mission-driven growth
        </h3>
      </div>

      <div className="absolute left-[780px] top-[495px] w-[468px] h-[68px]">
        <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[28px] font-medium leading-[1.2em] opacity-80">
          Every step aligns to helping businesses innovate and thrive.
        </p>
      </div>

      {/* Feature Sections */}
      {/* Global presence for digital transformation */}
      <div className="absolute left-[780px] top-[710px] w-[477px] flex flex-col gap-[15px]">
        <h4 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[32px] font-semibold leading-[1.2em] w-full">
          Global presence for digital transformation
        </h4>
        <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[28px] font-medium leading-[1.2em] opacity-80 w-full">
          Delivering impact across markets and industries.
        </p>
      </div>

      {/* Core values in action */}
      <div className="absolute left-[780px] top-[978px] w-[468px] flex flex-col gap-[15px]">
        <h4 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[32px] font-semibold leading-[1.2em] w-full">
          Core values in action
        </h4>
        <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[28px] font-medium leading-[1.2em] opacity-80 w-full">
          Integrity guides every partnership and client engagement.
        </p>
      </div>

      {/* Clients and partners as allies */}
      <div className="absolute left-[780px] top-[1245px] w-[468px] flex flex-col gap-[15px]">
        <h4 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[32px] font-semibold leading-[1.2em] w-full">
          Clients and partners as allies
        </h4>
        <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[28px] font-medium leading-[1.2em] opacity-80 w-full">
          Moving forward together to create lasting success.
        </p>
      </div>

      {/* Values Icon */}
      <div className="absolute left-[655px] top-[169px] w-[130px] h-[1318px] flex flex-col items-center gap-[19px]">
        <Image
          src="/images/career-values-icon.svg"
          alt="Values Icon"
          width={130}
          height={1318}
          className="object-contain"
        />
      </div>
    </section>
  )
}
