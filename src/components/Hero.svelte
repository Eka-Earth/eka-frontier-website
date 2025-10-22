<script lang="ts">
  import { onMount } from 'svelte';
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Nature background with overlay -->
  <div class="absolute inset-0">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=3432'); filter: brightness(0.7);"
    ></div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 container-width section-padding text-center pt-20">
    <div class="{mounted ? 'animate-fade-in' : ''}">
      <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-8 leading-tight">
        <span class="text-white">Building Digital Infrastructure</span>
        <br />
        <span class="text-eka-sage">for Resilient Futures</span>
      </h1>

      <p class="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
        Partnering with frontier organisations to architect, grow, and scale digital rails for tomorrow's resilient, regenerative economy.
      </p>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 justify-center {mounted ? 'animate-slide-up' : ''}">
      <button
        class="px-8 py-4 bg-eka-primary text-white font-semibold rounded-xl hover:bg-eka-primary-dark transition-colors duration-300 shadow-lg"
        on:click={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Explore Our Solutions
      </button>
      <button
        class="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
        on:click={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Let's Build Together
      </button>
    </div>
  </div>
</section>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }

  .animate-slide-up {
    animation: slide-up 0.8s ease-out;
    animation-delay: 0.3s;
    animation-fill-mode: backwards;
  }

  .animate-fade-in-delayed {
    animation: fade-in 1s ease-out;
    animation-delay: 0.6s;
    animation-fill-mode: backwards;
  }
</style>