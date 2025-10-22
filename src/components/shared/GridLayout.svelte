<script lang="ts">
  interface Props {
    cols?: {
      sm?: number
      md?: number
      lg?: number
      xl?: number
    }
    gap?:
      | number
      | {
          base?: number
          sm?: number
          md?: number
          lg?: number
        }
    children?: import('svelte').Snippet
  }

  let { cols = { md: 2 }, gap = 6, children }: Props = $props()

  const gridClasses = $derived(() => {
    const classes = ['grid', 'grid-cols-1']

    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`)
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`)
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`)
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`)

    // Handle responsive gap
    if (typeof gap === 'number') {
      // Default responsive behavior: smaller gap on mobile
      const mobileGap = gap > 4 ? 4 : gap
      classes.push(`gap-${mobileGap}`)
      if (gap > 4) {
        classes.push(`md:gap-${gap}`)
      }
    } else {
      if (gap.base) classes.push(`gap-${gap.base}`)
      if (gap.sm) classes.push(`sm:gap-${gap.sm}`)
      if (gap.md) classes.push(`md:gap-${gap.md}`)
      if (gap.lg) classes.push(`lg:gap-${gap.lg}`)
    }

    return classes.join(' ')
  })
</script>

<div class={gridClasses()}>
  {@render children?.()}
</div>
