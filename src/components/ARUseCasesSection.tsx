import React from 'react';

const ARUseCasesSection: React.FC = () => {
  return (
    <div className="relative w-full h-[1024px] bg-[#211711] overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/ar-frame-247.svg"
        alt="Background design"
        className="absolute"
        style={{
          left: '0px',
          top: '309px',
          width: '504px',
          height: '715px'
        }}
      />

      {/* Section Title */}
      <h2 
        className="absolute text-[#E2C1A9] font-neue-haas-grotesk-display-pro font-semibold text-[72px] leading-[1.056em]"
        style={{
          left: '80px',
          top: '100px',
          width: '587px',
          height: '152px'
        }}
      >
        Use Cases We Enable
      </h2>

      {/* Use Case 01 - Marketing & Sales Experiences */}
      <h3 
        className="absolute text-[#E2C1A9] font-neue-haas-grotesk-display-pro font-semibold text-[20px] leading-[1.2em]"
        style={{
          left: '560px',
          top: '348px',
          width: '400px',
          height: '24px'
        }}
      >
        01.   Marketing & Sales Experiences
      </h3>
      <p 
        className="absolute text-white opacity-70 font-neue-haas-grotesk-display-pro font-medium text-[20px] leading-[1.2em]"
        style={{
          left: '590px',
          top: '380px',
          width: '780px',
          height: '72px'
        }}
      >
        Bring products to life with AR showrooms or virtual try-ons, letting customers visualize items in their own space before purchase.
      </p>

      {/* Use Case 02 - Education & Training Simulations */}
      <h3 
        className="absolute text-[#E2C1A9] font-neue-haas-grotesk-display-pro font-semibold text-[20px] leading-[1.2em]"
        style={{
          left: '560px',
          top: '476px',
          width: '400px',
          height: '24px'
        }}
      >
        02.  Education & Training Simulations
      </h3>
      <p 
        className="absolute text-white opacity-70 font-neue-haas-grotesk-display-pro font-medium text-[20px] leading-[1.2em]"
        style={{
          left: '590px',
          top: '508px',
          width: '780px',
          height: '72px'
        }}
      >
        Build immersive VR learning environments — from safety drills to hands-on labs — that enhance retention and reduce training costs.
      </p>

      {/* Use Case 03 - Operational Efficiency */}
      <h3 
        className="absolute text-[#E2C1A9] font-neue-haas-grotesk-display-pro font-semibold text-[20px] leading-[1.2em]"
        style={{
          left: '560px',
          top: '604px',
          width: '400px',
          height: '24px'
        }}
      >
        03.   Operational Efficiency
      </h3>
      <p 
        className="absolute text-white opacity-70 font-neue-haas-grotesk-display-pro font-medium text-[20px] leading-[1.2em]"
        style={{
          left: '590px',
          top: '636px',
          width: '780px',
          height: '72px'
        }}
      >
        Empower technicians with AR-guided instructions through smart glasses, improving accuracy and reducing downtime on-site.
      </p>

      {/* Use Case 04 - Human-Centered Immersion */}
      <h3 
        className="absolute text-[#E2C1A9] font-neue-haas-grotesk-display-pro font-semibold text-[20px] leading-[1.2em]"
        style={{
          left: '560px',
          top: '732px',
          width: '400px',
          height: '24px'
        }}
      >
        04.   Human-Centered Immersion
      </h3>
      <p 
        className="absolute text-white opacity-70 font-neue-haas-grotesk-display-pro font-medium text-[20px] leading-[1.2em]"
        style={{
          left: '590px',
          top: '764px',
          width: '780px',
          height: '96px'
        }}
      >
        Design intuitive gesture and voice controls for comfort and accessibility, while gathering interaction analytics to refine user experience continuously.
      </p>

      {/* CTA Button */}
      <div 
        className="absolute flex items-center justify-center gap-2.5 px-5 py-4"
        style={{
          left: '590px',
          top: '876px',
          backgroundColor: 'rgba(25, 27, 32, 0.2)'
        }}
      >
        <span className="text-white font-neue-haas-grotesk-display-pro font-medium text-[20px] leading-[1.2em]">
          Discover How
        </span>
        
        {/* Arrow Icon */}
        <svg 
          width="17.42" 
          height="11.31" 
          viewBox="0 0 18 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M1 5.5h15M11.5 1l4.5 4.5-4.5 4.5" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Decorative Line */}
      <div 
        className="absolute border-t border-white opacity-30"
        style={{
          left: '0px',
          top: '309px',
          width: '1440px'
        }}
      />
    </div>
  );
};

export default ARUseCasesSection;
