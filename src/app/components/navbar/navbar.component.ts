import { ViewportScroller } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SvgIcon } from '../../utility/svg-icons/svg-icons.component';
import { panelSlideIn } from './navbar.animation';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: [panelSlideIn],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NavbarComponent {
  SvgIcon = SvgIcon;
  showNav = false;

  mediaQuery: any = window.matchMedia('(max-width: 768px)');
  
  navbarLinks: string[] = [
    'Books',
    'Platform',
    'About',
    'Shop',
    'Contact'
  ];

  constructor(public scrollToView: ViewportScroller) {
    window.onresize = () => {
      this.mediaQuery = window.matchMedia('(max-width: 768px)');
    }
  }

  public scrollToElement(element: string) {
    if (this.showNav) {
      this.showNav = false;
      setTimeout(() => {
        this.scrollToView.scrollToAnchor(element);
      }, 425);
    } else {
      this.scrollToView.scrollToAnchor(element);
    }
  }
}
