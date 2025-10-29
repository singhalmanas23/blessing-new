'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function MissionVisionSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation({ threshold: 0.3 })
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen min-h-[800px] max-h-[1200px] bg-[#131416] overflow-hidden"
      style={{ height: 'clamp(800px, 100vh, 1200px)' }}
    >
      {/* Background Image - Responsive positioning */}
      <div className="absolute left-[29%] top-[28%] w-[42%] h-[57%] hidden lg:block">
        <Image
          src="/images/mission-vision-bg.png"
          alt="Mission Vision Background"
          fill
          className="object-cover rounded-full"
          sizes="(min-width: 1024px) 42vw, 0px"
          quality={85}
          priority={false}
        />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 lg:hidden opacity-30">
        <Image
          src="/images/mission-vision-bg.png"
          alt="Mission Vision Background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">
        {/* Header Text */}
        <div className={`absolute left-[44.6%] top-[9.5%] w-[10.9%] h-[2.7%] hidden lg:block transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <p className="text-white font-neue text-[clamp(20px,1.67vw,24px)] font-normal leading-[1.2] uppercase text-center">
            empowering
          </p>
        </div>
        
        <div className={`absolute left-[21.9%] top-[13.9%] w-[56.3%] h-[9.1%] hidden lg:block transition-all duration-700 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}>
          <h1 className="text-transparent bg-linear-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-instrument text-[clamp(56px,5.14vw,74px)] font-normal leading-[1.3] text-center">
            Global Digital Transformation
          </h1>
        </div>

        {/* Mobile Header */}
        <div className={`lg:hidden text-center pt-12 px-6 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-white font-neue text-xl font-normal uppercase mb-4">
            empowering
          </p>
          <h1 className="text-transparent bg-linear-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-instrument text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
            Global Digital Transformation
          </h1>
        </div>

        {/* Mission Card */}
        <div 
          ref={missionRef as React.RefObject<HTMLDivElement>}
          className={`absolute left-[6%] top-[31.3%] w-[40.4%] h-[28%] hidden lg:block transition-all duration-700 delay-400 ${
            missionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="w-full h-full bg-black/50 backdrop-blur-[29px] border-t border-white/24 rounded-3xl p-[clamp(1.5rem,2.5vw,2.5rem)]">
            <h3 className="text-white font-neue text-[clamp(24px,2.22vw,32px)] font-semibold leading-[1.2] mb-[clamp(1rem,1.67vw,1.5rem)] text-start">
              Our Mission is clear
            </h3>
            <p className="text-white/80 font-neue text-[clamp(16px,1.39vw,16px)] font-medium leading-[1.4]">
              To catalyze the digital transformation of businesses worldwide through innovative, AI-driven, and human-centric technology solutions. We aim to bridge the gap between cutting-edge tech and real-world business needs, making innovation practical and impactful.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div 
          ref={visionRef as React.RefObject<HTMLDivElement>}
          className={`absolute left-[52.9%] top-[59.1%] w-[40.4%] h-[31.3%] hidden lg:block transition-all duration-700 delay-600 ${
            visionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="w-full h-full bg-black/50 backdrop-blur-[29px] border-t border-white/24 rounded-3xl p-[clamp(1.5rem,2.5vw,2.5rem)]">
            <h3 className="text-white font-neue text-[clamp(24px,2.22vw,32px)] font-semibold leading-[1.2] mb-[clamp(1rem,1.67vw,1.5rem)]">
              Our Vision
            </h3>
            <p className="text-white/80 font-neue text-[clamp(16px,1.39vw,16px)] font-medium leading-[1.4]">
              is to be a global leader in digital innovation, a company that not only adapts to the future but actively shapes it. We envision a world where enterprises of all sizes can leverage advanced technologies (AI, cloud, data, immersive experiences) as easily as they use electricity – seamlessly and ubiquitously – and we strive to create the platforms and services to make that a reality.
            </p>
          </div>
        </div>

        {/* Decorative Lines for Mission Card */}
        <div className="absolute left-[106px] top-[338px] w-[540px] h-0 hidden lg:block">
          <div className="w-full border-t-10 border-transparent bg-linear-to-r from-transparent via-[#E77B01] to-transparent blur-[3px]"></div>
        </div>
        <div className="absolute left-[106px] top-[335px] w-[540px] h-0 hidden lg:block">
          <div className="w-full border-t-4 border-transparent bg-linear-to-r from-transparent via-white to-transparent blur-[3px]"></div>
        </div>

        {/* Decorative Lines for Vision Card */}
        <div className="absolute left-[782px] top-[632px] w-[540px] h-0 hidden lg:block">
          <div className="w-full border-t-10 border-transparent bg-linear-to-r from-transparent via-[#E77B01] to-transparent blur-[3px]"></div>
        </div>
        <div className="absolute left-[782px] top-[629px] w-[540px] h-0 hidden lg:block">
          <div className="w-full border-t-4 border-transparent bg-linear-to-r from-transparent via-white to-transparent blur-[3px]"></div>
        </div>

        {/* Mobile Layout */}
        <div className={`lg:hidden px-6 pt-8 pb-16 space-y-8 transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Mission Card Mobile */}
          <div className="bg-black/50 backdrop-blur-[29px] border-t border-white/24 rounded-3xl p-6 sm:p-8">
            <h3 className="text-white font-neue text-2xl sm:text-3xl font-semibold leading-tight mb-4 text-center">
              Our Mission is clear
            </h3>
            <p className="text-white/80 font-neue text-lg sm:text-xl font-medium leading-relaxed">
              To catalyze the digital transformation of businesses worldwide through innovative, AI-driven, and human-centric technology solutions. We aim to bridge the gap between cutting-edge tech and real-world business needs, making innovation practical and impactful.
            </p>
            {/* Mobile decorative line */}
            <div className="w-full h-[3px] bg-linear-to-r from-transparent via-[#E77B01] to-transparent blur-[2px] mt-4"></div>
          </div>

          {/* Vision Card Mobile */}
          <div className="bg-black/50 backdrop-blur-[29px] border-t border-white/24 rounded-3xl p-6 sm:p-8">
            <h3 className="text-white font-neue text-2xl sm:text-3xl font-semibold leading-tight mb-4">
              Our Vision
            </h3>
            <p className="text-white/80 font-neue text-lg sm:text-xl font-medium leading-relaxed">
              is to be a global leader in digital innovation, a company that not only adapts to the future but actively shapes it. We envision a world where enterprises of all sizes can leverage advanced technologies (AI, cloud, data, immersive experiences) as easily as they use electricity – seamlessly and ubiquitously – and we strive to create the platforms and services to make that a reality.
            </p>
            {/* Mobile decorative line */}
            <div className="w-full h-[3px] bg-linear-to-r from-transparent via-[#E77B01] to-transparent blur-[2px] mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
