'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

/**
 * LocationSection Component
 * Displays connectivity information with location map
 */

export default function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openSection, setOpenSection] = useState('metro') // Default open section

  const connectivityData = {
    metro: [
      { name: 'Dombivli MIDC - 1 Minutes' },
      { name: 'Sagaon - 2 Minutes' }
    ],
    airports: [
      { name: 'Navi Mumbai Airport - 28 Km' }
    ],
    railway: [
      { name: 'Dombivli Railway Station - 2.5 Km' }
    ],
    bullet: [
      { name: 'Thane Bullet Train Station - 9.6 Km' }
    ],
    hospitality: [
      { name: 'Taj Hotel - 8 Km' }
    ],
    healthcare: [
      { name: 'Jupiter Hospital - 3 Km' }
    ]
  }

  const infrastructureProjects = [
    { text: 'Taloja Bypass & Airoli-Katai Highway Expansion (2025-2026)' },
    { text: 'Thane-Mumbai MetroLine & Kalyan-Dombivli Metro (2026)' },
    { text: 'Mumbai-Ahmedabad Bullet Train (2028)' },
    { text: 'Navi Mumbai International Airport (2026)' },
    { text: 'Samruddhi Mahamarg - Faster Access to Nashik, Aurangabad, Nagpur' },
    { text: 'Alibaug-Virar Multimodal Corridor (2028)' }
  ]

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <section 
      id="location" 
      className="py-20 bg-white relative overflow-hidden"
      aria-labelledby="location-heading"
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 
                id="location-heading" 
                className="text-3xl md:text-5xl font-light tracking-wider uppercase text-[#0a4d5c]"
                style={{ fontFamily: 'serif' }}
              >
                Connectivity
              </h2>
              <a
                href="https://maps.app.goo.gl/7qMr4LHq8t5NboS38"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#d4b896] hover:bg-[#c4a886] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                aria-label="View location on Google Maps"
                title="View on Google Maps"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              An Address That Puts You Close To Everything - Dombivli
            </p>
          </motion.div>
        </div>

        {/* Main Content - Two Columns */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Location Map Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/location-map.jpg"
                alt="Vihaara Business Bay Connectivity Map"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Right Column - Connectivity Information */}
          <div className="space-y-3">
            {/* Metro Stations */}
            <div className="border-b border-gray-300 overflow-hidden">
              <button
                onClick={() => toggleSection('metro')}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <h3 className="text-base md:text-lg font-semibold text-[#d4b896] tracking-wide">
                  Metro Stations
                </h3>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openSection === 'metro' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openSection === 'metro' ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pb-4 space-y-2">
                  {connectivityData.metro.map((item, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Railway Stations */}
            <div className="border-b border-gray-300 overflow-hidden">
              <button
                onClick={() => toggleSection('railway')}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <h3 className="text-base md:text-lg font-semibold text-[#d4b896] tracking-wide">
                  Railway Stations
                </h3>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openSection === 'railway' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openSection === 'railway' ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pb-4 space-y-2">
                  {connectivityData.railway.map((item, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Airports */}
            <div className="border-b border-gray-300 overflow-hidden">
              <button
                onClick={() => toggleSection('airports')}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <h3 className="text-base md:text-lg font-semibold text-[#d4b896] tracking-wide">
                  Airports
                </h3>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openSection === 'airports' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openSection === 'airports' ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pb-4 space-y-2">
                  {connectivityData.airports.map((item, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bullet Train */}
            <div className="border-b border-gray-300 overflow-hidden">
              <button
                onClick={() => toggleSection('bullet')}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <h3 className="text-base md:text-lg font-semibold text-[#d4b896] tracking-wide">
                  Bullet Train
                </h3>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openSection === 'bullet' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openSection === 'bullet' ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pb-4 space-y-2">
                  {connectivityData.bullet.map((item, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Hospitality */}
            <div className="border-b border-gray-300 overflow-hidden">
              <button
                onClick={() => toggleSection('hospitality')}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <h3 className="text-base md:text-lg font-semibold text-[#d4b896] tracking-wide">
                  Hospitality
                </h3>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openSection === 'hospitality' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openSection === 'hospitality' ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pb-4 space-y-2">
                  {connectivityData.hospitality.map((item, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Healthcare */}
            <div className="border-b border-gray-300 overflow-hidden">
              <button
                onClick={() => toggleSection('healthcare')}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <h3 className="text-base md:text-lg font-semibold text-[#d4b896] tracking-wide">
                  Healthcare
                </h3>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openSection === 'healthcare' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openSection === 'healthcare' ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pb-4 space-y-2">
                  {connectivityData.healthcare.map((item, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Upcoming Infrastructure */}
            <div className="border-b border-gray-300 overflow-hidden">
              <button
                onClick={() => toggleSection('infrastructure')}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <h3 className="text-base md:text-lg font-semibold text-[#d4b896] tracking-wide">
                  Upcoming Infrastructure
                </h3>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openSection === 'infrastructure' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openSection === 'infrastructure' ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pb-4 space-y-3">
                  {infrastructureProjects.map((project, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{project.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
