import { Component, OnInit } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { gsap } from 'gsap';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
})
export class ShopPageComponent implements OnInit {
  SvgIcon = SvgIcon;

  ngOnInit() {
    gsap.fromTo(
      '#shop-title',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '#shop-title',
          start: 'top bottom',
          end: 'top 75%',
          scrub: true,
        },
      }
    );
  }
}
