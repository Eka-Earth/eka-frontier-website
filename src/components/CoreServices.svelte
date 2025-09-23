<script>
  let activeService = null;

  const services = [
    {
      id: 'build',
      title: 'BUILD',
      subtitle: 'Digital Platform Development',
      shortDesc: "Architect tomorrow's infrastructure today",
      description: 'From concept to deployment, we build transformative digital platforms that redefine markets.',
      capabilities: [
        'Carbon platforms with satellite-verified dMRV',
        'Renewable energy infrastructure design',
        'Supply chain transparency solutions',
        'Nature-based tokenization frameworks'
      ]
    },
    {
      id: 'grow',
      title: 'GROW',
      subtitle: 'Strategic Growth & Expansion',
      shortDesc: 'Scale at the speed of frontier markets',
      description: 'Strategic advisory and hands-on leadership to accelerate growth across emerging economies.',
      capabilities: [
        'Transformative partnership structuring',
        'Market expansion playbooks',
        'Revenue model optimization',
        'Regulatory navigation frameworks'
      ]
    },
    {
      id: 'scale',
      title: 'SCALE',
      subtitle: 'Investment & Capital Strategy',
      shortDesc: 'Structure for institutional scale',
      description: 'Engineer capital structures and token economies that align long-term value creation.',
      capabilities: [
        'Institutional investment positioning',
        'Token economy design',
        'Blended finance structuring',
        'Capital strategy development'
      ]
    }
  ];

  function toggleService(id) {
    activeService = activeService === id ? null : id;
  }
</script>

<section id="services" class="relative py-20 bg-black overflow-hidden">
  <!-- Background tech grid -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(27, 79, 143, 0.3) 1px, transparent 1px); background-size: 40px 40px;"></div>
  </div>

  <div class="relative z-10 container-width section-padding">
    <div class="text-center mb-16">
      <div class="inline-block mb-6">
        <span class="text-sm font-mono text-gray-400 tracking-wider uppercase">[ Core Services ]</span>
      </div>
      <h2 class="text-5xl lg:text-6xl font-bold text-white mb-4">
        Build. Grow. Scale.
      </h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Three integrated capabilities forging pathways to regenerative scale at the frontier of innovation.
      </p>
    </div>

    <!-- Main service cards -->
    <div class="grid lg:grid-cols-3 gap-6 mb-12">
      {#each services as service}
        <button
          class="group relative bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 text-left cursor-pointer {activeService === service.id ? 'ring-2 ring-white/30' : ''}"
          on:click={() => toggleService(service.id)}
        >
          <div class="relative z-10">
            <!-- Icon -->
            <div class="mb-6 inline-block p-3 bg-eka-blue rounded-xl">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {#if service.id === 'build'}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                {:else if service.id === 'grow'}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                {:else}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                {/if}
              </svg>
            </div>

            <!-- Title -->
            <h3 class="text-3xl font-bold text-white mb-2 group-hover:text-eka-blue transition-colors duration-300">
              {service.title}
            </h3>

            <!-- Subtitle -->
            <p class="text-sm text-gray-400 mb-4 font-medium">
              {service.subtitle}
            </p>

            <!-- Short description -->
            <p class="text-gray-300 leading-relaxed">
              {service.shortDesc}
            </p>

            <!-- Expand indicator -->
            <div class="mt-6 flex items-center text-gray-400 group-hover:text-white transition-colors">
              <span class="text-sm font-mono mr-2">
                {activeService === service.id ? '[-]' : '[+]'}
              </span>
              <span class="text-sm">
                {activeService === service.id ? 'Collapse' : 'Learn more'}
              </span>
            </div>
          </div>
        </button>
      {/each}
    </div>

    <!-- Expanded content -->
    {#if activeService}
      {#each services as service}
        {#if service.id === activeService}
          <div class="animate-slide-down bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-800 p-10">
            <div class="grid lg:grid-cols-2 gap-10">
              <div>
                <h4 class="text-2xl font-bold text-white mb-4">{service.subtitle}</h4>
                <p class="text-gray-300 leading-relaxed text-lg mb-6">
                  {service.description}
                </p>
              </div>
              <div>
                <h5 class="text-sm font-mono text-gray-400 uppercase mb-4">Key Capabilities</h5>
                <ul class="space-y-3">
                  {#each service.capabilities as capability}
                    <li class="flex items-start">
                      <div class="mt-1 mr-3 w-1 h-1 bg-eka-blue rounded-full"></div>
                      <span class="text-gray-300">{capability}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    {/if}

    <!-- Partnership note -->
    <div class="mt-16 text-center">
      <p class="text-gray-400 max-w-3xl mx-auto leading-relaxed">
        We partner with mission-aligned organizations — from ambitious startups to forward-thinking institutions — building infrastructure designed to thrive through market cycles while catalyzing regenerative transformation.
      </p>
    </div>
  </div>
</section>

<style>
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slide-down {
    animation: slide-down 0.5s ease-out;
  }
</style>