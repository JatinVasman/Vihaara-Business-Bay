import { redirect } from 'next/navigation'

/**
 * Gallery Page - Redirect to contact page #gallery section
 * Legacy route maintained for backwards compatibility
 */
export default function GalleryPage() {
  redirect('/contact#gallery')
}
