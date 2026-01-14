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
    </section>
  );
}
