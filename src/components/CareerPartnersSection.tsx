'use client'

import Image from 'next/image'

export default function CareerPartnersSection() {
  return (
    <section className="relative w-full h-[923px] bg-[#131416] overflow-hidden">
      {/* Background Border Rectangle */}
      <div className="absolute left-[755px] top-0 w-[685px] h-[1001px] bg-[#131416] border-l-[0.5px] border-white/20"></div>

      {/* Left Content Area */}
      <div className="absolute left-0 top-0 w-[755px] h-[923px] border-r-[0.5px] border-white/20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/career-partners-bg.png"
            alt="Partners Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Feature Cards Container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Card 1 */}
          <div className="flex items-center justify-between gap-[10px] px-[40px] py-[37px] border-b-[0.5px] border-white/20 bg-[#131416]/90 flex-1">
            <div className="w-[477px]">
              <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[1.6667em]">
                Collaborating across technology, consulting, and platforms.
              </p>
            </div>
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="60%" stopColor="rgba(255, 255, 255, 1)" />
                    <stop offset="78%" stopColor="rgba(231, 154, 1, 1)" />
                    <stop offset="94%" stopColor="rgba(231, 108, 1, 1)" />
                  </linearGradient>
                </defs>
                <path d="M24 8V16M24 32V40M8 24H16M32 24H40M14.14 14.14L19.78 19.78M28.22 28.22L33.86 33.86M33.86 14.14L28.22 19.78M19.78 28.22L14.14 33.86" stroke="url(#gradient1)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center justify-between gap-[10px] px-[40px] py-[37px] border-b-[0.5px] border-white/20 bg-[#131416]/90 flex-1">
            <div className="w-[409px]">
              <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[1.6667em]">
                Open to exploring new alliance opportunities
              </p>
            </div>
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="60%" stopColor="rgba(255, 255, 255, 1)" />
                    <stop offset="78%" stopColor="rgba(231, 154, 1, 1)" />
                    <stop offset="94%" stopColor="rgba(231, 108, 1, 1)" />
                  </linearGradient>
                </defs>
                <path d="M24 4L28 16L40 12L32 24L40 36L28 32L24 44L20 32L8 36L16 24L8 12L20 16L24 4Z" stroke="url(#gradient2)" strokeWidth="4" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center justify-between gap-[10px] px-[40px] py-[37px] border-b-[0.5px] border-white/20 bg-[#131416]/90 flex-1">
            <div className="w-[399px]">
              <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[1.6667em]">
                Partners with AWS, Azure, Salesforce, and more
              </p>
            </div>
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="26%" stopColor="rgba(255, 255, 255, 1)" />
                    <stop offset="60%" stopColor="rgba(231, 154, 1, 1)" />
                    <stop offset="94%" stopColor="rgba(231, 108, 1, 1)" />
                  </linearGradient>
                </defs>
                <path d="M8 36C8 32 12 28 16 28C20 28 24 24 24 20C24 16 28 12 32 12C36 12 40 16 40 20" stroke="url(#gradient3)" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="8" cy="36" r="4" fill="url(#gradient3)"/>
                <circle cx="40" cy="20" r="4" fill="url(#gradient3)"/>
              </svg>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center justify-between gap-[10px] px-[40px] py-[37px] bg-[#131416]/90 flex-1">
            <div className="w-[484px]">
              <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[1.6667em]">
                Clients benefit from expert collaboration and seamless ecosystems
              </p>
            </div>
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <defs>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="26%" stopColor="rgba(255, 255, 255, 1)" />
                    <stop offset="60%" stopColor="rgba(231, 154, 1, 1)" />
                    <stop offset="94%" stopColor="rgba(231, 108, 1, 1)" />
                  </linearGradient>
                </defs>
                <path d="M8 16L16 8L32 8L40 16L40 32L32 40L16 40L8 32Z" stroke="url(#gradient4)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 24L22 28L30 20" stroke="url(#gradient4)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="absolute left-[685px] top-0 w-[755px] h-[923px]">
        {/* Title */}
        <div className="absolute left-[109px] top-[137px] w-[117px] h-[29px]">
          <h2 className="text-transparent bg-clip-text font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-normal leading-[1.2em] uppercase"
              style={{
                backgroundImage: "linear-gradient(111deg, rgba(255, 255, 255, 1) 41%, rgba(231, 154, 1, 1) 73%, rgba(231, 108, 1, 1) 94%)"
              }}>
            Partners
          </h2>
        </div>

        {/* Description */}
        <div className="absolute left-[109px] top-[202px] w-[566px] h-[360px]">
          <p className="text-transparent bg-clip-text font-['Neue_Haas_Grotesk_Display_Pro'] text-[28px] font-medium leading-[1.4286em]"
             style={{
               backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(153, 153, 153, 1) 100%)"
             }}>
            We believe in the power of partnerships. Blessing SoftTech collaborates with tech firms, consultants, and platform providers to craft win-win solutions. If you see synergy with our expertise or are seeking a reliable development partner, we're open to building great alliances. Our partnerships with major cloud and software leaders help us work within rich ecosystems—delivering harmonized solutions for clients.
          </p>
        </div>

        {/* CTA Button */}
        <div className="absolute left-[109px] top-[685px]">
          <button className="flex items-center justify-center gap-[10px] px-[20px] py-[16px] bg-white">
            <span className="text-black font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-semibold leading-[1.2em]">
              Become a Partner
            </span>
            <svg width="17.42" height="11.31" viewBox="0 0 18 12" fill="none">
              <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Info Message */}
        <div className="absolute left-[109px] top-[757px] flex items-center gap-[8px] opacity-70">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.5"/>
            <path d="M10 7V13M10 4V5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[16px] font-medium leading-[1.2em]">
            Explore alliance opportunities
          </span>
        </div>
      </div>
    </section>
  )
}
