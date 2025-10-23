<script lang="ts">
  import { onMount } from 'svelte'
  import { SunIcon, MoonIcon } from 'heroicons-svelte/24/outline'

  interface Props {
    color?: 'light' | 'dark'
  }

  let { color = 'dark' }: Props = $props()

  let isDark = $state(false)

  onMount(() => {
    // Check initial theme
    isDark = document.documentElement.classList.contains('dark')
  })

  function toggleTheme(): void {
    const html = document.documentElement
    const newTheme = isDark ? 'light' : 'dark'

    if (newTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }

    localStorage.setItem('eka-theme', newTheme)
    isDark = !isDark
  }

  const iconColor = $derived(color === 'light' ? 'text-white' : 'text-text-secondary')
  const bgClasses = $derived(
    color === 'light'
      ? 'hover:bg-white/20 active:bg-white/30'
      : 'hover:bg-accent-bg active:bg-accent-bg-hover'
  )
  const hoverColor = $derived(
    color === 'light'
      ? 'hover:text-white'
      : 'hover:text-brand-primary dark:hover:text-brand-primary-light'
  )
</script>

<button
  onclick={toggleTheme}
  class="p-2 rounded-lg {bgClasses} transition-colors duration-200 {iconColor} {hoverColor}"
  aria-label="Toggle theme"
  title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {#if isDark}
    <SunIcon class="w-5 h-5" />
  {:else}
    <MoonIcon class="w-5 h-5" />
  {/if}
</button>
