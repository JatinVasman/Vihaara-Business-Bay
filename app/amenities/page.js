import AmenitiesGrid from '@/components/AmenitiesGrid'

export const metadata = {
  title: 'Amenities',
  description: 'Explore world-class amenities at Vihaara Business Bay including premium parking, 24/7 security, power backup, modern infrastructure, and more.',
}

export default function AmenitiesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-1 mb-4">World-Class Amenities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experience premium facilities designed to enhance productivity and comfort
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <AmenitiesGrid />

      {/* Additional Details */}
      <section className="section-container bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-3 text-gray-900 mb-8 text-center">
            Designed for Excellence
          </h2>

          <div className="space-y-8">
            {/* Safety & Security */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3" aria-hidden="true">🔒</span>
                Safety & Security
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  24/7 CCTV surveillance across all common areas and entry points
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Trained security personnel on all floors and entrance gates
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Access control systems with card-based entry
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Fire detection, alarm, and suppression systems on every floor
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Emergency evacuation plans and regular safety drills
                </li>
              </ul>
            </div>

            {/* Infrastructure */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3" aria-hidden="true">🏗️</span>
                Modern Infrastructure
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  High-speed elevators with modern safety features
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  100% power backup with DG sets for uninterrupted operations
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Centralized air conditioning with individual zone controls
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  High-speed fiber optic internet infrastructure ready
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Dedicated water storage and treatment facilities
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Modern plumbing and electrical systems
                </li>
              </ul>
            </div>

            {/* Comfort & Convenience */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3" aria-hidden="true">⭐</span>
                Comfort & Convenience
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Premium washroom facilities with modern fixtures
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Professional housekeeping services
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  In-house food court with multiple dining options
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Landscaped gardens and outdoor seating areas
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Dedicated visitor parking and waiting areas
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Wheelchair accessible with ramps and wide corridors
                </li>
              </ul>
            </div>

            {/* Parking */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3" aria-hidden="true">🚗</span>
                Parking Facilities
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Multi-level parking with ample spaces for staff and visitors
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Designated parking for differently-abled individuals
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Two-wheeler parking in covered area
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  CCTV surveillance in parking areas
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Easy entry and exit with smooth traffic flow
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="heading-3 text-gray-900 mb-4">
              Experience These Amenities Yourself
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Schedule a visit to explore all facilities in person
            </p>
            <a href="tel:9769045555" className="btn-primary">
              📞 Book a Site Visit
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
