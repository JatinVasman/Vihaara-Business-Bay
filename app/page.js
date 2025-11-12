import Hero from '@/components/Hero'
import AmenitiesGrid from '@/components/AmenitiesGrid'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import Image from 'next/image'

/**
 * Home Page
 * Main landing page with Hero, highlights, amenities preview, and contact form
 */

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="section-container bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 text-gray-900 mb-6">
              Welcome to Vihaara Business Bay
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {/* TODO: Replace with actual content from brochure */}
              Discover India's First Sparkle Tower in the heart of Dombivli. 
              Vihaara Business Bay redefines commercial real estate with its 
              unique architectural design and world-class amenities.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Strategically located to offer excellent connectivity and surrounded 
              by essential infrastructure, this premium commercial project is your 
              gateway to business success.
            </p>
            <Link href="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>
          
          <div className="relative h-96 md:h-full rounded-xl overflow-hidden shadow-2xl">
            {/* TODO: Replace with actual building image */}
            <Image
              src="/assets/hero/hero-build.webp"
              alt="Vihaara Business Bay building"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            Why Choose Vihaara Business Bay?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of location, design, and amenities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Highlight 1 */}
          <div className="card text-center">
            <div className="text-5xl mb-4" aria-hidden="true">🌟</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Unique Architecture
            </h3>
            <p className="text-gray-600">
              India's first sparkle tower design featuring cutting-edge 
              architecture and premium finishes that make a statement.
            </p>
          </div>

          {/* Highlight 2 */}
          <div className="card text-center">
            <div className="text-5xl mb-4" aria-hidden="true">📍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Prime Location
            </h3>
            <p className="text-gray-600">
              Strategically located in Dombivli with excellent connectivity 
              to major business hubs and transportation networks.
            </p>
          </div>

          {/* Highlight 3 */}
          <div className="card text-center">
            <div className="text-5xl mb-4" aria-hidden="true">💼</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Premium Spaces
            </h3>
            <p className="text-gray-600">
              Thoughtfully designed commercial spaces that cater to diverse 
              business needs with modern infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="bg-gray-50">
        <AmenitiesGrid />
        <div className="text-center pb-16">
          <Link href="/amenities" className="btn-secondary">
            View All Amenities
          </Link>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            Explore Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Take a visual tour of Vihaara Business Bay
          </p>
          <Link href="/gallery" className="btn-primary">
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-container bg-gray-50">
        <ContactForm />
      </section>

      {/* CTA Section */}
      <section className="section-container bg-primary-600 text-white text-center">
        <h2 className="heading-2 mb-6">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Schedule a site visit today and experience the future of commercial real estate
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:9769045555" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
            📞 Call Now: 9769045555
          </a>
          <a href="/assets/brochure.pdf" download className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
            📥 Download Brochure
          </a>
        </div>
      </section>
    </>
  )
}
