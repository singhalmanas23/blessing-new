'use client'

import Image from 'next/image'

export default function CareerTalentSection() {
  return (
    <section className="relative w-full h-[923px] bg-[#131416] overflow-hidden">
      {/* Background Border Rectangle */}
      <div className="absolute left-[755px] top-0 w-[685px] h-[1001px] bg-[#131416] border-l-[0.5px] border-white/20"></div>

      {/* Content Area */}
      <div className="absolute left-[755px] top-0 w-[685px] h-[923px] border-l-[0.5px] border-white/20 flex flex-col">
        {/* Background Image */}
        <div className="w-full h-full relative">
          <Image
            src="/images/career-talent-bg-1f8bcc.png"
            alt="Talent Background"
            fill
            className="object-stretch"
          />
        </div>

        {/* Feature Cards Container */}
        <div className="absolute inset-0 flex flex-col">
          {/* Card 1 */}
          <div className="flex items-center justify-between gap-[10px] px-[40px] py-[37px] border-b-[0.5px] border-white/20 bg-[#131416] flex-1">
            <div className="w-[477px]">
              <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[1.6667em]">
                Dynamic, global team (20% growth last year, still expanding)
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
                <path d="M8 36L40 4M40 4H24M40 4V20" stroke="url(#gradient1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 16V36H28" stroke="url(#gradient1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center justify-between gap-[10px] px-[40px] py-[37px] border-b-[0.5px] border-white/20 bg-[#131416] flex-1">
            <div className="w-[402px]">
              <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[1.6667em]">
                Projects for world-class brands and real impact
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
                <path d="M8 8H16V16H8V8ZM20 8H40V12H20V8ZM20 16H32V20H20V16ZM8 24H16V32H8V24ZM20 24H40V28H20V24ZM20 32H32V36H20V32ZM8 40H16V48H8V40ZM20 40H40V44H20V40Z" stroke="url(#gradient2)" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center justify-between gap-[10px] px-[40px] py-[37px] border-b-[0.5px] border-white/20 bg-[#131416] flex-1">
            <div className="w-[477px]">
              <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[1.6667em]">
                Learning budgets, career progression, and Intrapreneurship support
              </p>
            </div>
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="60%" stopColor="rgba(255, 255, 255, 1)" />
                    <stop offset="78%" stopColor="rgba(231, 154, 1, 1)" />
                    <stop offset="94%" stopColor="rgba(231, 108, 1, 1)" />
                  </linearGradient>
                </defs>
                <path d="M8 24C8 16 14 10 22 8C26 7 30 8 33 11M40 24C40 32 34 38 26 40C22 41 18 40 15 37" stroke="url(#gradient3)" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="24" cy="24" r="8" stroke="url(#gradient3)" strokeWidth="4"/>
              </svg>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center justify-between gap-[10px] px-[40px] py-[37px] bg-[#131416] flex-1">
            <div className="w-[394px]">
              <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[1.6667em]">
                Collaborative culture: Tech Talks, Hack Weeks, and volunteering days
              </p>
            </div>
            <div className="w-[52px] h-[52px] flex items-center justify-center">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <defs>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="60%" stopColor="rgba(255, 255, 255, 1)" />
                    <stop offset="78%" stopColor="rgba(231, 154, 1, 1)" />
                    <stop offset="94%" stopColor="rgba(231, 108, 1, 1)" />
                  </linearGradient>
                </defs>
                <path d="M26 4L30 18L44 14L36 26L44 38L30 34L26 48L22 34L8 38L16 26L8 14L22 18L26 4Z" stroke="url(#gradient4)" strokeWidth="3" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Left Content */}
      <div className="absolute left-0 top-0 w-[755px] h-[923px]">
        {/* Title */}
        <div className="absolute left-[96px] top-[137px] w-[195px] h-[29px]">
          <h2 className="text-transparent bg-clip-text font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-normal leading-[1.2em] uppercase"
              style={{
                backgroundImage: "linear-gradient(111deg, rgba(255, 255, 255, 1) 41%, rgba(231, 154, 1, 1) 73%, rgba(231, 108, 1, 1) 94%)"
              }}>
            Talent/Careers
          </h2>
        </div>

        {/* Description */}
        <div className="absolute left-[96px] top-[202px] w-[566px] h-[360px]">
          <p className="text-transparent bg-clip-text font-['Neue_Haas_Grotesk_Display_Pro'] text-[28px] font-medium leading-[1.4286em]"
             style={{
               backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(153, 153, 153, 1) 100%)"
             }}>
            Are you passionate about technology and innovation? At Blessing SoftTech, join a family of like-minded creators, working on impactful projects for global brands in a truly dynamic, inclusive environment. Here, every voice is valued and every idea can spark real change. We invest in your growth, offering continuous learning, clear career paths, and opportunities to shape the future — together.
          </p>
        </div>

        {/* CTA Button */}
        <div className="absolute left-[96px] top-[685px]">
          <button className="flex items-center justify-center gap-[10px] px-[20px] py-[16px] bg-white">
            <span className="text-black font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-semibold leading-[1.2em]">
              Explore Careers
            </span>
            <svg width="17.42" height="11.31" viewBox="0 0 18 12" fill="none">
              <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Info Message */}
        <div className="absolute left-[96px] top-[757px] flex items-center gap-[8px] opacity-70">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.5"/>
            <path d="M10 7V13M10 4V5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[16px] font-medium leading-[1.2em]">
            Contact us to explore openings at Blessing SoftTech
          </span>
        </div>
      </div>
    </section>
  )
}
