<script lang="ts">
  import { LightBulbIcon, BoltIcon, UserGroupIcon } from 'heroicons-svelte/24/outline'
  import type { ComponentType } from 'svelte'

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

<section id="engagement" class="py-24 bg-eka-deep">
  <div class="container-width section-padding">
    <div class="text-center mb-16">
      <div class="inline-block mb-6">
        <span class="text-sm font-mono text-gray-400 tracking-wider uppercase">[ How We Work ]</span
        >
      </div>
      <h2 class="text-5xl lg:text-6xl font-bold text-white mb-6">Pathways to Impact</h2>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        Flexible engagement models designed for the unique challenges of building at the frontier.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      {#each engagementModels as model, index (model.title)}
        <div
          class="group relative bg-eka-navy/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden cursor-pointer"
          on:mouseenter={() => (hoveredCard = index)}
          on:mouseleave={() => (hoveredCard = null)}
        >
          <div class="relative p-10">
            <!-- Icon with solid blue background -->
            <div class="mb-6 inline-block">
              <div
                class="p-4 bg-eka-primary rounded-2xl group-hover:scale-110 transition-transform duration-300"
              >
                <svelte:component this={model.icon} class="w-10 h-10 text-white" />
              </div>
            </div>

            <!-- Title with blue on hover -->
            <h3
              class="text-2xl font-bold text-white mb-3 group-hover:text-eka-sage transition-all duration-300"
            >
              {model.title}
            </h3>

            <!-- Duration badge -->
            <div
              class="inline-block px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6"
            >
              <p class="text-xs font-mono text-white">{model.duration}</p>
            </div>

            <!-- Description -->
            <p class="text-gray-300 leading-relaxed mb-6">{model.description}</p>

            <!-- Highlights - visible on hover -->
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
          </div>

          <!-- Bottom accent line -->
          <div
            class="absolute bottom-0 left-0 right-0 h-0.5 bg-eka-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          ></div>
        </div>
      {/each}
    </div>
  </div>
</section>
