<script>
  let expandedIndex = null;

  const themes = [
    {
      title: "Renewable Energy & Circular Systems",
      bullets: ["Clean energy trading platforms", "Grid modernization", "Decentralized energy markets", "Resource optimization", "Waste-to-value platforms", "Supply chain circularity"],
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>`,
      metrics: "50+ GW potential"
    },
    {
      title: "Regenerative Agriculture & Food Systems",
      bullets: ["Sustainable farming technology", "Supply chain transparency", "Smallholder finance", "Food security platforms"],
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>`,
      metrics: "500M farmers"
    },
    {
      title: "Nature-based Solutions & dMRV",
      bullets: ["Carbon credit infrastructure", "Biodiversity markets", "Ecosystem services", "Digital measurement, reporting & verification"],
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
      metrics: "$1T market"
    },
    {
      title: "Decentralised Web",
      bullets: ["Web3 protocols", "Blockchain infrastructure", "Distributed systems", "Transparency & resilience"],
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>`,
      metrics: "Next-gen infra"
    }
  ];

  function toggleExpand(index) {
    expandedIndex = expandedIndex === index ? null : index;
  }
</script>

<section id="themes" class="py-20 bg-black relative overflow-hidden">
  <!-- Background tech grid -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(27, 79, 143, 0.3) 1px, transparent 1px); background-size: 40px 40px;"></div>
  </div>

  <div class="relative z-10 container-width section-padding">
    <div class="text-center mb-16">
      <div class="inline-block mb-6">
        <span class="text-sm font-mono text-gray-400 tracking-wider uppercase">[ Thematic Focus ]</span>
      </div>
      <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">Where Digital Innovations Drive Impact at Scale</h2>
      <p class="text-xl text-gray-300 max-w-4xl mx-auto">We partner with forward-thinking organizations across core areas of regenerative innovation</p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      {#each themes as theme, index}
        <button
          class="group relative text-left bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 cursor-pointer"
          on:click={() => toggleExpand(index)}
        >
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-start flex-1">
              <div class="p-3 bg-eka-blue rounded-xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {@html theme.icon}
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-white mb-2">{theme.title}</h3>
                <div class="inline-block px-3 py-1 bg-eka-blue/20 rounded-full">
                  <span class="text-sm font-mono text-white">{theme.metrics}</span>
                </div>
              </div>
            </div>
            <div class="text-2xl text-gray-500 group-hover:text-white transition-colors ml-4">
              {expandedIndex === index ? '−' : '+'}
            </div>
          </div>

          {#if expandedIndex === index}
            <div class="mt-6 pt-6 border-t border-white/10 animate-slide-down">
              <ul class="space-y-2">
                {#each theme.bullets as bullet}
                  <li class="flex items-start">
                    <div class="w-1.5 h-1.5 bg-eka-blue rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span class="text-gray-300">{bullet}</span>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes slide-down {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 200px;
    }
  }

  .animate-slide-down {
    animation: slide-down 0.3s ease-out;
  }
</style>