import { siteMeta, generateLocalBusinessSchema } from '@/lib/siteMeta'

/**
 * HeadSeo Component
 * Renders SEO meta tags and structured data for each page
 * 
 * @param {string} title - Page title (will be appended with site name)
 * @param {string} description - Page description for meta tags
 * @param {string} image - Open Graph image URL (defaults to site OG image)
 * @param {string} canonical - Canonical URL for the page
 * @param {string} type - Open Graph type (default: 'website')
 */
export default function HeadSeo({ 
  title, 
  description = siteMeta.description, 
  image = siteMeta.ogImage,
  canonical,
  type = 'website'
}) {
  const pageTitle = title 
    ? `${title} | ${siteMeta.project.name}` 
    : siteMeta.title
  
  const fullImageUrl = image.startsWith('http') 
    ? image 
    : `${siteMeta.url}${image}`
  
  const canonicalUrl = canonical || siteMeta.url

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={siteMeta.keywords.join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteMeta.project.name} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional Meta */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteMeta.project.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema())
        }}
      />
    </>
  )
}
