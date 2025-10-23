<script lang="ts" context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import GridLayout from './GridLayout.svelte'

  const { Story } = defineMeta({
    component: GridLayout,
    title: 'Shared/GridLayout',
    tags: ['autodocs'],
    argTypes: {
      gap: {
        control: 'number',
      },
    },
  })
</script>

{#snippet twoColumnsTemplate(args)}
  <GridLayout cols={{ md: 2 }} gap={args.gap || 6}>
    <div class="bg-brand-primary/10 p-6 rounded-lg border border-brand-primary/20">
      <h3 class="font-bold mb-2">Item 1</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Grid item content</p>
    </div>
    <div class="bg-brand-primary/10 p-6 rounded-lg border border-brand-primary/20">
      <h3 class="font-bold mb-2">Item 2</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Grid item content</p>
    </div>
    <div class="bg-brand-primary/10 p-6 rounded-lg border border-brand-primary/20">
      <h3 class="font-bold mb-2">Item 3</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Grid item content</p>
    </div>
    <div class="bg-brand-primary/10 p-6 rounded-lg border border-brand-primary/20">
      <h3 class="font-bold mb-2">Item 4</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Grid item content</p>
    </div>
  </GridLayout>
{/snippet}

{#snippet threeColumnsTemplate(args)}
  <GridLayout cols={{ md: 2, lg: 3 }} gap={args.gap || 6}>
    <div class="bg-brand-accent/10 p-6 rounded-lg border border-brand-accent/20">
      <h3 class="font-bold mb-2">Item 1</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Grid item content</p>
    </div>
    <div class="bg-brand-accent/10 p-6 rounded-lg border border-brand-accent/20">
      <h3 class="font-bold mb-2">Item 2</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Grid item content</p>
    </div>
    <div class="bg-brand-accent/10 p-6 rounded-lg border border-brand-accent/20">
      <h3 class="font-bold mb-2">Item 3</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Grid item content</p>
    </div>
    <div class="bg-brand-accent/10 p-6 rounded-lg border border-brand-accent/20">
      <h3 class="font-bold mb-2">Item 4</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Grid item content</p>
    </div>
    <div class="bg-brand-accent/10 p-6 rounded-lg border border-brand-accent/20">
      <h3 class="font-bold mb-2">Item 5</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Grid item content</p>
    </div>
    <div class="bg-brand-accent/10 p-6 rounded-lg border border-brand-accent/20">
      <h3 class="font-bold mb-2">Item 6</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Grid item content</p>
    </div>
  </GridLayout>
{/snippet}

{#snippet responsiveTemplate(args)}
  <div class="space-y-4">
    <p class="text-sm text-gray-600 dark:text-gray-400">
      This grid adapts from 1 column on mobile → 2 on tablet → 4 on desktop
    </p>
    <GridLayout cols={{ sm: 1, md: 2, lg: 4 }} gap={args.gap || 6}>
      <div class="bg-brand-sage/20 p-6 rounded-lg border border-brand-sage/40">
        <h3 class="font-bold mb-2">Item 1</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Responsive grid item</p>
      </div>
      <div class="bg-brand-sage/20 p-6 rounded-lg border border-brand-sage/40">
        <h3 class="font-bold mb-2">Item 2</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Responsive grid item</p>
      </div>
      <div class="bg-brand-sage/20 p-6 rounded-lg border border-brand-sage/40">
        <h3 class="font-bold mb-2">Item 3</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Responsive grid item</p>
      </div>
      <div class="bg-brand-sage/20 p-6 rounded-lg border border-brand-sage/40">
        <h3 class="font-bold mb-2">Item 4</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Responsive grid item</p>
      </div>
    </GridLayout>
  </div>
{/snippet}

<Story name="Two Columns" args={{ gap: 6 }} template={twoColumnsTemplate} />

<Story name="Three Columns" args={{ gap: 6 }} template={threeColumnsTemplate} />

<Story name="Responsive Layout" args={{ gap: 6 }} template={responsiveTemplate} />

<Story name="Large Gap" args={{ gap: 8 }} template={twoColumnsTemplate} />

<Story name="Small Gap" args={{ gap: 4 }} template={threeColumnsTemplate} />
