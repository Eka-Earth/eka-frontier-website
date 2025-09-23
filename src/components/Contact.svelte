<script>
  import { onMount } from 'svelte';
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section id="contact" class="relative py-24 overflow-hidden bg-black">
  <!-- Background tech grid -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(27, 79, 143, 0.3) 1px, transparent 1px); background-size: 40px 40px;"></div>
  </div>

  <div class="relative z-10 container-width section-padding">
    <div class="text-center max-w-4xl mx-auto">
      <div class="{mounted ? 'animate-fade-in' : ''}">
        <h2 class="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Let's forge the future <span class="text-eka-blue">together</span>.
        </h2>
        <p class="text-2xl text-gray-300 mb-4">
          Ready to build at the frontier of regenerative economy?
        </p>
        <p class="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Whether you're scaling breakthrough technology, structuring for growth, or architecting tomorrow's infrastructure — we're here to accelerate your impact.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-6 justify-center {mounted ? 'animate-slide-up' : ''}">
        <a
          href="mailto:contact@ekafrontier.io"
          class="group px-10 py-5 bg-eka-blue text-white font-bold text-lg rounded-xl hover:bg-eka-blue-dark transition-all duration-300 transform hover:scale-105 inline-block"
        >
          <span class="flex items-center justify-center">
            Get in Touch
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </span>
        </a>

        <a
          href="https://calendly.com/ekafrontier/discovery"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-block px-10 py-5 border-2 border-white/80 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 transform hover:scale-105"
        >
          <span class="flex items-center justify-center">
            Book Discovery Call
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </span>
        </a>
      </div>

      <div class="mt-20 pt-12 border-t border-white/20">
        <div class="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h4 class="text-white font-semibold mb-3">Connect</h4>
            <a href="mailto:contact@ekafrontier.io" class="text-gray-400 hover:text-white transition-colors">contact@ekafrontier.io</a>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-3">Focus Areas</h4>
            <p class="text-gray-400">Digital Infrastructure • Strategic Growth • Capital Strategy</p>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-3">Frontier Markets</h4>
            <p class="text-gray-400">Asia Pacific • Emerging Economies • Global Impact</p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-sm text-gray-500">
            © 2025 Eka Frontier • Forging Digital Infrastructures for Resilient Futures
          </p>
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

  .delay-1000 {
    animation-delay: 1s;
  }
</style>