import { ViewportScroller } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { SvgIcon } from '../../utility/svg-icons/svg-icons.component';
import { injectMediaQuery } from '../../utility/media-query';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private readonly scrollToView = inject(ViewportScroller);

  readonly SvgIcon = SvgIcon;
  readonly showNav = signal(false);
  readonly isMobile = injectMediaQuery('(max-width: 768px)');

  readonly navbarLinks: string[] = [
    'Books',
    'Platform',
    'About',
    'Shop',
    'Contact',
  ];

  public scrollToElement(element: string) {
    if (this.showNav()) {
      this.showNav.set(false);
      setTimeout(() => {
        this.scrollToView.scrollToAnchor(element);
      }, 425);
    } else {
      this.scrollToView.scrollToAnchor(element);
    }
  }
}
