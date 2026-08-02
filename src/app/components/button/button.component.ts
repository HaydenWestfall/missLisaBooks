import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  readonly text = input<string>();
  readonly backgroundColor = input<string>(undefined, { alias: 'btn-bg' });
  readonly border = input<string>(undefined, { alias: 'btn-border' });
  readonly color = input<string>(undefined, { alias: 'btn-color' });
  readonly hoverBg = input<string>();
  readonly hoverBorder = input<string>();
  readonly hoverColor = input<string>();

  readonly buttonClicked = output<void>();
}
