'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * AmenitiesGrid Component
 * Displays amenities in a responsive grid with staggered animations
 * Uses emoji placeholders for icons (replace with actual icons/images)
 */

// TODO: Replace with actual amenities from Vihaara Business Bay brochure
const amenities = [
  {
    id: 1,
    icon: '🏢',
    title: 'Premium Offices',
    description: 'Spacious commercial office spaces designed for modern businesses with natural lighting and ventilation.'
  },
  {
    id: 2,
    icon: '🚗',
    title: 'Ample Parking',
    description: 'Multi-level parking facility with dedicated spaces for visitors and staff with 24/7 security.'
  },
  {
    id: 3,
    icon: '🔒',
    title: '24/7 Security',
    description: 'Advanced security systems with CCTV surveillance, access control, and trained security personnel.'
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Power Backup',
    description: '100% power backup with high-capacity generators ensuring uninterrupted business operations.'
  },
  {
    id: 5,
    icon: '🏗️',
    title: 'Modern Design',
    description: 'Contemporary architecture with premium finishes and India\'s first sparkle tower facade.'
  },
  {
    id: 6,
    icon: '📡',
    title: 'High-Speed Internet',
    description: 'Fiber optic connectivity ready infrastructure for seamless high-speed internet access.'
  },
  {
    id: 7,
    icon: '❄️',
    title: 'Climate Control',
    description: 'Centralized air conditioning system with individual zone controls for optimal comfort.'
  },
  {
    id: 8,
    icon: '🌳',
    title: 'Green Spaces',
    description: 'Landscaped gardens and green zones promoting a healthy and refreshing work environment.'
  },
  {
    id: 9,
    icon: '🍽️',
    title: 'Food Court',
    description: 'In-house food court with multiple dining options for convenience and variety.'
  },
  {
    id: 10,
    icon: '🚿',
    title: 'Premium Washrooms',
    description: 'Luxury washroom facilities with premium fixtures and 24/7 housekeeping services.'
  },
  {
    id: 11,
    icon: '🔥',
    title: 'Fire Safety',
    description: 'Advanced fire detection and suppression systems with emergency evacuation protocols.'
  },
  {
    id: 12,
    icon: '♿',
    title: 'Accessibility',
    description: 'Ramps, elevators, and specially designed facilities ensuring accessibility for all.'
  },
]

export default function AmenitiesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="section-container" aria-labelledby="amenities-heading">
      <div className="text-center mb-12">
        <h2 id="amenities-heading" className="heading-2 text-gray-900 mb-4">
          World-Class Amenities
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience premium facilities designed to elevate your business environment
        </p>
      </div>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {amenities.map((amenity) => (
          <motion.article
            key={amenity.id}
            className="card group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            >
              {amenity.icon}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {amenity.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {amenity.description}
            </p>
          </motion.article>
        ))}
      </motion.div>

      {/* Additional Information */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 italic">
          * Amenities are subject to availability and may vary. Please contact us for detailed information.
        </p>
      </div>
    </section>
  )
}
