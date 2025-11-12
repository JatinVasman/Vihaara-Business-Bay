'use client'

import Hero from '@/components/Hero'
import WelcomeSection from '@/components/sections/WelcomeSection'
import AboutSection from '@/components/sections/AboutSection'
import AmenitiesSection from '@/components/sections/AmenitiesSection'
import VisionSection from '@/components/sections/VisionSection'
import InfrastructureSection from '@/components/sections/InfrastructureSection'
import FloorplansSection from '@/components/sections/FloorplansSection'
import ContactPreview from '@/components/ContactPreview'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

/**
 * Home Page - Main Landing Single-Scroll Page
 * Sections in order: Hero, Welcome, About, Floorplans, Amenities, Vision, Infrastructure, Contact Preview
 * Each section has an id for anchor navigation
 */

export default function HomePage() {
  // Enable smooth scrolling for anchor links
  useSmoothScroll()

  return (
    <>
      {/* Hero Section - Full screen with CTA */}
      <Hero />

      {/* Welcome Section - Grand introduction */}
      <WelcomeSection />

      {/* About Section - Vision, highlights, stats, investment benefits */}
      <AboutSection />

      {/* Floorplans Section - Thumbnails with download */}
      <FloorplansSection />

      {/* Amenities Section - Premium facilities grid */}
      <AmenitiesSection />

      {/* Vision Section - Mr. Ketan Jogi's vision and investment benefits */}
      <VisionSection />

      {/* Infrastructure Section - Major infrastructure projects */}
      <InfrastructureSection />

      {/* Contact Preview - Quick contact card */}
      <ContactPreview />
    </>
  )
}
