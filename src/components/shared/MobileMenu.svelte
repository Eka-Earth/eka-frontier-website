<script lang="ts">
  import type { Snippet } from 'svelte'

  export interface MenuItem {
    label: string
    id?: string
    onClick?: () => void
  }

  interface Props {
    isOpen?: boolean
    items?: MenuItem[]
    footer?: Snippet
  }

  let { isOpen = false, items = [], footer }: Props = $props()
</script>

<div
  class="fixed inset-0 bg-white z-[55] transition-opacity duration-300 {isOpen
    ? 'opacity-100 pointer-events-auto'
    : 'opacity-0 pointer-events-none'}"
  role="dialog"
  aria-modal="true"
  aria-label="Navigation menu"
  aria-hidden={!isOpen}
>
  <!-- Logo in menu -->
  <div class="absolute top-0 left-0 right-0 max-w-7xl mx-auto px-6 lg:px-12">
    <div class="flex items-center h-16">
      <img
        src="/logos/color-logo.svg"
        alt="Eka Frontier"
        class="h-8 w-auto transition-opacity duration-300"
        style="opacity: {isOpen ? 1 : 0};"
      />
    </div>
  </div>

  <div
    class="flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-24"
  >
    <nav class="space-y-6 md:space-y-8">
      {#each items as item, index (item.id || item.label)}
        <button
          onclick={item.onClick}
          class="block text-left text-3xl sm:text-4xl lg:text-5xl font-medium text-eka-primary-dark hover:text-eka-primary transition-all duration-300 hover:translate-x-2"
          style="transition-delay: {isOpen ? index * 0.05 : 0}s; opacity: {isOpen
            ? 1
            : 0}; transform: translateY({isOpen ? 0 : 20}px);"
        >
          {item.label}
        </button>
      {/each}
    </nav>

    {#if footer}
      <div
        class="pt-8 mt-8 border-t border-gray-200 transition-all duration-300"
        style="transition-delay: {isOpen ? items.length * 0.05 : 0}s; opacity: {isOpen
          ? 1
          : 0}; transform: translateY({isOpen ? 0 : 20}px);"
      >
        {@render footer()}
      </div>
    {/if}
  </div>
</div>
