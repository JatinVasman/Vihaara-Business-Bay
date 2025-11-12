import GalleryGrid from '@/components/GalleryGrid'

export const metadata = {
  title: 'Gallery',
  description: 'Explore photos of Vihaara Business Bay - India\'s First Sparkle Tower. View our stunning architecture, premium office spaces, and world-class amenities.',
}

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-1 mb-4">Photo Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take a visual tour of India's First Sparkle Tower
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <GalleryGrid />

      {/* Additional Info */}
      <section className="section-container bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-3 text-gray-900 mb-4">
            See It in Person
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Photos can only capture so much. Experience the magnificence of Vihaara Business Bay 
            with a personal site visit and see our world-class facilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9769045555" className="btn-primary">
              📞 Schedule a Visit
            </a>
            <a href="/assets/brochure.pdf" download className="btn-secondary">
              📥 Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA (Optional) */}
      <section className="section-container">
        <div className="card max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-4" aria-hidden="true">🎥</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Virtual Tour Coming Soon
          </h3>
          <p className="text-gray-700">
            Experience a 360° virtual tour of Vihaara Business Bay from the comfort of your home. 
            Stay tuned for an immersive digital walkthrough of our facilities.
          </p>
        </div>
      </section>
    </>
  )
}
