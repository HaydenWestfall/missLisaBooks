import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SvgIcon, SvgIconsComponent } from '../../utility/svg-icons/svg-icons.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [SvgIconsComponent]
})
export class FooterComponent {
  scrollToView = inject(ViewportScroller);

  SvgIcon = SvgIcon;

  public scrollToElement(element: string) {
    this.scrollToView.scrollToAnchor(element);
  }
}
