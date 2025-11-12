import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { siteMeta, generateLocalBusinessSchema } from '@/lib/siteMeta'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: siteMeta.keywords.join(', '),
  authors: [{ name: siteMeta.project.name }],
  creator: siteMeta.project.name,
  metadataBase: new URL(siteMeta.url),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/Logo/Black_PNG.png', sizes: 'any' },
      { url: '/Logo/Black_PNG.png', type: 'image/png', sizes: '32x32' },
      { url: '/Logo/Black_PNG.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/Logo/Black_PNG.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteMeta.url,
    title: siteMeta.title,
    description: siteMeta.description,
    siteName: siteMeta.project.name,
    images: [
      {
        url: siteMeta.ogImage,
        width: 1200,
        height: 630,
        alt: siteMeta.project.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
  verification: {
    // TODO: Add Google Search Console verification
    // google: 'your-google-verification-code',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'real estate',
  classification: 'Business',
}

export default function RootLayout({ children }) {
  const structuredData = generateLocalBusinessSchema()
  
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Viewport for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0a4d5c" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        
        <Navbar />
        
        <main id="main-content">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}

