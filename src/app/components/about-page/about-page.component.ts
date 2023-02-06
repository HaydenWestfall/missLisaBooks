import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements AfterViewInit {

  mediaQuery: any = window.matchMedia('(max-width: 768px)');

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.header.show();
      }
    });
  });

  @ViewChild('header') header: HeaderComponent;

  constructor(public scrollToView: ViewportScroller) {
    window.onresize = () => {
      this.mediaQuery = window.matchMedia('(max-width: 768px)');
    }
  }

  ngAfterViewInit() {
    this.observer.observe(document.getElementById('aboutHeader'));
  }
}
