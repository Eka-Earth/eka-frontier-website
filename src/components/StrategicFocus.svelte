<script lang="ts">
  const focusAreas = [
    {
      title: 'Natural Capital Markets',
      description: 'Making nature the next asset class through transparent, verifiable platforms',
    },
    {
      title: 'Distributed Energy Systems',
      description: "Architecting the infrastructure for humanity's clean energy transition",
    },
    {
      title: 'Regenerative Value Chains',
      description: 'Enabling business models that regenerate rather than extract',
    },
    {
      title: 'Market Transformation',
      description: "Scaling breakthrough solutions across the world's most dynamic economies",
    },
  ]
</script>

<section id="focus" class="py-20 bg-gray-50">
  <div class="container-width section-padding">
    <div class="text-center mb-12">
      <h2 class="text-4xl lg:text-5xl font-bold text-eka-black mb-4">Strategic Focus</h2>
      <p class="text-xl text-gray-600 mb-8">
        Architecting the Digital Rails for Regenerative Transformation
      </p>
    </div>

    <div class="max-w-4xl mx-auto mb-12">
      <p class="text-gray-700 leading-relaxed text-center mb-8">
        The regenerative economy demands infrastructure as ambitious as the future we're building.
        We deliver integrated capabilities that transform frontier innovation into market reality,
        forging new pathways for:
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      {#each focusAreas as area (area.title)}
        <div
          class="bg-white p-6 rounded-xl border-l-4 border-eka-primary hover:shadow-lg transition-shadow"
        >
          <h3 class="font-bold text-lg text-eka-black mb-2">{area.title}</h3>
          <p class="text-gray-600">{area.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
