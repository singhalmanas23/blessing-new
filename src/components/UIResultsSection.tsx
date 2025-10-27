import React from 'react';
import Image from 'next/image';

export const UIResultsSection: React.FC = () => {
  return (
    <section className="w-full h-[2312px] relative bg-[#131416] overflow-hidden">
      {/* Ellipse 15 - Background Blur Effect */}
      <div 
        className="absolute rounded-full"
        style={{
          left: '-55px',
          top: '415px',
          width: '1550px',
          height: '1550px',
          background: '#A6481E',
          filter: 'blur(824px)'
        }}
      />

      {/* Main Headline */}
      <h2 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[48px] leading-[1.2000000476837158em] text-center text-[#ECD4B3]"
        style={{ left: '227px', top: '173px', width: '987px', height: '116px' }}
      >
        The Blessing of Experience
        Design That Delights Users and Drives Results
      </h2>

      {/* Vector 14 - Decorative Lines */}
      <svg 
        className="absolute"
        style={{ left: '292.5px', top: '479.4px', width: '782.9px', height: '329.6px' }}
        viewBox="0 0 783 330"
        fill="none"
      >
        <path stroke="#EEAB8E" strokeWidth="2" d="M0 165L783 165" />
        <path stroke="#EEAB8E" strokeWidth="2" d="M391.5 0L391.5 330" />
      </svg>

      {/* Background Image */}
      <div className="absolute" style={{ left: '-8px', top: '275px', width: '1511px', height: '1007px' }}>
        <Image
          src="/images/ui-results-bg.png"
          alt="Results Background"
          width={1511}
          height={1007}
          className="object-cover"
        />
      </div>

      {/* Vector 15 - Small decorative element */}
      <svg
        className="absolute"
        style={{ left: '739px', top: '761.5px', width: '156.62px', height: '47.5px' }}
        viewBox="0 0 157 48"
        fill="none"
      >
        <path stroke="#EEAB8E" strokeWidth="2" d="M0 24L157 24" />
      </svg>

      {/* Union 1 - Card 1 (Conversion That Scales Revenue) */}
      <div 
        className="absolute backdrop-blur-[24px] rounded border"
        style={{
          left: '159px',
          top: '457px',
          width: '267px',
          height: '303px',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.12) 8%, rgba(0, 0, 0, 0.12) 85%, rgba(109, 52, 27, 1) 88%, rgba(153, 71, 35, 1) 100%)',
          borderImage: 'linear-gradient(180deg, rgba(252, 252, 252, 0.12) 0%, rgba(252, 252, 252, 0.32) 82%) 1'
        }}
      >
        <h3 
          className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[24px] leading-[1.2000000476837158em] text-white"
          style={{ left: '20px', top: '20px', width: '227px', height: '58px' }}
        >
          Conversion That Scales Revenue
        </h3>
        <p 
          className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[18px] leading-[1.2000000211927626em] text-white opacity-80"
          style={{ left: '20px', top: '86px', width: '217px', height: '132px' }}
        >
          An e-commerce client achieved an 83% increase in conversions and a major revenue lift after Blessing SoftTech&apos;s UX redesign improved flow and clarity.
        </p>
      </div>

      {/* Union 2 - Card 2 (Efficiency That Reduces Support Load) */}
      <div 
        className="absolute backdrop-blur-[24px] rounded border"
        style={{
          left: '1031px',
          top: '361px',
          width: '313px',
          height: '263px',
          background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.12) 25%, rgba(0, 0, 0, 0.12) 85%, rgba(109, 52, 27, 1) 87%, rgba(153, 71, 35, 1) 100%)',
          borderImage: 'linear-gradient(180deg, rgba(252, 252, 252, 0.12) 0%, rgba(252, 252, 252, 0.32) 77%) 1'
        }}
      >
        <h3 
          className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[24px] leading-[1.2000000476837158em] text-white"
          style={{ left: '65px', top: '27px', width: '227px', height: '87px' }}
        >
          Efficiency That Reduces Support Load
        </h3>
        <p 
          className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[18px] leading-[1.2000000211927626em] text-white opacity-80"
          style={{ left: '65px', top: '127px', width: '227px', height: '110px' }}
        >
          A redesigned enterprise interface led to fewer support calls, as users could now self-navigate effortlessly — saving time and operational costs.
        </p>
      </div>

      {/* Union 3 - Card 3 (Design That Builds Trust) */}
      <div 
        className="absolute backdrop-blur-[24px] rounded border"
        style={{
          left: '726px',
          top: '660px',
          width: '313px',
          height: '245px',
          background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.24) 25%, rgba(0, 0, 0, 0.24) 85%, rgba(109, 52, 27, 1) 87%, rgba(153, 71, 35, 1) 100%)',
          borderImage: 'linear-gradient(180deg, rgba(252, 252, 252, 0.12) 0%, rgba(252, 252, 252, 0.32) 83%) 1'
        }}
      >
        <h3 
          className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[24px] leading-[1.2000000476837158em] text-white"
          style={{ left: '67px', top: '25px', width: '227px', height: '58px' }}
        >
          Design That Builds Trust
        </h3>
        <p 
          className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[18px] leading-[1.2000000211927626em] text-white opacity-80"
          style={{ left: '67px', top: '90px', width: '227px', height: '132px' }}
        >
          With 75% of credibility judgments based on aesthetics and usability, our polished interfaces strengthen your brand&apos;s image and user confidence.
        </p>
      </div>

      {/* Bottom Background Image */}
      <div className="absolute" style={{ left: '-54px', top: '1280px', width: '1548px', height: '1032px' }}>
        <Image
          src="/images/ui-results-bottom.png"
          alt="Results Bottom Background"
          width={1548}
          height={1032}
          className="object-cover"
        />
      </div>

      {/* Rectangle 50 - Bottom Blur Effect */}
      <div 
        className="absolute"
        style={{
          left: '-761px',
          top: '1014px',
          width: '2962px',
          height: '436px',
          background: '#4F2615',
          filter: 'blur(214px)'
        }}
      />

      {/* Bottom Headline */}
      <h3 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[48px] leading-[1.2000000476837158em] text-center text-white"
        style={{ left: '157px', top: '1731px', width: '1126px', height: '58px' }}
      >
        Designing for Consistency, Inclusivity & Global Reach
      </h3>
    </section>
  );
};
