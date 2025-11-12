import { redirect } from 'next/navigation'

/**
 * About Page - Redirect to main page #about section
 * Legacy route maintained for backwards compatibility
 */
export default function AboutPage() {
  redirect('/#about')
}
