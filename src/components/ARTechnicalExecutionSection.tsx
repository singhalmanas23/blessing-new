import React from 'react';

const ARTechnicalExecutionSection: React.FC = () => {
  return (
    <div className="relative w-full h-[1024px] bg-[#131416] overflow-hidden">
      {/* Background Shapes */}
      <div 
        className="absolute bg-gradient-to-r from-[#E79A01] to-[#E76C01]"
        style={{
          left: '993px',
          top: '92px',
          width: '330.04px',
          height: '330.04px'
        }}
      />

      <div 
        className="absolute bg-gradient-to-r from-[#E79A01] to-[#E76C01]"
        style={{
          left: '1095px',
          top: '764px',
          width: '261.14px',
          height: '261.14px'
        }}
      />

      {/* Technology Badges */}
      <div 
        className="absolute bg-transparent border border-[rgba(255,255,255,0.2)] backdrop-blur-[100px] rounded-[7px]"
        style={{
          left: '780px',
          top: '104px',
          width: '321.26px',
          height: '321.26px'
        }}
      >
        <h3 
          className="absolute font-neue-haas-grotesk-display-pro font-medium text-[32px] leading-[1.2em] text-white text-center"
          style={{
            left: '60px',
            top: '116.33px',
            width: '200.76px',
            height: '89.48px'
          }}
        >
          Agile Development
        </h3>
      </div>

      <div 
        className="absolute bg-transparent border border-[rgba(255,255,255,0.2)] backdrop-blur-[100px] rounded-[7px]"
        style={{
          left: '954px',
          top: '413px',
          width: '368.65px',
          height: '368.65px'
        }}
      >
        <h3 
          className="absolute font-neue-haas-grotesk-display-pro font-medium text-[32px] leading-[1.2em] text-white text-center"
          style={{
            left: '71.33px',
            top: '120px',
            width: '226.6px',
            height: '128.86px'
          }}
        >
          Microservices Architecture
        </h3>
      </div>

      <div 
        className="absolute bg-transparent border border-[rgba(255,255,255,0.2)] backdrop-blur-[100px] rounded-[7px]"
        style={{
          left: '628px',
          top: '585px',
          width: '368.65px',
          height: '368.65px'
        }}
      >
        <h3 
          className="absolute font-neue-haas-grotesk-display-pro font-medium text-[32px] leading-[1.2em] text-white text-center"
          style={{
            left: '73px',
            top: '138.06px',
            width: '222.34px',
            height: '93.65px'
          }}
        >
          API-First Design
        </h3>
      </div>

      {/* Decorative Elements */}
      <div 
        className="absolute bg-white rounded-full"
        style={{
          left: '1221px',
          top: '368px',
          width: '107px',
          height: '107px'
        }}
      />

      <div 
        className="absolute bg-white rounded-full"
        style={{
          left: '315px',
          top: '793px',
          width: '224px',
          height: '224px'
        }}
      />

      <div 
        className="absolute bg-white"
        style={{
          left: '828.17px',
          top: '819px',
          width: '292.26px',
          height: '201.07px'
        }}
      />

      <div 
        className="absolute bg-white"
        style={{
          left: '522.11px',
          top: '814.12px',
          width: '210.25px',
          height: '210.25px'
        }}
      />

      {/* Main Content */}
      <div 
        className="absolute flex flex-col gap-[43px]"
        style={{
          left: '80px',
          top: '104px',
          width: '661px'
        }}
      >
        <div className="text-white opacity-80 font-neue-haas-grotesk-display-pro font-medium text-[24px] leading-[1.2em]">
          <h2 className="mb-6">Technical Execution:</h2>
          
          <p className="mb-6">
            Our AR/VR team combines developers and 3D artists skilled in creating immersive, high-performance experiences.
          </p>

          <p className="mb-6">
            We use <strong>ARKit (iOS)</strong> and <strong>ARCore (Android)</strong> for mobile AR, while <strong>Unity</strong> and <strong>Unreal Engine</strong> power our <strong>cross-platform AR/VR</strong> applications.
          </p>

          <p className="mb-6">
            For VR, we build optimized solutions for leading headsets like <strong>Meta Quest (Oculus)</strong> and <strong>HTC Vive</strong>, ensuring smooth rendering and comfort at all frame rates.
          </p>

          <p className="mb-6">
            We manage the full pipeline — from <strong>3D modeling and animation</strong> to <strong>interaction coding</strong> (C#, C++, or native SDKs) and <strong>backend integration</strong> for commerce or data systems.
          </p>

          <p className="mb-6">
            Our cloud-enabled experiences leverage <strong>Azure Spatial Anchors</strong> and <strong>AWS Sumerian</strong> for real-time content management and collaboration.
          </p>

          <p className="mb-8">
            To handle heavy 3D data efficiently, we optimize delivery through <strong>CDNs</strong> and <strong>edge computing</strong> to reduce latency and maintain responsiveness.
          </p>
        </div>

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

export default ARTechnicalExecutionSection;
