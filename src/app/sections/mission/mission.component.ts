import { Component } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';
import { KIDS, MISSION } from '../../core/site-content';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
  imports: [RevealDirective],
})
export class MissionComponent {
  readonly mission = MISSION;
  readonly kids = KIDS;
}
