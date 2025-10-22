<script lang="ts">
  interface Props {
    variant?: 'primary' | 'outline' | 'text' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    onclick?: () => void
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    children?: import('svelte').Snippet
  }

  let {
    variant = 'primary',
    size = 'md',
    onclick,
    disabled = false,
    type = 'button',
    children,
  }: Props = $props()

  const baseClasses =
    'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center'

  const variantClasses = $derived(
    {
      primary:
        'bg-eka-primary text-white hover:bg-eka-primary-dark active:bg-eka-primary-dark active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed',
      outline:
        'border-2 border-white text-white hover:bg-white/10 active:bg-white/20 active:scale-[0.98] backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed',
      text: 'text-gray-600 hover:text-eka-primary active:text-eka-primary-dark disabled:opacity-50 disabled:cursor-not-allowed',
      ghost:
        'text-white hover:bg-white/10 active:bg-white/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed',
    }[variant]
  )

  const sizeClasses = $derived(
    {
      sm: 'px-6 py-2 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg font-bold',
    }[size]
  )
</script>

<button class="{baseClasses} {variantClasses} {sizeClasses}" {type} {disabled} {onclick}>
  {@render children?.()}
</button>
