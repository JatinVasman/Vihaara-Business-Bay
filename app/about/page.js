import Image from 'next/image'
import { siteMeta } from '@/lib/siteMeta'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Vihaara Business Bay, India\'s First Sparkle Tower in Dombivli. Discover our vision, mission, and commitment to excellence in commercial real estate.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-1 mb-4">About Vihaara Business Bay</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {siteMeta.project.tagline}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="heading-3 text-gray-900 mb-4">
              A New Era of Commercial Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {/* TODO: Replace with actual content from Vihaara Business Bay brochure */}
              Vihaara Business Bay stands as a testament to architectural innovation and 
              commercial excellence. As India's First Sparkle Tower, we bring a unique 
              blend of aesthetic brilliance and functional design to Dombivli's rapidly 
              growing business landscape.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our vision is to create a commercial ecosystem where businesses thrive, 
              professionals excel, and innovation flourishes. With state-of-the-art 
              infrastructure and world-class amenities, we offer more than just office 
              space—we provide a platform for success.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <div className="text-4xl mb-4" aria-hidden="true">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most sought-after commercial destination in Dombivli, 
                setting new benchmarks in architectural design, sustainability, 
                and business infrastructure.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4" aria-hidden="true">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide premium commercial spaces that empower businesses with 
                cutting-edge facilities, strategic location advantages, and an 
                environment conducive to growth and success.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="heading-3 text-gray-900 mb-6">
              What Makes Us Unique
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-3xl mt-1" aria-hidden="true">✨</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Sparkle Tower Design
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our distinctive sparkle facade is not just visually stunning—it represents 
                    innovation, ambition, and the bright future of businesses housed within.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-3xl mt-1" aria-hidden="true">📍</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Strategic Location
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Located in the heart of Dombivli East, we offer unparalleled connectivity 
                    to Mumbai, Thane, and other major business centers, making commutes 
                    convenient for employees and clients alike.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-3xl mt-1" aria-hidden="true">🏗️</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Modern Infrastructure
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    From high-speed elevators to advanced fire safety systems, every aspect 
                    of our infrastructure is designed with efficiency, safety, and comfort in mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-3xl mt-1" aria-hidden="true">🌱</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Sustainable Design
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We are committed to environmental responsibility with energy-efficient 
                    systems, rainwater harvesting, and green spaces that promote sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-gray-50 p-8 rounded-xl mb-12">
            <h2 className="heading-3 text-gray-900 mb-6 text-center">
              Project Highlights
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-primary-600 text-4xl font-bold mb-2">
                  {/* TODO: Add actual project data */}
                  XX Floors
                </div>
                <p className="text-gray-600">Premium Floors</p>
              </div>

              <div className="text-center">
                <div className="text-primary-600 text-4xl font-bold mb-2">
                  XX Lakh sq.ft
                </div>
                <p className="text-gray-600">Total Area</p>
              </div>

              <div className="text-center">
                <div className="text-primary-600 text-4xl font-bold mb-2">
                  2026
                </div>
                <p className="text-gray-600">Expected Possession</p>
              </div>

              <div className="text-center">
                <div className="text-primary-600 text-4xl font-bold mb-2">
                  100%
                </div>
                <p className="text-gray-600">Power Backup</p>
              </div>

              <div className="text-center">
                <div className="text-primary-600 text-4xl font-bold mb-2">
                  24/7
                </div>
                <p className="text-gray-600">Security</p>
              </div>

              <div className="text-center">
                <div className="text-primary-600 text-4xl font-bold mb-2">
                  XXX+
                </div>
                <p className="text-gray-600">Parking Spaces</p>
              </div>
            </div>
          </div>

          {/* RERA Information */}
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              MahaRERA Registration
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>Registration Number:</strong> {siteMeta.rera.number}
            </p>
            <p className="text-gray-700 mb-3">
              This project is registered under MahaRERA, ensuring transparency and 
              compliance with all regulatory standards.
            </p>
            <a 
              href={siteMeta.rera.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline font-semibold"
            >
              Verify on MahaRERA Website →
            </a>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="heading-3 text-gray-900 mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Schedule a site visit and experience Vihaara Business Bay firsthand
            </p>
            <a href="tel:9769045555" className="btn-primary">
              📞 Book Your Visit Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
