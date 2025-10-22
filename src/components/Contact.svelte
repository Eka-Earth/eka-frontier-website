<script lang="ts">
  import { onMount } from 'svelte'
  import { ArrowRightIcon } from 'heroicons-svelte/24/outline'
  import SectionContainer from './shared/SectionContainer.svelte'

  interface Props {
    email?: string
    headline?: string
    description?: string
    ctaText?: string
  }

  let {
    email = 'contact@ekafrontier.io',
    headline = "Let's forge regenerative and resilient futures",
    description = "Building breakthrough technology, scaling into new markets, architecting infrastructure for tomorrow's economy? Let's talk.",
    ctaText = 'Get in Touch',
  }: Props = $props()

  let mounted = $state(false)

  onMount(() => {
    mounted = true
  })
</script>

<SectionContainer id="contact" background="gradient" pattern={true}>
  <div class="text-center max-w-4xl mx-auto">
    <div class={mounted ? 'animate-fade-in' : ''}>
      <h2 class="text-5xl lg:text-6xl font-bold text-eka-primary-dark mb-12 leading-tight">
        {headline} <span class="text-eka-primary">together</span>.
      </h2>

      <p class="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        {description}
      </p>
    </div>

    <div class="flex justify-center {mounted ? 'animate-slide-up' : ''}">
      <a
        href="mailto:{email}"
        class="group px-10 py-5 bg-eka-primary text-white font-bold text-lg rounded-xl hover:bg-eka-primary-dark transition-all duration-300 transform hover:scale-105 inline-block"
      >
        <span class="flex items-center justify-center gap-2">
          {ctaText}
          <ArrowRightIcon class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </a>
    </div>
  </div>
</SectionContainer>

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
</style>
