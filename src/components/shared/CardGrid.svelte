<script lang="ts">
  interface Props {
    columns?: 2 | 3
    gap?: 4 | 6 | 8
    children?: import('svelte').Snippet
  }

  let { columns = 3, gap = 6, children }: Props = $props()

  const colClasses = {
    2: 'lg:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
  }

  const gapClasses = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  }
</script>

<div class="grid {colClasses[columns]} {gapClasses[gap]}">
  {@render children?.()}
</div>
