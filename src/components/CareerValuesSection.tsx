'use client'

import Image from 'next/image'
import { Globe2, Target, Users, Lightbulb } from 'lucide-react'

export default function CareerValuesSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/career-values-bg.png"
          alt="Values Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 flex flex-col lg:flex-row gap-16 items-start">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col gap-10">
          <h2 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-4xl md:text-6xl font-medium leading-tight">
            Blessing SoftTech stands at the intersection of
          </h2>

          {/* Value Pills */}
          <div className="flex flex-wrap gap-4 mt-4">
            {['Integrity', 'Innovation', 'Impact'].map((value) => (
              <span
                key={value}
                className="bg-white/90 text-black rounded-full px-6 py-2 text-xl md:text-2xl font-medium shadow-lg hover:scale-105 transition-transform"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 grid gap-12">
          <FeatureBlock
            icon={<Target className="w-8 h-8 text-white" />}
            title="Mission-driven growth"
            text="Every step aligns with helping businesses innovate and thrive."
          />
          <FeatureBlock
            icon={<Globe2 className="w-8 h-8 text-white" />}
            title="Global presence for digital transformation"
            text="Delivering measurable impact across industries and markets."
          />
          <FeatureBlock
            icon={<Lightbulb className="w-8 h-8 text-white" />}
            title="Core values in action"
            text="Integrity shapes every partnership and client engagement."
          />
          <FeatureBlock
            icon={<Users className="w-8 h-8 text-white" />}
            title="Clients and partners as allies"
            text="We move forward together to create lasting success."
          />
        </div>
      </div>
    </section>
  )
}

/* Subcomponent for each value block */
function FeatureBlock({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-gradient-to-tr from-[#E79A01] to-[#E76C01] shadow-lg">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] text-2xl font-semibold leading-tight">
          {title}
        </h4>
        <p className="text-white/80 text-lg mt-2 leading-snug">{text}</p>
      </div>
    </div>
  )
}
