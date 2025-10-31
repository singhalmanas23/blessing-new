"use client";

import Image from "next/image";
import {
  Users,
  Briefcase,
  Lightbulb,
  Rocket,
  ArrowRight,
  Info,
} from "lucide-react";

export default function CareerTalentSection() {
  return (
    <section className="relative w-full bg-[#131416] border-t border-white/10 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* ===== Left Content ===== */}
        <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-20 py-16 flex flex-col justify-center space-y-8">
          <div>
            <h2 className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] text-xl sm:text-2xl font-semibold tracking-wide mb-4">
              Talent / Careers
            </h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 text-lg sm:text-xl font-medium leading-relaxed">
              Are you passionate about technology and innovation? At Blessing
              SoftTech, you’ll join a family of like-minded creators working on
              impactful projects for global brands in a dynamic, inclusive
              environment. Every voice is valued, and every idea can spark real
              change. We invest in your growth with continuous learning,
              transparent career paths, and opportunities to shape the future —
              together.
            </p>
          </div>

          {/* CTA Button */}
          <button className="group flex items-center gap-3 bg-white text-black font-semibold text-lg px-6 py-4 rounded-xl hover:bg-gradient-to-r hover:from-[#E79A01] hover:to-[#E76C01] hover:text-white transition-all w-fit">
            Explore Careers
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Info Message */}
          <div className="flex items-center gap-2 text-white/70">
            <Info className="w-5 h-5" />
            <span className="text-base font-medium">
              Contact us to explore openings at Blessing SoftTech
            </span>
          </div>
        </div>

        {/* ===== Right Content ===== */}
        <div className="relative w-full lg:w-1/2 h-[600px] lg:h-auto">
          <Image
            src="/images/career-talent-bg-1f8bcc.png"
            alt="Talent Background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131416] via-[#131416]/60 to-transparent" />

          {/* Feature Cards */}
          <div className="relative z-10 flex flex-col divide-y divide-white/10">
            {[
              {
                icon: Users,
                text: "Dynamic, global team (20% growth last year, still expanding)",
              },
              {
                icon: Briefcase,
                text: "Projects for world-class brands and real impact",
              },
              {
                icon: Lightbulb,
                text: "Learning budgets, career progression, and intrapreneurship support",
              },
              {
                icon: Rocket,
                text: "Collaborative culture: Tech Talks, Hack Weeks, and volunteering days",
              },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 px-6 sm:px-10 py-8 bg-[#131416]/90 backdrop-blur-sm hover:bg-[#1A1B1D]/90 transition-colors"
              >
                <p className="text-white text-lg sm:text-xl font-medium leading-relaxed max-w-[75%]">
                  {text}
                </p>
                <Icon className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
