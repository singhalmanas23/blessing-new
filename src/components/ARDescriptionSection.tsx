import React from 'react';

const ARDescriptionSection: React.FC = () => {
  return (
    <div className="relative w-full h-[433px] bg-[#131416]">
      <div className="relative">
        {/* Main Headline */}
        <h2 
          className="absolute text-white font-neue-haas-grotesk-display-pro font-medium text-[56px] leading-[1.2em]"
          style={{
            left: '80px',
            top: '116px',
            width: '754px',
            height: '201px'
          }}
        >
          Step Into the Future with Our AR, VR & Immersive Technology Services
        </h2>

        {/* Description Text */}
        <p 
          className="absolute text-white opacity-80 font-neue-haas-grotesk-display-pro font-medium text-[20px] leading-[1.2em]"
          style={{
            left: '909px',
            top: '116px',
            width: '435px',
            height: '96px'
          }}
        >
          Create next-generation experiences with Augmented Reality, Virtual Reality, and Mixed Reality solutions that bring your brand, products, and training to life.
        </p>

        {/* CTA Button */}
        <div 
          className="absolute flex items-center justify-center gap-[10px] px-[20px] py-[16px] rounded-md"
          style={{
            left: '909px',
            top: '217px',
            background: 'linear-gradient(126deg, rgba(231, 154, 1, 1) 2%, rgba(231, 108, 1, 1) 90%)'
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
      </div>
    </div>
  );
};

export default ARDescriptionSection;
