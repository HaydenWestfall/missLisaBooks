import { Component } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';
import { PEOPLE } from '../../core/site-content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [RevealDirective],
})
export class AboutComponent {
  readonly people = PEOPLE;
}
