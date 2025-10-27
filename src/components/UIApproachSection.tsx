import React from 'react';
import Image from 'next/image';

export const UIApproachSection: React.FC = () => {
  return (
    <section className="w-full h-[956px] relative bg-[#131416]">
      {/* Frame 112 - Left Background Image */}
      <div className="absolute" style={{ left: '0px', top: '0px', width: '906px', height: '493px' }}>
        <Image
          src="/images/ui-approach-left.png"
          alt="UI/UX Approach"
          width={906}
          height={604}
          className="object-cover"
          style={{ left: '0px', top: '-86px', width: '906px', height: '604px' }}
        />
      </div>

      {/* Frame 115 - Value Proposition Card */}
      <div 
        className="absolute"
        style={{ 
          left: '0px', 
          top: '493px', 
          width: '453px', 
          height: '463px',
          background: 'linear-gradient(126deg, rgba(231, 154, 1, 1) 2%, rgba(231, 108, 1, 1) 90%)'
        }}
      >
        {/* Main headline */}
        <h3 
          className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-bold text-[40px] leading-[1.1em] text-white"
          style={{ left: '80px', top: '49px', width: '301px', height: '88px' }}
        >
          $1 invested in UX returns $100
        </h3>

        {/* Supporting text */}
        <p 
          className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[1.2em] text-white"
          style={{ left: '80px', top: '148px', width: '297px', height: '48px' }}
        >
          Investing in great UX delivers massive value.
        </p>

        {/* Frame 256 - First benefit pill */}
        <div 
          className="absolute flex items-stretch gap-2 rounded-[7px]"
          style={{ 
            left: '80px', 
            top: '205px', 
            width: '306px',
            padding: '6px 12px',
            background: 'rgba(0, 0, 0, 0)'
          }}
        >
          <span className="font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[20px] leading-[1.2em] text-white">
            Boost conversions and customer retention
          </span>
        </div>

        {/* Frame 257 - Second benefit pill */}
        <div 
          className="absolute flex items-stretch gap-2 rounded-[7px]"
          style={{ 
            left: '80px', 
            top: '276px', 
            width: '335px',
            padding: '6px 12px',
            background: 'rgba(0, 0, 0, 0)'
          }}
        >
          <span className="font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[20px] leading-[1.2em] text-white">
            Reduce support costs through intuitive design
          </span>
        </div>

        {/* Frame 258 - Third benefit pill */}
        <div 
          className="absolute flex items-stretch gap-2 rounded-[7px]"
          style={{ 
            left: '80px', 
            top: '347px', 
            width: '306px',
            padding: '6px 12px',
            background: 'rgba(0, 0, 0, 0)'
          }}
        >
          <span className="font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[20px] leading-[1.2em] text-white">
            Prevent churn — 88% of users don&apos;t return after poor UX
          </span>
        </div>
      </div>

      {/* Frame 114 - Right Background Image */}
      <div className="absolute" style={{ left: '453px', top: '493px', width: '453px', height: '463px' }}>
        <Image
          src="/images/ui-approach-right.png"
          alt="UI/UX Approach Right"
          width={454}
          height={676}
          className="object-cover"
          style={{ left: '-1px', top: '-106px', width: '454px', height: '676px' }}
        />
      </div>

      {/* Frame 113 - Main Content Card */}
      <div 
        className="absolute bg-white"
        style={{ left: '906px', top: '2px', width: '534px', height: '610px' }}
      >
        {/* Main headline */}
        <h3 
          className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-bold text-[40px] leading-[1.2em] text-[#12121A] opacity-40"
          style={{ left: '36px', top: '44px', width: '418px', height: '192px' }}
        >
          We craft user experiences that drive engagement and loyalty.
        </h3>

        {/* Description text */}
        <p 
          className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[1.2em] text-[#12121A]"
          style={{ left: '36px', top: '435px', width: '418px', height: '96px' }}
        >
          From user research to visual design and usability testing, we cover the full UX/UI spectrum — ensuring your applications aren&apos;t just functional but truly user-centric.
        </p>

        {/* Group 17 - Business Value Section */}
        <div className="absolute" style={{ left: '-41px', top: '346px', width: '630px', height: '65px' }}>
          {/* Frame 114 - Business Value Text */}
          <div className="absolute flex items-center gap-2" style={{ left: '0px', top: '10px' }}>
            <span className="font-['Neue_Haas_Grotesk_Display_Pro'] font-normal text-[40px] leading-[1.2em] text-nowrap text-[#12121A]">BUSINESS VALUE</span>
            {/* Vector - Small dot */}
            <div className="w-2 h-2 bg-[#12121A]"></div>
            <span className="font-['Neue_Haas_Grotesk_Display_Pro'] font-normal text-[40px] leading-[1.2em] text-nowrap text-[#12121A]">BUSINESS VALUE</span>
          </div>
          {/* Line 11 - Top line */}
          <div className="absolute w-[534px] h-px bg-black" style={{ left: '41px', top: '0px' }}></div>
          {/* Line 12 - Bottom line */}
          <div className="absolute w-[534px] h-px bg-black" style={{ left: '41px', top: '65px' }}></div>
        </div>
      </div>

      {/* Frame 121 - Bottom CTA Section */}
      <div 
        className="absolute flex flex-col gap-3"
        style={{ left: '942px', top: '665px', width: '420px' }}
      >
        <h4 className="font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[24px] leading-[1.2000000476837158em] text-white">
          Turn usability into your competitive advantage.
        </h4>
        <p className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[1.2em] text-white">
          Our designs reduce friction, training time, and user errors — empowering teams and delighting customers. With Blessing SoftTech, UX becomes your strongest business driver.
        </p>
        {/* Frame 20 - CTA Button */}
        <button className="flex items-center justify-center gap-2 px-5 py-4 rounded w-fit" style={{ background: 'rgba(25, 27, 32, 0.2)' }}>
          <span className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[1.2em] text-white">
            Discover How
          </span>
          {/* Vector - Arrow icon */}
          <svg width="17.42" height="11.31" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L17 6L12 11M17 6H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};
