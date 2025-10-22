<script lang="ts">
  interface Props {
    cols?: {
      sm?: number
      md?: number
      lg?: number
      xl?: number
    }
    gap?: number
    children?: import('svelte').Snippet
  }

  let { cols = { md: 2 }, gap = 6, children }: Props = $props()

  const gridClasses = $derived(() => {
    const classes = ['grid']

    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`)
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`)
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`)
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`)

    classes.push(`gap-${gap}`)

    return classes.join(' ')
  })
</script>

<div class={gridClasses()}>
  {@render children?.()}
</div>
