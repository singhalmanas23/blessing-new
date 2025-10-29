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
    <section className="relative w-full bg-black overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute left-0 top-[271px] w-full h-[987px] z-0">
        <Image
          src="/images/contact-bg.png"
          alt="Contact Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Desktop + Tablet Layout */}
      <div className="hidden md:block relative mx-auto max-w-[1440px] h-[895px] z-10">

        {/* Header Text */}
        <h2 className="absolute left-[372px] top-[111px] text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[72px] font-medium leading-[86.4px]">
          Lets Create Something
        </h2>

        {/* Main Title */}
        <div className="absolute left-[495px] top-[197px] flex items-center gap-[13px]">
          <span className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Instrument_Serif'] text-[72px] leading-[93.6px]">
            Awesome
          </span>
          <span className="text-white font-['Instrument_Serif'] text-[72px] leading-[93.6px]">
            together
          </span>
        </div>

        {/* Form Container */}
        <div className="absolute left-[225px] top-[332px] w-[990px]">
          <div className="w-full bg-[rgba(19,20,22,0.48)] backdrop-blur-[100px] border border-white/32 rounded-lg px-8 py-10">

            {/* ✅ GRID for Form Rows */}
            <div className="grid grid-cols-2 gap-8">

              {/* Full Name */}
              <div>
                <label className="text-white text-[20px]">Full Name</label>
                <input
                  type="text"
                  placeholder="Ex: Ravi Verma"
                  className="w-full bg-transparent text-white/70 text-[20px] placeholder:text-white/60 border-b border-white/50 focus:outline-none mt-2 pb-1"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-white text-[20px]">Email ID</label>
                <input
                  type="email"
                  placeholder="Ex: raviverma@gmail.com"
                  className="w-full bg-transparent text-white/70 text-[20px] placeholder:text-white/60 border-b border-white/50 focus:outline-none mt-2 pb-1"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-white text-[20px]">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Ex: 98456 38716"
                  className="w-full bg-transparent text-white/70 text-[20px] placeholder:text-white/60 border-b border-white/50 focus:outline-none mt-2 pb-1"
                />
              </div>

              {/* Company */}
              <div>
                <label className="text-white text-[20px]">Company Name</label>
                <input
                  type="text"
                  placeholder="Ex: Oracle, JP Morgan Chase"
                  className="w-full bg-transparent text-white/70 text-[20px] placeholder:text-white/60 border-b border-white/50 focus:outline-none mt-2 pb-1"
                />
              </div>

            </div>

            {/* Services */}
            <div className="mt-10">
              <label className="text-white text-[20px]">Select Service</label>

              <div className="flex flex-wrap gap-3 mt-4">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`px-4 py-2 border rounded-md transition-all text-sm md:text-base
                      ${selectedServices.includes(service)
                        ? 'bg-white text-black'
                        : 'text-white border-white/40 hover:bg-white/10'}
                    `}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-10">
              <button className="bg-white text-black text-[20px] font-semibold px-6 py-3 rounded-md hover:bg-white/90">
                Schedule Call
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* ✅ MOBILE VERSION — CLEAN STACKED RESPONSIVE */}
      <div className="md:hidden relative px-6 pt-24 pb-16 space-y-10 z-10">
        <h2 className="text-white text-[36px] font-medium text-center">
          Lets Create Something
        </h2>

        <p className="text-center font-['Instrument_Serif'] text-[40px] leading-[48px]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01]">
            Awesome
          </span>{' '}
          <span className="text-white">together</span>
        </p>

        {/* Form */}
        <div className="bg-[rgba(19,20,22,0.48)] backdrop-blur-[40px] p-6 rounded-lg border border-white/20 space-y-6">

          <input className="w-full bg-transparent border-b border-white/40 text-white/80 text-[18px] pb-2 focus:outline-none" placeholder="Full Name" />
          <input className="w-full bg-transparent border-b border-white/40 text-white/80 text-[18px] pb-2 focus:outline-none" placeholder="Email" />
          <input className="w-full bg-transparent border-b border-white/40 text-white/80 text-[18px] pb-2 focus:outline-none" placeholder="Phone" />
          <input className="w-full bg-transparent border-b border-white/40 text-white/80 text-[18px] pb-2 focus:outline-none" placeholder="Company" />

          <div>
            <p className="text-white text-[18px]">Select Service</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => toggleService(service)}
                  className={`px-3 py-1 text-[14px] border rounded-md
                  ${selectedServices.includes(service)
                    ? 'bg-white text-black'
                    : 'text-white border-white/40'}
                  `}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-white text-black text-[18px] py-3 rounded-md font-semibold">
            Schedule Call
          </button>

        </div>
      </div>
    </section>
  )
}
