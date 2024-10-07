import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  mediaQuery: any = window.matchMedia('(max-width: 768px)');

  constructor(public scrollToView: ViewportScroller) {
    window.onresize = () => {
      this.mediaQuery = window.matchMedia('(max-width: 768px)');
    };
  }

  ngOnInit() {
    gsap.fromTo(
      '#about-title',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '#about-title',
          start: 'top bottom',
          end: 'top 75%',
          scrub: true,
        },
      }
    );
  }
}
