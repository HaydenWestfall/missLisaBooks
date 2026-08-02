import { Component } from '@angular/core';
import { IconComponent } from '../../ui/icon.component';
import { RevealDirective } from '../../core/reveal.directive';
import {
  CONTACT,
  PRICING,
  VISIT_FORMATS,
  VISIT_INCLUDES,
  VISIT_STEPS,
} from '../../core/site-content';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss'],
  imports: [IconComponent, RevealDirective],
})
export class VisitsComponent {
  readonly formats = VISIT_FORMATS;
  readonly includes = VISIT_INCLUDES;
  readonly steps = VISIT_STEPS;
  readonly pricing = PRICING;
  readonly contact = CONTACT;
}
