<script lang="ts">
  import { onMount } from 'svelte'

  onMount(() => {
    window.scrollTo(0, 0)
  })
</script>

<section class="min-h-screen bg-black text-white py-20">
  <div class="container-width section-padding">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

      <p class="text-gray-300 mb-8 text-lg">
        Eka Frontier is committed to protecting your privacy. This Privacy Policy explains how we
        collect, use, and safeguard your information.
      </p>

      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold mb-4 text-white">Data Controller</h2>
          <p class="text-gray-300 mb-2">
            Eka Frontier acts as the data controller for personal information collected through our
            services.
          </p>
          <p class="text-gray-300">
            Contact: <a href="mailto:legal@ekafrontier.io" class="text-brand-accent hover:underline"
              >legal@ekafrontier.io</a
            >
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 text-white">Legal Basis for Processing</h2>
          <p class="text-gray-300 mb-3">We process your personal data based on:</p>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>Consent when you contact us or subscribe to updates</li>
            <li>Legitimate interests in operating and improving our services</li>
            <li>Legal obligations when required by law</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>

          <h3 class="text-xl font-medium mb-3 text-white">Information You Provide</h3>
          <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Name and contact information</li>
            <li>Email address</li>
            <li>Company information</li>
            <li>Communication preferences</li>
          </ul>

          <h3 class="text-xl font-medium mb-3 text-white">Information Collected Automatically</h3>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>IP address</li>
            <li>Device information</li>
            <li>Browser type and version</li>
            <li>Session information</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>Respond to inquiries and provide services</li>
            <li>Send updates and communications (with consent)</li>
            <li>Improve our services</li>
            <li>Ensure security</li>
            <li>Comply with legal requirements</li>
          </ul>
          <p class="text-gray-300 mt-4 font-medium">We never sell your personal information.</p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 text-white">Data Sharing</h2>
          <p class="text-gray-300 mb-3">We share data only with essential service providers:</p>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>Hosting and infrastructure providers</li>
            <li>Email service providers</li>
            <li>Analytics providers (anonymized data only)</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 text-white">Data Retention</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>Active communications: Duration of business relationship</li>
            <li>Inactive contacts: Up to 3 years</li>
            <li>Analytics data: Up to 2 years</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
          <p class="text-gray-300 mb-3">You have the right to:</p>
          <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion</li>
            <li>Restrict processing</li>
            <li>Data portability</li>
            <li>Object to processing</li>
            <li>Withdraw consent</li>
          </ul>
          <p class="text-gray-300">
            To exercise these rights, contact <a
              href="mailto:legal@ekafrontier.io"
              class="text-brand-accent hover:underline">legal@ekafrontier.io</a
            >
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 text-white">Data Security</h2>
          <p class="text-gray-300">
            We implement appropriate technical and organisational measures to protect your data,
            including encryption and access controls. While we strive to protect your information,
            no internet transmission is completely secure.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 text-white">International Transfers</h2>
          <p class="text-gray-300">
            Data may be processed and stored internationally. Any international transfers are
            protected by appropriate safeguards under applicable data protection laws.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 text-white">Children's Privacy</h2>
          <p class="text-gray-300">We do not knowingly collect data from individuals under 16.</p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 text-white">Updates</h2>
          <p class="text-gray-300">
            We may update this policy periodically. Material changes will be communicated through
            our website.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 text-white">Contact</h2>
          <p class="text-gray-300 mb-4">For questions about this policy or our data practices:</p>
          <div class="text-gray-300">
            <p class="font-semibold mb-2">Eka Frontier</p>
            <p>
              Email: <a href="mailto:legal@ekafrontier.io" class="text-brand-accent hover:underline"
                >legal@ekafrontier.io</a
              >
            </p>
          </div>
        </section>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-800">
        <p class="text-gray-400 text-sm">
          Last updated: {new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>
    </div>
  </div>
</section>
