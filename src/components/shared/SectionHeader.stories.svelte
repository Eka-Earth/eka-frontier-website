<script lang="ts" context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import SectionHeader from './SectionHeader.svelte'

  const { Story } = defineMeta({
    component: SectionHeader,
    title: 'Shared/SectionHeader',
    tags: ['autodocs'],
    argTypes: {
      theme: {
        control: 'select',
        options: ['light', 'dark'],
      },
      align: {
        control: 'select',
        options: ['left', 'center'],
      },
    },
  })
</script>

{#snippet template(args)}
  <SectionHeader {...args} />
{/snippet}

<Story
  name="Light Theme Centered"
  args={{
    label: 'Our Services',
    title: 'Building the Future',
    description:
      'We partner with organisations building the market infrastructure and technology solutions for planetary resilience.',
    theme: 'light',
    align: 'center',
  }}
  {template}
/>

<Story
  name="Dark Theme Centered"
  args={{
    label: 'How We Work',
    title: 'Pathways to Impact',
    description:
      'Flexible engagement models designed for the unique challenges of building at the frontier.',
    theme: 'dark',
    align: 'center',
  }}
  parameters={{ backgrounds: { default: 'dark' } }}
  {template}
/>

<Story
  name="Left Aligned"
  args={{
    label: 'Our Edge',
    title: 'Innovations at the Frontier',
    description:
      'Capabilities forged through a decade building at the frontier across markets, spanning platform engineering, strategic growth, and operational scale.',
    theme: 'light',
    align: 'left',
  }}
  {template}
/>
