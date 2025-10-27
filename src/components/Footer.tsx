'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative w-[1439px] h-[967px] bg-[#131416] overflow-hidden mx-auto">
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
      <div className="absolute left-[85px] top-[79px] w-[128px] h-[76px]">
        <h3 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[32px] font-semibold leading-[38.4px]">
          Blessing
          <br />
          SoftTech
        </h3>
      </div>

      <div className="absolute left-[85px] top-[167px] w-[265px] h-[37px]">
        <p className="text-white/60 font-['Instrument_Serif'] text-[32px] font-normal leading-[36.8px]">
          Professional IT Services
        </p>
      </div>

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

      {/* Divider Line */}
      <div className="absolute left-[85px] top-[417px] w-[1275px] h-0 border-t-[0.5px] border-white/30"></div>

      {/* Bottom Section */}
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

      {/* Large Background Text */}
      <div className="absolute left-[85.23px] top-[558px] w-[1271px] h-[409px] pointer-events-none">
        <span className="text-[#191A2E]/25 font-['Neue_Haas_Grotesk_Display_Pro'] text-[340.58px] font-semibold leading-[408.69px] text-center block">
          Blessing
        </span>
      </div>

      <div className="absolute left-[1013px] top-[530px] w-[255px] h-[164px] pointer-events-none">
        <span className="text-[#161314]/25 font-['Neue_Haas_Grotesk_Display_Pro'] text-[136.64px] font-semibold leading-[163.97px] text-center block">
          Soft
        </span>
      </div>

      <div className="absolute left-[1268px] top-[558px] w-[67px] h-[38px] pointer-events-none">
        <span className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-['Neue_Haas_Grotesk_Display_Pro'] text-[32px] font-medium leading-[38.4px] text-center block">
          Tech
        </span>
      </div>
    </footer>
  )
}
