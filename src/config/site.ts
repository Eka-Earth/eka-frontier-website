/**
 * Site configuration
 *
 * This module provides centralized configuration for the application,
 * reading from environment variables set at build time.
 */

export const siteConfig = {
  site: {
    url: import.meta.env.VITE_SITE_URL || 'https://ekafrontier.io',
    title: 'Ekafrontier',
    description:
      'Partnering with frontier organisations to architect, grow, and scale digital rails for tomorrow\'s resilient, regenerative economy.',
  },
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'crystal@ekafrontier.io',
  },
  social: {
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/crystal-ma-lee',
  },
  company: {
    name: import.meta.env.VITE_COMPANY_NAME || 'Eka Frontier',
    copyrightYear: new Date().getFullYear(),
  },
} as const

export type SiteConfig = typeof siteConfig
