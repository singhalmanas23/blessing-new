'use client'

import Image from 'next/image'
import {
  Handshake,
  Network,
  Cloud,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react'

export default function CareerPartnersSection() {
  return (
    <section className="relative w-full bg-[#131416] overflow-hidden flex flex-col lg:flex-row border-t border-white/10">
      {/* ===== Left Side: Image + Highlights ===== */}
      <div className="relative w-full lg:w-[45%] h-[480px] lg:h-[820px] border-b lg:border-b-0 lg:border-r border-white/10">
        <Image
          src="/images/career-partners-bg.png"
          alt="Partners Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131416] via-[#131416]/70 to-transparent" />
        <div className="relative z-10 flex flex-col justify-center h-full space-y-6 px-6 lg:px-10">
          {[
            {
              icon: Network,
              text: 'Collaborating with global tech & consulting leaders.',
            },
            {
              icon: Handshake,
              text: 'Building long-term, growth-driven alliances.',
            },
            {
              icon: Cloud,
              text: 'Partnering with AWS, Azure & Salesforce ecosystems.',
            },
            {
              icon: Sparkles,
              text: 'Delivering smarter solutions through collaboration.',
            },
          ].map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#1A1B1D]/80 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/5 hover:border-[#E79A01]/40 transition-all"
            >
              <Icon className="w-6 h-6 text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text shrink-0" />
              <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Right Side: Content + CTA ===== */}
      <div className="relative flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-0 w-full lg:w-[55%]">
        <div className="max-w-xl space-y-6">
          <h2 className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] text-xl sm:text-2xl font-semibold tracking-wide">
            Partners
          </h2>

          <p className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 text-[18px] sm:text-[20px] leading-relaxed font-medium">
            We believe in the power of partnerships. Blessing SoftTech collaborates with technology firms, 
            consultants, and platform providers to craft scalable, innovative, and sustainable digital 
            ecosystems. Together, we create seamless solutions that deliver measurable results.
          </p>

          <button className="group flex items-center gap-3 bg-white text-black font-semibold text-lg px-6 py-4 rounded-xl hover:bg-gradient-to-r hover:from-[#E79A01] hover:to-[#E76C01] hover:text-white transition-all">
            Become a Partner
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2 text-white/70 mt-4">
            <Info className="w-5 h-5" />
            <span className="text-base font-medium">
              Explore partnership opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
