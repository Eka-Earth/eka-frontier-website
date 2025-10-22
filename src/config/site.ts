/**
 * Site configuration
 *
 * This module provides centralized configuration for the application,
 * reading from environment variables set at build time.
 */

export const siteConfig = {
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'contact@ekafrontier.io',
  },
  social: {
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/company/ekafrontier',
  },
  company: {
    name: import.meta.env.VITE_COMPANY_NAME || 'Eka Frontier',
    copyrightYear: new Date().getFullYear(),
  },
} as const

export type SiteConfig = typeof siteConfig
