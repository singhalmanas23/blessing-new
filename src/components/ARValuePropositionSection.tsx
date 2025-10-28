import React from 'react';

const ARValuePropositionSection: React.FC = () => {
  return (
    <div className="relative w-full h-[956px] bg-[#131416] overflow-hidden">
      {/* Background Images */}
      <img
        src="/images/ar-frame-112.svg"
        alt="Background design"
        className="absolute"
        style={{
          left: '0px',
          top: '0px',
          width: '906px',
          height: '493px'
        }}
      />

      <img
        src="/images/ar-frame-114.svg"
        alt="Background design"
        className="absolute"
        style={{
          left: '453px',
          top: '493px',
          width: '453px',
          height: '463px'
        }}
      />

      {/* Statistics and Value Props Container */}
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
        {/* Market Statistic */}
        <h3 
          className="absolute text-white font-neue-haas-grotesk-display-pro font-bold text-[40px] leading-[1.1em]"
          style={{
            left: '80px',
            top: '49px',
            width: '301px',
            height: '132px'
          }}
        >
          $50B+ global AR market by 2025
        </h3>

        {/* Value Proposition Cards */}
        <div 
          className="absolute flex items-stretch gap-[10px] px-[12px] py-[6px] rounded-[7px] bg-transparent border border-[rgba(255,255,255,0.2)]"
          style={{
            left: '80px',
            top: '205px',
            width: '306px'
          }}
        >
          <span className="text-white font-neue-haas-grotesk-display-pro font-semibold text-[20px] leading-[1.2em]">
            Boost engagement with interactive product experiences
          </span>
        </div>

        <div 
          className="absolute flex items-stretch gap-[10px] px-[12px] py-[6px] rounded-[7px] bg-transparent border border-[rgba(255,255,255,0.2)]"
          style={{
            left: '80px',
            top: '276px',
            width: '335px'
          }}
        >
          <span className="text-white font-neue-haas-grotesk-display-pro font-semibold text-[20px] leading-[1.2em]">
            Accelerate learning through realistic VR simulations
          </span>
        </div>

        <div 
          className="absolute flex items-stretch gap-[10px] px-[12px] py-[6px] rounded-[7px] bg-transparent border border-[rgba(255,255,255,0.2)]"
          style={{
            left: '80px',
            top: '347px',
            width: '306px'
          }}
        >
          <span className="text-white font-neue-haas-grotesk-display-pro font-semibold text-[20px] leading-[1.2em]">
            Differentiate your brand with cutting-edge innovation
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div 
        className="absolute bg-white"
        style={{
          left: '906px',
          top: '2px',
          width: '534px',
          height: '610px'
        }}
      >
        {/* Section Title */}
        <p 
          className="absolute text-[#12121A] opacity-40 font-neue-haas-grotesk-display-pro font-bold text-[40px] leading-[1.2em]"
          style={{
            left: '36px',
            top: '44px',
            width: '418px',
            height: '192px'
          }}
        >
          We build immersive solutions that inspire, engage, and deliver value.
        </p>

        {/* Description */}
        <p 
          className="absolute text-[#12121A] font-neue-haas-grotesk-display-pro font-medium text-[20px] leading-[1.2em]"
          style={{
            left: '36px',
            top: '435px',
            width: '418px',
            height: '96px'
          }}
        >
          From AR apps that blend digital content into reality to VR simulations that train or entertain — we make immersive technology a strategic business tool, not a gimmick.
        </p>

        {/* Business Value Label */}
        <div 
          className="absolute flex items-center gap-[8px]"
          style={{
            left: '-41px',
            top: '356px',
            width: '630px',
            height: '65px'
          }}
        >
          <div className="flex items-center gap-[8px]">
            <span className="text-[#12121A] text-nowrap font-neue-haas-grotesk-display-pro text-[40px] leading-[1.2em]">
              BUSINESS VALUE
            </span>
            <div className="w-[8px] h-[8px] bg-[#12121A]" />
            <span className="text-[#12121A] text-nowrap font-neue-haas-grotesk-display-pro text-[40px] leading-[1.2em]">
              BUSINESS VALUE
            </span>
          </div>
          
          {/* Decorative Lines */}
          <div 
            className="absolute border-t border-[#000] w-[534px]"
            style={{
              left: '41px',
              top: '0px'
            }}
          />
          <div 
            className="absolute border-t border-[#000] w-[534px]"
            style={{
              left: '41px',
              top: '65px'
            }}
          />
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div 
        className="absolute flex flex-col gap-[12px]"
        style={{
          left: '942px',
          top: '665px',
          width: '420px'
        }}
      >
        <h4 className="text-white font-neue-haas-grotesk-display-pro font-semibold text-[24px] leading-[1.2em]">
          Drive real ROI through immersive innovation.
        </h4>
        
        <p className="text-white font-neue-haas-grotesk-display-pro font-medium text-[20px] leading-[1.2em]">
          Our AR/VR experiences deliver tangible outcomes — faster training, higher sales conversions, and stronger customer confidence. With Blessing SoftTech, your business doesn't just adopt tech — it leads the experience economy.
        </p>

        {/* CTA Button */}
        <div 
          className="flex items-center justify-center gap-[10px] px-[20px] py-[16px] rounded-md w-fit"
          style={{
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

export default ARValuePropositionSection;
