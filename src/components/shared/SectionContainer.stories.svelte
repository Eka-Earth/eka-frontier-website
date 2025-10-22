<script context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import SectionContainer from './SectionContainer.svelte'

  const { Story } = defineMeta({
    component: SectionContainer,
    title: 'Shared/SectionContainer',
    tags: ['autodocs'],
    argTypes: {
      background: {
        control: 'select',
        options: ['light', 'dark', 'deep', 'white'],
      },
    },
  })
</script>

<Story name="Light Background" args={{ background: 'light' }}>
  {#snippet children()}
    <div class="text-center">
      <h2 class="text-3xl font-bold text-eka-primary-dark">Light Background Section</h2>
      <p class="text-gray-700 mt-4">
        This is a section container with a light background.
      </p>
    </div>
  {/snippet}
</Story>

<Story name="Dark Background" args={{ background: 'dark' }}>
  {#snippet children()}
    <div class="text-center">
      <h2 class="text-3xl font-bold text-white">Dark Background Section</h2>
      <p class="text-gray-300 mt-4">This is a section container with a dark background.</p>
    </div>
  {/snippet}
</Story>

<Story name="Deep Background" args={{ background: 'deep' }}>
  {#snippet children()}
    <div class="text-center">
      <h2 class="text-3xl font-bold text-white">Deep Background Section</h2>
      <p class="text-gray-300 mt-4">This is a section container with a deep background.</p>
    </div>
  {/snippet}
</Story>
