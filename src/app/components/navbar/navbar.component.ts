import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  SvgIcon = SvgIcon;
  showNav = true;

  constructor(public scrollToView: ViewportScroller) { }

  public scrollToElement(element: string) {
    console.log(element);
    
    this.scrollToView.scrollToAnchor(element);
  }
}
