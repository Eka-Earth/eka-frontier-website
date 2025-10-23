<script lang="ts" context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import HamburgerButton from './HamburgerButton.svelte'

  const { Story } = defineMeta({
    component: HamburgerButton,
    title: 'Shared/HamburgerButton',
    tags: ['autodocs'],
    argTypes: {
      isOpen: {
        control: 'boolean',
      },
      color: {
        control: 'select',
        options: ['dark', 'light'],
      },
      onclick: { action: 'clicked' },
    },
  })
</script>

{#snippet template(args)}
  <div class="p-8 {args.color === 'light' ? 'bg-brand-primary-dark' : 'bg-white'} inline-block">
    <HamburgerButton {...args} />
  </div>
{/snippet}

<Story name="Closed Dark" args={{ isOpen: false, color: 'dark' }} {template} />

<Story name="Open Dark" args={{ isOpen: true, color: 'dark' }} {template} />

<Story
  name="Closed Light"
  args={{ isOpen: false, color: 'light' }}
  parameters={{ backgrounds: { default: 'dark' } }}
  {template}
/>

<Story
  name="Open Light"
  args={{ isOpen: true, color: 'light' }}
  parameters={{ backgrounds: { default: 'dark' } }}
  {template}
/>
