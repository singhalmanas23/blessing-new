'use client'

import Image from 'next/image'
import Link from 'next/link'
import UnionIcon from './UnionIcon'

export default function CareerHeroSection() {
  return (
    <section className="relative w-full mx-auto max-w-[1440px] min-h-[600px] sm:min-h-[750px] md:min-h-[900px] lg:min-h-[1024px] bg-[#131416] overflow-hidden">
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0 w-full h-full opacity-50">
        <Image
          src="/images/career-hero-bg.png"
          alt="Career Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ===== Top Bar (Logo + Nav + Contact) ===== */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-5 sm:px-8 lg:px-20 py-5 lg:py-8 z-20">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Blessing SoftTech Home"
          className="flex items-center gap-2 scale-90 sm:scale-100"
        >
          <div className="relative w-[135px] h-[39px]">
            <div className="absolute left-[36px] top-[3px]">
              <span className="text-white font-crimson text-[30px] leading-none">Blessing</span>
            </div>
            <div className="absolute left-[77px] top-[23px]">
              <span className="bg-gradient-to-r from-[#E79A01] to-[#E76C01] bg-clip-text text-transparent font-crimson text-[12px] font-semibold leading-none">
                SoftTech
              </span>
            </div>
            <div className="absolute left-0 top-0 w-[31px] h-[34px]">
              <UnionIcon />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-12"
          aria-label="Main Navigation"
        >
          {[
            { label: 'Our Services', href: '#services' },
            { label: 'Products', href: '#products' },
            { label: 'Why Choose Us?', href: '#why-us' },
            { label: 'Careers', href: '#careers' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white/80 font-dm text-base hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact Us Button */}
        <Link
          href="#contact"
          className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 bg-[rgba(25,27,32,0.2)] hover:bg-[rgba(25,27,32,0.4)] rounded-sm backdrop-blur-sm text-white font-neue text-sm sm:text-base font-medium transition-all"
        >
          Contact Us
        </Link>
      </header>

      {/* ===== Hero Text ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-5 sm:px-10 lg:px-0">
        <div className="space-y-6 mt-32 sm:mt-48 md:mt-56 lg:mt-[255px] animate-in">
          <h1 className="text-white font-instrument text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight animate-fade-in">
            Join our Journey
          </h1>
          <div className="space-y-4">
            {['FOR CLIENTS', 'PARTNERS', 'AND TALENT'].map((line, i) => (
              <p
                key={line}
                className="text-white font-neue font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.2] animate-slide-up"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Decorative Elements (Desktop Only) ===== */}
      <div
        className="hidden lg:block absolute left-[933px] top-[425px] w-[161px] h-[85px] bg-[#D9D9D9] animate-fade-in"
        style={{ animationDelay: '0.4s' }}
      />
      <div
        className="hidden lg:block absolute left-[387px] top-[522px] w-[161px] h-[85px] bg-[#D9D9D9] animate-fade-in"
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className="hidden lg:block absolute left-[930px] top-[631px] w-[161px] h-[85px] bg-[#D9D9D9] animate-fade-in"
        style={{ animationDelay: '0.6s' }}
      />
    </section>
  )
}
