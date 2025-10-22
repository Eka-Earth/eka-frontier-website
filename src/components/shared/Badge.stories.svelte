<script lang="ts" context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Badge from './Badge.svelte'

  const { Story } = defineMeta({
    component: Badge,
    title: 'Shared/Badge',
    tags: ['autodocs'],
    argTypes: {
      theme: {
        control: 'select',
        options: ['light', 'dark'],
      },
      size: {
        control: 'select',
        options: ['sm', 'md'],
      },
    },
  })
</script>

{#snippet template(args)}
  <Badge {...args}>
    {args.text || 'Badge Text'}
  </Badge>
{/snippet}

<Story
  name="Dark Theme - Duration"
  args={{
    theme: 'dark',
    size: 'md',
    text: '3 to 6 months',
  }}
  parameters={{ backgrounds: { default: 'dark' } }}
  {template}
/>

<Story
  name="Dark Theme - Expertise"
  args={{
    theme: 'dark',
    size: 'md',
    text: 'Venture Architecture & Engineering',
  }}
  parameters={{ backgrounds: { default: 'dark' } }}
  {template}
/>

<Story
  name="Light Theme"
  args={{
    theme: 'light',
    size: 'md',
    text: 'Strategic Advisory',
  }}
  {template}
/>

<Story
  name="Small Size"
  args={{
    theme: 'dark',
    size: 'sm',
    text: 'Small Badge',
  }}
  parameters={{ backgrounds: { default: 'dark' } }}
  {template}
/>

<Story
  name="Medium Size"
  args={{
    theme: 'dark',
    size: 'md',
    text: 'Medium Badge',
  }}
  parameters={{ backgrounds: { default: 'dark' } }}
  {template}
/>
