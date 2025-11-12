'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

/**
 * Hero Component
 * Full-width hero section with background image, headline, and CTAs
 * Includes accessibility features and reduced motion support
 */
export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Animation variants (disabled if user prefers reduced motion)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6 }
    }
  }

  return (
    <section 
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero/hero-build.webp" // TODO: Replace with actual hero image
          alt="Vihaara Business Bay - India's First Sparkle Tower in Dombivli"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" aria-hidden="true" />
        
        {/* Shimmer effect (decorative) */}
        <div className="absolute inset-0 shimmer-overlay opacity-20" aria-hidden="true" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="heading-1 text-white mb-6">
            India's First <span className="text-accent-500">Sparkle Tower</span>
            <br />
            <span className="text-primary-400">in Dombivli</span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Experience Premium Commercial Spaces with World-Class Amenities
        </motion.p>

        <motion.p 
          className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {/* TODO: Replace with actual tagline from brochure */}
          Your Gateway to Prestigious Business Address in the Heart of Dombivli
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <a
            href="tel:9769045555"
            className="btn-primary w-full sm:w-auto text-center"
            aria-label="Call to book a visit to Vihaara Business Bay"
          >
            📞 Book a Visit
          </a>
          
          <a
            href="/assets/brochure.pdf" // TODO: Add actual brochure PDF to public/assets/
            download
            className="btn-secondary w-full sm:w-auto text-center"
            aria-label="Download Vihaara Business Bay brochure"
          >
            📥 Download Brochure
          </a>
        </motion.div>

        {/* Quick Info Badges */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-6 text-white"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-2xl" aria-hidden="true">🏢</span>
            <span className="text-sm md:text-base font-semibold">Premium Commercial Spaces</span>
          </div>
          
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-2xl" aria-hidden="true">📍</span>
            <span className="text-sm md:text-base font-semibold">Strategic Location</span>
          </div>
          
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-2xl" aria-hidden="true">✨</span>
            <span className="text-sm md:text-base font-semibold">Sparkle Tower Design</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: prefersReducedMotion ? 0 : 1, 
          delay: prefersReducedMotion ? 0 : 1,
          repeat: prefersReducedMotion ? 0 : Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="flex flex-col items-center text-white" aria-hidden="true">
          <span className="text-xs uppercase tracking-wider mb-2">Scroll Down</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
