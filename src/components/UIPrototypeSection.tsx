'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const UIPrototypeSection: React.FC = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
    viewport: { once: true },
  });

  const steps = [
    {
      num: '01.',
      title: 'Prototype Before You Build',
      text: 'We craft interactive prototypes using Figma, Adobe XD, or InVision, allowing teams to experience and refine ideas before development.',
    },
    {
      num: '02.',
      title: 'Test With Real Users',
      text: 'Usability tests reveal how people actually navigate your product — we watch, learn, and identify friction points that block engagement.',
    },
    {
      num: '03.',
      title: 'Iterate With Data',
      text: 'Each round of testing drives evidence-based refinements, ensuring every screen feels intuitive and every flow performs better.',
    },
    {
      num: '04.',
      title: 'Optimize for Conversion',
      text: 'We experiment with layouts, CTAs, and micro-interactions — applying proven principles like Hick’s and Fitts’s laws to drive measurable conversion gains.',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0B]">
      {/* Subtle Gradient Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1307]/70 via-[#0B0B0B] to-black pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-20 lg:py-32 gap-16 lg:gap-24">
        
        {/* Left Side - Image */}
        <motion.div
          {...fadeUp(0.1)}
          className="relative w-full lg:w-[480px] xl:w-[520px] aspect-[7/10] bg-[#1C1307] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(166,72,30,0.1)]"
        >
          <Image
            src="/images/ui-prototype-bg.png"
            alt="Prototype Preview"
            fill
            priority
            className="object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col justify-start w-full lg:max-w-[700px]"
        >
          {/* Headline */}
          <h2 className="font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[#F0E9E6] text-[32px] sm:text-[44px] lg:text-[60px] xl:text-[64px] leading-[1.15] tracking-tight mb-12">
            Validating Design Through Real User Interaction
          </h2>

          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div key={i} {...fadeUp(0.2 + i * 0.1)}>
                <h3 className="font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-lg sm:text-xl text-[#F0E9E6] mb-1">
                  {step.num}&nbsp;&nbsp;{step.title}
                </h3>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-base sm:text-lg text-white/70 leading-relaxed max-w-[640px]">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            {...fadeUp(0.8)}
            className="mt-12 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 group w-fit"
          >
            <span className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-lg text-white">
              Discover How
            </span>
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="17.42"
              height="11.31"
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
