'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

/**
 * Hero Component
 * Full-width hero section with background image, headline, and CTAs
 * Source: Project Information.docx and Vihaara Business Bay Brochure
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

  return (
    <section 
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero/hero-build.png"
          alt="Vihaara Business Bay - India's First Sparkle Tower in Dombivli"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" aria-hidden="true" />
        
        {/* Shimmer effect overlay */}
        {!prefersReducedMotion && (
          <div className="shimmer-overlay opacity-20" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider text-white mb-4 sm:mb-6 uppercase" style={{ fontFamily: 'serif' }}>
          Vihaara Business Bay
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#d4b896] mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          India's First Sparkle Tower in Dombivli
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/#contact"
            className="px-10 py-4 bg-[#d4b896] text-[#0a4d5c] font-semibold rounded-lg shadow-lg hover:bg-[#f5e6d3] hover:scale-105 transition-all duration-300 text-lg"
            aria-label="Contact Vihaara Business Bay"
          >
            Contact Us
          </a>
          
          <a
            href="/Vihaara Business Bay.pdf"
            download
            className="px-10 py-4 bg-transparent text-[#d4b896] font-semibold rounded-lg border-2 border-[#d4b896] hover:bg-[#d4b896] hover:text-[#0a4d5c] hover:scale-105 transition-all duration-300 text-lg flex items-center gap-3"
            aria-label="Download Vihaara Business Bay brochure"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  )
}
