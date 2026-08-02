/**
 * Test environment setup.
 *
 * jsdom does not implement `IntersectionObserver`, which `RevealDirective`
 * uses to fade sections in on scroll. Provide a minimal stub so components can
 * be instantiated; individual tests can override it when they need to drive
 * intersection callbacks themselves.
 */
if (!window.IntersectionObserver) {
  window.IntersectionObserver = class {
    readonly root = null;
    readonly rootMargin = '';
    readonly thresholds: readonly number[] = [];
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  } as unknown as typeof IntersectionObserver;
}
