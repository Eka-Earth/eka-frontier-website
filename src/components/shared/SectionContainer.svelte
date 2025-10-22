<script lang="ts">
  interface Props {
    id?: string
    background?: 'light' | 'dark' | 'deep' | 'white'
    pattern?: boolean
    children?: import('svelte').Snippet
  }

  let { id, background = 'white', pattern = false, children }: Props = $props()

  const bgClasses = {
    light: 'bg-eka-light',
    dark: 'bg-eka-navy',
    deep: 'bg-eka-deep',
    white: 'bg-white',
  }
</script>

<section {id} class="relative py-24 {bgClasses[background]} {pattern ? 'overflow-hidden' : ''}">
  {#if pattern}
    <!-- Decorative background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute inset-0"
        style="
          background-image:
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        "
      ></div>
    </div>
  {/if}

  <div class="{pattern ? 'relative z-10' : ''} container-width section-padding">
    {@render children?.()}
  </div>
</section>
