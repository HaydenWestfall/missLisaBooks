import { Component } from '@angular/core';
import { IconComponent } from '../../ui/icon.component';
import { CONTACT, NAV_LINKS } from '../../core/site-content';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss'],
  imports: [IconComponent],
})
export class SiteFooterComponent {
  readonly contact = CONTACT;
  readonly navLinks = NAV_LINKS;
  readonly year = new Date().getFullYear();
}
