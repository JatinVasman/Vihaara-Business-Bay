"use client";

import Image from "next/image";

/**
 * Hero Component
 * Full-width hero section with background image only
 */
export default function Hero() {
  return (
    <section
      className="relative w-full h-screen min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero/hero-build.png"
          alt="Vihaara Business Bay - India's First Sparkle Tower in Dombivli"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Sparkling Logo Overlay */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-16 lg:top-20 lg:left-20 z-10">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
          <Image
            src="/Logo/Sparkling Logo.png"
            alt="Vihaara Sparkling Logo"
            fill
            priority
            quality={100}
            className="object-contain"
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
          />
        </div>
      </div>
    </section>
  );
}
