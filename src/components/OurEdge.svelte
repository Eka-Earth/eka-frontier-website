<script lang="ts">
  import {
    ChartBarIcon,
    CodeBracketIcon,
    ServerIcon,
    ArrowTrendingUpIcon,
    Squares2x2Icon,
    GlobeAltIcon,
  } from 'heroicons-svelte/24/outline'
  import type { ComponentType } from 'svelte'
  import SectionContainer from './shared/SectionContainer.svelte'
  import SectionHeader from './shared/SectionHeader.svelte'
  import GridLayout from './shared/GridLayout.svelte'
  import Card from './shared/Card.svelte'

  let hoveredIndex: number | null = null

  interface EdgeFactor {
    title: string
    description: string
    icon: ComponentType
  }

  const edgeFactors: EdgeFactor[] = [
    {
      title: 'Strategic Excellence',
      description:
        "Expertise in commercial frameworks, market entry, and business architecture. We've scaled businesses from zero to market leadership across financial platforms, infrastructure, and frontier technologies.",
      icon: ChartBarIcon,
    },
    {
      title: 'Technical Mastery',
      description:
        "Deep capabilities in platform engineering and systems architecture. We've engineered digital infrastructure from blockchain solutions to AI-powered systems, with security and scalability embedded from inception.",
      icon: CodeBracketIcon,
    },
    {
      title: 'Market Infrastructure Expertise',
      description:
        "Specialised in digital finance platforms, market exchanges, and data systems. We've architected platforms from business design to market launch in complex regulated markets.",
      icon: ServerIcon,
    },
    {
      title: 'Growth Architecture',
      description:
        "Expertise in growth strategy and market scaling. We've accelerated ventures from concept to leadership across frontier markets, architecting systems that unlock exponential growth trajectories.",
      icon: ArrowTrendingUpIcon,
    },
    {
      title: 'Scale Structuring',
      description:
        "Track record in designing operational systems for scale. We've built infrastructure enabling high-volume transaction processing and resilient operations across diverse markets.",
      icon: Squares2x2Icon,
    },
    {
      title: 'Frontier Markets Leadership',
      description:
        'Over a decade navigating regulatory landscapes and building operational networks. Deep operational networks from Hong Kong to Asia Pacific, with track record in sustainability innovation, fintech, Web3, and regenerative economy sectors.',
      icon: GlobeAltIcon,
    },
  ]
</script>

<SectionContainer id="our-edge" background="light">
  <SectionHeader
    label="Our Edge"
    title="Innovations at the Frontier"
    description="Capabilities forged through a decade building at the frontier across markets, spanning platform engineering, strategic growth, and operational scale."
    theme="light"
    align="center"
  />

  <GridLayout cols={{ md: 2, lg: 3 }} gap={6}>
    {#each edgeFactors as factor, index (factor.title)}
      <Card
        variant="edge"
        theme="light"
        icon={factor.icon}
        iconSize="sm"
        isHovered={hoveredIndex === index}
        onHover={() => (hoveredIndex = index)}
        onUnhover={() => (hoveredIndex = null)}
        minHeight="250px"
      >
        {#snippet title()}
          <h3
            class="text-lg font-medium {hoveredIndex === index
              ? 'text-eka-primary'
              : 'text-eka-primary-dark'} transition-colors"
          >
            {factor.title}
          </h3>
        {/snippet}

        {#snippet description()}
          <p class="text-sm text-gray-600 leading-relaxed">{factor.description}</p>
        {/snippet}
      </Card>
    {/each}
  </GridLayout>
</SectionContainer>
