'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

/**
 * Custom hook for smooth scrolling to anchor links
 * Handles both in-page anchors and cross-page navigation with anchors
 * Respects prefers-reduced-motion for accessibility
 */
export function useSmoothScroll() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href || !href.startsWith('#')) return

      e.preventDefault()
      const id = href.slice(1)
      const element = document.getElementById(id)

      if (element) {
        // Same page scroll
        if (prefersReducedMotion) {
          element.scrollIntoView()
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        // Update URL hash
        window.history.pushState(null, '', href)
      } else if (pathname !== '/') {
        // Cross-page navigation: go to main page with hash
        router.push(`/${href}`)
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [pathname, router])

  // Scroll to hash on page load
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.slice(1)
      const element = document.getElementById(id)
      if (element) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          if (prefersReducedMotion) {
            element.scrollIntoView()
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }
  }, [pathname])
}
