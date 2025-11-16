import Link from 'next/link'
import Image from 'next/image'
import { siteMeta, navLinks } from '@/lib/siteMeta'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t-2 border-[#d4b896] text-gray-700" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-[#0a4d5c] text-lg font-bold mb-4 uppercase" style={{ fontFamily: 'serif' }}>
              {siteMeta.project.name}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              {siteMeta.project.tagline}
            </p>
            <p className="text-sm text-gray-600">
              Experience premium commercial spaces with world-class amenities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[#0a4d5c] text-lg font-bold mb-4 uppercase" style={{ fontFamily: 'serif' }}>Quick Links</h3>
            <nav className="flex flex-col space-y-2" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-[#d4b896] transition-colors duration-200 focus:outline-none focus:text-[#d4b896]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-[#0a4d5c] text-lg font-bold mb-4 uppercase" style={{ fontFamily: 'serif' }}>Contact Us</h3>
            <address className="not-italic space-y-3 text-sm">
              {/* Sales Lounge */}
              <div>
                <p className="text-[#0a4d5c] font-semibold mb-2">Sales Lounge:</p>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#d4b896] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">
                    {siteMeta.contact.salesLounge.street}, {siteMeta.contact.salesLounge.city}, Dist. {siteMeta.contact.salesLounge.district}, {siteMeta.contact.salesLounge.country}
                  </span>
                </div>
              </div>

              {/* Corporate Office */}
              <div>
                <p className="text-[#0a4d5c] font-semibold mb-2">Corporate Office:</p>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#d4b896] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-gray-600">
                    {siteMeta.contact.corporateOffice.street}, {siteMeta.contact.corporateOffice.city} – {siteMeta.contact.corporateOffice.postalCode}, {siteMeta.contact.corporateOffice.country}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#d4b896] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href={`tel:${siteMeta.contact.phone}`}
                  className="hover:text-[#d4b896] transition-colors text-gray-600"
                  aria-label={`Call us at ${siteMeta.contact.phone}`}
                >
                  {siteMeta.contact.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#d4b896] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={`mailto:${siteMeta.contact.email}`}
                  className="hover:text-[#d4b896] transition-colors text-gray-600"
                  aria-label={`Email us at ${siteMeta.contact.email}`}
                >
                  {siteMeta.contact.email}
                </a>
              </div>
            </address>
          </div>

          {/* Social Links & RERA */}
          <div className="space-y-4">
            <h3 className="text-[#0a4d5c] text-lg font-bold mb-4 uppercase" style={{ fontFamily: 'serif' }}>Connect With Us</h3>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href={siteMeta.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#d4b896] transition-colors"
                aria-label="Visit our Facebook page"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              
              <a 
                href={siteMeta.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#d4b896] transition-colors"
                aria-label="Visit our Instagram page"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              
              <a 
                href="https://maps.app.goo.gl/7qMr4LHq8t5NboS38" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#d4b896] transition-colors"
                aria-label="View our location on Google Maps"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </a>
            </div>
            
            {/* RERA Information */}
            <div className="mt-6 pt-4 border-t border-[#d4b896]">
              {/* RERA QR Code */}
              <div className="mb-4">
                <div className="relative w-32 h-32 bg-white p-2 rounded-lg shadow-md mx-auto">
                  <Image
                    src="/assets/rera-qr.png"
                    alt="MahaRERA QR Code"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </div>
              
              <p className="text-xs text-gray-600 mb-2 text-center">
                <strong className="text-[#0a4d5c]">MahaRERA Registration:</strong>
              </p>
              <p className="text-xs text-gray-600 mb-2 text-center">
                {siteMeta.rera.number}
              </p>
              <div className="text-center">
                <a 
                  href={siteMeta.rera.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#d4b896] hover:text-[#0a4d5c] underline"
                >
                  View on MahaRERA
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#d4b896]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} {siteMeta.project.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
