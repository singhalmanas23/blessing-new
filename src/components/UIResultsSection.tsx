'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const UIResultsSection: React.FC = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
    viewport: { once: true },
  });

  const cards = [
    {
      title: 'Conversion That Scales Revenue',
      text: "An e-commerce client achieved an 83% increase in conversions and a major revenue lift after Blessing SoftTech's UX redesign improved flow and clarity.",
      gradient: 'from-[#2C1206]/40 via-[#6D341B]/40 to-[#A6481E]/60',
      delay: 0.1,
    },
    {
      title: 'Efficiency That Reduces Support Load',
      text: 'A redesigned enterprise interface led to fewer support calls, as users could now self-navigate effortlessly — saving time and operational costs.',
      gradient: 'from-[#1E0C05]/40 via-[#994723]/50 to-[#B85A2C]/70',
      delay: 0.25,
    },
    {
      title: 'Design That Builds Trust',
      text: "With 75% of credibility judgments based on aesthetics and usability, our polished interfaces strengthen your brand's image and user confidence.",
      gradient: 'from-[#3B1A0E]/40 via-[#6D341B]/50 to-[#A6481E]/60',
      delay: 0.4,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#131416] py-24 lg:py-40">
      {/* Background Glow */}
      <div className="absolute -left-20 top-[400px] w-[1200px] h-[1200px] bg-[#A6481E] blur-[600px] opacity-40 pointer-events-none" />

      {/* Headline */}
      <motion.h2
        {...fadeUp(0)}
        className="relative z-10 mx-auto max-w-5xl text-center font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[32px] sm:text-[40px] lg:text-[52px] leading-tight text-[#ECD4B3] px-6"
      >
        The Blessing of Experience — <br className="hidden sm:block" />
        Design That Delights Users and Drives Results
      </motion.h2>

      {/* Divider + Cards */}
      <div className="relative mt-24 flex flex-col items-center justify-center">
        {/* Divider */}
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto w-[80%] max-w-[700px] text-[#EEAB8E]"
          viewBox="0 0 783 330"
          fill="none"
        >
          <path stroke="#EEAB8E" strokeWidth="2" d="M0 165L783 165" />
          <path stroke="#EEAB8E" strokeWidth="2" d="M391.5 0L391.5 330" />
        </motion.svg>

        {/* Cards */}
        <div className="relative mt-[-200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl z-10">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(card.delay)}
              className={`relative group overflow-hidden rounded-2xl border border-white/10 p-8 backdrop-blur-md bg-gradient-to-b ${card.gradient} hover:scale-[1.02] transition-transform duration-500 shadow-[0_0_60px_rgba(0,0,0,0.2)]`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-white/40 to-transparent transition-opacity duration-500" />
              <h3 className="relative font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[22px] sm:text-[24px] text-white mb-4">
                {card.title}
              </h3>
              <p className="relative font-['Neue_Haas_Grotesk_Display_Pro'] text-white/80 text-[16px] sm:text-[18px] leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Hero Background */}
      <div className="relative mt-[-80px] w-full flex justify-center">
        <motion.div
          {...fadeUp(0.4)}
          className="relative w-[92%] max-w-[1400px] aspect-[1511/1007] rounded-[24px] overflow-hidden"
        >
          {/* Image */}
          <Image
            src="/images/ui-results-bg.png"
            alt="Results Background"
            fill
            className="object-cover"
          />

          {/* Gradient overlay to connect with cards */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#131416] via-[#131416]/60 to-transparent" />

          {/* Floating glow elements */}
          <div className="absolute top-10 left-1/3 w-[300px] h-[300px] bg-[#A6481E]/30 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-[250px] h-[250px] bg-[#EEAB8E]/20 blur-[120px] rounded-full animate-pulse" />
        </motion.div>
      </div>

      {/* Bottom Headline */}
      <motion.h3
        {...fadeUp(0.3)}
        className="relative z-10 mt-24 text-center font-['Neue_Haas_Grotesk_Display_Pro'] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-white leading-snug px-6"
      >
        Designing for Consistency, Inclusivity & Global Reach
      </motion.h3>

      {/* Bottom Blur */}
      <div className="absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-t from-[#4F2615] via-[#131416] to-transparent blur-[200px] opacity-50 pointer-events-none" />
    </section>
  );
};
