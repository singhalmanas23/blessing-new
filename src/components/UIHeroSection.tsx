'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function UIHeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#131416] overflow-hidden flex flex-col items-center justify-between">
      {/* Gradient Blur Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#E79A01] via-[#E76C01] to-transparent opacity-30 blur-[220px] z-0" />

      {/* Top Navigation */}
      <header className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-6 md:py-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#E79A01] to-[#E76C01]" />
          <div className="leading-none">
            <h2 className="text-white font-['Crimson_Text'] text-2xl">Blessing</h2>
            <p className="text-sm font-semibold bg-gradient-to-tr from-[#E79A01] to-[#E76C01] bg-clip-text text-transparent">
              SoftTech
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-white/80 text-sm font-['DM_Sans']">
          <a href="#services" className="hover:text-white transition">Our Services</a>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#why" className="hover:text-white transition">Why Choose Us?</a>
          <a href="#industries" className="hover:text-white transition">Industries</a>
        </nav>

        {/* Contact Button */}
        <button className="hidden md:flex items-center gap-2 bg-gradient-to-tr from-[#E79A01] to-[#E76C01] text-white font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-sm px-5 py-2.5 rounded-lg shadow-[0_0_15px_rgba(231,154,1,0.3)] hover:shadow-[0_0_25px_rgba(231,154,1,0.5)] transition-all duration-200">
          Contact Us <ArrowRight size={16} />
        </button>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 py-16 md:py-24 gap-12">
        {/* LEFT TEXT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-white leading-tight">
            UI/UX Strategy
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Neue_Haas_Grotesk_Display_Pro'] font-medium leading-tight text-transparent bg-clip-text bg-gradient-to-tr from-white via-[#E79A01] to-[#E76C01]">
            & Design
          </h1>
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-md mx-auto md:mx-0">
            We create meaningful digital experiences that balance creativity, usability, and performance — making your brand stand out.
          </p>

          {/* Mobile Contact Button */}
          <button className="mt-8 flex md:hidden items-center justify-center gap-2 bg-gradient-to-tr from-[#E79A01] to-[#E76C01] text-white font-medium text-sm px-6 py-3 rounded-lg shadow-[0_0_15px_rgba(231,154,1,0.3)] hover:shadow-[0_0_25px_rgba(231,154,1,0.5)] transition-all duration-200">
            Contact Us <ArrowRight size={16} />
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Glow Ring */}
          <div className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-[#E79A01] to-[#E76C01] opacity-40 blur-[120px] rounded-full" />

          {/* "C" Letter */}
          <span className="relative z-10 font-['Neue_Haas_Grotesk_Display_Pro'] text-[140px] md:text-[220px] lg:text-[300px] font-medium text-white/90">
            C
          </span>

          {/* Image */}
          <Image
            src="/images/ui-hero-bg.png"
            alt="UI/UX Design"
            width={700}
            height={700}
            className="absolute w-[300px] md:w-[500px] lg:w-[650px] object-contain opacity-80"
            priority
          />
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#E79A01]/60 to-transparent opacity-60" />
    </section>
  )
}
