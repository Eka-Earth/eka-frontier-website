<script lang="ts">
  import type { ComponentType } from 'svelte'

  interface Props {
    icon?: ComponentType
    iconBg?: 'primary' | 'primary-light' | 'white'
    iconSize?: 'sm' | 'md' | 'lg'
    theme?: 'light' | 'dark'
    hoverable?: boolean
    isHovered?: boolean
    onHover?: () => void
    onUnhover?: () => void
    children?: import('svelte').Snippet
  }

  let {
    icon,
    iconBg = 'primary',
    iconSize = 'md',
    theme = 'light',
    hoverable = true,
    isHovered = false,
    onHover,
    onUnhover,
    children,
  }: Props = $props()

  const bgClasses = $derived(
    theme === 'dark'
      ? 'bg-eka-navy/50 backdrop-blur-sm border-white/10 hover:border-white/30'
      : 'bg-white border-gray-200 hover:border-eka-primary/30',
  )

  const iconBgClasses = {
    primary: 'bg-eka-primary',
    'primary-light': 'bg-eka-primary/10',
    white: 'bg-white',
  }

  const iconSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }

  const iconColor = $derived(iconBg === 'white' ? 'text-eka-primary' : 'text-white')

  const hoverClasses = $derived(
    hoverable ? 'hover:shadow-xl transition-all duration-300 cursor-pointer' : '',
  )
</script>

<div
  class="group relative {bgClasses} rounded-2xl border {hoverClasses} p-8"
  role={hoverable ? 'button' : undefined}
  tabindex={hoverable ? 0 : undefined}
  on:mouseenter={onHover}
  on:mouseleave={onUnhover}
>
  {#if icon}
    <div class="mb-6 inline-block">
      <div class="p-4 {iconBgClasses[iconBg]} rounded-2xl group-hover:scale-110 transition-transform duration-300">
        <svelte:component this={icon} class="{iconSizeClasses[iconSize]} {iconColor}" />
      </div>
    </div>
  {/if}

  {@render children?.()}
</div>
