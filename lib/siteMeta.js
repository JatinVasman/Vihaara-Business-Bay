// Site-wide metadata and configuration
export const siteMeta = {
  title: "Vihaara Business Bay — India's First Sparkle Tower in Dombivli",
  description: "A new-age commercial address in Dombivli. 6-storey iconic structure with Dubai-inspired facade, fully furnished offices, and modern amenities. Ideal for IT firms, consultancies, start-ups and large enterprises.",
  phone: "9769045555",
  address: "W69, Opp. Aurindam Hospital, Near DNS Bank, MIDC Phase II, Dombivli East",
  rera: "P51700080851",
  url: "https://vihaarabusinessbay.com", // TODO: Update with actual domain
  
  // Contact Information
  contact: {
    phone: "9769045555",
    email: "vihaarabusinessbay@gmail.com",
    salesLounge: {
      street: "W-69, Near DNS Bank, Opp. Aurindam Hospital, MIDC Phase II",
      city: "Dombivli East",
      district: "Thane",
      state: "Maharashtra",
      country: "India"
    },
    corporateOffice: {
      street: "304–305, Shiv Plaza, IBS Road, Ghatkopar West",
      city: "Mumbai",
      postalCode: "400086",
      state: "Maharashtra",
      country: "India"
    },
    // Legacy address field for backward compatibility
    address: {
      street: "W-69, Near DNS Bank, Opp. Aurindam Hospital, MIDC Phase II",
      city: "Dombivli East",
      state: "Maharashtra",
      postalCode: "421203",
      country: "India"
    }
  },
  
  // RERA Information
  rera: {
    number: "P51700080851",
    website: "http://maharera.mahaonline.gov.in"
  },
  
  // Social Media
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61581542836240",
    instagram: "https://www.instagram.com/vihaarabusinessbay/"
  },
  
  // Project Details
  project: {
    name: "Vihaara Business Bay",
    tagline: "India's First Sparkle Tower in Dombivli",
    type: "Commercial",
    status: "Ready to Move",
    possession: "2025",
    floors: "6 Storeys",
    developer: "Chetna Paints Pvt. Ltd",
    founder: "Mr. Ketan Jogi"
  },
  
  // SEO
  keywords: [
    "commercial office dombivli",
    "office space dombivli",
    "vihaara business bay",
    "commercial property dombivli east",
    "business center dombivli",
    "furnished office dombivli",
    "ready to move office dombivli",
    "IT office space dombivli",
    "startup office dombivli",
    "MIDC dombivli office",
    "dubai inspired office dombivli",
    "ketan jogi real estate"
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
      siteMeta.social.instagram
    ]
  }
}

// Navigation links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#floorplans", label: "Floorplans" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/#contact", label: "Contact" }
]
