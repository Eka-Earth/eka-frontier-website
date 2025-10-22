<script lang="ts">
  interface Props {
    theme?: 'light' | 'dark'
    size?: 'sm' | 'md'
    children?: import('svelte').Snippet
  }

  let { theme = 'dark', size = 'md', children }: Props = $props()

  const baseClasses = 'inline-block rounded-full font-mono'

  const themeClasses = $derived(
    theme === 'dark'
      ? 'bg-white/10 border border-white/20 text-white'
      : 'bg-eka-primary/10 border border-eka-primary/20 text-eka-primary-dark'
  )

  const sizeClasses = $derived(size === 'sm' ? 'px-2 py-1 text-[10px]' : 'px-3 py-1.5 text-xs')
</script>

<div class="{baseClasses} {themeClasses} {sizeClasses}">
  {@render children?.()}
</div>
