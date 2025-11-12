'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * AmenitiesSection Component
 * Elegant amenities showcase with circular icons
 */

const amenities = [
  {
    id: 1,
    title: 'Fully Furnished Offices',
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12z"/>
        <rect x="6" y="6" width="3" height="3"/>
        <rect x="11" y="6" width="3" height="3"/>
        <rect x="16" y="6" width="2" height="3"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Meeting Pods',
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        <circle cx="7" cy="8" r="1.5"/>
        <circle cx="17" cy="8" r="1.5"/>
        <circle cx="12" cy="13" r="1.5"/>
      </svg>
    )
  },
  {
    id: 3,
    title: '24*7 Power Backup, Water Supply & EV Charger',
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Rooftop Cafe/Restaurant',
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 5h-3V2h-2v3h-2V2h-2v3H9V2H7v3H4v6h16V5zm0 8H4v6h16v-6zm-2 4H6v-2h12v2z"/>
        <circle cx="8" cy="8" r="1"/>
        <circle cx="12" cy="8" r="1"/>
        <circle cx="16" cy="8" r="1"/>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Smart Entry & Surveillance',
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M18 9h2v2h-2zM4 9h2v2H4z"/>
      </svg>
    )
  },
  {
    id: 6,
    title: 'Professional Building Management Team',
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14h2v2h-2v-2zm0-8h2v6h-2V8z"/>
        <circle cx="12" cy="9" r="1.5"/>
        <path d="M9 17h6v1H9z"/>
      </svg>
    )
  }
]

export default function AmenitiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="amenities" 
      className="py-20 bg-white relative overflow-hidden"
      aria-labelledby="amenities-heading"
    >
      {/* Elegant accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4b896] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <h2 
              id="amenities-heading" 
              className="text-4xl md:text-5xl font-light tracking-wider text-[#0a4d5c] mb-4 uppercase"
              style={{ fontFamily: 'serif' }}
            >
              Interiors & Amenities
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Vihaara Business Bay Is Designed With A People-First Philosophy,
            <br />
            Enhancing User Comfort And Work-Life Balance.
          </motion.p>
        </div>

        {/* Amenities Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
              className="flex items-center gap-6 group"
            >
              {/* Circular Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#d4b896] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-[#f5e6d3] group-hover:text-[#0a4d5c]">
                  {amenity.icon}
                </div>
              </div>

              {/* Title */}
              <div className="flex-1">
                <h3 className="text-gray-700 text-base md:text-lg font-medium leading-snug group-hover:text-[#d4b896] transition-colors duration-300">
                  {amenity.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
