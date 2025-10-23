<script lang="ts">
  interface Props {
    id?: string
    background?: 'light' | 'dark' | 'deep' | 'white' | 'gradient'
    pattern?: boolean
    children?: import('svelte').Snippet
  }

  let { id, background = 'white', pattern = false, children }: Props = $props()

  const bgClasses = {
    light: 'bg-[#fafafa] dark:bg-brand-navy',
    dark: 'bg-brand-navy dark:bg-brand-deep',
    deep: 'bg-brand-deep dark:bg-black',
    white: 'bg-white dark:bg-brand-navy',
    gradient: 'bg-gradient-to-br from-[#fafafa] via-white to-[#fafffb] dark:bg-brand-navy dark:from-brand-navy dark:via-brand-navy dark:to-brand-navy',
  }

  const patternColors = {
    light: 'rgba(27, 67, 50, 0.2)',
    dark: 'rgba(255, 255, 255, 0.1)',
    deep: 'rgba(255, 255, 255, 0.1)',
    white: 'rgba(27, 67, 50, 0.1)',
    gradient: 'rgba(27, 67, 50, 0.2)',
  }

  const patternOpacity = {
    light: 'opacity-5',
    dark: 'opacity-10',
    deep: 'opacity-10',
    white: 'opacity-5',
    gradient: 'opacity-5',
  }
</script>

<section
  {id}
  class="relative py-12 md:py-20 lg:py-24 scroll-mt-16 {bgClasses[background]} {pattern
    ? 'overflow-hidden'
    : ''}">
  {#if pattern}
    <!-- Decorative background pattern -->
    <div class="absolute inset-0 {patternOpacity[background]}">
      <div
        class="absolute inset-0"
        style="
          background-image:
            radial-gradient(circle at 1px 1px, {patternColors[background]} 1px, transparent 1px);
          background-size: 50px 50px;
        "
      ></div>
    </div>
  {/if}

  <div class="{pattern ? 'relative z-10' : ''} container-width section-padding">
    {@render children?.()}
  </div>
</section>
