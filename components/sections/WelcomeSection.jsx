'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

/**
 * WelcomeSection Component
 * Displays grand welcome message with building image
 */
export default function WelcomeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-white relative overflow-hidden" aria-labelledby="welcome-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4b896] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <h2 
              id="welcome-heading" 
              className="text-4xl md:text-5xl font-light tracking-wide text-[#0a4d5c] mb-6 leading-tight uppercase"
              style={{ fontFamily: 'serif' }}
            >
              A Grand Welcome to<br />The Future of Business
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                A new-age commercial address where <strong className="text-[#0a4d5c]">ambition meets infrastructure</strong>. Strategically located in the rapidly emerging commercial node of Dombivli, Vihaara Business Bay is more than a business space; it's a thriving ecosystem designed for productivity, comfort and success.
              </p>
              
              <p>
                Whether you're a <strong className="text-[#0a4d5c]">startup, MSME or established enterprise</strong>, Vihaara Business Bay provides the foundation for sustainable growth in one of Mumbai's most well-connected suburbs.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#0a4d5c] rounded-lg p-4 text-center border-2 border-[#d4b896]">
                <div className="text-3xl font-bold text-[#d4b896] mb-1">6</div>
                <div className="text-sm text-[#d4b896] opacity-80">Storeys</div>
              </div>
              <div className="bg-[#d4b896] rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-[#0a4d5c] mb-1">100%</div>
                <div className="text-sm text-[#0a4d5c]">Furnished</div>
              </div>
            </div>
          </div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 relative group"
        >
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
            <Image
              src="/assets/gallery/Building-pic2.jpg"
              alt="Vihaara Business Bay - Modern Commercial Building"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500"></div>
            
            {/* Interactive Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4b896]/0 to-[#0a4d5c]/0 group-hover:from-[#d4b896]/10 group-hover:to-[#0a4d5c]/10 transition-all duration-500"></div>
            
            {/* Decorative Border */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#d4b896]/50 transition-all duration-500 rounded-2xl"></div>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
