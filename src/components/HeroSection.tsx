'use client'

import Image from 'next/image'
import UnionIcon from './UnionIcon'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center w-full max-w-7xl mx-auto px-6 py-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <UnionIcon className="w-8 h-8" />
          <div className="leading-none">
            <span className="text-white font-['Crimson_Text'] text-2xl block">Blessing</span>
            <span className="text-transparent bg-gradient-to-r from-[#E79A01] to-[#E76C01] bg-clip-text text-xs font-semibold">
              SoftTech
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Our Services", "Products", "Why Choose Us?", "Careers"].map((item) => (
            <span
              key={item}
              className="text-white/80 hover:text-white transition-colors cursor-pointer text-base"
            >
              {item}
            </span>
          ))}
        </nav>

        {/* Contact */}
        <button className="px-6 py-3 bg-[rgba(25,27,32,0.2)] backdrop-blur-md rounded-md text-white hover:bg-black/30 transition">
          Contact Us
        </button>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-20 md:mt-32">
        <h1 className="text-white font-['Instrument_Serif'] text-4xl sm:text-5xl md:text-6xl">
          The story of
        </h1>

        <h2 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-4xl sm:text-6xl md:text-[72px] mt-2">
          Blessing SoftTech
        </h2>

        <p className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text text-lg md:text-xl font-medium mt-3">
          Innovating with Purpose and Vision
        </p>
      </div>

      {/* Mission */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6 mt-24 space-y-6">
        <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl">
          Our journey began with a simple yet ambitious mission
        </h3>
        <p className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed">
          to empower businesses globally through innovative software solutions that
          drive transformation and create lasting impact.
        </p>
      </div>

      {/* Divider */}
      <div className="relative z-10 w-full border-t border-white/30 mt-16" />

      {/* Scroll Area */}
      <div className="relative z-10 flex flex-col items-center gap-4 mt-12 pb-16">
        {/* Arrow */}
        <svg width="32" height="32" viewBox="0 0 24 24">
          <path
            d="M12 2L12 22M12 22L6 16M12 22L18 16"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="gradient" x1="4%" y1="0%" x2="92%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="46%" stopColor="#E79A01" />
              <stop offset="100%" stopColor="#E76C01" />
            </linearGradient>
          </defs>
        </svg>

        {/* Scroll Indicator */}
        <div className="flex items-center gap-4">
          <span className="text-white text-lg">Scroll</span>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full border border-[#E79A01]" />
            <div className="w-24 border-t border-[#E79A01]" />
            <div className="w-4 h-4 rounded-full border border-[#E79A01]" />
            <div className="w-24 border-t border-white/30" />
            <div className="w-4 h-4 rounded-full border border-white/40" />
          </div>
        </div>
      </div>
    </section>
  )
}
