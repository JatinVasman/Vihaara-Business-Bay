'use client'

import { useState } from 'react'
import Link from 'next/link'
import { navLinks } from '@/lib/siteMeta'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
            aria-label="Vihaara Business Bay Home"
          >
            {/* TODO: Replace with actual logo from public/Logo/ */}
            <div className="text-xl md:text-2xl font-bold text-primary-600">
              <span className="text-primary-700">Vihaara</span>
              <span className="text-accent-600"> Business Bay</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <a
              href="tel:9769045555"
              className="btn-primary text-sm md:text-base"
              aria-label="Call to book a site visit"
            >
              Book a Site Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:9769045555"
                className="btn-primary mx-4 text-center"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Call to book a site visit"
              >
                Book a Site Visit
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
