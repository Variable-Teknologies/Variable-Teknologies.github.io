/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
console.log("Before Particles");
particlesJS.load('particles-js', 'particles/particle-cfg.json', function() {
    console.log('callback - particles.js config loaded');
  });
console.log("After Particles");
