<script context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Engagement from '../Engagement.svelte'

  const { Story } = defineMeta({
    component: Engagement,
    title: 'Components/Engagement',
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
      backgrounds: { default: 'dark' },
    },
  })
</script>

<Story name="Default">
  <Engagement />
</Story>
