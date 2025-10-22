<script context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import ThematicFocus from '../ThematicFocus.svelte'

  const { Story } = defineMeta({
    component: ThematicFocus,
    title: 'Components/ThematicFocus',
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
  })
</script>

<Story name="Default">
  <ThematicFocus />
</Story>
