'use client'

import Image from 'next/image'

export default function LeadershipSection() {
  return (
    <section className="relative w-full h-[919px] overflow-hidden bg-[#0c0c11]">
      {/* Background Image */}
      <div className="absolute left-[451px] top-[101px] w-[566px] h-[755px]">
        <Image
          src="/images/leadership-section-bg.png"
          alt="Leadership Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Blur Rectangle */}
      <div className="absolute left-[422px] top-[181px] w-[57px] h-[542px] bg-[#131416] blur-[54px]"></div>

      {/* Main Description Text */}
      <div className="absolute left-[191px] top-[156px] w-[1059px] h-[112px]">
        <p className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-[40px] font-medium leading-[56px] text-center">
          Our innovation culture also extends to how we work internally. We&apos;ve embraced modern ways of working:
        </p>
      </div>

      {/* Tag Badges */}
      <div className="absolute left-[447px] top-[367px] w-[545.12px] h-[177.43px]">
        {/* Agile Badge */}
        <div className="absolute left-0 top-0 bg-white rounded-[78.69px] px-[19.32px] py-[3.22px] flex items-center justify-center">
          <span className="text-black font-['Neue_Haas_Grotesk_Display_Pro'] text-[41.87px] font-medium leading-[57.99px]">
            agile
          </span>
        </div>

        {/* Remote Collaboration Badge */}
        <div className="absolute left-[139.96px] top-0 bg-white rounded-[78.69px] px-[19.32px] py-[3.22px] flex items-center justify-center">
          <span className="text-black font-['Neue_Haas_Grotesk_Display_Pro'] text-[41.87px] font-medium leading-[57.99px]">
            remote collaboration
          </span>
        </div>

        {/* Continuous Learning Badge */}
        <div className="absolute left-[59.98px] top-[93.05px] bg-white rounded-[78.69px] px-[19.32px] py-[3.22px] flex items-center justify-center">
          <span className="text-black font-['Neue_Haas_Grotesk_Display_Pro'] text-[41.87px] font-medium leading-[57.99px]">
            continuous learning
          </span>
        </div>
      </div>

      {/* Left Content Card */}
      <div className="absolute left-[253px] top-[643px] w-[412px] h-[140px] border-t border-white rounded-[10px]">
        <div className="absolute left-0 top-[10px] w-[412px] h-[130px]">
          <p className="text-white/80 font-['Neue_Haas_Grotesk_Display_Pro'] text-base font-medium leading-[26px] text-center">
            We are proud to have a diverse workforce that brings a variety of perspectives, which we believe is core to innovative thinking. Our employees are our greatest asset: we hire passionate, curious, and skilled professionals and give them an environment to thrive.
          </p>
        </div>
      </div>

      {/* Right Content Card */}
      <div className="absolute left-[735px] top-[643px] w-[412px] h-[140px] border-t border-white rounded-[10px]">
        <div className="absolute left-0 top-[10px] w-[412px] h-[104px]">
          <p className="text-white/80 font-['Neue_Haas_Grotesk_Display_Pro'] text-base font-medium leading-[26px] text-center">
            This has been recognized in our industry &ndash; we&apos;ve been named a &ldquo;Top Employer&rdquo; in several of our locations. Happy, motivated teams create the best solutions, and our clients feel that positive energy in projects.
          </p>
        </div>
      </div>
    </section>
  )
}
