import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input('headerColor') headerColor = '';
  @Input('subHeaderColor') subHeaderColor = '';
  @Input('header') header = '';
  @Input('subHeader') subHeader = '';
}
