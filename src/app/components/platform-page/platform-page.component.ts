import { Component, OnInit } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { gsap } from 'gsap';

@Component({
  selector: 'app-platform-page',
  templateUrl: './platform-page.component.html',
  styleUrls: ['./platform-page.component.scss'],
})
export class PlatformPageComponent implements OnInit {
  SvgIcon = SvgIcon;

  cards: any[] = [
    {
      description:
        'Miss Lisa is inspired by anyone with a disability who refuses to allow  that particular disability to interfere with advancing in life. Her Illustrator is a perfect example of this!',
      image: '../../../../assets/img/child-learning-1.webp',
    },
    {
      description:
        'The book series is intended for struggling readers who benefit from repetition of text, along with the simple enjoyment of a true childhood story.',
      image: '../../../../assets/img/child-learning-2.webp',
    },
    {
      description:
        'Miss Lisa is motivated by Intervention Specialists all over the world who can’t help but believe that all children can learn to read.',
      image: '../../../../assets/img/child-learning-3.webp',
    },
  ];

  ngOnInit() {
    gsap.fromTo(
      '#platform-title',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '#platform-title',
          start: 'top bottom',
          end: 'top 75%',
          scrub: true,
        },
      }
    );
  }
}
