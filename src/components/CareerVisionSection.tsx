'use client'

import Image from 'next/image'

export default function CareerVisionSection() {
  return (
    <section className="relative w-full h-[521px] overflow-hidden"
             style={{
               background: "linear-gradient(130deg, rgba(141, 77, 0, 0.12) 2%, rgba(231, 108, 1, 0) 54%)"
             }}>
      {/* Background Image */}
        {/* <Image
          src="/images/career-vision-bg-updated.png"
          alt="Vision Background"
          fill
          className="object-cover object-center rotate-360"
        /> */}

      {/* Description Text */}
      <div className="absolute left-[96px] top-[107px] w-[625px] h-[96px]">
        <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-[1.2] opacity-[0.7]">
          Contact us to start a conversation on how we can help achieve your vision. Let&apos;s embark on a bold journey of innovation, driving real results and building a partnership rooted in trust and excellence. Here&apos;s to a future of shared success—for you, for us, and for the communities we serve.
        </p>
      </div>

      {/* Title Section */}
      <div className="absolute left-[844px] top-[93px] w-[500px] h-[191px]" 
           style={{ 
             display: 'flex', 
             flexDirection: 'column', 
             gap: '-12px' 
           }}>
        <h2 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[80px] font-medium leading-[1.2] w-full h-auto text-left">
          Lets talk about
        </h2>

        <h2 className="text-transparent bg-clip-text font-['Instrument_Serif'] text-[80px] font-normal leading-[1.3] w-full h-auto text-left"
            style={{
              backgroundImage: "linear-gradient(111deg, rgba(255, 255, 255, 1) 41%, rgba(231, 154, 1, 1) 73%, rgba(231, 108, 1, 1) 94%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
          your vision
        </h2>
      </div>
    </section>
  )
}
