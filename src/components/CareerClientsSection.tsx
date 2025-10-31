'use client'

import Image from 'next/image'
import { ArrowRight, CheckCircle2, TrendingUp, Compass } from 'lucide-react'

export default function CareerClientsSection() {
  return (
    <section className="relative bg-[#131416] text-white overflow-hidden">
      {/* Background image (right side only on desktop) */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/career-clients-bg-7169f2.png"
          alt="Clients Background"
          fill
          className="object-cover mix-blend-overlay"
        />
      </div>

      {/* Grid container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8">
          <h2
            className="text-[22px] font-medium uppercase tracking-wide bg-gradient-to-r from-white via-[#E79A01] to-[#E76C01] bg-clip-text text-transparent"
          >
            Clients / Prospective Clients
          </h2>

          <p className="text-[20px] md:text-[22px] leading-relaxed text-gray-300">
            Looking for a <span className="text-white font-semibold">true technology partner</span> —
            not just a vendor? Welcome to <span className="text-white font-semibold">Blessing SoftTech</span>.
            We invest deeply in your success and bring bold ideas to every engagement,
            whether you need a focused solution or a full digital transformation.
          </p>

          <p className="text-[20px] md:text-[22px] leading-relaxed text-gray-300">
            Join us for a free, no-strings-attached consultation or discovery workshop
            and see how we can unlock high-impact opportunities for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button
              className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-white to-[#E79A01] text-black font-semibold text-lg rounded-xl shadow-md hover:opacity-90 transition"
            >
              Start Your Journey
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-2 opacity-80">
              <Compass size={18} />
              <span className="text-sm md:text-base">Free consultation or workshop</span>
            </div>
          </div>
        </div>

        {/* Right Feature Cards */}
        <div className="flex flex-col justify-center space-y-6">
          {[
            {
              icon: <TrendingUp className="text-white" size={28} />,
              title: 'Global IT spending projected to grow ~9% in 2025 — now’s the time to act.',
            },
            {
              icon: <Compass className="text-white" size={28} />,
              title: 'We start engagements with a discovery session to align on goals.',
            },
            {
              icon: <CheckCircle2 className="text-white" size={28} />,
              title: 'Our commitment: passion, expertise, and proven outcomes.',
            },
            {
              icon: <ArrowRight className="text-white" size={28} />,
              title: 'Initial strategic insights, tailored for you, with no obligations attached.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-white/20 via-[#E79A01]/60 to-[#E76C01]/70 shadow-lg">
                {item.icon}
              </div>
              <p className="text-[18px] md:text-[20px] leading-snug font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
