import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  SvgIcon = SvgIcon;

  constructor(public scrollToView: ViewportScroller) { }

  public scrollToElement(element: string) {
    console.log(element);
    
    this.scrollToView.scrollToAnchor(element);
  }
}
