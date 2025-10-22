<script lang="ts">
  import HeroSection from './shared/HeroSection.svelte'

  const buttons = [
    {
      label: 'Explore Our Solutions',
      variant: 'primary' as const,
      onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      label: "Let's Build Together",
      variant: 'outline' as const,
      onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
    },
  ]
</script>

<HeroSection
  backgroundImage="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=3432"
  backgroundOverlay={true}
  title="Building Digital Infrastructure"
  titleHighlight="for Resilient Futures"
  description="Partnering with frontier organisations to architect, grow, and scale digital rails for tomorrow's resilient, regenerative economy."
  {buttons}
/>
