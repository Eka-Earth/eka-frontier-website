<script lang="ts" context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import MobileMenu from './MobileMenu.svelte'

  const { Story } = defineMeta({
    component: MobileMenu,
    title: 'Shared/MobileMenu',
    tags: ['autodocs'],
    argTypes: {
      isOpen: {
        control: 'boolean',
      },
    },
  })

  const defaultItems = [
    {
      label: 'Our Edge',
      id: 'our-edge',
      onClick: () => console.log('Our Edge clicked'),
    },
    {
      label: 'Our Solutions',
      id: 'services',
      onClick: () => console.log('Our Solutions clicked'),
    },
    {
      label: 'Our Focus',
      id: 'themes',
      onClick: () => console.log('Our Focus clicked'),
    },
    {
      label: 'How We Work',
      id: 'engagement',
      onClick: () => console.log('How We Work clicked'),
    },
    {
      label: 'Work Together',
      id: 'contact',
      onClick: () => console.log('Work Together clicked'),
    },
  ]
</script>

{#snippet templateWithFooter(args)}
  <div class="relative h-screen">
    <MobileMenu {...args}>
      {#snippet footer()}
        <a
          href="mailto:contact@ekafrontier.io"
          class="text-lg text-gray-600 dark:text-gray-300 hover:text-brand-primary transition-colors"
        >
          contact@ekafrontier.io
        </a>
      {/snippet}
    </MobileMenu>
  </div>
{/snippet}

{#snippet templateWithExtendedFooter(args)}
  <div class="relative h-screen">
    <MobileMenu {...args}>
      {#snippet footer()}
        <div class="space-y-3">
          <a
            href="mailto:contact@ekafrontier.io"
            class="block text-lg text-gray-600 dark:text-gray-300 hover:text-brand-primary transition-colors"
          >
            contact@ekafrontier.io
          </a>
          <a
            href="https://linkedin.com"
            class="block text-sm text-gray-500 dark:text-gray-400 hover:text-brand-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      {/snippet}
    </MobileMenu>
  </div>
{/snippet}

{#snippet templateNoFooter(args)}
  <div class="relative h-screen">
    <MobileMenu {...args} />
  </div>
{/snippet}

<Story
  name="Open Menu"
  args={{ isOpen: true, items: defaultItems }}
  template={templateWithFooter}
/>

<Story
  name="Closed Menu"
  args={{ isOpen: false, items: defaultItems }}
  template={templateWithFooter}
/>

<Story
  name="Open Menu with Extended Footer"
  args={{ isOpen: true, items: defaultItems.slice(0, 3) }}
  template={templateWithExtendedFooter}
/>

<Story
  name="No Footer"
  args={{ isOpen: true, items: defaultItems }}
  template={templateNoFooter}
/>
