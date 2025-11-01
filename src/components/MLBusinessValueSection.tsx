"use client";

import { ML_CONTENT } from "@/constants/mlContent";
import Image from "next/image";
import Link from "next/link";

export default function MLBusinessValueSection() {
  const { businessValue } = ML_CONTENT;

  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[750px] md:min-h-[900px] lg:min-h-[956px] bg-[#131416] overflow-hidden section-animate">
      {/* Content Container */}
      <div className="max-w-container mx-auto h-full flex flex-col lg:flex-row relative">
        {/* Left Side - Images Grid */}
        <div className="w-full lg:w-[906px] h-[400px] sm:h-[500px] lg:h-full relative">
          {/* Top Image Frame */}
          <div className="absolute top-0 left-0 w-full h-[200px] sm:h-[250px] lg:h-[530px] overflow-hidden">
            <Image
              src="/images/ml-business-value-frame-112.svg"
              alt="AI Business Value"
              fill
              className="object-cover animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            />
          </div>

          {/* Bottom Left - Statistic Box */}
          <div
            className="absolute top-[210px] sm:top-[260px] lg:top-[530px] left-0 w-full sm:w-[60%] lg:w-[453px] h-auto lg:h-[324px] bg-gradient-to-br from-[#E79A01] to-[#E76C01] p-6 sm:p-8 lg:p-[30px] flex flex-col justify-center animate-slide-up gpu-accelerated"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="font-neue font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.2] text-white/80 mb-4">
              {businessValue.statistic.prefix}
            </p>
            <h3 className="font-neue font-medium text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-[1.1] text-white mb-4">
              {businessValue.statistic.highlight}
            </h3>
            <p className="font-neue font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.2] text-white/80">
              {businessValue.statistic.suffix}
            </p>
          </div>

          {/* Bottom Right Image Frame - Only visible on desktop */}
          <div
            className="hidden lg:block absolute top-[530px] left-[453px] w-[453px] h-[426px] overflow-hidden animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="/images/ml-business-value-frame-114.svg"
              alt="AI Implementation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side - Business Value Content */}
        <div className="w-full lg:w-[534px] bg-white p-6 sm:p-8 md:p-10 lg:p-9 flex flex-col justify-between relative lg:absolute lg:right-0 lg:top-0.5 lg:h-[610px]">
          {/* Label with decorative lines */}
          <div
            className="relative mb-8 lg:mb-10 animate-fade-in gpu-accelerated"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-neue font-normal text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] text-[#12121A]">
                {businessValue.label}
              </h3>
              <div className="w-2 h-2 rounded-full bg-[#12121A]" />
              <h3 className="font-neue font-normal text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] text-[#12121A]">
                {businessValue.label}
              </h3>
            </div>
            <div className="w-full h-px bg-[#12121A] mb-2" />
            <div className="w-full h-px bg-[#12121A]" />
          </div>

          {/* Description */}
          <p
            className="font-neue font-bold text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2] text-[#12121A]/40 mb-8 lg:mb-auto animate-slide-up gpu-accelerated"
            style={{ animationDelay: "0.5s" }}
          >
            {businessValue.description}
          </p>

          {/* Quote */}
          <p
            className="font-neue font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[1.2] text-[#12121A] animate-slide-up gpu-accelerated"
            style={{ animationDelay: "0.6s" }}
          >
            {businessValue.quote}
          </p>
        </div>
      </div>

      {/* Bottom Section - Team Commitment & CTA */}
      <div className="max-w-container mx-auto px-[5%] lg:px-20 pb-12 sm:pb-16 md:pb-20 lg:pb-[85px] mt-8 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
          {/* Team Commitment Text */}
          <p
            className="font-neue font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[1.2] text-white max-w-full lg:max-w-[420px] animate-slide-up gpu-accelerated"
            style={{ animationDelay: "0.7s" }}
          >
            {businessValue.teamCommitment}
          </p>

          {/* CTA Button */}
          <Link
            href={businessValue.cta.href}
            className="inline-flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#E79A01] to-[#E76C01] rounded-lg font-neue font-medium text-[16px] sm:text-[18px] md:text-[20px] text-white hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 will-change-transform hover:scale-[1.02] w-fit animate-slide-up gpu-accelerated"
            style={{ animationDelay: "0.8s" }}
          >
            <span>{businessValue.cta.text}</span>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M1 6H17M17 6L12 1M17 6L12 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
