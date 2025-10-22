<script context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Card from './Card.svelte'
  import { LightBulbIcon } from 'heroicons-svelte/24/outline'

  const { Story } = defineMeta({
    component: Card,
    title: 'Shared/Card',
    tags: ['autodocs'],
    argTypes: {
      theme: {
        control: 'select',
        options: ['light', 'dark'],
      },
      iconBg: {
        control: 'select',
        options: ['primary', 'primary-light', 'white'],
      },
      iconSize: {
        control: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  })
</script>

<Story
  name="Light Theme with Icon"
  args={{ theme: 'light', icon: LightBulbIcon, iconBg: 'primary', iconSize: 'md' }}
>
  {#snippet children()}
    <h3 class="text-xl font-bold text-eka-primary-dark mb-3">Strategic Excellence</h3>
    <p class="text-gray-700">
      Expertise in commercial frameworks, market entry, and business architecture.
    </p>
  {/snippet}
</Story>

<Story
  name="Dark Theme with Icon"
  args={{ theme: 'dark', icon: LightBulbIcon, iconBg: 'primary', iconSize: 'lg' }}
  parameters={{ backgrounds: { default: 'dark' } }}
>
  {#snippet children()}
    <h3 class="text-2xl font-bold text-white mb-3">Advisory Catalyst</h3>
    <div class="inline-block px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-4">
      <p class="text-xs font-mono text-white">1 to 3 months</p>
    </div>
    <p class="text-gray-300">
      Rapid deployment of frontier expertise at pivotal moments. Strategic interventions that shift
      momentum.
    </p>
  {/snippet}
</Story>

<Story
  name="No Icon"
  args={{ theme: 'light' }}
>
  {#snippet children()}
    <h3 class="text-xl font-bold text-eka-primary-dark mb-3">Simple Card</h3>
    <p class="text-gray-700">A card without an icon.</p>
  {/snippet}
</Story>
