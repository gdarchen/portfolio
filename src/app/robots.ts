import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/watch'],
      disallow: [],
    },
    sitemap: ['https://gautierdarchen.fr/sitemap.xml'],
  }
}
