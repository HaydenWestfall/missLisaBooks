import { Component, input } from '@angular/core';

export enum SvgIcon {
  ANGLE,
  COPYRIGHT,
  HAMBURGER,
  HAMBURGER_NEW,
  HERO_BG,
  LOGO,
  TIMES,
  UNDEFINED,
}

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icons.component.html',
  styles: ['svg { width: 100%; height: 100% }'],
})
export class SvgIconsComponent {
  readonly SvgIcon = SvgIcon;

  readonly name = input<SvgIcon>(SvgIcon.UNDEFINED);
  readonly width = input<string>('');
  readonly height = input<string>('');
}
