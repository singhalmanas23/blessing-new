import React from 'react';
import Image from 'next/image';

export const UIHeroSection: React.FC = () => {
  return (
    <section className="w-full h-[1024px] relative bg-[#131416] overflow-hidden">
      {/* Background Blur Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          left: '52.65px',
          top: '413px',
          width: '1319.08px',
          height: '378.35px',
          background: 'linear-gradient(126deg, rgba(231, 154, 1, 1) 2%, rgba(231, 108, 1, 1) 90%)',
          filter: 'blur(400px)',
          opacity: 0.4
        }}
      />

      {/* Navigation */}
      <nav className="absolute flex items-center justify-center gap-12 z-10" style={{ left: '464.5px', top: '49px' }}>
        <span className="font-['DM_Sans'] font-normal text-base leading-[1.3020000457763672em] text-white opacity-80">Our Services</span>
        <span className="font-['DM_Sans'] font-normal text-base leading-[1.3020000457763672em] text-white opacity-80">Products</span>
        <span className="font-['DM_Sans'] font-normal text-base leading-[1.3020000457763672em] text-white opacity-80">Why Choose Us?</span>
        <span className="font-['DM_Sans'] font-normal text-base leading-[1.3020000457763672em] text-white opacity-80">Industries</span>
      </nav>

      {/* Main Headline */}
      <h1 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[72px] leading-[1.2000000211927626em] text-white z-10"
        style={{ left: '150px', top: '191px', width: '457px', height: '86px' }}
      >
        UI/UX Strategy
      </h1>

      <h1 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[72px] leading-[1.2000000211927626em] text-white text-right z-10"
        style={{ left: '1023px', top: '820px', width: '267px', height: '86px' }}
      >
        & Design
      </h1>

      {/* Hero Image with "C" */}
      <div className="absolute z-10" style={{ left: '315px', top: '295px', width: '811px', height: '507px' }}>
        <div className="relative w-full h-full">
          <Image
            src="/images/ui-hero-bg.png"
            alt="UI/UX Design"
            width={200}
            height={200}
            className="absolute object-cover"
            style={{ left: '38px', top: '-114px', width: '736px', height: '736px' }}
          />
          <span 
            className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[300px] leading-[1.2em] text-white text-center z-20"
            style={{ left: '300px', top: '91px', width: '213px', height: '360px' }}
          >
            C
          </span>
        </div>
      </div>

      {/* Contact Button */}
      <button 
        className="absolute flex items-center justify-center gap-2 px-5 py-4 bg-[rgba(25,27,32,0.2)] rounded z-10"
        style={{ left: '1244px', top: '34px' }}
      >
        <span className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-base leading-[1.2000000476837158em] text-white">Contact Us</span>
      </button>

      {/* Logo */}
      <div className="absolute z-10" style={{ left: '80px', top: '40px', width: '135.02px', height: '38.92px' }}>
        <span 
          className="absolute font-['Crimson_Text'] font-normal text-[30.76px] leading-[0.7111112626695538em] text-white"
          style={{ left: '36.02px', top: '3.44px' }}
        >
          Blessing
        </span>
        <span 
          className="absolute font-['Crimson_Text'] font-semibold text-[11.96px] leading-[1.2998047122554897em] text-right"
          style={{ 
            left: '76.69px', 
            top: '22.92px',
            background: 'linear-gradient(126deg, rgba(231, 154, 1, 1) 2%, rgba(231, 108, 1, 1) 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0px 0.3418123126029968px 0.6836246252059937px rgba(0, 0, 0, 0.25)'
          }}
        >
          SoftTech
        </span>
        {/* Union SVG */}
        <div 
          className="absolute"
          style={{ 
            left: '0px', 
            top: '0px', 
            width: '31.41px', 
            height: '34.2px',
            background: 'linear-gradient(126deg, rgba(231, 154, 1, 1) 2%, rgba(231, 108, 1, 1) 90%)'
          }}
        />
      </div>
    </section>
  );
};
