'use client'

import Image from 'next/image'

export default function MissionVisionSection() {
  return (
    <section className="relative w-full h-[1060px] bg-[#131416] overflow-hidden">
      {/* Background Image */}
      <div className="absolute left-[419px] top-[295px] w-[602px] h-[602px] hidden lg:block">
        <Image
          src="/images/mission-vision-bg.png"
          alt="Mission Vision Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 lg:hidden opacity-30">
        <Image
          src="/images/mission-vision-bg.png"
          alt="Mission Vision Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">
        {/* Header Text */}
        <div className="absolute left-[642px] top-[101px] w-[157px] h-[29px] hidden lg:block">
          <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-normal leading-[28.8px] uppercase text-center">
            empoworing
          </p>
        </div>
        
        <div className="absolute left-[315px] top-[147px] w-[811px] h-24 hidden lg:block">
          <h1 className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Instrument_Serif'] text-[74px] font-normal leading-[96.2px] text-center">
            Global Digital Transformation
          </h1>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden text-center pt-12 px-6">
          <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-xl font-normal uppercase mb-4">
            empoworing
          </p>
          <h1 className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Instrument_Serif'] text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
            Global Digital Transformation
          </h1>
        </div>

        {/* Mission Card */}
        <div className="absolute left-[86px] top-[332px] w-[582px] h-[297px] hidden lg:block">
          <div className="w-full h-full bg-black/50 backdrop-blur-[29px] border-t border-white/24 rounded-3xl p-10">
            <h3 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[32px] font-semibold leading-[38.4px] mb-6 text-center">
              Our Mission is clear
            </h3>
            <p className="text-white/80 font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-7">
              To catalyze the digital transformation of businesses worldwide through innovative, AI-driven, and human-centric technology solutions. We aim to bridge the gap between cutting-edge tech and real-world business needs, making innovation practical and impactful.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="absolute left-[762px] top-[626px] w-[582px] h-[332px] hidden lg:block">
          <div className="w-full h-full bg-black/50 backdrop-blur-[29px] border-t border-white/24 rounded-3xl p-10">
            <h3 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[32px] font-semibold leading-[38.4px] mb-6">
              Our Vision
            </h3>
            <p className="text-white/80 font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-7">
              is to be a global leader in digital innovation, a company that not only adapts to the future but actively shapes it. We envision a world where enterprises of all sizes can leverage advanced technologies (AI, cloud, data, immersive experiences) as easily as they use electricity – seamlessly and ubiquitously – and we strive to create the platforms and services to make that a reality.
            </p>
          </div>
        </div>

        {/* Decorative Lines for Mission Card */}
        <div className="absolute left-[106px] top-[338px] w-[540px] h-0 hidden lg:block">
          <div className="w-full border-t-[10px] border-transparent bg-gradient-to-r from-transparent via-[#E77B01] to-transparent blur-[3px]"></div>
        </div>
        <div className="absolute left-[106px] top-[335px] w-[540px] h-0 hidden lg:block">
          <div className="w-full border-t-[4px] border-transparent bg-gradient-to-r from-transparent via-white to-transparent blur-[3px]"></div>
        </div>

        {/* Decorative Lines for Vision Card */}
        <div className="absolute left-[782px] top-[632px] w-[540px] h-0 hidden lg:block">
          <div className="w-full border-t-[10px] border-transparent bg-gradient-to-r from-transparent via-[#E77B01] to-transparent blur-[3px]"></div>
        </div>
        <div className="absolute left-[782px] top-[629px] w-[540px] h-0 hidden lg:block">
          <div className="w-full border-t-[4px] border-transparent bg-gradient-to-r from-transparent via-white to-transparent blur-[3px]"></div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden px-6 pt-8 pb-16 space-y-8">
          {/* Mission Card Mobile */}
          <div className="bg-black/50 backdrop-blur-[29px] border-t border-white/24 rounded-3xl p-6 sm:p-8">
            <h3 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-2xl sm:text-3xl font-semibold leading-tight mb-4 text-center">
              Our Mission is clear
            </h3>
            <p className="text-white/80 font-['Neue_Haas_Grotesk_Display_Pro'] text-lg sm:text-xl font-medium leading-relaxed">
              To catalyze the digital transformation of businesses worldwide through innovative, AI-driven, and human-centric technology solutions. We aim to bridge the gap between cutting-edge tech and real-world business needs, making innovation practical and impactful.
            </p>
            {/* Mobile decorative line */}
            <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#E77B01] to-transparent blur-[2px] mt-4"></div>
          </div>

          {/* Vision Card Mobile */}
          <div className="bg-black/50 backdrop-blur-[29px] border-t border-white/24 rounded-3xl p-6 sm:p-8">
            <h3 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-2xl sm:text-3xl font-semibold leading-tight mb-4">
              Our Vision
            </h3>
            <p className="text-white/80 font-['Neue_Haas_Grotesk_Display_Pro'] text-lg sm:text-xl font-medium leading-relaxed">
              is to be a global leader in digital innovation, a company that not only adapts to the future but actively shapes it. We envision a world where enterprises of all sizes can leverage advanced technologies (AI, cloud, data, immersive experiences) as easily as they use electricity – seamlessly and ubiquitously – and we strive to create the platforms and services to make that a reality.
            </p>
            {/* Mobile decorative line */}
            <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#E77B01] to-transparent blur-[2px] mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
