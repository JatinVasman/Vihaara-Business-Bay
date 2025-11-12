import { siteMeta } from '@/lib/siteMeta'
import ContactFull from '@/components/contact/ContactFull'

/**
 * Contact Page Metadata
 */
export const metadata = {
  title: 'Contact — Vihaara Business Bay',
  description: 'Get in touch with Vihaara Business Bay. Schedule a site visit, download brochures, and explore floor plans for India\'s first Sparkle Tower in Dombivli.',
  openGraph: {
    title: 'Contact — Vihaara Business Bay',
    description: 'Get in touch with Vihaara Business Bay. Schedule a site visit, download brochures, and explore floor plans.',
    url: `${siteMeta.url}/contact`,
    type: 'website',
    images: [
      {
        url: siteMeta.ogImage,
        width: 1200,
        height: 630,
        alt: 'Contact Vihaara Business Bay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Vihaara Business Bay',
    description: 'Get in touch with Vihaara Business Bay. Schedule a site visit, download brochures, and explore floor plans.',
    images: [siteMeta.ogImage],
  },
}

/**
 * Contact & Downloads Page
 * Full contact form, map, downloadable brochures, and floorplans
 */
export default function ContactPage() {
  return <ContactFull />
}
