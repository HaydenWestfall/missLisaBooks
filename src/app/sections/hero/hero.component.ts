import { Component } from '@angular/core';
import { IconComponent } from '../../ui/icon.component';
import { HERO, KIDS } from '../../core/site-content';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [IconComponent],
})
export class HeroComponent {
  readonly hero = HERO;
  readonly kids = KIDS;

  /** Repeated twice in the template so the marquee can loop seamlessly. */
  readonly ribbon = [
    'A signed book for every child',
    'True stories from real kids',
    'Written for struggling readers',
    'Schools · Libraries · Festivals',
  ];
}
