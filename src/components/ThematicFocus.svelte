<script lang="ts">
  import { SunIcon, SparklesIcon, GlobeAltIcon } from 'heroicons-svelte/24/outline'
  import type { ComponentType } from 'svelte'
  import GridLayout from './shared/GridLayout.svelte'
  import SectionContainer from './shared/SectionContainer.svelte'
  import SectionHeader from './shared/SectionHeader.svelte'
  import Card from './shared/Card.svelte'

  let expandedIndex: number | null = null

  interface Theme {
    title: string
    thesis: string
    focus: string
    bullets: string[]
    icon: ComponentType
    metrics: string
    image: string
  }

  const themes: Theme[] = [
    {
      title: 'Renewable Energy Markets',
      thesis:
        'The renewable energy transition faces a dual imperative: meeting surging global demand whilst displacing entrenched fossil infrastructure, yet markets across emerging economies remain fragmented without interoperable systems for inclusive and efficient pricing, trading, and settlement.',
      focus:
        'We partner with companies innovating on market infrastructure this transition demands: trading platforms and grid optimisation systems, distributed resource coordination, and financing innovations that de-risk deployment at scale.',
      bullets: [
        'Trading platforms and grid optimisation systems',
        'Distributed resource coordination',
        'Financing innovations for scaled deployment',
        'Digital REC issuance & trading',
        'Green bond infrastructure',
        'EV charging network systems',
      ],
      icon: SunIcon,
      metrics: '$130T transition',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072',
    },
    {
      title: 'Regenerative Food Systems',
      thesis:
        'Globally, food systems need to meet the triple challenge of ensuring food security and nutrition for a growing population, providing livelihoods for farmers and others in the food supply chain, and improving the environmental sustainability of the sector, yet fragmented infrastructure and misaligned incentives hinder the coordinated transformation at scale required.',
      focus:
        'We partner with companies building the market infrastructure this transformation requires: ecosystem restoration verification systems, financial platforms that de-risk and incentivise regenerative transitions, and digital infrastructure connecting regenerative producers to values-aligned buyers and capital.',
      bullets: [
        'Ecosystem restoration verification systems',
        'Financial platforms for regenerative transitions',
        'Digital infrastructure for producer-buyer connections',
        'Supply chain traceability',
        'Smallholder finance systems',
        'Parametric insurance platforms',
      ],
      icon: SparklesIcon,
      metrics: '10B people by 2050',
      image: 'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?q=80&w=2070',
    },
    {
      title: 'Nature Finance',
      thesis:
        "Nature underpins over half of the world's GDP, yet faces systemic and cascading threats. There is enormous potential in mobilising financing, resources, and mainstreaming nature in capital markets to systemically drive effective nature-positive actions at scale.",
      focus:
        'We partner with companies building the standardised infrastructure markets that need to measure, value, and finance nature restoration and protection at scale: automated digital MRV systems, interoperable nature-based credit registries, financial innovations for nature-based solutions, and platforms transforming nature into investible assets.',
      bullets: [
        'Automated digital MRV systems',
        'Interoperable nature-based credit registries',
        'Financial innovations for nature-based solutions',
        'Platforms for investible nature assets',
        'Satellite-verified verification',
        'Nature-backed financial instruments',
      ],
      icon: GlobeAltIcon,
      metrics: '50% of global GDP',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071',
    },
    {
      title: 'Decentralised Technologies',
      thesis:
        'Resilient futures require distributed infrastructure that can withstand systemic shocks. When centralised systems fail, whether from extreme weather impacts, geopolitical disruption, or the systematic exclusion of vulnerable populations, communities need alternative rails for financial inclusion and resource coordination.',
      focus:
        'We partner with networks and protocols building the decentralised infrastructure resilient futures require: alternative economic and financial rails, shock-resilient mesh communication networks, self-sovereign identity systems, and peer-to-peer resource coordination platforms.',
      bullets: [
        'Alternative economic and financial rails',
        'Shock-resilient mesh communication networks',
        'Self-sovereign identity systems',
        'Peer-to-peer resource coordination',
        'Decentralised exchange protocols',
        'Cross-chain infrastructure',
      ],
      icon: GlobeAltIcon,
      metrics: 'Resilient systems',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072',
    },
  ]

  function toggleExpand(index: number): void {
    expandedIndex = expandedIndex === index ? null : index
  }
</script>

<SectionContainer id="themes" background="white">
  <SectionHeader
    label="Our Focus"
    title="Forging Regenerative and Resilient Futures"
    description="Partnering with organisations building the market infrastructure and technology solutions for planetary resilience."
    theme="light"
    align="center"
  />

  <GridLayout cols={{ md: 2 }} gap={8}>
    {#each themes as theme, index (theme.title)}
      <Card
        variant="thematic"
        theme="light"
        icon={theme.icon}
        iconSize="sm"
        image={theme.image}
        imageAlt={theme.title}
        isExpanded={expandedIndex === index}
        onToggle={() => toggleExpand(index)}
        shadowSize="2xl"
        hoverable={false}
      >
        {#snippet title()}
          <h3 class="text-xl font-bold text-brand-primary-dark dark:text-white flex-1">{theme.title}</h3>
        {/snippet}

        {#snippet expandedContent()}
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            <span class="font-semibold">Thesis:</span>
            {theme.thesis}
          </p>
          <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <span class="font-semibold">Focus:</span>
            {theme.focus}
          </p>
        {/snippet}
      </Card>
    {/each}
  </GridLayout>
</SectionContainer>
