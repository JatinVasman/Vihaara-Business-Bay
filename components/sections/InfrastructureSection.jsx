'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * InfrastructureSection Component
 * Displays infrastructure projects fueling growth
 */

const infrastructureProjects = [
  {
    id: 1,
    title: 'Taloja Bypass & Airoli-Katai Highway Expansion (2025-2026)',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L4 8v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V8l-8-6zm-2 14H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V6h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
        <path d="M2 20h20v2H2z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Thane-Mumbai MetroLine & Kalyan-Dombivli Metro (2026)',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2l2-2h4l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Mumbai-Ahmedabad Bullet Train (2028)',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2l2-2h4l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM6.5 17c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17zM17.5 17c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18 11H6V6h12v5z"/>
        <path d="M2 4h2v2H2zm18 0h2v2h-2z" opacity=".3"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Navi Mumbai International Airport (2026)',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Samruddhi Mahamarg - Faster Access to Nashik, Aurangabad, Nagpur',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm1.5-9H17V12h4.46L19.5 9.5zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4h3zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6H3z"/>
      </svg>
    )
  },
  {
    id: 6,
    title: 'Alibaug-Virar Multimodal Corridor (2028)',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/>
        <path d="M6 14h4v2H6zm8 0h4v2h-4z"/>
      </svg>
    )
  }
]

export default function InfrastructureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="infrastructure" 
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      aria-labelledby="infrastructure-heading"
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
          >
            <h2 
              id="infrastructure-heading" 
              className="text-3xl md:text-5xl font-light tracking-wider mb-4 uppercase text-[#0a4d5c]"
              style={{ fontFamily: 'serif' }}
            >
              Infrastructure Projects Fueling Growth
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto">
            Vihaara Business Bay Benefits From Game Changing Infrastructure Developments
          </motion.p>
        </div>

        {/* Infrastructure Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {infrastructureProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
              className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-[#d4b896]"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#d4b896] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f5e6d3] group-hover:text-[#0a4d5c] group-hover:shadow-lg">
                {project.icon}
              </div>

              {/* Title */}
              <div className="flex-1">
                <h3 className="text-gray-800 text-base font-medium leading-relaxed group-hover:text-[#d4b896] transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
