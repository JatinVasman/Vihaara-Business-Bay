'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * GalleryGrid Component
 * Responsive image gallery with lightbox modal
 * Images loaded from public/assets/gallery/
 */

// TODO: Replace with actual gallery images from Google Drive
const galleryImages = [
  {
    id: 1,
    src: '/assets/gallery/sample-1.webp',
    alt: 'Vihaara Business Bay exterior view',
    title: 'Building Exterior'
  },
  {
    id: 2,
    src: '/assets/gallery/sample-1.webp', // Duplicate for demo - replace with actual images
    alt: 'Modern office space interior',
    title: 'Office Interior'
  },
  {
    id: 3,
    src: '/assets/gallery/sample-1.webp',
    alt: 'Lobby and reception area',
    title: 'Grand Lobby'
  },
  {
    id: 4,
    src: '/assets/gallery/sample-1.webp',
    alt: 'Conference room facilities',
    title: 'Conference Room'
  },
  {
    id: 5,
    src: '/assets/gallery/sample-1.webp',
    alt: 'Parking facility',
    title: 'Parking Area'
  },
  {
    id: 6,
    src: '/assets/gallery/sample-1.webp',
    alt: 'Landscaped gardens',
    title: 'Green Spaces'
  },
  {
    id: 7,
    src: '/assets/gallery/sample-1.webp',
    alt: 'Night view of the building',
    title: 'Night View'
  },
  {
    id: 8,
    src: '/assets/gallery/sample-1.webp',
    alt: 'Food court area',
    title: 'Food Court'
  },
]

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openLightbox = (image) => {
    setSelectedImage(image)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction) => {
    if (!selectedImage) return
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    }
    
    setSelectedImage(galleryImages[newIndex])
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!selectedImage) return
    
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') navigateImage('next')
    if (e.key === 'ArrowLeft') navigateImage('prev')
  }

  return (
    <section className="section-container" aria-labelledby="gallery-heading">
      <div className="text-center mb-12">
        <h2 id="gallery-heading" className="heading-2 text-gray-900 mb-4">
          Photo Gallery
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the stunning architecture and premium facilities
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => openLightbox(image)}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(image)}
            tabIndex={0}
            role="button"
            aria-label={`View ${image.title} in lightbox`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                {image.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
              className="absolute left-4 text-white hover:text-gray-300 z-10 p-2"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              className="relative max-w-7xl max-h-[90vh] w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              
              {/* Image title */}
              <h3 id="lightbox-title" className="text-white text-center mt-4 text-xl font-semibold">
                {selectedImage.title}
              </h3>
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
              className="absolute right-4 text-white hover:text-gray-300 z-10 p-2"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
