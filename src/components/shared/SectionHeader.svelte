<script lang="ts">
  interface Props {
    label?: string
    title: string
    description?: string
    theme?: 'light' | 'dark'
    align?: 'left' | 'center'
  }

  let { label, title, description, theme = 'light', align = 'center' }: Props = $props()

  const alignClasses = $derived(align === 'center' ? 'text-center' : 'text-left')
  const titleColor = $derived(theme === 'dark' ? 'text-white' : 'text-eka-primary-dark')
  const labelColor = $derived(theme === 'dark' ? 'text-gray-400' : 'text-gray-600')
  const descColor = $derived(theme === 'dark' ? 'text-gray-300' : 'text-gray-700')
</script>

<div class="{alignClasses} mb-16">
  {#if label}
    <div class="inline-block mb-6">
      <span class="text-sm font-mono {labelColor} tracking-wider uppercase">[ {label} ]</span>
    </div>
  {/if}

  <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold {titleColor} mb-6">
    {title}
  </h2>

  {#if description}
    <p class="text-lg xl:text-xl {descColor} max-w-4xl {align === 'center' ? 'mx-auto' : ''}">
      {description}
    </p>
  {/if}
</div>
