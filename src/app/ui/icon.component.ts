import { Component, input } from '@angular/core';

export type IconName =
  | 'arrow-right'
  | 'book'
  | 'check'
  | 'email'
  | 'instagram'
  | 'menu'
  | 'close'
  | 'pen'
  | 'sparkle'
  | 'star'
  | 'users';

/**
 * Small inline icon set. Icons inherit `currentColor` and size from
 * `font-size`, so they line up with the text they sit beside.
 */
@Component({
  selector: 'app-icon',
  host: { 'aria-hidden': 'true' },
  styles: [
    `
      :host {
        display: inline-flex;
        flex: none;
      }
      svg {
        width: 1em;
        height: 1em;
        display: block;
      }
    `,
  ],
  template: `
    @switch (name()) {
      @case ('arrow-right') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 12h15M13 6l6 6-6 6" />
        </svg>
      }
      @case ('book') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 4.5A1.5 1.5 0 0 1 4.5 3H9a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H3z" />
          <path d="M21 4.5A1.5 1.5 0 0 0 19.5 3H15a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H21z" />
        </svg>
      }
      @case ('check') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
        </svg>
      }
      @case ('email') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
          <path d="m3.5 6.5 7.3 5.2a2 2 0 0 0 2.4 0l7.3-5.2" />
        </svg>
      }
      @case ('instagram') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      }
      @case ('menu') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      }
      @case ('close') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      }
      @case ('pen') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16.5 3.9a2.3 2.3 0 0 1 3.3 3.3L8.4 18.6l-4.3 1 1-4.3z" />
          <path d="M14.4 6 17.7 9.3" />
        </svg>
      }
      @case ('sparkle') {
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5c.9 4.6 2.4 6.1 7 7-4.6.9-6.1 2.4-7 7-.9-4.6-2.4-6.1-7-7 4.6-.9 6.1-2.4 7-7Z" />
        </svg>
      }
      @case ('star') {
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.2 6.1L12 16.8 6.5 19.7l1.2-6.1L3.2 9.4l6.1-.8z" />
        </svg>
      }
      @case ('users') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="8" r="3.4" />
          <path d="M2.8 20a6.2 6.2 0 0 1 12.4 0" />
          <path d="M16.5 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.2 6.2 0 0 1 3.2 5.6" />
        </svg>
      }
    }
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
}
