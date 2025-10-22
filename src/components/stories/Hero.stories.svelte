<script context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Hero from '../Hero.svelte'

  const { Story } = defineMeta({
    component: Hero,
    title: 'Components/Hero',
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
      backgrounds: { default: 'dark' },
    },
  })
</script>

<Story name="Default">
  <Hero />
</Story>
