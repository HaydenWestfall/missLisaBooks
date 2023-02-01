import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIcon } from './utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'missLisaBooks';
  SvgIcon = SvgIcon;

  constructor(public scrollToView: ViewportScroller) { }

  public scrollToElement(element: string) {
    console.log(element);
    
    this.scrollToView.scrollToAnchor(element);
  }
}
