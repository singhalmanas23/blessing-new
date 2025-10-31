"use client";

import Image from "next/image";

export default function CareerStorySection() {
  return (
    <section className="relative w-full bg-[#131416] overflow-hidden flex items-center justify-center min-h-[350px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[488px]">
      {/* ===== Background SVG ===== */}
      <div className="absolute inset-0">
        <Image
          src="/images/career-story-bg.svg"
          alt="Career Story Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 text-center max-w-[720px]">
        <p className="text-white font-neue text-lg sm:text-xl md:text-2xl leading-relaxed">
          Blessing SoftTech story is still being written and
        </p>

        <p className="text-transparent bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text font-instrument text-lg sm:text-xl md:text-2xl leading-relaxed mt-2">
          We invite you to be part of it
        </p>
      </div>
    </section>
  );
}
