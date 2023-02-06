import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeInOut } from 'src/animation';

@Component({
  selector: 'app-kid-info',
  templateUrl: './kid-info.component.html',
  styleUrls: ['./kid-info.component.scss'],
  animations: [fadeInOut]
})
export class KidInfoComponent {

  @Input('selectedKid')selectedKid: any;
  @Output('closeKid')closeKid = new EventEmitter<any>();
}
