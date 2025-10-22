<script lang="ts" context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Contact from './Contact.svelte'

  const { Story } = defineMeta({
    component: Contact,
    title: 'Components/Contact',
    tags: ['autodocs'],
    argTypes: {
      email: {
        control: 'text',
      },
      headline: {
        control: 'text',
      },
      description: {
        control: 'text',
      },
      ctaText: {
        control: 'text',
      },
    },
  })
</script>

{#snippet template(args)}
  <Contact {...args} />
{/snippet}

<Story
  name="Default"
  args={{
    email: 'contact@ekafrontier.io',
    headline: "Let's forge regenerative and resilient futures",
    description:
      "Building breakthrough technology, scaling into new markets, architecting infrastructure for tomorrow's economy? Let's talk.",
    ctaText: 'Get in Touch',
  }}
  {template}
/>

<Story
  name="Custom Content"
  args={{
    email: 'hello@example.com',
    headline: 'Ready to transform your business',
    description: 'Partner with us to build the next generation of sustainable technology.',
    ctaText: 'Start Your Journey',
  }}
  {template}
/>

<Story
  name="Short Headline"
  args={{
    email: 'contact@ekafrontier.io',
    headline: "Let's build together",
    description: 'Simple, focused, and ready to make an impact.',
    ctaText: 'Contact Us',
  }}
  {template}
/>
