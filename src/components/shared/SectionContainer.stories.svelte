<script lang="ts" context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import SectionContainer from './SectionContainer.svelte'

  const { Story } = defineMeta({
    component: SectionContainer,
    title: 'Shared/SectionContainer',
    tags: ['autodocs'],
    argTypes: {
      background: {
        control: 'select',
        options: ['light', 'dark', 'deep', 'white', 'gradient'],
      },
      pattern: {
        control: 'boolean',
      },
    },
  })
</script>

{#snippet lightTemplate(args)}
  <SectionContainer {...args}>
    <div class="text-center">
      <h2 class="text-3xl font-bold text-brand-primary-dark dark:text-white">Light Background Section</h2>
      <p class="text-gray-700 dark:text-gray-300 mt-4">This is a section container with a light background.</p>
    </div>
  </SectionContainer>
{/snippet}

{#snippet darkTemplate(args)}
  <SectionContainer {...args}>
    <div class="text-center">
      <h2 class="text-3xl font-bold text-white">Dark Background Section</h2>
      <p class="text-gray-300 mt-4">This is a section container with a dark background.</p>
    </div>
  </SectionContainer>
{/snippet}

{#snippet deepTemplate(args)}
  <SectionContainer {...args}>
    <div class="text-center">
      <h2 class="text-3xl font-bold text-white">Deep Background Section</h2>
      <p class="text-gray-300 mt-4">This is a section container with a deep background.</p>
    </div>
  </SectionContainer>
{/snippet}

{#snippet gradientTemplate(args)}
  <SectionContainer {...args}>
    <div class="text-center">
      <h2 class="text-3xl font-bold text-brand-primary-dark dark:text-white">Gradient Background Section</h2>
      <p class="text-gray-700 dark:text-gray-300 mt-4">
        This is a section container with a gradient background from light to mint.
      </p>
    </div>
  </SectionContainer>
{/snippet}

<Story
  name="Light Background"
  args={{ background: 'light', pattern: false }}
  template={lightTemplate}
/>

<Story
  name="Dark Background"
  args={{ background: 'dark', pattern: false }}
  template={darkTemplate}
/>

<Story
  name="Deep Background"
  args={{ background: 'deep', pattern: false }}
  template={deepTemplate}
/>

<Story
  name="Deep Background with Pattern"
  args={{ background: 'deep', pattern: true }}
  template={deepTemplate}
/>

<Story
  name="Gradient Background"
  args={{ background: 'gradient', pattern: false }}
  template={gradientTemplate}
/>

<Story
  name="Gradient Background with Pattern"
  args={{ background: 'gradient', pattern: true }}
  template={gradientTemplate}
/>
