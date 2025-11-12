// Site-wide metadata and configuration
export const siteMeta = {
  title: "Vihaara Business Bay - India's First Sparkle Tower in Dombivli",
  description: "Premium commercial spaces in Dombivli's most prestigious business address. Experience world-class amenities, strategic location, and modern architecture at Vihaara Business Bay.",
  url: "https://vihaarabusinessbay.com", // TODO: Update with actual domain
  
  // Contact Information
  contact: {
    phone: "9769045555",
    email: "info@vihaarabusinessbay.com", // TODO: Update with actual email
    address: {
      street: "Dombivli East",
      city: "Dombivli",
      state: "Maharashtra",
      postalCode: "421201", // TODO: Update with actual postal code
      country: "India"
    }
  },
  
  // RERA Information
  rera: {
    number: "RERA_NUMBER_PLACEHOLDER", // TODO: Add actual RERA number
    website: "https://maharera.mahaonline.gov.in"
  },
  
  // Social Media
  social: {
    facebook: "https://facebook.com/vihaarabusinessbay", // TODO: Update
    instagram: "https://instagram.com/vihaarabusinessbay", // TODO: Update
    twitter: "https://twitter.com/vihaarabusinessbay", // TODO: Update
    linkedin: "https://linkedin.com/company/vihaarabusinessbay", // TODO: Update
    youtube: "https://youtube.com/@vihaarabusinessbay" // TODO: Update
  },
  
  // Project Details
  project: {
    name: "Vihaara Business Bay",
    tagline: "India's First Sparkle Tower in Dombivli",
    type: "Commercial",
    status: "Under Construction", // or "Ready to Move" or "Upcoming"
    possession: "2026" // TODO: Update with actual possession date
  },
  
  // SEO
  keywords: [
    "commercial space dombivli",
    "office space dombivli",
    "vihaara business bay",
    "sparkle tower",
    "commercial property mumbai",
    "business center dombivli",
    "retail space dombivli"
  ],
  
  // Open Graph Image
  ogImage: "/assets/og-image.jpg", // TODO: Add OG image to public/assets/
}

// Generate JSON-LD structured data for Local Business
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": siteMeta.project.name,
    "description": siteMeta.description,
    "url": siteMeta.url,
    "telephone": siteMeta.contact.phone,
    "email": siteMeta.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteMeta.contact.address.street,
      "addressLocality": siteMeta.contact.address.city,
      "addressRegion": siteMeta.contact.address.state,
      "postalCode": siteMeta.contact.address.postalCode,
      "addressCountry": siteMeta.contact.address.country
    },
    "areaServed": {
      "@type": "City",
      "name": "Dombivli"
    },
    "sameAs": [
      siteMeta.social.facebook,
      siteMeta.social.instagram,
      siteMeta.social.twitter,
      siteMeta.social.linkedin,
      siteMeta.social.youtube
    ]
  }
}

// Navigation links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" }
]
