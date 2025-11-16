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

      {/* Interiors & Amenities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light tracking-wider text-[#0a4d5c] mb-4 uppercase" style={{ fontFamily: 'serif' }}>
              Interiors & Amenities
            </h3>
          </div>

          {/* Amenities Grid - Single Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {/* Fully Furnished Offices */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#d4b896] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-[#f5e6d3] group-hover:text-[#0a4d5c] mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12z"/>
                  <rect x="6" y="6" width="3" height="3"/>
                  <rect x="11" y="6" width="3" height="3"/>
                  <rect x="16" y="6" width="2" height="3"/>
                </svg>
              </div>
              <h3 className="text-gray-700 text-sm md:text-base font-medium leading-snug group-hover:text-[#d4b896] transition-colors duration-300">
                Fully Furnished Offices
              </h3>
            </div>

            {/* Meeting Pods */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#d4b896] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-[#f5e6d3] group-hover:text-[#0a4d5c] mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  <circle cx="7" cy="8" r="1.5"/>
                  <circle cx="17" cy="8" r="1.5"/>
                  <circle cx="12" cy="13" r="1.5"/>
                </svg>
              </div>
              <h3 className="text-gray-700 text-sm md:text-base font-medium leading-snug group-hover:text-[#d4b896] transition-colors duration-300">
                Meeting Pods
              </h3>
            </div>

            {/* 24*7 Power Backup, Water Supply & EV Charger */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#d4b896] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-[#f5e6d3] group-hover:text-[#0a4d5c] mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/>
                </svg>
              </div>
              <h3 className="text-gray-700 text-sm md:text-base font-medium leading-snug group-hover:text-[#d4b896] transition-colors duration-300">
                24*7 Power Backup, Water Supply & EV Charger
              </h3>
            </div>

            {/* Rooftop Cafe/Restaurant */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#d4b896] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-[#f5e6d3] group-hover:text-[#0a4d5c] mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 5h-3V2h-2v3h-2V2h-2v3H9V2H7v3H4v6h16V5zm0 8H4v6h16v-6zm-2 4H6v-2h12v2z"/>
                  <circle cx="8" cy="8" r="1"/>
                  <circle cx="12" cy="8" r="1"/>
                  <circle cx="16" cy="8" r="1"/>
                </svg>
              </div>
              <h3 className="text-gray-700 text-sm md:text-base font-medium leading-snug group-hover:text-[#d4b896] transition-colors duration-300">
                Rooftop Cafe/Restaurant
              </h3>
            </div>

            {/* Smart Entry & Surveillance */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#d4b896] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-[#f5e6d3] group-hover:text-[#0a4d5c] mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"/>
                  <circle cx="12" cy="12" r="2"/>
                  <path d="M18 9h2v2h-2zM4 9h2v2H4z"/>
                </svg>
              </div>
              <h3 className="text-gray-700 text-sm md:text-base font-medium leading-snug group-hover:text-[#d4b896] transition-colors duration-300">
                Smart Entry & Surveillance
              </h3>
            </div>

            {/* Professional Building Management Team */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#d4b896] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-[#f5e6d3] group-hover:text-[#0a4d5c] mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14h2v2h-2v-2zm0-8h2v6h-2V8z"/>
                  <circle cx="12" cy="9" r="1.5"/>
                  <path d="M9 17h6v1H9z"/>
                </svg>
              </div>
              <h3 className="text-gray-700 text-sm md:text-base font-medium leading-snug group-hover:text-[#d4b896] transition-colors duration-300">
                Professional Building Management Team
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
