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
      ? 'bg-white/10 dark:bg-white/20 border border-white/20 dark:border-white/30 text-white'
      : 'bg-brand-primary/10 dark:bg-brand-primary-light/20 border border-gray-200 dark:border-white/10 text-brand-primary-dark dark:text-brand-sage'
  )

  const sizeClasses = $derived(size === 'sm' ? 'px-2 py-1 text-[10px]' : 'px-3 py-1.5 text-xs')
</script>

<div class="{baseClasses} {themeClasses} {sizeClasses}">
  {@render children?.()}
</div>
