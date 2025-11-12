'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

/**
 * VisionSection Component
 * Displays Mr. Ketan Jogi's vision and Why Invest section
 */
export default function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="vision" className="py-20 bg-white relative overflow-hidden" aria-labelledby="vision-heading">
      {/* Elegant accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4b896] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Vision & Investment Section - Combined */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Vision by Mr. Ketan Jogi */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Vision Content */}
            <div className="text-left">
              <h2 id="vision-heading" className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider text-[#0a4d5c] mb-2 uppercase" style={{ fontFamily: 'serif' }}>
                Vision by Mr. Ketan Jogi
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 italic">
                Founder, Chetna Paints Pvt. Ltd | Real Estate Visionary
              </p>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  With over <strong className="text-[#0a4d5c]">25 years of business excellence in manufacturing</strong>, Mr. Ketan Jogi brings visionary leadership and a commitment to quality into real estate development. His venture into commercial real estate reflects his belief in creating structures that blend utility, innovation and timeless design.
                </p>
                <p className="text-base sm:text-lg text-[#0a4d5c] font-semibold italic border-l-4 border-[#d4b896] pl-4 py-2 bg-[#f5e6d3] bg-opacity-30">
                  "Vihaara Business Bay is not just a project, but a milestone in redefining Dombivli's skyline."
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative flex justify-center lg:justify-end group">
              <div className="relative w-80 h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
                <Image
                  src="/assets/Mr. Ketan Jogi.png"
                  alt="Mr. Ketan Jogi - Founder, Chetna Paints Pvt. Ltd"
                  fill
                  className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 320px"
                  quality={100}
                  loading="lazy"
                />
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a4d5c]/0 to-transparent group-hover:from-[#0a4d5c]/10 transition-all duration-500"></div>
                
                {/* Gold Border on Hover */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#d4b896]/60 transition-all duration-500 rounded-2xl"></div>
                
                {/* Name Label on Hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a4d5c] to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-semibold text-lg text-center">Mr. Ketan Jogi</p>
                  <p className="text-[#d4b896] text-sm text-center">Visionary Founder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Invest Section */}
          <div>
            <h3 className="text-3xl md:text-4xl font-light tracking-wider text-[#0a4d5c] mb-12 text-center uppercase" style={{ fontFamily: 'serif' }}>
              Why Invest in Vihaara Business Bay?
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Column - Investment Benefits */}
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-[#d4b896] p-6 shadow-lg rounded-r-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#0a4d5c] mb-2">High Rental Yield Potential</h4>
                  <p className="text-gray-700">Prime commercial location with strong demand from businesses seeking quality office spaces</p>
                </div>
                <div className="bg-white border-l-4 border-[#d4b896] p-6 shadow-lg rounded-r-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#0a4d5c] mb-2">Excellent Capital Appreciation</h4>
                  <p className="text-gray-700">Strategic location in Dombivli's growing commercial hub ensures long-term value growth</p>
                </div>
                <div className="bg-white border-l-4 border-[#d4b896] p-6 shadow-lg rounded-r-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#0a4d5c] mb-2">Early-mover Advantage</h4>
                  <p className="text-gray-700">Be part of Dombivli's commercial expansion at the ground level</p>
                </div>
              </div>

              {/* Right Column - More Benefits */}
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-[#d4b896] p-6 shadow-lg rounded-r-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#0a4d5c] mb-2">Modern Infrastructure</h4>
                  <p className="text-gray-700">Ready-to-move-in offices with premium amenities and contemporary design</p>
                </div>
                <div className="bg-white border-l-4 border-[#d4b896] p-6 shadow-lg rounded-r-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#0a4d5c] mb-2">Dual Usage Flexibility</h4>
                  <p className="text-gray-700">Ideal for both direct business operations and high-yield leasing opportunities</p>
                </div>
                <div className="bg-[#d4b896] p-6 rounded-xl border-2 border-[#0a4d5c] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <p className="text-center text-[#0a4d5c] font-semibold text-lg">
                    Secure Your Investment in India's First Sparkle Tower
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
