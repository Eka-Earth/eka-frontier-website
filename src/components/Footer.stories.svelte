<script lang="ts" context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Footer from './Footer.svelte'
  import LinkedInIcon from './icons/LinkedInIcon.svelte'
  import type { NavigationLink, SocialLink } from './Footer.svelte'

  const { Story } = defineMeta({
    component: Footer,
    title: 'Components/Footer',
    tags: ['autodocs'],
  })

  const defaultNavigationLinks: NavigationLink[] = [
    { label: 'Our Edge', sectionId: 'our-edge' },
    { label: 'Our Solutions', sectionId: 'services' },
    { label: 'Our Focus', sectionId: 'themes' },
    { label: 'How We Work', sectionId: 'engagement' },
    { label: 'Privacy Policy', href: '#privacy-policy' },
  ]

  const defaultSocialLinks: SocialLink[] = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/ekafrontier',
      icon: LinkedInIcon,
    },
  ]
</script>

{#snippet template(args)}
  <Footer {...args} />
{/snippet}

<Story
  name="Complete Footer"
  args={{
    navigationLinks: defaultNavigationLinks,
    socialLinks: defaultSocialLinks,
    email: 'contact@ekafrontier.io',
    copyright: '© 2025 Eka Frontier',
  }}
  {template}
/>

<Story
  name="Minimal Footer"
  args={{
    navigationLinks: [],
    socialLinks: [],
    email: 'contact@ekafrontier.io',
    copyright: '© 2025 Eka Frontier',
  }}
  {template}
/>

<Story
  name="Navigation Only"
  args={{
    navigationLinks: defaultNavigationLinks,
    socialLinks: [],
    copyright: '© 2025 Eka Frontier',
  }}
  {template}
/>

<Story
  name="Social Links Only"
  args={{
    navigationLinks: [],
    socialLinks: defaultSocialLinks,
    email: 'hello@example.com',
    copyright: '© 2025 Example Company',
  }}
  {template}
/>

<Story
  name="Custom Links"
  args={{
    navigationLinks: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    socialLinks: defaultSocialLinks,
    email: 'info@company.com',
    copyright: '© 2025 Custom Company',
  }}
  {template}
/>
