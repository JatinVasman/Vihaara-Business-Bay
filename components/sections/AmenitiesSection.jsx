"use client";

import Image from "next/image";

/**
 * AmenitiesSection Component
 * Displays the Interiors & Amenities image
 */

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="relative w-full py-12 bg-white"
      aria-labelledby="amenities-heading"
    >
      {/* Centered Image Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/assets/gallery/interiorsAndAmenities.png"
            alt="Vihaara Business Bay - Interiors & Amenities"
            width={1920}
            height={1080}
            quality={90}
            className="w-full h-auto object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
