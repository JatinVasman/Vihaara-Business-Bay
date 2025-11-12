import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { siteMeta } from '@/lib/siteMeta'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: siteMeta.keywords.join(', '),
  authors: [{ name: siteMeta.project.name }],
  creator: siteMeta.project.name,
  metadataBase: new URL(siteMeta.url),
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
