'use client'

import Image from 'next/image'
import { useState } from 'react'

export function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const services = [
    'AI/ML Solutions',
    'Software Development', 
    'Web Development',
    'App Development',
    'Software Testing',
    'UI/UX Design',
    'Data Analytics',
    'SEO Optimisation',
    'Digital Marketing'
  ]

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  return (
    <section className="relative w-[1440px] h-[895px] overflow-hidden bg-black mx-auto">
      {/* Background Image */}
      <div className="absolute left-0 top-[271px] w-[1440px] h-[987px]">
        <Image
          src="/images/contact-bg.png"
          alt="Contact Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Header Text - "Lets Create Something" */}
      <div className="absolute left-[372px] top-[111px] w-[695px] h-[86px]">
        <h2 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[72px] font-medium leading-[86.4px]">
          Lets Create Something
        </h2>
      </div>

      {/* Title Section - "Awesome together" */}
      <div className="absolute left-[495px] top-[197px] flex items-center gap-[13px]">
        <span className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Instrument_Serif'] text-[72px] font-normal leading-[93.6px]">
          Awesome
        </span>
        <span className="text-white font-['Instrument_Serif'] text-[72px] font-normal leading-[93.6px]">
          together
        </span>
      </div>

      {/* Contact Form */}
      <div className="absolute left-[225px] top-[332px] w-[990px] h-[481px]">
        <div className="w-full h-full bg-[rgba(19,20,22,0.48)] backdrop-blur-[100px] border border-white/32 rounded-lg">
          
          {/* Form Row 1 */}
          <div className="absolute left-[32px] top-[38px] flex gap-[32px]">
            <div className="w-[447px] flex flex-col gap-[9px]">
              <label className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-[24px]">
                Full Name
              </label>
              <div className="flex flex-col gap-[6px]">
                <input
                  type="text"
                  placeholder="Ex: Ravi Verma"
                  className="w-full bg-transparent text-white/60 font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-[24px] placeholder:text-white/60 border-none outline-none"
                />
                <div className="w-full h-0 border-t border-white/50"></div>
              </div>
            </div>
            <div className="w-[447px] flex flex-col gap-[9px]">
              <label className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-[24px]">
                Email ID
              </label>
              <div className="flex flex-col gap-[6px]">
                <input
                  type="email"
                  placeholder="Ex: raviverma@gmail.com"
                  className="w-full bg-transparent text-white/60 font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-[24px] placeholder:text-white/60 border-none outline-none"
                />
                <div className="w-full h-0 border-t border-white/50"></div>
              </div>
            </div>
          </div>

          {/* Form Row 2 */}
          <div className="absolute left-[32px] top-[145px] flex gap-[32px]">
            <div className="w-[447px] flex flex-col gap-[9px]">
              <label className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-[24px]">
                Phone Number
              </label>
              <div className="flex flex-col gap-[6px]">
                <input
                  type="tel"
                  placeholder="Ex: 98456 38716"
                  className="w-full bg-transparent text-white/60 font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-[24px] placeholder:text-white/60 border-none outline-none"
                />
                <div className="w-full h-0 border-t border-white/50"></div>
              </div>
            </div>
            <div className="w-[447px] flex flex-col gap-[9px]">
              <label className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-[24px]">
                Company Name
              </label>
              <div className="flex flex-col gap-[6px]">
                <input
                  type="text"
                  placeholder="Ex: Oracle, JP Morgan Chase"
                  className="w-full bg-transparent text-white/60 font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-[24px] placeholder:text-white/60 border-none outline-none"
                />
                <div className="w-full h-0 border-t border-white/50"></div>
              </div>
            </div>
          </div>

          {/* Select Service Label */}
          <div className="absolute left-[32px] top-[252px] w-[447px] h-[24px]">
            <label className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-medium leading-[24px]">
              Select Service
            </label>
          </div>

          {/* Services Selection */}
          <div className="absolute left-[32px] top-[288px] w-[926px] flex flex-wrap items-center gap-[10px]">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => toggleService(service)}
                className={`flex items-center justify-center gap-[10px] px-[10px] h-[36px] border-[0.5px] border-white/40 transition-all
                  ${selectedServices.includes(service) 
                    ? 'bg-white text-black' 
                    : 'bg-transparent text-white/80 hover:bg-white/10'
                  } font-['Neue_Haas_Grotesk_Display_Pro'] text-base font-medium leading-[19.2px]`}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Submit Button */}
          <div className="absolute left-[779px] top-[393px] w-[179px]">
            <button className="w-full bg-white text-black font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-semibold leading-[24px] px-5 py-4 flex items-center justify-center gap-[10px] hover:bg-white/90 transition-colors">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
