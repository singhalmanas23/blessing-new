"use client";

import { ML_CONTENT } from "@/constants/mlContent";
import Image from "next/image";

export default function MLWhyBSTSection() {
  const { whyBst } = ML_CONTENT;

  return (
    <section className="relative w-full min-h-[1000px] sm:min-h-[1600px] md:min-h-[2000px] lg:min-h-[2312px] bg-[#131416] overflow-hidden section-animate">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/ml-why-bst-bg.png"
          alt="Why Blessing SoftTech for AI Background"
          fill
          className="object-cover opacity-30 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#131416]/60 via-transparent to-[#131416]/80" />
      </div>

      {/* Decorative Blur Circle */}
      <div
        className="absolute top-[200px] sm:top-[300px] lg:top-[415px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] lg:w-[1550px] lg:h-[1550px] rounded-full bg-[#A6481E] blur-[400px] sm:blur-[600px] lg:blur-[824px] opacity-60 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-container mx-auto px-[5%] lg:px-20 py-12 sm:py-16 md:py-20 lg:py-[182px]">
        {/* Main Title */}
        <h2
          className="font-neue font-medium text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] text-center text-[#ECD4B3] mb-12 sm:mb-16 md:mb-20 lg:mb-24 animate-slide-up gpu-accelerated"
          style={{ animationDelay: "0.1s" }}
        >
          {whyBst.title}
        </h2>

        {/* Decorative Vector Lines */}
        <div className="absolute top-[200px] sm:top-[300px] lg:top-[415px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[700px] lg:w-[782.9px] h-[250px] sm:h-[300px] lg:h-[329.6px]">
          <svg
            viewBox="0 0 783 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <path
              d="M1 1C200 50 300 150 391.5 165C483 180 583 80 782 329"
              stroke="#EEAB8E"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </div>

        <div className="absolute bottom-[400px] sm:bottom-[600px] lg:bottom-[697.5px] right-[10%] sm:right-[20%] lg:right-[739px] w-[120px] sm:w-[140px] lg:w-[156.62px] h-[40px] sm:h-[45px] lg:h-[47.5px]">
          <svg
            viewBox="0 0 157 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <path
              d="M1 24C30 1 60 47 90 24C120 1 150 47 156 24"
              stroke="#EEAB8E"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          {/* Benefit 1 - Research Meets Real-World */}
          <div
            className="relative group animate-slide-up gpu-accelerated"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-full aspect-[267/248] bg-gradient-to-b from-black/12 via-black/12 to-[#6D341B] border border-white/12 rounded-lg backdrop-blur-[24px] p-6 sm:p-7 md:p-8 flex flex-col justify-end hover:scale-[1.02] transition-transform duration-300">
              {/* Icon placeholder */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="24" cy="24" r="20" stroke="url(#grad1)" strokeWidth="2" />
                  <path
                    d="M24 14L28 22L36 24L28 26L24 34L20 26L12 24L20 22L24 14Z"
                    fill="url(#grad1)"
                  />
                  <defs>
                    <linearGradient id="grad1" x1="12" y1="14" x2="36" y2="34">
                      <stop offset="0%" stopColor="#E79A01" />
                      <stop offset="100%" stopColor="#E76C01" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="font-neue font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[1.2] text-white mb-3 sm:mb-4">
                {whyBst.benefits[0].title}
              </h3>
              <p className="font-neue font-medium text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.2] text-white/80">
                {whyBst.benefits[0].description}
              </p>
            </div>
          </div>

          {/* Benefit 2 - Proven Business Impact */}
          <div
            className="relative group animate-slide-up gpu-accelerated"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-full aspect-[313/203] lg:mt-[94px] bg-gradient-to-l from-black/12 via-black/12 to-[#6D341B] border border-white/12 rounded-lg backdrop-blur-[24px] p-6 sm:p-7 md:p-8 flex flex-col justify-end hover:scale-[1.02] transition-transform duration-300">
              {/* Icon placeholder */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="24" cy="24" r="20" stroke="url(#grad2)" strokeWidth="2" />
                  <path
                    d="M16 24L22 30L32 18"
                    stroke="url(#grad2)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="grad2" x1="16" y1="18" x2="32" y2="30">
                      <stop offset="0%" stopColor="#E79A01" />
                      <stop offset="100%" stopColor="#E76C01" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="font-neue font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[1.2] text-white mb-3 sm:mb-4">
                {whyBst.benefits[1].title}
              </h3>
              <p className="font-neue font-medium text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.2] text-white/80">
                {whyBst.benefits[1].description}
              </p>
            </div>
          </div>

          {/* Benefit 3 - Trust & Compliance */}
          <div
            className="relative group animate-slide-up gpu-accelerated"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-full aspect-[313/203] lg:mt-[299px] bg-gradient-to-l from-black/24 via-black/24 to-[#6D341B] border border-white/12 rounded-lg backdrop-blur-[24px] p-6 sm:p-7 md:p-8 flex flex-col justify-end hover:scale-[1.02] transition-transform duration-300">
              {/* Icon placeholder */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="24" cy="24" r="20" stroke="url(#grad3)" strokeWidth="2" />
                  <path
                    d="M24 12L28 20L36 22L30 28L32 36L24 32L16 36L18 28L12 22L20 20L24 12Z"
                    fill="url(#grad3)"
                  />
                  <defs>
                    <linearGradient id="grad3" x1="12" y1="12" x2="36" y2="36">
                      <stop offset="0%" stopColor="#E79A01" />
                      <stop offset="100%" stopColor="#E76C01" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="font-neue font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[1.2] text-white mb-3 sm:mb-4">
                {whyBst.benefits[2].title}
              </h3>
              <p className="font-neue font-medium text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.2] text-white/80">
                {whyBst.benefits[2].description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - AI Powers Most Businesses Today */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute -left-[5%] lg:-left-[54px] top-0 w-[110%] lg:w-[1548px] h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1032px] overflow-hidden">
            <Image
              src="/images/ml-ai-business-bg.png"
              alt="AI Powers Businesses"
              fill
              className="object-cover opacity-40 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          {/* Blur Rectangle */}
          <div
            className="absolute -left-[20%] lg:-left-[761px] bottom-0 w-[140%] lg:w-[2962px] h-[200px] sm:h-[300px] md:h-[380px] lg:h-[436px] bg-[#4F2615] blur-[150px] sm:blur-[200px] lg:blur-[214px] animate-fade-in"
            style={{ animationDelay: "0.6s" }}
            aria-hidden="true"
          />

          {/* Footer Text */}
          <div className="relative z-10 pt-[300px] sm:pt-[400px] md:pt-[500px] lg:pt-[451px] pb-12 sm:pb-16 md:pb-20">
            <h3
              className="font-neue font-semibold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] text-center text-white animate-slide-up gpu-accelerated"
              style={{ animationDelay: "0.7s" }}
            >
              {whyBst.footer.title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
