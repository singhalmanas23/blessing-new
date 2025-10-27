'use client'

import Image from 'next/image'

export default function CareerClientsSection() {
  return (
    <section className="relative w-full h-[923px] bg-[#131416] overflow-hidden">
      {/* Background Border Rectangle */}
      <div className="absolute left-[755px] top-0 w-[685px] h-[1001px] bg-[#131416] border-l-[0.5px] border-white/20"></div>

      {/* Content Area */}
      <div className="absolute left-[755px] top-0 w-[685px] h-[923px] border-l-[0.5px] border-white/20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/career-clients-bg-7169f2.png"
            alt="Clients Background"
            fill
            className="object-stretch"
            priority
          />
        </div>

        {/* Feature Cards Container */}
        <div className="absolute inset-0 flex flex-col z-10">
          {/* Card 1 */}
          <div className="flex items-center justify-between gap-[10px] px-[40px] py-[37px] border-b-[0.5px] border-white/20 bg-[#131416] flex-1">
            <div className="w-[477px]">
              <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[1.6667em]">
                Global IT spending projected to grow ~9% in 2025, now&apos;s the time to act
              </p>
            </div>
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <defs>
                  <linearGradient id="gradientClients1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="60%" stopColor="rgba(255, 255, 255, 1)" />
                    <stop offset="78%" stopColor="rgba(231, 154, 1, 1)" />
                    <stop offset="94%" stopColor="rgba(231, 108, 1, 1)" />
                  </linearGradient>
                </defs>
                <path d="M6 34L42 34M42 34L30 22M42 34L30 46" stroke="url(#gradientClients1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 10L6 22" stroke="url(#gradientClients1)" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center justify-between gap-[10px] px-[40px] py-[37px] border-b-[0.5px] border-white/20 bg-[#131416] flex-1">
            <div className="w-[477px]">
              <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[1.6667em]">
                We start engagements with a discovery session to align on goals.
              </p>
            </div>
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <defs>
                  <linearGradient id="gradientClients2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="28%" stopColor="rgba(255, 255, 255, 1)" />
                    <stop offset="64%" stopColor="rgba(231, 154, 1, 1)" />
                    <stop offset="94%" stopColor="rgba(231, 108, 1, 1)" />
                  </linearGradient>
                </defs>
                <circle cx="24" cy="24" r="20" stroke="url(#gradientClients2)" strokeWidth="4"/>
                <circle cx="24" cy="24" r="8" fill="url(#gradientClients2)"/>
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center justify-between gap-[10px] px-[40px] py-[37px] border-b-[0.5px] border-white/20 bg-[#131416] flex-1">
            <div className="w-[477px]">
              <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[1.6667em]">
                Our commitment: passion, expertise, and proven outcomes.
              </p>
            </div>
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <defs>
                  <linearGradient id="gradientClients3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="26%" stopColor="rgba(255, 255, 255, 1)" />
                    <stop offset="60%" stopColor="rgba(231, 154, 1, 1)" />
                    <stop offset="94%" stopColor="rgba(231, 108, 1, 1)" />
                  </linearGradient>
                </defs>
                <path d="M12 24L20 32L36 16" stroke="url(#gradientClients3)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center justify-between gap-[10px] px-[40px] py-[37px] bg-[#131416] flex-1">
            <div className="w-[394px]">
              <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-medium leading-[1.6667em]">
                Initial strategic insights, tailored for you, with no obligations attached.
              </p>
            </div>
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <defs>
                  <linearGradient id="gradientClients4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="16%" stopColor="rgba(255, 255, 255, 1)" />
                    <stop offset="57%" stopColor="rgba(231, 154, 1, 1)" />
                    <stop offset="94%" stopColor="rgba(231, 108, 1, 1)" />
                  </linearGradient>
                </defs>
                <path d="M8 16L24 32L40 16" stroke="url(#gradientClients4)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 8V32" stroke="url(#gradientClients4)" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Left Content */}
      <div className="absolute left-0 top-0 w-[755px] h-[923px]">
        {/* Title */}
        <div className="absolute left-[96px] top-[137px] w-[350px] h-[29px]">
          <h2 className="text-transparent bg-clip-text font-['Neue_Haas_Grotesk_Display_Pro'] text-[24px] font-normal leading-[1.2em] uppercase"
              style={{
                backgroundImage: "linear-gradient(111deg, rgba(255, 255, 255, 1) 41%, rgba(231, 154, 1, 1) 73%, rgba(231, 108, 1, 1) 94%)"
              }}>
            Clients/Prospective Clients
          </h2>
        </div>

        {/* Description */}
        <div className="absolute left-[96px] top-[202px] w-[566px] h-[440px]">
          <p className="text-transparent bg-clip-text font-['Neue_Haas_Grotesk_Display_Pro'] text-[28px] font-medium leading-[1.4286em]"
             style={{
               backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(153, 153, 153, 1) 100%)"
             }}>
            Looking for a true technology partner—not just a vendor? Welcome to Blessing SoftTech. We invest deeply in your success and bring bold ideas to every engagement, whether you need a focused solution or a full digital transformation. The tech landscape is booming, and those who leverage the right technology will surge ahead. Join us for a free, no-strings-attached consultation or discovery workshop and see how we can unlock high-impact opportunities for your business.
          </p>
        </div>

        {/* CTA Button */}
        <div className="absolute left-[96px] top-[685px]">
          <button className="flex items-center justify-center gap-[10px] px-[20px] py-[16px] bg-white">
            <span className="text-black font-['Neue_Haas_Grotesk_Display_Pro'] text-[20px] font-semibold leading-[1.2em]">
              Start Your Journey
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
            Contact us for a free consultation or workshop
          </span>
        </div>
      </div>
    </section>
  )
}
