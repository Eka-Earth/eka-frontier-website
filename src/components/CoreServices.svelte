<script>
  let hoveredCard = null;

  const services = [
    {
      id: 'build',
      action: 'BUILD',
      expertise: 'Venture Architecture & Engineering',
      title: 'Business Design and Platform Engineering',
      description: 'From business to technical architecture, we partner with visionary teams to design and build resilient digital market and financial infrastructure. We structure commercial frameworks, design product strategies, and engineer secure platforms — creating institutional-grade foundations where strategy and technology align seamlessly to power impact at scale.',
      highlights: [
        'Digital finance infrastructure',
        'Market platforms and exchanges',
        'Data and verification protocols'
      ]
    },
    {
      id: 'grow-scale',
      action: 'GROW & SCALE',
      expertise: 'Strategy & Operations',
      title: 'Growth Architecture and Scaling Systems',
      description: 'We accelerate the journey from early traction to market leadership with strategic and operational precision. Whether organisations are finding product-market fit or expanding into new markets, we bring market intelligence, tailored strategies, and adaptive systems — orchestrating partnerships, optimising positioning, and building the infrastructure to power growth at every stage.',
      highlights: [
        'Partnership ecosystem development',
        'Growth and operational systems',
        'Market entry and expansion'
      ]
    }
  ];
</script>

<section id="services" class="relative py-24 bg-eka-deep overflow-hidden">
  <!-- Background pattern -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute inset-0" style="
      background-image:
        radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
      background-size: 40px 40px;
    "></div>
  </div>

  <div class="relative z-10 container-width section-padding">
    <div class="text-center mb-16">
      <div class="inline-block mb-6">
        <span class="text-sm font-mono text-gray-400 tracking-wider uppercase">[ Our Solutions ]</span>
      </div>
      <h2 class="text-5xl lg:text-6xl font-bold text-white mb-6">
        Build. Grow & Scale.
      </h2>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        Combining strategic expertise with operational and technical capabilities, we partner with next-gen companies to architect and scale transformative market infrastructure.
      </p>
    </div>

    <!-- Service cards grid -->
    <div class="grid lg:grid-cols-2 gap-8">
      {#each services as service, index}
        <div class="group relative"
          on:mouseenter={() => hoveredCard = index}
          on:mouseleave={() => hoveredCard = null}
        >
          <div class="bg-eka-navy/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden h-full">
            <div class="p-10 flex flex-col h-full">
              <!-- Icon with larger size and better spacing -->
              <div class="mb-6">
                <!-- Large icon like engagement cards -->
                <div class="mb-6 inline-block">
                  <div class="p-4 bg-eka-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {#if service.id === 'build'}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                      {:else}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                      {/if}
                    </svg>
                  </div>
                </div>

                <h3 class="text-3xl font-bold text-white mb-3 group-hover:text-eka-sage transition-all duration-300">
                  {service.action}
                </h3>

                <!-- Expertise badge -->
                <div class="inline-block px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
                  <p class="text-xs font-mono text-white">{service.expertise}</p>
                </div>
              </div>

              <!-- Description -->
              <p class="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              <!-- Highlights - visible on hover -->
              <div class="space-y-2 {hoveredCard === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500">
                {#each service.highlights as highlight}
                  <div class="flex items-center">
                    <div class="w-1.5 h-1.5 bg-eka-primary rounded-full mr-2"></div>
                    <span class="text-sm text-gray-400">{highlight}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Call to action -->
    <div class="mt-20 flex justify-center">
      <button
        class="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
        on:click={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Let's Explore Partnership
      </button>
    </div>
  </div>
</section>