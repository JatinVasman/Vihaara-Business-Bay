'use client'

import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

/**
 * ContactForm Component
 * Client-side validated contact form that submits to /api/contact
 */

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  // Validate form
  const validate = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Reset status
    setSubmitStatus(null)

    // Validate
    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await axios.post('/api/contact', formData)
      
      if (response.data.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      noValidate
    >
      <h2 className="heading-3 text-gray-900 mb-6 text-center">
        Get in Touch
      </h2>
      
      <p className="text-gray-600 mb-8 text-center">
        Fill out the form below and our team will get back to you within 24 hours
      </p>

      {/* Name Field */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
            errors.name 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:ring-primary-500'
          }`}
          placeholder="Enter your full name"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
            errors.email 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:ring-primary-500'
          }`}
          placeholder="your.email@example.com"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
            errors.phone 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:ring-primary-500'
          }`}
          placeholder="9876543210"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
            errors.message 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:ring-primary-500'
          }`}
          placeholder="Tell us about your requirements..."
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full btn-primary ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
          role="alert"
        >
          ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
          role="alert"
        >
          ❌ Oops! Something went wrong. Please try again or call us directly.
        </motion.div>
      )}
    </motion.form>
  )
}
