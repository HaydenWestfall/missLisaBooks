import {
  Directive,
  ElementRef,
  DestroyRef,
  afterNextRender,
  inject,
  input,
} from '@angular/core';

/**
 * Fades an element up into view the first time it enters the viewport.
 *
 * The visual state lives in `styles.scss` under `[data-reveal]`, so elements
 * start hidden even before this directive runs, and users who prefer reduced
 * motion see everything immediately.
 *
 *   <div appReveal>…</div>
 *   <div appReveal [revealDelay]="120">…</div>
 */
@Directive({
  selector: '[appReveal]',
  host: {
    'data-reveal': '',
    '[style.--reveal-delay.ms]': 'revealDelay()',
  },
})
export class RevealDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Stagger, in milliseconds, applied once the element is in view. */
  readonly revealDelay = input(0);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const el = this.host.nativeElement;

      // No IntersectionObserver (or a very short page): just show it.
      if (typeof IntersectionObserver === 'undefined') {
        el.classList.add('is-revealed');
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            el.classList.add('is-revealed');
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
      );

      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
