/**
 * Test environment setup.
 *
 * jsdom implements neither `window.matchMedia` (used by `injectMediaQuery`) nor
 * `ResizeObserver` (used by Lenis). Provide minimal stubs so components can be
 * instantiated; individual tests can override them when they need real values.
 */
if (!window.matchMedia) {
  window.matchMedia = (query: string): MediaQueryList =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}

if (!window.ResizeObserver) {
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}
