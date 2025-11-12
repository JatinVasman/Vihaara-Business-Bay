'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * ContactPreview Component
 * Small contact card with quick contact info and email form
 * Displayed at the bottom of main landing page
 */
export default function ContactPreview() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create email subject and body
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )
    
    // Open email client with pre-filled data
    window.location.href = `mailto:vihaarabusinessbay@gmail.com?subject=${subject}&body=${body}`
    
    // Reset form
    setFormData({ name: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" aria-labelledby="contact-preview-heading">
      {/* Elegant accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4b896] to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="contact-preview-heading" 
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider text-[#0a4d5c] mb-4 uppercase"
            style={{ fontFamily: 'serif' }}
          >
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your business? Contact us today for a site visit and discover why Vihaara Business Bay is the perfect choice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            
            {/* Left: Contact Info Cards */}
            <div className="space-y-6">
              {/* Phone Card */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-2 border-[#d4b896] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#d4b896] p-3 sm:p-4 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Call Us</p>
                    <a href="tel:9769045555" className="text-lg sm:text-xl font-semibold text-[#0a4d5c] hover:text-[#d4b896] transition-colors block">
                      +91 9769045555
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-2 border-[#d4b896] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#d4b896] p-3 sm:p-4 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Email Us</p>
                    <a href="mailto:vihaarabusinessbay@gmail.com" className="text-sm sm:text-base md:text-lg font-semibold text-[#0a4d5c] hover:text-[#d4b896] transition-colors break-all block">
                      vihaarabusinessbay@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Sales Lounge Address Card */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-2 border-[#d4b896] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#d4b896] p-3 sm:p-4 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-xs sm:text-sm text-[#0a4d5c] font-semibold mb-2">Sales Lounge</p>
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                      W69, Opp. Aurindam Hospital, Near DNS Bank,<br className="hidden sm:inline" />
                      MIDC Phase II, Dombivli East, Thane, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Corporate Office Card */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-2 border-[#d4b896] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#d4b896] p-3 sm:p-4 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-xs sm:text-sm text-[#0a4d5c] font-semibold mb-2">Corporate Office</p>
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                      304–305, Shiv Plaza, IBS Road,<br className="hidden sm:inline" />
                      Ghatkopar West, Mumbai – 400086, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-xl border-2 border-[#d4b896]">
              <h3 className="text-2xl font-light tracking-wide text-[#0a4d5c] mb-6 uppercase" style={{ fontFamily: 'serif' }}>
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:border-[#d4b896] focus:bg-white transition-all duration-200 text-gray-900"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:border-[#d4b896] focus:bg-white transition-all duration-200 text-gray-900"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:border-[#d4b896] focus:bg-white transition-all duration-200 text-gray-900 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#d4b896] text-white font-semibold rounded-lg shadow-lg hover:bg-[#0a4d5c] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </button>
              </form>
            </div>

          </div>
      </div>
    </section>
  )
}
