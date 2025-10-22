<script lang="ts">
  import { SunIcon, SparklesIcon, GlobeAltIcon } from 'heroicons-svelte/24/outline'
  import type { ComponentType } from 'svelte'

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

<section id="themes" class="py-24 bg-white relative overflow-hidden">
  <div class="relative z-10 container-width section-padding">
    <div class="text-center mb-16">
      <div class="inline-block mb-6">
        <span class="text-sm font-mono text-gray-600 tracking-wider uppercase">[ Our Focus ]</span>
      </div>
      <h2 class="text-4xl lg:text-5xl font-bold text-eka-primary-dark mb-6">
        Forging Regenerative and Resilient Futures
      </h2>
      <p class="text-lg text-gray-700 max-w-5xl mx-auto">
        Partnering with organisations building the market infrastructure and technology solutions
        for planetary resilience.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      {#each themes as theme, index (theme.title)}
        <div
          class="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <!-- Visual header with image -->
          <div
            class="relative h-48 overflow-hidden bg-gradient-to-br from-eka-primary/10 to-eka-accent/10"
          >
            <img
              src={theme.image}
              alt={theme.title}
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            ></div>
          </div>

          <!-- Content area -->
          <div class="p-8">
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-start flex-1">
                <div
                  class="p-3 bg-eka-primary/10 rounded-xl mr-4 flex-shrink-0 group-hover:bg-eka-primary/20 transition-colors"
                >
                  <svelte:component this={theme.icon} class="w-6 h-6 text-eka-primary" />
                </div>
                <h3 class="text-xl font-bold text-eka-primary-dark flex-1">{theme.title}</h3>
              </div>
              <button
                class="w-8 h-8 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center ml-4 text-gray-400 hover:text-eka-primary font-mono"
                on:click={() => toggleExpand(index)}
                aria-label="Toggle details"
              >
                {expandedIndex === index ? '−' : '+'}
              </button>
            </div>

            <!-- Show content only when expanded -->
            {#if expandedIndex === index}
              <div class="animate-slide-down">
                <p class="text-sm text-gray-600 leading-relaxed mb-4">
                  <span class="font-semibold">Thesis:</span>
                  {theme.thesis}
                </p>
                <p class="text-sm text-gray-700 leading-relaxed">
                  <span class="font-semibold">Focus:</span>
                  {theme.focus}
                </p>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slide-down {
    animation: slide-down 0.3s ease-out;
  }
</style>
