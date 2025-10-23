<script lang="ts">
  import { onMount } from 'svelte'
  import HamburgerButton from './shared/HamburgerButton.svelte'
  import MobileMenu from './shared/MobileMenu.svelte'
  import ThemeToggle from './shared/ThemeToggle.svelte'
  import type { MenuItem } from './shared/MobileMenu.svelte'

  let isOpen = $state(false)
  let scrolled = $state(false)
  let isDark = $state(false)

  onMount(() => {
    const handleScroll = (): void => {
      scrolled = window.scrollY > 20
    }

    const checkDarkMode = (): void => {
      isDark = document.documentElement.classList.contains('dark')
    }

    // Initial check
    checkDarkMode()

    // Listen for dark mode changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  })

  function toggleMenu(): void {
    isOpen = !isOpen
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  function scrollToSection(id: string): void {
    // Close menu first
    isOpen = false
    document.body.style.overflow = 'auto'

    // If we're on privacy policy page, go home first
    if (window.location.hash === '#privacy-policy') {
      window.dispatchEvent(new CustomEvent('navigate-home'))
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function goHome(): void {
    isOpen = false
    document.body.style.overflow = 'auto'

    if (window.location.hash === '#privacy-policy') {
      window.dispatchEvent(new CustomEvent('navigate-home'))
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const menuItems: MenuItem[] = [
    {
      label: 'Our Edge',
      id: 'our-edge',
      onClick: () => scrollToSection('our-edge'),
    },
    {
      label: 'Our Solutions',
      id: 'services',
      onClick: () => scrollToSection('services'),
    },
    {
      label: 'Our Focus',
      id: 'themes',
      onClick: () => scrollToSection('themes'),
    },
    {
      label: 'How We Work',
      id: 'engagement',
      onClick: () => scrollToSection('engagement'),
    },
    {
      label: 'Work Together',
      id: 'contact',
      onClick: () => scrollToSection('contact'),
    },
  ]
</script>

<nav
  class="fixed top-0 w-full z-[60] transition-all duration-300 {scrolled
    ? 'bg-white/95 dark:bg-brand-navy/95 backdrop-blur-lg shadow-sm'
    : 'bg-transparent'}"
>
  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <button class="flex items-center" onclick={goHome}>
        {#if isDark || (!scrolled && !isOpen)}
          <img src="/logos/white-logo.svg" alt="Eka Frontier" class="h-8 w-auto" />
        {:else}
          <img src="/logos/color-logo.svg" alt="Eka Frontier" class="h-8 w-auto" />
        {/if}
      </button>

      <!-- Theme Toggle & Hamburger Menu -->
      <div class="flex items-center gap-2">
        <ThemeToggle color={isDark || (!scrolled && !isOpen) ? 'light' : 'dark'} />
        <HamburgerButton
          {isOpen}
          color={isDark || (!scrolled && !isOpen) ? 'light' : 'dark'}
          onclick={toggleMenu}
        />
      </div>
    </div>
  </div>
</nav>

<!-- Mobile Menu Overlay - Always rendered, fades in/out -->
<MobileMenu {isOpen} items={menuItems}>
  {#snippet footer()}
    <a
      href="mailto:contact@ekafrontier.io"
      class="text-lg text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary-light transition-colors"
    >
      contact@ekafrontier.io
    </a>
  {/snippet}
</MobileMenu>
