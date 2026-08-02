import { Component, OnInit, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { gsap } from 'gsap';
import { injectMediaQuery } from '../../utility/media-query';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  readonly scrollToView = inject(ViewportScroller);

  readonly isMobile = injectMediaQuery('(max-width: 768px)');

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
