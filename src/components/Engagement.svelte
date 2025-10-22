<script lang="ts">
  import { LightBulbIcon, BoltIcon, UserGroupIcon } from 'heroicons-svelte/24/outline'
  import type { ComponentType } from 'svelte'
  import SectionContainer from './shared/SectionContainer.svelte'
  import SectionHeader from './shared/SectionHeader.svelte'
  import Badge from './shared/Badge.svelte'
  import GridLayout from './shared/GridLayout.svelte'
  import Card from './shared/Card.svelte'

  let hoveredCard: number | null = null

  interface EngagementModel {
    title: string
    duration: string
    description: string
    icon: ComponentType
    highlights: string[]
  }

  const engagementModels: EngagementModel[] = [
    {
      title: 'Advisory Catalyst',
      duration: '1 to 3 months',
      description:
        'Rapid deployment of frontier expertise at pivotal moments. Strategic interventions that shift momentum.',
      icon: LightBulbIcon,
      highlights: ['Rapid deployment', 'Strategic interventions', 'Momentum shift'],
    },
    {
      title: 'Project Sprint',
      duration: '3 to 6 months',
      description:
        'Focused execution on critical initiatives and full product incubation - whether building breakthrough platforms or unlocking new markets.',
      icon: BoltIcon,
      highlights: ['Critical initiatives', 'End-to-end platform development', 'Rapid execution'],
    },
    {
      title: 'Strategic Leadership',
      duration: '6 to 12 months',
      description:
        'Full-scale transformation with embedded leadership to drive go-to-market, strategic growth, protocol development and market expansion.',
      icon: UserGroupIcon,
      highlights: ['Embedded leadership', 'Full-scale transformation', 'Market expansion'],
    },
  ]
</script>

<SectionContainer id="engagement" background="deep">
  <SectionHeader
    label="How We Work"
    title="Pathways to Impact"
    description="Flexible engagement models designed for the unique challenges of building at the frontier."
    theme="dark"
    align="center"
  />

  <GridLayout cols={{ md: 3 }} gap={6}>
    {#each engagementModels as model, index (model.title)}
      <Card
        variant="service"
        theme="dark"
        icon={model.icon}
        iconSize="lg"
        isHovered={hoveredCard === index}
        onHover={() => (hoveredCard = index)}
        onUnhover={() => (hoveredCard = null)}
        accentLine={true}
      >
        {#snippet title()}
          <h3
            class="text-2xl font-bold text-white mb-3 group-hover:text-eka-sage transition-all duration-300"
          >
            {model.title}
          </h3>
        {/snippet}

        {#snippet badge()}
          <Badge theme="dark" size="md"> {model.duration} </Badge>
        {/snippet}

        {#snippet description()}
          <p class="text-gray-300 leading-relaxed mb-6">{model.description}</p>
        {/snippet}

        {#snippet highlights()}
          <div
            class="space-y-2 {hoveredCard === index
              ? 'opacity-100'
              : 'opacity-0'} transition-opacity duration-500"
          >
            {#each model.highlights as highlight (highlight)}
              <div class="flex items-center">
                <div class="w-1.5 h-1.5 bg-eka-primary rounded-full mr-2"></div>
                <span class="text-sm text-gray-400">{highlight}</span>
              </div>
            {/each}
          </div>
        {/snippet}
      </Card>
    {/each}
  </GridLayout>
</SectionContainer>
