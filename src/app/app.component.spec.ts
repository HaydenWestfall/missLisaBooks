import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { describe, expect, it } from 'vitest';
import { AppComponent } from './app.component';
import { NAV_LINKS } from './core/site-content';

describe('AppComponent', () => {
  async function render() {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('renders every section the navigation points at', async () => {
    const el = await render();

    for (const link of NAV_LINKS) {
      expect(el.querySelector(`#${link.id}`), `#${link.id} is missing`).toBeTruthy();
    }
    expect(el.querySelector('#booking')).toBeTruthy();
  });

  it('leads with the booking call to action', async () => {
    const el = await render();

    const bookingLinks = el.querySelectorAll('a[href="#booking"]');
    expect(bookingLinks.length).toBeGreaterThan(0);
  });

  it('keeps all three children on the page', async () => {
    const el = await render();

    const text = el.textContent ?? '';
    expect(text).toContain('Riggs');
    expect(text).toContain('Maddalena');
    expect(text).toContain('Faith');
  });
});
