import { ViewportScroller } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent {
  SvgIcon = SvgIcon;

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.header.show();
      }
    });
  });

  @ViewChild('header') header: HeaderComponent;

  constructor(public scrollToView: ViewportScroller) {}

  ngAfterViewInit() {
    this.observer.observe(document.getElementById('shopHeader'));
  }

  horizontalScroll(container: HTMLElement, element: HTMLElement, dir: string): void {
    const scrollPos = (dir === 'left')
    ? container.scrollLeft - element.offsetWidth
    : container.scrollLeft + element.offsetWidth;

    container.scrollTo({
      top: 0,
      left: scrollPos,
      behavior: 'smooth'
    })
  }
}
