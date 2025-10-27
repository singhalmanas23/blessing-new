import React from 'react';
import Image from 'next/image';

export const UIPrototypeSection: React.FC = () => {
  return (
    <section className="w-full h-[1024px] relative bg-black overflow-hidden">
      {/* Main Headline */}
      <h2 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[72px] leading-[1.0555555555555556em] text-[#EAE3E0]"
        style={{ left: '80px', top: '100px', width: '819px', height: '152px' }}
      >
        Validating Design Through Real User Interaction
      </h2>

      {/* Step 01 - Title */}
      <h3 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[20px] leading-[1.2em] text-[#EAE3E0]"
        style={{ left: '560px', top: '348px', width: '800px', height: '24px' }}
      >
        01.   Prototype Before You Build
      </h3>
      
      {/* Step 01 - Description */}
      <p 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[1.2em] text-white opacity-70"
        style={{ left: '590px', top: '380px', width: '800px', height: '72px' }}
      >
        We craft interactive prototypes using Figma, Adobe XD, or InVision, allowing teams to experience and refine ideas before development.
      </p>

      {/* Step 02 - Title */}
      <h3 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[20px] text-nowrap leading-[1.2em] text-[#EAE3E0]"
        style={{ left: '560px', top: '476px', width: '800px', height: '24px' }}
      >
        02.  Test With Real Users
      </h3>
      
      {/* Step 02 - Description */}
      <p 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[1.2em] text-white opacity-70"
        style={{ left: '590px', top: '508px', width: '800px', height: '72px' }}
      >
        Usability tests reveal how people actually navigate your product — we watch, learn, and identify friction points that block engagement.
      </p>

      {/* Step 03 - Title */}
      <h3 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[20px] leading-[1.2em] text-[#EAE3E0]"
        style={{ left: '560px', top: '604px', width: '800px', height: '24px' }}
      >
        03.   Iterate With Data
      </h3>
      
      {/* Step 03 - Description */}
      <p 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[1.2em] text-white opacity-70"
        style={{ left: '590px', top: '636px', width: '800px', height: '72px' }}
      >
        Each round of testing drives evidence-based refinements, ensuring every screen feels intuitive and every flow performs better.
      </p>

      {/* Step 04 - Title */}
      <h3 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[20px] leading-[1.2em] text-[#EAE3E0]"
        style={{ left: '560px', top: '732px', width: '800px', height: '24px' }}
      >
        04.   Optimize for Conversion
      </h3>
      
      {/* Step 04 - Description */}
      <p 
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[1.2em] text-white opacity-70"
        style={{ left: '590px', top: '764px', width: '800px', height: '96px' }}
      >
        We experiment with layouts, CTAs, and micro-interactions — applying proven principles like Hick&apos;s and Fitts&apos;s laws to drive measurable conversion gains.
      </p>

      {/* Frame 20 - Discover How Button */}
      <button 
        className="absolute flex items-center justify-center gap-2 px-5 py-4 rounded"
        style={{ 
          left: '590px', 
          top: '876px',
          background: 'rgba(25, 27, 32, 0.2)'
        }}
      >
        <span className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[1.2em] text-white">
          Discover How
        </span>
        {/* Vector - Arrow icon */}
        <svg width="17.42" height="11.31" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L17 6L12 11M17 6H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Frame 247 - Background Image */}
      <div 
        className="absolute"
        style={{ 
          left: '0px', 
          top: '309px', 
          width: '504px', 
          height: '715px', 
          background: '#1C1307' 
        }}
      >
        <Image
          src="/images/ui-prototype-bg.png"
          alt="Prototype Background"
          width={504}
          height={756}
          className="object-cover"
          style={{ left: '0px', top: '-20px', width: '504px', height: '756px' }}
        />
      </div>

      {/* Line 41 - Divider Line */}
      <div 
        className="absolute w-full h-px bg-white opacity-30"
        style={{ left: '0px', top: '309px', width: '1440px' }}
      />
    </section>
  );
};
