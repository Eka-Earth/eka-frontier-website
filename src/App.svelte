<script lang="ts">
  import Hero from './components/Hero.svelte'
  import Navigation from './components/Navigation.svelte'
  import OurEdge from './components/OurEdge.svelte'
  import CoreServices from './components/CoreServices.svelte'
  import Engagement from './components/Engagement.svelte'
  import ThematicFocus from './components/ThematicFocus.svelte'
  import Contact from './components/Contact.svelte'
  import Footer from './components/Footer.svelte'
  import PrivacyPolicy from './components/PrivacyPolicy.svelte'
  import LinkedInIcon from './components/icons/LinkedInIcon.svelte'
  import type { NavigationLink, SocialLink } from './components/Footer.svelte'
  import { siteConfig } from './config/site'

  type ViewType = 'home' | 'privacy'
  let currentView: ViewType = 'home'
  let lastScrollPosition = 0

  // Check URL on load
  if (
    window.location.pathname === '/privacy-policy' ||
    window.location.hash === '#privacy-policy'
  ) {
    currentView = 'privacy'
  }

  // Handle navigation
  window.addEventListener('popstate', () => {
    if (
      window.location.pathname === '/privacy-policy' ||
      window.location.hash === '#privacy-policy'
    ) {
      currentView = 'privacy'
    } else {
      currentView = 'home'
      // Restore scroll position when going back
      setTimeout(() => window.scrollTo(0, lastScrollPosition), 0)
    }
  })

  // Listen for privacy policy navigation
  window.addEventListener('navigate-privacy', () => {
    navigateToPrivacy()
  })

  // Listen for home navigation
  window.addEventListener('navigate-home', () => {
    navigateToHome()
  })

  // Handle ESC key when on privacy policy
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && currentView === 'privacy') {
      navigateToHome()
    }
  })

  function navigateToPrivacy(): void {
    lastScrollPosition = window.scrollY
    currentView = 'privacy'
    window.history.pushState({}, '', '#privacy-policy')
    window.scrollTo(0, 0)
  }

  function navigateToHome(): void {
    currentView = 'home'
    window.history.pushState({}, '', '/')
    setTimeout(() => window.scrollTo(0, lastScrollPosition), 0)
  }

  // Footer navigation links
  const navigationLinks: NavigationLink[] = [
    { label: 'Our Edge', sectionId: 'our-edge' },
    { label: 'Our Solutions', sectionId: 'services' },
    { label: 'Our Focus', sectionId: 'themes' },
    { label: 'How We Work', sectionId: 'engagement' },
    {
      label: 'Privacy Policy',
      onClick: () => {
        window.dispatchEvent(new CustomEvent('navigate-privacy'))
      },
    },
  ]

  // Social media links
  const socialLinks: SocialLink[] = [
    {
      label: 'LinkedIn',
      href: siteConfig.social.linkedin,
      icon: LinkedInIcon,
    },
  ]
</script>

<Navigation />
<main class="bg-white dark:bg-brand-navy transition-colors duration-300">
  {#if currentView === 'privacy'}
    <!-- Click overlay to exit privacy policy -->
    <div
      class="fixed inset-0 z-10 bg-black/20"
      onclick={navigateToHome}
      role="button"
      tabindex="-1"
      aria-label="Close privacy policy"
    ></div>
    <div class="relative z-20">
      <div onclick={(e) => e.stopPropagation()}>
        <PrivacyPolicy />
        <Footer
          {navigationLinks}
          {socialLinks}
          email={siteConfig.contact.email}
          copyright="© {siteConfig.company.copyrightYear} {siteConfig.company.name}"
        />
      </div>
    </div>
  {:else}
    <Hero />
    <OurEdge />
    <CoreServices />
    <ThematicFocus />
    <Engagement />
    <Contact email={siteConfig.contact.email} />
    <Footer
      {navigationLinks}
      {socialLinks}
      email={siteConfig.contact.email}
      copyright="© {siteConfig.company.copyrightYear} {siteConfig.company.name}"
    />
  {/if}
</main>
