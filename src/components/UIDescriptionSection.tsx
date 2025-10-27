import React from 'react';

export const UIDescriptionSection: React.FC = () => {
  return (
    <section className="w-full h-[433px] relative bg-[#131416]">
      {/* Main Headline */}
      <h2 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[56px] leading-[1.2000000817435128em] text-white"
        style={{ left: '80px', top: '116px', width: '754px', height: '201px' }}
      >
        Design Experiences That Delight with Our UI/UX Strategy & Design Services
      </h2>

      {/* Description Text */}
      <p 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[1.2em] text-white opacity-80"
        style={{ left: '909px', top: '116px', width: '435px', height: '96px' }}
      >
        Great technology should feel effortless. We design intuitive, human-centered interfaces that make every digital touchpoint of your brand both impactful and enjoyable.
      </p>

      {/* Discover How Button */}
      <button 
        className="absolute flex items-center justify-center gap-2 px-5 py-4 bg-[rgba(25,27,32,0.2)] rounded"
        style={{ left: '909px', top: '236px' }}
      >
        <span className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[1.2em] text-white">
          Discover How
        </span>
        {/* Arrow Icon */}
        <svg width="17.42" height="11.31" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L17 6L12 11M17 6H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
};
