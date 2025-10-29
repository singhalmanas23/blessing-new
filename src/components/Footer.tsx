'use client'

import Image from 'next/image'

export function Footer() {
  return (
    <footer className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[967px] bg-[#131416] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient background - Vector 8 with exact Figma gradient */}
        <div className="absolute left-[60px] top-[530px] w-[1319.08px] h-[378.35px] opacity-40 blur-[400px]"
             style={{
               background: "linear-gradient(126deg, rgba(231, 154, 1, 1) 2%, rgba(231, 108, 1, 1) 90%)"
             }}>
        </div>
        
        {/* Secondary blur background */}
        <div className="absolute left-[534px] top-[493px] w-[362px] h-[270px] bg-[rgba(117,75,75,0.4)] blur-[200px]">
        </div>
      </div>

      {/* Company Info */}
      <div className="absolute left-[5%] top-[8%] sm:top-[10%] lg:left-[85px] lg:top-[79px] w-[40%] sm:w-[30%] lg:w-[128px]">
        <h3 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.2]">
          Blessing
          <br />
          SoftTech
        </h3>
      </div>

      <div className="absolute left-[5%] top-[18%] sm:top-[20%] lg:left-[85px] lg:top-[167px] w-[80%] sm:w-[60%] lg:w-[265px]">
        <p className="text-white/60 font-['Instrument_Serif'] text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-normal leading-[1.15]">
          Professional IT Services
        </p>
      </div>

      {/* Mobile Navigation - Stacked Layout */}
      <div className="block lg:hidden absolute left-[5%] top-[35%] w-[90%] space-y-8">
        {/* Services */}
        <div>
          <h4 className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['DM_Sans'] text-[16px] sm:text-[18px] font-normal leading-[1.3] mb-3">
            Services
          </h4>
          <div className="grid grid-cols-2 gap-2 text-[14px] sm:text-[15px]">
            <span className="text-white/70 font-['DM_Sans'] cursor-pointer hover:text-white transition-colors">CyberSecurity</span>
            <span className="text-white/70 font-['DM_Sans'] cursor-pointer hover:text-white transition-colors">Web Development</span>
            <span className="text-white/70 font-['DM_Sans'] cursor-pointer hover:text-white transition-colors">App Development</span>
            <span className="text-white/70 font-['DM_Sans'] cursor-pointer hover:text-white transition-colors">AI/ML Solutions</span>
            <span className="text-white/70 font-['DM_Sans'] cursor-pointer hover:text-white transition-colors">AR/VR Development</span>
            <span className="text-white/70 font-['DM_Sans'] cursor-pointer hover:text-white transition-colors">Cloud Services</span>
            <span className="text-white/70 font-['DM_Sans'] cursor-pointer hover:text-white transition-colors">Data Analytics</span>
            <span className="text-white/70 font-['DM_Sans'] cursor-pointer hover:text-white transition-colors">UI/UX Design</span>
          </div>
        </div>

        {/* Other Sections */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h4 className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['DM_Sans'] text-[16px] sm:text-[18px] font-normal leading-[1.3] mb-3">
              Products
            </h4>
            <span className="text-white/70 font-['DM_Sans'] text-[14px] sm:text-[15px] cursor-pointer hover:text-white transition-colors">ClaimNow</span>
          </div>
          <div>
            <h4 className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['DM_Sans'] text-[16px] sm:text-[18px] font-normal leading-[1.3] mb-3">
              About Us
            </h4>
            <span className="text-white/70 font-['DM_Sans'] text-[14px] sm:text-[15px] cursor-pointer hover:text-white transition-colors">Know About Us</span>
          </div>
          <div>
            <h4 className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['DM_Sans'] text-[16px] sm:text-[18px] font-normal leading-[1.3] mb-3">
              Careers
            </h4>
            <span className="text-white/70 font-['DM_Sans'] text-[14px] sm:text-[15px] cursor-pointer hover:text-white transition-colors">Join Us</span>
          </div>
        </div>
      </div>

      {/* Desktop Navigation - Original Layout */}
      <div className="hidden lg:block">
        {/* Navigation Headers - Aligned with columns */}
        <div className="absolute left-[439px] top-[79px]">
          <span className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['DM_Sans'] text-[20px] font-normal leading-[26px]">
            Services
          </span>
        </div>
        
        <div className="absolute left-[667px] top-[79px]">
          <span className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['DM_Sans'] text-[20px] font-normal leading-[26px]">
            Products
          </span>
        </div>
        
        <div className="absolute left-[900px] top-[79px]">
          <span className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['DM_Sans'] text-[20px] font-normal leading-[26px]">
            About Us
          </span>
        </div>
        
        <div className="absolute left-[1135px] top-[79px]">
          <span className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['DM_Sans'] text-[20px] font-normal leading-[26px]">
            Careers
          </span>
        </div>

        {/* Services Column */}
        <div className="absolute left-[439px] top-[129px]">
          <div className="w-[108px] h-[21px] mb-[12px]">
            <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
              CyberSecurity
            </span>
          </div>
          <div className="w-[137px] h-[21px] mb-[12px]">
            <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
              Web Development
            </span>
          </div>
          <div className="w-[134px] h-[21px] mb-[12px]">
            <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
              App Development
            </span>
          </div>
          <div className="w-[121px] h-[21px] mb-[12px]">
            <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
              AL/ML Solutions
            </span>
          </div>
          <div className="w-[151px] h-[21px] mb-[12px]">
            <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
              AR/VR Development
            </span>
          </div>
          <div className="w-[111px] h-[21px] mb-[12px]">
            <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
              Cloud Services
            </span>
          </div>
          <div className="w-[107px] h-[21px] mb-[12px]">
            <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
              Data Analytics
            </span>
          </div>
          <div className="w-[95px] h-[21px]">
            <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
              UI/UX Design
            </span>
          </div>
        </div>

        {/* Products Column */}
        <div className="absolute left-[667px] top-[129px] w-[75px] h-[21px]">
          <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
            ClaimNow
          </span>
        </div>

        {/* About Us Column */}
        <div className="absolute left-[900px] top-[129px] w-[113px] h-[21px]">
          <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
            Know About Us
          </span>
        </div>

        {/* Careers Column */}
        <div className="absolute left-[1135px] top-[129px] w-[54px] h-[21px]">
          <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
            Join Us
          </span>
        </div>
      </div>

      {/* Divider Line */}
      <div className="absolute left-[5%] bottom-[25%] sm:bottom-[20%] lg:left-[85px] lg:top-[417px] lg:bottom-auto w-[90%] lg:w-[1275px] h-0 border-t-[0.5px] border-white/30"></div>

      {/* Bottom Section - Mobile */}
      <div className="block lg:hidden absolute left-[5%] bottom-[8%] w-[90%] space-y-4">
        <div className="text-center">
          <span className="text-white/70 font-['DM_Sans'] text-[12px] sm:text-[14px] font-normal leading-[1.3]">
            © 2025 Blessing SoftTech. All rights reserved.
          </span>
        </div>
        <div className="flex justify-center space-x-4 text-[12px] sm:text-[14px]">
          <span className="text-white/70 font-['DM_Sans'] cursor-pointer hover:text-white transition-colors">
            Terms & Conditions
          </span>
          <span className="text-white/70 font-['DM_Sans'] cursor-pointer hover:text-white transition-colors">
            Cookies Policy
          </span>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/footer-social-icons.png"
            alt="Social Icons"
            width={120}
            height={20}
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Section - Desktop */}
      <div className="hidden lg:block">
        <div className="absolute left-[85px] top-[435px] w-[334px] h-[21px]">
          <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px]">
            © 2025 Blessing SoftTech. All rights reserved.
          </span>
        </div>

        <div className="absolute left-[439px] top-[435px] w-[146px] h-[21px]">
          <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
            Terms & Conditions
          </span>
        </div>

        <div className="absolute left-[605px] top-[435px] w-[108px] h-[21px]">
          <span className="text-white/70 font-['DM_Sans'] text-base font-normal leading-[20.83px] cursor-pointer hover:text-white transition-colors">
            Cookies Policy
          </span>
        </div>

        {/* Social Icons */}
        <div className="absolute left-[1220px] top-[434px]">
          <Image
            src="/images/footer-social-icons.png"
            alt="Social Icons"
            width={140}
            height={24}
            className="object-contain"
          />
        </div>
      </div>

      {/* Large Background Text - Responsive */}
      <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 bottom-0 lg:left-[15.23px] lg:top-[558px] lg:transform-none w-[90%] lg:w-[1271px] pointer-events-none">
        <span className="text-[#191A2E]/25 font-['Neue_Haas_Grotesk_Display_Pro'] text-[120px] sm:text-[180px] md:text-[240px] lg:text-[340.58px] font-semibold leading-[1.2] text-center lg:text-left block">
          Blessing
        </span>
      </div>

      <div className="hidden md:block absolute right-[5%] bottom-[15%] lg:left-[1013px] lg:top-[530px] lg:right-auto lg:bottom-auto w-[30%] lg:w-[255px] pointer-events-none">
        <span className="text-[#161314]/25 font-['Neue_Haas_Grotesk_Display_Pro'] text-[60px] md:text-[100px] lg:text-[136.64px] font-semibold leading-[1.2] text-center lg:text-left block">
          Soft
        </span>
      </div>

      <div className="hidden md:block absolute right-[5%] bottom-[8%] lg:left-[1268px] lg:top-[558px] lg:right-auto lg:bottom-auto w-[15%] lg:w-[67px] pointer-events-none">
        <span className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Neue_Haas_Grotesk_Display_Pro'] text-[16px] md:text-[24px] lg:text-[32px] font-medium leading-[1.2] text-center lg:text-left block">
          Tech
        </span>
      </div>
    </footer>
  )
}
