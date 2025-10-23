<script lang="ts">
  import { ArchiveBoxIcon, ArrowTrendingUpIcon } from 'heroicons-svelte/24/outline'
  import type { ComponentType } from 'svelte'
  import SectionContainer from './shared/SectionContainer.svelte'
  import SectionHeader from './shared/SectionHeader.svelte'
  import Badge from './shared/Badge.svelte'
  import Button from './shared/Button.svelte'
  import GridLayout from './shared/GridLayout.svelte'
  import Card from './shared/Card.svelte'

  let hoveredCard: number | null = null

  interface Service {
    id: string
    action: string
    expertise: string
    title: string
    description: string
    highlights: string[]
    icon: ComponentType
  }

  const services: Service[] = [
    {
      id: 'build',
      action: 'BUILD',
      expertise: 'Venture Architecture & Engineering',
      title: 'Business Design and Platform Engineering',
      description:
        'From business to technical architecture, we partner with visionary teams to design and build resilient digital market and financial infrastructure. We structure commercial frameworks, design product strategies, and engineer secure platforms — creating institutional-grade foundations where strategy and technology align seamlessly to power impact at scale.',
      highlights: [
        'Digital finance infrastructure',
        'Market platforms and exchanges',
        'Data and verification protocols',
      ],
      icon: ArchiveBoxIcon,
    },
    {
      id: 'grow-scale',
      action: 'GROW & SCALE',
      expertise: 'Strategy & Operations',
      title: 'Growth Architecture and Scaling Systems',
      description:
        'We accelerate the journey from early traction to market leadership with strategic and operational precision. Whether organisations are finding product-market fit or expanding into new markets, we bring market intelligence, tailored strategies, and adaptive systems — orchestrating partnerships, optimising positioning, and building the infrastructure to power growth at every stage.',
      highlights: [
        'Partnership ecosystem development',
        'Growth and operational systems',
        'Market entry and expansion',
      ],
      icon: ArrowTrendingUpIcon,
    },
  ]
</script>

<SectionContainer id="services" background="deep" pattern={true}>
  <SectionHeader
    label="Our Solutions"
    title="Build. Grow & Scale."
    description="Combining strategic expertise with operational and technical capabilities, we partner with next-gen companies to architect and scale transformative market infrastructure."
    theme="dark"
    align="center"
  />

  <!-- Service cards grid -->
  <GridLayout cols={{ lg: 2 }} gap={8}>
    {#each services as service, index (service.id)}
      <Card
        variant="service"
        theme="dark"
        icon={service.icon}
        iconSize="lg"
        isHovered={hoveredCard === index}
        onHover={() => (hoveredCard = index)}
        onUnhover={() => (hoveredCard = null)}
      >
        {#snippet title()}
          <h3
            class="text-3xl font-bold text-white mb-3 group-hover:text-brand-sage transition-all duration-300"
          >
            {service.action}
          </h3>
        {/snippet}

        {#snippet badge()}
          <Badge theme="dark" size="md">{service.expertise}</Badge>
        {/snippet}

        {#snippet description()}
          <p class="text-gray-300 leading-relaxed mb-6">
            {service.description}
          </p>
        {/snippet}

        {#snippet highlights()}
          <div
            class="service-highlights space-y-2 {hoveredCard === index
              ? 'opacity-100'
              : 'opacity-0'} transition-opacity duration-500"
          >
            {#each service.highlights as highlight (highlight)}
              <div class="flex items-center">
                <div class="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></div>
                <span class="text-sm text-gray-400">{highlight}</span>
              </div>
            {/each}
          </div>
        {/snippet}
      </Card>
    {/each}
  </GridLayout>

  <!-- Call to action -->
  <div class="mt-20 flex justify-center">
    <Button
      variant="outline"
      size="md"
      onclick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    >
      Let's Explore Partnership
    </Button>
  </div>
</SectionContainer>

<style>
  /* Progressive disclosure: always show highlights on touch devices */
  @media (hover: none) {
    .service-highlights {
      opacity: 1 !important;
    }
  }
</style>
