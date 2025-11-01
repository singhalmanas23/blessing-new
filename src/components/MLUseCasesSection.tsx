"use client";

import { ML_CONTENT } from "@/constants/mlContent";
import Image from "next/image";
import Link from "next/link";

export default function MLUseCasesSection() {
  const { useCases } = ML_CONTENT;

  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[750px] md:min-h-[900px] lg:min-h-[1024px] bg-[#261C10] overflow-hidden section-animate">
      {/* Background Images */}
      <div className="absolute top-0 left-0 w-full sm:w-[60%] lg:w-[504px] h-[300px] sm:h-[500px] lg:h-[715px] overflow-hidden">
        <Image
          src="/images/ml-usecase-frame-247.svg"
          alt="AI Use Cases Background 1"
          fill
          className="object-cover opacity-40 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        />
        <div className="absolute inset-0 bg-[#1C1307]/80" />
      </div>

      <div className="absolute top-[300px] sm:top-[400px] lg:top-[358px] right-0 w-full sm:w-[40%] lg:w-[326px] h-[250px] sm:h-[300px] lg:h-[347px] overflow-hidden">
        <Image
          src="/images/ml-usecase-frame-248.svg"
          alt="AI Use Cases Background 2"
          fill
          className="object-cover opacity-40 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        />
        <div className="absolute inset-0 bg-[#150F09]/80" />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-[280px] sm:top-[300px] lg:top-[309px] left-0 w-full h-[1px] bg-white/30 animate-fade-in"
        style={{ animationDelay: "0.3s" }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-container mx-auto px-[5%] lg:px-20 py-12 sm:py-16 md:py-20 lg:py-[100px]">
        {/* Title */}
        <h2
          className="font-neue font-semibold text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.055] text-[#CFBAA1] mb-12 sm:mb-16 md:mb-20 lg:mb-24 animate-slide-up gpu-accelerated"
          style={{ animationDelay: "0.1s" }}
        >
          {useCases.title}
        </h2>

        {/* Use Cases Grid */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 mb-12 sm:mb-16 md:mb-20">
          {useCases.cases.map((useCase, index) => (
            <div
              key={useCase.id}
              className={`grid grid-cols-1 ${
                index % 2 === 0 ? "lg:grid-cols-[auto,1fr]" : "lg:grid-cols-[1fr,auto]"
              } gap-4 sm:gap-6 lg:gap-8 items-start animate-slide-up gpu-accelerated`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Number & Title - Left on even, Right on odd (desktop only) */}
              <div
                className={`flex flex-col gap-2 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h3 className="font-neue font-semibold text-[18px] sm:text-[20px] leading-[1.2] text-[#CFBAA1] whitespace-nowrap">
                  {useCase.id}&nbsp;&nbsp;&nbsp;{useCase.title}
                </h3>
              </div>

              {/* Description - Right on even, Left on odd (desktop only) */}
              <div
                className={`${
                  index % 2 === 0 ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                }`}
              >
                <p className="font-neue font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.2] text-white/70">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className="flex justify-center lg:justify-start lg:ml-[590px] animate-slide-up gpu-accelerated"
          style={{ animationDelay: "0.7s" }}
        >
          <Link
            href={useCases.cta.href}
            className="inline-flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#E79A01] to-[#E76C01] rounded-lg font-neue font-medium text-[16px] sm:text-[18px] md:text-[20px] text-white hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 will-change-transform hover:scale-[1.02] w-fit"
          >
            <span>{useCases.cta.text}</span>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
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

      {/* Decorative Icon Frames - Visible on tablet and desktop */}
      <div
        className="hidden sm:block absolute top-[340px] sm:top-[380px] lg:top-[348px] left-[5%] sm:left-[10%] lg:left-[560px] w-12 h-12 sm:w-16 sm:h-16 opacity-20 animate-fade-in"
        style={{ animationDelay: "0.4s" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" stroke="#CFBAA1" strokeWidth="2" />
          <path d="M24 14V34M14 24H34" stroke="#CFBAA1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div
        className="hidden sm:block absolute top-[470px] sm:top-[500px] lg:top-[488px] left-[5%] sm:left-[10%] lg:left-[560px] w-12 h-12 sm:w-16 sm:h-16 opacity-20 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" stroke="#CFBAA1" strokeWidth="2" />
          <path d="M16 24L22 30L32 18" stroke="#CFBAA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div
        className="hidden sm:block absolute top-[590px] sm:top-[620px] lg:top-[604px] left-[5%] sm:left-[10%] lg:left-[560px] w-12 h-12 sm:w-16 sm:h-16 opacity-20 animate-fade-in"
        style={{ animationDelay: "0.6s" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" stroke="#CFBAA1" strokeWidth="2" />
          <path d="M20 18L28 24L20 30V18Z" fill="#CFBAA1" />
        </svg>
      </div>

      <div
        className="hidden sm:block absolute top-[730px] sm:top-[760px] lg:top-[744px] left-[5%] sm:left-[10%] lg:left-[560px] w-12 h-12 sm:w-16 sm:h-16 opacity-20 animate-fade-in"
        style={{ animationDelay: "0.7s" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" stroke="#CFBAA1" strokeWidth="2" />
          <path d="M18 20H30M18 24H30M18 28H26" stroke="#CFBAA1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
