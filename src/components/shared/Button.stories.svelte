<script lang="ts" context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Button from './Button.svelte'

  const { Story } = defineMeta({
    component: Button,
    title: 'Shared/Button',
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: 'select',
        options: ['primary', 'outline', 'text', 'ghost'],
      },
      size: {
        control: 'select',
        options: ['sm', 'md', 'lg'],
      },
      disabled: {
        control: 'boolean',
      },
      onclick: { action: 'clicked' },
    },
  })
</script>

{#snippet template(args)}
  <Button {...args}>
    {args.label || 'Button Label'}
  </Button>
{/snippet}

<Story
  name="Primary Medium"
  args={{
    variant: 'primary',
    size: 'md',
    label: 'Get Started',
    disabled: false,
  }}
  {template}
/>

<Story
  name="Primary Large (CTA)"
  args={{
    variant: 'primary',
    size: 'lg',
    label: "Let's Build Together",
    disabled: false,
  }}
  {template}
/>

<Story
  name="Primary Small"
  args={{
    variant: 'primary',
    size: 'sm',
    label: 'Learn More',
    disabled: false,
  }}
  {template}
/>

<Story
  name="Outline"
  args={{
    variant: 'outline',
    size: 'md',
    label: "Let's Explore Partnership",
    disabled: false,
  }}
  parameters={{ backgrounds: { default: 'dark' } }}
  {template}
/>

<Story
  name="Text"
  args={{
    variant: 'text',
    size: 'sm',
    label: 'Privacy Policy',
    disabled: false,
  }}
  {template}
/>

<Story
  name="Ghost"
  args={{
    variant: 'ghost',
    size: 'md',
    label: 'View More',
    disabled: false,
  }}
  parameters={{ backgrounds: { default: 'dark' } }}
  {template}
/>

<Story
  name="Disabled"
  args={{
    variant: 'primary',
    size: 'md',
    label: 'Disabled Button',
    disabled: true,
  }}
  {template}
/>
