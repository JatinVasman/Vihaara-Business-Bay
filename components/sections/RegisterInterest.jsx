'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * RegisterInterest Component
 * Appears after Hero section - Quick contact form to register interest
 */
export default function RegisterInterest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    enableWhatsApp: true
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

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

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          mobile: '',
          enableWhatsApp: true
        })
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border-4 border-[#d4b896]">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a4d5c] mb-2">
                Vihaara Business Bay
              </h2>
              <p className="text-gray-600 text-lg">
                Register Your Interest
              </p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center"
              >
                <p className="font-semibold">Thank you for your interest!</p>
                <p className="text-sm">We'll contact you soon.</p>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 bg-white rounded-lg border-2 border-gray-900 focus:border-[#0a4d5c] outline-none transition-all text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-white rounded-lg border-2 border-gray-900 focus:border-[#0a4d5c] outline-none transition-all text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Mobile */}
              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile*"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                  className="w-full px-4 py-3 bg-white rounded-lg border-2 border-gray-900 focus:border-[#0a4d5c] outline-none transition-all text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* WhatsApp Checkbox */}
              <div className="flex items-center gap-2 text-[#0a4d5c]">
                <input
                  type="checkbox"
                  id="register-whatsapp"
                  name="enableWhatsApp"
                  checked={formData.enableWhatsApp}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#0a4d5c] border-gray-300 rounded focus:ring-[#0a4d5c] bg-white"
                />
                <label htmlFor="register-whatsapp" className="text-sm cursor-pointer">
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
                className="w-full bg-[#d4b896] hover:bg-[#d4b896]/90 text-[#0a4d5c] font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
