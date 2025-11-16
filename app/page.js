'use client'

import Hero from '@/components/Hero'
import RegisterInterest from '@/components/sections/RegisterInterest'
import WelcomeSection from '@/components/sections/WelcomeSection'
import AboutSection from '@/components/sections/AboutSection'
import VisionSection from '@/components/sections/VisionSection'
import LocationSection from '@/components/sections/LocationSection'
import FloorplansSection from '@/components/sections/FloorplansSection'
import ContactPreview from '@/components/ContactPreview'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

/**
 * Home Page - Main Landing Single-Scroll Page
 * Sections in order: Hero, Welcome, About, Floorplans, Location, Vision, Contact Preview
 * Each section has an id for anchor navigation
 */

export default function HomePage() {
  // Enable smooth scrolling for anchor links
  useSmoothScroll()

  return (
    <>
      {/* Hero Section - Full screen with CTA */}
      <Hero />

      {/* Register Interest Section - Quick contact form */}
      <RegisterInterest />

      {/* Welcome Section - Grand introduction */}
      <WelcomeSection />

      {/* About Section - Vision, highlights, stats, investment benefits */}
      <AboutSection />

      {/* Floorplans Section - Thumbnails with download */}
      <FloorplansSection />

      {/* Location Section - Connectivity and infrastructure */}
      <LocationSection />

      {/* Vision Section - Mr. Ketan Jogi's vision and investment benefits */}
      <VisionSection />

      {/* Contact Preview - Quick contact card */}
      <ContactPreview />
    </>
  )
}
