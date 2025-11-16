'use client'

/**
 * MobileBottomBar Component
 * Sticky bottom bar for mobile devices with Enquiry and Download Brochure buttons
 * Only visible on mobile/tablet screens
 */
export default function MobileBottomBar() {
  const handleEnquiryClick = () => {
    // Trigger the contact popup
    console.log('Mobile bottom bar enquiry button clicked!')
    const event = new CustomEvent('showEnquiryPopup')
    window.dispatchEvent(event)
    console.log('Event dispatched:', event)
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-[#d4b896]/30 shadow-lg">
      <div className="grid grid-cols-2 gap-0">
        {/* Enquiry Button */}
        <button
          onClick={handleEnquiryClick}
          className="flex flex-col items-center justify-center py-3 px-4 bg-white hover:bg-[#d4b896]/10 transition-all duration-300 border-r border-[#d4b896]/30"
          aria-label="Open enquiry form"
        >
          <svg className="w-6 h-6 text-[#d4b896] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-semibold text-[#0a4d5c]">ENQUIRE NOW</span>
        </button>

        {/* Download Brochure Button */}
        <a
          href="/Vihaara Business Bay.pdf"
          download
          className="flex flex-col items-center justify-center py-3 px-4 bg-white hover:bg-[#d4b896]/10 transition-all duration-300"
          aria-label="Download Vihaara Business Bay brochure"
        >
          <svg className="w-6 h-6 text-[#d4b896] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-xs font-semibold text-[#0a4d5c]">DOWNLOAD BROCHURE</span>
        </a>
      </div>
    </div>
  )
}
