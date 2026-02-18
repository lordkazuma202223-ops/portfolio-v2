// Professional Animations System for Portfolio v2
// Based on production standards from MEMORY.md
// SSR-safe - checks for window before using browser APIs

class AnimationSystem {
  constructor() {
    this.observedElements = new Set();
    this.intersectionObserver = null;
    this.resizeObserver = null;
    this.isClient = typeof window !== 'undefined';

    // Only initialize on client
    if (this.isClient) {
      this.init();
    }
  }

  init() {
    if (!this.isClient) return;

    // Intersection Observer for scroll animations (15% threshold)
    this.intersectionObserver = new IntersectionObserver(
      this.handleIntersection.bind(this),
      { threshold: 0.15 }
    );

    // Resize Observer for parallax effects
    this.resizeObserver = new ResizeObserver(
      this.handleResize.bind(this)
    );

    // Start animation loop
    this.animate();
    this.observeElements();
  }

  animate() {
    if (!this.isClient) return;
    requestAnimationFrame(() => this.animate());
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }

  handleResize(entries) {
    if (!this.isClient) return;
    // Handle parallax effects on resize
    entries.forEach(entry => {
      const element = entry.target;
      const parallaxSpeed = element.dataset.parallax;
      if (parallaxSpeed) {
        this.updateParallax(element, parallaxSpeed);
      }
    });
  }

  updateParallax(element, speed) {
    const rect = element.getBoundingClientRect();
    const scrolled = window.scrollY;
    const rate = scrolled * parseFloat(speed);
    element.style.transform = `translateY(${rate}px)`;
  }

  observeElements() {
    if (!this.isClient) return;
    // Observe scroll animations
    document.querySelectorAll('[data-animate]').forEach(el => {
      this.observedElements.add(el);
      this.intersectionObserver.observe(el);
    });

    // Observe parallax elements
    document.querySelectorAll('[data-parallax]').forEach(el => {
      this.resizeObserver.observe(el);
    });

    // Initialize counters
    document.querySelectorAll('[data-count]').forEach(el => {
      this.initCounter(el);
    });
  }

  initCounter(element) {
    if (!this.isClient) return;
    const target = parseInt(element.dataset.count);
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }
}

// Initialize animation system on client
const animationSystem = new AnimationSystem();

// Run after DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      animationSystem.observeElements();
    });
  } else {
    animationSystem.observeElements();
  }
}
