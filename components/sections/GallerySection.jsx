'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * GallerySection Component
 * Compact masonry-style gallery with "View all" link to contact page
 * TODO: Add actual gallery images to /public/assets/gallery/
 */

const galleryImages = [
  {
    id: 1,
    src: '/assets/gallery/exterior-1.jpg', // TODO: Add actual image
    alt: 'Vihaara Business Bay Exterior View',
    category: 'Exterior'
  },
  {
    id: 2,
    src: '/assets/gallery/lobby-1.jpg', // TODO: Add actual image
    alt: 'Elegant Lobby with Modern Design',
    category: 'Lobby'
  },
  {
    id: 3,
    src: '/assets/gallery/office-1.jpg', // TODO: Add actual image
    alt: 'Fully Furnished Office Space',
    category: 'Interior'
  },
  {
    id: 4,
    src: '/assets/gallery/amenities-1.jpg', // TODO: Add actual image
    alt: 'Premium Amenities',
    category: 'Amenities'
  },
  {
    id: 5,
    src: '/assets/gallery/rooftop-1.jpg', // TODO: Add actual image
    alt: 'Rooftop Café with Panoramic Views',
    category: 'Rooftop'
  },
  {
    id: 6,
    src: '/assets/gallery/meeting-pod-1.jpg', // TODO: Add actual image
    alt: 'Modern Meeting Pod',
    category: 'Interior'
  },
]

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" className="section-container bg-gray-50" aria-labelledby="gallery-heading">
      <div className="text-center mb-12">
        <h2 id="gallery-heading" className="heading-2 text-gray-900 mb-4">
          Gallery
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Take a visual tour of India's first Sparkle Tower
        </p>
      </div>

      {/* Masonry Grid */}
      <motion.div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${
              index === 0 ? 'md:col-span-2 md:row-span-2 h-96' : 'h-48'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* TODO: Replace with actual images */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">{image.category}</p>
              </div>
            </div>
            {/*
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            */}
            
            {/* Overlay with category */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <span className="text-sm font-semibold">{image.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Link */}
      <div className="text-center">
        <Link
          href="/contact#gallery"
          className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          View Full Gallery
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
