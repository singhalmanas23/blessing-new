import React from 'react';

const ARHeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[1024px] bg-[#131416] overflow-hidden">
      {/* Background Gradient Blur */}
      <div 
        className="absolute w-[1319.08px] h-[378.35px] opacity-40 blur-[400px]"
        style={{
          left: '52.65px',
          top: '413px',
          background: 'linear-gradient(126deg, rgba(231, 154, 1, 1) 2%, rgba(231, 108, 1, 1) 90%)'
        }}
      />

      {/* Navigation */}
      <div 
        className="absolute flex items-center gap-[50px]"
        style={{
          left: '464.5px',
          top: '49px'
        }}
      >
        <span className="text-white opacity-80 font-dm-sans text-[16px] leading-[1.302em]">Our Services</span>
        <span className="text-white opacity-80 font-dm-sans text-[16px] leading-[1.302em]">Products</span>
        <span className="text-white opacity-80 font-dm-sans text-[16px] leading-[1.302em]">Why Choose Us?</span>
        <span className="text-white opacity-80 font-dm-sans text-[16px] leading-[1.302em]">Industries</span>
      </div>

      {/* Brand Logo */}
      <div 
        className="absolute"
        style={{
          left: '80px',
          top: '40px',
          width: '135.02px',
          height: '38.92px'
        }}
      >
        <span 
          className="absolute text-white font-crimson-text text-[30.76px] leading-[0.711em]"
          style={{
            left: '36.02px',
            top: '3.44px'
          }}
        >
          Blessing
        </span>
        <span 
          className="absolute text-[#E79A01] font-crimson-text font-semibold text-[11.96px] leading-[1.3em] text-right"
          style={{
            left: '76.69px',
            top: '22.92px',
            textShadow: '0px 0.34px 0.68px rgba(0, 0, 0, 0.25)'
          }}
        >
          SoftTech
        </span>
      </div>

      {/* Main Headlines */}
      <h1 
        className="absolute text-white font-neue-haas-grotesk-display-pro font-medium text-[72px] leading-[1.2em]"
        style={{
          left: '150px',
          top: '191px',
          width: '269px',
          height: '86px'
        }}
      >
        AR/VR &
      </h1>
      
      <h1 
        className="absolute text-white font-neue-haas-grotesk-display-pro font-medium text-[72px] leading-[1.2em] text-right"
        style={{
          left: '815px',
          top: '820px',
          width: '475px',
          height: '86px'
        }}
      >
        Immersive Tech
      </h1>

      {/* Central Image Container */}
      <div 
        className="absolute"
        style={{
          left: '315px',
          top: '295px',
          width: '811px',
          height: '507px'
        }}
      >
        {/* Background Image */}
        <img
          src="/images/ar-hero-image.png"
          alt="AR/VR Technology"
          className="absolute"
          style={{
            left: '38px',
            top: '-114px',
            width: '736px',
            height: '736px',
            objectFit: 'cover'
          }}
        />
        
        {/* Large "C" Text Overlay */}
        <span 
          className="absolute text-white font-neue-haas-grotesk-display-pro font-medium text-[300px] leading-[1.2em] text-center"
          style={{
            left: '300px',
            top: '91px',
            width: '213px',
            height: '360px'
          }}
        >
          C
        </span>
      </div>

      {/* Contact Button */}
      <div 
        className="absolute flex items-center justify-center gap-[10px] px-[20px] py-[16px] rounded-md backdrop-blur-[100px]"
        style={{
          left: '1244px',
          top: '34px',
          backgroundColor: 'rgba(25, 27, 32, 0.2)'
        }}
      >
        <span className="text-white font-neue-haas-grotesk-display-pro font-medium text-[16px] leading-[1.2em]">
          Contact Us
        </span>
      </div>
    </div>
  );
};

export default ARHeroSection;
