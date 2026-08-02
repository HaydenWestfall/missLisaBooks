import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { fadeInOut } from '../../../animation';

@Component({
    selector: 'app-kid-info',
    templateUrl: './kid-info.component.html',
    styleUrls: ['./kid-info.component.scss'],
    animations: [fadeInOut],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class KidInfoComponent {

  @Input('selectedKid')selectedKid: any;
  @Output('closeKid')closeKid = new EventEmitter<any>();
}
