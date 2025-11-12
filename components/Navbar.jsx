'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/lib/siteMeta'

/**
 * Navbar Component - Two-Route Aware Navigation
 * Left: Logo (links to '/')
 * Center/Right: Navigation links
 * Sticky with backdrop blur and subtle shadow
 * Mobile hamburger menu
 */

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-md border-b border-[#d4b896]/30" 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
            aria-label="Vihaara Business Bay Home"
          >
            <Image
              src="/Logo/Black_PNG.png"
              alt="Vihaara Business Bay Logo"
              width={280}
              height={95}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black hover:text-[#d4b896] font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4b896] rounded px-2 py-1"
              >
                {link.label}
              </a>
            ))}

            {/* Download Brochure Button */}
            <a
              href="/Vihaara Business Bay.pdf"
              download
              className="px-6 py-2.5 bg-[#d4b896] text-[#0a4d5c] font-semibold rounded-lg shadow-lg hover:bg-[#f5e6d3] hover:scale-105 transition-all duration-300 text-sm md:text-base flex items-center gap-2"
              aria-label="Download Vihaara Business Bay brochure"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Brochure
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-black hover:bg-[#d4b896]/10 focus:outline-none focus:ring-2 focus:ring-[#d4b896]"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#d4b896]/30">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-[#d4b896] hover:bg-[#d4b896]/10 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Vihaara Business Bay.pdf"
                download
                className="px-6 py-3 bg-[#d4b896] text-[#0a4d5c] font-semibold rounded-lg shadow-lg hover:bg-[#f5e6d3] transition-all duration-300 mx-4 text-center flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Download Vihaara Business Bay brochure"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Brochure
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

