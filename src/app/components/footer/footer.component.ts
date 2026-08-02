import { ViewportScroller } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SvgIcon } from '../../utility/svg-icons/svg-icons.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FooterComponent {
  SvgIcon = SvgIcon;

  constructor(public scrollToView: ViewportScroller) { }

  public scrollToElement(element: string) {
    this.scrollToView.scrollToAnchor(element);
  }
}
