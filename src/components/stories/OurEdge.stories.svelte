<script context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import OurEdge from '../OurEdge.svelte'

  const { Story } = defineMeta({
    component: OurEdge,
    title: 'Components/OurEdge',
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
  })
</script>

<Story name="Default">
  <OurEdge />
</Story>
