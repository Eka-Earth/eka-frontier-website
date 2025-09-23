<script>
  let hoveredCard = null;

  const engagementModels = [
    {
      title: "Advisory Catalyst",
      duration: "1-3 months",
      description: "Rapid deployment of frontier expertise at pivotal moments. Strategic interventions that shift momentum.",
      icon: "lightbulb",
      highlights: ["Rapid deployment", "Strategic interventions", "Momentum shift"]
    },
    {
      title: "Strategic Partnership",
      duration: "6-12 months",
      description: "Full-scale transformation with embedded leadership across platform development, strategic growth, and market expansion.",
      icon: "rocket",
      highlights: ["Embedded leadership", "Full-scale transformation", "Market expansion"]
    },
    {
      title: "Project Sprint",
      duration: "3-9 months",
      description: "Focused execution on critical initiatives - whether building breakthrough platforms or unlocking new markets.",
      icon: "bolt",
      highlights: ["Critical initiatives", "Clear scope", "Rapid execution"]
    }
  ];

  function getIcon(type) {
    switch(type) {
      case 'rocket':
        return `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>`;
      case 'bolt':
        return `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>`;
      case 'lightbulb':
        return `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>`;
    }
  }
</script>

<section id="engagement" class="py-20 bg-gray-900">
  <div class="container-width section-padding">
    <div class="text-center mb-16">
      <div class="inline-block mb-6">
        <span class="text-sm font-mono text-gray-400 tracking-wider uppercase">[ Engagement Framework ]</span>
      </div>
      <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">Pathways to Impact</h2>
      <p class="text-xl text-gray-300 mb-2">Every frontier challenge demands a unique approach</p>
      <p class="text-gray-400 max-w-3xl mx-auto">
        Three engagement models designed to meet you where you are and take you where you need to be.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      {#each engagementModels as model, index}
        <div
          class="group relative bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer"
          on:mouseenter={() => hoveredCard = index}
          on:mouseleave={() => hoveredCard = null}
        >
          <div class="relative p-10">
            <!-- Icon with solid blue background -->
            <div class="mb-6 inline-block">
              <div class="p-4 bg-eka-blue rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {@html getIcon(model.icon)}
                </svg>
              </div>
            </div>

            <!-- Title with blue on hover -->
            <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-eka-blue transition-all duration-300">
              {model.title}
            </h3>

            <!-- Duration badge -->
            <div class="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <p class="text-sm font-mono text-gray-300">{model.duration}</p>
            </div>

            <!-- Description -->
            <p class="text-gray-400 leading-relaxed mb-6">{model.description}</p>

            <!-- Highlights - visible on hover -->
            <div class="space-y-2 {hoveredCard === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500">
              {#each model.highlights as highlight}
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-eka-blue rounded-full mr-2"></div>
                  <span class="text-sm text-gray-300">{highlight}</span>
                </div>
              {/each}
            </div>
          </div>

          <!-- Bottom accent line -->
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-eka-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      {/each}
    </div>

  </div>
</section>