import React from "react";
import Image from "next/image";

export const UIApproachSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#131416] overflow-hidden">
      {/* Top Row: Left Image + White Card */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Image */}
        <div className="relative w-full lg:w-[906px] h-[300px] sm:h-[400px] lg:h-[493px]">
          <Image
            src="/images/ui-approach-left.png"
            alt="UI/UX Approach Left"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Right White Card */}
        <div className="relative bg-white w-full lg:w-[534px] flex flex-col justify-between">
          <div className="p-6 sm:p-10 lg:p-9">
            <h3 className="font-['Neue_Haas_Grotesk_Display_Pro'] font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-[#12121A]/40 leading-[1.2] mb-10">
              We craft user experiences that drive engagement and loyalty.
            </h3>

            {/* Business Value Section */}
            <div className="relative my-8">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-['Neue_Haas_Grotesk_Display_Pro'] text-[28px] sm:text-[32px] lg:text-[40px] font-normal text-[#12121A] whitespace-nowrap">
                  BUSINESS VALUE
                </span>
                <div className="w-2 h-2 bg-[#12121A] rounded-full" />
                <span className="font-['Neue_Haas_Grotesk_Display_Pro'] text-[28px] sm:text-[32px] lg:text-[40px] font-normal text-[#12121A] whitespace-nowrap">
                  BUSINESS VALUE
                </span>
              </div>

              <div className="absolute left-0 right-0 top-0 h-px bg-black opacity-60" />
              <div className="absolute left-0 right-0 bottom-0 h-px bg-black opacity-60" />
            </div>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[18px] sm:text-[20px] text-[#12121A] leading-[1.3]">
              From user research to visual design and usability testing, we
              cover the full UX/UI spectrum — ensuring your applications aren’t
              just functional but truly user-centric.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row: Gradient Card + Right Image */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Gradient Value Card */}
        <div
          className="flex flex-col justify-center text-white px-6 sm:px-10 lg:px-20 py-12 lg:py-16"
          style={{
            background:
              "linear-gradient(126deg, rgba(231, 154, 1, 1) 2%, rgba(231, 108, 1, 1) 90%)",
          }}
        >
          <h3 className="font-['Neue_Haas_Grotesk_Display_Pro'] font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.1] mb-4 max-w-[360px]">
            $1 invested in UX returns $100
          </h3>

          <p className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[18px] sm:text-[20px] mb-6 max-w-[320px]">
            Investing in great UX delivers massive value.
          </p>

          <ul className="space-y-4 max-w-[360px]">
            <li className="font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[18px] sm:text-[20px] leading-snug">
              Boost conversions and customer retention
            </li>
            <li className="font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[18px] sm:text-[20px] leading-snug">
              Reduce support costs through intuitive design
            </li>
            <li className="font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[18px] sm:text-[20px] leading-snug">
              Prevent churn — 88% of users don’t return after poor UX
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-[453px] h-[320px] sm:h-[400px] lg:h-[463px]">
          <Image
            src="/images/ui-approach-right.png"
            alt="UI/UX Approach Right"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 sm:px-10 lg:px-[6rem] py-14 flex flex-col gap-4 max-w-[600px]">
        <h4 className="font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[22px] sm:text-[24px] text-white leading-tight">
          Turn usability into your competitive advantage.
        </h4>

        <p className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[18px] sm:text-[20px] text-white/90 leading-snug">
          Our designs reduce friction, training time, and user errors —
          empowering teams and delighting customers. With Blessing SoftTech, UX
          becomes your strongest business driver.
        </p>

        <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-xl w-fit">
          <span className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[18px] sm:text-[20px] text-white">
            Discover How
          </span>
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1L17 6L12 11M17 6H1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
