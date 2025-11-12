'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

/**
 * AboutSection Component
 * Displays project vision, highlights, and key statistics with exceptional features showcase
 */
export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFeature, setActiveFeature] = useState(0)
  const [showLocationMap, setShowLocationMap] = useState(false)
  const [zoom, setZoom] = useState(1)

  // Prevent body scroll and hide navbar when map is open
  useEffect(() => {
    if (showLocationMap) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('lightbox-open')
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('lightbox-open')
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('lightbox-open')
    }
  }, [showLocationMap])

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 2))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 1))
  }

  const handleCloseMap = () => {
    setShowLocationMap(false)
    setZoom(1)
  }

  const exceptionalFeatures = [
    {
      number: '1',
      title: 'Dubai-inspired Facade',
      description: 'Experience world-class architecture with an elegant corporate finish that makes a powerful statement.',
      icon: '🏢'
    },
    {
      number: '2',
      title: 'Fully Furnished & Air-Conditioned',
      description: 'Move-in ready offices with premium furnishings and climate control for maximum comfort and productivity.',
      icon: '❄️'
    },
    {
      number: '3',
      title: 'East-West Facing Layouts',
      description: 'Benefit from ample natural light throughout the day, reducing energy costs and creating a vibrant workspace.',
      icon: '☀️'
    },
    {
      number: '4',
      title: 'Modern Amenities',
      description: 'Thoughtfully designed spaces that cater to both collaborative teamwork and focused individual productivity.',
      icon: '⚡'
    },
    {
      number: '5',
      title: 'Integrated Ecosystem',
      description: 'A perfect blend of work and lifestyle amenities, creating a holistic environment for success.',
      icon: '🌟'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden" aria-labelledby="about-heading">
      {/* Elegant accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4b896] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content - About the Project */}
        <div className="mb-16">
          {/* Project Description with Location Map - Side by Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Heading & Description */}
              <div className="text-left">
                <h2 
                  id="about-heading" 
                  className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider text-[#0a4d5c] mb-4 sm:mb-6 uppercase"
                  style={{ fontFamily: 'serif' }}
                >
                  About the Project
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
                  Vihaara Business Bay redefines workspace standards in Dombivli. This <strong className="text-[#0a4d5c]">6-storey iconic structure</strong> has been designed keeping today's dynamic corporate needs in mind—blending elegance, efficiency and functionality.
                </p>
                <p className="text-base sm:text-lg text-[#d4b896] opacity-90">
                  Ideal for IT firms, consultancies, start-ups and large enterprises.
                </p>
              </div>

              {/* Right Column - Location Map Image */}
              <div className="relative">
                <div 
                  className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                  onClick={() => setShowLocationMap(true)}
                >
                  <Image
                    src="/assets/location-map.jpg"
                    alt="Vihaara Business Bay Location Map"
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={100}
                    priority
                  />
                  {/* Click to Enlarge Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white bg-opacity-0 group-hover:bg-opacity-90 px-4 py-2 rounded-lg transition-all duration-300">
                      <p className="text-gray-900 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        Click to Enlarge
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Map Lightbox Modal */}
          <AnimatePresence>
            {showLocationMap && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
                onClick={handleCloseMap}
                role="dialog"
                aria-modal="true"
                aria-labelledby="map-title"
              >
                {/* Header with Controls */}
                <div className="flex items-center justify-between p-4 gap-4">
                  {/* Zoom Controls */}
                  <div className="flex items-center gap-2 bg-white rounded-full p-2 shadow-lg">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleZoomOut()
                      }}
                      disabled={zoom <= 1}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Zoom out"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                      </svg>
                    </button>
                    <span className="text-xs md:text-sm font-medium px-1 md:px-2 min-w-[50px] md:min-w-[60px] text-center">
                      {Math.round(zoom * 100)}%
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleZoomIn()
                      }}
                      disabled={zoom >= 2}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Zoom in"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </button>
                  </div>

                  {/* Title - Hidden on mobile */}
                  <h3 id="map-title" className="hidden md:block text-lg text-white font-semibold flex-1 text-center">
                    Location Map
                  </h3>

                  {/* Close Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCloseMap()
                    }}
                    className="bg-white hover:bg-gray-100 rounded-full p-2 md:p-3 transition-colors"
                    aria-label="Close preview"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Image Container with Scroll */}
                <div 
                  className="flex-1 overflow-auto bg-white mx-2 md:mx-4 mb-2 md:mb-4 rounded-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div 
                    className="w-full h-full flex items-start justify-center p-2 md:p-4"
                    style={{ 
                      minWidth: `${zoom * 100}%`,
                      minHeight: `${zoom * 100}%`,
                    }}
                  >
                    <Image
                      src="/assets/location-map.jpg"
                      alt="Vihaara Business Bay Location Map"
                      width={1920}
                      height={1080}
                      className="w-full h-auto object-contain"
                      style={{
                        transform: `scale(${zoom})`,
                        transformOrigin: 'top center',
                      }}
                      quality={100}
                      priority
                    />
                  </div>
                </div>

                {/* Footer - Mobile title */}
                <div className="md:hidden px-4 pb-4 text-center">
                  <p className="text-white font-semibold">Location Map</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Exceptional Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl md:text-4xl font-light tracking-wider text-[#0a4d5c] mb-12 text-center uppercase" style={{ fontFamily: 'serif' }}>
              What Makes It Exceptional?
            </h3>
            
            {/* Feature Display Cards - Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {exceptionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  onMouseEnter={() => setActiveFeature(index)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? 'bg-white border-[#d4b896] shadow-2xl transform scale-105'
                      : 'bg-white border-gray-200 hover:border-[#d4b896] hover:shadow-lg'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                      activeFeature === index
                        ? 'bg-[#d4b896] text-white shadow-lg scale-110'
                        : 'bg-gray-100 text-[#0a4d5c]'
                    }`}>
                      {feature.number}
                    </div>
                    <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                      activeFeature === index ? 'text-[#0a4d5c] text-lg' : 'text-gray-800 text-base'
                    }`}>
                      {feature.title}
                    </h4>
                    <p className={`text-sm leading-relaxed transition-all duration-300 ${
                      activeFeature === index 
                        ? 'text-gray-700' 
                        : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
