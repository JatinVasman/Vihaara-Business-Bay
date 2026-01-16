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
      <div className="absolute z-10 
  left-[4%] 
  top-[10%]
  lg:left-[6%] 
  lg:top-auto
  lg:bottom-[18%]">

        <div className="relative 
    w-40 h-40 
    sm:w-44 sm:h-44 
    md:w-48 md:h-48 
    lg:w-64 lg:h-64">

          <Image
            src="/Logo/Sparkling Logo.png"
            alt="Vihaara Sparkling Logo"
            fill
            priority
            quality={100}
            className="object-contain"
            sizes="(max-width: 640px) 180px,
             (max-width: 768px) 196px,
             (max-width: 1024px) 202px,
             280px"
          />
        </div>
      </div>

    </section>
  );
}
