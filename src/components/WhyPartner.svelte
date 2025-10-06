<script>
  const trackRecord = [
    "Scaled ventures from zero to millions of users across four Asian markets",
    "Architected platforms processing $100M+ in strategic partnerships",
    "Built at the frontier - from fintech unicorns to pioneering Web3 protocols",
    "Structured $2B+ institutional funds while catalyzing $200M+ in capital deployment",
    "Navigated the complexity of emerging markets to deliver transformative growth",
    "CFA Charterholder with specialized expertise in Climate Finance"
  ];

  const technicalExcellence = [
    "Full-stack platform architecture from blockchain to satellite integration",
    "Systems engineered for millions of users in emerging market conditions",
    "Security-first infrastructure meeting institutional standards",
    "Proven integration across AI, IoT, and frontier technologies",
    "Building tomorrow's infrastructure with today's best practices"
  ];

  const marketLeadership = [
    "Deep operational networks across APAC's most dynamic economies",
    "Battle-tested playbooks for navigating regulatory complexity",
    "Proven strategies for scaling in markets others find impossible",
    "Cross-border expertise that turns challenges into opportunities",
    "The agility to thrive where paths haven't been written yet"
  ];
</script>

<section id="why-partner" class="py-20 bg-gray-50">
  <div class="container-width section-padding">
    <div class="text-center mb-12">
      <h2 class="text-4xl lg:text-5xl font-bold text-eka-black mb-4">Why Partner with Eka Frontier</h2>
      <p class="text-xl text-gray-600">Proven Impact at the Frontier of Innovation</p>
    </div>

    <div class="max-w-5xl mx-auto mb-12">
      <p class="text-gray-700 leading-relaxed text-center">
        We bring together capabilities rarely found in one team - technical depth, operational excellence,
        and the audacity to build at the edges of what's possible:
      </p>
    </div>

    <div class="space-y-8">
      <div class="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 class="text-2xl font-bold text-eka-black mb-6">Track Record That Speaks</h3>
        <div class="grid md:grid-cols-2 gap-4">
          {#each trackRecord as item}
            <div class="flex items-start">
              <span class="text-eka-primary mr-3 mt-1">✓</span>
              <p class="text-gray-700 text-sm">{item}</p>
            </div>
          {/each}
        </div>
      </div>

      <div class="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 class="text-2xl font-bold text-eka-black mb-6">Technical Excellence at Scale</h3>
        <div class="grid md:grid-cols-2 gap-4">
          {#each technicalExcellence as item}
            <div class="flex items-start">
              <span class="text-eka-primary mr-3 mt-1">✓</span>
              <p class="text-gray-700 text-sm">{item}</p>
            </div>
          {/each}
        </div>
      </div>

      <div class="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 class="text-2xl font-bold text-eka-black mb-6">Frontier Market Leadership</h3>
        <div class="grid md:grid-cols-2 gap-4">
          {#each marketLeadership as item}
            <div class="flex items-start">
              <span class="text-eka-primary mr-3 mt-1">✓</span>
              <p class="text-gray-700 text-sm">{item}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>