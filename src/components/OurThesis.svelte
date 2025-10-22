<script lang="ts">
  const thesisPoints = [
    'Thrive through volatility while others merely survive',
    'Scale exponentially across markets others find impossible',
    'Create transparent, verifiable impact at planetary scale',
    'Transform frontier innovation into institutional opportunity',
    'Build resilience into every layer of the stack',
  ]
</script>

<section class="py-20 bg-gray-900 text-white">
  <div class="container-width section-padding">
    <div class="text-center mb-12">
      <h2 class="text-4xl lg:text-5xl font-bold mb-4">Our Thesis</h2>
      <p class="text-xl text-gray-300">
        The regenerative economy is being built at the frontier - where innovation meets urgency
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
        <p class="text-lg leading-relaxed mb-8 text-gray-300">
          Traditional infrastructure wasn't designed for the speed and scale of transformation we
          need. We're architecting new digital rails that:
        </p>

        <div class="space-y-4 mb-8">
          {#each thesisPoints as point}
            <div class="flex items-start">
              <span class="text-eka-primary mr-3 mt-1">→</span>
              <p class="text-white">{point}</p>
            </div>
          {/each}
        </div>

        <div class="border-t border-white/20 pt-8">
          <p class="text-lg font-semibold text-center text-gray-300">
            This isn't incremental change. It's system-level transformation - architected for a
            future that demands both speed and sustainability.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
