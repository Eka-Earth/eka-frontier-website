<script lang="ts">
  import type { Component } from 'svelte'

  export interface NavigationLink {
    label: string
    href?: string
    sectionId?: string
    onClick?: () => void
  }

  export interface SocialLink {
    label: string
    href: string
    icon: Component<{ class?: string }>
  }

  interface Props {
    navigationLinks?: NavigationLink[]
    socialLinks?: SocialLink[]
    email?: string
    copyright?: string
  }

  let {
    navigationLinks = [],
    socialLinks = [],
    email,
    copyright = `© ${new Date().getFullYear()} Eka Frontier`,
  }: Props = $props()

  function handleNavigationClick(link: NavigationLink): void {
    if (link.onClick) {
      link.onClick()
    } else if (link.sectionId) {
      document.getElementById(link.sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>

<footer class="bg-gradient-to-br from-eka-light via-white to-eka-mint py-16">
  <div class="container-width section-padding">
    <div class="max-w-4xl mx-auto">
      <!-- Navigation shortcuts -->
      {#if navigationLinks.length > 0}
        <div class="flex flex-wrap justify-center gap-8 mb-8">
          {#each navigationLinks as link (link.label)}
            {#if link.href}
              <a
                href={link.href}
                class="text-sm text-gray-600 hover:text-eka-primary transition-colors"
              >
                {link.label}
              </a>
            {:else}
              <button
                class="text-sm text-gray-600 hover:text-eka-primary transition-colors"
                onclick={() => handleNavigationClick(link)}
              >
                {link.label}
              </button>
            {/if}
          {/each}
        </div>
      {/if}

      <!-- Connect with us section -->
      {#if email || socialLinks.length > 0}
        <div class="flex justify-center items-center gap-6 mb-8">
          <span class="text-sm text-gray-600">Connect with us</span>
          {#if email}
            <a
              href="mailto:{email}"
              class="text-gray-600 hover:text-eka-primary transition-colors"
              aria-label="Email us"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          {/if}
          {#each socialLinks as social (social.href)}
            {@const Icon = social.icon}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-eka-primary transition-colors"
              aria-label={social.label}
            >
              <Icon class="w-5 h-5" />
            </a>
          {/each}
        </div>
      {/if}

      <!-- Copyright -->
      <div class="text-center">
        <p class="text-sm text-gray-500">{copyright}</p>
      </div>
    </div>
  </div>
</footer>
