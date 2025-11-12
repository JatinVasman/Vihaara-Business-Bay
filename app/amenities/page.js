import { redirect } from 'next/navigation'

/**
 * Amenities Page - Redirect to main page #amenities section
 * Legacy route maintained for backwards compatibility
 */
export default function AmenitiesPage() {
  redirect('/#amenities')
}
