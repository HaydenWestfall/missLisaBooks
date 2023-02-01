import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export enum SvgIcon {
  ANGLE,
  COPYRIGHT,
  HAMBURGER,
  HAMBURGER_NEW,
  HERO_BG,
  LOGO,
  TIMES,
  UNDEFINED
}

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icons.component.html',
  styles: ['svg { width: 100%; height: 100% }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconsComponent {
  SvgIcon = SvgIcon;

  @Input() name: SvgIcon = SvgIcon.UNDEFINED;
  @Input() width: string = '';
  @Input() height: string = '';
}
