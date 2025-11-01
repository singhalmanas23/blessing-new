"use client";

import { ML_CONTENT } from "@/constants/mlContent";
import Image from "next/image";
import Link from "next/link";

export default function MLHeroSection() {
  const { hero } = ML_CONTENT;

  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[750px] md:min-h-[900px] lg:min-h-[1024px] bg-[#131416] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/ml-hero-bg-2a9a89.png"
          alt="AI & Machine Learning Solutions Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#131416]/40 via-transparent to-[#131416]/60" />

      {/* Content Container */}
      <div className="relative z-10 max-w-container mx-auto px-[5%] lg:px-20 h-full min-h-[600px] sm:min-h-[750px] md:min-h-[900px] lg:min-h-[1024px] flex flex-col">
        {/* Header/Navigation */}
        <header className="flex items-center justify-between pt-8 lg:pt-10 animate-fade-in gpu-accelerated">
          {/* Logo */}
          <Link
            href="/"
            className="relative group"
            aria-label="Blessing SoftTech Home"
          >
            <div className="flex flex-col">
              <span className="font-crimson text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30.76px] text-white leading-[0.71]">
                Blessing
              </span>
              <span className="font-crimson font-semibold text-[8px] sm:text-[10px] md:text-[11px] lg:text-[11.96px] bg-gradient-to-r from-[#E79A01] to-[#E76C01] bg-clip-text text-transparent leading-[1.3] text-right">
                SoftTech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {hero.navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="font-dm text-[16px] text-white/80 hover:text-white transition-colors duration-300 will-change-transform hover:scale-105"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Link
            href="#contact"
            className="px-5 py-4 bg-[#191B20]/20 backdrop-blur-md rounded-lg font-neue text-[14px] sm:text-[16px] text-white hover:bg-[#191B20]/40 transition-all duration-300 will-change-transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Contact Us
          </Link>
        </header>

        {/* Hero Content - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12">
          {/* Decorative Circle */}
          {/* <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[20%] w-[300px] h-[200px] sm:w-[500px] sm:h-[300px] md:w-[724px] md:h-[395px] rounded-full bg-[#1C1D1F] opacity-80 animate-fade-in gpu-accelerated"
            style={{ animationDelay: "0.1s" }}
            aria-hidden="true"
          /> */}

          {/* Main Title */}
          <h1
            className="relative z-10 font-neue font-medium text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] leading-[1.43] uppercase text-white max-w-[90%] sm:max-w-[80%] md:max-w-[890px] animate-slide-up gpu-accelerated"
            style={{ animationDelay: "0.4s" }}
          >
            {hero.title}
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div
          className="flex flex-col items-center gap-3 pb-16 lg:pb-20 animate-fade-in gpu-accelerated"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="font-neue font-medium text-[16px] sm:text-[20px] md:text-[24px] uppercase text-white">
            {hero.scrollText}
          </span>
          <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
            >
              <path
                d="M12 4C9.79086 4 8 5.79086 8 8V16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16V8C16 5.79086 14.2091 4 12 4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              />
              <path
                d="M12 8V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button (hidden for now, can be implemented later) */}
      <button
        className="lg:hidden fixed top-8 right-[5%] z-50 w-10 h-10 flex items-center justify-center text-white"
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
