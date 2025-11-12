'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * TestimonialsSection Component
 * Simple carousel with client testimonials
 * TODO: Replace with actual client testimonials
 */

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Tech Solutions Pvt Ltd',
    role: 'CEO',
    text: 'Vihaara Business Bay has transformed the way we work. The premium amenities and strategic location in Dombivli make it the perfect choice for our growing team.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'Creative Minds Studio',
    role: 'Founder',
    text: 'The fully furnished offices with centralized AC and meeting pods have exceeded our expectations. A truly modern workspace that inspires productivity.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Desai',
    company: 'Financial Advisors Inc',
    role: 'Managing Partner',
    text: 'India\'s first Sparkle Tower lives up to its promise. The rooftop café and panoramic lifts add a touch of luxury that impresses our clients.',
    rating: 5
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="section-container bg-primary-50" aria-labelledby="testimonials-heading">
      <div className="text-center mb-12">
        <h2 id="testimonials-heading" className="heading-2 text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by businesses across industries
        </p>
      </div>

      {/* Testimonial Carousel */}
      <div className="max-w-4xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Quote Icon */}
            <div className="text-primary-600 mb-6">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Text */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{currentTestimonial.text}"
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${currentTestimonial.rating} out of 5 stars`}>
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Author Info */}
            <div className="border-t pt-6">
              <p className="font-bold text-gray-900 text-lg">
                {currentTestimonial.name}
              </p>
              <p className="text-gray-600">
                {currentTestimonial.role}, {currentTestimonial.company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-primary-50 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-primary-50 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
