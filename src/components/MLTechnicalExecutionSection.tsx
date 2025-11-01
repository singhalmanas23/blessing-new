"use client";

import { ML_CONTENT } from "@/constants/mlContent";
import Link from "next/link";

export default function MLTechnicalExecutionSection() {
  const { technicalExecution } = ML_CONTENT;

  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[750px] md:min-h-[900px] lg:min-h-[1024px] bg-[#131416] overflow-hidden section-animate">
      {/* Content Container */}
      <div className="max-w-container mx-auto px-[5%] lg:px-20 py-12 sm:py-16 md:py-20 lg:py-[104px] relative">
        {/* Main Content Text */}
        <div className="max-w-full lg:max-w-[661px] mb-12 sm:mb-16 md:mb-20 lg:mb-0">
          <p
            className="font-neue font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[1.2] text-white/80 animate-slide-up gpu-accelerated"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block mb-4">
              <strong className="text-white">{technicalExecution.title}</strong>
            </span>
            {technicalExecution.content.map((paragraph, index) => (
              <span key={index} className="block mb-4">
                {paragraph}
              </span>
            ))}
          </p>

          {/* CTA Button - Mobile/Tablet */}
          <Link
            href={technicalExecution.cta.href}
            className="inline-flex lg:hidden items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#E79A01] to-[#E76C01] rounded-lg font-neue font-medium text-[16px] sm:text-[18px] md:text-[20px] text-white hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 will-change-transform hover:scale-[1.02] w-fit mt-8 animate-slide-up gpu-accelerated"
            style={{ animationDelay: "0.5s" }}
          >
            <span>{technicalExecution.cta.text}</span>
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

        {/* Decorative Shapes - Background */}
        <div className="absolute top-[92px] right-[0%] lg:right-[47px] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[330px] lg:h-[330px] opacity-10 lg:opacity-100">
          <div className="w-full h-full border-4 border-gradient-to-br from-[#E79A01] to-[#E76C01] rotate-45 animate-fade-in" style={{ animationDelay: "0.2s" }} />
        </div>

        <div className="absolute bottom-[100px] right-[10%] lg:right-[85px] w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] lg:w-[261px] lg:h-[261px] opacity-10 lg:opacity-100">
          <div className="w-full h-full border-4 border-gradient-to-br from-[#E79A01] to-[#E76C01] rotate-12 animate-fade-in" style={{ animationDelay: "0.3s" }} />
        </div>

        {/* Tools Display */}
        <div className="absolute top-[104px] right-[5%] lg:right-0 w-full max-w-[600px] lg:max-w-none lg:w-auto flex flex-col items-end gap-8 sm:gap-12 md:gap-16 lg:gap-[80px]">
          {/* AWS SageMaker */}
          <div
            className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[321px] lg:h-[321px] rounded-full border border-white/10 bg-transparent backdrop-blur-sm flex items-center justify-center animate-fade-in gpu-accelerated hover:scale-105 transition-transform duration-500"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="font-neue font-medium text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px] leading-[1.2] text-white text-center whitespace-pre-line">
              {technicalExecution.tools[0].name}
            </span>
          </div>

          {/* TensorFlow */}
          <div
            className="w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[368.65px] lg:h-[368.65px] rounded-full border border-white/10 bg-transparent backdrop-blur-sm flex items-center justify-center animate-fade-in gpu-accelerated hover:scale-105 transition-transform duration-500"
            style={{ animationDelay: "0.3s", marginRight: "-40px" }}
          >
            <span className="font-neue font-medium text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px] leading-[1.2] text-white text-center">
              {technicalExecution.tools[1].name}
            </span>
          </div>

          {/* Azure ML */}
          <div
            className="w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[368.65px] lg:h-[368.65px] rounded-full border border-white/10 bg-transparent backdrop-blur-sm flex items-center justify-center animate-fade-in gpu-accelerated hover:scale-105 transition-transform duration-500"
            style={{ animationDelay: "0.4s", marginRight: "-80px" }}
          >
            <span className="font-neue font-medium text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px] leading-[1.2] text-white text-center">
              {technicalExecution.tools[2].name}
            </span>
          </div>
        </div>

        {/* Decorative Circles - Accent */}
        <div
          className="hidden lg:block absolute top-[368px] right-[219px] w-[107px] h-[107px] rounded-full bg-white animate-fade-in opacity-20"
          style={{ animationDelay: "0.5s" }}
          aria-hidden="true"
        />
        <div
          className="hidden lg:block absolute bottom-[240px] left-[225px] w-[272px] h-[272px] rounded-full bg-white animate-fade-in opacity-10"
          style={{ animationDelay: "0.6s" }}
          aria-hidden="true"
        />

        {/* Decorative Rectangles */}
        <div
          className="hidden lg:block absolute bottom-[0px] right-[212px] w-[292px] h-[201px] bg-white animate-fade-in opacity-5"
          style={{ animationDelay: "0.7s", transform: "rotate(-15deg)" }}
          aria-hidden="true"
        />
        <div
          className="hidden lg:block absolute bottom-[0px] right-[477px] w-[255px] h-[255px] bg-white animate-fade-in opacity-5"
          style={{ animationDelay: "0.8s", transform: "rotate(10deg)" }}
          aria-hidden="true"
        />

        {/* CTA Button - Desktop */}
        <Link
          href={technicalExecution.cta.href}
          className="hidden lg:inline-flex absolute bottom-[104px] left-[80px] items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#E79A01] to-[#E76C01] rounded-lg font-neue font-medium text-[20px] text-white hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 will-change-transform hover:scale-[1.02] w-fit animate-slide-up gpu-accelerated"
          style={{ animationDelay: "0.9s" }}
        >
          <span>{technicalExecution.cta.text}</span>
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
    </section>
  );
}
