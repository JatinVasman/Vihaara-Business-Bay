'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

/**
 * AboutSection Component
 * Displays project vision, highlights, and key statistics with exceptional features showcase
 */
export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFeature, setActiveFeature] = useState(0)

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
          {/* Project Description - Centered */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Heading & Description */}
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
              <p className="text-base sm:text-lg text-[#d4b896] opacity-90 mb-8">
                Ideal for IT firms, consultancies, start-ups and large enterprises.
              </p>

              {/* Know More Button */}
              <button
                onClick={() => {
                  console.log('About Know More button clicked!')
                  const event = new CustomEvent('showEnquiryPopup')
                  window.dispatchEvent(event)
                }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#d4b896] text-white rounded-lg hover:bg-[#c4a886] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
              >
                <span>Know More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>

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
