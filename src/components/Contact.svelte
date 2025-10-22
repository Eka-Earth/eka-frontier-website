<script lang="ts">
  import { onMount } from 'svelte';
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section id="contact" class="relative py-24 overflow-hidden bg-gradient-to-br from-eka-light via-white to-eka-mint">
  <!-- Subtle background pattern -->
  <div class="absolute inset-0 opacity-5">
    <div class="absolute inset-0" style="
      background-image:
        radial-gradient(circle at 1px 1px, rgba(27, 67, 50, 0.2) 1px, transparent 1px);
      background-size: 50px 50px;
    "></div>
  </div>

  <div class="relative z-10 container-width section-padding">
    <div class="text-center max-w-4xl mx-auto">

      <div class="{mounted ? 'animate-fade-in' : ''}">
        <h2 class="text-5xl lg:text-6xl font-bold text-eka-primary-dark mb-12 leading-tight">
          Let's forge regenerative and resilient futures <span class="text-eka-primary">together</span>.
        </h2>


        <p class="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Building breakthrough technology, scaling into new markets, architecting infrastructure for tomorrow's economy? Let's talk.
        </p>
      </div>

      <div class="flex justify-center {mounted ? 'animate-slide-up' : ''}">
        <a
          href="mailto:contact@ekafrontier.io"
          class="group px-10 py-5 bg-eka-primary text-white font-bold text-lg rounded-xl hover:bg-eka-primary-dark transition-all duration-300 transform hover:scale-105 inline-block"
        >
          <span class="flex items-center justify-center">
            Get in Touch
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </span>
        </a>
      </div>

      <!-- Simplified Footer -->
      <div class="mt-20 pt-16 border-t border-gray-200">
        <!-- Navigation shortcuts -->
        <div class="flex flex-wrap justify-center gap-8 mb-8">
          <button
            class="text-sm text-gray-600 hover:text-eka-primary transition-colors"
            on:click={() => document.getElementById('our-edge')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Edge
          </button>
          <button
            class="text-sm text-gray-600 hover:text-eka-primary transition-colors"
            on:click={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Solutions
          </button>
          <button
            class="text-sm text-gray-600 hover:text-eka-primary transition-colors"
            on:click={() => document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Focus
          </button>
          <button
            class="text-sm text-gray-600 hover:text-eka-primary transition-colors"
            on:click={() => document.getElementById('engagement')?.scrollIntoView({ behavior: 'smooth' })}
          >
            How We Work
          </button>
          <a
            href="#privacy-policy"
            class="text-sm text-gray-600 hover:text-eka-primary transition-colors"
            on:click|preventDefault={() => {
              window.dispatchEvent(new CustomEvent('navigate-privacy'));
            }}
          >
            Privacy Policy
          </a>
        </div>

        <!-- Connect with us section -->
        <div class="flex justify-center items-center gap-6 mb-8">
          <span class="text-sm text-gray-600">Connect with us</span>
          <!-- Email icon -->
          <a href="mailto:contact@ekafrontier.io"
             class="text-gray-600 hover:text-eka-primary transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
          <!-- LinkedIn icon -->
          <a href="https://linkedin.com/company/ekafrontier"
             target="_blank"
             rel="noopener noreferrer"
             class="text-gray-600 hover:text-eka-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

        <!-- Copyright -->
        <div class="text-center">
          <p class="text-sm text-gray-500">
            © 2025 Eka Frontier
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