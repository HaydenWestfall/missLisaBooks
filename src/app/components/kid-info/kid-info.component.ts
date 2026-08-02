import { Component, input, output } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-kid-info',
  templateUrl: './kid-info.component.html',
  styleUrls: ['./kid-info.component.scss'],
  imports: [ButtonComponent],
})
export class KidInfoComponent {
  readonly selectedKid = input<any>();
  readonly closeKid = output<void>();
}
