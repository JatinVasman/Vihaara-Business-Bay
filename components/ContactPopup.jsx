'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ContactPopup Component
 * Auto-popup contact form that appears on first visit
 * Can also be triggered manually via showEnquiryPopup custom event
 * Sends notifications via email/WhatsApp
 */
export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    enableWhatsApp: true
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  useEffect(() => {
    // Listen for manual trigger from Enquiry button
    const handleShowPopup = () => {
      console.log('Enquiry popup triggered!') // Debug log
      setIsOpen(true)
    }
    
    window.addEventListener('showEnquiryPopup', handleShowPopup)
    
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('vihaara_contact_popup_seen')
    
    if (!hasSeenPopup) {
      // Show popup after 2 seconds delay
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000)
      
      return () => {
        clearTimeout(timer)
        window.removeEventListener('showEnquiryPopup', handleShowPopup)
      }
    }
    
    return () => {
      window.removeEventListener('showEnquiryPopup', handleShowPopup)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Mark popup as seen so it doesn't show again
    localStorage.setItem('vihaara_contact_popup_seen', 'true')
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact-popup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Close popup after 2 seconds
        setTimeout(() => {
          handleClose()
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-[#d4b896] to-[#f5e6d3] px-6 py-8 relative">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-[#0a4d5c]/80 hover:text-[#0a4d5c] transition-colors"
                  aria-label="Close popup"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <h2 className="text-2xl md:text-3xl font-bold text-[#0a4d5c] mb-2 text-center">
                  Contact Us
                </h2>
                <p className="text-[#0a4d5c]/90 text-center text-sm">
                  Get exclusive updates about Vihaara Business Bay
                </p>
              </div>

              {/* Form */}
              <div className="px-6 py-6">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="popup-name" className="sr-only">Name</label>
                      <input
                        type="text"
                        id="popup-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4b896] focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="popup-email" className="sr-only">Email</label>
                      <input
                        type="email"
                        id="popup-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4b896] focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    {/* Mobile */}
                    <div>
                      <label htmlFor="popup-mobile" className="sr-only">Mobile</label>
                      <input
                        type="tel"
                        id="popup-mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile*"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4b896] focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    {/* WhatsApp Checkbox */}
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="popup-whatsapp"
                        name="enableWhatsApp"
                        checked={formData.enableWhatsApp}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#d4b896] border-gray-300 rounded focus:ring-[#d4b896]"
                      />
                      <label htmlFor="popup-whatsapp" className="text-sm text-gray-700 cursor-pointer">
                        Enable updates through WhatsApp
                      </label>
                    </div>

                    {/* Error Message */}
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#d4b896] hover:bg-[#f5e6d3] text-[#0a4d5c] font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-[#0a4d5c]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'SUBMIT'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
