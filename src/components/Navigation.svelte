<script>
  import { onMount } from 'svelte';
  let isOpen = false;
  let scrolled = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    isOpen = false;
  }
</script>

<nav class="fixed top-0 w-full z-50 transition-all duration-300 {scrolled ? 'backdrop-blur-lg bg-black/80 border-b border-white/10' : 'bg-transparent'}">
  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <div class="flex justify-between items-center py-5">
      <div class="flex items-center space-x-2">
        <div class="w-2 h-8 bg-eka-blue rounded"></div>
        <div class="text-2xl font-bold text-white">
          Eka Frontier
        </div>
      </div>

      <button
        class="lg:hidden text-white"
        on:click={toggleMenu}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>

      <div class="hidden lg:flex items-center space-x-8">
        <button
          on:click={() => scrollToSection('services')}
          class="text-gray-300 hover:text-white transition font-medium text-sm tracking-wide relative group"
        >
          Services
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-eka-blue group-hover:w-full transition-all duration-300"></div>
        </button>
        <button
          on:click={() => scrollToSection('themes')}
          class="text-gray-300 hover:text-white transition font-medium text-sm tracking-wide relative group"
        >
          Focus
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-eka-blue group-hover:w-full transition-all duration-300"></div>
        </button>
        <button
          on:click={() => scrollToSection('engagement')}
          class="text-gray-300 hover:text-white transition font-medium text-sm tracking-wide relative group"
        >
          Engagement
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-eka-blue group-hover:w-full transition-all duration-300"></div>
        </button>
        <button
          on:click={() => scrollToSection('contact')}
          class="px-6 py-2 bg-eka-blue text-white font-medium text-sm rounded-lg hover:bg-eka-blue-dark transition-colors duration-300"
        >
          Get Started
        </button>
      </div>
    </div>

    {#if isOpen}
      <div class="lg:hidden py-6 space-y-4 border-t border-white/10">
        <button
          on:click={() => scrollToSection('services')}
          class="block w-full text-left py-3 text-gray-300 hover:text-white transition font-medium"
        >
          Services
        </button>
        <button
          on:click={() => scrollToSection('themes')}
          class="block w-full text-left py-3 text-gray-300 hover:text-white transition font-medium"
        >
          Focus
        </button>
        <button
          on:click={() => scrollToSection('engagement')}
          class="block w-full text-left py-3 text-gray-300 hover:text-white transition font-medium"
        >
          Engagement
        </button>
        <button
          on:click={() => scrollToSection('contact')}
          class="block w-full text-left py-3 text-white font-medium"
        >
          Get Started →
        </button>
      </div>
    {/if}
  </div>
</nav>