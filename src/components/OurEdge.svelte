<script>
  let hoveredIndex = null;

  const edgeFactors = [
    {
      title: "Proven Scale & Impact",
      description: "Scaled ventures to millions of users across four Asian markets. $100M+ platforms built. From fintech unicorns to Web3 protocols.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>`
    },
    {
      title: "Technical Excellence",
      description: "Full-stack from blockchain to satellites. Systems for millions in emerging markets. Institutional-grade infrastructure.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>`
    },
    {
      title: "Capital Mastery",
      description: "Structured $2B+ institutional funds. Deployed $200M+ strategic capital. CFA expertise in Climate Finance.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`
    },
    {
      title: "Frontier Leadership",
      description: "Deep APAC operational networks. Battle-tested regulatory playbooks. Scaling where others find impossible.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>`
    },
    {
      title: "Growth Architecture",
      description: "Led 0→1 and 1→10x transformations across startups to institutions. Game-changing partnerships that unlock growth.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>`
    },
    {
      title: "Resilient Design",
      description: "Systems built to thrive under pressure. Tomorrow's infrastructure with today's best practices. Agility for unwritten paths.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>`
    }
  ];
</script>

<section class="py-20 bg-gray-900">
  <div class="container-width section-padding">
    <div class="text-center mb-16">
      <div class="inline-block mb-6">
        <span class="text-sm font-mono text-gray-400 tracking-wider uppercase">[ Our Edge ]</span>
      </div>
      <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">Strategic Advisory at the Frontier of Innovation</h2>
      <p class="text-xl text-gray-300">Capabilities forged through a decade of building at the edges of what's possible</p>
    </div>


    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each edgeFactors as factor, index}
        <div
          class="group bg-black/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 p-8 hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[200px]"
          on:mouseenter={() => hoveredIndex = index}
          on:mouseleave={() => hoveredIndex = null}
        >
          {#if hoveredIndex !== index}
            <div class="flex items-center gap-3 mb-4">
              <svg class="w-6 h-6 text-eka-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {@html factor.icon}
              </svg>
              <h3 class="text-lg font-medium text-white">{factor.title}</h3>
            </div>
          {/if}

          {#if hoveredIndex === index}
            <div class="animate-fade-in">
              <div class="flex items-center gap-3 mb-4">
                <svg class="w-6 h-6 text-eka-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {@html factor.icon}
                </svg>
                <h3 class="text-lg font-medium text-eka-blue">{factor.title}</h3>
              </div>
              <p class="text-sm text-gray-300 leading-relaxed">{factor.description}</p>
            </div>
          {/if}
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