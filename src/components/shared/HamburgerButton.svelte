<script lang="ts">
  interface Props {
    isOpen?: boolean
    color?: 'dark' | 'light'
    onclick?: () => void
  }

  let { isOpen = false, color = 'dark', onclick }: Props = $props()

  const colorClasses = {
    dark: 'bg-eka-primary-dark',
    light: 'bg-white',
  }
</script>

<button
  class="p-2 flex items-center justify-center"
  {onclick}
  aria-label="Toggle menu"
  aria-expanded={isOpen}
>
  <div class="w-6 h-5 relative flex flex-col justify-between">
    <span
      class="absolute w-full h-0.5 {colorClasses[
        color
      ]} transition-all duration-300 ease-in-out origin-center {isOpen
        ? 'rotate-45 top-[9px]'
        : 'top-0'}"
    ></span>
    <span
      class="absolute w-full h-0.5 {colorClasses[
        color
      ]} transition-all duration-300 ease-in-out top-[9px] {isOpen
        ? 'opacity-0 scale-0'
        : 'opacity-100 scale-100'}"
    ></span>
    <span
      class="absolute w-full h-0.5 {colorClasses[
        color
      ]} transition-all duration-300 ease-in-out origin-center {isOpen
        ? '-rotate-45 top-[9px]'
        : 'top-[18px]'}"
    ></span>
  </div>
</button>
