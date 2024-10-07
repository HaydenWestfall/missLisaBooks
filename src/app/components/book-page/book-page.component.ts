import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent implements OnInit {
  ngOnInit() {
    gsap.fromTo(
      '#book-title',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '#book-title',
          start: 'top bottom',
          end: 'top 75%',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      '#award-image',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '#award-image',
          start: 'top bottom',
          end: 'top 75%',
          scrub: true,
        },
      }
    );
  }
}
