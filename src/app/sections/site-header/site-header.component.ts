import { Component, HostListener, signal } from '@angular/core';
import { IconComponent } from '../../ui/icon.component';
import { NAV_LINKS } from '../../core/site-content';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
  imports: [IconComponent],
})
export class SiteHeaderComponent {
  readonly navLinks = NAV_LINKS;

  /** True once the page has scrolled past the top, which solidifies the bar. */
  readonly isScrolled = signal(false);
  readonly isMenuOpen = signal(false);

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.isScrolled.set(window.scrollY > 24);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
    this.lockScroll(this.isMenuOpen());
  }

  closeMenu(): void {
    if (!this.isMenuOpen()) return;
    this.isMenuOpen.set(false);
    this.lockScroll(false);
  }

  private lockScroll(locked: boolean): void {
    document.body.style.overflow = locked ? 'hidden' : '';
  }
}
