'use client';

import React from 'react';
import Image from 'next/image';

const CloudHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[1024px] bg-[#131416] overflow-hidden">
      {/* Background blur effect */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'linear-gradient(126deg, rgba(231, 154, 1, 1) 2%, rgba(231, 108, 1, 1) 90%)',
          filter: 'blur(400px)',
          transform: 'translate(52.65px, 413px)',
          width: '1319.08px',
          height: '378.35px'
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-20 pt-12">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative">
            <span className="text-white text-[30.76px] font-normal leading-[21.85px] font-['Crimson_Text']">
              Blessing
            </span>
            <span 
              className="text-[11.96px] font-semibold leading-[15.55px] font-['Crimson_Text'] absolute right-0 bottom-0"
              style={{
                background: 'linear-gradient(126deg, rgba(231, 154, 1, 1) 2%, rgba(231, 108, 1, 1) 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0px 0.34px 0.68px rgba(0, 0, 0, 0.25)'
              }}
            >
              SoftTech
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center gap-[50px]">
          <span className="text-white/80 text-base font-normal font-['DM_Sans'] leading-[20.83px]">Our Services</span>
          <span className="text-white/80 text-base font-normal font-['DM_Sans'] leading-[20.83px]">Products</span>
          <span className="text-white/80 text-base font-normal font-['DM_Sans'] leading-[20.83px]">Why Choose Us?</span>
          <span className="text-white/80 text-base font-normal font-['DM_Sans'] leading-[20.83px]">Industries</span>
        </div>

        {/* Contact Button */}
        <button className="bg-black/20 backdrop-blur-sm px-5 py-4 rounded flex items-center gap-2.5">
          <span className="text-white text-base font-medium font-['Neue_Haas_Grotesk_Display_Pro'] leading-[19.2px]">
            Contact Us
          </span>
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-20 mt-[100px]">
        <div className="flex items-start justify-between">
          {/* Left Content */}
          <div className="max-w-[626px]">
            <h1 className="text-white text-[72px] font-medium font-['Neue_Haas_Grotesk_Display_Pro'] leading-[86.4px] mb-8">
              Cloud Architecture &
            </h1>
            
            {/* Hero Image and C Letter */}
            <div className="relative w-[811px] h-[507px] mb-8">
              <div className="absolute left-[38px] top-[-114px]">
                <Image
                  src="/images/cloud-hero-image.png"
                  alt="Cloud Architecture"
                  width={736}
                  height={736}
                  className="object-cover"
                />
              </div>
              <div className="absolute left-[300px] top-[91px] text-white text-[300px] font-medium font-['Neue_Haas_Grotesk_Display_Pro'] leading-[360px] text-center">
                C
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-[277px] mt-[530px]">
            <h2 className="text-white text-[72px] font-medium font-['Neue_Haas_Grotesk_Display_Pro'] leading-[86.4px] text-right">
              Services
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudHeroSection;