<script lang="ts">
  import type { ComponentType } from 'svelte'

  interface Props {
    icon?: ComponentType
    iconBg?: 'primary' | 'primary-light' | 'white'
    iconSize?: 'sm' | 'md' | 'lg'
    theme?: 'light' | 'dark'
    variant?: 'default' | 'service' | 'edge' | 'thematic'
    hoverable?: boolean
    shadowSize?: 'none' | 'xl' | '2xl'
    isHovered?: boolean
    isExpanded?: boolean
    onHover?: () => void
    onUnhover?: () => void
    onToggle?: () => void
    accentLine?: boolean
    minHeight?: string
    image?: string
    imageAlt?: string
    children?: import('svelte').Snippet
    title?: import('svelte').Snippet
    badge?: import('svelte').Snippet
    description?: import('svelte').Snippet
    highlights?: import('svelte').Snippet
    expandedContent?: import('svelte').Snippet
  }

  let {
    icon,
    iconBg = 'primary',
    iconSize = 'md',
    theme = 'light',
    variant = 'default',
    hoverable = true,
    shadowSize,
    isHovered = false,
    isExpanded = false,
    onHover,
    onUnhover,
    onToggle,
    accentLine = false,
    minHeight,
    image,
    imageAlt,
    children,
    title,
    badge,
    description,
    highlights,
    expandedContent,
  }: Props = $props()

  const bgClasses = $derived(
    theme === 'dark'
      ? 'bg-brand-navy/50 dark:bg-brand-navy/70 backdrop-blur-sm border-white/10 dark:border-white/20 hover:border-white/30 dark:hover:border-white/40 active:border-white/40 dark:active:border-white/50'
      : 'bg-white dark:bg-brand-navy/50 border-gray-200 dark:border-white/10 hover:border-brand-primary/30 dark:hover:border-white/30 active:border-brand-primary/40 dark:active:border-white/40'
  )

  const iconBgClasses = {
    primary: 'bg-brand-primary dark:bg-brand-primary-light',
    'primary-light': 'bg-brand-primary/10 dark:bg-brand-primary-light/20',
    white: 'bg-white dark:bg-brand-navy/50',
  }

  const iconSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }

  const iconColor = $derived(iconBg === 'white' ? 'text-brand-primary' : 'text-white')

  const hoverClasses = $derived(() => {
    const classes = []

    // Determine shadow size
    const effectiveShadow = shadowSize ?? (hoverable ? 'xl' : 'none')
    if (effectiveShadow === 'xl') {
      classes.push('hover:shadow-xl active:shadow-lg')
    } else if (effectiveShadow === '2xl') {
      classes.push('hover:shadow-2xl active:shadow-xl')
    }

    // Add cursor-pointer and active scale for tactile feedback
    if (hoverable) {
      classes.push('cursor-pointer active:scale-[0.99]')
    }

    return classes.join(' ')
  })

  const transitionClasses = $derived(
    theme === 'dark' ? 'transition-all duration-500' : 'transition-all duration-300'
  )

  const paddingClasses = $derived(
    variant === 'service' ? 'p-6 md:p-8 lg:p-10' : 'p-6 md:p-8'
  )

  const layoutClasses = $derived(variant === 'service' ? 'flex flex-col h-full' : '')

  const roundedClasses = $derived(variant === 'edge' ? 'rounded-xl' : 'rounded-2xl')

  const inlineIconClasses = $derived(theme === 'light' ? 'text-brand-primary' : 'text-white')
</script>

<div
  class="group relative {bgClasses} {roundedClasses} border {hoverClasses} {transitionClasses} overflow-hidden"
  style={minHeight ? `min-height: ${minHeight}` : undefined}
  role={hoverable ? 'button' : undefined}
  tabindex={hoverable ? 0 : undefined}
  onmouseenter={onHover}
  onmouseleave={onUnhover}
>
  <div class="{paddingClasses} {layoutClasses}">
    {#if variant === 'edge'}
      <!-- Edge card variant with inline icon and title -->
      <div class="flex items-center gap-3 mb-4">
        {#if icon}
          <svelte:component
            this={icon}
            class="{iconSizeClasses[iconSize]} {inlineIconClasses} flex-shrink-0"
          />
        {/if}
        {#if title}
          {@render title()}
        {/if}
      </div>

      {#if description}
        <div
          class="card-description {isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300"
        >
          {@render description()}
        </div>
      {/if}
    {:else if variant === 'thematic'}
      <!-- Thematic card variant with image header and expandable content -->
      {#if image}
        <div
          class="relative h-48 overflow-hidden bg-gradient-to-br from-brand-primary/10 to-brand-primary/20 dark:from-brand-primary-light/20 dark:to-brand-primary-light/30"
        >
          <img
            src={image}
            alt={imageAlt || ''}
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          ></div>
        </div>
      {/if}

      <div class="p-8">
        <div class="flex items-start justify-between mb-6">
          <div class="flex items-start flex-1">
            {#if icon}
              <div
                class="p-3 bg-brand-primary/10 dark:bg-brand-primary-light/20 rounded-xl mr-4 flex-shrink-0 group-hover:bg-brand-primary/20 dark:group-hover:bg-brand-primary-light/30 transition-colors"
              >
                <svelte:component
                  this={icon}
                  class="{iconSizeClasses[iconSize]} text-brand-primary dark:text-brand-primary-light"
                />
              </div>
            {/if}
            {#if title}
              {@render title()}
            {/if}
          </div>
          {#if onToggle}
            <button
              class="w-8 h-8 rounded-lg hover:bg-brand-primary/10 dark:hover:bg-brand-primary-light/20 transition-all flex items-center justify-center ml-4 text-gray-500 dark:text-gray-400 hover:text-brand-primary font-mono"
              onclick={onToggle}
              aria-label="Toggle details"
            >
              {isExpanded ? '−' : '+'}
            </button>
          {/if}
        </div>

        {#if isExpanded && expandedContent}
          <div class="animate-slide-down">
            {@render expandedContent()}
          </div>
        {/if}
      </div>
    {:else if variant === 'service'}
      <!-- Service card variant with structured layout -->
      <div class="mb-6">
        {#if icon}
          <div class="mb-6 inline-block">
            <div
              class="p-4 {iconBgClasses[
                iconBg
              ]} rounded-2xl group-hover:scale-110 transition-transform duration-300"
            >
              <svelte:component this={icon} class="{iconSizeClasses[iconSize]} {iconColor}" />
            </div>
          </div>
        {/if}

        {#if title}
          {@render title()}
        {/if}

        {#if badge}
          <div class="mb-6">
            {@render badge()}
          </div>
        {/if}
      </div>

      {#if description}
        {@render description()}
      {/if}

      {#if highlights}
        {@render highlights()}
      {/if}
    {:else}
      <!-- Default card variant -->
      {#if icon}
        <div class="mb-6 inline-block">
          <div
            class="p-4 {iconBgClasses[
              iconBg
            ]} rounded-2xl group-hover:scale-110 transition-transform duration-300"
          >
            <svelte:component this={icon} class="{iconSizeClasses[iconSize]} {iconColor}" />
          </div>
        </div>
      {/if}

      {@render children?.()}
    {/if}
  </div>

  {#if accentLine}
    <!-- Bottom accent line -->
    <div
      class="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
    ></div>
  {/if}
</div>

<style>
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slide-down {
    animation: slide-down 0.3s ease-out;
  }

  /* Progressive disclosure: always show description on touch devices */
  @media (hover: none) {
    .card-description {
      opacity: 1 !important;
    }
  }
</style>
