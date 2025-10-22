<script lang="ts">
  interface Props {
    id?: string
    background?: 'light' | 'dark' | 'deep' | 'white'
    children?: import('svelte').Snippet
  }

  let { id, background = 'white', children }: Props = $props()

  const bgClasses = {
    light: 'bg-eka-light',
    dark: 'bg-eka-navy',
    deep: 'bg-eka-deep',
    white: 'bg-white',
  }
</script>

<section {id} class="py-24 {bgClasses[background]}">
  <div class="container-width section-padding">
    {@render children?.()}
  </div>
</section>
