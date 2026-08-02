import { DestroyRef, Signal, inject, signal } from '@angular/core';

/**
 * Tracks a CSS media query as a signal. Must be called in an injection context.
 */
export function injectMediaQuery(query: string): Signal<boolean> {
  const mediaQuery = window.matchMedia(query);
  const matches = signal(mediaQuery.matches);
  const onChange = (event: MediaQueryListEvent) => matches.set(event.matches);

  mediaQuery.addEventListener('change', onChange);
  inject(DestroyRef).onDestroy(() =>
    mediaQuery.removeEventListener('change', onChange)
  );

  return matches.asReadonly();
}
