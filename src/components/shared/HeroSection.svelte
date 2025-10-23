<script lang="ts">
  import { onMount } from 'svelte'
  import type { Snippet } from 'svelte'
  import Button from './Button.svelte'

  interface ButtonConfig {
    label: string
    variant: 'primary' | 'outline' | 'text' | 'ghost'
    onClick: () => void
  }

  interface Props {
    backgroundImage?: string
    backgroundOverlay?: boolean
    title?: string
    titleHighlight?: string
    description?: string
    buttons?: ButtonConfig[]
    children?: Snippet
    minHeight?: string
  }

  let {
    backgroundImage,
    backgroundOverlay = true,
    title,
    titleHighlight,
    description,
    buttons = [],
    children,
    minHeight = 'min-h-screen',
  }: Props = $props()

  let mounted = $state(false)

  onMount(() => {
    mounted = true
  })
</script>

<section class="relative {minHeight} flex items-center justify-center overflow-hidden scroll-mt-16">
  <!-- Background -->
  {#if backgroundImage}
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('{backgroundImage}'); filter: brightness(0.7);"
      ></div>
      {#if backgroundOverlay}
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      {/if}
    </div>
  {/if}

  <!-- Content -->
  <div class="relative z-10 container-width section-padding text-center pt-20">
    {#if children}
      {@render children()}
    {:else}
      <div class={mounted ? 'animate-fade-in' : ''}>
        {#if title || titleHighlight}
          <h1
            class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 md:mb-8 leading-tight"
          >
            {#if title}
              <span class="text-white">{title}</span>
            {/if}
            {#if title && titleHighlight}
              <br />
            {/if}
            {#if titleHighlight}
              <span class="text-brand-sage">{titleHighlight}</span>
            {/if}
          </h1>
        {/if}

        {#if description}
          <p class="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8">
            {description}
          </p>
        {/if}
      </div>

      {#if buttons.length > 0}
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center {mounted ? 'animate-slide-up' : ''}"
        >
          {#each buttons as button}
            <Button variant={button.variant} size="lg" onclick={button.onClick}>
              {button.label}
            </Button>
          {/each}
        </div>
      {/if}
    {/if}
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
</style>
