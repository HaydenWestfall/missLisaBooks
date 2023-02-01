import { Component } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent {
  SvgIcon = SvgIcon;
}
