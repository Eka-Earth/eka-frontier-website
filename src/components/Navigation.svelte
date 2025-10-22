<script lang="ts">
  import { onMount } from 'svelte';

  let isOpen: boolean = false;
  let scrolled: boolean = false;

  onMount(() => {
    const handleScroll = (): void => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMenu(): void {
    isOpen = !isOpen;
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  function scrollToSection(id: string): void {
    // Close menu first
    isOpen = false;
    document.body.style.overflow = 'auto';

    // If we're on privacy policy page, go home first
    if (window.location.hash === '#privacy-policy') {
      window.dispatchEvent(new CustomEvent('navigate-home'));
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function goHome(): void {
    isOpen = false;
    document.body.style.overflow = 'auto';

    if (window.location.hash === '#privacy-policy') {
      window.dispatchEvent(new CustomEvent('navigate-home'));
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  interface NavItem {
    label: string;
    id: string;
  }

  const navItems: NavItem[] = [
    { label: 'Our Edge', id: 'our-edge' },
    { label: 'Our Solutions', id: 'services' },
    { label: 'Our Focus', id: 'themes' },
    { label: 'How We Work', id: 'engagement' },
    { label: 'Work Together', id: 'contact' }
  ];
</script>

<nav class="fixed top-0 w-full z-50 transition-all duration-300 {scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'}">
  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <div class="flex justify-between items-center py-3">
      <!-- Logo -->
      <button class="flex items-center relative z-[60]" on:click={goHome}>
        {#if scrolled || isOpen}
          <img src="/logos/color-logo.svg" alt="Eka Frontier" class="h-8 w-auto">
        {:else}
          <img src="/logos/white-logo.svg" alt="Eka Frontier" class="h-8 w-auto">
        {/if}
      </button>

      <!-- Menu Button (always visible) -->
      <button
        class="relative z-[60] p-2"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <div class="w-8 h-6 relative flex flex-col justify-center">
          <span class="absolute w-full h-0.5 {scrolled || isOpen ? 'bg-eka-primary-dark' : 'bg-white'} transition-all duration-300 {isOpen ? 'rotate-45 top-[11px]' : 'top-1'}"></span>
          <span class="absolute w-full h-0.5 {scrolled || isOpen ? 'bg-eka-primary-dark' : 'bg-white'} transition-all duration-300 {isOpen ? 'opacity-0' : 'top-[11px]'}"></span>
          <span class="absolute w-full h-0.5 {scrolled || isOpen ? 'bg-eka-primary-dark' : 'bg-white'} transition-all duration-300 {isOpen ? '-rotate-45 top-[11px]' : 'top-5'}"></span>
        </div>
      </button>
    </div>
  </div>

  <!-- Full Screen Menu Overlay -->
  {#if isOpen}
    <div class="fixed inset-0 bg-white z-[55] animate-fade-in">
      <div class="flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-12 lg:px-24">
        <div class="space-y-8">
          {#each navItems as item, index}
            <button
              on:click={() => scrollToSection(item.id)}
              class="block text-left text-4xl lg:text-5xl font-medium text-eka-primary-dark hover:text-eka-primary transition-all duration-300 hover:translate-x-2 animate-slide-up"
              style="animation-delay: {index * 0.1}s"
            >
              {item.label}
            </button>
          {/each}

          <div class="pt-8 mt-8 border-t border-gray-200 animate-slide-up" style="animation-delay: 0.5s">
            <a
              href="mailto:contact@ekafrontier.io"
              class="text-lg text-gray-600 hover:text-eka-primary transition-colors"
            >
              contact@ekafrontier.io
            </a>
          </div>
        </div>
      </div>
    </div>
  {/if}
</nav>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }

  .animate-slide-up {
    animation: slide-up 0.5s ease-out;
    animation-fill-mode: backwards;
  }
</style>