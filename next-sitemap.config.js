/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://vihaarabusinessbay.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*'],
  // Transform function to add custom properties to each URL
  transform: async (config, path) => {
    // Custom priority and changefreq for different routes
    const customPriority = {
      '/': 1.0,
      '/contact': 0.8,
    }

    const customChangefreq = {
      '/': 'weekly',
      '/contact': 'monthly',
    }

    return {
      loc: path,
      changefreq: customChangefreq[path] || 'monthly',
      priority: customPriority[path] || 0.5,
      lastmod: new Date().toISOString(),
    }
  },
}

/**
 * Next Sitemap Configuration
 * 
 * Installation:
 * npm install next-sitemap --save-dev
 * 
 * Usage:
 * Add to package.json scripts:
 * "postbuild": "next-sitemap"
 * 
 * This will automatically generate sitemap.xml and robots.txt after each build.
 * 
 * Manual generation:
 * npx next-sitemap
 * 
 * Note: If using this, you can delete the static sitemap.xml and robots.txt
 * from the public/ folder as they will be auto-generated.
 */
