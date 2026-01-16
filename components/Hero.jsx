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
      {/* Sparkling Logo Overlay */}
<div className="absolute z-10 
  left-[6%] 
  bottom-[18%]">
  
  <div className="relative 
    w-40 h-40 
    sm:w-48 sm:h-48 
    md:w-56 md:h-56 
    lg:w-64 lg:h-64">
    
    <Image
      src="/Logo/Sparkling Logo.png"
      alt="Vihaara Sparkling Logo"
      fill
      priority
      quality={100}
      className="object-contain"
      sizes="(max-width: 640px) 180px,
             (max-width: 768px) 200px,
             (max-width: 1024px) 240px,
             260px"
    />
  </div>
</div>

    </section>
  );
}
