<script lang="ts" context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import HeroSection from './HeroSection.svelte'

  const { Story } = defineMeta({
    component: HeroSection,
    title: 'Shared/HeroSection',
    tags: ['autodocs'],
    argTypes: {
      backgroundImage: {
        control: 'text',
      },
      backgroundOverlay: {
        control: 'boolean',
      },
      title: {
        control: 'text',
      },
      titleHighlight: {
        control: 'text',
      },
      description: {
        control: 'text',
      },
      minHeight: {
        control: 'text',
      },
    },
  })
</script>

{#snippet template(args)}
  <HeroSection {...args} />
{/snippet}

<Story
  name="Full Hero"
  args={{
    backgroundImage: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=3432',
    backgroundOverlay: true,
    title: 'Building Digital Infrastructure',
    titleHighlight: 'for Resilient Futures',
    description:
      "Partnering with frontier organisations to architect, grow, and scale digital rails for tomorrow's resilient, regenerative economy.",
    buttons: [
      {
        label: 'Explore Our Solutions',
        variant: 'primary',
        onClick: () => console.log('Primary button clicked'),
      },
      {
        label: "Let's Build Together",
        variant: 'outline',
        onClick: () => console.log('Outline button clicked'),
      },
    ],
  }}
  {template}
/>

<Story
  name="Simple Hero"
  args={{
    backgroundImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=3432',
    backgroundOverlay: true,
    title: 'Welcome to Our Platform',
    description: 'Building the future of sustainable technology.',
    buttons: [
      {
        label: 'Get Started',
        variant: 'primary',
        onClick: () => console.log('Get Started clicked'),
      },
    ],
  }}
  {template}
/>

<Story
  name="No Background"
  args={{
    title: 'Our Mission',
    titleHighlight: 'Make an Impact',
    description: 'Join us in building a better tomorrow.',
    minHeight: 'min-h-[60vh]',
  }}
  {template}
/>

<Story
  name="Title Only"
  args={{
    backgroundImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=3432',
    backgroundOverlay: true,
    title: 'Bold Statement',
    minHeight: 'min-h-[50vh]',
  }}
  {template}
/>
