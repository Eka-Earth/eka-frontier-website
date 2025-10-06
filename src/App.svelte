<script>
  import Hero from './components/Hero.svelte';
  import Navigation from './components/Navigation.svelte';
  import OurEdge from './components/OurEdge.svelte';
  import CoreServices from './components/CoreServices.svelte';
  import Engagement from './components/Engagement.svelte';
  import ThematicFocus from './components/ThematicFocus.svelte';
  import Contact from './components/Contact.svelte';
  import PrivacyPolicy from './components/PrivacyPolicy.svelte';

  let currentView = 'home';

  // Check URL on load
  if (window.location.pathname === '/privacy-policy' || window.location.hash === '#privacy-policy') {
    currentView = 'privacy';
  }

  // Handle navigation
  window.addEventListener('popstate', () => {
    if (window.location.pathname === '/privacy-policy' || window.location.hash === '#privacy-policy') {
      currentView = 'privacy';
    } else {
      currentView = 'home';
    }
  });

  // Listen for privacy policy navigation
  window.addEventListener('navigate-privacy', () => {
    navigateToPrivacy();
  });

  // Listen for home navigation
  window.addEventListener('navigate-home', () => {
    navigateToHome();
  });

  function navigateToPrivacy() {
    currentView = 'privacy';
    window.history.pushState({}, '', '#privacy-policy');
    window.scrollTo(0, 0);
  }

  function navigateToHome() {
    currentView = 'home';
    window.history.pushState({}, '', '/');
    window.scrollTo(0, 0);
  }
</script>

<Navigation />
<main class="bg-white">
  {#if currentView === 'privacy'}
    <PrivacyPolicy />
  {:else}
    <Hero />
    <OurEdge />
    <CoreServices />
    <ThematicFocus />
    <Engagement />
    <Contact />
  {/if}
</main>