<script>
  import { onMount } from 'svelte';
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
  <!-- Tech grid background -->
  <div class="absolute inset-0 opacity-20">
    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(27, 79, 143, 0.2) 1px, transparent 1px); background-size: 50px 50px;"></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 container-width section-padding text-center">
    <div class="{mounted ? 'animate-fade-in' : ''}">
      <!-- Tech badge -->
      <div class="inline-block mb-8">
        <div class="flex items-center space-x-2 px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
          <div class="w-2 h-2 bg-eka-blue rounded-full animate-pulse"></div>
          <span class="text-sm font-mono text-gray-300">Building at the Frontier</span>
        </div>
      </div>

      <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
        <span class="text-white">Forging Digital Infrastructures</span>
        <br />
        <span class="text-white">for Resilient Futures</span>
      </h1>

      <p class="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Your co-pilot in architecting and building transformative platforms that power the transition to a nature-positive, low-carbon future at speed and at scale
      </p>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 justify-center {mounted ? 'animate-slide-up' : ''}">
      <button
        class="px-8 py-4 bg-eka-blue text-white font-semibold rounded-xl hover:bg-eka-blue-dark transition-colors duration-300"
        on:click={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        How Can We Help?
      </button>
      <button
        class="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
        on:click={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Start Building
      </button>
    </div>

    <!-- Stats section with modern design -->
    <div class="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto {mounted ? 'animate-fade-in-delayed' : 'opacity-0'}">
      <div class="group cursor-pointer">
        <div class="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 group-hover:border-white/20 transition-all">
          <p class="text-3xl font-bold text-white mb-2 font-mono">10+</p>
          <p class="text-xs text-gray-400 uppercase tracking-wider">Years at Frontier</p>
        </div>
      </div>
      <div class="group cursor-pointer">
        <div class="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 group-hover:border-white/20 transition-all">
          <p class="text-3xl font-bold text-white mb-2 font-mono">$2B+</p>
          <p class="text-xs text-gray-400 uppercase tracking-wider">Capital Structured</p>
        </div>
      </div>
      <div class="group cursor-pointer">
        <div class="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 group-hover:border-white/20 transition-all">
          <p class="text-3xl font-bold text-white mb-2 font-mono">4</p>
          <p class="text-xs text-gray-400 uppercase tracking-wider">Continents</p>
        </div>
      </div>
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
      transform: translateY(40px);
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
    animation: slide-up 1s ease-out 0.3s both;
  }

  .animate-fade-in-delayed {
    animation: fade-in 1s ease-out 0.6s both;
  }
</style>