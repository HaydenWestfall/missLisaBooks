import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  SvgIcon = SvgIcon;

  constructor(public scrollToView: ViewportScroller) { }

  public scrollToElement(element: string) {
    this.scrollToView.scrollToAnchor(element);
  }
}
