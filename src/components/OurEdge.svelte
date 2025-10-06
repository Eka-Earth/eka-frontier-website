<script>
  let hoveredIndex = null;

  const edgeFactors = [
    {
      title: "Strategic Excellence",
      description: "Expertise in commercial frameworks, market entry, and business architecture. We've scaled businesses from zero to market leadership across financial platforms, infrastructure, and frontier technologies.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>`
    },
    {
      title: "Technical Mastery",
      description: "Deep capabilities in platform engineering and systems architecture. We've engineered digital infrastructure from blockchain solutions to AI-powered systems, with security and scalability embedded from inception.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>`
    },
    {
      title: "Market Infrastructure Expertise",
      description: "Specialised in digital finance platforms, market exchanges, and data systems. We've architected platforms from business design to market launch in complex regulated markets.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>`
    },
    {
      title: "Growth Architecture",
      description: "Expertise in growth strategy and market scaling. We've accelerated ventures from concept to leadership across frontier markets, architecting systems that unlock exponential growth trajectories.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>`
    },
    {
      title: "Scale Structuring",
      description: "Track record in designing operational systems for scale. We've built infrastructure enabling high-volume transaction processing and resilient operations across diverse markets.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>`
    },
    {
      title: "Frontier Markets Leadership",
      description: "Over a decade navigating regulatory landscapes and building operational networks. Deep operational networks from Hong Kong to Asia Pacific, with track record in sustainability innovation, fintech, Web3, and regenerative economy sectors.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>`
    }
  ];
</script>

<section id="our-edge" class="py-24 bg-eka-light">
  <div class="container-width section-padding">
    <div class="text-center mb-16">
      <div class="inline-block mb-6">
        <span class="text-sm font-mono text-gray-600 tracking-wider uppercase">[ Our Edge ]</span>
      </div>
      <h2 class="text-4xl lg:text-5xl font-bold text-eka-primary-dark mb-6">Innovations at the Frontier</h2>
      <p class="text-xl text-gray-700 max-w-4xl mx-auto">Capabilities forged through a decade building at the frontier across markets, spanning platform engineering, strategic growth, and operational scale.</p>
    </div>


    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each edgeFactors as factor, index}
        <div
          class="group relative bg-white rounded-xl border border-gray-200 hover:border-eka-primary/30 p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
          style="min-height: 250px"
          on:mouseenter={() => hoveredIndex = index}
          on:mouseleave={() => hoveredIndex = null}
        >
          <!-- Title always visible -->
          <div class="flex items-center gap-3 mb-4">
            <svg class="w-6 h-6 text-eka-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {@html factor.icon}
            </svg>
            <h3 class="text-lg font-medium {hoveredIndex === index ? 'text-eka-primary' : 'text-eka-primary-dark'} transition-colors">
              {factor.title}
            </h3>
          </div>

          <!-- Description with fade in/out -->
          <div class="{hoveredIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300">
            <p class="text-sm text-gray-600 leading-relaxed">{factor.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-in-out;
  }
</style>