import React from 'react';

const ARResultsSection: React.FC = () => {
  return (
    <div className="relative w-full h-[2312px] bg-[#131416] overflow-hidden">
      {/* Large Blur Effect */}
      <div 
        className="absolute bg-[#A6481E] rounded-full blur-[824px]"
        style={{
          left: '-55px',
          top: '415px',
          width: '1550px',
          height: '1550px'
        }}
      />

      {/* Main Headline */}
      <h2 
        className="absolute text-[#ECD4B3] font-neue-haas-grotesk-display-pro font-medium text-[48px] leading-[1.2em] text-center"
        style={{
          left: '151px',
          top: '173px',
          width: '1139px',
          height: '116px'
        }}
      >
        The Blessing of Impact
        <br />
        Empowering Businesses Through Custom Innovation
      </h2>

      {/* Background Images */}
      <img
        src="/images/ar-background-1.png"
        alt="Background 1"
        className="absolute"
        style={{
          left: '-8px',
          top: '275px',
          width: '1511px',
          height: '1007px',
          objectFit: 'cover'
        }}
      />

      <img
        src="/images/ar-background-2.png"
        alt="Background 2"
        className="absolute"
        style={{
          left: '-54px',
          top: '1280px',
          width: '1548px',
          height: '1032px',
          objectFit: 'cover'
        }}
      />

      {/* Glassmorphism Card 1 - Proven Success Across Industries */}
      <div 
        className="absolute backdrop-blur-xl rounded-none border"
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
          className="absolute text-white font-neue-haas-grotesk-display-pro font-semibold text-[24px] leading-[1.2em]"
          style={{
            left: '20px',
            top: '20px',
            width: '227px',
            height: '58px'
          }}
        >
          Proven Success Across Industries
        </h3>
        
        <p 
          className="absolute text-white opacity-80 font-neue-haas-grotesk-display-pro font-medium text-[18px] leading-[1.2em]"
          style={{
            left: '20px',
            top: '86px',
            width: '217px',
            height: '154px'
          }}
        >
          From fintech platforms to healthcare systems, Blessing SoftTech has delivered hundreds of tailored solutions — each one designed to drive measurable results and ROI.
        </p>
      </div>

      {/* Glassmorphism Card 2 - Innovation Without Limits */}
      <div 
        className="absolute backdrop-blur-xl rounded-none border"
        style={{
          left: '1031px',
          top: '361px',
          width: '313px',
          height: '270px',
          background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.12) 25%, rgba(0, 0, 0, 0.12) 85%, rgba(109, 52, 27, 1) 87%, rgba(153, 71, 35, 1) 100%)',
          borderImage: 'linear-gradient(180deg, rgba(252, 252, 252, 0.12) 0%, rgba(252, 252, 252, 0.32) 75%) 1'
        }}
      >
        <h3 
          className="absolute text-white font-neue-haas-grotesk-display-pro font-semibold text-[24px] leading-[1.2em]"
          style={{
            left: '65px',
            top: '27px',
            width: '227px',
            height: '58px'
          }}
        >
          Innovation Without Limits
        </h3>
        
        <p 
          className="absolute text-white opacity-80 font-neue-haas-grotesk-display-pro font-medium text-[18px] leading-[1.2em]"
          style={{
            left: '65px',
            top: '97px',
            width: '227px',
            height: '154px'
          }}
        >
          With Blessing SoftTech, you're never bound by off-the-shelf constraints — if you can envision a capability, we can build it, giving your business the digital edge to lead confidently.
        </p>
      </div>

      {/* Glassmorphism Card 3 - Transformative Business Outcomes */}
      <div 
        className="absolute backdrop-blur-xl rounded-none border"
        style={{
          left: '726px',
          top: '660px',
          width: '313px',
          height: '283px',
          background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.24) 25%, rgba(0, 0, 0, 0.24) 85%, rgba(109, 52, 27, 1) 87%, rgba(153, 71, 35, 1) 100%)',
          borderImage: 'linear-gradient(180deg, rgba(252, 252, 252, 0.12) 0%, rgba(252, 252, 252, 0.32) 72%) 1'
        }}
      >
        <h3 
          className="absolute text-white font-neue-haas-grotesk-display-pro font-semibold text-[24px] leading-[1.2em]"
          style={{
            left: '67px',
            top: '25px',
            width: '227px',
            height: '58px'
          }}
        >
          Transformative Business Outcomes
        </h3>
        
        <p 
          className="absolute text-white opacity-80 font-neue-haas-grotesk-display-pro font-medium text-[18px] leading-[1.2em]"
          style={{
            left: '67px',
            top: '90px',
            width: '227px',
            height: '154px'
          }}
        >
          One client called their custom solution a &ldquo;game-changer&rdquo; after achieving a 40% boost in operational throughput, showcasing the real power of precision-built software.
        </p>
      </div>

      {/* Decorative Elements */}
      {/* <svg 
        className="absolute"
        style={{
          left: '292.5px',
          top: '479.4px',
          width: '782.9px',
          height: '329.6px'
        }}
        viewBox="0 0 783 330"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0 0L783 330" 
          stroke="#EEAB8E" 
          strokeWidth="2"
        />
      </svg> */}

      {/* <svg 
        className="absolute"
        style={{
          left: '739px',
          top: '761.5px',
          width: '156.62px',
          height: '47.5px'
        }}
        viewBox="0 0 157 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0 24L157 0V48L0 24Z" 
          stroke="#EEAB8E" 
          strokeWidth="2"
        />
      </svg> */}

      {/* Brown Blur Background */}
      <div 
        className="absolute bg-[#4F2615] blur-[214px]"
        style={{
          left: '-761px',
          top: '1014px',
          width: '2962px',
          height: '436px'
        }}
      />

      {/* Bottom Section Title */}
      <h3 
        className="absolute text-white font-neue-haas-grotesk-display-pro font-semibold text-[48px] leading-[1.2em] text-center"
        style={{
          left: '190px',
          top: '1731px',
          width: '1060px',
          height: '116px'
        }}
      >
        Engineering Seamless Integration & Scalable Performance
      </h3>
    </div>
  );
};

export default ARResultsSection;
