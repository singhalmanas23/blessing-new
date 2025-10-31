'use client'

import Image from 'next/image'

export default function CareerVisionSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center py-16 sm:py-20 md:py-28 lg:py-36"
      style={{
        background:
          'linear-gradient(130deg, rgba(141, 77, 0, 0.12) 2%, rgba(231, 108, 1, 0) 54%)',
      }}
    >
      {/* Background Image */}
      <Image
        src="/images/career-vision-bg-updated.png"
        alt="Vision Background"
        fill
        className="object-cover object-center opacity-20"
        priority
      />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 sm:gap-14 lg:gap-20">
        
        {/* LEFT COLUMN — Description */}
        <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0">
          <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed opacity-80">
            Contact us to start a conversation on how we can help achieve your
            vision. Let&apos;s embark on a bold journey of innovation, driving
            real results and building a partnership rooted in trust and
            excellence. Here&apos;s to a future of shared success—for you, for
            us, and for the communities we serve.
          </p>
        </div>

        {/* RIGHT COLUMN — Title */}
        <div className="flex-1 flex flex-col text-center lg:text-left">
          <h2 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Let’s talk about
          </h2>
          <h2
            className="font-['Instrument_Serif'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-transparent bg-clip-text"
            style={{
              backgroundImage:
                'linear-gradient(111deg, rgba(255, 255, 255, 1) 41%, rgba(231, 154, 1, 1) 73%, rgba(231, 108, 1, 1) 94%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            your vision
          </h2>
        </div>
      </div>
    </section>
  )
}
