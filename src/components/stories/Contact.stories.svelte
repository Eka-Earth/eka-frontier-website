<script context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Contact from '../Contact.svelte'

  const { Story } = defineMeta({
    component: Contact,
    title: 'Components/Contact',
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
  })
</script>

<Story name="Default">
  <Contact />
</Story>
