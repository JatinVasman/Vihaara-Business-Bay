'use client'

import { useState } from 'react'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'

/**
 * ContactFull Component
 * Complete contact page with form, map, brochure downloads, and floorplans
 * TODO: Add Google Maps API key and update map coordinates
 * TODO: Add server-side validation and email integration (SendGrid/Netlify)
 */

const floorplans = [
  {
    id: 1,
    title: 'Office Suite - Type A',
    area: '450 sq.ft',
    reraArea: '41.81 sq.m',
    thumbnail: '/assets/floorplans/plan-a.jpg',
    pdf: '/assets/floorplans/plan-a.pdf',
  },
  {
    id: 2,
    title: 'Office Suite - Type B',
    area: '650 sq.ft',
    reraArea: '60.39 sq.m',
    thumbnail: '/assets/floorplans/plan-b.jpg',
    pdf: '/assets/floorplans/plan-b.pdf',
  },
  {
    id: 3,
    title: 'Office Suite - Type C',
    area: '900 sq.ft',
    reraArea: '83.61 sq.m',
    thumbnail: '/assets/floorplans/plan-c.jpg',
    pdf: '/assets/floorplans/plan-c.pdf',
  },
  {
    id: 4,
    title: 'Office Suite - Type D',
    area: '1200 sq.ft',
    reraArea: '111.48 sq.m',
    thumbnail: '/assets/floorplans/plan-d.jpg',
    pdf: '/assets/floorplans/plan-d.pdf',
  },
]

// TODO: Replace with actual project coordinates
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8542!2d73.0916!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzA2LjEiTiA3M8KwMDUnMjkuOCJF!5e0!3m2!1sen!2sin!4v1234567890"

export default function ContactFull() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-12">
        <div className="section-container text-center">
          <h1 className="heading-2 text-white mb-4">
            Contact & Brochure
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with us or download our comprehensive brochure and floor plans
          </p>
        </div>
      </section>

      {/* Main Content: Form + Map */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Form */}
          <div>
            <h2 className="heading-3 text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <ContactForm />

            {/* Contact Details */}
            <div className="mt-8 space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:9769045555" className="text-primary-600 hover:underline">
                    +91 9769045555
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:vihaarabusinessbay@gmail.com" className="text-primary-600 hover:underline">
                    vihaarabusinessbay@gmail.com
                  </a>
                </div>
              </div>

              {/* Sales Lounge Address */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sales Lounge</p>
                  <p className="text-gray-600">
                    W-69, Near DNS Bank, Opp. Aurindam Hospital,<br />
                    MIDC Phase II, Dombivli East,<br />
                    Dist. Thane, India
                  </p>
                </div>
              </div>

              {/* Corporate Office Address */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Corporate Office</p>
                  <p className="text-gray-600">
                    304–305, Shiv Plaza, IBS Road,<br />
                    Ghatkopar West, Mumbai – 400086, India
                  </p>
                </div>
              </div>

              {/* RERA */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">RERA Number</p>
                  <p className="text-gray-600">P51700080851</p>
                  <a 
                    href="http://maharera.mahaonline.gov.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline text-sm"
                  >
                    Verify on MahaRERA →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div>
            <h2 className="heading-3 text-gray-900 mb-6">
              Visit Our Office
            </h2>
            
            {/* Google Map Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Vihaara Business Bay location on Google Maps"
                title="Project Location Map"
              ></iframe>
            </div>

            {/* Directions CTA */}
            <div className="space-y-4">
              <a
                href="https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary text-center inline-block"
              >
                Get Directions
              </a>
              <a
                href="tel:9769045555"
                className="w-full btn-secondary text-center inline-block"
              >
                📞 Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            Downloads
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download our comprehensive brochure and explore detailed floor plans
          </p>
        </div>

        {/* Brochure Download */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 mb-12 text-center max-w-2xl mx-auto">
          <div className="mb-4">
            <svg className="w-16 h-16 text-primary-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Full Project Brochure
          </h3>
          <p className="text-gray-600 mb-6">
            Comprehensive guide with project details, amenities, floor plans, and pricing
          </p>
          <a
            href="/download/Vihaara-Business-Bay-Brochure.pdf"
            download
            className="btn-primary inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Brochure (PDF)
          </a>
        </div>

        {/* Floor Plans Grid */}
        <div>
          <h3 className="heading-3 text-gray-900 mb-8 text-center">
            Floor Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {floorplans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  {/* TODO: Replace with actual image */}
                  <svg className="w-16 h-16 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>

                {/* Details */}
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">
                    {plan.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-medium text-primary-600">
                      {plan.area}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({plan.reraArea})
                    </span>
                  </div>
                  <a
                    href={plan.pdf}
                    download
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview - Full gallery section for contact page */}
      <section id="gallery" className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore more images of Vihaara Business Bay
          </p>
        </div>
        
        {/* TODO: Add full gallery grid here with more images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-8 text-sm">
          TODO: Add actual gallery images to /public/assets/gallery/
        </p>
      </section>

      {/* Server-side TODO Note */}
      {/* 
      TODO: Implement server-side validation and email integration
      
      1. Server-side Form Validation:
         - Add API route validation in /app/api/contact/route.js
         - Validate all required fields (name, email, message)
         - Sanitize inputs to prevent XSS attacks
         - Rate limiting to prevent spam
      
      2. Email Integration Options:
         a) SendGrid:
            - Install: npm install @sendgrid/mail
            - Add SENDGRID_API_KEY to .env.local
            - Configure email template
         
         b) Netlify Functions:
            - Create netlify/functions/send-email.js
            - Use Netlify Forms or SendGrid
            - Add form-name attribute to form
         
         c) Resend (Modern alternative):
            - Install: npm install resend
            - Add RESEND_API_KEY to .env.local
            - Configure from/to addresses
      
      3. Success/Error Handling:
         - Log submissions to database/spreadsheet
         - Send auto-reply to user
         - Notify admin of new submission
      */}
    </div>
  )
}
