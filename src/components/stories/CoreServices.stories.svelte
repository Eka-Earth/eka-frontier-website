<script context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import CoreServices from '../CoreServices.svelte'

  const { Story } = defineMeta({
    component: CoreServices,
    title: 'Components/CoreServices',
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
      backgrounds: { default: 'dark' },
    },
  })
</script>

<Story name="Default">
  <CoreServices />
</Story>
