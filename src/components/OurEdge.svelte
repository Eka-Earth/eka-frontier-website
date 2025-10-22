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

<section id="our-edge" class="py-24 bg-eka-light">
  <div class="container-width section-padding">
    <div class="text-center mb-16">
      <div class="inline-block mb-6">
        <span class="text-sm font-mono text-gray-600 tracking-wider uppercase">[ Our Edge ]</span>
      </div>
      <h2 class="text-4xl lg:text-5xl font-bold text-eka-primary-dark mb-6">
        Innovations at the Frontier
      </h2>
      <p class="text-xl text-gray-700 max-w-4xl mx-auto">
        Capabilities forged through a decade building at the frontier across markets, spanning
        platform engineering, strategic growth, and operational scale.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each edgeFactors as factor, index (factor.title)}
        <div
          class="group relative bg-white rounded-xl border border-gray-200 hover:border-eka-primary/30 p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
          style="min-height: 250px"
          on:mouseenter={() => (hoveredIndex = index)}
          on:mouseleave={() => (hoveredIndex = null)}
        >
          <!-- Title always visible -->
          <div class="flex items-center gap-3 mb-4">
            <svelte:component
              this={factor.icon}
              class="w-6 h-6 text-eka-primary flex-shrink-0"
            />
            <h3
              class="text-lg font-medium {hoveredIndex === index
                ? 'text-eka-primary'
                : 'text-eka-primary-dark'} transition-colors"
            >
              {factor.title}
            </h3>
          </div>

          <!-- Description with fade in/out -->
          <div
            class="{hoveredIndex === index
              ? 'opacity-100'
              : 'opacity-0'} transition-opacity duration-300"
          >
            <p class="text-sm text-gray-600 leading-relaxed">{factor.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-in-out;
  }
</style>
