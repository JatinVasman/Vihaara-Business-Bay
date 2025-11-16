'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

/**
 * FloorplansSection Component
 * Displays floorplan thumbnails with lightbox preview and PDF download
 * Floor plans displayed in landscape format with detailed information
 */

const floorplans = [
  {
    id: 1,
    title: 'Basement Floor Plan',
    floors: 'Basement Level',
    thumbnail: '/assets/floorplans/basement.jpg',
    features: [
      'Modern, Energy-efficient Construction',
      'High Ceiling (14 Ft Lobby And 10+ Ft Office Height)',
    ],
    storageUnits: [
      { no: 'STORAGE-1', area: '1028.60 sq.ft' },
      { no: 'STORAGE-2', area: '855.84 sq.ft' },
      { no: 'STORAGE-3', area: '300.20 sq.ft' },
    ]
  },
  {
    id: 2,
    title: 'Ground Floor Plan',
    floors: 'Ground Level',
    thumbnail: '/assets/floorplans/ground-floor.jpg',
    features: [
      'Spacious Floor Plates With Modular Layouts',
      'Smart Energy & Water-saving Provisions',
    ],
    shops: [
      { no: 'SHOP-1', area: '1160.25 sq.ft (RERA C.A 107.81 sq.ft)' },
    ]
  },
  {
    id: 3,
    title: 'Typical Floors Plan',
    floors: '1st to 5th Floor',
    thumbnail: '/assets/floorplans/typical-floors.jpg',
    features: [
      'Flexible Office Layouts',
      'High-Quality Commercial Spaces',
    ],
    offices: [
      { no: 'OFFICE-1', area: '374.80' },
      { no: 'OFFICE-2', area: '271.47' },
      { no: 'OFFICE-3', area: '202.69' },
      { no: 'OFFICE-4', area: '380.83' },
      { no: 'OFFICE-5', area: '328.19' },
      { no: 'OFFICE-6', area: '207.10' },
      { no: 'OFFICE-7', area: '227.98' },
      { no: 'OFFICE-8', area: '237.45' },
      { no: 'OFFICE-9', area: '323.46' },
    ]
  },
  {
    id: 4,
    title: 'Terrace Floor Plan',
    floors: 'Terrace Level',
    thumbnail: '/assets/floorplans/terrace.jpg',
    features: [
      'Premium Rooftop Amenities',
      'Spacious Restaurant & Lobby Area',
    ],
    areas: [
      { name: 'RESTAURANT + LOBBY', area: '3961.25' },
    ]
  },
]

export default function FloorplansSection() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [zoom, setZoom] = useState(1)

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('lightbox-open')
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('lightbox-open')
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('lightbox-open')
    }
  }, [selectedPlan])

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 2))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 1))
  }

  const handleCloseLightbox = () => {
    setSelectedPlan(null)
    setZoom(1)
  }

  return (
    <section id="floorplans" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" aria-labelledby="floorplans-heading">
      {/* Elegant accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4b896] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 
            id="floorplans-heading" 
            className="text-4xl md:text-5xl font-light tracking-wider text-[#0a4d5c] mb-4 uppercase"
            style={{ fontFamily: 'serif' }}
          >
            Floor Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore Our Meticulously Designed Commercial Spaces
          </p>
        </div>

      {/* Floorplans List */}
      <div className="space-y-8 max-w-6xl mx-auto">
        {floorplans.map((plan) => (
          <motion.article
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#d4b896]"
          >
            <div className="grid lg:grid-cols-3 gap-6 p-6">
              {/* Left: Floor Plan Image (Landscape) */}
              <div className="lg:col-span-2">
                <div 
                  className="relative h-80 lg:h-96 bg-gray-50 rounded-xl overflow-hidden cursor-pointer group border-2 border-gray-200"
                  onClick={() => setSelectedPlan(plan)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && setSelectedPlan(plan)}
                  aria-label={`View ${plan.title} details`}
                >
                  <Image
                    src={plan.thumbnail}
                    alt={plan.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 66vw"
                    quality={100}
                    priority
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                    <div className="bg-white/95 px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <span className="text-sm font-semibold text-gray-900">Click to Enlarge</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Floor Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#0a4d5c] mb-2 uppercase" style={{ fontFamily: 'serif' }}>
                    {plan.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {plan.floors}
                  </p>

                  {/* Download & Enquiry Buttons */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <a
                      href={plan.thumbnail}
                      download={`${plan.title.replace(/ /g, '-')}.jpg`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4b896] text-white rounded-lg hover:bg-[#c4a886] transition-colors duration-300 shadow-md hover:shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span className="text-sm font-semibold">Download</span>
                    </a>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log('Floorplan enquiry button clicked!')
                        const event = new CustomEvent('showEnquiryPopup')
                        window.dispatchEvent(event)
                        console.log('Event dispatched:', event)
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a4d5c] text-white rounded-lg hover:bg-[#083d4a] transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-semibold">Enquiry</span>
                    </button>
                  </div>

                  {/* Features */}
                  {plan.features && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#0a4d5c] mb-3 flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#d4b896] rounded-full mr-2"></span>
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="text-[#d4b896] mr-2">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Storage Units */}
                  {plan.storageUnits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Storage Units</h4>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-300">
                              <th className="text-left py-2 font-semibold text-gray-700">Storage No.</th>
                              <th className="text-right py-2 font-semibold text-gray-700">Area</th>
                            </tr>
                          </thead>
                          <tbody>
                            {plan.storageUnits.map((unit, idx) => (
                              <tr key={idx} className="border-b border-gray-200 last:border-0">
                                <td className="py-2 text-gray-900">{unit.no}</td>
                                <td className="py-2 text-right text-gray-900 font-medium">{unit.area}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Shops */}
                  {plan.shops && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Shop Details</h4>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-300">
                              <th className="text-left py-2 font-semibold text-gray-700">Shop No.</th>
                              <th className="text-right py-2 font-semibold text-gray-700">Area</th>
                            </tr>
                          </thead>
                          <tbody>
                            {plan.shops.map((shop, idx) => (
                              <tr key={idx} className="border-b border-gray-200 last:border-0">
                                <td className="py-2 text-gray-900">{shop.no}</td>
                                <td className="py-2 text-right text-gray-900 font-medium text-xs">{shop.area}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Offices */}
                  {plan.offices && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Office Details</h4>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 max-h-64 overflow-y-auto">
                        <table className="w-full text-sm">
                          <thead className="sticky top-0 bg-gray-50">
                            <tr className="border-b border-gray-300">
                              <th className="text-left py-2 font-semibold text-gray-700">Office No.</th>
                              <th className="text-right py-2 font-semibold text-gray-700">RERA C.A (SQ.FT.)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {plan.offices.map((office, idx) => (
                              <tr key={idx} className="border-b border-gray-200 last:border-0">
                                <td className="py-2 text-gray-900">{office.no}</td>
                                <td className="py-2 text-right text-gray-900 font-medium">{office.area}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Areas (Terrace) */}
                  {plan.areas && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Area Details</h4>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-300">
                              <th className="text-left py-2 font-semibold text-gray-700">Area</th>
                              <th className="text-right py-2 font-semibold text-gray-700">RERA C.A (SQ.FT.)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {plan.areas.map((area, idx) => (
                              <tr key={idx} className="border-b border-gray-200 last:border-0">
                                <td className="py-2 text-gray-900">{area.name}</td>
                                <td className="py-2 text-right text-gray-900 font-medium">{area.area}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
            onClick={handleCloseLightbox}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            {/* Header with Controls */}
            <div className="flex items-center justify-between p-4 gap-4">
              {/* Zoom Controls */}
              <div className="flex items-center gap-2 bg-white rounded-full p-2 shadow-lg">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleZoomOut()
                  }}
                  disabled={zoom <= 1}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Zoom out"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                  </svg>
                </button>
                <span className="text-xs md:text-sm font-medium px-1 md:px-2 min-w-[50px] md:min-w-[60px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleZoomIn()
                  }}
                  disabled={zoom >= 2}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Zoom in"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </button>
              </div>

              {/* Title - Hidden on mobile */}
              <h3 id="lightbox-title" className="hidden md:block text-lg text-white font-semibold flex-1 text-center">
                {selectedPlan.title}
              </h3>

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleCloseLightbox()
                }}
                className="bg-white hover:bg-gray-100 rounded-full p-2 md:p-3 transition-colors"
                aria-label="Close preview"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image Container with Scroll */}
            <div 
              className="flex-1 overflow-auto bg-white mx-2 md:mx-4 mb-2 md:mb-4 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="w-full h-full flex items-start justify-center p-2 md:p-4"
                style={{ 
                  minWidth: `${zoom * 100}%`,
                  minHeight: `${zoom * 100}%`,
                }}
              >
                <Image
                  src={selectedPlan.thumbnail}
                  alt={selectedPlan.title}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'top center',
                  }}
                  quality={100}
                  priority
                />
              </div>
            </div>

            {/* Footer - Mobile title */}
            <div className="md:hidden px-4 pb-4 text-center">
              <p className="text-white font-semibold">{selectedPlan.title}</p>
              <p className="text-gray-400 text-sm">{selectedPlan.floors}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  )
}
